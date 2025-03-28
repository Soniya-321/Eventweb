import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const navigate = useNavigate();

  const login = (email, password) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user in localStorage
    navigate("/home");
  };

  const signup = (email) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/home");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
