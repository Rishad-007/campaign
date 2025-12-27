import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>জনগণের জন্য</h3>
            <p>
              সততা, স্বচ্ছতা এবং নিষ্ঠার সাথে সেবা করতে প্রতিশ্রুতিবদ্ধ। একসাথে,
              আমরা সবার জন্য একটি উন্নত ভবিষ্যৎ গড়তে পারি।
            </p>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook">
                📘
              </a>
              <a href="#twitter" aria-label="Twitter">
                🐦
              </a>
              <a href="#instagram" aria-label="Instagram">
                📷
              </a>
              <a href="#youtube" aria-label="YouTube">
                📹
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>দ্রুত লিঙ্ক</h4>
            <ul>
              <li>
                <a href="#home">হোম</a>
              </li>
              <li>
                <a href="#about">পরিচিতি</a>
              </li>
              <li>
                <a href="#issues">মূল বিষয়সমূহ</a>
              </li>
              <li>
                <a href="#achievements">অর্জনসমূহ</a>
              </li>
              <li>
                <a href="#vision">রূপকল্প</a>
              </li>
              <li>
                <a href="#gallery">গ্যালারি</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>যুক্ত হন</h4>
            <ul>
              <li>
                <a href="#volunteer">স্বেছ্ছাসেবক</a>
              </li>
              <li>
                <a href="#donate">দান করুন</a>
              </li>
              <li>
                <a href="#events">অনুষ্ঠান</a>
              </li>
              <li>
                <a href="#contact">যোগাযোগ</a>
              </li>
              <li>
                <a href="#newsletter">নিউজলেটার</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>আপডেট থাকুন</h4>
            <p>
              সর্বশেষ আপডেট এবং প্রচার সংবাদের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব
              করুন।
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="আপনার ইমেইল দিন" required />
              <button type="submit">সাবস্ক্রাইব</button>
            </form>
            <div className="footer-contact">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ contact@campaign.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} প্রচার। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="footer-links">
              <a href="#privacy">গোপনীয়তা নীতি</a>
              <span>|</span>
              <a href="#terms">সেবার শর্তাবলী</a>
              <span>|</span>
              <a href="#accessibility">সুগম্যতা</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
