/* eslint-disable no-unused-vars */
import {
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Center,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";
import { CgFileDocument } from "react-icons/cg";
import devUrl from "../assets/devProfile.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import resume from "../assets/resume.pdf";

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "#F7FAFC");
  const bg1 = useColorModeValue("#F7FAFC", "#333333");
  const color = useColorModeValue("white", "black");
  const color1 = useColorModeValue("black", "white");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };
  const aboutText =
    "Highly motivated software engineer with a strong desire for entry-level employment in a dynamic and progressive company. Currently pursuing a Master's in Computer Science at Fergusson College Pune, I possess a diverse range of technology experience. My skill set includes developing web projects using  NextJs, Node.js, React (JavaScript and TypeScript), Tailwind, and database management. Additionally, I am proficient in Java. I am enthusiastic about contributing to a collaborative team, continuously expanding my knowledge, and leveraging technology to address business requirements effectively. I am eager to apply my skills and expertise to add significant value to an organization.";

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isLargeScreen ? (
    <motion.div
    variants={staggerContainer}
     initial="hidden"
    whileInView="show"
    viewport={{once: false,amount:0.25}}
    id="about"
      

    >
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      // p={5}
      spacing={5}
      w={"full"}
      h={"full"}
      mt={"20"}
      alignContent={"center"}
      // justifyContent={"space-evenly"}
      gap={10}
      
    >
      <VStack>
      <motion.span
        variants={fadeIn("down","tween", 0.2, 1)}
        
        >

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
        </motion.span>
      </VStack>
      <HStack justifyContent={"space-evenly"} gap={[20, 20, 20, 30, 300]} alignContent={"center"}>
      {/* <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        
        > */}

        <Image
          src={devUrl}
          alt="Sohel Shaikh"
          // boxSize={[200,200,200,350,500]}
          width={["sm", "sm", "2xs", "md"]}
          height={["sm", "sm", "2xs", "md"]}
          // bg={bg}
          className="drop"
        />
        {/* </motion.div> */}

        <VStack gap={10}>
          {/* 3 small card showing experience work and support  */}
          <motion.div
        variants={fadeIn("left","tween", 0.2, 1)}
        className="self-start"
        >

          <HStack gap={5} alignSelf={"start"}>

            
              <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5} borderWidth={"thin"}>
                <VStack>
                  <CircularProgress value={100} color="green.600">
                    <CircularProgressLabel>24/7</CircularProgressLabel>
                  </CircularProgress>
                  <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Support </Heading>
                </VStack>
            </Box>
            <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5} borderWidth={"thin"}>
              <VStack>
                <CircularProgress value={30} color="green.600">
                  <CircularProgressLabel>20+</CircularProgressLabel>
                </CircularProgress>
              <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Projects</Heading>
              </VStack>
            </Box>
            
              <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5}  borderWidth={"thin"}>
                <VStack>
                  <CircularProgress value={10} color="green.600">
                    <CircularProgressLabel>2+</CircularProgressLabel>
                  </CircularProgress>
                  <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Collabration</Heading>
                </VStack>

            </Box>
          </HStack>
          </motion.div>
          <motion.span
        variants={fadeIn("up","tween", 0.2, 1)}
        
        >

          <Text
            fontSize={["sm", "sm", "sm", "lg"]}
            bg={bg}
            bgClip="text"
            fontWeight="medium"
            fontFamily={"revert-layer"}
            textAlign={"start"}
            // textShadow="2px 0 currentcolor"
            width={["sm", "sm", "sm", "lg"]}
            letterSpacing={"tight"}
          >
            {aboutText}
          </Text>
          </motion.span>
          {/* Button For Cv */}
          <motion.span
        variants={fadeIn("up","tween", 0.2, 1)}
        className="self-start"
        
        >

          <Button
            // className="btn"
            // colorScheme={"whatsapp"}
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
            // variant="solid"
            size="lg"
            leftIcon={<CgFileDocument size={25} />}
            as="a"
            href={resume}
            target="_blank"
            download
            p={8}
            rounded={10}
            alignSelf={"start"}
            className="Btn"
          >
            Resume
          </Button>
          </motion.span>
        </VStack>
      </HStack>
    </VStack>
    </motion.div>
  ) : 
  // For Mobile View
  (
    <motion.div
    variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, threshold: 0.2}}
      id="about"
        >

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
      <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        
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
      </motion.div>
      <VStack gap={10}>
      {/* <motion.span
        variants={fadeIn("left","tween", 0.2, 1)}
        
        > */}

        <Image src={devUrl} alt="Sohel Shaikh" boxSize={"2xs"} bg={bg} className="drop" />
        {/* </motion.span> */}
        <VStack gap={10}>
          {/* 3 small card showing experience work and support  */}
          <VStack gap={5} alignSelf={"centre"}>
          <motion.span
        variants={fadeIn("rigth","tween", 0.2, 1)}
        
        >
            <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5} borderWidth={"thin"}>
              <VStack>
                <CircularProgress value={100} color="green.600">
                  <CircularProgressLabel>24/7</CircularProgressLabel>
                </CircularProgress>
                <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Support </Heading>
              </VStack>
            </Box>
            </motion.span>
            <motion.span
        variants={fadeIn("left","tween", 0.2, 1)}
        
        >
            <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5} borderWidth={"thin"}>
              <VStack>
                <CircularProgress value={30} color="green.600">
                  <CircularProgressLabel>20+</CircularProgressLabel>
                </CircularProgress>
              <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Projects</Heading>
              </VStack>
            </Box>
            </motion.span>
            <motion.span
        variants={fadeIn("rigth","tween", 0.2, 1)}
        
        >
            <Box boxSize={"28"} bg={bg1} color={color1} rounded={"lg"} p={5} borderWidth={"thin"}>
              <VStack>
                <CircularProgress value={10} color="green.600">
                  <CircularProgressLabel>2+</CircularProgressLabel>
                </CircularProgress>
                <Heading  fontSize={["sm", "sm", "sm", "lg"]}>Collabration</Heading>
              </VStack>
            </Box>
            </motion.span>
          </VStack>
          {/* Text About Me */}
          <motion.span
        variants={fadeIn("left","tween", 0.2, 1)}
        
        >
          <Text
            fontSize={["sm", "sm", "sm", "lg"]}
            bg={bg}
            bgClip="text"
            fontWeight="medium"
            fontFamily={"revert-layer"}
            textAlign={"center"}
            textShadow="2px 0 currentcolor"
            // width={["sm", "sm", "sm", "lg"]}
            letterSpacing={"tight"}
            
            padding={"5"}
            
          >
            {aboutText}
          </Text>
          </motion.span>
          {/* Button For Cv */}
          <Button
            className="Btn"
            color={color}
            css={ {
              background: "linear-gradient( to right,#44ea76, #39fad7);)",
          }}
          _hover={{
            transform: "scale(0.95)",
            opacity: "0.8",
            transitionDelay: "0.1s",
          }}
          variant="solid"
          size="lg"
          leftIcon={<CgFileDocument />}
          as="a"
          href={resume}
          target="_blank"
          download
          alignSelf={"centre"}
          rounded={"full"}
          >
            Resume
          </Button>
          
        </VStack>
      </VStack>
    </VStack>

            </motion.div>

                           

  );
};

export default About;
