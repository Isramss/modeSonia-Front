import { Box, Stack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function UserList({ Users }) {
  return (
    <Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Code Postal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Users.map((User) => (
            <Tr key={User._id}>
              <Td>
                <Link to={`/user/${User._id}`}>{User.fullname}</Link>
              </Td>
              <Td>{User.email}</Td>
              <Td>{User.zipcode}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default UserList;
