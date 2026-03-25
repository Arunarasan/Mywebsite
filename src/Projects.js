import React from "react";
import "./Projects.css";

// Import your images from src/images
import postOnImg from "./images/poston_mockup.png";
import railwayImg from "./images/railway_mockup.png";
import libraryImg from "./images/library.avif";
import calculatorImg from "./images/calc.avif";
import portfolioImg from "./images/pic1.webp";
import stockupImg from "./images/stockup_mockup.png";
import carIcon from "./images/icons8-car-100.png";
import spartansImg from "./images/spartans_mockup.png";

const Projects = () => {
  const projectList = [
    {
      title: "Spartans Gym Management System",
      description: "A professional-grade desktop application designed to streamline gym operations. From member registration to automated payment tracking and WhatsApp notifications, Spartans Gym provides a comprehensive solution for modern fitness centers.",
      image: spartansImg,
      features: [
        "Member Management",
        "Membership Assignment",
        "Offer & Discount System",
        "WhatsApp Notification Integration",
        "Secure Data Storage"
      ],
      meta: {
        version: "1.0.0",
        platform: "Windows",
        fileType: "Installer (.exe)",
        fileSize: "56.9 MB",
        lastUpdated: "March 2024"
      },
      action: { type: "download", label: "Download for Windows", link: "/downloads/SpartansGYM.zip" },
      instructions: [
        "Download the .zip file above.",
        "Extract the .zip file.",
        "Double-click to run the installer.",
        "Click Next → Install.",
        "Open from Desktop or Start Menu."
      ]
    },
    {
      title: "StockUP",
      description: "A robust desktop stock management system built using Java and MySQL. It helps businesses track inventory, manage suppliers, and generate detailed sales reports with a user-friendly JavaFX interface.",
      image: stockupImg,
      features: [
        "Inventory Tracking",
        "Supplier Management",
        "Sales Reporting",
        "User Authentication",
        "Low Stock Alerts"
      ],
      meta: {
        version: "1.1.0",
        platform: "Windows",
        fileType: "Java Application",
        fileSize: "45.2 MB",
        lastUpdated: "Feb 2024"
      },
      action: { type: "github", label: "View on GitHub", link: "https://github.com/Arunarasan/StockUp" },
      instructions: [
        "Clone the repository from GitHub.",
        "Ensure Java 17+ and MySQL are installed.",
        "Import the SQL schema provided.",
        "Run the application via Maven or Jar."
      ]
    },
    {
      title: "Railway Management System",
      description: "A comprehensive Java-based ticket management application. It features real-time seat allocation, passenger registration, and detailed route tracking for efficient railway operations.",
      image: railwayImg,
      features: [
        "Seat Allocation",
        "Passenger Registration",
        "Route Tracking",
        "Ticket Cancellation",
        "Admin Dashboard"
      ],
      meta: {
        version: "1.2.0",
        platform: "Cross-platform",
        fileType: "JDBC Application",
        fileSize: "12.4 MB",
        lastUpdated: "Jan 2024"
      },
      action: { type: "github", label: "View on GitHub", link: "https://github.com/Arunarasan/Railway-management" },
      instructions: [
        "Download the source code.",
        "Set up the MySQL database connection.",
        "Compile and run the Main class.",
        "Use Admin credentials to manage routes."
      ]
    },
    {
      title: "PostOn",
      description: "A modern social media platform built with React. It offers a clean interface for users to share posts, interact with content, and explore trending topics in real-time.",
      image: postOnImg,
      features: [
        "Real-time Posting",
        "User Interaction",
        "Trending Feed",
        "Responsive Layout",
        "Netlify Deployment"
      ],
      meta: {
        version: "1.5.0",
        platform: "Web Browser",
        fileType: "React Web App",
        fileSize: "N/A",
        lastUpdated: "Nov 2023"
      },
      action: { type: "live", label: "Explore PostOn", link: "https://poston.onrender.com" },
      instructions: [
        "Visit the live URL provided.",
        "Create an account or sign in.",
        "Start posting and interacting!",
        "Works on all modern browsers."
      ]
    },
    {
      title: "Car Parking System",
      description: "An automated Python-based solution for managing car parking facilities. It tracks entry/exit times, calculates billing, and provides real-time availability updates.",
      image: carIcon,
      features: [
        "Entry/Exit Tracking",
        "Automated Billing",
        "Slot Availability",
        "Admin Control Panel",
        "SQLite Integration"
      ],
      meta: {
        version: "1.0.1",
        platform: "Windows/Linux",
        fileType: "Python/Tkinter",
        fileSize: "5.8 MB",
        lastUpdated: "Oct 2023"
      },
      action: { type: "github", label: "View Source", link: "https://github.com/Arunarasan/Car_parking_System" },
      instructions: [
        "Install Python 3.x.",
        "Install required dependencies via pip.",
        "Run 'python main.py' to start.",
        "Database is managed via SQLite."
      ]
    },
    {
      title: "Library Management System",
      description: "A streamlined Java application for digital libraries. It manages book catalogs, member registrations, and transaction histories with efficient search and filter capabilities.",
      image: libraryImg,
      features: [
        "Book Management",
        "Member Registration",
        "Transaction History",
        "Advanced Search",
        "Database Persistence"
      ],
      meta: {
        version: "1.3.0",
        platform: "Windows",
        fileType: "Java/Swing",
        fileSize: "18.6 MB",
        lastUpdated: "Sep 2023"
      },
      action: { type: "github", label: "View Project", link: "https://github.com/Arunarasan/libraryManagement" },
      instructions: [
        "Clone the repository.",
        "Ensure MySQL is running.",
        "Run the project in your IDE.",
        "Manage books via the Admin panel."
      ]
    },
    {
      title: "Calculator App",
      description: "A sleek, glassmorphism-inspired JavaScript calculator. Built with a focus on UI/UX, it provides a smooth and intuitive experience for basic and advanced arithmetic operations.",
      image: calculatorImg,
      features: [
        "Glassmorphism UI",
        "History Tracking",
        "Responsive Design",
        "Scientific Functions",
        "Clean Codebase"
      ],
      meta: {
        version: "2.0.0",
        platform: "Web Browser",
        fileType: "Vanilla JS",
        fileSize: "N/A",
        lastUpdated: "Dec 2023"
      },
      action: { type: "live", label: "Try Calculator", link: "https://github.com/Arunarasan/Calculator" },
      instructions: [
        "Open the project on GitHub.",
        "Click on the 'Settings' or 'Pages'.",
        "Access the live URL.",
        "Add to home screen for mobile use."
      ]
    },
    {
      title: "Portfolio Website",
      description: "My personal responsive portfolio website built with ReactJS and Custom CSS. It features professional project displays and interactive elements to showcase my work.",
      image: portfolioImg,
      features: [
        "Responsive Design",
        "Custom CSS Styling",
        "ReactJS Architecture",
        "Premium UI/UX",
        "SEO Management"
      ],
      meta: {
        version: "2.1.0",
        platform: "Web Browser",
        fileType: "React Portfolio",
        fileSize: "2.4 MB",
        lastUpdated: "Mar 2024"
      },
      action: { type: "github", label: "Source Code", link: "#" },
      instructions: [
        "The project you are viewing now!",
        "Built with high attention to detail.",
        "Uses React for dynamic rendering.",
        "Custom CSS for premium aesthetics."
      ]
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 My Projects</h2>

      <div className="premium-projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="premium-project-card">
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="features-section">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}><span>✔</span> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-specs">
                <div className="spec-item"><span>Version:</span> {project.meta.version}</div>
                <div className="spec-item"><span>Platform:</span> {project.meta.platform}</div>
                <div className="spec-item"><span>Type:</span> {project.meta.fileType}</div>
                <div className="spec-item"><span>Size:</span> {project.meta.fileSize}</div>
                <div className="spec-item"><span>Updated:</span> {project.meta.lastUpdated}</div>
              </div>

              <div className="project-actions-area">
                <a href={project.action.link} className={`action-btn ${project.action.type}`}
                  target="_blank" rel="noopener noreferrer"
                  download={project.action.type === 'download'}>
                  {project.action.type === 'download' ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M11 5h2v7h3.5L12 16.5 7.5 12H11V5zM4 18h16v2H4v-2z" />
                    </svg>
                  ) : project.action.type === 'github' ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  )}
                  {project.action.label}
                </a>

                {project.action.type === 'download' && (
                  <div className="p-warning">
                    <strong>Note:</strong> If Windows shows "Protected your PC", click "More info" &rarr; "Run anyway".
                  </div>
                )}
              </div>

              <div className="install-steps">
                <h4>{project.action.type === 'download' ? 'How to Install:' : 'How to Use:'}</h4>
                <ol>
                  {project.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
