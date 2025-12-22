import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-up">
            Leading With <span className="gradient-text">Vision</span>
          </h1>
          <h2 className="hero-subtitle fade-in-up">
            Building A Better Future Together
          </h2>
          <p className="hero-description fade-in-up">
            Committed to serving the people with integrity, dedication, and
            unwavering principles. Join us in creating positive change for our
            community.
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#about" className="btn-primary">
              Learn More
            </a>
            <a href="#contact" className="btn-secondary">
              Get Involved
            </a>
          </div>
          <div className="hero-stats fade-in-up">
            <div className="stat">
              <h3>15+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Lives Impacted</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-frame">
            <img
              src="/politician-photo.jpg"
              alt="Candidate"
              className="politician-photo"
            />
            <div className="frame-decoration"></div>
          </div>
          <div className="floating-badge">
            <img
              src="/party-logo.png"
              alt="Party Logo"
              className="badge-logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--bg-light)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
