import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth-hook';

export const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth();
  if (!authenticated) {
    // user is not authenticated
    return <Navigate to='/' />;
  }
  return children;
};
