/* eslint-disable no-unused-vars */
import {
  HStack,
  VStack,
  useColorMode,
  useColorModeValue,
  Link,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram,BsSendPlus } from "react-icons/bs";
import { useTypewriter,Cursor,} from "react-simple-typewriter";

const Banner = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };
  const [text] = useTypewriter({
    words: ["-Full Stack Developer", "-Student", "-Designer", "-Freelancer"],
    loop: 0,
    cursorStyle: "|",
    deleteSpeed: 50,
  });

  const [textHead] = useTypewriter({
    words: [`Sohel Shaikh👋`],
    loop: 1,
    cursorStyle: "|",
  
    

  });
  //to set width of screen using useEffect
  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <HStack
      justifyItems={"center"}
      justifyContent={"space-evenly"}
      h={"full"}
      p={[0, 10, 20]}
      gap={20}
      mt={[20, 50, 100]}
      alignItems={"center"}
    
      
    >
      <VStack spacing={5} p={5} rounded={10} padding={2}>
        <Link color={!color} css={css} transition={"all 0.5s"}>
          <AiFillGithub size={20} />
        </Link>
        <Link color={!color} css={css} transition={"all 0.5s"}>
          <AiOutlineLinkedin size={20} />
        </Link>
        <Link color={!color} css={css} transition={"all 0.5s"}>
          <AiOutlineTwitter size={20}  />
        </Link>
        <Link color={!color} css={css} transition={"all 0.5s"}>
          <BsInstagram size={20}  css={css} />
        </Link>
      </VStack>

      <VStack alignItems={"flex-start"} gap={10}>
        <Text
          fontFamily={"serif"}
          fontWeight={"extrabold"}
          fontSize={[25, 30, 50]}
        >
          {textHead} 
          <Text
          fontFamily={"cursive"}
          fontWeight={"light"}
          fontSize={[13, 15, 20]}
        >
          {text}  <Cursor cursorColor="red" />
        </Text>
        </Text>
      
        {/* About  */}
        <Text
          fontFamily={"cursive"}
          fontWeight={"light"}
          fontSize={[13, 15, 20]}
          textOverflow={"ellipsis"}
          w={"-moz-min-content"}
          justifySelf={"center"}
        >
          I&apos;m creative Fullstack Developer based in Pune, <br />
          and I&apos;m very passionate and dedicated to my work.
        </Text>
        
        <Button variant={"solid"} color={color} bg={bg} gap={3} rounded={15} p={[3,5,7]} transition={"all 0.5s"} colorScheme={"messenger"}>
          <Text> Say Hello</Text>  <BsSendPlus size={20} />  
        </Button>
      </VStack>
    </HStack>
  );
};

export default Banner;
