import React from 'react';
import './PostModal.css';

function PostModal({ isOpen, post, onClose }) {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  return (
    <div className="post-modal-overlay" onClick={onClose}>
      <div className="post-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>X</button>
        <div className="modal-content">
          <img src={post.image} alt={post.title} className="modal-image" />
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <h3>receita</h3>
          <h3>descrição</h3>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
