import "./Project.css";
import sabai from "../assets/thumbnails/sabai_thumbnail.jpg";
import phrs from "../assets/thumbnails/phrs_thumbnail.jpg";

export function Project() {
    return (
      <div className="project-section-container">
        <h1 className="hero-text">recent projects</h1>
        <p className="sub-text">
          Gaining hands-on experiences by working on real-world, efficient projects.
        </p>
  
        <div className="project-list">
          <div className="project-card">
            <div className="image-wrapper">
              <img src={sabai} alt="Sabai Job" />
            </div>
            <div className="project-content">
              <h2 className="project-title-small">Sabai Job</h2>
              <p className="project-description">
                The Job Hunting Platform for Blue-collar job seekers in Thailand.
              </p>
              <button className="apple-button">See More</button>
            </div>
          </div>
  
          <div className="project-card">
            <div className="image-wrapper">
              <img src={phrs} alt="PHRS" />
            </div>
            <div className="project-content">
              <h2 className="project-title-small">Personalize Healthcare</h2>
              <p className="project-description">
                A hospital system managing patient data and generating AI-approved recommendations.
              </p>
              <button className="apple-button">See More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
