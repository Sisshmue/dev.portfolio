import "./Project.css";
import sabai from "../assets/thumbnails/sabai_thumbnail.jpg";
import phrs from "../assets/thumbnails/phrs_thumbnail.jpg";

export function Project() {
  return (
    <div className="project-section-container">
      <h1 className="hero-text">{`recent\nprojects`}</h1>
      <p className="sub-text">
        Gaining hands-on experiences by working on the real-world efficient
        projects.
      </p>
      <div className="project-item-container">
        <div className="sabai project-image">
          <img src={sabai} alt="sabai" />
          <div className="project-context">
            <h2 className="project-title">Sabai Job</h2>
            <p className="project-label">
              The Job Hunting Platform for the Blue-collar job seekers in
              Thailand.
            </p>
            <button className="see-more-button">See More</button>
          </div>
        </div>
        <div className="phrs project-image">
          <img src={phrs} alt="phrs" />
          <div className="project-context">
            <h2 className="project-title">
              Personalize Healthcare Recommendation System
            </h2>
            <p className="project-label">
              The hospital system that can manage patients data and generate
              personalised recommendations approved by the doctors.
            </p>
            <button className="see-more-button">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
