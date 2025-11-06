import React from "react";
import "./About.css";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import profilePic from "./images/Arun.jpg"; // ✅ Update with actual image path

const About = () => {
  // 🎂 Your Date of Birth
  const dob = new Date("2004-06-06");

  // 🧮 Function to calculate age dynamically
  const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge(dob);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Text Section */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text fade-in">
            Hello 👋 I'm <span className="highlight">Arun</span>, a passionate
            and creative developer from{" "}
            <span className="highlight">Neyveli</span>. I’ve completed my{" "}
            <b>B.E. in Computer Science and Engineering</b>, where I developed
            strong technical and problem-solving skills in building modern web
            applications.
          </p>

          <p className="about-text fade-in">
            My journey started with a curiosity for how things work. I love
            transforming ideas into clean, efficient, and scalable software
            solutions. I’m proficient in{" "}
            <b>Java, ReactJS, Spring Boot, and MySQL</b> — and constantly
            learning new technologies to stay ahead.
          </p>

          {/* Dynamic Stats */}
          <div className="about-stats">
            <div className="stat-card fade-up">
              <h3>{age}+</h3>
              <p>Years Old</p>
            </div>
            <div className="stat-card fade-up">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card fade-up">
              <h3>3+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>

          {/* ✅ Use Link instead of <a> for internal routing */}
          <Link to="/project" className="about-btn">
            View My Projects
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="about-image fade-right">
          <img
            src={profilePic}
            alt="Arun Arasan Profile"
            className="profile-pic"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
