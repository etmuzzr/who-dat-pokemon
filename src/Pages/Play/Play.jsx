import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect, use} from 'react';

function Play() {

    const [randomId, setRandomId] = useState(Math.floor(Math.random() * Poke.generations[9].end) + 1);

    const chooseList = Poke.fetchAll(false);
    var currentPokemon = chooseList[randomId - 1];

    useEffect(() => {
        currentPokemon = chooseList[randomId - 1];
    }, [randomId])
    
    return (
        <>
        <div className={styles.play}>
            {currentPokemon}
            <input className={styles.input} type="text" placeholder="Who Dat Pokémon?" onChange={(e) => {
            if (e.target.value.toLowerCase() == "test") { //maybe add some better string matching (allow for spelling mistakes)
                setRevealed(true);
                e.target.value = "";
                e.target.disabled = true;
                setTimeout(() => {
                    setRandomId(Math.floor(Math.random() * Poke.generations[9].end) + 1);
                    setRevealed(false);
                    e.target.disabled = false;
                }, 2000);
            }
        }}/> 
        </div>
        
        </>
    );
}

export default Play;