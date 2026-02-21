import "./Homepage.css";
import { Header } from "../components/Header";
import { Element } from "react-scroll";
import { Home } from "../components/Home";

export function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <div className="contact-container"></div>
        <div className="detail-section">
          <Header />
          <div className="detail-container">
            <Element name="home" className="section">
              <Home />
            </Element>

            <Element name="projects" className="section">
              <section>
                <h1>Projects Content</h1>
              </section>
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
