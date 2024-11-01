// src/components/CommentSection/CommentSection.js
import React, { useState } from 'react';
import './CommentSection.css';

function CommentSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment); // Passa o novo comentário para o Post
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      {/* <h4>Comentários</h4> */}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.user}: </strong>
            {comment.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Adicione um comentário..."
      />
      <button onClick={handleAddComment}>Comentar</button>
    </div>
  );
}

export default CommentSection;
