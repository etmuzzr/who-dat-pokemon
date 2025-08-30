import styles from "./Pokemon.module.css"
import {useState, useEffect} from "react";
import Type from "./Type.jsx"

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
            <div className={styles.types}>
                {props.types && props.types.map(t => <Type name={t.type.name} show={caught} />)} 
            </div>
            <p className={styles.text}>Seen: {seen ? "Yes" : "No"}</p>
            <p className={styles.text}>Caught: {caught ? "Yes" : "No"}</p>
        </div>    
    )
}

export default Pokemon;