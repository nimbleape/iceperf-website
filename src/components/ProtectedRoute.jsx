import { Navigate } from '@tanstack/react-router';
import PropTypes from 'prop-types';

import { useAuth } from '@workos-inc/authkit-react';

export const ProtectedRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (!isLoading && !user) {
    return <Navigate to='/login' />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
