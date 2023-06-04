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
          <Link css={css} transition={"all 0.5s"}>
            <AiFillGithub size={20} />
          </Link>
          <Link css={css} transition={"all 0.5s"}>
            <AiOutlineLinkedin size={20} />
          </Link>

          <Link css={css} transition={"all 0.5s"}>
            <BsInstagram size={20} css={css} />
          </Link>

          <Link css={css} transition={"all 0.5s"}>
            <AiOutlineTwitter size={20} />
          </Link>
        </VStack>

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
            <span className="span">Hire Me</span>
          </button>
        </VStack>
        <VStack spacing={5} p={5} rounded={10} padding={2}>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
          </div>
        </VStack>
      </HStack>
      <HStack>
        <div className="mouse"></div>
      </HStack>
    </VStack>
  ) : (
    //For Mobile View
    <>
      <HStack m={10}>
        <VStack spacing={5} p={5} rounded={10} padding={2} mr={10}>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"></div>
          </div>
        </VStack>
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
          <Link css={css} transition={"all 0.5s"}>
            <AiFillGithub size={20} />
          </Link>
          <Link css={css} transition={"all 0.5s"}>
            <AiOutlineLinkedin size={20} />
          </Link>

          <Link css={css} transition={"all 0.5s"}>
            <BsInstagram size={20} css={css} />
          </Link>

          <Link css={css} transition={"all 0.5s"}>
            <AiOutlineTwitter size={20} />
          </Link>
        </VStack>
      </HStack>
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

        <Text fontFamily={"cursive"} fontWeight={"extrabold"} fontSize={25}>
          {text} <Cursor cursorColor="red" />
        </Text>

        {/* About  */}
        <Text
          fontFamily={"cursive"}
          fontWeight={"light"}
          fontSize={[13, 13, 13, 20]}
          textOverflow={"ellipsis"}
          size={"md"}
          alignItems={"center"}
          p={3}
        >
          I&apos;m creative Fullstack Developer based in Pune, <br />
          and I&apos;m very passionate and dedicated to my work .
        </Text>

        <button className="Btn">
          <svg className="svgIcon" viewBox="0 0 512 512" height="1.2em">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
          </svg>
          <span className="span">Hire Me</span>
        </button>
      </VStack>
    </>
  );
};

export default Banner;
