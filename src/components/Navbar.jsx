/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  Center,
  UnorderedList,
  IconButton,
} from "@chakra-ui/react";
import { Image, Heading, Box, Switch } from "@chakra-ui/react";
import {motion} from "framer-motion";
import {
  BiHomeAlt2,
  BiUserPlus,
  BiLibrary,
  BiMessageSquare,
  BiSun,
  BiMoon,
  BiCategory,
} from "react-icons/bi";
import { GoMortarBoard } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import profileUrl from "../assets/sohel.jpg"; // Tell webpack this JS file uses this image
import "../utils/motion.js";
import { MotionConfig } from "framer-motion";
import { headerVariants } from "../utils/motion.js";
import Banner from "./Banner";
import About from "./About";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
 

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };
  // Drawer for mobile view of header component using chakra ui drawer component and useDisclosure hook from chakra ui library to open and close drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  //to set width of screen using useState hook
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);

  //to set width of screen using useEffect
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen ? (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false, amount:0.25 }}
    id="header"
    >

    <HStack justifyContent={"space-evenly"} p={4}>
      <Image
        borderRadius="full"
        boxSize="4rem"
        src={profileUrl}
        alt="Dan Abramov"
        className="hover:animate-spin  " 
        cursor={"pointer"}   
        />

      <Heading size="md">Sohel Shaikh</Heading>

      <HStack spacing={8} width={"fit-content"} bg={bg} rounded={"3xl"} p={3}>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} className="active:underline" href="#banner"> 
          <BiHomeAlt2 color={color} size={20} className="active:underline"/>
        </Link>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#about">
          <BiUserPlus
            color={color}
            size={20}
            className="hover:ease-in-out 0.9s "
            />
        </Link>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#Academics">
          <GoMortarBoard color={color} size={20} />
        </Link>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#skills"  >
          <BiLibrary color={color} size={20}  />
        </Link>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#projects">
          <MdOutlineWorkOutline color={color} size={20} />
        </Link>
        <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#contact">
          <BiMessageSquare color={color} size={20} />
        </Link>
      </HStack>

      <IconButton
    variant="solid"
    aria-label="toggle theme"
    rounded="full"
    size="lg"
    bg={bg}
    color={color}
    onClick={toggleColorMode}
    icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
    </HStack>
    </motion.div>
  ) : 
  // Mobile View of header component
  (
   
      
    <HStack
      // justifyContent={"space-between"}
      // p={4}
      pos={"fixed"}
      top={0}
      // left={0}
      // borderTopRadius={10}
      boxShadow="xl"
      color={color}
      // w={"100%"}
      
      >
       
      <Button
        // pos={"fixed"}
        // right={"20"}
        bg={bg}
        p={0}
        // w={50}
        // h={10}
        boxShadow="xl"
        // borderEndRadius={"full"}
        borderBottomRadius={10}
        size={"md"}
        
    
        onClick={onOpen}
        transform={"translateX(-50%,-50%)"}
        zIndex={100}
        // mb={10}
        >
        <BiCategory size={"25"} color={color} />
      </Button>
      <IconButton
    variant="solid"
    aria-label="toggle theme"
    rounded="full"
    size="md"
    // position="absolute"
    // bottom={4}
    // left={4}
    zIndex={100}
    pos={"fixed"}
    top={0}
    right={0}
    bg={bg}
    m={2}
    onClick={toggleColorMode}
    icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader justifyItems={"center"}>Sohel  Shaikh</DrawerHeader>

          <DrawerBody>
            <VStack>
              <HStack>
                {/* <BiMoon color={!color} size={20} /> */}
         
                {/* <BiSun color={!color} size={20} /> */}
                {/* {colorMode === "light" ? "Dark" : "Light"} */}
              </HStack>
              <HStack alignItems={"flex-start"} spacing={"5"}>
                <Button color={color} bg={bg} >
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#banner">
                    <BiHomeAlt2 color={color} size={20} />
                  </Link>
                </Button>
                <Button color={color} bg={bg}>
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#about">
                    <BiUserPlus
                      color={color}
                      size={20}
                      className="hover:ease-in-out 0.9s "
                      />
                  </Link>
                </Button>
                <Button color={color} bg={bg}>
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css}  href="#skills">
                    <BiLibrary color={color} size={20} />
                  </Link>
                </Button>
              </HStack>
              <HStack alignItems={"center"} spacing={"5"} mt={5}>
                <Button color={color} bg={bg}>
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css}  href="#Academics">
                    <GoMortarBoard color={color} size={20} />
                  </Link>
                </Button>
                <Button color={color} bg={bg}>
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css} href="#projects">
                    <MdOutlineWorkOutline color={color} size={20} />
                  </Link>
                </Button>
                <Button color={color} bg={bg}>
                  <Link p={2} rounded={25} transition={"all 0.5s"} css={css}  href="#contact">
                    <BiMessageSquare color={color} size={20} />
                  </Link>
                </Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
                     
  );
};

export default Navbar;
