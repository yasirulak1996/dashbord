"use client";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("auth") === "true"
  );
  const router = useRouter();

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      Cookies.set("auth", "true", { expires: 1 });
      setIsAuthenticated(true);
      router.push("/dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    Cookies.remove("auth");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);