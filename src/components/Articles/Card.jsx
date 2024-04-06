import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

function CardArticle({ imageURL, title_Produit, price }) {
  return (
    <Center p={0} m={0} mt={-5} _hover={{ opacity: 0.6 }}>
      <Box pt={"10px"}>
        <Box
          // maxH={"330px"}
          rounded={"lg"}
          // p={6}

          pos={"relative"}
          height={"180px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            // backgroundImage: `url(${imageURL})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}>
          <Image
            w={"250px"}
            h={"280px"}
            src={imageURL}
            alt=""
            borderRadius="10px"
            align="center"
          />
        </Box>
        <Stack pt={20} align={"center"} mt={30}>
          <Heading
            fontSize={"2xl"}
            color="#94918e"
            fontFamily={"futura"}
            fontWeight={500}>
            {title_Produit}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price} €
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default CardArticle;
