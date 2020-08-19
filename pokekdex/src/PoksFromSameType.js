import React, { useState, useEffect } from 'react';

function ShowMore({pokemonDataName, switchPok}){
console.log(pokemonDataName, 6);
    if (!pokemonDataName) {
        return null
    }

    return (
        <div>
            {
              pokemonDataName.map((item, i) => {             
                 return <div key={i}><button onClick={() => switchPok(item.pokemon.name)}>Show Me</button><span>{item.pokemon.name}</span></div>
              })  
            }
        </div>
    )
}

export default ShowMore;