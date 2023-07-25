import Profile from './profile/Profile';
import Mission from './missions/Mission';
import Rockets from './rockets/Rockets';

const routes = [
  {
    id: 1,
    path: '/profile',
    element: <Profile />,
  },
  {
    id: 2,
    path: '/missions',
    element: <Mission />,
  },
  {
    id: 3,
    path: '/rockets',
    element: <Rockets />,
  },
];

export default routes;
