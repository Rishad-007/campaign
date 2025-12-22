import "./KeyIssues.css";

const KeyIssues = () => {
  const issues = [
    {
      icon: "🏥",
      title: "Healthcare for All",
      description:
        "Universal healthcare access, affordable medicines, and modern medical facilities for every citizen.",
      color: "red",
    },
    {
      icon: "🎓",
      title: "Quality Education",
      description:
        "Free quality education, skill development programs, and digital literacy for the next generation.",
      color: "green",
    },
    {
      icon: "💼",
      title: "Job Creation",
      description:
        "Creating sustainable employment opportunities, supporting small businesses, and fostering entrepreneurship.",
      color: "red",
    },
    {
      icon: "🏘️",
      title: "Infrastructure Development",
      description:
        "Modern roads, bridges, public transport, and utilities to connect and empower communities.",
      color: "green",
    },
    {
      icon: "🌱",
      title: "Environmental Protection",
      description:
        "Sustainable development, clean energy initiatives, and preserving natural resources for future generations.",
      color: "red",
    },
    {
      icon: "⚖️",
      title: "Justice & Equality",
      description:
        "Equal rights, social justice, protection of minorities, and ensuring dignity for all citizens.",
      color: "green",
    },
  ];

  return (
    <section id="issues" className="key-issues">
      <div className="issues-container">
        <div className="section-header">
          <span className="section-label">Our Priorities</span>
          <h2 className="section-title">Key Issues</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            These are the core issues I am committed to addressing. Your voice
            matters, and together we will create meaningful change.
          </p>
        </div>

        <div className="issues-grid">
          {issues.map((issue, index) => (
            <div key={index} className={`issue-card issue-${issue.color}`}>
              <div className="issue-icon">{issue.icon}</div>
              <h3 className="issue-title">{issue.title}</h3>
              <p className="issue-description">{issue.description}</p>
              <div className="issue-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="issues-cta">
          <h3>Have a concern or suggestion?</h3>
          <p>
            Your input shapes our policies. Share your thoughts and help us
            build better solutions.
          </p>
          <a href="#contact" className="btn-primary">
            Share Your Ideas
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyIssues;
