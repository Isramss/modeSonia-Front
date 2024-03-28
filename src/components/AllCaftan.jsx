import { Box, Center, Container, Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardArticle from "./Card";

function AllCaftan() {
  const [caftans, setCaftans] = useState([]);
  const caftanId = useParams();

  useEffect(() => {
    const displayArticle = async (req, res) => {
      try {
        const response = await axios.get("http://localhost:4567/articles/");
        console.log(response.data);
        console.log(response.data.map((caftan) => caftanId));
        setCaftans(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    displayArticle();
  }, []);

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="3xl" className="title_Caftan">
              Caftans
            </Heading>
          </Stack>
          <Box className="displayCard">
            {caftans.map((caftan, index) => (
              <Link to={`/${caftan._id}`} key={index}>
                <CardArticle
                  key={index}
                  // imageURL={caftan.imageURL}
                  title_Produit={caftan.title_Produit}
                  price={caftan.price}
                  // description={caftan.description}
                />
              </Link>
            ))}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
}

export default AllCaftan;
