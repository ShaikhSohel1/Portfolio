/* eslint-disable no-unused-vars */
import React, { useState,useEffect} from "react";
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
} from "@chakra-ui/react";
import { Image, Heading, Box, Switch } from "@chakra-ui/react";
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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const css={
    "&:hover": {
      transform: "scale(1.5)",
    },
  }
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


  return  isLargeScreen?(
    <HStack justifyContent={"space-evenly"} p={4} 
    
    >
      <Image
        borderRadius="full"
        boxSize="4rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />

      <Heading size="md">Sohel Shaikh</Heading>

      <HStack spacing={8} width={"fit-content"} bg={bg} rounded={"3xl"} p={3} >
        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <BiHomeAlt2
            color={color}
            size={20}
        
          />
        </Link>
        <Link
          p={2}
          rounded={25}
          transition={"all 0.5s"}
          css={css}
        >
          <BiUserPlus
            color={color}
            size={20}
            className="hover:ease-in-out 0.9s "
          />
        </Link>
        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <BiLibrary
            color={color}
            size={20}
           
          />
        </Link>
        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <GoMortarBoard
            color={color}
            size={20}
           
          />
        </Link>
        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <MdOutlineWorkOutline
            color={color}
            size={20}
           
          />
        </Link>
        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <BiMessageSquare
            color={color}
            size={20}
           
          />
        </Link>
      </HStack>

      <HStack>
        <BiMoon color={!color} size={20} />
        <Switch size="lg" onChange={toggleColorMode} colorScheme="blackAlpha" />
        <BiSun color={!color} size={20} />
        {colorMode === "light" ? "Dark" : "Light"}
      </HStack>
    </HStack>
  ):
  (
    
      
  <HStack justifyContent={"space-between"}  p={4} pos={"fixed"} bottom={1 } >
       <Image
        borderRadius="full"
        boxSize="2.5rem"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"

      />

    <Button
      pos={"fixed"}
    right={0}
      colorScheme="whiteAlpha"
      bg={bg}
      p={0}
      w={100}
      h={10}
      boxShadow="xl"
      borderEndRadius={"full"}
      borderRightRadius={"full"}
      borderLeftRadius={"full"}
      onClick={onOpen}
      transform={"translateX(-50%,-50%)"}
      zIndex={100}
      mb={10}
      >
      <BiCategory size={"35"} />
    </Button>
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader justifyItems={"center"}>Sohel Shaikh</DrawerHeader>

          <DrawerBody>
            <VStack>

            <HStack alignItems={"flex-start"} spacing={"5"}>
            <Button color={color} bg={bg}>

            <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <BiHomeAlt2
            color={color}
            size={20}
            
            />
        </Link>
            </Button>
        <Button color={color} bg={bg}>

        <Link
          p={2}
          rounded={25}
          transition={"all 0.5s"}
          css={css}
          >
          <BiUserPlus
            color={color}
            size={20}
            className="hover:ease-in-out 0.9s "
            />
        </Link>
            </Button>
        <Button color={color} bg={bg}>

        <Link p={2} rounded={25}   transition={"all 0.5s"}
          css={css}>
          <BiLibrary
            color={color}
            size={20}
            
            />
        </Link>
            </Button>
            </HStack>
            <HStack alignItems={"center"} spacing={"5"} mt={5}>
            <Button color={color} bg={bg}>

<Link p={2} rounded={25}   transition={"all 0.5s"}
  css={css}>
  <GoMortarBoard
    color={color}
    size={20}
    
    />
</Link>
    </Button>
<Button color={color} bg={bg}>

<Link p={2} rounded={25}   transition={"all 0.5s"}
  css={css}>
  <MdOutlineWorkOutline
    color={color}
    size={20}
    
    />
</Link>
    </Button>
<Button color={color} bg={bg}>

<Link p={2} rounded={25}   transition={"all 0.5s"}
  css={css}>
  <BiMessageSquare
    color={color}
    size={20}
    
    />
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
