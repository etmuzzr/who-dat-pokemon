import styles from "./Menu.module.css";
import logoImage from "./logo.png";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className={styles.menu}>
            <img className={styles.menuLogo} src={logoImage} alt=""></img>
            <Link to="/">
                <button className={styles.menuButton}>Home</button>
            </Link>
            <Link to="/pokedex">
                <button className={styles.menuButton}>Pokédex</button>
            </Link>
            <Link to="/play">
                <button className={styles.menuButton}>Play</button>
            </Link>
        </div>
    )
}

export default Menu;