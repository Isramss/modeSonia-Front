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
    <Center py={12}>
      <Box
      // role={"group"}
      // p={6}
      // maxW={"330px"}
      // w={"full"}
      // bg={useColorModeValue("white", "gray.800")}
      // boxShadow={"2xl"}
      // rounded={"lg"}
      // pos={"relative"}
      // zIndex={1}
      // _hover={{ opacity: 0.6 }}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
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
            src={imageURL}
            alt=""
            borderRadius="10px"
            maxH={"300px"}
            maxW={"450px"}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
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
