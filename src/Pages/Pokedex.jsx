import React from "react";
import Poke from "../Pokemon/Poke.jsx"
import styles from "./Pokedex.module.css";

function Pokedex() {

    const gen1 = Poke.getGen1()
    console.log(gen1)

    return (
        <>
        <div className={styles.pokedex}>
            <div className={styles.content}>
                <h1>Generation 1</h1>
            </div>
        </div>
        </>
    );
}

export default Pokedex;