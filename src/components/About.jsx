/* eslint-disable no-unused-vars */
import { VStack, Heading, Text, HStack, Image } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";
import devUrl from "../assets/devProfile.png";

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
  const aboutText =
    "Highly motivated software engineer with a strong desire for entry-level employment in a dynamic and progressive company. Currently pursuing a Master's in Computer Science at Fergusson College Pune, I possess a diverse range of technology experience. My skill set includes developing web projects using Node.js, React (JavaScript and TypeScript), HTML, CSS, Tailwind, and database management. Additionally, I am proficient in Java. I am enthusiastic about contributing to a collaborative team, continuously expanding my knowledge, and leveraging technology to address business requirements effectively. I am eager to apply my skills and expertise to add significant value to an organization.";

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
    alignContent={"center"}
    // justifyContent={"space-evenly"}
    gap={10}

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
      <HStack justifyContent={"space-evenly"} gap={[20,20,20,30,300]}>
        <Image
          src={devUrl}
          alt="Sohel Shaikh"
          boxSize={[200,200,200,350,400]}
          bg={bg}
          className="drop"
        />
        <VStack>
          <Text
            fontSize={["sm", "sm", "sm","lg"]}
            bg={bg}
            bgClip="text"
            fontWeight="medium"
            fontFamily={"monospace"}
            textAlign={"start"}
            // textShadow="2px 0 currentcolor"
            width={["sm", "sm", "sm","lg"]}
            letterSpacing={"tight"}

            
            
          >
           {aboutText}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  ) : (
    <div>Hello</div>
  );
};

export default About;
