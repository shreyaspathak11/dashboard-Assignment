import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Flex, Box } from '@chakra-ui/react';

const TableComponent = ({ data }) => {
  return (
    <Box
      w="90%"
      p={4}
      boxShadow="lg"
      border="1px solid"  borderColor="gray.200"
      borderRadius="lg"
      transition="box-shadow 0.3s ease"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize="2xl" fontWeight="bold" mt={2} mb={2}>
          Data Table
        </Heading>
        <Table variant="striped" colorScheme="teal" >
          <Thead>
            <Tr>
              <Th>Sl. No.</Th>
              <Th>Product Name</Th>
              <Th>Sales</Th>
              <Th>New Customers</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id}>
                <Td whiteSpace="nowrap">{index + 1}</Td>
                <Td whiteSpace="nowrap">{item.productName}</Td>
                <Td whiteSpace="nowrap">{item.sales}</Td>
                <Td whiteSpace="nowrap">{item.newCustomers}</Td>
                <Td whiteSpace="nowrap">{item.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Box>
  );
};

export default TableComponent;
