import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="vs-footer">
      <div className="vs-footer-container">
        {/* Top Callout / Pre-footer Banner */}
        {/* <div className="vs-footer-banner">
          <div className="vs-banner-text">
            <span className="vs-eyebrow">READY FOR THE NEXT SHIFT?</span>
            <h2>Let’s turn strategic intent into lasting execution.</h2>
          </div>
          <Link to="/contact" className="vs-banner-btn" onClick={scrollToTop}>
            <span>Get in Touch</span>
            <ArrowUpRight className="vs-btn-icon" size={18} />
          </Link>
        </div> */}

        {/* Main Footer Grid */}
        <div className="vs-footer-grid">
          {/* Column 1: Brand Info */}
          <div className="vs-footer-col vs-col-brand">
            <Link to="/" className="vs-footer-brand" onClick={scrollToTop}>
              <img
                src="/logo.png"
                alt="Verge Shifts Logo"
                className="vs-footer-logo"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="vs-brand-text">
                {/* <strong>VERGE SHIFTS</strong> */}
                <h4>Transformation &amp;  <br></br> Transition Management</h4>
              </div>
            </Link>
            <p className="vs-brand-tagline">
              Partnering with Boards, CEOs, and leadership teams to navigate 
              critical business shifts from Boardroom to Digital.
            </p>
            <div className="vs-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="vs-social-icon"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="vs-social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="vs-social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="vs-social-icon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="vs-footer-col">
            <h4 className="vs-footer-heading">Navigation</h4>
            <ul className="vs-footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              {/* <li>
                <Link to="/about" onClick={scrollToTop}>About Us</Link>
              </li> */}
              <li>
                <Link to="/approach" onClick={scrollToTop}>Our Approach</Link>
              </li>
              {/* <li>
                <Link to="/insights" onClick={scrollToTop}>Insights & Perspective</Link>
              </li> */}
              <li>
                <Link to="/contact" onClick={scrollToTop}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Four Shifts */}
          <div className="vs-footer-col">
            <h4 className="vs-footer-heading">Transformation Journeys</h4>
            <ul className="vs-footer-links">
              <li>
                <Link to="/strategy-transformation" onClick={scrollToTop}>
                  Strategy → Transformation
                </Link>
              </li>
              <li>
                <Link to="/people-performance" onClick={scrollToTop}>
                  People → Performance
                </Link>
              </li>
              <li>
                <Link to="/change-sustainability" onClick={scrollToTop}>
                  Transition → Continuity
                </Link>
              </li>
              <li>
                <Link to="/today-tomorrow" onClick={scrollToTop}>
                  Digital → Enablement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="vs-footer-col">
            <h4 className="vs-footer-heading">Connect With Us</h4>
            <ul className="vs-contact-info">
              <li>
                <MapPin size={16} className="vs-info-icon" />
                <span>Executive Office, Business Bay, Dubai, UAE</span>
              </li>
              <li>
                <Mail size={16} className="vs-info-icon" />
                <a href="mailto:contact@vergeshifts.com">contact@vergeshifts.com</a>
              </li>
              {/* <li>
                <Phone size={16} className="vs-info-icon" />
                <a href="tel:+97140000000">+971 4 000 0000</a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="vs-footer-bottom">
          <p className="vs-copyright">
            © {new Date().getFullYear()} <strong>VERGE SHIFTS</strong>. All rights reserved.
          </p>
          <div className="vs-legal-links">
            {/* <Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link>
            <span className="vs-divider">•</span>
            <Link to="/terms" onClick={scrollToTop}>Terms of Service</Link>
            <span className="vs-divider">•</span> */}
            <button onClick={scrollToTop} className="vs-back-to-top">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;