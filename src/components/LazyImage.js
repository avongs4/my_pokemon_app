// LazyImage.jsx
import React, { useState } from 'react';
import './LazyImage.css';

const ERROR_IMAGE = 'https://via.placeholder.com/80?text=Error';

const LazyImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? ERROR_IMAGE : src}
      alt={alt || 'Pokemon'}
      className="pokemon-image fade-in"
      style={{
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        backgroundColor: '#f0f0f0',
      }}
      onError={() => setHasError(true)}
    />
  );
};

export default LazyImage;
