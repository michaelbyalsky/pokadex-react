import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PrintPok({pokemonData}) {
            return (
               <div>
                    <div>Pokemon Height: {pokemonData.name}</div>
                    <div>Pokemon Name:  {pokemonData.height}</div> 
                    <div>Pokemon Height: {pokemonData.weight}</div>
               </div>
                )
                
            };
export default PrintPok;

