import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("যোগাযোগ করার জন্য ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">যোগাযোগ করুন</span>
          <h2 className="section-title">যোগাযোগ</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            প্রশ্ন, পরামর্শ বা আমাদের প্রচারণায় যোগ দিতে চান? আমরা আপনার কথা শুনতে আগ্রহী!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>চলুন যুক্ত হই</h3>
            <p>
              আপনার কণ্ঠস্বর গুরুত্বপূর্ণ। যোগাযোগ করুন এবং আমাদের সম্প্রদায়ে 
              ইতিবাচক পরিবর্তন আনতে একসাথে কাজ করি।
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>পরিদর্শন করুন</h4>
                  <p>
                    ১২৩ ক্যাম্পেইন স্ট্রিট
                    <br />
                    শহর, রাজ্য ১২৩৪৫
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>আমাদের কল করুন</h4>
                  <p>
                    +1 (555) 123-4567
                    <br />
                    সোম-শুক্র: সকাল ৯টা - সন্ধ্যা ৬টা
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>ইমেইল করুন</h4>
                  <p>
                    contact@campaign.com
                    <br />
                    info@campaign.com
                  </p>
                </div>
              </div>
            </div>

            <div className="volunteer-box">
              <h4>স্বেচ্ছাসেবক হতে চান?</h4>
              <p>
                প্রতিদিন পরিবর্তন আনয়া আমাদের নিবেদিত স্বেছ্ছাসেবকদের দলে যোগ দিন!
              </p>
              <a href="#volunteer" className="btn-secondary">
                স্বেছ্ছাসেবক হন
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="আপনার নাম *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="আপনার ইমেইল *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="আপনার ফোন"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="বিষয় *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="আপনার বার্তা *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              বার্তা পাঠান
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
