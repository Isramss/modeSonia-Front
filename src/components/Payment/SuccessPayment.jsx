import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import React from "react";

function SuccessPayment() {
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
          flexDirection="column"
          textAlign={"center"}
          alignItems={"center"}>
          <Heading
            display={"flex"}
            alignItems={"center"}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
            Félicitations !{" "}
            <svg width="105" height="105" viewBox="0 0 50 50">
              <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
            </svg>
          </Heading>
          <Text mt={"10px"}>
            Votre paiement a été effectué avec succès. <br /> Nous vous
            remercions pour votre achat et sommes ravis de vous avoir comme
            client.
            <br /> Vous recevrez bientôt une confirmation par e-mail.
          </Text>
          <Button
            bg={"black"}
            color={"White"}
            mt={10}
            as={RouterLink}
            to={`/`}
            _hover={{
              bg: "white",
              color: "black",
            }}>
            Retour à la page d'accueil
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SuccessPayment;
