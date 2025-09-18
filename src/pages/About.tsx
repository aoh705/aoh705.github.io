import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
  <div className="about-container" style={{display: 'flex', maxWidth: '900px', width: '100%', gap: '2.5rem'}}>
        {/* Left column: anchor profile and education */}
        {/* Right column: scrollable experience and skills */}
        <div className="about-right" style={{flex: '1 1 0', minWidth: '0', paddingBottom: '2rem'}}>
          <div className="about-section" style={{fontSize: '0.98rem', lineHeight: '1.5'}}>
            <h2>Experience</h2>
            {/* Chronological order descending: most recent first */}
            <div className="experience-item" style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Founding Software Engineer</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Crackd.ai | May 2025 – Present</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Developed and deployed AI-based prompt evaluation tool using Next.js and TypeScript, establishing core infrastructure used to iteratively tune culturally aware image captions and drive 33% improvement in humorous caption recognition and generation.</li>
                <li style={{marginLeft: '1.5rem'}}>Engineered production-ready frontend and backend with SST, Supabase, and AWS, supporting image uploads and model-specific integration while creating the foundational architecture that accelerated discovery of key improvement areas across Crackd.ai's product suite.</li>
              </ul>
            </div>
            <div className="experience-item" style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Course Assistant for Engineering Software-as-a-Service</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Columbia University | Sep 2025 – Present</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Leading office hours for 120 students and guiding 7 project teams through semester-long SaaS development, mentoring on agile practices, dev/ops tooling, and full-stack implementation.</li>
              </ul>
            </div>
            <div className="experience-item" style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Course Assistant for UI Design</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Columbia University | Jan 2025 – Jun 2025</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Mentored 600+ students by leading office hours while providing weekly feedback sessions for 25+ students on semester-long projects, covering full-stack development, Agile practices, and UI/UX design to strengthen technical skills and project outcomes.</li>
              </ul>
            </div>
            <div className="experience-item" style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Course Assistant for Empirical Methods of Data Science</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Columbia University | Sep 2024 – Dec 2024</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Guided students in developing Python scripts for web scraping and advised students on big data projects using ML models through office hours and in-class support.</li>
              </ul>
            </div>
            <div className="experience-item" style={{marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Backend Engineer Intern</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Semsee | Jun 2023 – Aug 2023</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Engineered a production-ready internal semantic search classification system in Elixir/Phoenix LiveView, integrating OpenAI vector embeddings to boost insurance plan matching accuracy by 15%.</li>
                <li style={{marginLeft: '1.5rem'}}>Developed and deployed a full-stack recommendation engine with PostgreSQL and Elixir, leveraging semantic search pipeline to reduce user drop-off by 12.3%.</li>
                <li style={{marginLeft: '1.5rem'}}>Refactored and modernized legacy internal tools into an extensible service layer, driving 30% improvement on development velocity and an 18% increase in onboarding efficiency for new carriers.</li>
              </ul>
            </div>
            <div className="experience-item" style={{padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6'}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600', color: '#374151'}}>Branded Technology Integrations Intern</h3>
              <p style={{margin: '0 0 0.5rem 0', color: '#3b82f6', fontWeight: '500'}}>Qualcomm | May 31, 2022 – August 26, 2022</p>
              <ul style={{margin: '0 0 0.5rem 0 0', fontSize: '0.95rem', color: '#6b7280', paddingLeft: '0'}}>
                <li style={{marginLeft: '1.5rem'}}>Managed statistical analysis and data visualization projects in R, contributing to key marketing strategies targeting Gen-Z demographics.</li>
                <li style={{marginLeft: '1.5rem'}}>Led company-wide project development on sponsorship initiatives with brand-name sports teams, showcasing strategic partnership skills and cross-functional collaboration.</li>
              </ul>
            </div>
          </div>

          <div className="about-section" style={{fontSize: '0.98rem', lineHeight: '1.5', marginTop: '2.5rem'}}>
            <h2>What I do</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem'}}>
              <div style={{minWidth: '220px'}}>
                <h3 style={{fontSize: '1.05rem', color: '#3b82f6', marginBottom: '0.5rem'}}>Languages</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {['TypeScript','JavaScript','Python','Elixir','R','SQL'].map(skill => (
                    <span key={skill} style={{background: '#e0e7ff', color: '#3730a3', borderRadius: '999px', padding: '0.35em 1em', fontSize: '0.98rem', fontWeight: 500, boxShadow: '0 1px 4px rgba(59,130,246,0.08)'}}>{skill}</span>
                  ))}
                </div>
              </div>
              <div style={{minWidth: '220px'}}>
                <h3 style={{fontSize: '1.05rem', color: '#3b82f6', marginBottom: '0.5rem'}}>Frameworks & Libraries</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {['React','Next.js','Node.js','Phoenix LiveView','Express','Tailwind CSS','Material UI'].map(skill => (
                    <span key={skill} style={{background: '#e0f2fe', color: '#0369a1', borderRadius: '999px', padding: '0.35em 1em', fontSize: '0.98rem', fontWeight: 500, boxShadow: '0 1px 4px rgba(59,130,246,0.08)'}}>{skill}</span>
                  ))}
                </div>
              </div>
              <div style={{minWidth: '220px'}}>
                <h3 style={{fontSize: '1.05rem', color: '#3b82f6', marginBottom: '0.5rem'}}>AI/ML & Data</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {['OpenAI API','Scikit-learn','Pandas','NumPy','Data Visualization (R, Python)','Embeddings & Semantic Search'].map(skill => (
                    <span key={skill} style={{background: '#fef9c3', color: '#92400e', borderRadius: '999px', padding: '0.35em 1em', fontSize: '0.98rem', fontWeight: 500, boxShadow: '0 1px 4px rgba(59,130,246,0.08)'}}>{skill}</span>
                  ))}
                </div>
              </div>
              <div style={{minWidth: '220px'}}>
                <h3 style={{fontSize: '1.05rem', color: '#3b82f6', marginBottom: '0.5rem'}}>Cloud & DevOps</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {['AWS','Supabase','Vercel','Docker','Git & GitHub Actions'].map(skill => (
                    <span key={skill} style={{background: '#dcfce7', color: '#166534', borderRadius: '999px', padding: '0.35em 1em', fontSize: '0.98rem', fontWeight: 500, boxShadow: '0 1px 4px rgba(59,130,246,0.08)'}}>{skill}</span>
                  ))}
                </div>
              </div>
              <div style={{minWidth: '220px'}}>
                <h3 style={{fontSize: '1.05rem', color: '#3b82f6', marginBottom: '0.5rem'}}>Other Skills</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {['UI/UX Design & Prototyping','Technical Mentorship & Teaching','Agile & Scrum','Data Engineering','Rapid Prototyping'].map(skill => (
                    <span key={skill} style={{background: '#f1f5f9', color: '#334155', borderRadius: '999px', padding: '0.35em 1em', fontSize: '0.98rem', fontWeight: 500, boxShadow: '0 1px 4px rgba(59,130,246,0.08)'}}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
