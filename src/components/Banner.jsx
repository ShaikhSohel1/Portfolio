/* eslint-disable no-unused-vars */
import { HStack, VStack,useColorMode,useColorModeValue} from '@chakra-ui/react'
import React,{useState} from 'react'
import {AiFillGithub,AiOutlineLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'


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

  return (
   
      <HStack justifyContent={'space-evenly'} mt={100} >
        <VStack spacing={10} bg={bg} p={5} rounded={20}>
          <AiFillGithub size={35} color={color}/>
          <AiOutlineLinkedin size={35} color={color}/>
          <AiOutlineTwitter size={35} color={color}/>
          <BsInstagram size={35} color={color} css={css}/>

        </VStack>
      </HStack>
  


  )
}

export default Banner