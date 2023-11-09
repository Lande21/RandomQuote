import React, { useState, useEffect } from 'react';
import './quotedisplay.css'; 

function Practicetwo() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, []);
    return (
        <div className="exercises">
            <h3>Here is my second practice with REST APIs</h3>
          <h1>Pokemons</h1>
          {users.map(pokemon => (
             
            <h3>{pokemon.name}</h3>
           
          
        ))}
        </div>
    );
}
export default Practicetwo;