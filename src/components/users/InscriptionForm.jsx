import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  Checkbox,
  Link,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function InscriptionForm() {
  const Toast = useToast();
  const navigate = useNavigate();
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
      navigate("/connexion");
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
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading
              fontSize="3xl"
              textAlign="center"
              className="title_inscription">
              Inscription
            </Heading>
          </Stack>
          <VStack
            as="form"
            className="FormInscription"
            onSubmit={(e) => {
              e.preventDefault();
              CreatUser();
            }}
            action="Inscription"
            spacing={8}
            w={{ base: "sm", sm: "lg" }}
            p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
              <FormControl id="name" isRequired>
                <FormLabel className="label">Prénom :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre prénom"
                  value={newUser.name.first}
                  rounded="md"
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      name: { ...newUser.name, first: e.target.value },
                    })
                  }
                />
              </FormControl>
              <FormControl id="lastname" isRequired>
                <FormLabel className="label">Nom :</FormLabel>
                <Input
                  type="text"
                  placeholder="Entrez votre Nom"
                  value={newUser.name.last}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      name: { ...newUser.name, last: e.target.value },
                    })
                  }
                  rounded="md"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel className="label">Email :</FormLabel>
                <Input
                  type="email"
                  placeholder="Entrer votre Email"
                  rounded="md"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl
                id="adresse"
                position="relative"
                bottom="1px"
                isRequired>
                <FormLabel className="label">Adresse :</FormLabel>
                <Input
                  type="address"
                  rounded="md"
                  placeholder="Entrez votre Adresse"
                  value={newUser.address}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address: e.target.value })
                  }
                />
              </FormControl>
              <FormControl
                id="zipcode"
                position="relative"
                bottom="1px"
                isRequired>
                <FormLabel className="label">Code Postal :</FormLabel>
                <Input
                  type="number"
                  rounded="md"
                  placeholder="Entrez votre Code postal"
                  value={newUser.zipcode}
                  onChange={(e) =>
                    setNewUser({ ...newUser, zipcode: e.target.value })
                  }
                />
              </FormControl>
              <FormControl
                id="password"
                position="relative"
                bottom="1px"
                isRequired>
                <FormLabel className="label">Mot de passe :</FormLabel>
                <Input
                  rounded="md"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </FormControl>
            </VStack>

            <VStack w="100%">
              <Stack>
                {/* <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox> */}
                <Link
                  as={RouterLink}
                  to="/connexion"
                  display={"flex"}
                  justifyContent={"center"}
                  fontSize={{ base: "md", sm: "md" }}>
                  Connexion
                </Link>
              </Stack>
              <Button
                type="submit"
                bg="black"
                color="white"
                _hover={{
                  bg: "white",
                  color: "black",
                }}
                rounded="md"
                w="100%">
                Inscription
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
}

export default InscriptionForm;
