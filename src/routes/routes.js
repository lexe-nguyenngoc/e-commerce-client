import Auth from "~/features/Auth";

import authRoutes from "./authRoutes";

const routes = [
  {
    path: "/",
    element: <p>Home Page</p>,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: authRoutes,
  },
  {
    path: "*",
    element: <>404! Page Not Found</>,
  },
];

export default routes;
