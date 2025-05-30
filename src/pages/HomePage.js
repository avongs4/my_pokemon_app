import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import LazyCardWrapper from '../components/LazyCardWrapper';

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // 🆕 search input

  useEffect(() => {
    let isMounted = true;

    const fetchPokemon = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
        const results = res.data.results;

        const detailedData = await Promise.all(
          results.map(async (pokemon) => {
            try {
              const details = await axios.get(pokemon.url);
              const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.data.id}.png`;
              return {
                name: details.data.name.charAt(0).toUpperCase() + details.data.name.slice(1),
                image: imageUrl,
                id: details.data.id,
              };
            } catch {
              return {
                name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                image: 'https://via.placeholder.com/80?text=Error',
                id: null,
              };
            }
          })
        );

        if (isMounted) {
          setPokemonList(detailedData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load Pokémon. Please try again later.');
          setLoading(false);
        }
      }
    };

    fetchPokemon();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoadMore = () => setDisplayCount((prev) => prev + 20);

  // 🧠 Filter based on search input
  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedList = filteredList.slice(0, displayCount);

  if (loading) return <p className="loading">Loading Pokémon...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="home-container">
      <h1>Pokémon List</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="pokemon-grid">
        {displayedList.length > 0 ? (
          displayedList.map((pokemon, index) => (
            <LazyCardWrapper key={pokemon.id || pokemon.name} pokemon={pokemon} index={index} />
          ))
        ) : (
          <p>No Pokémon found.</p>
        )}
      </div>

      {/* 📦 Load More */}
      {!searchQuery && displayedList.length < filteredList.length && (
        <div className="load-more-wrapper">
          <button onClick={handleLoadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
