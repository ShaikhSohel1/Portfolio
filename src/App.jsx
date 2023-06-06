/* eslint-disable no-unused-vars */

import './App.css'
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Qualification from './components/Qualification';
import Skills from './components/Skills';



function App() {


  return (
    < >
   <Navbar />
   <Banner />
   <About />
   <Qualification />
   <Skills />
    </>
  )
}

export default App
