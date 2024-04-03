import {
  Box,
  useColorModeValue,
  Center,
  Container,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CardArticle from "./Card";

function AllCaftan({ caftans, deleteArticle }) {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Box className="displayCard">
            {caftans.map((caftan, index) => (
              <Box
                key={`${caftan._id}`}
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
                _hover={{ opacity: 0.6 }}>
                <Button
                  onClick={() => deleteArticle(caftan._id)}
                  bg={"red"}
                  fontSize="small"
                  height={"10px"}
                  width={"7px"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                  }}>
                  X
                </Button>
                <Link to={`/${caftan._id}`} key={index}>
                  <CardArticle
                    key={index}
                    imageURL={caftan.imageURL}
                    title_Produit={caftan.title_Produit}
                    price={caftan.price}
                    description={caftan.description}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
}

export default AllCaftan;
