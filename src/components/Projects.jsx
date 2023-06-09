/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import questIO from "../assets/questIO.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { data } from "../utils/data";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { register } from "swiper/element/bundle";
import { AiFillGithub, AiFillCloud } from "react-icons/ai";

register();

const Projects = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      // console.log('slide changed');
    });
  }, []);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#333333/10", "#F7FAFC/10");
  const bg1 = useColorModeValue("#54ee6d", "#54ee6d");
  const color = useColorModeValue("white", "black");
  const color1 = useColorModeValue("black", "white");
  const cardBg = useColorModeValue("#54ee6d", "#54ee6d");
  const css = {
    "&:hover": {
      transform: "scale(1.5)",
    },
  };

  const css1 = {
    "&:hover": {
      boxShadow: "10px 10px 0 #4e84ff, 20px 20px 0 #4444bd",
    },
  };

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-40"
    >
      
      <VStack>
      <Text fontSize={"md"} textDecorationStyle={"unset"} fontStyle={"oblique"}>
        My Recent 
      </Text>
      <Heading size="2xl" textAlign="center" mb={10} textDecoration={"underline"} >
        Projects
      
      </Heading>
      </VStack>

    
      <div className="h-screen relative flex overflow-hiddem flex-col text-left md:flex-row max-w-full justify-evenly mx-auto item-centre ">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          pagination="true"
          scrollbar="true"
          lazy="true"
          className="mySwiper"
        >
          {data.map(({ id, title, image, desc, github, demoLink }) => {
            return (
              <>
                <swiper-slide key={id}>
                  <VStack mt={"56"}>
                    <motion.div variants={fadeIn("down", "tween", 0.2, 1)}>
                      <Image
                        src={image}
                        alt={title}
                        borderRadius={"xl"}
                        className="article-wrapper"
                        h={"2xs"}
                      />
                    </motion.div>
                    <VStack
                      spacing="1"
                      className="project-info"
                      zIndex={2}
                      pt={20}
                      justifyContent={"center"}
                      textAlign={"center"}
                      px={["0.5","2.5","20","24","36"]}
                    >
                      <Heading size="lg">{title}</Heading>
                      <Text
                        noOfLines={6}
                        fontFamily={"cursive"}
                        fontSize={"2xl"}
                        fontWeight={"light"}
                        fontStyle={"oblique"}
                        
                      >
                        {desc}
                      </Text>
                      <Text className="project-type">
                      Tech Stack : NextJs, Tailwind CSS, Firebase, Framer Motion, Chakra UI, SwiperJs
                      </Text>
                      <HStack spacing={6}>
                        <a href={github}>
                          <AiFillGithub size={25} className="transition-all hover:scale-150 " />
                        </a>
                        <a href={demoLink}>
                          <AiFillCloud size={25} className="transition-all hover:scale-150 "/>
                        </a>
                      </HStack>
                    </VStack>
                  </VStack>
                </swiper-slide>
              </>
            );
          })}
          {/* <swiper-slide>
        1
      </swiper-slide>
      <swiper-slide>
        4
      </swiper-slide>
      <swiper-slide>
        2
      </swiper-slide> */}
        </swiper-container>

        <Box className="w-full absolute top-[30%] h-[500px] bg-[#54ee6d]/10 -skew-y-12"></Box>
      </div>

      {/* <Card maxW='sm' minW={50}   borderRadius={'xl'} bg={'transparent'} color={color1} className='article-wrapper' >
  <CardBody className='rounded-lg container-project'>
    <Image
      src={questIO}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3' className='project-info'>
      <Heading size='lg'>Quest.IO</Heading>
      <Text>
      Quest.io is a state-of-the-art platform that utilizes OpenAI API models to provide users with a seamless way to convert text into images, programming languages, and SQL queries
      </Text>
      <HStack>

      <a className="project-hover" href='https://uiverse.io/' target={'_blank'} rel="noreferrer">
            <svg style={{'color': color}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>

      </HStack>
    </Stack>
  </CardBody>
  
 
</Card> */}

      {/* <article className="article-wrapper">
  <div className="rounded-lg container-project">
    </div>
    <div className="project-info">
      <div className="flex-pr">
        <div className="project-title text-nowrap">Project</div>
          <div className="project-hover">
            <svg style={{'color': 'black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
          <div className="types">
            <span className="project-type">• Analytics</span>
             <span className="project-type">• Dashboards</span>
        </div>
    </div>
</article> */}
    </motion.div>
  );
};

export default Projects;
