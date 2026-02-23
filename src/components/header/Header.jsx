import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineWorkOutline } from "react-icons/md";

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
        >
          <FontAwesomeIcon className="header-link-icon" icon={faHouse} />
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
        >
          <FontAwesomeIcon className="header-link-icon" icon={faFolder} />
        </ScrollLink>
        <ScrollLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
        >
          <MdOutlineWorkOutline className="header-link-icon work" />
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="header-link"
          activeClass="active"
        >
          <FontAwesomeIcon className="header-link-icon" icon={faEnvelope} />
        </ScrollLink>
      </div>
    </div>
  );
}
