import React from 'react';
import { Box, Button, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const bgColor = useColorModeValue('gray.200', 'gray.900');
    const textColor = useColorModeValue('gray.900', 'gray.200');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    const GitHubLink = "https://github.com/shreyaspathak11/dashboard-Assignment";
    const LinkedInLink = "https://www.linkedin.com/in/shreyas-pathak-11s/";

  return (
    <Box as="footer"  bg={bgColor} w={"100%"}>
      <Flex h={"10%"} alignItems={'center'} justifyContent={'space-between'} boxShadow={'xl'} textColor={textColor} borderColor={borderColor}>
        <Button m={4} leftIcon={<FaGithub />} colorScheme="black" variant="outline" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", color:"black" }, }} 
        onClick={() => window.open(GitHubLink, "_blank")}
        >
          GitHub
        </Button>

        <Text p={5} textColor={textColor}>Made with ❤️ by Shreyas</Text>
        <Button m={4} leftIcon={<FaLinkedin />} colorScheme="blue" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl" }, }}
        onClick={() => window.open(LinkedInLink, "_blank")}
        >
          LinkedIn
        </Button>
        
      
      </Flex>
    </Box>
  );
};

export default Footer;
