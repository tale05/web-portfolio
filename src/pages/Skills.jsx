import GitHubCalendar from "react-github-calendar";
import "../css/Skills.css";
import { FaCode, FaReact, FaProjectDiagram } from "react-icons/fa";
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

const projects = [
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "Project 1: web-tour-hat",
      desc: "This is the official website of H.A.T Travel Company, designed to promote tourism and provide customers with detailed information about our tours. The platform showcases a wide range of tours across Vietnam and features articles related to travel and destinations.",
      sub: "dulichhat.com",
      link: "https://github.com/tale05/web-tour-hat",
   },
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "Project 2: ccah-app-strain",
      desc: "This is an application system designed to manage the microorganism products of the Culture Collection of Algae at Hochiminh City (CCAH). The system provides functionalities such as product management, product approval for market distribution, and a variety of additional features.",
      sub: "CCAH-App",
      link: "https://github.com/tale05/ccah-app-strain",
   },
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "Project 3: ccah-web-strain",
      desc: "This website promotes microorganism products from the Culture Collection of Algae at Hochiminh City (CCAH), under Ho Chi Minh City University of Industry and Trade, and highlights its research on biodiversity, biotechnology, and microalgae applications.",
      sub: "ccah.edu.vn",
      link: "https://github.com/tale05/ccah-web-strain",
   },
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "Project 4: app-hotel-management",
      desc: "A smart hotel management solution that simplifies daily operations. From room booking, check-in/out, and room changes to managing customers, staff, services, and equipment — everything is streamlined in one system. Built-in invoicing and powerful reporting help you stay in control and make data-driven decisions effortlessly.",
      sub: "Hotel Management App",
      link: "https://github.com/tale05/app-hotel-management",
   },
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "Project 5: app-toy-store-management",
      desc: "MYKINGDOM is a comprehensive toy store management app that simplifies store operations. It supports order creation, sales tracking, inventory management, and printing invoices or stock receipts. The system also provides role-based user login, product, customer, and staff management, along with reporting and revenue statistics to help store owners make informed decisions.",
      sub: "Toys-Store Management App ",
      link: "https://github.com/tale05/app-toy-store-management",
   },
   {
      icon: <FaProjectDiagram color="green" size={iconSize} />,
      name: "More",
      link: "https://github.com/tale05?tab=repositories",
   },
];

const Skills = () => {
   return (
      <div id="skills" className="skills-container">
         <div className="skills-tittle-container">
            <FaCode className="skills-icon" />
            <span className="skills-title"> Technical Skills</span>
         </div>
         <h2>+ Languages & Technologies 🚀</h2>
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

         <h2>+ Databases I Work With in Backend Development 🛢️</h2>
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

         <h2>+ Tools ⚙️</h2>
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

         <h2>+ Projects I’ve Worked On 📂</h2>
         <div className="skills-github-calendar">
            <div className="github-stats">
               <img
                  src="https://github-readme-stats.vercel.app/api?username=tale05&show_icons=true&theme=transparent"
                  alt="GitHub stats"
               />
            </div>
            <div className="github-calendar">
               <GitHubCalendar
                  username="tale05"
                  blockSize={15}
                  blockMargin={5}
                  color="#4caf50"
                  fontSize={16}
                  showWeekdayLabels={true}
                  style={{ width: "100%", maxWidth: "900px", color: "#fff" }}
               />
            </div>
         </div>
         <div className="skills-section">
            <div className="skills-grid">
               {projects.map((project, index) => (
                  <div className="skill-card" key={index}>
                     <div className="iconListSkill">{project.icon}</div>
                     <h3 className="nameListSkill">{project.name}</h3>
                     <p className="levelListSkill">{project.sub}</p>
                     <a
                        href={project.link}
                        style={{ color: "#1976d2" }}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        View Project
                     </a>
                     <h4 className="levelListSkill">{project.desc}</h4>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Skills;
