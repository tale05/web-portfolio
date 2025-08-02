import React, { useState } from "react";
import "../css/Navbar.css";
import {
   FaHome,
   FaCode,
   FaGraduationCap,
   FaGlobe,
   FaCertificate,
   FaBars,
} from "react-icons/fa";
import myAva from "../assets/myAva.jpg";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const yOffset = -70;
   const scrollWithOffset = (id, offset = 0) => {
      const element = document.getElementById(id);
      if (element) {
         const y =
            element.getBoundingClientRect().top + window.pageYOffset + offset;
         window.scrollTo({ top: y, behavior: "smooth" });
      }
   };

   return (
      <nav className="navbar">
         <div className="left-column-navbar">
            <span>
               <img src={myAva} alt="Logo" />
               LE TUAN ANH PHAM
            </span>
         </div>

         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
         </div>

         <div className={`right-column-navbar ${menuOpen ? "open" : ""}`}>
            <ul>
               <li>
                  <a
                     href="#home"
                     onClick={() => {
                        setMenuOpen(false);
                        document
                           .getElementById("home")
                           ?.scrollIntoView({ behavior: "smooth" });
                     }}
                  >
                     <FaHome className="nav-icon" />
                     <span className="nav-text">Home</span>
                  </a>
               </li>
               <li>
                  <a
                     href="#skills"
                     onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        scrollWithOffset("skills", yOffset);
                     }}
                  >
                     <FaCode className="nav-icon" />
                     <span className="nav-text">Skills</span>
                  </a>
               </li>
               <li>
                  <a
                     href="#education"
                     onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        scrollWithOffset("education", yOffset);
                     }}
                  >
                     <FaGraduationCap className="nav-icon" />
                     <span className="nav-text">Education</span>
                  </a>
               </li>
               <li>
                  <a
                     href="#languages"
                     onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        scrollWithOffset("languages", yOffset);
                     }}
                  >
                     <FaGlobe className="nav-icon" />
                     <span className="nav-text">Languages</span>
                  </a>
               </li>
               <li>
                  <a
                     href="#certificates"
                     onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        scrollWithOffset("certificates", yOffset);
                     }}
                  >
                     <FaCertificate className="nav-icon" />
                     <span className="nav-text">Certificates</span>
                  </a>
               </li>
            </ul>
         </div>
         {menuOpen && (
            <div
               className="navbar-overlay"
               onClick={() => setMenuOpen(false)}
            ></div>
         )}
      </nav>
   );
};

export default Navbar;
