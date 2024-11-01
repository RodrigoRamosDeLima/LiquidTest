// src/router/routes.jsx
import { createBrowserRouter } from 'react-router-dom';

import Feed from '../components/Feed/Feed';
import Notifications from '../components/SideBar/Notifications/Notifications';
import Explore from '../components/SideBar/Explore/Explore';
import EditProfile from '../components/SideBar/EditProfile/EditProfile';
import BarBot from '../components/SideBar/BarBot/BarBot';

const router = createBrowserRouter([
  { path: '/', element: <Feed /> },
  { path: '/my-bar', element: <BarBot /> },
  { path: '/explore', element: <Explore /> },
  { path: '/notifications', element: <Notifications /> },
  { path: '/profile', element: <EditProfile /> },
]);

export default router;
