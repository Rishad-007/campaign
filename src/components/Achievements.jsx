import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      year: "২০২৩",
      title: "স্বাস্থ্যসেবা সংস্কার আইন",
      description:
        "১০০,০০০+ বীমাহীন নাগরিকদের বীমা প্রদানকারী ব্যাপক স্বাস্থ্যসেবা আইন পাসের নেতৃত্ব দিয়েছি।",
      impact: "১০০,০০০+ জীবন উন্নত",
    },
    {
      year: "২০২২",
      title: "সবুজ শক্তি উদ্যোগ",
      description:
        "আমাদের জেলায় কার্বন নিঃসরণ ৪০% কমিয়ে নবায়নযোগ্য শক্তি কর্মসূচি শুরু করেছি।",
      impact: "৪০% নিঃসরণ হ্রাস",
    },
    {
      year: "২০২১",
      title: "শিক্ষা উৎকর্ষ কর্মসূচি",
      description:
        "বঞ্চিত সম্প্রদায়ে ৫০টি নতুন স্কুল এবং প্রযুক্তি উন্নয়নের জন্য অর্থ প্রদান করেছি।",
      impact: "৫০টি স্কুল নির্মিত",
    },
    {
      year: "২০২০",
      title: "কর্মসংস্থান সৃষ্টি অভিযান",
      description:
        "প্রধান বিনিয়োগ আকর্ষণ করে ৫,০০০+ কর্মসংস্থান তৈরি এবং স্থানীয় ব্যবসা সহায়তা করেছি।",
      impact: "৫,০০০+ কর্মসংস্থান তৈরি",
    },
    {
      year: "২০১৯",
      title: "অবকাঠামো আধুনিকীকরণ",
      description:
        "৫০০ কিলোমিটার সড়ক, ১০টি সেতু এবং উন্নত গণপরিবহন ব্যবস্থার নির্মাণ তদারক করেছি।",
      impact: "৫০০ কিমি সড়ক নির্মিত",
    },
    {
      year: "২০১৮",
      title: "যুব সশক্তিকরণ উদ্যোগ",
      description:
        "দক্ষতা উন্নয়ন কেন্দ্র প্রতিষ্ঠা করেছি যেখানে বছরে ১০,০০০+ যুবককে প্রশিক্ষণ দেওয়া হয়।",
      impact: "১০,০০০+ যুবক প্রশিক্ষিত",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <div className="section-header">
          <span className="section-label">প্রদর্শন রেকর্ড</span>
          <h2 className="section-title">অর্জনসমূহ</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            কাজ প্রতিশ্রুতির চেয়ে উচ্চস্বরে কথা বলে। এখানে আছে কিছু উদ্যোগ যা
            আমি নেতৃত্ব দিয়েছি এবং যা মানুষের জীবনে প্রকৃত পরিবর্তন এনেছে।
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
            <h3>১৫+</h3>
            <p>বছর জনসেবায়</p>
          </div>
          <div className="summary-card">
            <h3>৫০০+</h3>
            <p>সমাপ্ত প্রকল্প</p>
          </div>
          <div className="summary-card">
            <h3>৫০,০০০+</h3>
            <p>সরাসরি প্রভাবিত জীবন</p>
          </div>
          <div className="summary-card">
            <h3>৯৮%</h3>
            <p>নির্বাচকমণ্ডলী সন্তুষ্টি</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
