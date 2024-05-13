import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Rendre le bouton visible lorsque l'utilisateur a fait défiler 400 pixels
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajouter un écouteur d'événements pour détecter le défilement de la page
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Retirer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fonction pour remonter en haut de la page lorsque le bouton est cliqué
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : "hide"}`}>
      <button className="btn_scroll" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
