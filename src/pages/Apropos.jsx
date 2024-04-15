import { Heading } from "@chakra-ui/react";
import React from "react";
import AccueilBody from "../components/AccueilBody";

function Apropos() {
  return (
    <>
      <Heading className="Apropos" display={"flex"} justifyContent={"center"}>
        Qui suis-je ?
      </Heading>
      <AccueilBody />
    </>
  );
}

export default Apropos;
