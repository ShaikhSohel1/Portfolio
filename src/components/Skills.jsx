/* eslint-disable no-unused-vars */
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { IconBase } from "react-icons/lib";
import { SiTailwindcss, SiJavascript, SiVercel } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import python from "../assets/python.png";
import nodejs from "../assets/nodejs.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import mysql from "../assets/mysql.png";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion";
import { skillsBackend, skillsFramework, skillsFrontend } from "../utils/data";


const Skills = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
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

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen ? (
    // For Desktop Screen 
    <motion.div
    variants={staggerContainer}
     initial="hidden"
    whileInView="show"
    viewport={{once: false,amount:0.25}}
    id="skills"
    
      

    >

  
    <VStack w={"auto"} justifyContent={"space-evenly"} gap={20}>
      <Heading>Skills</Heading>
      <HStack gap={20} w={"auto"} mx={36} px={5}>
        {/* Frontend  */}
        <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
    `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Frontend</Heading>
            <Text>Libraries</Text>
          </GridItem>
          {
          skillsFrontend.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="14" key={id}>
            <Box boxSize={"auto"}>
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={"inherit"}>
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
  
        </Grid>
        </motion.div>

        {/* Backend  */}
        <motion.div
        variants={fadeIn("up","tween", 0.2, 1)}
        
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          justifyContent={"center"}
          alignContent={"center"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
    `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Backend</Heading>
            <Text>Database</Text>
          </GridItem>
          {
          skillsBackend.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="14" key={id}>
            <Box boxSize={"auto"}>
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={"inherit"}>
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
        </Grid>
        </motion.div>
        {/* Frameworks & Tools  */}
        <motion.div
        variants={fadeIn("left","tween", 0.2, 1)}
        
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          justifyContent={"center"}
          alignContent={"center"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
    `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Framework</Heading>
            <Text>Tools</Text>
          </GridItem>
          {
          skillsFramework.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="14" key={id}>
            <Box boxSize={"auto"}>
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={"inherit"}>
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
        </Grid>
        </motion.div>
      </HStack>
    </VStack>
    </motion.div>
  ) :  ( 
// For Mobile Screen
<motion.div
variants={staggerContainer}
 initial="show"
whileInView="show"
viewport={{once: true,amount:0.25}}
className="skills w-full"
id="skills"

>
    <VStack w={"full"} justifyContent={"space-evenly"} gap={20}>
      <Heading>Skills</Heading>
      <VStack gap={20} w={"auto"} mx={36} px={5}>
        {/* Frontend  */}
        <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          w={"auto"}
          boxSize={"auto"}
          h={"auto"}
          rounded={20}
          templateAreas={`"header header"
  `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Frontend</Heading>
            <Text>Libraries</Text>
          </GridItem>
          {
          skillsFrontend.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="auto" key={id} >
            <Box boxSize={"auto"} >
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={["2xs","inherit"]} >
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"} >
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
        </Grid>
        </motion.div>


        {/* Backend  */}
        <motion.div
        variants={fadeIn("left","tween", 0.2, 1)}
        
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          justifyContent={"center"}
          alignContent={"center"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
  `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Backend</Heading>
            <Text>Database</Text>
          </GridItem>
          {
          skillsBackend.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="14" key={id}>
            <Box boxSize={"auto"}>
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={["2xs","inherit"]}>
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
        </Grid>
        </motion.div>

        {/* Frameworks & Tools  */}
        <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={"14"}
          justifyContent={"center"}
          alignContent={"center"}
          bg={bg}
          color={color}
          p={5}
          gridArea={"auto"}
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
  `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Framework</Heading>
            <Text>Tools</Text>
          </GridItem>
          {
          skillsFramework.map(({id , title ,desc , image }) =>{
            return(
              <GridItem w="100%" h="14" key={id}>
            <Box boxSize={"auto"}>
              <HStack>
              
                <Image src={image} />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={["2xs","inherit"]}>
                    {title}
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    {desc}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
            )
          } )

          }
        </Grid>
        </motion.div>
      </VStack>
    </VStack>
     </motion.div>
  );
};

export default Skills;
