import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import './HomePage.css';

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then(async (res) => {
        const results = res.data.results;

        // Fetch details for each Pokémon
        const detailedData = await Promise.all(
          results.map((pokemon) =>
            axios.get(pokemon.url).then((res) => {
              return {
                name: res.data.name,
                image: res.data.sprites.front_default || 'https://via.placeholder.com/80?text=?',
                id: res.data.id,
              };
            })
          )
        );

        setPokemonList(detailedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching Pokémon:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading Pokémon...</p>;

  return (
    <div className="home-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
