import React, { useState } from 'react';
import './EditProfile.css';
import Sidebar from '../SideBar';
import PostModal from './PostModal/PostModal'; // Importando o componente do Modal

function EditProfile() {
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre visualização e edição
  const [name, setName] = useState('Rodrigo Lima');
  const [email, setEmail] = useState('rodrigo@example.com');
  const [username, setUsername] = useState('@rodrigolima');
  const [password, setPassword] = useState('********');
  const [bio, setBio] = useState('Apaixonado por drinks e boas conversas!'); // Bio do usuário
  const [followers, setFollowers] = useState(2306);
  const [following, setFollowing] = useState(1704);
  const [posts, setPosts] = useState([ // Lista de posts
    { id: 1, user: 'Rodrigo', title: 'Caipirinha', description: 'Deliciosa caipirinha de limão', image: '/posts/1.jpg' },
    { id: 2, user: 'Rodrigo', title: 'Mojito', description: 'Refrescante mojito com hortelã', image: '/posts/2.jpg' },
    { id: 3, user: 'Rafael', title: 'Caipirinha com Maracujá', description: 'A versão tropical da caipirinha', image: '/posts/3.jpg' }
  ]);
  const [profileId, setProfileId] = useState(1); // ID do perfil

  const [selectedPost, setSelectedPost] = useState(null); // Post selecionado para o modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  const handleSave = () => {
    setIsEditing(false); // Sai do modo de edição ao salvar
    alert('Perfil atualizado com sucesso!');
  };

  const handleEdit = () => {
    setIsEditing(true); // Entra no modo de edição ao clicar em "Editar perfil"
  };

  const handleBack = () => {
    setIsEditing(false); // Volta ao perfil quando clica em "Voltar"
  };

  const openModal = (post) => {
    setSelectedPost(post); // Define o post selecionado
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  // Filtrando os posts do usuário 'Rodrigo'
  const userPosts = posts.filter(post => post.user === 'Rodrigo');

  return (
    <div className="edit-profile-page">
      <Sidebar />
      <div className="profile-content">
        {isEditing ? (
          <div className="edit-form">
            <button onClick={handleBack} className="back-button">Voltar</button>
            <h2>Editar Perfil</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label>Nome:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>@Nome de usuário:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Senha:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="profile-input"
                />
              </div>
              <div className="input-group">
                <label>Bio:</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="profile-input"
                />
              </div>
              <button onClick={handleSave} className="save-button">Salvar</button>
            </form>
          </div>
        ) : (
          <div className="profile-header">
            <div className="profile-picture">
              {/* Caminho da imagem dinâmico usando o ID do perfil */}
              <img src={`/perfil/${profileId}.jfif`} alt="Perfil" />
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{name}</h2>
              <div className="profile-stats">
                <span><strong>{userPosts.length}</strong> publicações</span>
                <span><strong>{followers}</strong> seguidores</span>
                <span><strong>{following}</strong> seguindo</span>
              </div>
              <p className="profile-bio">{bio}</p>
              <button onClick={handleEdit} className="edit-button">Editar perfil</button>
            </div>
          </div>
        )}

        {/* Seção para exibir os posts filtrados do usuário */}
        {!isEditing && (
          <div className="profile-posts">
            {userPosts.map((post) => (
              <div key={post.id} className="post-card" onClick={() => openModal(post)}>
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-info">
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal para exibir os detalhes do post */}
        <PostModal isOpen={isModalOpen} post={selectedPost} onClose={closeModal} />
      </div>
    </div>
  );
}

export default EditProfile;
