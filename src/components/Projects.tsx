import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EmoTune",
      description: "A sophisticated music recommendation system that analyzes user mood through text reflection and generates personalized Spotify playlists using OpenAI embeddings and cosine similarity matching.",
      technologies: ["Python", "Flask", "OpenAI API", "Spotify API", "Machine Learning", "NLP", "JavaScript", "HTML/CSS"],
      features: [
        "Mood analysis through natural language processing",
        "Semantic embeddings for music recommendation",
        "Real-time Spotify integration",
        "Interactive web interface with Y2K aesthetic"
      ],
      github: "https://github.com/aoh705/spotify-rec",
      image: "/project-emotune.jpg",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "ML-Climate - Drought Prediction System",
      description: "Advanced machine learning system for predicting drought conditions in Southern California using meteorological and hydrological data from 1950-2024, with future climate projections to 2099.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "LSTM", "Random Forest", "XGBoost", "Data Analysis"],
      features: [
        "LSTM networks for time series forecasting",
        "Multi-output regression for D0-D4 drought categories",
        "Feature importance analysis and selection",
        "Climate model integration for future predictions"
      ],
      github: "https://github.com/aoh705/ML-Climate",
      image: "/project-climate.jpg",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Student Success Analysis",
      description: "Comprehensive statistical analysis examining how student backgrounds influence future income and educational aspirations using the National Education Longitudinal Study dataset.",
      technologies: ["R", "Statistical Analysis", "Data Visualization", "Regression Analysis", "Chi-Square Tests"],
      features: [
        "Multi-variable correlation analysis",
        "Statistical hypothesis testing",
        "Predictive modeling for income outcomes",
        "Comprehensive data visualization"
      ],
      github: "https://github.com/aoh705/student-success",
      image: "/project-student.jpg",
      category: "Research"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my work in machine learning, data science, and software development
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-category">{project.category}</div>
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-footer">
          <p>More projects available on my <a href="https://github.com/aoh705" target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
        </div>
      </div>
    </section>
  )
}

export default Projects
