import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Stack, useToast } from '@chakra-ui/react';

const Form = ({ onSubmit }) => {
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
    <Box w="400px" paddingTop={50} paddingBottom={50}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="bold" mb={4}>Please Add New Data Here:</Heading>
          <Stack spacing={4}>
            <Input
              placeholder="Product Name"
              value={formData.productName}
              type="text"
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            />
            <Input
              placeholder="Sales"
              type="number"
              min="0"
              value={formData.sales}
              onChange={(e) => setFormData({ ...formData, sales: e.target.value })}
            />
            <Input
              placeholder="New Customers"
              type="number"
              min="0"
              value={formData.newCustomers}
              onChange={(e) => setFormData({ ...formData, newCustomers: e.target.value })}
            />
            <Input
              placeholder="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </Stack>
          <Button type="submit" mt={8} bg="teal" _hover={{ bgColor: "black" }}>
            Add Data
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Form;
