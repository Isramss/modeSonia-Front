import {
  Box,
  Button,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import React from "react";

function UserList({ users, deleteUsers }) {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = userData ? userData.user.isAdmin : false;

  return (
    <Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Code Postal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user._id}>
              <Td>{user.fullname}</Td>
              <Td>{user.email}</Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                {user.zipcode}
              </Td>

              {isAdmin === true ? (
                <Td key={`delete-${user._id}`}>
                  <Button
                    onClick={() => deleteUsers(user._id)}
                    bg={"red"}
                    color={"white"}
                    _hover={{
                      bg: "black",
                    }}>
                    X
                  </Button>
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default UserList;
