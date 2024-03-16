import React from 'react';
import { Box, Button, Flex, Heading, Input, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const LoginForm = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const backgroundColor = useColorModeValue('#E0F4FF', 'gray.900');
  const inputBgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" bgColor={backgroundColor}>
    <Button
          position="absolute"
          top={2}
          right={2}
          onClick={toggleColorMode}
          zIndex={1}
          size="sm"
        >
          {useColorModeValue(<FaMoon />, <FaSun />)}
        </Button>
    <Box w={{ base: '100%', md: '400px' }} p={5} m={5} boxShadow="xl" bgColor={bgColor} border="1px solid"  borderColor={borderColor} borderRadius="lg">
      <Heading fontSize="2xl" textAlign="center" mb={5} fontFamily={"Roboto Condensed"}>LOGIN</Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="center">
          <Input
            placeholder="Email"
            type="email"
            bgColor={inputBgColor}
            mb={3}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            bgColor={inputBgColor}
            mb={5}
            required
          />
          <Button type="submit" colorScheme="teal" w="100%">Login</Button>
        </Flex>
      </form>
      <Flex justifyContent="center" mt={5}>
        <Text>Don't have an account? </Text>
        <Link as={RouterLink} to="/signup" color="teal.500" fontWeight="bold">Sign up</Link>
      </Flex>
    </Box>
    </Flex>
  );
};

export default LoginForm;
