import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src="/party-logo.png" alt="Party Logo" className="party-logo" />
          <span className="logo-text">For The People</span>
        </div>

        <nav className={`nav ${mobileMenu ? "mobile-open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMobileMenu(false)}>
            About
          </a>
          <a href="#issues" onClick={() => setMobileMenu(false)}>
            Key Issues
          </a>
          <a href="#achievements" onClick={() => setMobileMenu(false)}>
            Achievements
          </a>
          <a href="#vision" onClick={() => setMobileMenu(false)}>
            Vision
          </a>
          <a href="#gallery" onClick={() => setMobileMenu(false)}>
            Gallery
          </a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn-donate">
            Donate
          </a>
          <a href="#volunteer" className="btn-volunteer">
            Volunteer
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
