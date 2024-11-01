import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-panel">
      <input type="text" placeholder="Pesquisar" className="search-input" />
      <div className="recent-searches">
        <h3>Recentes</h3>
        <div className="search-item">Nome do Perfil 1</div>
        <div className="search-item">Nome do Perfil 2</div>
        <div className="search-item">Nome do Perfil 3</div>
        <button className="clear-button">Apagar tudo</button>
      </div>
    </div>
  );
};

export default Search;
