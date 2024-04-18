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
