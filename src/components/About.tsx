import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate data scientist and machine learning engineer based in New York, NY, 
                with a strong foundation in statistical analysis, predictive modeling, and software development. 
                My work spans from climate research and drought prediction to music recommendation systems, 
                always driven by a desire to extract meaningful insights from complex datasets.
              </p>
              
              <p>
                My expertise lies at the intersection of data science and practical application. Whether I'm 
                building LSTM networks for time series forecasting, implementing natural language processing 
                for mood analysis, or conducting comprehensive statistical studies, I approach each project 
                with rigor, creativity, and attention to detail.
              </p>
              
              <p>
                I believe in the power of data to drive positive change and solve real-world challenges. 
                From predicting environmental conditions that affect millions to creating personalized 
                experiences that bring joy through music, I'm committed to using technology for meaningful impact.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight">
                <h3>🎓 Education Focus</h3>
                <p>Advanced studies in data science, machine learning, and statistical analysis</p>
              </div>
              
              <div className="highlight">
                <h3>🔬 Research Interests</h3>
                <p>Climate modeling, predictive analytics, NLP, and recommendation systems</p>
              </div>
              
              <div className="highlight">
                <h3>💡 Innovation</h3>
                <p>Combining cutting-edge ML techniques with practical web applications</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">GitHub Repositories</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Major Projects</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">ML Models Built</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Learning Journey</div>
              </div>
            </div>
            
            <div className="journey">
              <h3>My Journey</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Started in Data Science</h4>
                    <p>Began exploring the fascinating world of data analysis and statistical modeling</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Machine Learning Deep Dive</h4>
                    <p>Advanced into complex ML algorithms, neural networks, and predictive modeling</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Real-World Applications</h4>
                    <p>Applied skills to climate research, music technology, and educational analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
