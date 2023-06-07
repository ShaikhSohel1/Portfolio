/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, headerVariants, staggerContainer } from "../utils/motion";

const Qualification = () => {
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

  return isLargeScreen ? (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <VStack
        p={4}
        spacing={4}
        // borderRadius="md"
        // boxShadow="md"
        mt={"56"}
        textAlign="center"
        // textDecoration={'underline'}
      >
        <Heading>Qaulification</Heading>
        {/* //    Verticle Timeline  */}
        <div className="container">
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* <!-- Vertical bar running through middle --> */}
                <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <motion.div
                          variants={fadeIn("right", "tween", 0.2, 1)}
                          className="self-start"
                        >
                          <Box bg={bg} color={color} p={4} rounded={8}>
                            <Text>
                              <Heading>10th SSC</Heading>

                              <Text>
                                B.T Shahani Navin Hind High School, Pune
                              </Text>
                            </Text>
                          </Box>
                        </motion.div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <motion.div
                          variants={fadeIn("left", "tween", 0.2, 1)}
                          className="self-start"
                        >
                          <Box bg={bg} color={color} p={4} rounded={8}>
                            <Text>
                              <Heading>12th HSC</Heading>
                              <Text>Science</Text>
                              <Text>AKI's Poona College, Pune</Text>
                            </Text>
                          </Box>
                        </motion.div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <motion.div
                          variants={fadeIn("right", "tween", 0.2, 1)}
                          className="self-start"
                        >
                          <Box bg={bg} color={color} p={4} rounded={8}>
                            <Text>
                              <Heading>Bachlor's </Heading>
                              <Text>In</Text>
                              <Text>Computer Science</Text>
                              <Text>AKI's Poona College, Pune</Text>
                            </Text>
                          </Box>
                        </motion.div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                <div className="mt-6 sm:mt-0">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <motion.div
                          variants={fadeIn("left", "tween", 0.2, 1)}
                          className="self-start"
                        >
                          <Box bg={bg} color={color} p={4} rounded={8}>
                            <Text>
                              <Heading>Master's </Heading>
                              <Text>In</Text>
                              <Text>Computer Science</Text>
                              <Text>Fergusson College, Pune</Text>
                            </Text>
                          </Box>
                        </motion.div>
                      </div>
                    </div>
                    <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VStack>
    </motion.div>
  ) : (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
    >
      <VStack>
        {/* Mobile View  */}

        <Box bg={bg} color={color} p={10} m={10} rounded={25}>
          <h2 className="text-3xl font-bold text-center mb-8">
            Qualifications
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon bg-blue-500 text-white">
                <span className="text-xl">B</span>
              </div>
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor's Degree
                </h3>
                <Text color={color}>
                  <Text>Computer Science</Text>
                  <Text>AKI's Poona College, Pune</Text>
                </Text>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon bg-blue-500 text-white">
                <span className="text-xl">M</span>
              </div>
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Master's Degree</h3>
                <Text color={color}>
                  <Text>Computer Science</Text>
                  <Text>Fergusson College, Pune</Text>
                </Text>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon bg-blue-500 text-white">
                <span className="text-xl">C</span>
              </div>
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <ul className="list-disc pl-6 ">
                  <li>Java (Codedamm) </li>
                  <li>Microsoft Azure Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </VStack>
    </motion.div>
  );
};

export default Qualification;
