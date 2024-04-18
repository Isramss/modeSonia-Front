import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import Panier from "./users/Panier";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} bg="#DFCBB7">
      <Link as={RouterLink} to="/" color={"black"}>
        ModeSonia
      </Link>
      {/* partie menu burger => responsive mobile */}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} /> {/* Affiche les liens (accueil ..) */}
    </NavBarContainer>
  );
};

{
  /* Permet d'afficher l'icon X du menu burger  */
}
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

{
  /* Permet d'afficher l'icon burger du menu burger  */
}
const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  {
    // Si l'icône X s'affiche, alors le menu est ouvert, sinon l'icône burger est affichée et le menu est fermé.
  }
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  // MenuItem estun composant qu'on rappel plus bas. Ce composant permet d'evter de re mettre link et text pour chaque lien du Menu.
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const navigate = useNavigate();
  // useNaviagate() => permet de rediriger au clique vers une autres URL (pages) sans avoir a passer par Link
  const userData = JSON.parse(sessionStorage.getItem("user"));
  // la ligne userData => permet de stocker les données dans la valeur userData, grâce à la clé "user".
  // const userDataName = userData ? userData.user.name.first : "";
  // userDataEmail => Si il y a les données de userData alors tu m'affiche le nom (tout en rentrant dans le model user puis name puis first) sinon tu ne m'affiche rien.
  const isAdmin = userData ? userData.userData.isAdmin : false;

  console.log(isAdmin);

  const handleLogout = async () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  // handleLogout => est une fonction à mettre dans un bouton elle permet lors du click de supprimer l'element stocké(cela montre que l'user est deconnecté) et d'etre rediriger avec navigate vers une autre URL.

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      className="BoxFormInscription">
      <Stack
        spacing={{ base: 4, md: 5 }}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}>
        <MenuItem to="/">Accueil</MenuItem>
        <MenuItem to="/caftan"> Caftan </MenuItem>
        <MenuItem to="/apropos">À Propos</MenuItem>

        {isAdmin === false ? (
          <MenuItem to="/contact">Nous contacter </MenuItem>
        ) : null}
        {isAdmin === true ? <MenuItem to="/users">Users </MenuItem> : null}

        {userData ? (
          <>
            {isAdmin === false ? (
              <Button
                as={RouterLink}
                to={`/panier/${userData.user._id}`}
                bg={"none"}>
                <FaBagShopping />
              </Button>
            ) : null}

            <MenuItem to={`/profil/${userData._id}`}>
              {userData.userData.name.first}{" "}
            </MenuItem>

            <Button
              onClick={handleLogout}
              size="sm"
              rounded="md"
              color={"white"}
              bg={"black"}
              _hover={{
                bg: "white",
                color: "black",
              }}>
              Deconnexion
            </Button>
          </>
        ) : (
          <>
            <MenuItem to="/inscription">Inscription </MenuItem>

            <Button
              as={RouterLink}
              to="/connexion"
              size="sm"
              rounded="md"
              color={"white"}
              bg={"black"}
              _hover={{
                bg: "white",
                color: "black",
              }}>
              Connexion
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}>
      {children}
    </Flex>
  );
};

export default NavBar;
