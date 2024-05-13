import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfileEdit() {
  const [users, setUsers] = useState(null);
  const { userId } = useParams();
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState({
    id: "",
    email: "",
    address: "",
    zipcode: "",
  });

  useEffect(() => {
    const getProfile = async () => {
      try {
        // token auth
        const token = JSON.parse(sessionStorage.getItem("token"));

        if (!token) {
          throw new Error("Token not found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/${userId}`,
          config
        );
        setUsers(res.data);
        setEditProfile(res.data); // Mettre à jour editProfile avec les informations actuelles de l'utilisateur
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, [userId]);

  const updateUsers = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/edit/${userId}`,
        editProfile
      );

      if (res.status === 200) {
        console.log("Utilisateur mis à jour avec succès");
        setIsEditing(false);
        toast({
          title: "Profil mis à jour avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.log("Erreur lors de la mise à jour de l'utilisateur");
      }
    } catch (error) {
      console.error("L'utilisateur n'a pas été modifié:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateUsers();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    }
  };

  const handleCancelClick = () => {
    // Réinitialisez les données de l'édition à partir des données actuelles de l'utilisateur
    setEditProfile(users);
    setIsEditing(false);
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems="center">
        <Box maxW={"1440px"}>
          <Heading
            className="title_profile"
            display={"flex"}
            justifyContent={"center"}>
            Vos informations personnelles
          </Heading>
          <Container maxW="7xl" p={{ base: 5, md: 10 }}>
            <Center>
              <Stack spacing={4}>
                <Box
                  width={{ base: "100%", md: "800px" }}
                  border={"solid 1px"}
                  borderRadius={"10px"}>
                  <Box
                    role={"group"}
                    p={6}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}>
                    {isEditing ? (
                      <Box>
                        {/* <FormControl mt={5}>
                      <Input
                        type="name"
                        value={editProfile.name}
                        onChange={(e) =>
                          setEditProfile({
                            ...editProfile,
                            name: e.target.value,
                          })
                        }
                      />
                    </FormControl> */}
                        <Heading>E-mail :</Heading>
                        <FormControl mt={5}>
                          <Input
                            type="email"
                            value={editProfile.email}
                            onChange={(e) =>
                              setEditProfile({
                                ...editProfile,
                                email: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                        <Heading mt={5}>Adresse :</Heading>
                        <FormControl mt={5}>
                          <Input
                            type="address"
                            value={editProfile.address}
                            onChange={(e) =>
                              setEditProfile({
                                ...editProfile,
                                address: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                        <Heading mt={5}>Code Postal :</Heading>
                        <FormControl mt={5}>
                          <Input
                            type="number"
                            value={editProfile.zipcode}
                            onChange={(e) =>
                              setEditProfile({
                                ...editProfile,
                                zipcode: e.target.value,
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
                        <Heading>E-mail :</Heading>
                        <FormLabel fontSize={20} mt={5}>
                          {editProfile.email}
                        </FormLabel>
                        <Divider />
                        <Heading mt={5}>Adresse :</Heading>
                        <FormLabel fontSize={20} mt={5}>
                          {editProfile.address}
                        </FormLabel>
                        <Divider />
                        <Heading mt={5}>Code Postal :</Heading>
                        <FormLabel fontSize={20} mt={5}>
                          {editProfile.zipcode}
                        </FormLabel>
                        <Divider />
                        <Stack display={"row"} pb="10px" cursor="pointer">
                          <Button
                            mt={5}
                            onClick={handleEditClick}
                            bg={"black"}
                            height={"25px"}
                            color={"white"}
                            _hover={{
                              color: "black",
                              bg: "none",
                            }}>
                            <EditIcon />
                          </Button>
                        </Stack>
                      </>
                    )}
                  </Box>
                </Box>
              </Stack>
            </Center>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default ProfileEdit;
