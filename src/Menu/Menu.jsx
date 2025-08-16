import styles from "./Menu.module.css";
import logoImage from "./logo.png";

function Menu() {
    return (
        <div className={styles.menu}>
            <img className={styles.menuLogo} src={logoImage} alt=""></img>
            <button className={styles.menuButton}>Home</button>
            <button className={styles.menuButton}>Pokédex</button>
            <button className={styles.menuButton}>Play</button>
        </div>
    )
}

export default Menu;