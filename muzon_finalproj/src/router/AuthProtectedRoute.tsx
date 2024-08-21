import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../context/AuthContext';
import HomePage from '../pages/HomePage';

const AuthProtectedRoute = () => {
  const { user } = useUser();

  
  if (!user) {
    // Redirect to a different page if user is not authenticated
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthProtectedRoute;
