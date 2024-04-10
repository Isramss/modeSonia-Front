import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";

function Panier() {
  return (
    <>
      <Box py={40}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={20}>
          <Heading>Votre panier est vide</Heading>
        </Box>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button>Continuez les achats</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Panier;
