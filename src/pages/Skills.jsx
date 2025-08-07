import React from "react";
import "../css/Skills.css";
import { FaCode, FaReact } from "react-icons/fa";
import {
   SiJavascript,
   SiDotnet,
   SiHtml5,
   SiCss3,
   SiMongodb,
   SiGithub,
   SiPostman,
   SiDocker,
   SiGit,
} from "react-icons/si";
import csharpIcon from "../assets/csharpicon-removebg-preview.png";
import sqlIcon from "../assets/sqlicon-removebg-preview.png";
import githubDesktopIcon from "../assets/github-desktop.png";
import winscpIcon from "../assets/winscp.png";
import wordIcon from "../assets/wordIcon.png";
import excelIcon from "../assets/excelIcon.png";
import powerpointIcon from "../assets/powerpointIcon.png";

const iconSize = 40;

const skills = [
   {
      iconListSkill: <SiDotnet color="purple" size={iconSize} />,
      nameListSkill: "ASP.NET Core MVC",
      levelListSkill: "Advanced",
   },
   {
      iconListSkill: (
         <img
            src={csharpIcon}
            alt="C#"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      nameListSkill: "C#",
      levelListSkill: "Advanced",
   },
   {
      iconListSkill: <FaReact color="#22d2e9ff" size={iconSize} />,
      nameListSkill: "ReactJS",
      levelListSkill: "Basic",
   },
   {
      iconListSkill: <SiJavascript color="yellow" size={iconSize} />,
      nameListSkill: "JavaScript",
      levelListSkill: "Intermediate",
   },
   {
      iconListSkill: <SiHtml5 color="#e34c26" size={iconSize} />,
      nameListSkill: "HTML",
      levelListSkill: "Advanced",
   },
   {
      iconListSkill: <SiCss3 color="#264de4" size={iconSize} />,
      nameListSkill: "CSS",
      levelListSkill: "Advanced",
   },
   {
      iconListSkill: <SiDocker color="#2496ED" size={iconSize} />,
      nameListSkill: "Docker",
      levelListSkill: "Basic",
   },
];

const databases = [
   {
      icon: <SiDotnet color="purple" size={iconSize} />,
      name: "ASP.NET Core",
      level: "Advanced",
   },
   {
      icon: (
         <img
            src={sqlIcon}
            alt="SQL Server"
            style={{ width: 50, height: iconSize }}
         />
      ),
      name: "SQL Server",
      level: "Advanced",
   },
   {
      icon: <SiMongodb color="#47A248" size={iconSize} />,
      name: "MongoDB",
      level: "Intermediate",
   },
];

const tools = [
   {
      icon: <SiGithub color="black" size={iconSize} />,
      name: "GitHub",
      level: "Advanced",
   },
   {
      icon: <SiGit color="#f05033" size={iconSize} />,
      name: "Git",
      level: "Advanced",
   },
   {
      icon: (
         <img
            src={githubDesktopIcon}
            alt="GitHub Desktop"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      name: "GitHub Desktop",
      level: "Advanced",
   },
   {
      icon: <SiPostman color="#FF6C37" size={iconSize} />,
      name: "Postman",
      level: "Advanced",
   },
   {
      icon: <SiDocker color="#2496ED" size={iconSize} />,
      name: "Docker Desktop",
      level: "Basic",
   },
   {
      icon: (
         <img
            src={winscpIcon}
            alt="WinSCP"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      name: "WinSCP",
      level: "Intermediate",
   },
   {
      icon: (
         <img
            src={wordIcon}
            alt="Microsoft Word"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      name: "Microsoft Word",
      level: "Advanced",
   },
   {
      icon: (
         <img
            src={excelIcon}
            alt="Microsoft Excel"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      name: "Microsoft Excel",
      level: "Intermediate",
   },
   {
      icon: (
         <img
            src={powerpointIcon}
            alt="Microsoft PowerPoint"
            style={{ width: iconSize, height: iconSize }}
         />
      ),
      name: "Microsoft PowerPoint",
      level: "Intermediate",
   },
];

const Skills = () => {
   return (
      <div id="skills" className="skills-container">
         <div className="skills-tittle-container">
            <FaCode className="skills-icon" />
            <span className="skills-title"> Technical Skills</span>
         </div>
         <h2>+ Languages I Code With</h2>
         <div className="skills-section">
            <div className="skills-grid">
               {skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                     <div className="iconListSkill">{skill.iconListSkill}</div>
                     <h3 className="nameListSkill">{skill.nameListSkill}</h3>
                     <p className="levelListSkill">{skill.levelListSkill}</p>
                  </div>
               ))}
            </div>
         </div>

         <h2>+ Databases I Work With in Backend Development</h2>
         <div className="skills-section">
            <div className="skills-grid">
               {databases.map((database, index) => (
                  <div className="skill-card" key={index}>
                     <div className="iconListSkill">{database.icon}</div>
                     <h3 className="nameListSkill">{database.name}</h3>
                     <p className="levelListSkill">{database.level}</p>
                  </div>
               ))}
            </div>
         </div>

         <h2>+ Tools</h2>
         <div className="skills-section">
            <div className="skills-grid">
               {tools.map((tool, index) => (
                  <div className="skill-card" key={index}>
                     <div className="iconListSkill">{tool.icon}</div>
                     <h3 className="nameListSkill">{tool.name}</h3>
                     <p className="levelListSkill">{tool.level}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Skills;
