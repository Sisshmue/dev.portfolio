import "./Homepage.css";
import { Header } from "../components/header/Header";
import { Element } from "react-scroll";
import { Home } from "../components/home/Home";
import { Project } from "../components/project/Project";
import { Info } from "../components/info/Info";
import { Experience } from "../components/experience/Experience";

export function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <Info />
        <div className="detail-section">
          <Header />
          <div className="detail-container">
            <Element name="home" className="section">
              <Home />
            </Element>

            <Element name="projects" className="section">
              <Project />
            </Element>

            <Element name="experience" className="section">
              <Experience />
            </Element>
            <Element name="contact" className="section">
              <section>
                <h1>Experience Content</h1>
              </section>
            </Element>
          </div>
        </div>
      </div>
    </>
  );
}
