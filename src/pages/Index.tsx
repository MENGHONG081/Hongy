
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the home page since we're using a different structure
  return <Navigate to="/" replace />;
};

export default Index;
