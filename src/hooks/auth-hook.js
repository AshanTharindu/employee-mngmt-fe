import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../client/client';
import { statusActions } from '../store/status-slice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('token', null);
  const [username, setUsername] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setAuthenticated(true);
    }
  }, [dispatch]);

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
      dispatch(
        statusActions.failedRequset({
          statusMsg: err.response.data.msg,
        })
      );
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
