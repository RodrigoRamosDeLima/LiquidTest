// src/components/EditProfile/EditProfile.jsx
import React, { useState } from 'react';
import './EditProfile.css';
import Sidebar from '../SideBar';

function EditProfile() {
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre visualização e edição
  const [name, setName] = useState('Rodrigo Lima');
  const [bio, setBio] = useState('Apaixonado por drinks e Masterchef.');
  const [followers, setFollowers] = useState(2306);
  const [following, setFollowing] = useState(1704);
  const [posts, setPosts] = useState(29);
  const [profileId, setProfileId] = useState(1); // Definindo o ID do perfil

  const handleSave = () => {
    setIsEditing(false); // Sai do modo de edição ao salvar
    alert('Perfil atualizado com sucesso!');
  };

  const handleEdit = () => {
    setIsEditing(true); // Entra no modo de edição ao clicar em "Editar perfil"
  };

  return (
    <div className="edit-profile-page">
      <Sidebar />
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-picture">
            {/* Caminho da imagem dinâmico usando o ID do perfil */}
            <img src={`/perfil/1.jfif`} alt="Perfil" />
          </div>
          <div className="profile-info">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="profile-input"
                />
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="profile-input"
                />
                <button onClick={handleSave} className="save-button">Salvar</button>
              </>
            ) : (
              <>
                <h2 className="profile-name">{name}</h2>
                <div className="profile-stats">
                  <span><strong>{posts}</strong> publicações</span>
                  <span><strong>{followers}</strong> seguidores</span>
                  <span><strong>{following}</strong> seguindo</span>
                </div>
                <p className="profile-bio">{bio}</p>
                <button onClick={handleEdit} className="edit-button">Editar perfil</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
