import { lazy } from 'react';

import authRoutes from './authRoutes';

const Auth = lazy(() => import('~/features/Auth'));

const routes = [
  {
    path: '/',
    element: <p>Home Page</p>,
  },
  {
    path: '/auth',
    element: <Auth />,
    children: authRoutes,
  },
  {
    path: '*',
    element: <>404! Page Not Found</>,
  },
];

export default routes;
