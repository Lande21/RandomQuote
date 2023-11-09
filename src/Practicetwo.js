import React, { useState, useEffect } from 'react';
import './quotedisplay.css'; 

function Practicetwo() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results);//accessing the 'results' array
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <div className="exercises">
            <h3>Here is my second practice with REST APIs</h3>
            <h1>Pokemons</h1>
            {pokemons.map(pokemon => (
             
            <h3 key={pokemon.name}>{pokemon.name}</h3>
           
        ))}
        </div>
    );
}
export default Practicetwo;