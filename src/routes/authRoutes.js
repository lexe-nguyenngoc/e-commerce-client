import SignIn from "~/features/Auth/pages/SignIn";
import SignUp from "~/features/Auth/pages/SignUp";
import { AuthLayout } from "~/layouts";

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
    path: "signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
];

export default authRoutes;
