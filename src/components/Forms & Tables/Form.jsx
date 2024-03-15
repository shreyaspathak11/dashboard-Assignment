import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Stack, useColorModeValue, useToast } from '@chakra-ui/react';

const Form = ({ onSubmit }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const inputBgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const [formData, setFormData] = useState({ productName: '', sales: '', newCustomers: '', date: getCurrentDate() });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any input field is empty
    if (!formData.productName || !formData.sales || !formData.newCustomers || !formData.date) {
     toast({
        title: "Invalid Input",
        description: "Please fill all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    onSubmit(formData);
    toast({
      title: "Data Added",
      description: "Data has been added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({ productName: '', sales: '', newCustomers: '', date: getCurrentDate() });
  };

  // Function to get the current date in the format YYYY-MM-DD
  function getCurrentDate() {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <Box w="500px" paddingTop={10} paddingBottom={50} boxShadow={'lg'} bgColor={bgColor} border="1px solid"  borderColor={borderColor}   borderRadius="lg" transition="all 0.2s"
    _hover={{
      boxShadow: 'lg',
    }}>
      <form onSubmit={handleSubmit} >
        <Flex direction="column" padding="10px">
          <Heading fontSize="2xl" fontWeight="bold" mb={10}>Please Add New Data Here:</Heading>
          <Stack spacing={4} pl={5} pr={5}>
            <Input
              placeholder="Product Name"
              value={formData.productName}
              type="text"
              bgColor={inputBgColor}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            />
            <Input
              placeholder="Sales"
              type="number"
              min="0"
              bgColor={inputBgColor}
              value={formData.sales}
              onChange={(e) => setFormData({ ...formData, sales: e.target.value })}
            />
            <Input
              placeholder="New Customers"
              type="number"
              min="0"
              bgColor={inputBgColor}
              value={formData.newCustomers}
              onChange={(e) => setFormData({ ...formData, newCustomers: e.target.value })}
            />
            <Input
              placeholder="Date"
              type="date"
              bgColor={inputBgColor}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </Stack>
          <Button type="submit" mt={5} w={"80%"} ml={12} color={"white"} bg="teal" _hover={{ bgColor: "gray.400", color:"teal" }}>
           + Add Data
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Form;
