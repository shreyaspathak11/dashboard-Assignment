// Form.js
import React, { useState } from 'react';
import { Button, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', price: '', annualChange: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', price: '', annualChange: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" >
      <Heading fontSize="xl" fontWeight="bold" mb={4}>Please Add New Data Here:</Heading>
        <Stack spacing={4}>
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <Input
            placeholder="Annual % Change"
            value={formData.annualChange}
            onChange={(e) => setFormData({ ...formData, annualChange: e.target.value })}
          />
        </Stack>
        <Button type="submit" mt={4}>Add</Button>
      </Flex>
    </form>
  );
};

export default Form;
