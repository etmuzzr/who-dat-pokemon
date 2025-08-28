import styles from './Home.module.css';

function Home() {
    return (
        <>
        <div className={styles.home}>
            <div className={styles.content}>
                <h1>Welcome to Who Dat Pokémon</h1>
                <p>This is a tiny project I've been working on to learn more about web dev. 
                    So what better way to learn it by making a simple guessing game! 😎</p>
                <p>The game involves you guessing what you think the Pokémon is from its silhouette/image.</p>
                <p>You can see which Pokémon you have guessed by viewing your Pokédex.</p>
                <p><b>NOTE: TO SAVE YOUR PROGRESS, EXPORT YOUR DATA WHEN LEAVING THE SITE, AND IMPORT WHEN YOU COME BACK.</b></p>
            </div>
            <div className={styles.content}>
                <h1>How to Play</h1>
                <list className={styles.list}>
                    <li>Navigate to the Play page</li>
                    <li>The Pokémon silhouette/image will appear, you must type your guess in the text box</li>
                    <li>If your guess is incorrect, further hints will be revealed until you use all of your remaining attempts</li>
                    <li>Eventually the Pokémon will be revealed</li>
                    <li>If you managed to correctly guess that Pokémon, your relevant Pokédex entry will be updated such that your 'caught' counter increases</li>
                    <li>Otherwise, your relevant Pokédex entry will be updated such that your 'seen' counter increases</li>
                </list>
            </div>
             <div className={styles.content}>
                <h1>Future Updates</h1>
                <p>...</p>  
            </div>
        </div>
        </>
    );
}

export default Home;