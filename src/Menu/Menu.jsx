import styles from "./Menu.module.css";

function Menu() {
    return (
        <div className={styles.menu}>
            <img className="logo" src="logo.png" alt="" />
            <button className={styles.menuButton}>Home</button>
            <button className={styles.menuButton}>Pokédex</button>
            <button className={styles.menuButton}>Play</button>
        </div>
    )
}

export default Menu;