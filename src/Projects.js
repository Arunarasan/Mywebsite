import React from "react";
import "./Projects.css";

// Import your images from src/images
import postOnImg from "./images/postOn.jpg";
import railwayImg from "./images/train.png";
import libraryImg from "./images/library.avif";
import calculatorImg from "./images/calc.avif";
import portfolioImg from "./images/pic1.webp";
import stockupImg from "./images/stockup.jpg";
import carIcon from "./images/icons8-car-100.png";

const Projects = () => {
  const projectList = [
    {
      title: "StockUP",
      description:
        "A desktop stock management system built using Java and MySQL for businesses to manage inventory efficiently.",
      image: stockupImg, // ✅ fixed
      tech: ["Java", "MySQL", "JavaFX"],
      link: "https://github.com/Arunarasan/StockUp",
    },
    {
      title: "Railway Management System",
      description:
        "A Java-based railway ticket management application with seat allocation, passenger details, and route tracking.",
      image: railwayImg, // ✅ fixed
      tech: ["Java", "JDBC", "MySQL"],
      link: "https://github.com/Arunarasan/Railway-management",
    },
    {
      title: "Calculator App",
      description:
        "A clean and modern JavaScript calculator with responsive design and intuitive UI for basic arithmetic operations.",
      image: calculatorImg, // ✅ fixed
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Arunarasan/Calculator",
    },
    {
      title: "PostOn",
      description:
        "A social media platform with a clean and modern interface. Users can post and explore content easily.",
      image: postOnImg, // ✅ fixed
      tech: ["ReactJS", "CSS", "GitHub", "Netlify"],
      link: "https://poston.onrender.com",
    },
    {
      title: "Car Parking System",
      description:
        "A Python-based project to manage car parking slots with entry/exit tracking and billing automation.",
      image: carIcon, // ✅ fixed
      tech: ["Python", "Tkinter", "SQLite"],
      link: "https://github.com/Arunarasan/Car_parking_System",
    },
    {
      title: "Library Management System",
      description:
        "A simple and efficient Java project for managing books, members, and transactions in a digital library setup.",
      image: libraryImg, // ✅ fixed
      tech: ["Java", "MySQL"],
      link: "https://github.com/Arunarasan/libraryManagement",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal responsive portfolio website built with ReactJS and CSS — showcasing my skills and projects.",
      image: portfolioImg, // ✅ fixed
      tech: ["ReactJS", "JavaScript", "CSS"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={proj.image} alt={proj.title} loading="lazy" />
            </div>

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
