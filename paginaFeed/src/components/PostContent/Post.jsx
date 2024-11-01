import React, { useState } from 'react';
import './Post.css';
import CommentSection from './CommentSection/CommentSection';
import Sidebar from '../SideBar/SideBar';

function Post({ post, currentUser }) {
  const [likes, setLikes] = useState(post.likes || 0); // Inicializa com curtidas do post
  const [liked, setLiked] = useState(post.likedBy?.includes(currentUser) || false);
  const [comments, setComments] = useState(post.comments || []); // Inicializa com comentários do post

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const addComment = (comment) => {
    setComments([...comments, { user: currentUser, text: comment }]);
  };

  return (
    <div className="post">
      <Sidebar />
      <h2>{post.user}</h2>
      <img src={`/posts/${post.id}.jpg`} alt="Drink" />
      
      <div className="like-section">
        <button
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? '💜' : '🤍'} 
        </button>
        <span>{likes}</span>
        <button className="edit-button">Editar</button>
      </div>
      
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      
      <h6>Ingredientes:</h6>
      <ul>
        {post.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{post.recipe}</p>

      {/* Renderizar seção de comentários */}
      <CommentSection comments={comments} onAddComment={addComment} />
    </div>
  );
}

export default Post;
