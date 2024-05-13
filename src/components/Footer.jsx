import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const handleLogout = async () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Box
      p={{ base: 3, md: 0 }}
      marginInline="auto"
      bg={"black"}
      color={"white"}>
      <Box maxW="5xl" p={{ base: 5, md: 8 }} marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}>
          <Box maxW="400px">
            <Link as={RouterLink} to={"/"}>
              <Image w="100px" src="" alt="ModeSonia" />
            </Link>
            <Text mt={2} color="#b5b3b3" fontSize="md">
              ModeSonia est une entreprise tunisienne fondée en 2010,
              spécialisée dans la création de caftans traditionnels faits à la
              main. Notre passion pour l'artisanat et notre engagement envers la
              qualité se reflètent dans chaque pièce que nous créons.
            </Text>
          </Box>
          <HStack
            spacing={4}
            d={{ base: "none", sm: "flex" }}
            justifyContent={{ sm: "space-between", md: "normal" }}>
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold" color="#b5b3b3">
                Accueil
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="#b5b3b3">
                <Link as={RouterLink} to={"/caftan"}>
                  Caftans
                </Link>
                <Link as={RouterLink} to={"/apropos"}>
                  A Propos{" "}
                </Link>
                <Link as={RouterLink} to={"/contact"}>
                  Nous contacter
                </Link>
                {userData ? (
                  <>
                    {/* User a mettre que pour l'admin */}

                    <Link as={RouterLink} to={"/"} onClick={handleLogout}>
                      Deconnexion
                    </Link>
                  </>
                ) : (
                  <>
                    <Link as={RouterLink} to={"/Connexion"}>
                      Connexion
                    </Link>
                  </>
                )}
              </VStack>
            </VStack>
          </HStack>
        </Stack>

        <Divider my={4} />

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between">
          <Link>
            <Text mt={2} color="#b5b3b3" fontSize="md">
              Mentions legales | cdc
            </Text>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
