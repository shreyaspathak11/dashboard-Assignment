import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Flex,
  Spinner, 
} from '@chakra-ui/react';


const Login = () => {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Flex minH="100vh" bgGradient={bgGradient} align="center" justify="center" textColor={textColor} fontFamily={'Alkatra'}>
      <Container
        maxW={{ base: 'xs', md: 'md' }}
        bg={'white'}
        boxShadow={'lg'}
        rounded={'lg'}
        p={6}
        direction="column"
      >
        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" fontFamily={'Alkatra'} mb={5}>
          Login to Your Account
        </Heading>
        <Box mt={8} mb={3}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            size="lg"
            rounded="full"
            autoComplete="email" 
          />
        </Box>
        <Box mb={6}>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            size="lg"
            rounded="full"
            autoComplete="current-password" 
          />
        </Box>
        <Stack spacing={6}>
          <Button
            bg={'teal.500'}
            color={'white'}
            _hover={{ bg: 'teal.600' }}
            rounded={'full'}
            size="lg"
            
            disabled={loading} 
          >
            {loading ? <Spinner size="sm" color="white" /> : 'Login'}
          </Button>
          <Stack direction={{ base: 'column', md: 'row' }} align={'center'} justify={'space-between'}>
            <Text fontSize="md">
              Don't have an account?{' '}
              <Link color="teal.500" href="register" fontWeight="semibold">
                Sign Up
              </Link>
            </Text>

          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;
