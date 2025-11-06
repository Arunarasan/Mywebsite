import React from "react";
import "./Skills.css";
import { MdJavascript } from "react-icons/md";
import { FaJava, FaPython } from "react-icons/fa";
import { SiCplusplus, SiSpringboot, SiMongodb, SiMysql } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { Outlet, useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();

  const skillList = [
    { id: "jss", name: "JavaScript", icon: <MdJavascript />, level: 85 },
    { id: "py", name: "Python", icon: <FaPython />, level: 80 },
    { id: "cpp", name: "C++", icon: <SiCplusplus />, level: 75 },
    { id: "jv", name: "Java", icon: <FaJava />, level: 90 },
    { id: "rj", name: "ReactJS", icon: <GrReactjs />, level: 80 },
    { id: "nj", name: "NodeJS", icon: <DiNodejs />, level: 70 },
    { id: "jvs", name: "Spring Boot", icon: <SiSpringboot />, level: 65 },
    { id: "md", name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { id: "ms", name: "MySQL", icon: <SiMysql />, level: 85 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">💻 My Technical Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill) => (
          <div
            key={skill.id}
            className="skill-card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-percent">{skill.level}%</p>
          </div>
        ))}
      </div>
      <div id="show">
        <Outlet />
      </div>
    </div>
  );
};

export default Skills;
