import "./Vision.css";

const Vision = () => {
  return (
    <section id="vision" className="vision">
      <div className="vision-container">
        <div className="section-header">
          <span className="section-label">Our Future</span>
          <h2 className="section-title">Vision & Mission</h2>
          <div className="title-underline"></div>
        </div>

        <div className="vision-content">
          <div className="vision-box main-vision">
            <div className="vision-header">
              <div className="vision-icon">🎯</div>
              <h3>Our Vision</h3>
            </div>
            <p>
              A prosperous, equitable society where every citizen has access to
              quality healthcare, education, and opportunities to thrive. A
              community built on justice, sustainability, and shared prosperity
              where no one is left behind.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-number">01</div>
              <h4>Economic Prosperity</h4>
              <p>
                Create sustainable jobs, support small businesses, and ensure
                economic growth benefits all citizens.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-number">02</div>
              <h4>Social Justice</h4>
              <p>
                Ensure equal rights and opportunities for all, regardless of
                background, gender, or economic status.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-number">03</div>
              <h4>Quality Services</h4>
              <p>
                Deliver world-class healthcare, education, and public services
                accessible to every community.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-number">04</div>
              <h4>Sustainable Future</h4>
              <p>
                Protect our environment, invest in renewable energy, and
                preserve resources for future generations.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-number">05</div>
              <h4>Good Governance</h4>
              <p>
                Maintain transparency, accountability, and fight corruption at
                every level of government.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-number">06</div>
              <h4>Community Unity</h4>
              <p>
                Build bridges between communities, celebrate diversity, and
                foster inclusive development.
              </p>
            </div>
          </div>
        </div>

        <div className="vision-quote">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            Together, we can transform challenges into opportunities and build a
            future where every citizen can live with dignity, hope, and
            prosperity. This is not just my vision—it's our shared dream.
          </p>
          <div className="quote-author">— Your Candidate</div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
