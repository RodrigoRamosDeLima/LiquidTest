import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  // Fecha o modal ao clicar fora do conteúdo
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h3>{content.name}</h3>
        <img src={content.image} alt={content.name} className="drink-image" />
        <a href={content.link} target="_blank" rel="noopener noreferrer">
          Ver Receita
        </a>
      </div>
    </div>
  );
};

export default Modal;
