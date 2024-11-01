import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search/Search';
import NewPost from './NewPost/NewPost'; // Importa o componente de criação de posts
import './Sidebar.css';

function Sidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const searchRef = useRef(null);
  const modalRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNewPostClick = () => {
    setIsNewPostOpen(true);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsNewPostOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, modalRef]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src='./png/liquidTransp.png' alt="logo" className="profile-pic" />
      </div>
      <nav>
        <div className="menu">
          <NavLink to="/" exact className="menu-item" activeClassName="active">
            Feed
          </NavLink>
          <NavLink to="/meuBar" className="menu-item" activeClassName="active">
            Meu Bar
          </NavLink>
          <NavLink to="/explorar" className="menu-item" activeClassName="active">
            Explorar
          </NavLink>
          <NavLink to="/notificações" className="menu-item" activeClassName="active">
            Notificações
          </NavLink>
          <NavLink to="/perfil" className="menu-item" activeClassName="active">
            Perfil
          </NavLink>
          <div className="menu-item" onClick={handleSearchClick}>
            Pesquisa
          </div>
          <div className="menu-item" onClick={handleNewPostClick}>
            Nova Postagem
          </div>
        </div>
      </nav>

      {isSearchOpen && <div ref={searchRef}><Search /></div>}

      {isNewPostOpen && (
        <div className="modal-background">
          <div className="modal-content" ref={modalRef}>
            <NewPost />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
