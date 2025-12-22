import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      year: "2023",
      title: "Healthcare Reform Act",
      description:
        "Led the passage of comprehensive healthcare legislation providing coverage to 100,000+ uninsured citizens.",
      impact: "100K+ Lives Improved",
    },
    {
      year: "2022",
      title: "Green Energy Initiative",
      description:
        "Launched renewable energy program reducing carbon emissions by 40% in our district.",
      impact: "40% Emission Reduction",
    },
    {
      year: "2021",
      title: "Education Excellence Program",
      description:
        "Secured funding for 50 new schools and technology upgrades in underserved communities.",
      impact: "50 Schools Built",
    },
    {
      year: "2020",
      title: "Job Creation Drive",
      description:
        "Attracted major investments creating 5,000+ jobs and supporting local businesses.",
      impact: "5,000+ Jobs Created",
    },
    {
      year: "2019",
      title: "Infrastructure Modernization",
      description:
        "Oversaw construction of 500km roads, 10 bridges, and improved public transport systems.",
      impact: "500km Roads Built",
    },
    {
      year: "2018",
      title: "Youth Empowerment Initiative",
      description:
        "Established skill development centers training 10,000+ young people annually.",
      impact: "10K+ Youth Trained",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <div className="section-header">
          <span className="section-label">Track Record</span>
          <h2 className="section-title">Achievements</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Results speak louder than promises. Here are some of the initiatives
            I've led that have made a real difference in people's lives.
          </p>
        </div>

        <div className="timeline">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="year-badge">{achievement.year}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-impact">{achievement.impact}</div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <h3>15+</h3>
            <p>Years in Public Service</p>
          </div>
          <div className="summary-card">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="summary-card">
            <h3>50K+</h3>
            <p>Lives Directly Impacted</p>
          </div>
          <div className="summary-card">
            <h3>98%</h3>
            <p>Constituent Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
