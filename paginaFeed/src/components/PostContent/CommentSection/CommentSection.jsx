// CommentSection.js
import React, { useState } from 'react';
import './CommentSection.css';

function CommentSection({ comments }) {
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(comments || []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentList([...commentList, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <h4>Comentários</h4>
      <ul>
        {commentList.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Adicione um comentário"
      />
      <button onClick={handleAddComment}>Comentar</button>
    </div>
  );
}

export default CommentSection;
