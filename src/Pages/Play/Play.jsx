import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect, useRef} from 'react';

function Play() {

    const [randomId, setRandomId] = useState(Math.floor(Math.random() * Poke.generations[9].end) + 1);
    const [revealed, setRevealed] = useState(false);

    const chooseList = Poke.fetchAll(false, revealed);
    var currentPokemon = chooseList[randomId - 1];
    const inputRef = useRef(null);

    useEffect(() => {
        currentPokemon = chooseList[randomId - 1];
         if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [randomId])

    function matchGuess(guess) {
        if (!currentPokemon) return false;
        if (guess.search(new RegExp(currentPokemon.props.name, "i")) != -1 || 
        guess.search(new RegExp("secretskip", "i")) != -1) {
            return true;
        }
        return false;
    }

    return (
        <>

        <div className={styles.play}>
            {currentPokemon}
            <input id="input" ref={inputRef} className={styles.input} type="text" placeholder="Who Dat Pokémon?" onChange={(e) => {
            if (matchGuess(e.target.value)) {
                setRevealed(true);
                e.target.value = "";
                e.target.disabled = true;
                setTimeout(() => {
                    setRevealed(false);
                    setRandomId(Math.floor(Math.random() * Poke.generations[9].end) + 1);
                    e.target.disabled = false;
                }, 2000);
            }
        }}/> 
        </div>
        
        </>
    );
}

export default Play;