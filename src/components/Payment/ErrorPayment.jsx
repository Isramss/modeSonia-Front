import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function ErrorPayment() {
  const userDataString = sessionStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userId = userData ? userData.userData.id : null;

  return (
    <>
      <Box m={"20px"}>
        <Button as={RouterLink} to={`/panier/${userId}`}>
          Retour
        </Button>
        <Box
          m={20}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          alignItems={"center"}>
          <Heading
            display={"flex"}
            alignItems={"center"}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            Erreur lors du paiement
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 50 50">
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
            </svg>
          </Heading>

          <Text>
            Nous sommes désolés, mais votre paiement n'a pas abouti. <br />
            Veuillez vérifier les informations que vous avez fournies et essayer
            à nouveau.
          </Text>

          <Button
            as={RouterLink}
            to={`/panier/${userId}`}
            bg={"black"}
            color={"White"}
            mt={10}
            _hover={{
              bg: "white",
              color: "black",
            }}>
            Aller au Panier
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ErrorPayment;
