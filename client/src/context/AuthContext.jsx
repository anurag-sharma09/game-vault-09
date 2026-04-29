import { createContext, useContext, useState, useEffect } from 'react';
import { userLogin as loginAPI, userRegister as registerAPI, getUserMe } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser]           = useState(null);
  const [admin, setAdmin]         = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const userToken  = localStorage.getItem('ag_user_token');
    const adminToken = localStorage.getItem('gv_admin_token');

    const restoreSession = async () => {
      if (userToken) {
        try {
          const res = await getUserMe();
          setUser(res.data.user);
        } catch {
          localStorage.removeItem('ag_user_token');
        }
      }
      if (adminToken) {
        // Admin session just set via flag
        const adminData = JSON.parse(localStorage.getItem('ag_admin_data') || 'null');
        if (adminData) setAdmin(adminData);
      }
      setAuthLoading(false);
    };

    restoreSession();
  }, []);

  const login = async (email, password) => {
    const res = await loginAPI({ email, password });
    localStorage.setItem('ag_user_token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const register = async (username, email, password) => {
    const res = await registerAPI({ username, email, password });
    localStorage.setItem('ag_user_token', res.data.token);
    setUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('ag_user_token');
    localStorage.removeItem('gv_admin_token');
    localStorage.removeItem('ag_admin_data');
    setUser(null);
    setAdmin(null);
  };

  const adminLogin = async (email, password) => {
    const { adminLogin: loginAdminAPI } = await import('../services/api');
    const res = await loginAdminAPI({ email, password });
    localStorage.setItem('gv_admin_token', res.data.token);
    localStorage.setItem('ag_admin_data', JSON.stringify(res.data.admin));
    setAdmin(res.data.admin);
    return res.data;
  };

  const refreshUser = async () => {
    try {
      const res = await getUserMe();
      setUser(res.data.user);
    } catch (_) {}
  };

  return (
    <AuthContext.Provider value={{
      user, admin, authLoading,
      isAuthenticated: !!user,
      isAdmin: !!admin,
      login, register, logout, adminLogin, refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
