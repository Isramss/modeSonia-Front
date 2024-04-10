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
        "url(https://cerevebleu.fr/wp-content/uploads/2020/10/Caftan-dun-Soir-5-1200x1200.jpg)"
      }
      backgroundSize={"cover"}
      background-attachment="local"
      backgroundPosition={"center"}>
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
