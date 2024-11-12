import React, { useState } from 'react';
import './Post.css';
import CommentSection from './CommentSection/CommentSection';

function Post({ post, currentUser, updatePost }) {
  const [likes, setLikes] = useState(post.likes || 0); // Inicializa com curtidas do post
  const [liked, setLiked] = useState(post.likedBy?.includes(currentUser) || false);
  const [comments, setComments] = useState(post.comments || []); // Inicializa com comentários do post
  const [isEditing, setIsEditing] = useState(false); // Para controlar o modo de edição
  const [editedPost, setEditedPost] = useState({ ...post }); // Estado para armazenar as edições

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

  const handleEditClick = () => {
    setIsEditing(true); // Habilita o modo de edição
  };

  const handleSaveClick = () => {
    updatePost(editedPost); // Atualiza o post com as alterações
    setIsEditing(false); // Desabilita o modo de edição
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Desabilita o modo de edição sem salvar
    setEditedPost({ ...post }); // Restaura o post original
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  return (
    <div className="post">
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
        
        {/* Só exibe o botão de "Editar" se o post for do usuário atual */}
        {currentUser === post.user && (
          <button className="edit-button" onClick={handleEditClick}>
            Editar
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleInputChange}
            placeholder="Título do drink"
          />
          <textarea
            name="description"
            value={editedPost.description}
            onChange={handleInputChange}
            placeholder="Descrição"
          />
          <textarea
            name="recipe"
            value={editedPost.recipe}
            onChange={handleInputChange}
            placeholder="Modo de preparo"
          />
          <div>
            <h6>Ingredientes:</h6>
            <ul>
              {editedPost.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => {
                      const updatedIngredients = [...editedPost.ingredients];
                      updatedIngredients[index] = e.target.value;
                      setEditedPost({ ...editedPost, ingredients: updatedIngredients });
                    }}
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setEditedPost({
                  ...editedPost,
                  ingredients: [...editedPost.ingredients, '']
                });
              }}
            >
              Adicionar Ingrediente
            </button>
          </div>
          <button onClick={handleSaveClick}>Salvar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </div>
      ) : (
        <>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
          <h6>Ingredientes:</h6>
          <ul>
            {post.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{post.recipe}</p>
        </>
      )}

      {/* Renderizar seção de comentários */}
      <CommentSection comments={comments} onAddComment={addComment} />
    </div>
  );
}

export default Post;
