import "./Home.css";

export function Home() {
  return (
    <div className="home-section-container">
      <h1 className="hero-text">{`SOFTWARE\nENGINEER`}</h1>
      <p className="sub-text">
        🎓 A Dedicated software engineering student with a focus on
        cross-platform and full-stack for both mobile and web application
        development. I am passionate about crafting intuitive and accessible
        user experiences across diverse devices. Through practical experience
        with frameworks such as Flutter and MERN Stack, I have honed my skills
        in implementing seamless navigation, advanced API integrations, and
        robust application architecture. I thrive in collaborative environments
        and am committed to continuous learning in this rapidly evolving field.
        My aim is to contribute to innovative projects that positively impact
        users worldwide.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2 className="stat-value">+3</h2>
          <p className="stat-label">{`YEARS OF\nExperience`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">3.92</h2>
          <p className="stat-label">{`UNIVERSITY\nGPA`}</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">+40</h2>
          <p className="stat-label">{`PERSONAL\nPROJECTS`}</p>
        </div>
      </div>
    </div>
  );
}
