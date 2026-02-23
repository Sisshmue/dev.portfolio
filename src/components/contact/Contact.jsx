import "./Contact.css";
import Profile from "../../assets/info/moving_profile.gif";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export function Contact() {
  return (
    <div className="contact-container">
      <div className="profile-image-wrapper">
        <img src={Profile} alt="Profile" className="profile-image" />
      </div>

      <div className="info-container">
        <h2 className="name-text">Siss Hmue Aung</h2>

        <p className="bio-text">Fullstack / Mobile Dev</p>
      </div>

      <div className="contact-buttons">
        <AiOutlineLinkedin className="linkedin contact-button" />
        <FaGithubSquare className="github contact-button" />
        <FaWhatsappSquare className="whatsapp contact-button" />
      </div>
    </div>
  );
}
