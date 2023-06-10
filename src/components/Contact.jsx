/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  useColorMode,
  Center,
  Stack,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdSend,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson,BsTwitter } from "react-icons/bs";

const Contact = () => {
    const [resize, setResize] = React.useState('verticle')
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);
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
    <Container h={"full"} w={"full"} mt={"20"} >
    <VStack >
        <VStack>

        <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={"monospace"}>
            Get In Touch 
        </Text>
        <Heading>Contact Me</Heading>
        </VStack>

        <Stack gap={30} alignContent={"center"} justifyContent={"center"} direction={['column','column','column','row','row']}>

            
            <Stack alignContent={"center"} gap={2}>
            <Box bg={bg} color={color} boxSizing={"border-box"} w={"fit-content"} h={"fit-content"} p={"5"} rounded={15} mt={10}  >
                <VStack>
                    <MdEmail size={25} />
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={"monospace"}>
                        Email
                    </Text>
                    <Text mt={{ sm: 3, md: 3, lg: 8 }} fontFamily={"monospace"}>
                       workstation453@gmail.com
                    </Text>
                    <a href="mailto:workstation453@gmail.com" className="text-blue-500">Send a Message</a>
                    
                </VStack>
            
            </Box>
            <Text alignSelf={"center"}>
                OR
            </Text>
            <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start">
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsTwitter size="28px" />}
                  />
                  <IconButton
                     aria-label="github"
                    variant="ghost"
                   size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                     _hover={{ bg: '#0D74FF' }}
                   icon={<BsDiscord size="28px" />}
                 />
                </HStack>
           
            </Stack>
            <Text alignSelf={"center"}>OR</Text>
            {/* <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start">
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsTwitter size="28px" />}
                  />
                  <IconButton
                     aria-label="github"
                    variant="ghost"
                   size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                     _hover={{ bg: '#0D74FF' }}
                   icon={<BsDiscord size="28px" />}
                 />
                </HStack> */}
                {/* <Text>
                OR
            </Text> */}

       <Stack boxSize={[200,300,400,400,400]} alignContent={"center"} p={2}   color={color} rounded={"md"}>
        <VStack gap={6} mt={5}>
        <InputGroup >
    <InputLeftElement pointerEvents='none'>
        <BsPerson   />
    </InputLeftElement>
    <Input type='text' placeholder='Name'  rounded={"2xl"} />
  </InputGroup>

  <InputGroup>
    <InputLeftElement pointerEvents='none'>
        <MdEmail  />
    </InputLeftElement>
    <Input type='email' placeholder='Email'  rounded={"2xl"}/>
  </InputGroup>

  <Textarea
  rounded={"2xl"}
        placeholder='Message'
        aria-setsize={10}
        size='sm'
        resize={resize}
        
        />
         <Button
            _hover={{
                transform: "scale(0.95)",
                opacity: "0.8",
                transitionDelay: "0.1s",
            }}
            css={
                {
                    
                    background: "linear-gradient( to right,#44ea76, #39fad7);)",
                }
            }
             
            size="lg"
            leftIcon={<MdSend size={25} />}
            p={8}
            rounded={10}
            alignSelf={"center"}
            className="Btn"

            
            >
            Send
          </Button>
        </VStack>
              </Stack>
        </Stack>
    </VStack>
    </Container>

//     <Container maxW="full" mt={0} centerContent overflow="hidden">
//     <Flex>
//       <Box
//         bg={bg}
//         color={color}
//         borderRadius="lg"
//         m={{ sm: 4, md: 16, lg: 10 }}
//         p={{ sm: 5, md: 5, lg: 16 }}>
//         <Box p={4}>
//           <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//             <WrapItem>
//               <Box>
//                 <Heading>Contact</Heading>
//                 <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                   Fill up the form below to contact
//                 </Text>
//                 <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                   <VStack pl={0} spacing={3} alignItems="flex-start">
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="ghost"
//                       color="#DCE2FF"
//                       _hover={{ border: '2px solid #1C6FEB' }}
//                       leftIcon={<MdPhone color="#1970F1" size="20px" />}>
//                       +91-988888888
//                     </Button>
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="ghost"
//                       color="#DCE2FF"
//                       _hover={{ border: '2px solid #1C6FEB' }}
//                       leftIcon={<MdEmail color="#1970F1" size="20px" />}>
//                       hello@abc.com
//                     </Button>
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="ghost"
//                       color="#DCE2FF"
//                       _hover={{ border: '2px solid #1C6FEB' }}
//                       leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
//                       Karnavati, India
//                     </Button>
//                   </VStack>
//                 </Box>
//                 <HStack
//                   mt={{ lg: 10, md: 10 }}
//                   spacing={5}
//                   px={5}
//                   alignItems="flex-start">
//                   <IconButton
//                     aria-label="facebook"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: '#0D74FF' }}
//                     icon={<MdFacebook size="28px" />}
//                   />
//                   <IconButton
//                     aria-label="github"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: '#0D74FF' }}
//                     icon={<BsGithub size="28px" />}
//                   />
//                   <IconButton
//                     aria-label="discord"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: '#0D74FF' }}
//                     icon={<BsDiscord size="28px" />}
//                   />
//                 </HStack>
//               </Box>
//             </WrapItem>
//             <WrapItem>
//               <Box bg="white" borderRadius="lg">
//                 <Box m={8} color="#0B0E3F">
//                   <VStack spacing={5}>
//                     <FormControl id="name">
//                       <FormLabel>Your Name</FormLabel>
//                       <InputGroup borderColor="#E0E1E7">
//                         <InputLeftElement
//                           pointerEvents="none"
//                           children={<BsPerson color="gray.800" />}
                          
//                         />
//                         <Input type="text" size="md" />
//                       </InputGroup>
//                     </FormControl>
//                     <FormControl id="name">
//                       <FormLabel>Mail</FormLabel>
//                       <InputGroup borderColor="#E0E1E7">
//                         <InputLeftElement
//                           pointerEvents="none"
//                           children={<MdOutlineEmail color="gray.800" />}
//                         />
//                         <Input type="text" size="md" />
//                       </InputGroup>
//                     </FormControl>
//                     <FormControl id="name">
//                       <FormLabel>Message</FormLabel>
//                       <Textarea
//                         borderColor="gray.300"
//                         _hover={{
//                           borderRadius: 'gray.300',
//                         }}
//                         placeholder="message"
//                       />
//                     </FormControl>
//                     <FormControl id="name" float="right">
//                       <Button
//                         variant="solid"
//                         bg="#0D74FF"
//                         color="white"
//                         _hover={{}}>
//                         Send Message
//                       </Button>
//                     </FormControl>
//                   </VStack>
//                 </Box>
//               </Box>
//             </WrapItem>
//           </Wrap>
//         </Box>
//       </Box>
//     </Flex>
//   </Container>
  );
};

export default Contact;
