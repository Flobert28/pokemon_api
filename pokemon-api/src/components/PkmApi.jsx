import { useState, useEffect } from "react";

const PkmApi = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species')
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        setPokemonList(response.results);
      })
      .catch(error => {
        console.error('Error Pokemon list:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PkmApi;