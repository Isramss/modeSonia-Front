import { CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardArticle from "../Articles/Card";

function Panier() {
  const [cart, setCart] = useState([]);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const userId = userData.userData.id;

  const navigate = useNavigate();
  useEffect(() => {
    const displayCart = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4567/cart/${userData.userData.id}`
        );
        setCart(res.data.cartItems);
      } catch (error) {
        console.error(error);
      }
    };

    displayCart();
  }, [userId]);

  const deleteToCart = async (caftanId) => {
    try {
      await axios.delete(
        `http://localhost:4567/cart/${userId}/remove/${caftanId}`
      );
      const updatedCart = cart.filter((item) => item._id !== caftanId);
      setCart(updatedCart);
      // setCart(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    navigate("/caftan");
  };

  const totalCart = () => {
    if (!Array.isArray(cart) || cart.length === 0) {
      return 0;
    }
    return cart.reduce((acc, article) => acc + article.price, 0).toFixed(2);
  };

  return (
    <>
      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Center>
          {cart.length > 0 ? (
            <Box>
              <Heading
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={10}>
                Votre Panier
              </Heading>
              <div>{totalCart()} €</div>
              <Box className="displayCard" pb={5}>
                {cart.map((caftan, index) => (
                  <Box
                    key={`${caftan._id}`}
                    role={"group"}
                    p={6}
                    m={6}
                    maxW={"330px"}
                    w={"full"}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}>
                    <Button
                      mt={-10}
                      onClick={() => deleteToCart(caftan._id)}
                      bg={"none"}
                      marginLeft={"5px"}
                      height={"25px"}
                      color={"red"}
                      _hover={{
                        color: "white",
                        bg: "black",
                      }}>
                      <CloseIcon />
                    </Button>
                    <CardArticle
                      key={index}
                      imageURL={caftan.imageURL}
                      title_Produit={caftan.title_Produit}
                      price={caftan.price}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ) : (
            <Box py={20}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={10}>
                <Heading>Votre panier est vide</Heading>
              </Box>
              <Stack
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Button onClick={handleClick}>Continuez les achats</Button>
              </Stack>
            </Box>
          )}
        </Center>
      </Container>
    </>
  );
}

export default Panier;
