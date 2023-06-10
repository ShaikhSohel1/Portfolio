/* eslint-disable no-unused-vars */

import './App.css'
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import React, { useState } from "react";
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {


  return (
    < >
   <Navbar  />
   <Banner />
   <About />
   <Qualification />
   <Skills />
   <Projects />
   <Contact />
    </>
  )
}

export default App
