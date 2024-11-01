import React, { useState } from 'react';
import './EditProfile.css';
import Sidebar from '../SideBar';

function EditProfile() {
  const [name, setName] = useState('Rodrigo');
  const [bio, setBio] = useState('Apaixonado por drinks e Masterchef.');

  const handleSave = () => {
    // Lógica para salvar os dados
    alert('Perfil atualizado com sucesso!');
  };

  return (
    
    <div className="edit-profile">
      <Sidebar />
      <h2>Editar Perfil</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Bio:</label>
        <textarea 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
        />
      </div>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}

export default EditProfile;
