import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="/party-logo.png"
              alt="Party Logo"
              className="footer-logo"
            />
            <h3>For The People</h3>
            <p>
              Committed to serving with integrity, transparency, and dedication.
              Together, we can build a better future for all.
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
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#issues">Key Issues</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li>
                <a href="#volunteer">Volunteer</a>
              </li>
              <li>
                <a href="#donate">Donate</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Stay Updated</h4>
            <p>
              Subscribe to our newsletter for latest updates and campaign news.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
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
            <p>&copy; {currentYear} Campaign. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms of Service</a>
              <span>|</span>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
