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
          <span className="logo-text">অধ্যক্ষ আসাদুল হাবিব দুলু</span>
        </div>

        <nav className={`nav ${mobileMenu ? "mobile-open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenu(false)}>
            হোম
          </a>
          <a href="#about" onClick={() => setMobileMenu(false)}>
            পরিচিতি
          </a>
          <a href="#issues" onClick={() => setMobileMenu(false)}>
            মূল বিষয়সমূহ
          </a>
          <a href="#achievements" onClick={() => setMobileMenu(false)}>
            অর্জনসমূহ
          </a>
          <a href="#vision" onClick={() => setMobileMenu(false)}>
            রূপকল্প
          </a>
          <a href="#gallery" onClick={() => setMobileMenu(false)}>
            গ্যালারি
          </a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>
            যোগাযোগ
          </a>
        </nav>

        

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
