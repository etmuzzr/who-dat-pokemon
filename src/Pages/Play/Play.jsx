import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect} from 'react';

function Play() {

    const [randomId, setRandomId] = useState(Math.floor(Math.random() * Poke.generations[9].end) + 1);
    const [revealed, setRevealed] = useState(false);

    const chooseList = Poke.fetchAll(false, revealed);
    var currentPokemon = chooseList[randomId - 1];

    useEffect(() => {
        currentPokemon = chooseList[randomId - 1];
    }, [randomId])
    
    return (
        <>
        <div className={styles.play}>
            {currentPokemon}
            <input className={styles.input} type="text" placeholder="Who Dat Pokémon?" onChange={(e) => {
            if (e.target.value.toLowerCase() == currentPokemon.props.name.toLowerCase() || e.target.value.toLowerCase() == "secret skip") { //maybe add some better string matching (allow for spelling mistakes)
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