import { lazy } from 'react';
import { AuthLayout } from '~/layouts';

const SignIn = lazy(() => import('~/features/Auth/pages/SignIn'));
const SignUp = lazy(() => import('~/features/Auth/pages/SignUp'));

const authRoutes = [
  {
    index: true,
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    path: 'signup',
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
];

export default authRoutes;
