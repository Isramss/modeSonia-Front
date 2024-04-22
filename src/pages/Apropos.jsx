import { Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import AccueilBody from "../components/AccueilBody";

function Apropos() {
  return (
    <>
      <Text
        className="Apropos"
        display={"flex"}
        justifyContent={"center"}
        // color={"white"}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}>
        Qui suis-je ?
      </Text>
      <AccueilBody />
    </>
  );
}

export default Apropos;
