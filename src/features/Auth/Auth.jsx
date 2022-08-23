import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks";

const Auth = ({ children }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) return;

    console.log("navigate");

    navigate("/");
  }, [auth, navigate]);

  return children;
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
