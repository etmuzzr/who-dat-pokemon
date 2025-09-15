import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect} from 'react';
import Type from '../../Pokemon/Type.jsx';

function Play() {

    const [revealed, setRevealed] = useState(false);
    const [randomId, setRandomId] = useState(Math.floor(Math.random() * Poke.generations[9].end) + 1);

    const resultData = Poke.fetchData(randomId);

    return (
        <>
        <div className={styles.play}>
            <div className={styles.wild}>
                {resultData.image && <img className={revealed ? styles.seen : styles.notseen} src={resultData.image} />}
                <p className={styles.text}>{revealed ? resultData.id : "???"}</p>
                <p className={styles.text}>{revealed ? resultData.name : "???"}</p>
                <div className={styles.types}>
                    {resultData.types && resultData.types.map(t => <Type name={t.type.name} show={revealed} />)}
                </div>
            </div>
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