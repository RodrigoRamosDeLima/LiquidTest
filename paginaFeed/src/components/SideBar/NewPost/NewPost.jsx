import React, { useState } from 'react';
import './NewPost.css';

const NewPost = ({ addNewPost, closeModal }) => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState('');
  const [recipe, setRecipe] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRecipeChange = (event) => {
    setRecipe(event.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient(''); // Limpar o campo após adicionar
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      user: 'UsuárioAtual', // Simulação do usuário logado
      title,
      description,
      ingredients,
      recipe,
      likes: 0,
      comments: [],
      image,
    };

    addNewPost(newPost); // Adiciona o post ao feed
    closeModal(); // Fecha o modal
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setIngredient('');
    setIngredients([]);
    setDescription('');
    setRecipe('');
    setImage(null);
  };

  return (
    <div className="new-post">
      <h2>Nova Publicação</h2>
      <form onSubmit={handleSubmit}>
        <label>Título Drink:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Digite o título do drink"
        />

        <label>Ingrediente:</label>
        <input
          type="text"
          value={ingredient}
          onChange={handleIngredientChange}
          placeholder="Adicione um ingrediente"
        />
        
        <button type="button" className="add-ingredient-button" onClick={handleAddIngredient}>
          Novo Ingrediente
        </button>
        
        <ul>
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        <label>Descrição:</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descreva o drink"
        />

        <label>Modo de Preparo:</label>
        <textarea
          value={recipe}
          onChange={handleRecipeChange}
          placeholder="Modo de preparo"
        />

        <label>Imagem:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default NewPost;
