import {
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function HeroCaftans() {
  return (
    <Flex
      w={"full"}
      h={"250px"}
      backgroundImage={
        "url(https://www.arbayadress.com/cdn/shop/files/Facetune_09-07-2023-17-45-25.heic?v=1688923601&width=2200)"
      }
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
            Nos Caftans
          </Text>
          <Stack direction={"row"}></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default HeroCaftans;
