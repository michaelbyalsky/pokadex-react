import React, { useState } from 'react';
import axios from 'axios';
import PrintPok from './PrintPok';
import ShowTypes from './printTypes';
import ShowImg from './showImg';
import ShowMore from './PoksFromSameType';


function ShowPokemon() {
    const [inputId, setPokemonInputId] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonImg, setPokemonImg] = useState([]);
    const [pokemonDataName, setPokemonDataNames] = useState([]);

        
  function searchPokemon(id0name) {
    console.log(id0name);
     axios
        .get(`http://pokeapi.co/api/v2/pokemon/${id0name}`)
        .then((response) => {
        console.log(response.data);
        console.log(response.data.types);
        setPokemonData(response.data);
        setPokemonTypes(response.data.types)        
        setPokemonImg(response.data.sprites)        
        }).catch(error => console.log(error));
    };

function showNames(type){
    axios
    .get(`http://pokeapi.co/api/v2/type/${type}`)
    .then((response) => {
    console.log(response.data.pokemon);  
    setPokemonDataNames(response.data.pokemon)
    console.log(pokemonDataName, 3)})
    .catch((error) => {
      console.log(error.message);
    });
}
   
function switchPok(name) {
    setPokemonInputId(name)
    console.log(inputId, "id");
    setPokemonDataNames([])
    searchPokemon(name)
}

  

return (
    <>
   <input value={inputId} onChange={e => setPokemonInputId(e.target.value)}/>
   <button onClick={() => searchPokemon(inputId)}>Search Pokemon</button>
   <PrintPok pokemonData={pokemonData}/>
   <ShowTypes pokemonTypes={pokemonTypes} showNames={showNames}/>
   <ShowMore pokemonDataName={pokemonDataName} switchPok={switchPok}/>
   <ShowImg pokemonImg={pokemonImg}/>
    </>
)

}
export default ShowPokemon; 