import React, { useState } from "react";
import Poke from "../Pokemon/Poke.jsx"
import styles from "./Pokedex.module.css";
import DexToolbar from "../DexToolbar.jsx";



function Pokedex() {

    const generations = [];
    
    for (let i = 1; i <= 9; i++) {
        generations.push(i);
    }

    const scrollToGeneration = (genNumber) => {
        const element = document.getElementById("gen" + genNumber);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
        <div className={styles.pokedex}>
            <div className={styles.content}>
                <h1>Generations</h1>
                <DexToolbar scrollToGeneration={scrollToGeneration} generations={generations} />
            </div>
            {
                generations.map(genNumber => (
                    <div id={"gen" + genNumber} className={styles.content}>
                        <h1>Generation {genNumber}</h1>
                        <div className={styles.list}>
                            {Poke.fetchGen(genNumber)}
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Pokedex;