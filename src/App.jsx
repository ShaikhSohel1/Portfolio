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
import Footer from './components/Footer';
import Up from './components/Up';



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
   <Footer />
   <Up />
    </>
  )
}

export default App
