import "./Home.css";

export function Home() {
  return (
    <div className="home-section-container">
      <h1 className="hero-text">{`SOFTWARE\nENGINEER`}</h1>
      <p className="sub-text">
        🎓 Full-Stack Software Engineer specializing in high-performance Flutter applications and robust backend systems. Proficient in Architecture Styles, scalable state management, and building seamless integrations using React, Node.js, Express, PostgreSQL, MongoDB, Flutter and Firebase.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2 className="stat-value">+2</h2>
          <p className="stat-label">{`YEARS OF\nExperience`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">3.93</h2>
          <p className="stat-label">{`UNIVERSITY\nGPA`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">+5</h2>
          <p className="stat-label">{`PERSONAL\nPROJECTS`}</p>
        </div>
      </div>
    </div>
  );
}
