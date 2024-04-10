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
//   chakra,
//   Image,
//   Skeleton,
//   Link,
//   Button,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// function PageArticle() {
//   const [caftan, setCaftan] = useState("");
//   const { caftanId } = useParams();
//   console.log(caftanId);

//   useEffect(() => {
//     const getArticle = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:4567/articles/${caftanId}`
//         );
//         setCaftan(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getArticle();
//   }, [caftanId]);

//   return (
//     <Container maxW="6xl" px={{ base: 6, md: 3 }} py={5}>
//       <Stack
//         direction={{ base: "column", md: "row" }}
//         justifyContent="center"
//         align={"center"}
//         gap={10}
//         // spacing={8}
//       >
//         <Box pos="relative">
//           <Image
//             boxShadow="lg"
//             minW={{ base: "auto", md: "30rem" }}
//             maxH="30rem"
//             objectFit="cover"
//             src={caftan.imageURL}
//             rounded="md"
//             fallback={<Skeleton />}
//           />
//         </Box>
//         <Stack direction="column" spacing={6} justifyContent="center">
//           <Heading
//             fontSize="5xl"
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
//           {/* <h1>{caftan.price} €</h1> */}
//           <Box>
//             <Accordion allowMultiple maxW="lg" rounded="lg">
//               <AccordionItem>
//                 <AccordionButton
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                   p={4}>
//                   <Text fontSize="md">Description</Text>
//                   <ChevronDownIcon fontSize="24px" />
//                 </AccordionButton>
//                 <AccordionPanel pb={4}>
//                   <Text color="gray.600">{caftan.description}</Text>
//                 </AccordionPanel>
//               </AccordionItem>
//               <AccordionItem>
//                 <AccordionButton
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                   p={4}>
//                   <Text fontSize="md">Détails du produit :</Text>
//                   <ChevronDownIcon fontSize="24px" />
//                 </AccordionButton>
//                 <AccordionPanel pb={4}>
//                   <Text color="gray.600">
//                     <li>Matière : Mousseline de haute qualité </li>
//                     <li>Incrusté de pierres pour une touche scintillante </li>
//                     <li>
//                       Travail artisanal minutieux Fourni avec une ceinture
//                       assortie pour souligner votre silhouette
//                     </li>
//                     <li>
//                       Comprend également un voile assorti pour un look complet
//                     </li>
//                   </Text>
//                 </AccordionPanel>
//               </AccordionItem>
//               <AccordionItem>
//                 <AccordionButton
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                   p={4}>
//                   <Text fontSize="md">Guide des Tailles</Text>
//                   <ChevronDownIcon fontSize="24px" />
//                 </AccordionButton>
//                 <AccordionPanel pb={4}>
//                   <Text color="gray.600">
//                     Taille 1 = 52/54 : Mesure Moins d'1m62 <br /> Taille 2 =
//                     56/58 : Mesure Entre 1m63 et 1m72 <br /> Taille 3 = 60/62 :
//                     Mesure Plus d'1m73
//                   </Text>
//                 </AccordionPanel>
//               </AccordionItem>
//             </Accordion>
//           </Box>
//           <Button
//             mt={5}
//             // marginLeft="30px"
//             onClick={() => handleEditClick(index)}
//             bg={"black"}
//             width="200px"
//             height={"25px"}
//             color={"white"}
//             _hover={{
//               color: "black",
//               bg: "none",
//             }}>
//             {" "}
//             Ajouter au panier
//           </Button>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// }

// export default PageArticle;

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
  chakra,
  Image,
  Skeleton,
  Link,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PageArticle() {
  const [caftan, setCaftan] = useState("");
  const { caftanId } = useParams();
  console.log(caftanId);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4567/articles/${caftanId}`
        );
        setCaftan(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getArticle();
  }, [caftanId]);

  return (
    <Container maxW="10xl" px={{ base: 5, md: 3 }} py={7}>
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

          <Flex
            // width={"100%"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Container maxW="xl">
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
                    <Text fontSize="md">Description</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="gray.600">{caftan.description}</Text>
                  </AccordionPanel>
                </AccordionItem>
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
            onClick={() => handleEditClick(index)}
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
        </Stack>
      </Stack>
    </Container>
  );
}

export default PageArticle;
