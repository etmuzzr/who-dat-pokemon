import styles from './Play.module.css';
import Poke from '../../Pokemon/Poke.jsx';
import {useState, useEffect, useRef} from 'react';
import { useCookies } from 'react-cookie';

function Play() {

    const [chooseRange, setChooseRange] = useState([1, Poke.generations[9].end]);
    const [randomId, setRandomId] = useState(Math.floor(Math.random() * chooseRange[1]) + chooseRange[0]);
    const [revealed, setRevealed] = useState(false);
    const [cookies, setCookie] = useCookies([randomId + "seen", randomId + "caught"]);
    const [gamemode, setGamemode] = useState("classic");

    var chooseList = Poke.fetchAll(false, revealed);
    var currentPokemon = chooseList[randomId - 1];

    const inputRef = useRef(null);

    useEffect(() => {
        setCookie(randomId + "seen", "true", { path: '/' });
        currentPokemon = chooseList[randomId - 1];
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [randomId])

    useEffect(() => {
        if (gamemode == "classic") {
            setChooseRange([1, Poke.generations[9].end]);
        } else {
            const gen = parseInt(gamemode.replace("gen", "")); // get gen number
            console.log(gen)
            setChooseRange([Poke.generations[gen].start, Poke.generations[gen].end]);
        }
        getNew();

    }, [gamemode])

    function matchGuess(guess) {
        if (!currentPokemon) return false;
        if (guess.search(new RegExp(currentPokemon.props.name, "i")) != -1) {
            setCookie(randomId + "caught", "true", { path: '/' });
            return true;
        }
        return false;
    }

    function getNew(e) {
        if (revealed) return;
        setRevealed(true);
        if (e) {
            e.target.value = "";
            e.target.disabled = true;
        }
        setTimeout(() => {
            setRevealed(false);
            setRandomId(Math.floor(Math.random() * chooseRange[1]) + chooseRange[0]);
            if (e) {
                e.target.disabled = false;
            }
        }, 2000);
    }

    return (
        <div className={styles.play}>
            <select value={gamemode} onChange={(e) => setGamemode(e.target.value)} className={styles.select}>
                <option value="classic">Classic</option>
                {Object.keys(Poke.generations).map((gen) => (
                    <option key={gen} value={"gen" + gen}>Generation {gen}</option>
                ))}
            </select>
            {currentPokemon}
            <input id="input" ref={inputRef} className={styles.input} type="text" placeholder="Who Dat Pokémon?" onChange={(e) => {
            if (matchGuess(e.target.value)) {
                getNew(e);
            }
        }}/>
        <button id="skip" className={styles.skipButton} onClick={() => {
            getNew();
        }}>Skip</button> 
        </div>
    );
}

export default Play;