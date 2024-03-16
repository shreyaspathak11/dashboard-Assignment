import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
  Stack,
  Center,
  Image,
  useToast,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png';
import userimage from '../assets/user.png';
import { AuthContext } from '../authContext/AuthContext';
import { logoutCall } from '../authContext/apiCalls';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? '#9BB0C1' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const borderColor = colorMode === 'light' ? 'gray.200' : 'gray.600';

  const {user, dispatch} = useContext(AuthContext)
  const handleLogout = () => {
    try{
      logoutCall(dispatch)
      Navigate("/")
      toast({
        title: 'Logout successful',
            status: 'success',
            duration: 5000,
            isClosable: true,

      })
    }catch(error){
      toast({
        title: 'Error',
            description: 'An error occurred',
            status: 'error',
            duration: 5000,
            isClosable: true,
      })
    }
  }
  
  return (
    <>
      <Box bgColor={bgColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} boxShadow={'xl'} textColor={textColor} borderColor={borderColor}>
          <Image src={logo} alt="Logo" boxSize="50px" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", }, }} />
          <Box textColor={textColor} fontSize={"xl"} fontWeight={"lg"}  >ADMIN DASHBOARD</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} rounded={'full'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={userimage}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={userimage}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
