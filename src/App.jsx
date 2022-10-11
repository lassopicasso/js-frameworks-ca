import "./App.css";
import Navigate from "./components/layout/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import PageDetails from "./components/Pages/PageDetails/PageDetails";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import Admin from "./components/Pages/Admin/Admin";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<PageDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <footer className="bg-light">Hello World!</footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
