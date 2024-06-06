import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ pathContact,pathAbout,pathHome,pathProject,pathResume,pathSkill}) => {
  return (
    <header>
      <div>
        
      </div>
    <nav className="nav_bar">
        <button type="submit" onClick={pathHome}>HOME </button>
        <button type="submit" onClick={pathAbout}>ABOUT</button>
        <button type="submit" onClick={pathProject}>PROJECTS</button>
    <button type="submit">     <Link id='link' to='https://drive.google.com/file/d/1A1CoWOggMnO-lma4vA8STVUJ8D4RwLUa/view?usp=drivesdk'>RESUME</Link> </button>   
        <button type="submit" onClick={pathSkill}>SKILLS</button>
        <button type="submit"onClick={pathContact}>CONTACT</button>
    </nav>
       
    </header>
  )
}

export default Header