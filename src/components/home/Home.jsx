import "./Home.css";

export function Home() {
  const featuredTech = [
    "Flutter",
    "React.js",
    "Node.js",
    "Javascript",
    "Python",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "Git / GitHub",
    "Docker",
    "CI/CD",
    "Firebase",
    "Supabase",
    "AWS",
    "Clean Architecture",
    "Database Design",
    "Generative AI"
  ];

  return (
    <div className="home-section-container">
      <h1 className="hero-text">{`SOFTWARE\nENGINEER`}</h1>

      <p className="sub-text">
        Software Engineer with professional experience developing production mobile, web, and backend applications. Specializing in high-performance <strong>Flutter</strong> mobile apps, robust <strong>Node.js</strong> &amp; <strong>Express.js</strong> backends, and responsive <strong>Javascript</strong> systems with REST APIs and database engineering.
      </p>

      <div className="hero-tech-chips">
        {featuredTech.map((tech, index) => (
          <span key={index} className="hero-tech-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h2 className="stat-value">+2</h2>
          <p className="stat-label">{`YEARS OF\nEXPERIENCE`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">1K+</h2>
          <p className="stat-label">{`ACTIVE USERS\nSERVED`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">+5</h2>
          <p className="stat-label">{`PRODUCTION &\nPROJECTS`}</p>
        </div>
      </div>
    </div>
  );
}
