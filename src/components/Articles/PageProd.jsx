// import { useCart } from "../../context/CartContext";
// import {
//   Box,
//   Heading,
//   Stack,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Flex,
//   useColorModeValue,
//   Text,
//   Container,
//   Image,
//   Skeleton,
//   Button,
//   useToast,
//   AlertDialog,
//   AlertDialogOverlay,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogBody,
//   AlertDialogFooter,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { Link } from "react-router-dom";

// function PageArticle() {
//   // const { cart, setCart } = useCart();
//   const [caftan, setCaftan] = useState("");
//   const { caftanId } = useParams();
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();
//   const currentUser = JSON.parse(sessionStorage.getItem("user"));
//   const userId = currentUser ? currentUser.userData.id : null;
//   const [quantity, setQuantity] = useState(1); //la quantité d'articles

//   // Fonction pour incrémenter la quantité
//   const incrementQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   // Fonction pour décrémenter la quantité (minimum de 1)
//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   useEffect(() => {
//     const getArticle = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_API_URL}/articles/${caftanId}`
//         );
//         setCaftan(res.data);
//         // console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getArticle();
//   }, [caftanId]);

//   const AddToCart = async (quantity) => {
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/cart/${caftanId}/add/${userId}`,
//         { quantity: quantity }
//       );
//       console.log(res.data);
//       console.log(userId, caftanId);

//       // const newItem = {
//       //   _id: caftanId,
//       //   ...caftan,
//       //   quantity: quantity,
//       // };
//       // const updatedCart = [...cart, newItem];
//       // // sessionStorage.setItem("cart", JSON.stringify(updatedCart));
//       // setCart(updatedCart);
//       toast({
//         title: "Article ajouté au panier",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error("caftanId & userId is undefined", error);
//       toast({
//         title: "Erreur lors de l'ajout au panier",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleClick = () => {
//     if (caftanId && userId) {
//       AddToCart(quantity);
//     } else {
//       console.error("caftanId or userId is undefined");
//     }
//   };

//   return (
//     <Container maxW="10xl" px={{ base: 5, md: 3 }} py={7}>
//       <Button bg="none" mb={"20px"} as={Link} to="/caftan">
//         Retour
//       </Button>
//       <Stack
//         direction={{ base: "column", md: "row" }}
//         justifyContent="center"
//         gap="40px">
//         <Box m={0} mx={{ base: "auto", md: "auto", lg: 0 }} pos="relative">
//           <Image
//             m={0}
//             boxShadow="lg"
//             minW={{ base: "auto", md: "20rem", lg: "30rem" }}
//             maxH="30rem"
//             objectFit="cover"
//             src={caftan.imageURL}
//             rounded="md"
//             fallback={<Skeleton />}
//           />
//         </Box>
//         <Stack direction="column" spacing={6} justifyContent="center">
//           <Heading
//             fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//             lineHeight={1}
//             fontWeight="bold"
//             textAlign="left">
//             {caftan.title_Produit}
//           </Heading>
//           <Heading
//             fontSize="2xl"
//             lineHeight={1}
//             fontWeight="bold"
//             textAlign="left">
//             {caftan.price} €
//           </Heading>
//           <Text fontSize="md">Description</Text>
//           <Text fontSize="md" maxW={"500px"}>
//             {caftan.description}
//           </Text>
//           {isEditMode ? (
//             <textarea
//               maxWidth="500px"
//               rows={4}
//               value={newDescription}
//               onChange={handleChangeDescription}
//             />
//           ) : (
//             <Text fontSize="md" maxW={"500px"}>
//               {caftan.description}
//             </Text>
//           )}
//           {isEditMode ? (
//             <Stack direction="row" spacing={4}>
//               <Button onClick={handleSaveDescription}>Enregistrer</Button>
//               <Button onClick={() => setIsEditMode(false)}>Annuler</Button>
//             </Stack>
//           ) : (
//             <Button onClick={handleEditDescription}>Modifier</Button>
//           )}
//           <Box>
//             <Button onClick={decrementQuantity} bg={"none"}>
//               -
//             </Button>
//             <span>{quantity}</span>
//             <Button onClick={incrementQuantity} bg={"none"}>
//               +
//             </Button>
//           </Box>
//           <Flex
//             // width={"100%"}
//             justify={"center"}
//             bg={useColorModeValue("gray.50", "gray.800")}>
//             <Container maxW="m">
//               <Accordion
//                 // m={{ base: 5, md: 3 }}
//                 allowMultiple
//                 width="100%"
//                 maxW="xl"
//                 rounded="lg">
//                 <AccordionItem>
//                   <AccordionButton
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="space-between"
//                     p={4}>
//                     <Text fontSize="md">Détails du produit :</Text>
//                     <ChevronDownIcon fontSize="24px" />
//                   </AccordionButton>
//                   <AccordionPanel pb={4}>
//                     <Text color="gray.600">
//                       <li>Matière : Mousseline de haute qualité </li>
//                       <li>Incrusté de pierres pour une touche scintillante </li>
//                       <li>
//                         Travail artisanal minutieux Fourni avec une ceinture
//                         assortie pour souligner votre silhouette
//                       </li>
//                       <li>
//                         Comprend également un voile assorti pour un look complet
//                       </li>
//                     </Text>
//                   </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                   <AccordionButton
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="space-between"
//                     p={4}>
//                     <Text fontSize="md">Guide des Tailles</Text>
//                     <ChevronDownIcon fontSize="24px" />
//                   </AccordionButton>
//                   <AccordionPanel pb={4}>
//                     <Text color="gray.600">
//                       Taille 1 = 52/54 : Mesure Moins d'1m62 <br /> Taille 2 =
//                       56/58 : Mesure Entre 1m63 et 1m72 <br /> Taille 3 = 60/62
//                       : Mesure Plus d'1m73
//                     </Text>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Container>
//           </Flex>

//           {currentUser ? (
//             <Button
//               mt={5}
//               onClick={onOpen}
//               bg={"black"}
//               width="200px"
//               height={"50px"}
//               color={"white"}
//               _hover={{
//                 color: "black",
//                 bg: "none",
//               }}>
//               Ajouter au panier
//             </Button>
//           ) : (
//             <Link to="/connexion">
//               <Button
//                 mt={5}
//                 bg={"black"}
//                 width="200px"
//                 height={"50px"}
//                 color={"white"}
//                 _hover={{
//                   color: "black",
//                   bg: "none",
//                 }}>
//                 Ajouter au panier
//               </Button>
//             </Link>
//           )}

//           <AlertDialog
//             isOpen={isOpen}
//             leastDestructiveRef={cancelRef}
//             onClose={onClose}>
//             <AlertDialogOverlay>
//               <AlertDialogContent>
//                 <AlertDialogHeader fontSize="lg" fontWeight="bold">
//                   Ajouter un produit
//                 </AlertDialogHeader>

//                 <AlertDialogBody>
//                   Voulez-vous ajouter ce produit à votre panier ?
//                 </AlertDialogBody>

//                 <AlertDialogFooter>
//                   <Button ref={cancelRef} onClick={onClose}>
//                     Annuler
//                   </Button>
//                   <Button
//                     bg="black"
//                     color="white"
//                     onClick={() => {
//                       handleClick(1);
//                       onClose();
//                     }}
//                     ml={3}>
//                     Ajouter
//                   </Button>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialogOverlay>
//           </AlertDialog>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// }

// export default PageArticle;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   Box,
//   Heading,
//   Stack,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Flex,
//   useColorModeValue,
//   Text,
//   Container,
//   Image,
//   Skeleton,
//   Button,
//   useToast,
//   AlertDialog,
//   AlertDialogOverlay,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogBody,
//   AlertDialogFooter,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import { useCart } from "../../context/CartContext";

// function PageArticle() {
//   const { caftanId } = useParams();
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();
//   const { cart, setCart } = useCart();

//   // partie user / admin / id
//   const currentUser = JSON.parse(sessionStorage.getItem("user"));
//   const userId = currentUser ? currentUser.userData.id : null;
//   const isAdmin = currentUser ? currentUser.userData.isAdmin : false;

//   const [quantity, setQuantity] = useState(1);
//   const [caftan, setCaftan] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [newDescription, setNewDescription] = useState("");

//   const incrementQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   useEffect(() => {
//     const getArticle = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_API_URL}/articles/${caftanId}`
//         );
//         setCaftan(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getArticle();
//   }, [caftanId]);

//   const updateArticle = async (articleToUpdate) => {
//     try {
//       // token auth
//       const token = JSON.parse(sessionStorage.getItem("token"));

//       if (!token) {
//         throw new Error("Token not found");
//       }
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_URL}/articles/update/${
//           articleToUpdate._id
//         }`,
//         articleToUpdate,
//         config
//       );

//       if (response.status === 200) {
//         // Mettre à jour l'article dans le state local
//         setCaftan(articleToUpdate);
//       } else {
//         throw new Error("Failed to update article");
//       }
//     } catch (error) {
//       throw new Error("Error updating article: " + error.message);
//     }
//   };

//   const AddToCart = async (quantity) => {
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/cart/${caftanId}/add/${userId}`,
//         { quantity: quantity }
//       );
//       console.log(res.data);
//       console.log(userId, caftanId);

//       const newItem = {
//         _id: caftanId,
//         ...caftan,
//         quantity: quantity,
//       };
//       const updatedCart = [...cart, newItem];
//       setCart([...cart, res.data]);
//       toast({
//         title: "Article ajouté au panier",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error("Erreur lors de l'ajout au panier:", error);
//       toast({
//         title: "Erreur lors de l'ajout au panier",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleEditDescription = () => {
//     setIsEditMode(true);
//     setNewDescription(caftan.description);
//   };

//   const handleChangeDescription = (e) => {
//     setNewDescription(e.target.value);
//   };

//   const handleSaveDescription = async () => {
//     try {
//       const articleToUpdate = { ...caftan, description: newDescription };
//       await updateArticle(articleToUpdate);
//       toast({
//         title: "Article mis à jour avec succès",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       setIsEditMode(false);
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour de l'article:", error);
//       toast({
//         title: "Erreur lors de la mise à jour de l'article",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleClick = () => {
//     if (caftanId && userId) {
//       AddToCart(quantity);
//     } else {
//       console.error("caftanId or userId is undefined");
//     }
//   };

//   return (
//     <Container maxW="10xl" px={{ base: 5, md: 3 }} py={7}>
//       <Button bg="none" mb={"20px"} as={Link} to="/caftan">
//         Retour
//       </Button>
//       <Stack
//         direction={{ base: "column", md: "row" }}
//         justifyContent="center"
//         gap="40px">
//         <Box m={0} mx={{ base: "auto", md: "auto", lg: 0 }} pos="relative">
//           <Image
//             m={0}
//             boxShadow="lg"
//             minW={{ base: "auto", md: "20rem", lg: "30rem" }}
//             maxH="30rem"
//             objectFit="cover"
//             src={caftan.imageURL}
//             rounded="md"
//             fallback={<Skeleton />}
//           />
//         </Box>
//         <Stack direction="column" spacing={6} justifyContent="center">
//           <Heading
//             fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//             lineHeight={1}
//             fontWeight="bold"
//             textAlign="left">
//             {caftan.title_Produit}
//           </Heading>
//           <Heading
//             fontSize="2xl"
//             lineHeight={1}
//             fontWeight="bold"
//             textAlign="left">
//             {caftan.price} €
//           </Heading>
//           <Text fontSize="md">Description</Text>
//           {isAdmin && isEditMode ? (
//             <textarea
//               rows={4}
//               value={newDescription}
//               onChange={handleChangeDescription}
//             />
//           ) : (
//             <Text fontSize="md" maxW={"500px"}>
//               {caftan.description}
//             </Text>
//           )}
//           {isAdmin && isEditMode ? (
//             <Stack direction="row" spacing={4} m={"30px"}>
//               <Button onClick={handleSaveDescription}>Enregistrer</Button>
//               <Button onClick={() => setIsEditMode(false)}>Annuler</Button>
//             </Stack>
//           ) : isAdmin && !isEditMode ? (
//             <Button onClick={handleEditDescription}>Modifier</Button>
//           ) : null}

//           <Box>
//             <Button onClick={decrementQuantity} bg={"none"}>
//               -
//             </Button>
//             <span>{quantity}</span>
//             <Button onClick={incrementQuantity} bg={"none"}>
//               +
//             </Button>
//           </Box>
//           <Flex
//             justify={"center"}
//             bg={useColorModeValue("gray.50", "gray.800")}>
//             <Container maxW="m">
//               <Accordion allowMultiple width="100%" maxW="xl" rounded="lg">
//                 <AccordionItem>
//                   <AccordionButton
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="space-between"
//                     p={4}>
//                     <Text fontSize="md">Détails du produit :</Text>
//                     <ChevronDownIcon fontSize="24px" />
//                   </AccordionButton>
//                   <AccordionPanel pb={4}>
//                     <Text color="gray.600">
//                       <li>Matière : Mousseline de haute qualité </li>
//                       <li>Incrusté de pierres pour une touche scintillante </li>
//                       <li>
//                         Travail artisanal minutieux Fourni avec une ceinture
//                         assortie pour souligner votre silhouette
//                       </li>
//                       <li>
//                         Comprend également un voile assorti pour un look complet
//                       </li>
//                     </Text>
//                   </AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem>
//                   <AccordionButton
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="space-between"
//                     p={4}>
//                     <Text fontSize="md">Guide des Tailles</Text>
//                     <ChevronDownIcon fontSize="24px" />
//                   </AccordionButton>
//                   <AccordionPanel pb={4}>
//                     <Text color="gray.600">
//                       Taille 1 = 52/54 : Mesure Moins d'1m62 <br /> Taille 2 =
//                       56/58 : Mesure Entre 1m63 et 1m72 <br /> Taille 3 = 60/62
//                       : Mesure Plus d'1m73
//                     </Text>
//                   </AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </Container>
//           </Flex>

//           {currentUser ? (
//             <Button
//               mt={5}
//               onClick={onOpen}
//               bg={"black"}
//               width="200px"
//               height={"50px"}
//               color={"white"}
//               _hover={{
//                 color: "black",
//                 bg: "none",
//               }}>
//               Ajouter au panier
//             </Button>
//           ) : (
//             <Link to="/connexion">
//               <Button
//                 mt={5}
//                 bg={"black"}
//                 width="200px"
//                 height={"50px"}
//                 color={"white"}
//                 _hover={{
//                   color: "black",
//                   bg: "none",
//                 }}>
//                 Ajouter au panier
//               </Button>
//             </Link>
//           )}

//           <AlertDialog
//             isOpen={isOpen}
//             leastDestructiveRef={cancelRef}
//             onClose={onClose}>
//             <AlertDialogOverlay>
//               <AlertDialogContent>
//                 <AlertDialogHeader fontSize="lg" fontWeight="bold">
//                   Ajouter un produit
//                 </AlertDialogHeader>
//                 <AlertDialogBody>
//                   Voulez-vous ajouter ce produit à votre panier ?
//                 </AlertDialogBody>
//                 <AlertDialogFooter>
//                   <Button ref={cancelRef} onClick={onClose}>
//                     Annuler
//                   </Button>
//                   <Button
//                     bg="black"
//                     color="white"
//                     onClick={() => {
//                       handleClick(1);
//                       onClose();
//                     }}
//                     ml={3}>
//                     Ajouter
//                   </Button>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialogOverlay>
//           </AlertDialog>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// }

// export default PageArticle;
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
import { useCart } from "../../context/CartContext";

function PageArticle() {
  const { caftanId } = useParams();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { cart, setCart } = useCart();

  // partie user / admin / id
  const currentUser = JSON.parse(sessionStorage.getItem("user"));
  const userId = currentUser ? currentUser.userData.id : null;
  const isAdmin = currentUser ? currentUser.userData.isAdmin : false;

  const [quantity, setQuantity] = useState(1);
  const [caftan, setCaftan] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState("");

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/${caftanId}`
        );
        setCaftan(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getArticle();
  }, [caftanId]);

  const updateArticle = async (articleToUpdate) => {
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
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/articles/update/${
          articleToUpdate._id
        }`,
        articleToUpdate,
        config
      );

      if (response.status === 200) {
        // Mettre à jour l'article dans le state local
        setCaftan(articleToUpdate);
      } else {
        throw new Error("Failed to update article");
      }
    } catch (error) {
      throw new Error("Error updating article: " + error.message);
    }
  };

  const AddToCart = async (quantity) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/${caftanId}/add/${userId}`,
        { quantity: quantity }
      );
      console.log(res.data);
      console.log(userId, caftanId);
      const newItem = {
        _id: caftanId,
        ...caftan,
        quantity: quantity,
      };
      const updatedCart = [...cart, newItem];
      // localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      // setQuantity(1);
      toast({
        title: "Article ajouté au panier",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier:", error);
      toast({
        title: "Erreur lors de l'ajout au panier",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleEditDescription = () => {
    setIsEditMode(true);
    setNewDescription(caftan.description);
  };

  const handleChangeDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSaveDescription = async () => {
    try {
      const articleToUpdate = { ...caftan, description: newDescription };
      await updateArticle(articleToUpdate);
      toast({
        title: "Article mis à jour avec succès",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsEditMode(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article:", error);
      toast({
        title: "Erreur lors de la mise à jour de l'article",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleClick = () => {
    if (caftanId && userId) {
      AddToCart(quantity);
    } else {
      console.error("caftanId or userId is undefined");
    }
  };

  return (
    <Container maxW="10xl" px={{ base: 5, md: 3 }} py={7}>
      <Button bg="none" mb={"20px"} as={Link} to="/caftan">
        Retour
      </Button>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="40px">
        <Box m={0} mx={{ base: "auto", md: "auto", lg: 0 }} pos="relative">
          <Image
            m={0}
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
          {isAdmin && isEditMode ? (
            <textarea
              rows={4}
              value={newDescription}
              onChange={handleChangeDescription}
            />
          ) : (
            <Text fontSize="md" maxW={"500px"}>
              {caftan.description}
            </Text>
          )}
          {isAdmin && isEditMode ? (
            <Stack direction="row" spacing={4} m={"30px"}>
              <Button onClick={handleSaveDescription}>Enregistrer</Button>
              <Button onClick={() => setIsEditMode(false)}>Annuler</Button>
            </Stack>
          ) : isAdmin && !isEditMode ? (
            <Button onClick={handleEditDescription}>Modifier</Button>
          ) : null}

          <Box>
            <Button onClick={decrementQuantity} bg={"none"}>
              -
            </Button>
            <span>{quantity}</span>
            <Button onClick={incrementQuantity} bg={"none"}>
              +
            </Button>
          </Box>
          <Flex
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Container maxW="m">
              <Accordion allowMultiple width="100%" maxW="xl" rounded="lg">
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

          {currentUser ? (
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
          ) : (
            <Link to="/connexion">
              <Button
                mt={5}
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
            </Link>
          )}

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
                      handleClick(1);
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
