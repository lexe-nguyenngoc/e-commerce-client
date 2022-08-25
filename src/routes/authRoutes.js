import SignIn from "~/features/Auth/pages/SignIn";
import SignUp from "~/features/Auth/pages/SignUp";

const authRoutes = [
  {
    index: true,
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
];

export default authRoutes;
