import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/features/Auth/hooks';

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth.token) return <Navigate to={'/auth'} />;
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
