// PokemonCard.jsx
import React from 'react';
import LazyImage from './LazyImage'; // Ensure the path is correct
import './PokemonCard.css'; // Ensure this CSS file exists and has your styles

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <LazyImage
        src={pokemon.image} // This should be the URL of the Pokemon image
        alt={pokemon.name}  // This should be the name of the Pokemon
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;