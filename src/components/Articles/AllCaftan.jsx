import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Stack,
  Button,
  FormControl,
  Input,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardArticle from "./Card";

function AllCaftan({ caftans, deleteArticle, updateArticle }) {
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const isAdmin = userData ? userData.userData.isAdmin : false;
  // je l'initialise à -1 (Pour dire qu'on part de rien )
  const [editableIndex, setEditableIndex] = useState(-1);
  const [editArticle, setEditArticle] = useState({
    title_Produit: "",
    imageURL: "",
    price: "",
    description: "",
  });

  const handleEditClick = (index) => {
    setEditableIndex(index);
    setEditArticle(caftans[index]);
  };

  const handleSaveClick = () => {
    updateArticle(editArticle);
    setEditableIndex(-1);
    setEditArticle({
      title_Produit: "",
      imageURL: "",
      price: "",
      description: "",
    });
  };

  const handleCancelClick = () => {
    setEditableIndex(-1);
    setEditArticle({
      title_Produit: "",
      imageURL: "",
      price: "",
      description: "",
    });
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Box className="displayCard">
            {caftans.map((caftan, index) => (
              <Box
                key={`${caftan._id}`}
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                // bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}>
                {isAdmin && editableIndex === index ? (
                  <Box>
                    <Heading>{caftan.title_Produit}</Heading>
                    <FormControl mt={5}>
                      <Input
                        type="text"
                        value={editArticle.title_Produit}
                        onChange={(e) =>
                          setEditArticle({
                            ...editArticle,
                            title_Produit: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl mt={5}>
                      <Input
                        type="url"
                        value={editArticle.imageURL}
                        onChange={(e) =>
                          setEditArticle({
                            ...editArticle,
                            imageURL: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl mt={5}>
                      <Input
                        type="number"
                        value={editArticle.price}
                        onChange={(e) =>
                          setEditArticle({
                            ...editArticle,
                            price: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl mt={5}>
                      <Input
                        type="text"
                        value={editArticle.description}
                        onChange={(e) =>
                          setEditArticle({
                            ...editArticle,
                            description: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <Box mt={10}>
                      <Button
                        onClick={handleSaveClick}
                        bg="black"
                        color="white"
                        mr={3}
                        _hover={{
                          color: "black",
                          bg: "white",
                        }}>
                        Enregistrer
                      </Button>
                      <Button onClick={handleCancelClick}>Annuler</Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    {isAdmin && (
                      <Stack display={"row"} pb="10px" cursor="pointer">
                        <Button
                          mt={-5}
                          onClick={() => handleEditClick(index)}
                          bg={"black"}
                          height={"25px"}
                          color={"white"}
                          _hover={{
                            color: "black",
                            bg: "none",
                          }}>
                          <EditIcon />
                        </Button>
                        <Button
                          mt={-5}
                          onClick={() => deleteArticle(caftan._id)}
                          bg={"none"}
                          marginLeft={"5px"}
                          height={"25px"}
                          color={"red"}
                          _hover={{
                            color: "white",
                            bg: "black",
                          }}>
                          <DeleteIcon />
                          {/* <CloseIcon /> */}
                        </Button>
                      </Stack>
                    )}
                    <Link to={`/caftan/${caftan._id}/add`} key={index}>
                      <CardArticle
                        key={index}
                        imageURL={caftan.imageURL}
                        title_Produit={caftan.title_Produit}
                        price={caftan.price}
                        description={caftan.description}
                      />
                    </Link>
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
}

export default AllCaftan;
