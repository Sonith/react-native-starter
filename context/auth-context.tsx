import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Role = 'admin' | 'user';

type AuthContextType = {
  isLoggedIn: boolean;
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
  toggleRole: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<Role>('user');

  const login = (newRole: Role) => {
    setIsLoggedIn(true);
    setRole(newRole);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole('user');
  };

  const toggleRole = () => {
    setRole((prev) => (prev === 'admin' ? 'user' : 'admin'));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
