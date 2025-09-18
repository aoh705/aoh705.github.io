import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  // ...existing code...

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A collection of software engineering and machine learning projects
        </p>
        
        <div className="projects-grid">
          {/* Static project cards, not reactive */}
          <div className="project-card">
            <h3 className="project-title" style={{marginBottom: '0.5rem'}}>
              VIC-based Drought Severity Prediction Model
            </h3>
            <div className="project-description" style={{fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem'}}>
              Trained a linear regression model to predict monthly drought severity under varying GHG scenarios, achieving up to 0.99 R² and generating 75-year long-term forecasts for climate planning.<br />
              Engineered temporal and hydrometeorological features and validated results across three climate models using time-series cross-validation.<br />
            </div>
            <div className="project-technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Data Analysis</span>
              <span className="tech-tag">Linear Regression</span>
              <span className="tech-tag">Climate Science</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/aoh705/ML-Climate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
              <a
                href="/MLClimate2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{marginLeft: '1rem', fontSize: '1rem', color: '#2563eb', background: 'none', border: 'none', boxShadow: 'none', fontWeight: 500, padding: 0, display: 'inline'}}
              >
                Final Report
              </a>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">Traffic Signal Detection with Neural Networks</h3>
            <p className="project-description">Designed and fine-tuned YOLOv8-nano for traffic signal detection using 7,000+ collected images and mosaic tiling transformations, achieving 67.9% accuracy on the Bosch dataset.</p>
            <div className="project-technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">YOLOv8</span>
              <span className="tech-tag">Computer Vision</span>
              <span className="tech-tag">Neural Networks</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/aoh705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
              <a
                href="/YOLOv82024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{marginLeft: '1rem', fontSize: '1rem', color: '#2563eb', background: 'none', border: 'none', boxShadow: 'none', fontWeight: 500, padding: 0, display: 'inline'}}
              >
                Final Report
              </a>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">Festive</h3>
            <p className="project-description">Developed an event planning web chat platform using Ruby on Rails and PostgreSQL, with tailored recommendations from OpenAI API and Google Calendar integration.</p>
            <div className="project-technologies">
              <span className="tech-tag">Ruby on Rails</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">OpenAI API</span>
              <span className="tech-tag">Google Calendar</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/aoh705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">EmoTune</h3>
            <p className="project-description">Created mood-based music recommendation web-app, integrating user input, Spotify-based database, and embeddings based on audio characteristics that identify similarity patterns for curating recommendations and playlists</p>
            <div className="project-technologies">
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">ML</span>
              <span className="tech-tag">Vector Embeddings</span>
              <span className="tech-tag">OpenAI API</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/aoh705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">Healthcare Blockchain App</h3>
            <p className="project-description">A project exploring blockchain technologies and network protocols in the healthcare context. Includes implementation, analysis, and experimentation with distributed ledger systems.</p>
            <div className="project-technologies">
              <span className="tech-tag">Blockchain</span>
              <span className="tech-tag">Networks</span>
              <span className="tech-tag">Distributed Systems</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/aoh705/networks-blockchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
