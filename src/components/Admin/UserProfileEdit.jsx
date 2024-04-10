// import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
// import React, { useState } from "react";

// function UserProfileEdit({ user, handleSaveClick, handleCancelClick }) {
//   const [editUser, setEditUser] = useState(user);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser({
//       ...editUser,
//       [name]: value,
//     });
//   };

//   //   const handleSaveClick = () => {
//   //     onSave(editUser);
//   //   };

//   //   const handleCancelClick = () => {
//   //     onCancel();
//   //   };
//   return (
//     <div>
//       <Stack gap="10px" mt="10px">
//         <Input
//           type="text"
//           name="name"
//           value={editUser.name.first}
//           onChange={handleInputChange}
//         />
//         <Input
//           type="text"
//           name="name"
//           value={editUser.name.last}
//           onChange={handleInputChange}
//         />
//         <Input
//           type="email"
//           name="email"
//           value={editUser.email}
//           onChange={handleInputChange}
//         />
//         <Input
//           type="text"
//           name="address"
//           value={editUser.address}
//           onChange={handleInputChange}
//         />
//         <Input
//           type="number"
//           name="zipcode"
//           value={editUser.zipcode}
//           onChange={handleInputChange}
//         />
//         <Stack direction="row" spacing={4}>
//           <Button onClick={handleSaveClick} colorScheme="blue">
//             Save
//           </Button>
//           <Button onClick={handleCancelClick}>Cancel</Button>
//         </Stack>
//       </Stack>
//     </div>

//     // <div>
//     //   <Stack gap="10px" mt="10px">
//     //     <Text>Nom: {user.name.last}</Text>
//     //     <Text>Prenom: {user.name.first}</Text>
//     //     <Text>Email: {user.email}</Text>
//     //     <Text>Address: {user.address}</Text>
//     //     <Text>Code Postal: {user.zipcode}</Text>
//     //   </Stack>
//     // </div>
//   );
// }

// export default UserProfileEdit;
// UserProfileEdit.jsx

import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

function UserProfileEdit({ user, isOpen, onClose, onSave }) {
  const [editUser, setEditUser] = useState({
    name: { first: "", last: "" },
    email: "",
    address: "",
    zipcode: "",
  });

  useEffect(() => {
    if (user) {
      setEditUser(user);
    }
  }, [user]);

  const handleSaveClick = () => {
    onSave(editUser);
    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit User Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={5}>
            <Input
              type="text"
              value={editUser.name.first}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  name: { ...editUser.name, first: e.target.value },
                })
              }
            />
          </FormControl>
          <FormControl mt={5}>
            <Input
              type="text"
              value={editUser.name.last}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  name: { ...editUser.name, last: e.target.value },
                })
              }
            />
          </FormControl>
          <FormControl mt={5}>
            <Input
              type="email"
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl mt={5}>
            <Input
              type="text"
              value={editUser.address}
              onChange={(e) =>
                setEditUser({ ...editUser, address: e.target.value })
              }
            />
          </FormControl>
          <FormControl mt={5}>
            <Input
              type="number"
              value={editUser.zipcode}
              onChange={(e) =>
                setEditUser({ ...editUser, zipcode: e.target.value })
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UserProfileEdit;
