import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, description: "Primary language for data science and ML" },
        { name: "R", level: 90, description: "Statistical analysis and research" },
        { name: "JavaScript", level: 85, description: "Web development and APIs" },
        { name: "TypeScript", level: 80, description: "Type-safe web applications" },
        { name: "SQL", level: 85, description: "Database queries and management" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow/Keras", level: 90, description: "Deep learning and neural networks" },
        { name: "Scikit-learn", level: 95, description: "Traditional ML algorithms" },
        { name: "PyTorch", level: 75, description: "Research and experimentation" },
        { name: "NLP", level: 85, description: "Text processing and analysis" },
        { name: "Computer Vision", level: 70, description: "Image processing and recognition" }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", level: 95, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 90, description: "Numerical computing" },
        { name: "Matplotlib/Seaborn", level: 90, description: "Data visualization" },
        { name: "Statistical Analysis", level: 95, description: "Hypothesis testing and modeling" },
        { name: "Time Series", level: 85, description: "Forecasting and trend analysis" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 85, description: "Frontend development" },
        { name: "Flask", level: 80, description: "Python web applications" },
        { name: "HTML/CSS", level: 90, description: "Web markup and styling" },
        { name: "APIs", level: 85, description: "RESTful services and integration" },
        { name: "Git", level: 90, description: "Version control and collaboration" }
      ]
    }
  ]

  const tools = [
    "Jupyter Notebooks", "VS Code", "Google Colab", "Docker", "AWS", 
    "PostgreSQL", "MongoDB", "Tableau", "Excel", "Linux/Unix"
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🤖</div>
            <h4>Machine Learning</h4>
            <p>Building predictive models with LSTM networks, Random Forests, and XGBoost for real-world applications</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h4>Data Analysis</h4>
            <p>Extracting insights from complex datasets using statistical methods and advanced visualization techniques</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🌐</div>
            <h4>Full-Stack Development</h4>
            <p>Creating end-to-end solutions that bridge data science with user-friendly web applications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
