import "../css/Languages.css";
import { FaGlobe } from "react-icons/fa";

const skills = [
   {
      iconListSkill: null,
      nameListSkill: "Vietnamese",
      levelListSkill: "Native",
   },
   {
      iconListSkill: null,
      nameListSkill: "English",
      levelListSkill: "Advanced",
   },
   {
      iconListSkill: null,
      nameListSkill: "German",
      levelListSkill: "Basic (A1)",
   },
];

const Languages = () => {
   return (
      <div id="languages" className="skills-container">
         <div className="skills-tittle-container">
            <FaGlobe className="skills-icon" />
            <span className="skills-title"> Languages</span>
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

export default Languages;
