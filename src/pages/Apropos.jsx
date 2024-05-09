import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import AccueilBody from "../components/AccueilBody";

function Apropos() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems="center">
        <Stack maxW={"1440px"}>
          <Heading
            className="Apropos"
            display={"flex"}
            justifyContent={"center"}
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}>
            Mode Sonia
          </Heading>
          <Text textAlign={"center"}>
            Bienvenue sur ModeSonia, votre destination en ligne pour des Caftans
            élégants et intemporels, confectionnés avec amour en Tunisie.
            <br />
            Fondé en 2010 par la talentueuse créatrice Sonia, ModeSonia incarne
            l'héritage familial de la couture transmis de génération en
            génération.
            <br />
            Inspirée par sa mère et sa grand-mère, qui lui ont enseigné les
            secrets de l'art de la couture dès son plus jeune âge, Sonia a
            rapidement développé une passion pour la création de vêtements.
            Guidée par son désir de partager sa vision de la beauté et de
            l'élégance avec le monde, Sonia a décidé de se lancer dans
            l'aventure de la couture.
            <br />
            Cependant, elle ne voulait pas seulement créer des vêtements ; elle
            voulait offrir une expérience unique à ses clients, alliant qualité
            exceptionnelle, artisanat traditionnel et esthétique raffinée.
            <br />
            C'est ainsi qu'est né ModeSonia. En combinant son héritage familial
            avec une vision moderne, Sonia a créé une collection de Caftans
            exquis, imprégnés de l'essence même de la culture tunisienne.
            <br />
            Chaque pièce est confectionnée avec le plus grand soin, en utilisant
            des tissus de haute qualité et des techniques artisanales
            traditionnelles, pour offrir à ses clients une expérience
            inoubliable.
            <br />
            Poussée par son désir de toucher un public plus large, Sonia a
            décidé de lancer ModeSonia en ligne, permettant ainsi aux amoureux
            de la mode du monde entier d'avoir accès à ses créations uniques.
            <br />
            Avec son site web, elle souhaite partager sa passion pour la
            couture, tout en offrant à ses clients une expérience d'achat
            pratique et agréable, où la qualité et l'attention aux détails sont
            toujours au rendez-vous.
            <br />
            Chez ModeSonia, chaque Caftan raconte une histoire, reflétant
            l'élégance intemporelle et la sophistication de celle qui le porte.
            <br />
            Rejoignez-nous dans notre voyage à travers l'artisanat tunisien et
            découvrez la beauté de ModeSonia.
          </Text>
          <AccueilBody />
          <Heading fontSize={"25px"} textAlign={"center"} mb={30}>
            Rejoignez-nous dans notre voyage à travers l'artisanat tunisien et
            découvrez la beauté de ModeSonia.
          </Heading>
        </Stack>
      </Box>
    </>
  );
}

export default Apropos;
