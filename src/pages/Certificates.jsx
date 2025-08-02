import React from "react";
import "../css/Certificates.css";
import { FaCertificate } from "react-icons/fa";

const skills = [
   {
      iconListSkill: null,
      nameListSkill: "TOEIC 605",
      levelListSkill: "Educational Testing Service (ETS)",
   },
   {
      iconListSkill: null,
      nameListSkill: "GOETHE ZERTIFIKAT A1",
      levelListSkill: "Goethe-Institut",
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
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Certificates;
