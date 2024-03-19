import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import "../App.css";
import axios from "axios";
import React, { useState } from "react";

function InscriptionForm() {
  const Toast = useToast();
  const [newUser, setNewUser] = useState({
    name: { first: "", last: "" },
    email: "",
    address: "",
    zipcode: "",
    password: "",
  });

  const CreatUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4567/auth/inscription",
        newUser
      );
      Toast({
        title: "Inscription",
        description: "Votre compte a bien été créé.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      setNewUser({
        name: { first: "", last: "" },
        email: "",
        address: "",
        zipcode: "",
        password: "",
      });
    } catch (error) {
      console.error("Erreur lors de l' Inscription");
    }
  };
  return (
    <Box display="flex" flexDirection={"column"} maxW="600px" m="auto" mt="4">
      <Heading as="h2" mb="4" textAlign="center" m={"20px"}>
        Inscription
      </Heading>
      <form
        className="FormInscription"
        onSubmit={(e) => {
          e.preventDefault();
          CreatUser();
        }}
        action="Inscription">
        <FormControl isRequired>
          <FormLabel>Prénom:</FormLabel>
          <Input
            type="text"
            value={newUser.name.first}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                name: { ...newUser.name, first: e.target.value },
              })
            }
          />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Nom:</FormLabel>
          <Input
            type="text"
            value={newUser.name.last}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                name: { ...newUser.name, last: e.target.value },
              })
            }
          />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel>Email:</FormLabel>

          <Input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Code Postal:</FormLabel>
          <Input
            type="number"
            value={newUser.zipcode}
            onChange={(e) =>
              setNewUser({ ...newUser, zipcode: e.target.value })
            }
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Mot de passe:</FormLabel>
          <Input
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </FormControl>
        <Button
          className="btn_inscription"
          type="submit"
          width="400px"
          bg="#000"
          color="white"
          textAlign={"center"}>
          Inscription
        </Button>
      </form>
    </Box>
  );
}

export default InscriptionForm;
