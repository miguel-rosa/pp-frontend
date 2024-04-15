import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Profile, { BaseView, SupportView } from './Profile';

const Routes = () => useRoutes([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: '/profile/',
        element: <BaseView/>
      },
      {
        path: '/profile/support',
        element: <SupportView/>
      },
    ]
  }
]);

export default Routes;