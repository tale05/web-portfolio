import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../css/Contact.css";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const templateParams = {
         from_name: formData.name,
         reply_to: formData.email,
         message: formData.message,
      };

      emailjs
         .send(
            "service_trjkgzs", // ✅ Service ID của bạn
            "template_sc7yq8b", // ✅ Template ID
            templateParams,
            "m-han_ABTPIjNJN_H" // ✅ Public Key
         )
         .then((response) => {
            console.log("✅ Email sent!", response.status, response.text);
            alert("✅ Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
         })
         .catch((err) => {
            console.error("❌ Email error:", err);
            alert("❌ Failed to send message.");
         });
   };

   return (
      <div id="contact" className="contact-container">
         <div className="contact-title-container">
            <FaPhone className="contact-icon" />
            <span className="contact-title"> Contact Me</span>
         </div>

         <form className="contact-input-container" onSubmit={handleSubmit}>
            <input
               className="contact-input-name"
               type="text"
               name="name"
               placeholder="Your name..."
               value={formData.name}
               onChange={handleChange}
               required
            />
            <input
               className="contact-input-email"
               type="email"
               name="email"
               placeholder="Your email..."
               value={formData.email}
               onChange={handleChange}
               required
            />
            <input
               className="contact-input-message"
               type="text"
               name="message"
               placeholder="Your message..."
               value={formData.message}
               onChange={handleChange}
               required
            />
            <button className="contact-button" type="submit">
               <span>Send Message</span>
            </button>
         </form>
      </div>
   );
};

export default Contact;
