import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Box, useColorModeValue } from '@chakra-ui/react';

const TableComponent = ({ data }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const shouldScroll = data.length > 5;

  return (
    <Box
      p={4}
      boxShadow="lg"
      border="1px solid"
      borderColor={borderColor}
      bgColor={bgColor}
      borderRadius="lg"
      transition="box-shadow 0.3s ease"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" textAlign="center" mb={4} fontFamily={"Roboto Condensed"}>
        DATA TABLE
      </Heading>
      <Box  overflowX={"auto"} overflowY={shouldScroll ? "scroll" : "visible"} maxHeight={shouldScroll ? "250px" : "auto"}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th display={{ base: 'none', md: 'table-cell' }}>Sl. No.</Th>
              <Th>Product Name</Th>
              <Th>Sales</Th>
              <Th>New Customers</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody textAlign={'center'}>
            {data.map((item, index) => (
              <Tr key={item.id}>
                <Td display={{ base: 'none', md: 'table-cell' }}>{index + 1}</Td>
                <Td>{item.productName}</Td>
                <Td>{item.sales}</Td>
                <Td >{item.newCustomers}</Td>
                <Td>{item.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TableComponent;
