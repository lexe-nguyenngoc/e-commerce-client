import { Navigate } from "react-router-dom";

import Auth from "~/features/Auth";
import SignIn from "~/features/Auth/pages/SignIn";
import SignUp from "~/features/Auth/pages/SignUp";

import MainLayout, { AuthLayout } from "~/layouts";

import PrivateRoute from "./PrivateRoute";

const routes = [
  {
    path: "/",
    element: <Navigate to="/shopping" replace={true} />,
  },
  {
    path: "/shopping",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <p>Home Page</p>,
      },
    ],
  },
  {
    path: "/me",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <p>My information</p>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Auth>
        <AuthLayout />
      </Auth>
    ),
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <>404! Page Not Found</>,
  },
];

export default routes;
