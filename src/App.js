// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetail from './pages/PokemonDetail';
import NotFound from './pages/NotFound'; // 👈 Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<NotFound />} /> {/* 👈 Catch-all 404 route */}
      </Routes>
    </Router>
  );
}

export default App;
