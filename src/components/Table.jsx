// Table.js
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Flex } from '@chakra-ui/react';

const TableComponent = ({ data }) => {
  return (
    <Flex direction="column" alignItems="center" mt={10}>
    <Heading fontSize="xl" fontWeight="bold" mb={4}>
        Data Table
    </Heading>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Sl. No.</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Annual % Change</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={item.id}>
            <Td>{index + 1}</Td>
            <Td>{item.name}</Td>
            <Td>{item.price}</Td>
            <Td>{item.annualChange}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Flex>
  );
};

export default TableComponent;
