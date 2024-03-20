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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ConnexionForm() {
  const Toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4567/auth/login", {
        email,
        password,
      });
      console.log(response.data);
      const { token } = response.data;
      const decodedUser = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      console.log("User connecté : ", decodedUser);
      Toast({
        title: "Connexion reussi! 👍",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Erreur lors du login: ", error.message);
      Toast({
        title: "Erreur de connexion 💥",
        description: "email ou mot de passe invalides",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl" className="title_connexion">
              Connexion
            </Heading>
          </Stack>
          <VStack
            as="form"
            className="formConnexion"
            onSubmit={handleSubmit}
            spacing={8}
            w={{ base: "sm", sm: "lg" }}
            p={{ base: 5, sm: 6 }}>
            <VStack spacing={0} w="100%">
              <FormControl id="email" isRequired>
                <Input
                  type="email"
                  placeholder="entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl
                id="password"
                position="relative"
                bottom="1px"
                isRequired>
                <Input
                  type="password"
                  placeholder="entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
              </Stack>
              <Button
                type="submit"
                // leftIcon={<BiLockAlt />}
                bg="black"
                color="white"
                _hover={{
                  bg: "white",
                  color: "black",
                }}
                rounded="md"
                w="100%">
                Connexion
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
}

export default ConnexionForm;
