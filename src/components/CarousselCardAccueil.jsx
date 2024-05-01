import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardArticle from "././Articles/Card";

function CarousselCardAccueil() {
  const [caftans, setCaftans] = useState([]);

  useEffect(() => {
    const displayArticle = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/articles/`
        );
        // Pour inverser l'ordre des éléments de la liste
        const reversedCaftans = response.data.reverse();
        // Pour récupérer les trois derniers éléments
        const lastThreeCaftans = reversedCaftans.slice(0, 3);
        setCaftans(lastThreeCaftans);
      } catch (error) {
        console.error(error);
      }
    };
    displayArticle();
  }, []);

  return (
    <>
      <Text
        className="Title_bestseller"
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
        Nos nouveautés
      </Text>
      <Box className="AccueilDisplay">
        {caftans.map((caftan, index) => (
          <Box
            key={`${caftan._id}`}
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}>
            <Link
              to={`/caftan/${caftan._id}/add`}
              key={index}
              className={"gridAccueil"}>
              <CardArticle
                key={index}
                imageURL={caftan.imageURL}
                title_Produit={caftan.title_Produit}
                price={caftan.price}
                description={caftan.description}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default CarousselCardAccueil;
