import React from 'react';
import './Notifications.css';
import Sidebar from '../SideBar';

function Notifications() {
  return (
    <div className="notifications">
      <Sidebar />
      <h2>Notificações</h2>
      <ul>
        <li>Você tem uma nova conexão.</li>
        <li>Alguém comentou no seu post.</li>
        <li>Seu drink foi curtido!</li>
      </ul>
    </div>
  );
}

export default Notifications;
