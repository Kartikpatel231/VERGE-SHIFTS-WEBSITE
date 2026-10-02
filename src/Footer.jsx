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
 <div className="contact-details">

              <a
                href="mailto:connect@vergeshifts.com"
                className="contact-email"
              >
                connect@vergeshifts.com
              </a>

              
            </div>
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
        

          {/* SERVICES */}
      

          {/* CONTACT */}
        

        </div>

        {/* LARGE BRAND STATEMENT */}
       

        {/* DIVIDER */}
       

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