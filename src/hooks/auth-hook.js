import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../client/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('token', null);
  const [username, setUsername] = useState(null);
  const [authenticated, setAuthenticated] = useState(true);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async ({ username, password }) => {
    try {
      const token = await client.signIn(username, password);
      setToken(token);
      setUsername(username);
      setAuthenticated(true);
      localStorage.setItem('token', token);
      navigate('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setToken(null);
    setUsername(null);
    setAuthenticated(false);
    navigate('/', { replace: true });
  };

  const value = {
    token,
    username,
    authenticated,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
