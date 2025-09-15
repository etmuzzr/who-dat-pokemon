import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState} from 'react';

function Play() {

    const [revealed, setRevealed] = useState(false);
    const [randomId, setRandomId] = useState(1);

    const resultName = Poke.fetchData(randomId).name.toLowerCase()

    return (
        <>
        <div className={styles.play}>
            {Poke.fetchPokemon(randomId, false, revealed)}  
        </div>
        <input className={styles.input} type="text" placeholder="Who dat Pokemon?" onChange={(e) => {
            if (e.target.value.toLowerCase() === resultName) { //maybe add some better string matching (allow for spelling mistakes)
                setRevealed(true);
                e.target.value = "";
                e.target.disabled = true;
                //show they got it correct
                //show new pokemon
                
            }
        }}/>
        </>
    );
}

export default Play;