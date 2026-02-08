import { createContext, useContext, useState, useCallback } from "react";
import { DUMMY_USERS } from "../data/dummyData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("labour-booking-user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback((email, password) => {
    const found = DUMMY_USERS.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      const userData = {
        email: found.email,
        name: found.name,
        role: found.role,
      };
      setUser(userData);
      localStorage.setItem("labour-booking-user", JSON.stringify(userData));
      return { success: true, role: found.role };
    }
    return { success: false, role: null };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("labour-booking-user");
  }, []);

  const register = useCallback((name, email, password, role) => {
    const userData = { name, email, role };
    setUser(userData);
    localStorage.setItem("labour-booking-user", JSON.stringify(userData));
    return { success: true, role };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
