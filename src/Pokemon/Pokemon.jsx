import styles from "./Pokemon.module.css"

function Pokemon (props) {
    return (
        <div className={styles.entry}>
            {props.image && <img className={styles.image} src={props.image} />}
            <p className={styles.text}>{props.id}</p>
            <p className={styles.text}>{props.name}</p>
            <p className={styles.text}>{props.type}</p>
        </div>
    )
}

export default Pokemon;