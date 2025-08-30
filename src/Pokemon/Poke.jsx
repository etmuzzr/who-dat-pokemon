import Pokemon from "./Pokemon.jsx"
import {useState, useEffect} from "react";

const url = "https://pokeapi.co/api/v2/pokemon/";

function fetchPokemon(id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       async function getData() {
        setLoading(true);
        let response = await fetch(url + id);
        let json = await response.json();
        setData(json);
        setLoading(false);
       }
         
       getData();
    }, []);

    if (loading) return <Pokemon id="..." name="..."/>;

    console.log(data.types)

    return (
    <Pokemon 
    id={data.id} 
    name={data.name.charAt(0).toUpperCase() + data.name.slice(1)} 
    image={data.sprites.front_default} 
    types={data.types}
    />
    )
}

function fetchGen1() {
    let gen1 = [];
    for (let i = 1; i <= 151; i++) {
        gen1.push(fetchPokemon(i));
    }
    return gen1;
}
    
export default { fetchPokemon, fetchGen1 };