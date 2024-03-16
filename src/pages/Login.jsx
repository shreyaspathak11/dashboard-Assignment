import React, { useContext } from 'react';
import { Box, Button, Flex, Heading, Image, Input, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { login } from '../authContext/apiCalls';
import { useToast } from '@chakra-ui/react';
import { AuthContext } from '../authContext/AuthContext';

const LoginForm = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const backgroundColor = useColorModeValue('#E0F4FF', 'gray.900');
  const inputBgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { dispatch } = useContext(AuthContext);

  const toast = useToast(); // Initialize useToast here
  const Navigate = useNavigate(); // Initialize useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!email || !password) {
        toast({
            title: 'Error',
            description: 'Email and password are required',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
        return;
    }

    try {
        await login({ email, password }, dispatch);
        toast({
            title: 'Login successful',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        Navigate('/dashboard');
    } catch (error) {
        console.error('Login failed:', error);
        toast({
            title: 'Error',
            description: error.response.data.error || 'An error occurred',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
};


  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" bgColor={backgroundColor}>
      <Image position={"absolute"} top={2} left={2} zIndex={1} h={10} w={10} src={logo} alt="logo" />
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
              name="email"
              placeholder="Email"
              type="email"
              bgColor={inputBgColor}
              mb={3}
              autoComplete='email'
              required
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              bgColor={inputBgColor}
              mb={5}
              autoComplete='current-password'
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
