import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import "../App.css";

function Footer() {
  return (
    <Box className="BOX_footer">
      <Box className="FooterBox" color={"white"}>
        <div className=" Footer footer_quisommesnous">
          <h1>Qui sommes nous ?</h1>
          <p>
            ModeSonia est une entreprise tunisienne fondée en 2010, spécialisée
            dans la création de caftans traditionnels faits à la main. Notre
            passion pour l'artisanat et notre engagement envers la qualité se
            reflètent dans chaque pièce que nous créons.
          </p>
        </div>
        <div className="Footer Logo">
          <Heading>Logo</Heading>
        </div>
        <div className="Footer cotact_nav">
          <Button to="/contact">Nous Contacter</Button>
          <div className="nav_Footer">
            <Link
              as={RouterLink}
              to="/"
              p="2"
              textDecoration="none"
              color="linkHoverColor">
              Accueil
            </Link>

            <Link as={RouterLink} to="/caftan" p="2">
              Caftan
            </Link>
            <Link as={RouterLink} to="/apropos" p="2">
              À Propos
            </Link>
            <Link as={RouterLink} to="/contact" p="2">
              Nous contacter
            </Link>
          </div>
        </div>
      </Box>
      <div className="Footer">
        <Text fontSize={"12px"}>Mentions legales</Text>
      </div>
    </Box>
  );
}

export default Footer;
