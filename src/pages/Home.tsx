import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-container" style={{maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 1rem'}}>
        <div className="home-content" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.5rem', padding: '0 2.5rem', width: '100%'}}>
          {/* Left: text section (title, subtitle, description, buttons) */}
          <div style={{flex: '1 1 400px', minWidth: '320px', display: 'flex', alignItems: 'center'}}>
            <div id="home-text" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem', width: '100%', marginTop: '2.5rem'}}>
              <h1 className="home-title" style={{fontSize: '2.8rem', fontWeight: 700, margin: 0, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                Hi, I'm Aimee Oh
              </h1>
              <h2 className="home-subtitle" style={{fontSize: '1.5rem', fontWeight: 500, margin: 0, color: '#3b82f6'}}>M.S. Computer Science @ Columbia</h2>
              <p className="home-description" style={{fontSize: '1.15rem', color: '#334155', margin: 0}}>
                I'm a Master's student at Columbia University in Computer Science graduating December 2025. I'm passionate about building, solving problems, and challenging limits. I have experience building production systems and developing AI-powered applications in both academic and startup settings.
              </p>

              <p className="home-description" style={{fontSize: '1.15rem', color: '#334155', margin: 0}}>
                Happy to connect and chat about my experiences, potential opportunites, or just to say hi!
              </p>
              <div className="home-buttons" style={{display: 'flex', gap: '1.25rem', marginTop: '1.5rem', justifyContent: 'flex-start'}}>
                <a 
                  href="/AimeeOh2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{padding: '0.75em 2em', fontSize: '1.1rem', borderRadius: '999px', background: '#3b82f6', color: '#fff', fontWeight: 600, boxShadow: '0 2px 8px rgba(59,130,246,0.10)', textDecoration: 'none'}}
                >
                  Resume
                </a>
                <a 
                  href="https://www.linkedin.com/in/aimeeoh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{padding: '0.75em 2em', fontSize: '1.1rem', borderRadius: '999px', background: '#e0e7ff', color: '#3730a3', fontWeight: 600, boxShadow: '0 2px 8px rgba(59,130,246,0.10)', textDecoration: 'none'}}
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
          {/* Photo section (right of text) */}
          <div className="home-photo" style={{flex: '0 0 320px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%'}}>
            <img 
              src={import.meta.env.BASE_URL + 'profile.jpg'}
              alt="Aimee Oh" 
              style={{width: '320px', height: '420px', objectFit: 'cover', boxShadow: '0 4px 24px rgba(59,130,246,0.12)'}} 
            />
            {/* Removed animated cat below profile photo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
