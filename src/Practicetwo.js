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
            <h1>Fetched Pokemons</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                {pokemons.map(pokemon => (
                 <tr key={pokemon.name}>
                     <td>{pokemon.name}</td>
                     <td>{pokemon.url}</td>
                </tr>
                ))}
                </tbody>
            </table>
      
        
        </div>
    );
}
export default Practicetwo;