import "./Info.css";
import Profile from "../../assets/info/moving_profile.gif";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export function Info() {
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
        <a
          href="https://www.linkedin.com/in/siss-hmue-aung-313a79167/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <AiOutlineLinkedin className="linkedin contact-button" />
        </a>

        <a
          href="https://github.com/Sisshmue"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithubSquare className="github contact-button" />
        </a>

        <a
          href="https://wa.me/+66658022587"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsappSquare className="whatsapp contact-button" />
        </a>
      </div>
    </div>
  );
}
