import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Hero() {
  return (
    <Flex
      w={"full"}
      h={"500px"}
      backgroundImage={
        "url(https://www.arbayadress.com/cdn/shop/files/Facetune_09-07-2023-17-45-25.heic?v=1688923601&width=2200)"
      }
      boxShadow={"2xl"}
      backgroundSize={"cover"}
      background-attachment="local"
      backgroundPosition={"centre bottom"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}>
            ModeSonia vous souhaites la bienvenue sur notre Site et nous vous
            souhaitons un agreable moment
          </Text>
          <Stack direction={"row"}>
            <Button
              as={RouterLink}
              to="/caftan"
              cursor="pointer"
              bg={"black"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "white", color: "black" }}>
              Voir plus
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              bg={"white"}
              rounded={"full"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.500" }}>
              Nous contacter
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Hero;
