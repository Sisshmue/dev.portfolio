import "./Skills.css";
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaTools, FaCloud, FaCogs, FaBrain } from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "Dart", isPrimary: true },
        { name: "TypeScript", isPrimary: false },
        { name: "JavaScript", isPrimary: true },
        { name: "Python", isPrimary: false },
        { name: "Java", isPrimary: false },
        { name: "Kotlin", isPrimary: false },
        { name: "SQL", isPrimary: true }
      ]
    },
    {
      title: "Frontend & Mobile",
      icon: <FaMobileAlt className="category-icon" />,
      skills: [
        { name: "Flutter", isPrimary: true },
        { name: "React.js", isPrimary: true },
        { name: "TypeScript", isPrimary: false },
        { name: "HTML", isPrimary: true },
        { name: "CSS", isPrimary: true }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Node.js", isPrimary: true },
        { name: "Express.js", isPrimary: true },
        { name: "Laravel", isPrimary: false },
        { name: "REST APIs", isPrimary: true }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "PostgreSQL", isPrimary: true },
        { name: "MySQL", isPrimary: true },
        { name: "MongoDB", isPrimary: false }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: "Git", isPrimary: true },
        { name: "GitHub", isPrimary: true },
        { name: "Docker", isPrimary: false },
        { name: "CI/CD", isPrimary: false }
      ]
    },
    {
      title: "Cloud & Services",
      icon: <FaCloud className="category-icon" />,
      skills: [
        { name: "Firebase", isPrimary: true },
        { name: "Supabase", isPrimary: false },
        { name: "AWS (Basic)", isPrimary: false }
      ]
    },
    {
      title: "Software Engineering",
      icon: <FaCogs className="category-icon" />,
      skills: [
        { name: "OOP", isPrimary: true },
        { name: "Clean Architecture", isPrimary: true },
        { name: "API Integration", isPrimary: true },
        { name: "Database Design", isPrimary: true },
        { name: "Debugging", isPrimary: true }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="category-icon" />,
      skills: [
        { name: "Generative AI", isPrimary: true },
        { name: "Machine Learning", isPrimary: false },
        { name: "Prompt Engineering", isPrimary: false },
        { name: "Recommendation Systems", isPrimary: true }
      ]
    }
  ];

  return (
    <div className="skills-section-container">
      <h1 className="hero-text">TECHNICAL SKILLS</h1>
      <p className="sub-text">
        Core technologies and specialized engineering skills used in production.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              {category.icon}
              <h2 className="category-title">{category.title}</h2>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className={`skill-tag ${skill.isPrimary ? "primary-skill" : ""}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
