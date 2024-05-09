import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
function Contact() {
  const toast = useToast();
  const email = "modeSonia@contact.com";
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");

  const SendMessage = async () => {
    if (!name || !emailInput || !message) {
      toast({
        title: "Veuillez remplir tous les champs !",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Envoyer le message
    toast({
      title: "Message envoyé ! 👍",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Réinitialiser les champs après l'envoi du message
    setName("");
    setEmailInput("");
    setMessage("");
  };

  return (
    <Container
      backgroundImage={
        "url(https://cerevebleu.fr/wp-content/uploads/2020/10/Caftan-dun-Soir-3-1-1200x800.jpg) "
      }
      backgroundSize={"cover"}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden">
      <Flex>
        <Box
          bg="#000000a7"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Remplissez le formulaire ci-dessous <br />
                    pour nous contacter
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #dfcbb7" }}
                        leftIcon={<MdPhone color="#dfcbb7" size="20px" />}>
                        +33-6123456789
                      </Button>
                      <a href={`mailto:${email}`}>
                        <Button
                          size="md"
                          // height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #dfcbb7" }}
                          href={`mailto:${email}`}
                          leftIcon={<MdEmail color="#dfcbb7" size="20px" />}>
                          modeSonia@contact.com
                        </Button>
                      </a>
                      <a
                        href="https://www.google.fr/maps/@33.5001386,11.112718,19.3z?entry=ttu"
                        target="_blank">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #dfcbb7" }}
                          leftIcon={
                            <MdLocationOn color="#dfcbb7" size="20px" />
                          }>
                          Zarzis, Tunisie
                        </Button>
                      </a>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <a href="https://www.facebook.com/?locale=fr_FR">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dfcbb7" }}
                        icon={<MdFacebook size="28px" color="#fff" />}
                      />
                    </a>
                    <a href="https://www.instagram.com">
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dfcbb7" }}
                        icon={<AiFillInstagram size="28px" color="#fff" />}
                      />
                    </a>
                    <a href="https://www.tiktok.com/fr/">
                      <IconButton
                        aria-label="tiktok"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#dfcbb7" }}
                        icon={<FaTiktok size="28px" color="#fff" />}
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Votre Nom</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#000000"
                          color="white"
                          _hover={{
                            color: "black",
                            bg: "white",
                          }}
                          onClick={SendMessage}>
                          Envoyer votre Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
