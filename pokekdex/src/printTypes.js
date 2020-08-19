import React, { useState, useEffect } from 'react';

function ShowTypes({pokemonTypes, showNames}){
    console.log(pokemonTypes);
    return (
        <div>
            {
              pokemonTypes.map((type, i) => {
                 return <div key={i}><button onClick={() => showNames(type.type.name)}>Show more</button><span>{type.type.name}</span></div>
              })  
            }
        </div>
    )
}

export default ShowTypes;