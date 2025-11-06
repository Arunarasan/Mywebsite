import React from 'react'
import Skills from './Skills'
import Home from "./Home";
import About from './About';
import Projects from './Projects';
import { Route, Routes } from "react-router-dom";

import Contact from './Contact';

const Main = () => {
  return (
    <div className='main'>
         <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='project' element={<Projects />}/> 
          <Route  path='skills' element={<Skills />}/>
          <Route path='/contact' element = {<Contact />}/>
        </Routes>
    </div>
  )
}

export default Main