import React from 'react'
import { MdJavascript } from 'react-icons/md'
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { GrReactjs } from "react-icons/gr"
import { DiNodejs } from "react-icons/di"
import { SiSpringboot } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { Outlet, useNavigate } from 'react-router-dom'



const Skills = () => {
  const navigate = useNavigate();
  const handlePathjs=(e)=>{
    e.preventDefault()
    navigate('jss');
  }
  const handlePathpy=(e)=>{
    e.preventDefault()
    navigate('py');
  }
  const handlePathcpp=(e)=>{
    e.preventDefault()
    navigate('cpp');
  }
  const handlePathjv=(e)=>{
    e.preventDefault()
    navigate('jv');
  }
  const handlePathRj=(e)=>{
    e.preventDefault()
    navigate('rj');
  }
  const handlePathNj=(e)=>{
    e.preventDefault()
    navigate('nj');
  }
  const handlePathjvs=(e)=>{
    e.preventDefault()
    navigate('jvs');
  }
  const handlePathMD=(e)=>{
    e.preventDefault()
    navigate('md');
  }
  const handlePathms=(e)=>{
    e.preventDefault()
    navigate('ms');
  }
  return (
    <div className='skills'>
      <div className='language'>
          <div id='javaScript'> <button onClick={handlePathjs}><MdJavascript /></button></div>
          <div id='python'><button  onClick={handlePathpy}><FaPython /></button></div>
          <div id='Cpp'><button  onClick={handlePathcpp}><SiCplusplus /></button></div>
          <div id='java'><button  onClick={handlePathjv}><FaJava /></button></div>
          <div id='Reactjs'><button  onClick={handlePathRj}><GrReactjs /></button></div>
          <div id='Nodejs'><button onClick={handlePathNj}><DiNodejs /></button></div>
          <div id='Spring'><button onClick={handlePathjvs}><SiSpringboot /></button></div>
          <div id='MongoDB'><button onClick={handlePathMD}><SiMongodb /></button></div>
          <div id='MySQL'><button onClick={handlePathms}><SiMysql /></button></div>
      </div>
      <div id='show'>
          <Outlet />
      </div>
    </div>
  )
}

export default Skills