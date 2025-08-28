import styles from "./Menu.module.css";
import logoImage from "./logo.png";
import { Link } from "react-router-dom";

import React, {useState} from "react";

function Menu() {

    const [homeOpen, setHomeOpen] = useState(true);
    const [pokedexOpen, setPokedexOpen] = useState(false);
    const [playOpen, setPlayOpen] = useState(false);

    const handleClick = (buttonClicked) => {
        setHomeOpen(buttonClicked == "home" ? true : false);
        setPokedexOpen(buttonClicked == "pokedex" ? true : false);
        setPlayOpen(buttonClicked == "play" ? true : false);
    };

    return (
        <div className={styles.menu}>
            <img className={styles.menuLogo} src={logoImage} alt=""></img>
            <Link to="/">
                <button onClick={() => handleClick("home")} className={homeOpen ? styles.menuButtonActive : styles.menuButton}>Home</button>
            </Link>
            <Link to="/pokedex">
                <button onClick={() => handleClick("pokedex")} className={pokedexOpen ? styles.menuButtonActive : styles.menuButton}>Pokédex</button>
            </Link>
            <Link to="/play">
                <button onClick={() => handleClick("play")} className={playOpen ? styles.menuButtonActive : styles.menuButton}>Play</button>
            </Link>
        </div>
    )
}

export default Menu;