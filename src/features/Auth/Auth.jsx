import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks";

const Auth = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) return;

    navigate("/");
  }, [auth, navigate]);

  return <Outlet />;
};

export default Auth;
