import "./Project.css";
import scp from "../../assets/thumbnails/smart_campus.jpg";
import phrs from "../../assets/thumbnails/phrs_thumbnail.jpg";
import uttt from "../../assets/thumbnails/ultimate_ttt.jpg";
import sabai from "../../assets/thumbnails/sabai_thumbnail.jpg";

export function Project() {
  return (
    <div className="project-section-container">
      <h1 className="hero-text">RECENT PROJECTS</h1>
      <p className="sub-text">
        Gaining hands-on experiences by working on real-world, efficient
        projects.
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
              A hospital system managing patient data and generating
              doctor-approved AI recommendations.
            </p>
            <button className="apple-button">See More</button>
          </div>
        </div>

        <div className="project-card">
          <div className="image-wrapper">
            <img src={uttt} alt="Ultimate Tic-Tac-Toe" />
          </div>
          <div className="project-content">
            <h2 className="project-title-small">Ultimate Tic-Tac_Toe</h2>
            <p className="project-description">
              Ultimate Tic-Tac-Toe game with JAVA Spring boot.
            </p>
            <button className="apple-button">See More</button>
          </div>
        </div>

        {/* <div className="project-card">
          <div className="image-wrapper">
            <img src={scp} alt="Smart Campus" />
          </div>
          <div className="project-content">
            <h2 className="project-title-small">Smart Campus</h2>
            <p className="project-description">
              A mobile application for the univeristy students integrated with
              AI chat bot and Google Map.
            </p>
            <button className="apple-button">See More</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
