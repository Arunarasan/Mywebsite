import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import profilePic from "./images/pic1.webp";

const Home = () => {
  return (
    <section className="home">
      {/* Left: Text Section */}
      <div className="home-content">
        <h1 className="name-title">
          <span className="typing-text">Hi, I’m Arun Arasan</span>
        </h1>

        <h2 className="role">Full Stack Developer 💻</h2>

        <p className="intro">
          Passionate about building interactive, user-friendly, and efficient web
          applications. I enjoy solving complex problems and bringing ideas to life
          through clean and modern code.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <Link to="/project" className="btn primary-btn">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="home-image">
        <img
          src={profilePic}
          alt="Arun Arasan Profile"
          className="profile"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
