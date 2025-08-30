import Poke from "../Pokemon/Poke.jsx"
import styles from "./Pokedex.module.css";
import Pagination from "../Pagination.jsx"

function Pokedex() {

    return (
        <>
        <div className={styles.pokedex}>
            <div className={styles.content}>
                <h1>Generation 1</h1>
                <div className={styles.list}>
                    {Poke.fetchGen1()}
                </div>
            </div>
        </div>
        </>
    );
}

export default Pokedex;