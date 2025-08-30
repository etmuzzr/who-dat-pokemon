import React from "react";
import styles from "./DexToolbar.module.css";

function DexToolbar (props) {
    return (
        <div className={styles.generations}>
            {props.generations.map(genNumber => (
                <button onClick={() => props.scrollToGeneration(genNumber)} className={styles.generation}>
                    Gen {genNumber}
                </button>
            ))}
        </div>
    )
}

export default DexToolbar