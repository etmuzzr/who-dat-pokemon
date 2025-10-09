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
                <p><b>NOTE: THIS SITE USES COOKIES TO SAVE YOUR PROGRESS.</b></p>
            </div>
            <div className={styles.content}>
                <h1>How to Play</h1>
                <list className={styles.list}>
                    <li>Navigate to the Play page</li>
                    <li>The Pokémon silhouette/image will appear, you must type your guess in the text box</li>
                    <li>If you guess correctly, the Pokémon will be revealed and added to your Pokédex</li>
                </list>
            </div>
             <div className={styles.content}>
                <h1>Future Updates</h1>
                <p>Hint system to provide clues</p>
            </div>
        </div>
        </>
    );
}

export default Home;