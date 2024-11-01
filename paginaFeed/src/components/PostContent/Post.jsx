// Post.js
import React, { useState } from 'react';
import './Post.css';
import CommentSection from './CommentSection/CommentSection';
import Sidebar from '../SideBar/SideBar';

function Post({ post }) {
  const [likes, setLikes] = useState(0); // Estado para contar os likes
  const [liked, setLiked] = useState(false); // Estado para marcar se o post foi curtido

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="post">
      <Sidebar />
      <h2>{post.user}</h2>
      <img src={`/posts/${post.id}.jpg`} alt="Drink" />
      <h4>{post.title}</h4>
      <p>{post.description}</p>
      <h6>Ingredientes:</h6>
      <ul>
        {post.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <p>{post.recipe}</p>
      </ul>
      <button className="edit-button">Editar</button>

      {/* Botão de like */}
      <div className="like-section">
        <button
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? '❤️' : '🤍'} Curtir
        </button>
        <span>{likes} curtidas</span>
      </div>

      {/* Seção de comentários */}
      <CommentSection comments={post.comments} />
    </div>
  );
}

export default Post;
