import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Button, Text, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");

  //   const userData = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Box
      as="nav"
      p="4"
      bg="#DFCBB7"
      color="black"
      className="BoxFormInscription">
      <Flex align="center" justify="space-between">
        <Heading as="h1" align="center" fontSize="x2">
          <Link as={RouterLink} to="/" p="4">
            Logo
          </Link>
          {/* <img src="" alt="" /> */}
        </Heading>

        {/* Partie navigation */}

        <Flex>
          <Link
            as={RouterLink}
            to="/"
            p="4"
            textDecoration="none"
            color="linkHoverColor">
            Accueil
          </Link>
          <Link as={RouterLink} to="/caftan" p="4">
            Caftan
          </Link>
          <Link as={RouterLink} to="/apropos" p="4">
            À Propos
          </Link>
          <Link as={RouterLink} to="/contact" p="4">
            Nous contacter
          </Link>
          {/* User a mettre que pour l'admin */}

          {/* <Link as={RouterLink} to="/users" p="4">
            Users
          </Link> */}
        </Flex>

        <Flex align="center">
          <Link as={RouterLink} to="/inscription" p="4">
            Inscription
          </Link>

          {userData ? (
            <>
              {/* User a mettre que pour l'admin */}

              <Link as={RouterLink} to="/users" p="4">
                Users
              </Link>
              <Text mr={4}>{userData.email}</Text>
              <Button onClick={handleLogout} size="xs">
                Deconnexion
              </Button>
            </>
          ) : (
            <Button as={RouterLink} to="/connexion" size="xs">
              Connexion
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
