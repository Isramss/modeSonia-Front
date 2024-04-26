import {
  Box,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Image,
  Skeleton,
  Button,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function PageArticle() {
  const [caftan, setCaftan] = useState("");
  const { caftanId } = useParams();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const currentUser = JSON.parse(sessionStorage.getItem("user"));
  const userId = currentUser ? currentUser.userData.id : null;

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/${caftanId}`
        );
        setCaftan(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getArticle();
  }, [caftanId]);

  const AddToCart = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/${caftanId}/add/${userId}`
      );
      console.log(res.data);
      console.log(userId, caftanId);

      toast({
        title: "Article ajouté au panier",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("caftanId & userId is undefined", error);
      toast({
        title: "Erreur lors de l'ajout au panier",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleClick = () => {
    if (caftanId && userId) {
      AddToCart();
    } else {
      console.error("caftanId or userId is undefined");
    }
  };

  return (
    <Container maxW="10xl" px={{ base: 5, md: 3 }} py={7}>
      <Button bg="none" as={Link} to="/caftan">
        Retour
      </Button>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="40px">
        <Box mx={{ base: "auto", md: "auto", lg: 0 }} pos="relative">
          <Image
            boxShadow="lg"
            minW={{ base: "auto", md: "20rem", lg: "30rem" }}
            maxH="30rem"
            objectFit="cover"
            src={caftan.imageURL}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left">
            {caftan.title_Produit}
          </Heading>
          <Heading
            fontSize="2xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left">
            {caftan.price} €
          </Heading>
          <Text fontSize="md">Description</Text>
          <Text fontSize="md" maxW={"500px"}>
            {caftan.description}
          </Text>
          <Flex
            // width={"100%"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Container maxW="m">
              <Accordion
                // m={{ base: 5, md: 3 }}
                allowMultiple
                width="100%"
                maxW="xl"
                rounded="lg">
                <AccordionItem>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text fontSize="md">Détails du produit :</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">
                      <li>Matière : Mousseline de haute qualité </li>
                      <li>Incrusté de pierres pour une touche scintillante </li>
                      <li>
                        Travail artisanal minutieux Fourni avec une ceinture
                        assortie pour souligner votre silhouette
                      </li>
                      <li>
                        Comprend également un voile assorti pour un look complet
                      </li>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text fontSize="md">Guide des Tailles</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">
                      Taille 1 = 52/54 : Mesure Moins d'1m62 <br /> Taille 2 =
                      56/58 : Mesure Entre 1m63 et 1m72 <br /> Taille 3 = 60/62
                      : Mesure Plus d'1m73
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </Flex>
          <Button
            mt={5}
            onClick={onOpen}
            bg={"black"}
            width="200px"
            height={"50px"}
            color={"white"}
            _hover={{
              color: "black",
              bg: "none",
            }}>
            Ajouter au panier
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Ajouter un produit
                </AlertDialogHeader>

                <AlertDialogBody>
                  Voulez-vous ajouter ce produit à votre panier ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Annuler
                  </Button>
                  <Button
                    bg="black"
                    color="white"
                    onClick={() => {
                      handleClick();
                      onClose();
                    }}
                    ml={3}>
                    Ajouter
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Stack>
      </Stack>
    </Container>
  );
}

export default PageArticle;
