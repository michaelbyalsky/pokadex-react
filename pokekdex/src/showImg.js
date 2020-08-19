import React, { useState, useEffect } from 'react';

function ShowImg({pokemonImg}){
    return (
        <div>
            <img src={pokemonImg.front_default}
            onMouseOver={(e) => {
                pokemonImg.back_default && (e.currentTarget.src = pokemonImg.back_default);
              }}
              onMouseOut={(e) => {
                pokemonImg.front_default && (e.currentTarget.src = pokemonImg.front_default || '');
              }}/>
        </div>
    )
}

export default ShowImg;