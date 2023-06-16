/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
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
import { BsGithub, BsDiscord, BsPerson, BsTwitter } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mg7lrzq', 'template_q1zseo5', form.current, 'nGBOAif2sdkz3oAzK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  const [resize, setResize] = React.useState("verticle");
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

  const buttonALign = isLargeScreen? "flex-start" : "center";

  return (
    <Container h={"full"} w={"full"} mt={"20"} id="contact">
      <VStack>
        <VStack>
          <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={"monospace"}>
            Get In Touch
          </Text>
          <Heading>Contact Me</Heading>
        </VStack>

        <Stack
          gap={30}
          alignContent={"center"}
          justifyContent={"center"}
          direction={["column", "column", "column", "row", "row"]}
        >
          <Stack alignContent={"center"} gap={2} mt={10}>
            <Box
              bg={bg}
              color={color}
              boxSizing={"border-box"}
              w={"fit-content"}
              h={"fit-content"}
              p={"5"}
              rounded={15}
              mt={5}
              alignSelf={"center"}
            >
              <VStack >
                <MdEmail size={25} />
                <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={"monospace"}>
                  Email
                </Text>
                <Text mt={{ sm: 3, md: 3, lg: 8 }} fontFamily={"monospace"}>
                  workstation453@gmail.com
                </Text>
                <a
                  href="mailto:workstation453@gmail.com"
                  className="text-blue-500"
                >
                  Send a Message
                </a>
              </VStack>
            </Box>
            <Text alignSelf={"center"} fontStyle={"italic"} fontWeight={"bold"}>OR</Text>
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
                icon={<BsGithub size="28px"/>}
                as="a"
                href="https://github.com/ShaikhSohel1" 
                target="_blank"
                
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
            </HStack>
          </Stack>
          {/* <Text alignSelf={"center"} fontStyle={"italic"} fontWeight={"bold"}>OR</Text> */}

          <Stack
            boxSize={[400, 400, 400, 400, 600]}  
            p={6 }
            color={color}
            rounded={"md"}
            alignContent = {buttonALign}
            
          >
            <VStack gap={6} >
              <form ref={form} onSubmit={sendEmail} className='mt-5 flex-row items-center' >
              <InputGroup  w={"-moz-min-content"}>
                <InputLeftElement pointerEvents="none">
                  <BsPerson color={color1}/>
                </InputLeftElement>
                <Input type="text" placeholder="Name" rounded={"2xl"} color={color1} required id="name" name="name"/>
              </InputGroup>

              <InputGroup mt={5}>
                <InputLeftElement pointerEvents="none">
                  <MdEmail color={color1}/>
                </InputLeftElement>
                <Input type="email" placeholder="Email" rounded={"2xl"} color={color1}  required id="email" name="email"/>
              </InputGroup>

              <Textarea
              id="message"
              name="message"
                rounded={"2xl"}
                placeholder="Message"
                aria-setsize={10}
                size="sm"
                resize={resize}
                color={color1}
                required
                mt={5}
                />

                {/* Make This Button Centre  */}
              <Button
                _hover={{
                  transform: "scale(0.95)",
                  opacity: "0.8",
                  transitionDelay: "0.1s",
                }}
                css={{
                  background: "linear-gradient( to right,#44ea76, #39fad7);)",
                }}
                size="sm"
                rightIcon={<MdSend size={25} />}
                px={2}
                py={8}
                mt={5}
                rounded={10}
                // make button centre
                  
                // className="Btn"
                type="submit"
                >
                Send Message
              </Button>
                </form>
            </VStack>
          </Stack>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Contact;
