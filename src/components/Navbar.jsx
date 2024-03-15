import React from 'react';
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? '#A7FFE4' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.400';
  const borderColor = colorMode === 'light' ? 'gray.200' : 'gray.600';

  return (
    <>
      <Box bgColor={bgColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} boxShadow={'xl'} textColor={textColor} borderColor={borderColor}>
          <Image src={logo} alt="Logo" boxSize="50px" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", }, }} />
          <Box>DASHBOARD</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
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
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
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
