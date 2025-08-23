import "../css/Languages.css";
import { FaGlobe } from "react-icons/fa";
import flag_vn from "../assets/flags/flag_vietnam.png";
import flag_de from "../assets/flags/flag_germany.png";
import flag_en from "../assets/flags/flag_eng.png";

const skills = [
   {
      iconListSkill: flag_vn,
      nameListSkill: " Vietnamese",
      levelListSkill: "Native",
   },
   {
      iconListSkill: flag_de,
      nameListSkill: "German",
      levelListSkill: "Basic (A1)",
   },
   {
      iconListSkill: flag_en,
      nameListSkill: "English",
      levelListSkill: "Advanced",
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
                     <img
                        src={skill.iconListSkill}
                        alt={skill.nameListSkill}
                        className="iconListSkill"
                        width="30"
                     />
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
