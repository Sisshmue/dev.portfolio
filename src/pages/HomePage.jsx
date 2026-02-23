import "./Homepage.css";
import { Header } from "../components/Header";
import { Element } from "react-scroll";
import { Home } from "../components/Home";
import { Project } from "../components/Project";
import { Contact } from "../components/contact/Contact";

export function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <Contact/>
        <div className="detail-section">
          <Header />
          <div className="detail-container">
            <Element name="home" className="section">
              <Home />
            </Element>

            <Element name="projects" className="section">
              <Project/>
            </Element>

            <Element name="experience" className="section">
              <section>
                <h1>Experience Content</h1>
              </section>
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
