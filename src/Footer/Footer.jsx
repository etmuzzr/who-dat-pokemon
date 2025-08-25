import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <br />
            Pokémon are trademarks of Nintendo.
            <br />
            © 2025 Who Dat Pokémon?
            <br />
            All rights reserved.
            <br />
            Created by <a className={styles.profileLink} href="https://github.com/etmuzzr" target="_blank">etmuzzr</a>
        </footer>
    )
};

export default Footer;