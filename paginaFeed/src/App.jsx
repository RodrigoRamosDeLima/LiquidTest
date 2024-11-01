// src/App.jsx
import React from 'react';
import Sidebar from './components/SideBar/SideBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        
        {/* O conteúdo principal será gerido pelo React Router */}
      </div>
    </div>
  );
}

export default App;
