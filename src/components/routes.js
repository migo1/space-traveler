import Profile from './profile/Profile';
import Mission from './missions/Mission';
import Rocket from './rockets/Rocket';

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
    element: <Rocket />,
  },
];

export default routes;
