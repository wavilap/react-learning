import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

function Explore() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    // consultar la api pokemon
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('response: ', data);
        setPokemons(data.results);
      })
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleSearch = (pokemonName) => {
    alert(pokemonName);
    // getPokemons(pokemonName);
  }
  
  return (
    <div>
      <Search
        placeholder="Busca tu pokemon.."
        onSearch={handleSearch}
      />
      
      <div>
        {pokemons.map((pokemon) => (
          <div key={pokemon.name}>
            <Link to="/">
              <h2>{pokemon.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;