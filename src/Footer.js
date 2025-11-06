import React from "react";
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdAddIcCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* 🌐 Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100035450055060&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="Facebook"
          >
            <SlSocialFacebook />
          </a>

          <a
            href="mailto:yourmail@domain.com"
            className="icon-link"
            title="Send Email"
          >
            <SlSocialGoogle />
          </a>

          <a
            href="https://github.com/Arunarasan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/arun-a-565683250"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="LinkedIn"
          >
            <SlSocialLinkedin />
          </a>

          <a
            href="https://www.instagram.com/arun_._arasan?igsh=MXBrNTh3c3h3bjhidw=="
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="Instagram"
          >
            <SlSocialInstagram />
          </a>

          <a href="tel:+919629129864" className="icon-link" title="Call Me">
            <MdAddIcCall />
          </a>
        </div>

        {/* 🧭 Navigation Links */}
        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/project">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
        </div>

        {/* 📝 Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} | Designed & Developed by{" "}
          <span className="highlight">Arun Arasan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
