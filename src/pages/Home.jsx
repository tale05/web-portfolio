import Navbar from '../components/Navbar';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Languages from '../pages/Languages';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';
import '../css/Home.css';
import myAvatar from '../assets/avatar.jpeg';
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
import cv1 from '../assets/CV_PhamLeTuanAnh_ENG.pdf';
import cv2 from '../assets/CV_PhamLeTuanAnh_DEU.pdf';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="home-container">
        {/* Info panel */}
        <div className="info-panel">
          <img src={myAvatar} alt="My Avatar" className="profile-avatar" />
          <h1 className="neon-text">
            Welcome to my portfolio!<span className="wave-icon-home">👋</span>
          </h1>
          <h2 className="neon-text-2">I'm Tuan Anh, and this is where my work lives</h2>
          <p className="description">
            A highly passionate individual with a strong desire to explore new knowledge in software and web development, and to apply it in real-world projects 🚀.
          </p>
          <p className="description">
            🎯 Always eager to create modern and user-friendly interfaces for websites and applications 📱.
          </p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
          <div className="button-home">
            <a href={cv1} target="_blank" rel="noopener noreferrer">
              <div className="button-container-home">
                <span className="text-for-button-home">📘 English Resume</span>
              </div>
            </a>
            <a href={cv2} target="_blank" rel="noopener noreferrer">
              <div className="button-container-home">
                <span className="text-for-button-home">🇩🇪 German Lebenslauf</span>
              </div>
            </a>
            <a href="#contact">
              <div class="button-container-home">
                <span class="text-for-button-home">📞 Contact Me</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Skills section */}
      <Skills />
      {/* Education section */}
      <Education />
      {/* Languages section */}
      <Languages />
      {/* Certificates section */}
      <Certificates />
      {/* Contact section */}
      <Contact />
    </>
  );
};

export default Home;