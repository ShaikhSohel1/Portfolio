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
          <GridItem w="100%" h="14">
            <Box boxSize={"auto"}>
              <HStack>
                {/* Logo For HTML5 */}
                <Image src="https://img.icons8.com/color/48/000000/html-5--v1.png" />

                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={"inherit"}>
                    HTML5
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Advanced
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="auto" h="14">
            <Box bgSize={"auto"}>
              <HStack>
                {/* <FaHtml5 className="text-6xl text-orange-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/css3.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    CSS
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                <SiTailwindcss className="text-6xl text-blue-400" size={50} />
                {/* <img src="https://img.icons8.com/color/48/000000/tailwind-css.png" /> */}
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Tailwind
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaReact className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/react-native.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    React
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <SiChakraui className="text-6xl text-[#41C7BF]" size={50} />
                 */}
                <Image src="https://img.icons8.com/color/48/000000/chakra-ui.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    ChakraUI
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Bootstrap
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
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
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaCss3Alt className="text-6xl text-blue-500" size={50} />
                 */}
                <Image src="https://img.icons8.com/color/48/000000/nodejs.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    NodeJs
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaHtml5 className="text-6xl text-orange-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/python--v1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Python
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <SiTailwindcss className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/c-programming.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    C
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaReact className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Java
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/mongodb.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    MongoDB
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/postgreesql.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    PostgreSql
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
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
          <GridItem>
            <HStack>
              {/* NextJs Logo  */}
              <Image src="https://img.icons8.com/color/48/000000/nextjs.png" />
              <VStack>
                <Text noOfLines={1} fontWeight={"bold"}>
                  NextJs
                </Text>
                <Text noOfLines={1} fontSize={"2xs"}>
                  Beginner
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/express-js.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    ExpressJs
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/git.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Git
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/* microsoft Azure logo  */}
                <Image src="https://img.icons8.com/color/48/000000/azure-1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Azure
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/* firebase logo  */}
                <Image src="https://img.icons8.com/color/48/000000/firebase.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Firebase
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/*  Vercel logo  */}
                <SiVercel size={40} />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Vercel
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
        </motion.div>
      </HStack>
    </VStack>
    </motion.div>
  ) :  ( 
// For Mobile Screen
<motion.div
variants={staggerContainer}
 initial="hidden"
whileInView="show"
viewport={{once: false,amount:0.25}}
  

>
    <VStack w={"auto"} justifyContent={"space-evenly"} gap={20}>
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
          boxSize={"auto"}
          rounded={20}
          templateAreas={`"header header"
  `}
        >
          <GridItem area={"header"} textAlign={"center"}>
            <Heading>Frontend</Heading>
            <Text>Libraries</Text>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box boxSize={"auto"}>
              <HStack>
                {/* Logo For HTML5 */}
                <Image src="https://img.icons8.com/color/48/000000/html-5--v1.png" />

                <VStack>
                  <Text
                    noOfLines={1}
                    fontWeight={"bold"}
                    fontSize={"12"}
                    overflow={"scroll"}
                  >
                    HTML5
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"} overflow={"scroll"}>
                    Advanced
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="auto" h="14">
            <Box bgSize={"auto"}>
              <HStack>
                {/* <FaHtml5 className="text-6xl text-orange-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/css3.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"} fontSize={12}>
                    CSS
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                <SiTailwindcss className="text-6xl text-blue-400" size={50} />
                {/* <img src="https://img.icons8.com/color/48/000000/tailwind-css.png" /> */}
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Tailwind
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaReact className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/react-native.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    React
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <SiChakraui className="text-6xl text-[#41C7BF]" size={50} />
                 */}
                <Image src="https://img.icons8.com/color/48/000000/chakra-ui.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    ChakraUI
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Bootstrap
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
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
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaCss3Alt className="text-6xl text-blue-500" size={50} />
                 */}
                <Image src="https://img.icons8.com/color/48/000000/nodejs.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    NodeJs
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaHtml5 className="text-6xl text-orange-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/python--v1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Python
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <SiTailwindcss className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/c-programming.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    C
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaReact className="text-6xl text-blue-400" size={50} /> */}
                <Image src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Java
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/mongodb.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    MongoDB
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/postgreesql.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    PostgreSql
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
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
          <GridItem>
            <HStack>
              {/* NextJs Logo  */}
              <Image src="https://img.icons8.com/color/48/000000/nextjs.png" />
              <VStack>
                <Text noOfLines={1} fontWeight={"bold"}>
                  NextJs
                </Text>
                <Text noOfLines={1} fontSize={"2xs"}>
                  Beginner
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/express-js.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    ExpressJs
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                <Image src="https://img.icons8.com/color/48/000000/git.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Git
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/* microsoft Azure logo  */}
                <Image src="https://img.icons8.com/color/48/000000/azure-1.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Azure
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>

          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/*  Vercel logo  */}
                <SiVercel size={40} />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Vercel
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Beginner
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
          <GridItem w="100%" h="14">
            <Box>
              <HStack>
                {/* <FaBootstrap className="text-6xl text-[#7411F6]" size={50}  /> */}
                {/* firebase logo  */}
                <Image src="https://img.icons8.com/color/48/000000/firebase.png" />
                <VStack>
                  <Text noOfLines={1} fontWeight={"bold"}>
                    Firebase
                  </Text>
                  <Text noOfLines={1} fontSize={"2xs"}>
                    Intermediate
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
        </motion.div>
      </VStack>
    </VStack>
     </motion.div>
  );
};

export default Skills;
