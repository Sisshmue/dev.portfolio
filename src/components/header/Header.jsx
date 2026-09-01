import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa";

export function Header() {
  return (
    <div className="header">
      <div className="link-container">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
          aria-label="Home"
          title="Home"
        >
          <FontAwesomeIcon className="header-link-icon" icon={faHouse} />
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
          aria-label="Skills"
          title="Skills"
        >
          <FaCode className="header-link-icon work" />
        </ScrollLink>
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
          aria-label="Experience"
          title="Experience"
        >
          <MdOutlineWorkOutline className="header-link-icon work" />
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
          aria-label="Projects"
          title="Projects"
        >
          <FontAwesomeIcon className="header-link-icon" icon={faFolder} />
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
          aria-label="Contact"
          title="Contact"
        >
          <FontAwesomeIcon className="header-link-icon" icon={faEnvelope} />
        </ScrollLink>
      </div>
    </div>
  );
}
