import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { MdAddIcCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {


  return (
    <footer>
      <div className='ft'>
      <div className='footer'>
      <Link to='https://www.facebook.com/profile.php?id=100035450055060&mibextid=ZbWKwL'>
        <button className='gl'><SlSocialFacebook /></button></Link>      
        <button  onClick={() => window.location = 'mailto:yourmail@domain.com'} className='gl'><SlSocialGoogle /></button> 
        <Link to='https://github.com/Arunarasan'><button className='gl'><FaGithub /></button>  </Link>
       
        <Link to='https://www.linkedin.com/in/arun-a-565683250'><button className='gl'> <SlSocialLinkedin /></button>  </Link> 
       
        <Link to='https://www.instagram.com/arun_._arasan?igsh=MXBrNTh3c3h3bjhidw=='><button className='gl'><SlSocialInstagram /></button>  </Link> 
         
         <button onClick={() => window.location = 'tel:+919629129864'} className='gl'><MdAddIcCall /></button> 
       
      </div>
      <div className='menu'>
          <a href='/'>HOME</a>
          <a href='/about'>ABOUT</a>
          <a href='/project'>PROJECTS</a>
          <a href='/skills'>SKILLS</a>
      </div>
      <div className='cp'>
        Copyright &#169;2024; Designed by ARUN
      </div>
      </div>
    </footer>
  )
}

export default Footer