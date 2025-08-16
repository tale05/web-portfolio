import React from "react";
import "../css/Certificates.css";
import { FaCertificate } from "react-icons/fa";

// import ảnh
import GoetheA1 from "../assets/Certificate_A1_Goethe.jpg";
import Toeic from "../assets/Certificate_TOEIC.jpg";

const skills = [
   {
      nameListSkill: "GOETHE ZERTIFIKAT A1",
      levelListSkill: "Goethe-Institut",
      link: GoetheA1,
   },
   {
      nameListSkill: "TOEIC 605",
      levelListSkill: "Educational Testing Service (ETS)",
      link: Toeic,
   },
];

const Certificates = () => {
   return (
      <div id="certificates" className="skills-container">
         <div className="skills-tittle-container">
            <FaCertificate className="skills-icon" />
            <span className="skills-title"> Certificates</span>
         </div>
         <div className="skills-section">
            <div className="skills-grid">
               {skills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                     <h3 className="nameListSkill">{skill.nameListSkill}</h3>
                     <p className="levelListSkill">{skill.levelListSkill}</p>
                     <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                     >
                        MY CERTIFICATE
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Certificates;
