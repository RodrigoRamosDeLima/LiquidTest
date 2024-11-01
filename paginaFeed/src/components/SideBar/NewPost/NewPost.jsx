import React, { useState } from 'react';
import './NewPost.css';

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // A lógica para enviar o post vai aqui
    console.log("Imagem:", image);
    console.log("Descrição:", description);
  };

  return (
    <div className="new-post">
      <h2>Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Pré-visualização" className="image-preview" />}
        <textarea
          placeholder="Escreva uma descrição..."
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default NewPost;
