import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Caftan from "./pages/Caftan";
import Contact from "./pages/Contact";
import Inscription from "./pages/Auth/Inscription";
import Connexion from "./pages/Auth/Connexion";
import Footer from "./components/Footer";
import "./App.css";
import AdminPage from "./pages/Admin/AdminPage";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/caftan" element={<Caftan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/users" element={<AdminPage />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
