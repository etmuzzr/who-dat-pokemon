import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';

function Play() {
    return (
        <>
        <div className={styles.play}>
            {Poke.fetchRandom()}  
        </div>
        </>
    );
}

export default Play;