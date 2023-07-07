import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { accessToken } = useAuthContext();
  return accessToken ? <>{ children }</> : <Navigate to="/login" />;
};

export default PrivateRoute;
