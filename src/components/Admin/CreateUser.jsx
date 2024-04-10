import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  VStack,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function CreateUser({ reloadUsers }) {
  const [isOpen, setIsOpen] = useState(false);

  const [userData, setUserData] = useState({
    name: { first: "", last: "" },
    email: "",
    address: "",
    zipcode: "",
    password: "",
  });
  const toast = useToast();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4567/auth/inscription",
        userData
      );

      toast({
        title: "Nouvel utilisateur créé",
        description: "Le nouvel utilisateur a été créé avec succès.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsOpen(false);
      setUserData(response.data);
      reloadUsers((prevUsers) => [...prevUsers, response.data]);
      window.location.reload();
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        title: "Erreur lors de la création de l'utilisateur",
        description:
          "Une erreur s'est produite lors de la création de l'utilisateur.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack>
      <Stack>
        <Heading fontSize="3xl" textAlign="center" className="title_user">
          Liste des utilisateurs
        </Heading>
      </Stack>
      <Stack align="flex-end">
        <Button
          m={5}
          display={"flex"}
          justifyContent="center"
          align="center"
          leftIcon={<AddIcon />}
          bg={"black"}
          color={"white"}
          _hover={{
            color: "black",
            bg: "white",
          }}
          onClick={() => setIsOpen(true)}>
          Créer un utilisateur
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={handleClose} size="xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(3px) hue-rotate(90deg)"
        />
        <ModalContent
          maxW={{ base: "90%", md: "50%" }}
          maxH="90vh"
          p={"10px"}
          className="form_modal"
          bg={"#0000003c"}>
          <ModalHeader>Créer un utilisateur</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Prénom :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre prénom"
                  value={userData.name.first}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      name: { ...userData.name, first: e.target.value },
                    })
                  }
                />
              </FormControl>

              <FormControl id="lastname" isRequired>
                <FormLabel>Nom :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre Nom"
                  value={userData.name.last}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      name: { ...userData.name, last: e.target.value },
                    })
                  }
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email :</FormLabel>
                <Input
                  type="email"
                  placeholder="Entrer votre Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Adresse :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre Adresse"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="zipcode" isRequired>
                <FormLabel>Code Postal :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre Code postal"
                  value={userData.zipcode}
                  onChange={(e) =>
                    setUserData({ ...userData, zipcode: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Mot de passe :</FormLabel>
                <Input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
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
              onClick={handleCreateUser}>
              Créer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}

export default CreateUser;
