import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search/Search';
import NewPost from './NewPost/NewPost';
import './Sidebar.css';

function Sidebar({ addNewPost }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const searchRef = useRef(null);
  const modalRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNewPostClick = () => {
    setIsNewPostOpen(true);
  };

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsNewPostOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="menu-item" onClick={handleNotificationsClick}>
            Notificações
          </div>
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
            <NewPost addNewPost={addNewPost} closeModal={() => setIsNewPostOpen(false)} />
          </div>
        </div>
      )}

      {isNotificationsOpen && (
        <div className="notifications-dropdown" ref={notificationsRef}>
          <ul>
            <li>Você tem uma nova conexão.</li>
            <li>Alguém comentou no seu post.</li>
            <li>Seu drink foi curtido!</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
