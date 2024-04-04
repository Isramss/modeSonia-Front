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

function AllCaftan({ caftans, deleteArticle, updateArticle }) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = userData ? userData.user.isAdmin : false;
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
                zIndex={1}>
                {isAdmin === true ? (
                  <Stack display={"row"} marginBottom="10px">
                    <Button
                      mt={-5}
                      onClick={() => deleteArticle(caftan._id)}
                      bg={"none"}
                      // fontSize="small"
                      height={"15px"}
                      width={"1px"}
                      color={"red"}
                      _hover={{
                        color: "white",
                        bg: "black",
                      }}>
                      X
                    </Button>
                    <Button
                      mt={-5}
                      marginLeft="30px"
                      onClick={() => updateArticle(caftan._id)}
                      bg={"black"}
                      // fontSize="small"
                      height={"15px"}
                      // width={"40px"}
                      color={"white"}
                      _hover={{
                        color: "black",
                        bg: "none",
                      }}>
                      Update
                    </Button>
                  </Stack>
                ) : null}
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
