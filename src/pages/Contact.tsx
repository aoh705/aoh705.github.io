import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Let's connect! You can reach out to me on LinkedIn or view my resume.
        </p>
        
        <div className="contact-content">
          <div className="contact-cta">
            <h2>Connect With Me</h2>
            <p>
              I'm always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
            <div className="contact-buttons">
              <a 
                href="https://linkedin.com/in/aimee-oh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="/AimeeOh.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
