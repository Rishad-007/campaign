import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Know Your Candidate</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">📚</div>
            <h3>Education</h3>
            <p>
              Master's in Political Science from National University. Bachelor's
              in Law. Continuous learner committed to policy excellence.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💼</div>
            <h3>Experience</h3>
            <p>
              15+ years in public service, including roles as City Council
              Member, Education Committee Chair, and Community Development
              Director.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">❤️</div>
            <h3>Values</h3>
            <p>
              Integrity, Transparency, Service, Justice, and Equality. Dedicated
              to representing every voice in our community.
            </p>
          </div>
        </div>

        <div className="about-story">
          <h3 className="story-title">My Journey</h3>
          <p className="story-text">
            Born and raised in this community, I've witnessed firsthand the
            challenges we face and the opportunities we can create together. My
            journey in public service began with grassroots organizing, where I
            learned the power of community action and collective voice.
          </p>
          <p className="story-text">
            Over the years, I've worked tirelessly to bring positive change -
            from improving our education system to creating job opportunities,
            from protecting our environment to ensuring healthcare access for
            all. Every decision I make is guided by one principle: What's best
            for the people I serve?
          </p>
          <p className="story-text">
            This campaign isn't about me - it's about us. Together, we can build
            a future where everyone has the opportunity to thrive, where justice
            prevails, and where our community stands as a beacon of hope and
            progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
