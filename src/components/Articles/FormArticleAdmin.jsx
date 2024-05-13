import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function FormArticleAdmin({ reloadArticle }) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = userData ? userData.userData.isAdmin : false;
  const [isOpen, setIsOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title_Produit: "",
    imageURL: "",
    price: "",
    description: "",
    stock: "",
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const CreateArticle = async (e) => {
    e.preventDefault();
    try {
      // token auth
      const token = JSON.parse(sessionStorage.getItem("token"));

      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/articles/newarticle`,
        newArticle,
        config
      );
      setIsOpen(false);
      setNewArticle({
        title_Produit: "",
        imageURL: "",
        price: "",
        description: "",
        stock: "",
      });
      reloadArticle((prevArticles) => [...prevArticles, response.data]);
      // Réinitialiser le formulaire après la création de l'article
      window.location.reload();
    } catch (error) {
      console.error(error, "Error creating article");
    }
  };

  return (
    <Stack align="center">
      {isAdmin === true ? (
        <Box>
          <Button
            mt={10}
            leftIcon={<AddIcon />}
            bg={"black"}
            color={"white"}
            _hover={{
              color: "black",
              bg: "white",
            }}
            onClick={() => setIsOpen(true)}>
            Ajouter un Article
          </Button>

          <Modal isOpen={isOpen} onClose={handleClose} size="xl">
            <ModalOverlay
              bg="##ffffff4d"
              backdropFilter="blur(3px) 
             hue-rotate(10deg)
              "
            />
            <ModalContent
              maxW={{ base: "90%", md: "50%" }}
              maxH="90vh"
              p={"10px"}
              className="form_modal"
              bg={"#0000003c"}>
              <ModalHeader color={"white"}>Créer un article</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={4}>
                  <FormControl onSubmit={CreateArticle}>
                    <FormLabel color={"white"}>Nom de l'article :</FormLabel>
                    <Input
                      color="black"
                      type="text"
                      value={newArticle.title_Produit}
                      onChange={(e) =>
                        setNewArticle({
                          ...newArticle,
                          title_Produit: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"white"}>Photo du produit :</FormLabel>
                    <Input
                      type="url"
                      value={newArticle.imageURL}
                      onChange={(e) =>
                        setNewArticle({
                          ...newArticle,
                          imageURL: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"white"}>Prix du produit :</FormLabel>
                    <Input
                      type="number"
                      value={newArticle.price}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, price: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"white"}>Description :</FormLabel>
                    <Input
                      type="text"
                      value={newArticle.description}
                      onChange={(e) =>
                        setNewArticle({
                          ...newArticle,
                          description: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"white"}>Quantité :</FormLabel>
                    <Input
                      type="number"
                      value={newArticle.stock}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, stock: e.target.value })
                      }
                    />
                  </FormControl>
                </VStack>
              </ModalBody>
              <ModalFooter padding={"0 24px"}>
                <Button
                  variant="ghost"
                  color={"white"}
                  _hover={{ color: "black" }}
                  marginRight={5}
                  onClick={handleClose}>
                  Annuler
                </Button>
                <Button
                  bg={"black"}
                  color={"white"}
                  _hover={{ bg: "white", color: "black" }}
                  type="Submit"
                  onClick={CreateArticle}>
                  Enregistrer
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : null}
    </Stack>
  );
}

export default FormArticleAdmin;
