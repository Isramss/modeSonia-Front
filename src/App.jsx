import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Caftan from "./pages/Caftan";
import Contact from "./pages/Contact";
import Inscription from "./pages/Auth/Inscription";
import Connexion from "./pages/Auth/Connexion";
import Footer from "./components/Footer";
import AdminPage from "./pages/Admin/AdminPage";
import Pagenotfound from "./pages/Pagenotfound";
import PageArticle from "./components/Articles/PageProd";
import Panier from "./components/users/Panier";
import Apropos from "./pages/Apropos";
import "./App.css";

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
        <Route path="/caftan/:caftanId" element={<PageArticle />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
