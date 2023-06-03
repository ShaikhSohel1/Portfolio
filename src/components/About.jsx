/* eslint-disable no-unused-vars */
import { VStack, Heading, Text, HStack,Image } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isLargeScreen ? (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      p={5}
      spacing={5}
      w={"full"}
      h={"full"}
      mt={"20"}
    >
        <VStack>
            <Text 
             fontSize={"sm"}
              bg={bg}
              bgClip="text"
              fontWeight="light"
               fontFamily={"monospace"}
                textAlign={"center"}
                textShadow="2px 0 currentcolor" 
            >
                Get To Know
            </Text>

      <Text
        fontSize={"4xl"}
        // bgGradient="linear(to-l, #7928CA,#FF0080)"
        bg={bg}
        bgClip="text"
        fontWeight="extrabold"
        fontFamily={"monospace"}
        textAlign={"center"}
        textShadow="2px 0 currentcolor"
        textDecoration={"underline"}
        textDecorationColor={bg}
        >

        About Me
      </Text>
          </VStack>
          <HStack>
            <Image src="https://avatars.githubusercontent.com/u/78678829?v=4" alt="Sohel Shaikh" borderRadius="full" boxSize="150px" />
            <VStack>
                <Text
                fontSize={"xl"}
                bg={bg}
                bgClip="text"
                fontWeight="extrabold"
                fontFamily={"monospace"}
                textAlign={"center"}
                textShadow="2px 0 currentcolor"
                >
                Hi, Im Sohel Shaikh
                </Text>
                <Text
                fontSize={"xl"}
                bg={bg}
                bgClip="text"
                fontWeight="extrabold"
                fontFamily={"monospace"}
                textAlign={"center"}
                textShadow="2px 0 currentcolor"
                >
                Im a Full Stack Developer
                </Text>
                </VStack>
          </HStack>
    </VStack>
  ) : (
    <div>Hello</div>
  );
};

export default About;
