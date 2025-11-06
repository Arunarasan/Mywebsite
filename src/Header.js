import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({
  pathContact,
  pathAbout,
  pathHome,
  pathProject,
  pathSkill,
}) => {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          <span className="purple">A</span>
          <span className="blue">run</span>
        </h2>
      </div>

      <nav className="nav-bar">
        <button onClick={pathHome}>Home</button>
        <button onClick={pathAbout}>About</button>
        <button onClick={pathProject}>Projects</button>
        <button>
          <Link
            id="resume-link"
            to="https://drive.google.com/file/d/1A1CoWOggMnO-lma4vA8STVUJ8D4RwLUa/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </button>
        <button onClick={pathSkill}>Skills</button>
        <button onClick={pathContact}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
