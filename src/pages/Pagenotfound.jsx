import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <Box
      title={"go back- page not found"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"100vh"}>
      <div>
        <Heading fontSize={"9xl"}>404</Heading>
        <br />
        <h2>Oops ! Page Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    </Box>
  );
}

export default Pagenotfound;
