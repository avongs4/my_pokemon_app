import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image"
        loading="lazy" // <-- This line adds lazy loading!
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/80?text=?';
        }}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
