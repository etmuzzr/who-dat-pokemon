import styles from "./Pokemon.module.css"
import {useState, useEffect} from "react";
import Type from "./Type.jsx"
import { useCookies } from 'react-cookie';

function Pokemon (props) {

    //pokedex entry view
    
    if (props.fullDisplay) {
        
        const [seen, setSeen] = useState(false);
        const [caught, setCaught] = useState(false);
        const [cookies, setCookie] = useCookies([props.id + "seen", props.id + "caught"]);

        useEffect(() => {
            //set seen/caught here based off cookies
            const seenCookie = cookies[props.id + "seen"];
            const caughtCookie = cookies[props.id + "caught"];
            if (seenCookie) setSeen(true);
            if (caughtCookie) setCaught(true);
        }, [cookies]);

        return (
            <div className={styles.entry}>
                {props.image && <img className={seen ? styles.seen : styles.notseen} src={props.image} />}
                <p className={styles.text}>{props.id}</p>
                <p className={styles.text}>{caught ? props.name : "???"}</p>
                <div className={styles.types}>
                    {props.types && props.types.map(t => <Type name={t.type.name} show={seen} />)} 
                </div>
                <p className={styles.text}>Seen: {seen ? "Yes" : "No"}</p>
                <p className={styles.text}>Caught: {caught ? "Yes" : "No"}</p>
            </div> 
        )   
    }

    //game view

    return (
        <>
        <div className={styles.wild}>
            {props.image && <img className={props.revealed ? styles.seen : styles.notseen} src={props.image} />}
            <p className={styles.text}>{props.revealed ? props.id : "???"}</p>
            <p className={styles.text}>{props.revealed ? props.name : "???"}</p>
            <div className={styles.types}>
                {props.types && props.types.map(t => <Type name={t.type.name} show={props.revealed} />)} 
            </div>
        </div>
        </>
    );
}

export default Pokemon;