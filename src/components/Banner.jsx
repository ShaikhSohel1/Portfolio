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
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram, BsSendPlus } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";
import scrollUrl from "../assets/scroll.gif";
import { motion, useAnimation } from "framer-motion";
import "../utils/motion.js";
import { fadeIn, staggerContainer } from "../utils/motion.js";



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
    deleteSpeed: 30,
    smooth: true,
    // slowMo: 50,
  });

  const [textHead] = useTypewriter({
    words: [`Sohel Shaikh`],
    loop: 1,
    cursorStyle: "|",
  });



    //to set width of screen using useEffect
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
    id="banner"
      

    >
    <VStack gap={300}>
      <HStack
        justifyItems={"center"}
        justifyContent={"space-evenly"}
        alignContent={"center"}
        h={"full"}
        p={[0, 0, 5]}
        gap={[10, 20, 30, 30, 300]}
        mt={[20, 30, 100]}
        alignItems={"center"}
      >
        <motion.div
        variants={fadeIn("right","tween", 0.2, 1)}
        
        >

        
        <VStack
          spacing={"16"}
          p={5}
          rounded={20}
          padding={3}
          h={"full"}
          mr={[10, 10, 0]}
          borderBottomColor={bg}
          borderWidth={3}
          borderTopColor={bg}
        >
          <Link css={css} transition={"all 0.5s"} href="https://github.com/ShaikhSohel1" target="_blank">
            <AiFillGithub size={20} />
          </Link>
          <Link css={css} transition={"all 0.5s"} href="https://www.linkedin.com/in/sohel-shaikh-60018b274/" target="_blank">
            <AiOutlineLinkedin size={20} />
          </Link>

          <Link css={css} transition={"all 0.5s"} href="https://www.instagram.com/what_can_be_the_username/" target="_blank">
            <BsInstagram size={20} css={css} />
          </Link>

          <Link css={css} transition={"all 0.5s"} href="https://twitter.com/ZoroUchiha69?t=JuTafZZ1kBaSrejd3cTzMQ&s=09" target="_blank">
            <AiOutlineTwitter size={20} />
          </Link>
        </VStack>
        </motion.div>

        <motion.div variants={fadeIn("up","tween",0.3,1)}>
        <VStack alignItems={"flex-start"} gap={10}>
          
          <Text
            fontFamily={"serif"}
            fontWeight={"bold"}
            fontSize={[13, 13, 13, 30]}
          >
            {textHead}
            <span className="wave"> 👋</span>
            <Text
              fontFamily={"cursive"}
              fontWeight={"medium"}
              fontSize={[25, 25, 25, 40]}
            >
              {text} <Cursor cursorColor="red" />
            </Text>
          </Text>

          {/* About  */}
          <Text
            fontFamily={"cursive"}
            fontWeight={"light"}
            fontSize={[13, 13, 13, 20]}
            textOverflow={"ellipsis"}
            w={"-moz-min-content"}
            justifySelf={"center"}
          >
            I&apos;m creative Fullstack Developer based in Pune, <br />
            and I&apos;m very passionate and dedicated to my work.
          </Text>

          <button className="Btn h-16">
            <svg className="svgIcon" viewBox="0 0 512 512" height="1.2em">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
            <a className="span" href="#contact">Hire Me</a>
          </button>
        </VStack>
        </motion.div>

        <motion.div
        variants={fadeIn("left","tween", 0.3, 1)}
        
        >

        <VStack spacing={5} p={5} rounded={10} padding={2}>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
          </div>
        </VStack>
        </motion.div>
      </HStack>
      <HStack>
        <div className="mouse"></div>
      </HStack>
    </VStack>
    </motion.div>
  ) : (
    //For Mobile View
    <motion.div
    variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="banner"
    >
      <HStack m={10} justifyContent={"space-between"}>
        <motion.span
          variants={fadeIn("down", "tween", 0.3, 1)}
          >

        <VStack spacing={"16"} p={5} rounded={20} padding={3} h={"full"}>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
          </div>
        </VStack>
        </motion.span>
      
      
        <VStack
          spacing={"16"}
          p={5}
          rounded={20}
          padding={3}
          h={"full"}
          ml={20}
          borderBottomColor={bg}
          borderWidth={3}
          borderTopColor={bg}
          >
            
            <Link css={css} transition={"all 0.5s"} href="https://github.com/ShaikhSohel1" target="_blank">
            <AiFillGithub size={20} />
          </Link>
          <Link css={css} transition={"all 0.5s"} href="https://www.linkedin.com/in/sohel-shaikh-60018b274/" target="_blank">
            <AiOutlineLinkedin size={20} />
          </Link>

          <Link css={css} transition={"all 0.5s"} href="https://www.instagram.com/what_can_be_the_username/" target="_blank">
            <BsInstagram size={20} css={css} />
          </Link>

          <Link css={css} transition={"all 0.5s"} href="https://twitter.com/ZoroUchiha69?t=JuTafZZ1kBaSrejd3cTzMQ&s=09" target="_blank">
            <AiOutlineTwitter size={20} />
          </Link>
            
        </VStack>
        
      </HStack>
      <motion.div variants={fadeIn("up","tween",0.3,1)}>
      <VStack
        gap={10}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        mt={"20"}
      >
        <Text fontFamily={"monospace"} fontWeight={"bold"} fontSize={"md"}>
          {textHead}
          <span className="wave"> 👋</span>
        </Text>

        <Text fontFamily={"monospace"} fontWeight={"extrabold"} fontSize={25}>
          {text}<Cursor cursorColor="red" />
        </Text>

        {/* About  */}
        <Text
          fontFamily={"monospace"}
          fontWeight={"light"}
          fontSize={[13, 13, 13, 20]}
          textOverflow={"ellipsis"}
          size={"md"}
          alignItems={"center"}
          justifyContent={"center"}
        
          // p={3}
        >
          I&apos;m creative Fullstack Developer , 
          and<br /> I&apos;m very passionate and dedicated to<br/> my work .
        </Text>

        <button className="Btn">
          <svg className="svgIcon" viewBox="0 0 512 512" height="1.2em">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
          </svg>
          <a className="span" href="#contact">Hire Me</a>
        </button>
      </VStack>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
