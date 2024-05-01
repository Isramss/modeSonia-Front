import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../Articles/ListPanier";

function Panier() {
  const [cart, setCart] = useState([]);

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const userId = userData.userData.id;

  // console.log(userId);

  const navigate = useNavigate();
  useEffect(() => {
    const displayCart = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/cart/${userData.userData.id}`
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
        `${import.meta.env.VITE_API_URL}/cart/${userId}/remove/${caftanId}`
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

  const handlePayment = async () => {
    try {
      const lineItems = cart.map((article) => ({
        articleId: article._id,
        quantity: article.quantity,
      }));
      console.log(lineItems);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/payment/${userId}`,
        { lineItems }
      );

      const paymentUrl = response.data.url;

      // Navigate to the payment URL in the same page
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Error fetching payment URL:", error);
    }
  };

  return (
    <>
      <Container maxW="100%" p={{ base: 5, md: 10 }}>
        <Center className={"box_panier"}>
          {cart.length > 0 ? (
            <Box>
              <Heading
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={10}>
                Votre Panier
              </Heading>

              <Table variant="striped">
                <Thead>
                  <Tr>
                    <Th>Article</Th>

                    <Th display={"flex"} justifyContent={"center"}>
                      Total
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart &&
                    cart.map((caftan, index) => (
                      <Tr key={`${caftan._id}`} p={6} m={6} rounded={"lg"}>
                        <CartItem
                          key={index}
                          imageURL={caftan.imageURL}
                          title_Produit={caftan.title_Produit}
                          price={caftan.price}
                        />
                        <th maxW={20}>
                          {caftan.price} €
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
                        </th>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  marginTop: "30px",
                }}>
                Sous-total : {totalCart()} €
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}>
                <Button
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                  onClick={handlePayment}>
                  Procéder au paiement
                </Button>
              </div>
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
