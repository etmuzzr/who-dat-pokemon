import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';

function Play() {
    return (
        <>
        <div className={styles.play}>
           <div className={styles.content}>
              {Poke.fetchRandom()}
           </div>     
        </div>
        </>
    );
}

export default Play;