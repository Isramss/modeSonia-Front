import React, { Fragment } from "react";
import {
  Container,
  Text,
  Stack,
  Avatar,
  Icon,
  Image,
  Box,
} from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "Sonia",
    position: "Créatrice",
    company: "ModeSonia",
    image: "https://www.arabnews.fr/sites/default/files/inline-images/3_23.jpg",
    content:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper",
  },
];

function AccueilBody() {
  return (
    <Container mt={5} maxW="5xl" p={{ base: 5, md: 8 }}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            direction={{ base: "column", md: "row" }}
            bgGradient="linear(to-br, #DFCBB7, #c3a180)"
            spacing={{ base: 4, md: 10 }}
            p={{ base: 4, md: 10 }}
            rounded="lg"
            justifyContent="center">
            <Box
              width={{ base: "100%", md: "30rem" }}
              pos="relative"
              textAlign={{ base: "center", md: "left" }}>
              <Image
                size="xl"
                pos={{ base: "none", md: "absolute" }}
                rounded="lg"
                src={obj.image}
                top={{ base: 0, md: "-3.8rem" }}
                left="50%"
                transform={{ base: "none", md: "translateX(-50%)" }}
                boxShadow="lg"
              />
            </Box>

            <Stack
              direction="column"
              spacing={4}
              textAlign={{ base: "center", md: "left" }}
              maxW="4xl"
              color="white">
              <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack spacing={0}>
                <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="white"
                  name="avatar"
                  src={obj.image}
                />
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.position}, {obj.company}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Container>
  );
}

export default AccueilBody;
