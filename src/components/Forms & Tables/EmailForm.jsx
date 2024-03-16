import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Textarea, useToast, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const EmailForm = () => {
  const [formData, setFormData] = useState({ Email: '', message: '', attachments: [] });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    const files = e.target.files;
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] });
  };

  const handleRemoveAttachment = (index) => {
    const updatedAttachments = formData.attachments.filter((_, i) => i !== index);
    setFormData({ ...formData, attachments: updatedAttachments });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with Nodemailer to send the email with the provided data
    console.log(formData);
    // Reset the form data after submission
    setFormData({ Email: '', message: '', attachments: [] });
    toast({
      title: 'Message Sent',
      description: 'Your message has been sent successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4} width={{ base: '100%', sm: '70%', md: '40%' }} margin="0" fontFamily={"Roboto Condensed"}>
      <Heading as="h2" size="lg" mb={4} fontFamily={"Roboto Condensed"}>Send Email to Customers</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          name="Email"
          value={formData.email}
          type='email'
          onChange={handleInputChange}
          borderColor={"blue.400"}
          placeholder="Email"
          mb={4}
        />
        <Textarea
          name="message"
          type="text"
          value={formData.message}
          onChange={handleInputChange}
          borderColor={"blue.400"}
          placeholder="Message"
          mb={4}
        />
        <Input
          type="file"
          multiple
          onChange={handleAttachmentChange}
          borderColor={"blue.400"}
          mb={4}
        />
        {formData.attachments.map((file, index) => (
          <Flex key={index} direction={"row"} justifyContent="space-between" alignItems="center" mb={2}>
            <Box>{file.name}</Box>
            <IconButton
              aria-label="Remove attachment"
              icon={<CloseIcon />}
              size="sm"
              onClick={() => handleRemoveAttachment(index)}
            />
          </Flex>
        ))}
        <Button w="40%" type="submit" colorScheme="teal" _hover={{ bgColor: "gray.400", color:"teal" }}>Send</Button>
      </form>
    </Box>
  );
};

export default EmailForm;
