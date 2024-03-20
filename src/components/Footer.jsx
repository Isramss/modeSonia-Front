import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");

  //   const userData = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Box
      p={{ base: 5, md: 8 }}
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
            <Text mt={2} color="gray.500" fontSize="md">
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
              <Text fontSize="md" fontWeight="bold">
                Accueil
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <Link as={RouterLink} to={"/caftan"}>
                  Caftan
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
            <Text mt={2} color="gray.500" fontSize="md">
              Mentions lesgales |
            </Text>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

// const CustomLink = ({ children, ...props }) => {
//   return (
//     <Link
//       href="#"
//       fontSize="sm"
//       _hover={{ textDecoration: "underline" }}
//       {...props}>
//       {children}
//     </Link>
//   );
// };

export default Footer;
