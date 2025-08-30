const url = "https://pokeapi.co/api/v2/pokemon/";
    
function getGen1() {
    let pokemonArray = [];

    for (let i = 1; i <= 151; i++) {
        let promise = fetch(url + i);
        promise.then((res) => {
            let jsonPromise = res.json();
            jsonPromise.then((data) => {
                //console.log(data);
                pokemonArray.push(data);
            });
        });
    }

    return (pokemonArray);
}

export default { getGen1 };