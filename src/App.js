import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Check if user exists
  return user ? children : <Navigate to="/login" />;
};

// ✅ Function to hide Navbar on specific routes
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = ["/signup", "/login"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
