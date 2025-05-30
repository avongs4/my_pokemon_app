// PokemonCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage'; // Ensure the path is correct
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (pokemon.id) {
      navigate(`/pokemon/${pokemon.id}`);
    }
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <LazyImage
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
