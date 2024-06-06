import React from 'react'
import Skills from './Skills'
import Home from "./Home";
import About from './About';
import Projects from './Projects';
import { Route, Routes } from "react-router-dom";
import JS from './JS';
import PY from './Py';
import Mysql from './Mysql';
import Mongodb from './Mongodb';
import Spring from './Spring';
import Node from './Node';
import Reactjs from './React';
import Java from './Java';
import Cpp from './Cpp';
import Contact from './Contact';

const Main = () => {
  return (
    <div className='main'>
         <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='project' element={<Projects />}/> 
          <Route  path='skills' element={<Skills />}>
            <Route path='jss' element={<JS />}></Route>
            <Route path='py' element={<PY />}></Route>
            <Route path='cpp' element={<Cpp />}></Route>
            <Route path='jv' element={<Java />}></Route>
            <Route path='rj' element={<Reactjs />}></Route>
            <Route path='nj' element={<Node />}></Route>
            <Route path='jvs' element={<Spring />}></Route>
            <Route path='md' element={<Mongodb />}></Route>
            <Route path='ms' element={<Mysql />}></Route>
          </Route>
          <Route path='/contact' element = {<Contact />}/>
        </Routes>
    </div>
  )
}

export default Main