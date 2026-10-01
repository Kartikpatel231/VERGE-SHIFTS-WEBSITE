import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

import Brand from "./Brand";
import "./styles.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      {/* FOOTER TOP */}
      <div className="container footer-container">

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <Brand footer />

            <p className="footer-description">
              Helping organizations navigate transformation,
              transition and change — from boardroom to digital.
            </p>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h4>Explore</h4>

            <Link to="/">Home</Link>
            <Link to="/strategy-transformation">
              The Shifts
            </Link>
            <Link to="/#contexts">
              Contexts
            </Link>
            <Link to="/#about">
              About Ria
            </Link>
            <Link to="/#insights">
              Insights
            </Link>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>Focus Areas</h4>

            <Link to="/strategy-transformation">
              Strategy &amp; Transformation
            </Link>

            <Link to="/people-performance">
              People &amp; Performance
            </Link>

            <Link to="/change-sustainability">
              Change &amp; Sustainability
            </Link>

            <Link to="/today-tomorrow">
              Today &amp; Tomorrow
            </Link>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h4>Let's Connect</h4>

            <p>
              Ready to shape what's next?
            </p>

            <Link
              to="/contact"
              className="footer-contact-button"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </div>

        </div>

        {/* LARGE BRAND STATEMENT */}
        <div className="footer-statement">
          <span>FROM BOARDROOM</span>
          <span>TO DIGITAL</span>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Verge Shifts. All rights reserved.
          </p>

          <p className="footer-developer">
            Designed &amp; Developed by{" "}
            <a
              href="https://halvixtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Halvix Technologies
            </a>
          </p>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;