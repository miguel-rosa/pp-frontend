import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const Routes = () => useRoutes([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  }
]);

export default Routes;