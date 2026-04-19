import { createContext, useContext, useState, useEffect } from 'react';
import { adminLogin as loginAPI, getAdminMe } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin]       = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    const token = localStorage.getItem('gv_admin_token');
    if (token) {
      getAdminMe()
        .then((res) => setAdmin(res.data.admin))
        .catch(() => localStorage.removeItem('gv_admin_token'))
        .finally(() => setAuthLoading(false));
    } else {
      setAuthLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await loginAPI({ email, password });
    localStorage.setItem('gv_admin_token', res.data.token);
    setAdmin(res.data.admin);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('gv_admin_token');
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, authLoading, isAuthenticated: !!admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
