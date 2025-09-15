import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect} from 'react';
import Type from '../../Pokemon/Type.jsx';

function Play() {

    const [revealed, setRevealed] = useState(false);
    const [randomId, setRandomId] = useState(Math.floor(Math.random() * Poke.generations[9].end) + 1);

    return (
        <>
        <div className={styles.play}>
            
            
            <input className={styles.input} type="text" placeholder="Who dat Pokemon?" onChange={(e) => {
            if (e.target.value.toLowerCase() === resultData.name.toLowerCase()) { //maybe add some better string matching (allow for spelling mistakes)
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