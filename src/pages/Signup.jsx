import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Image, Input, Link, Text, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa";
import logo from '../assets/logo.png';
import axios from 'axios';

const SignupForm = () => {
  const serverURL = process.env.REACT_APP_SERVER_URL ||"http://localhost:5000"
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const backgroundColor = useColorModeValue('#E0F4FF', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const inputBgColor = useColorModeValue('gray.50', 'gray.700');
  const { toggleColorMode } = useColorMode();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step === 1) {
      // Validate email and password if needed
      setStep(2);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${serverURL}/api/auth/register`, {
        email,
        password,
        username,
      });
      // Assuming your API returns a success message upon successful signup
      toast({
        title: "You are registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/');
      console.log('Signup successful:', response.data);
    } catch (error) {
      // Assuming your API returns an error message in the response data upon failed signup
      const errorMessage = error.response.data.error || 'An error occurred';
      toast({
        title: "Error occurred",
        description: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error('Signup error:', error.response);
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
      <Box position="relative" w={{ base: '100%', md: '400px' }} p={5} m={5} boxShadow="xl" bgColor={bgColor} border={borderColor} borderColor="gray.900" borderRadius="lg">
        
        <Heading fontSize="2xl" textAlign="center" mb={5} fontFamily={"Roboto Condensed"}>SIGN UP</Heading>
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
            <Flex direction="column" alignItems="center">
              <Input
                placeholder="Email"
                type="email"
                bgColor={inputBgColor}
                mb={3}
                value={email}
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                placeholder="Password"
                type="password"
                bgColor={inputBgColor}
                mb={5}
                value={password}
                autoComplete='new-password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" colorScheme="teal">Next<FaArrowRight /></Button>
            </Flex>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
            <Flex direction="column" alignItems="center">
              <Input
                placeholder="Username"
                type="text"
                bgColor={inputBgColor}
                mb={5}
                value={username}
                autoComplete='username'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Button type="submit" colorScheme="teal">Sign up</Button>
            </Flex>
          </form>
        )}
        <Flex justifyContent="center" mt={5}>
          <Text>Already have an account? </Text>
          <Link as={RouterLink} to="/login" color="teal.500" fontWeight="bold">Login</Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SignupForm;
