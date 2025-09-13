import Pokemon from "./Pokemon.jsx"
import {useState, useEffect} from "react";

const url = "https://pokeapi.co/api/v2/pokemon/";

const generations = {
    1: {start: 1, end: 151}, 
    2: {start: 152, end: 251}, 
    3: {start: 252, end: 386}, 
    4: {start: 387, end: 493}, 
    5: {start: 494, end: 649}, 
    6: {start: 650, end: 721}, 
    7: {start: 722, end: 809}, 
    8: {start: 810, end: 905}, 
    9: {start: 906, end: 1025}};

function fetchPokemon(id, entry) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
       async function getData() {
        setLoading(true);

        try {
            let response = await fetch(url + id);
            let json = await response.json();
            setData(json);
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }
         
       getData();
    }, []);

    if (loading || error) return <Pokemon id="..." name="..."/>;

    if (entry) {
        return (
            <Pokemon.PokemonEntry 
                id={data.id} 
                name={data.name.charAt(0).toUpperCase() + data.name.slice(1)} 
                image={data.sprites.front_default} 
                types={data.types}
            />
    );
    } else {}
}

function fetchGen(genNumber) {
    let gen = [];
    for (let i = generations[genNumber].start; i <= generations[genNumber].end; i++) {
        gen.push(fetchPokemon(i));
    }

    return gen;
}

function fetchRandom() {
    const randomId = Math.floor(Math.random() * generations[9].end) + 1;
    return fetchPokemon(randomId);
}

export default { fetchPokemon, fetchGen, fetchRandom };