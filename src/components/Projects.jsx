/* eslint-disable no-unused-vars */
import { Button, Heading, HStack, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'

const Projects = () => {

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

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
  <HStack justifyContent={"center"}>
  
  </HStack>


  )
}

export default Projects