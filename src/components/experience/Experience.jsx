import './Experience.css'

export function Experience() {
  return (
    <div className="experience-section-container">
      <h1 className="hero-text">EXPERIENCE</h1>
      <p className="sub-text">
        Professional experience developing production mobile, web, and backend applications.
      </p>

      <div className="experience-timeline">

        {/* Revelio - Current Role (Visually Prominent) */}
        <div className="exp-item exp-item-featured">
          <div className="exp-badge">CURRENT ROLE</div>
          <div className="exp-header">
            <div className="title-row">
              <h2 className="exp-title">Junior Software Engineer</h2>
              <span className="exp-company">Revelio</span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">Feb 2025 – Present</span>
              <span className="exp-location">Remote</span>
            </div>
          </div>

          <div className="exp-tech-tags">
            <span>Flutter / Dart</span>
            <span>Laravel / PHP</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>Git / GitHub</span>
            <span>Performance Optimization</span>
          </div>

          <ul className="exp-details">
            <li>Develop and maintain production Flutter, Laravel, and Node.js applications.</li>
            <li>Implement features, API integrations, and application data flows across mobile and web systems for a platform serving 1K+ active users.</li>
            <li>Troubleshoot issues and optimize performance, improving application load time by approximately 20%.</li>
            <li>Collaborate with developers on testing, debugging, code changes, and deployment.</li>
            <li>Use Git/GitHub and AI-assisted development tools to improve development productivity.</li>
          </ul>
        </div>

        {/* Asha Tech Corporation */}
        <div className="exp-item">
          <div className="exp-header">
            <div className="title-row">
              <h2 className="exp-title">Software Engineer Intern</h2>
              <span className="exp-company">Asha Tech Corporation Co., Ltd.</span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">Jan 2026 – Apr 2026</span>
              <span className="exp-location">Hybrid</span>
            </div>
          </div>

          <div className="exp-tech-tags">
            <span>Kotlin</span>
            <span>Android</span>
            <span>IoT Integrations</span>
            <span>Debugging</span>
            <span>System Specs</span>
          </div>

          <ul className="exp-details">
            <li>Collaborated with engineers to troubleshoot production issues and improve application reliability through systematic debugging and performance analysis.</li>
            <li>Engineered IoT network integrations for IP cameras and connected enterprise devices.</li>
            <li>Collaborated with stakeholders to define requirements, document feature specifications, and deliver Android features using Kotlin.</li>
          </ul>
        </div>

        {/* Sabai Job */}
        <div className="exp-item">
          <div className="exp-header">
            <div className="title-row">
              <h2 className="exp-title">Software Developer</h2>
              <span className="exp-company">Sabai Job</span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">Dec 2024 – Dec 2025</span>
              <span className="exp-location">Freelance</span>
            </div>
          </div>

          <div className="exp-tech-tags">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Google OAuth</span>
            <span>RESTful APIs</span>
            <span>CI/CD</span>
          </div>

          <ul className="exp-details">
            <li>Integrated Firebase services including Push Notifications and Google OAuth and connected applications with RESTful APIs.</li>
            <li>Built and maintained production software systems, collaborating with team members on testing, debugging, and CI/CD workflows.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
