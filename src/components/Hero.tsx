import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Aimee Oh</span>
          </h1>
          <h2 className="hero-title">Data Scientist & ML Engineer</h2>
          <p className="hero-description">
            I transform complex data into actionable insights using machine learning, 
            statistical analysis, and innovative web technologies. Passionate about 
            solving real-world problems from climate prediction to music recommendation systems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="data-visualization">
            <div className="chart-container">
              <div className="bar-chart">
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar" style={{ height: '80%' }}></div>
                <div className="bar" style={{ height: '45%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar" style={{ height: '65%' }}></div>
              </div>
              <div className="ml-nodes">
                <div className="node node-1"></div>
                <div className="node node-2"></div>
                <div className="node node-3"></div>
                <div className="connection"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

export default Hero
