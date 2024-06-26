import React, { useState } from "react";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

import UserProfileEdit from "./UserProfileEdit";

function UserList({ users, deleteUsers, updateUsers }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsOpen(false);
  };

  const handleSaveUser = (updatedUser) => {
    updateUsers(updatedUser);
  };

  return (
    <Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Identité</Th>
            <Th>Email</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Adresse</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Code Postal</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Map qui affiche la liste des utilisateurs */}
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>
                <span
                  onClick={() => openModal(user)}
                  style={{ cursor: "pointer" }}>
                  {user.fullname}
                </span>
              </Td>
              <Td>{user.email}</Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                {user.address}
              </Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                {user.zipcode}
              </Td>

              <Td key={`delete-${user._id}`}>
                <Button
                  m={0}
                  onClick={() => deleteUsers(user._id)}
                  bg={"red"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                  }}>
                  X
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <UserProfileEdit
        user={selectedUser}
        isOpen={isOpen}
        onClose={closeModal}
        onSave={handleSaveUser}
      />
    </Box>
  );
}

export default UserList;
