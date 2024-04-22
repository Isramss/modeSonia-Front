// import { Box } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import CardArticle from "././Articles/Card";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function CarousselCardAccueil() {
//   const [caftans, setCaftans] = useState([]);

//   useEffect(() => {
//     const displayArticle = async () => {
//       try {
//         const response = await axios.get("http://localhost:4567/articles/");
//         setCaftans(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     displayArticle();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1440,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     responsive: [
//       {
//         breakpoint: 780,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 425,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box
//     //   mx={90}
//     // mx={{ base: "50px", md: "80px" }}
//     >
//       {/* <Slider {...settings}> */}
//       {caftans.map((caftan, index) => (
//         <Box
//           key={`${caftan._id}`}
//           // role={"group"}
//           p={6}
//           maxW={"330px"}
//           w={"full"}
//           boxShadow={"2xl"}
//           rounded={"lg"}
//           // pos={"relative"}
//           // zIndex={1}
//         >
//           <Link to={`/caftan/${caftan._id}/add`} key={index}>
//             <CardArticle
//               imageURL={caftan.imageURL}
//               title_Produit={caftan.title_Produit}
//               price={caftan.price}
//               description={caftan.description}
//             />
//           </Link>
//         </Box>
//       ))}
//       {/* </Slider> */}
//     </Box>
//   );
// }

// export default CarousselCardAccueil;

import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardArticle from "././Articles/Card";

function CarousselCardAccueil() {
  const [caftans, setCaftans] = useState([]);
  //   const { userId } = useParams();

  useEffect(() => {
    const displayArticle = async () => {
      try {
        const response = await axios.get("http://localhost:4567/articles/");
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
        Nos Best seller
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
