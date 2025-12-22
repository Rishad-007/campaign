import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-up">
            <span className="gradient-text">রূপকল্পে</span> নেতৃত্ব
          </h1>
          <h2 className="hero-subtitle fade-in-up">
            একসাথে গড়ি উন্নত ভবিষ্যৎ
          </h2>
          <p className="hero-description fade-in-up">
            সততা, নিষ্ঠা এবং অবিচল নীতিবোধ নিয়ে জনগণের সেবায় প্রতিশ্রুতিবদ্ধ। 
            আমাদের সম্প্রদায়ে ইতিবাচক পরিবর্তন আনতে আমাদের সাথে যোগ দিন।
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#about" className="btn-primary">
              আরও জানুন
            </a>
            <a href="#contact" className="btn-secondary">
              যুক্ত হোন
            </a>
          </div>
          <div className="hero-stats fade-in-up">
            <div className="stat">
              <h3>১৫+</h3>
              <p>বছরের সেবা</p>
            </div>
            <div className="stat">
              <h3>৫০০+</h3>
              <p>সমাপ্ত প্রকল্প</p>
            </div>
            <div className="stat">
              <h3>৫০,০০০+</h3>
              <p>প্রভাবিত জীবন</p>
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
