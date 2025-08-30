import styles from "./Pokemon.module.css"
import {useState, useEffect} from "react";

function Pokemon (props) {
    const [seen, setSeen] = useState(false);
    const [caught, setCaught] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <div className={styles.entry}>
            {props.image && <img className={styles.image} src={props.image} />}
            <p className={styles.text}>{props.id}</p>
            <p className={styles.text}>{caught ? props.name : "???"}</p>
            <p className={styles.text}>Seen: {seen ? "Yes" : "No"}</p>
            <p className={styles.text}>Caught: {caught ? "Yes" : "No"}</p>
        </div>
    )
}

export default Pokemon;