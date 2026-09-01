import "./Project.css";
import scp from "../../assets/thumbnails/smart_campus.jpg";
import phrs from "../../assets/thumbnails/phrs_thumbnail.jpg";
import uttt from "../../assets/thumbnails/ultimate_ttt.jpg";
import sabai from "../../assets/thumbnails/sabai_thumbnail.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Project() {
  const projects = [
    {
      id: "phrs",
      title: "Personalized Healthcare Recommendation System",
      description:
        "Built a full-stack system using Node.js, React.js, Flutter, and Python, with REST APIs and normalized databases. Developed a machine learning recommendation model achieving 98% accuracy and applied Clean Architecture.",
      image: phrs,
      tags: ["Node.js", "React.js", "Flutter", "Python", "REST APIs", "Machine Learning"],
      link: "https://github.com/Techies-SE",
      linkText: "View Code",
      icon: <FaGithub />
    },
    {
      id: "resume-iq",
      title: "ResumeIQ — AI-Powered Resume Analyzer",
      description:
        "Built a full-stack platform using React.js, TypeScript, and Node.js, developing REST APIs and LLM-based workflows for ATS scoring, skill analysis, and automated recommendations.",
      image: scp,
      tags: ["React.js", "TypeScript", "Node.js", "REST APIs", "LLM Workflows", "ATS Scoring"],
      link: "https://github.com/Sisshmue",
      linkText: "View Project",
      icon: <FaGithub />
    },
    {
      id: "asset-api",
      title: "Asset Management System API",
      description:
        "Built a Node.js, TypeScript, and PostgreSQL REST API with Clean Architecture, normalized schemas, and role-based access control.",
      image: uttt,
      tags: ["Node.js", "TypeScript", "PostgreSQL", "REST API", "Clean Architecture", "RBAC"],
      link: "https://github.com/Sisshmue",
      linkText: "View API Code",
      icon: <FaGithub />
    },
    {
      id: "sabai-job",
      title: "Sabai Job",
      description:
        "Built and maintained a production job hunting platform for blue-collar workers in Thailand using Flutter, Firebase Push Notifications, Google OAuth, and RESTful API integrations.",
      image: sabai,
      tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Google OAuth"],
      link: "https://sabaijob.com/",
      linkText: "Visit Live Site",
      icon: <FaExternalLinkAlt />
    }
  ];

  return (
    <div className="project-section-container">
      <h1 className="hero-text">FEATURED PROJECTS</h1>
      <p className="sub-text">
        Production applications, full-stack systems, and backend REST APIs built with modern engineering practices.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title-small">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button project-btn"
              >
                {project.icon}
                <span>{project.linkText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
