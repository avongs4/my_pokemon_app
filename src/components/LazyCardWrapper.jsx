import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import './LazyCardWrapper.css'; // Import the CSS animation

const PokemonCard = lazy(() => import('./PokemonCard')); // Adjust path as needed

const LazyCardWrapper = ({ pokemon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [delayedVisible, setDelayedVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px',
        }
      );

      if (cardRef.current) observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const delay = index * 1000; // 1000ms delay per index
      const timer = setTimeout(() => setDelayedVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div
      ref={cardRef}
      style={{ minHeight: '120px' }}
      className={delayedVisible ? 'fade-in-card' : ''}
    >
      {delayedVisible && (
        <Suspense fallback={<div style={{ height: '120px' }}>Loading...</div>}>
          <PokemonCard pokemon={pokemon} />
        </Suspense>
      )}
    </div>
  );
};

export default LazyCardWrapper;
