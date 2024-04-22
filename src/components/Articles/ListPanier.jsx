import { CloseIcon } from "@chakra-ui/icons";
import { Heading, Text, Image, Button, Td } from "@chakra-ui/react";
import React from "react";

function CartItem({ imageURL, title_Produit, price }) {
  return (
    <>
      <tr>
        <th flex="1">
          <Image
            src={imageURL}
            alt={title_Produit}
            boxSize="80px"
            objectFit="cover"
            borderRadius="md"
            mr={4}
          />
        </th>
        <th flex="3">
          <Heading as="h3" fontSize="lg" mb={1}>
            {title_Produit}
          </Heading>
          <Text fontSize="md" color="gray.500" mb={2}>
            {price} €
          </Text>
        </th>
      </tr>
    </>
  );
}

export default CartItem;
