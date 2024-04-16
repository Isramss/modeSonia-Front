// import { EditIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Button,
//   Center,
//   Container,
//   Divider,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Stack,
//   VStack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// // import { useState } from "react";

// function ProfileEdit({ users, updateUsers }) {
//   // const [newProfile, setNewProfile] = useState([]);
//   const userData = JSON.parse(sessionStorage.getItem("user"));

//   const userDataName = userData ? userData.user.name.first : "";
//   const userDataLast = userData ? userData.user.name.last : "";

//   const [editableIndex, setEditableIndex] = useState(-1);
//   const [editProfile, setEditProfile] = useState({
//     name: { first: "", last: "" },
//     email: "",
//     address: "",
//     zipcode: "",
//   });

//   const handleEditClick = (index) => {
//     setEditableIndex(index);
//     setEditProfile(caftans[index]);
//   };

//   const handleSaveClick = () => {
//     updateArticle(editProfile);
//     setEditableIndex(-1);
//     setEditProfile({
//       name: { first: "", last: "" },
//       email: "",
//       address: "",
//       zipcode: "",
//     });
//   };

//   const handleCancelClick = () => {
//     setEditableIndex(-1);
//     setEditProfile({
//       name: { first: "", last: "" },
//       email: "",
//       address: "",
//       zipcode: "",
//     });
//   };

//   return (
//     <>
//       <Heading
//         className="title_profile"
//         display={"flex"}
//         justifyContent={"center"}>
//         Vos informations personnels
//       </Heading>
//       <Heading p={"20px"}>
//         {userDataLast} {userDataName}
//       </Heading>
//       <Container
//         pb={20}
//         key={`${users._id}`}
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.800")}
//         boxShadow={"2xl"}
//         rounded={"lg"}
//         pos={"relative"}
//         zIndex={1}>
//          { editableIndex === index ? (
//         <Center>
//           <Stack fontSize={"xl"} spacing={6}>
//             <VStack
//               as="form"
//               className="formConnexion"
//               display={"flex"}
//               gap={10}
//               spacing={8}
//               w={{ base: "sm", sm: "lg" }}
//               p={{ base: 5, sm: 6 }}>
//               <VStack spacing={5} w="100%">
//                 <FormControl id="email" isRequired>
//                   <Heading paddingBottom={5}>E-mail :</Heading>
//                   <FormLabel fontSize={20}> {users.email}</FormLabel>
//                 </FormControl>
//                 <Divider />
//                 <FormControl
//                   id="text"
//                   position="relative"
//                   bottom="1px"
//                   isRequired>
//                   <Heading paddingBottom={5}>Adresse :</Heading>

//                   <FormLabel fontSize={20}> {users.address}</FormLabel>
//                 </FormControl>
//                 <Divider />
//                 <FormControl
//                   id="number"
//                   position="relative"
//                   bottom="1px"
//                   isRequired>
//                   <Heading paddingBottom={5}>Code Postal :</Heading>

//                   <FormLabel fontSize={20}> {users.zipcode}</FormLabel>
//                 </FormControl>
//                 <Divider />
//               </VStack>
//               ) : (
//               <Stack display={"row"} pb="10px" cursor="pointer">
//                 <Button
//                   mt={-5}
//                   onClick={() => handleEditClick(index)}
//                   bg={"black"}
//                   height={"25px"}
//                   color={"white"}
//                   _hover={{
//                     color: "black",
//                     bg: "none",
//                   }}>
//                   <EditIcon />
//                 </Button>
//               </Stack>
//             </VStack>
//           </Stack>
//         </Center>
//               )}
//       </Container>
//     </>
//   );
// }
// export default ProfileEdit;

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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function ProfileEdit({ users, updateUsers }) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState({
    id: userData ? userData.user._id : "",
    email: userData ? userData.user.email : "",
    address: userData ? userData.user.address : "",
    zipcode: userData ? userData.user.zipcode : "",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked");
    updateUsers(editProfile.id, {
      email: editProfile.email,
      address: editProfile.address,
      zipcode: editProfile.zipcode,
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // setIsEditing(false);
    setEditProfile({
      id: userData ? userData.user.id : "",
      email: userData ? userData.user.email : "",
      address: userData ? userData.user.address : "",
      zipcode: userData ? userData.user.zipcode : "",
    });
  };

  return (
    <>
      <Heading
        className="title_profile"
        display={"flex"}
        justifyContent={"center"}>
        Vos informations personnelles
      </Heading>
      <Container maxW="7xl" p={{ base: 5, md: 10 }}>
        <Center>
          <Stack spacing={4}>
            <Box className="displayCard">
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}>
                {isEditing ? (
                  <Box>
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
                        Save
                      </Button>
                      <Button onClick={handleCancelClick}>Cancel</Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Heading>E-mail :</Heading>
                    <FormLabel fontSize={20} mt={5}>
                      {editProfile.email}
                    </FormLabel>
                    <Divider />
                    <FormLabel fontSize={20} mt={5}>
                      {editProfile.address}
                    </FormLabel>
                    <Divider />
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
    </>
  );
}

export default ProfileEdit;
