/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  chakra,
  Container,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import profileUl from '../assets/sohel.jpg';



const Logo = (props) => {
  return (
   <Avatar size={["sm",'md','lg','lg','lg']} src={profileUl} name='Sohel Shaikh'/>
  );
};




const Footer = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const bg1 = useColorModeValue("#54ee6d", "#54ee6d");

  const color1 = useColorModeValue("black", "white");
  const cardBg = useColorModeValue("#54ee6d", "#54ee6d");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };

  const css1 = {
    "&:hover": {
      boxShadow: "10px 10px 0 #4e84ff, 20px 20px 0 #4444bd",
    },
  };
  return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
    mt={'44'}>
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      spacing={4}
      justify={'center'}
      align={'center'}>
      <Logo />
      <Stack direction={'row'} spacing={6}>
        <Link href={'#banner'}>Home</Link>
        <Link href={'#about'}>About</Link>
        <Link href={'#Academics'}>Qualification</Link>

        
      </Stack>
    </Container>

    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© Copywright 2023 . All rights reserved</Text>
        <HStack
              mt={{ lg: 10, md: 10 }}
              spacing={5}
              px={5}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: bg , color:color}}
                icon={<BsTwitter size="28px" />}
                as="a"
                href="https://twitter.com/ZoroUchiha69?t=JuTafZZ1kBaSrejd3cTzMQ&s=09" 
                target="_blank"
              />
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: bg , color:color }}
                icon={<BsGithub size="28px"
                href="https://github.com/ShaikhSohel1" 
                target="_blank"
                />}
              />
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: bg , color:color }}
                icon={<BsDiscord size="28px" />}
                as='a'
                href="https://discordapp.com/users/GodOfWar#5958"
                target="_blank"
              />

<IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: bg , color:color }}
                icon={<BsLinkedin size="28px" />}
                as='a'
                href="https://www.linkedin.com/in/sohel-shaikh-60018b274/"
                target="_blank"
              />
            </HStack>

        
      </Container>
    </Box>
  </Box>
);
  
}

export default Footer