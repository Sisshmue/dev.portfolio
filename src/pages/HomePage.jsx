import "./HomePage.css";
import { Header } from "../components/header/Header";
import { Element } from "react-scroll";
import { Home } from "../components/home/Home";
import { Skills } from "../components/skills/Skills";
import { Experience } from "../components/experience/Experience";
import { Project } from "../components/project/Project";
import { Info } from "../components/info/Info";
import { Contact } from "../components/contact/Contact";

export function HomePage() {
  return (
    <>
      <title>Siss Hmue Aung | Software Engineer</title>
      <div className="homepage-container">
        <Info />
        <div className="detail-section">
          <Header />
          <div className="detail-container">
            <Element name="home" className="section">
              <Home />
            </Element>

            <Element name="skills" className="section">
              <Skills />
            </Element>

            <Element name="experience" className="section">
              <Experience />
            </Element>

            <Element name="projects" className="section">
              <Project />
            </Element>

            <Element name="contact" className="section">
              <Contact />
            </Element>
          </div>
        </div>
      </div>
    </>
  );
}
