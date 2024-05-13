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
import SuccessPayment from "./components/Payment/SuccessPayment";
import ErrorPayment from "./components/Payment/ErrorPayment";
import Panier from "./components/users/Panier";
import Apropos from "./pages/Apropos";
import Profil from "./pages/Profil";

import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/caftan" element={<Caftan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/users" element={<AdminPage />} />
        <Route path="/caftan/:caftanId/add" element={<PageArticle />} />
        <Route path="/panier/:userId" element={<Panier />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/profil/:userId" element={<Profil />} />
        <Route path="/panier/success" element={<SuccessPayment />} />
        <Route path="/panier/erreur-paiement" element={<ErrorPayment />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
