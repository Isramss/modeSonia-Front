import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
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
  const isAdmin = userData ? userData.user.isAdmin : false;
  const [isOpen, setIsOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title_Produit: "",
    imageURL: "",
    price: "",
    description: "",
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const CreateArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4567/articles/newarticle",
        newArticle
      );
      setIsOpen(false);
      setNewArticle({
        title_Produit: "",
        imageURL: "",
        price: "",
        description: "",
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
              bg="blackAlpha.300"
              backdropFilter="blur(3px) hue-rotate(90deg)"
            />
            <ModalContent
              // color={"white"}
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
                    <input
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
                    <input
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
                    <input
                      type="number"
                      value={newArticle.price}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, price: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={"white"}>Description :</FormLabel>
                    <input
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
                </VStack>
              </ModalBody>
              <ModalFooter padding={"0 24px"}>
                <Button variant="ghost" onClick={handleClose}>
                  Annuler
                </Button>
                <Button
                  bg={"black"}
                  color={"white"}
                  _hover={{ bg: "white", color: "black" }}
                  type="Submit"
                  onClick={CreateArticle}>
                  Send
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
