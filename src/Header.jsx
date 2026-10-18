import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Brand from "./Brand";
import "./styles.css";

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    closeMenu();

    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleHomeClick = () => {
    closeMenu();

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleShiftLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="site-header">
      <style>{`
        /* Remove lines from Home and The Shifts */
        .main-nav > a.active,
        .main-nav > a.active:hover,
        .main-nav > a.active:focus,
        .main-nav > a.active:active,
        .main-nav .vs-nav-dropdown-trigger,
        .main-nav .vs-nav-dropdown-trigger:hover,
        .main-nav .vs-nav-dropdown-trigger:focus,
        .main-nav .vs-nav-dropdown-trigger:active {
          border: none !important;
          border-bottom: none !important;
          box-shadow: none !important;
          background-image: none !important;
          text-decoration: none !important;
          outline: none !important;
        }

        .main-nav > a.active::before,
        .main-nav > a.active::after,
        .main-nav > a.active:hover::before,
        .main-nav > a.active:hover::after,
        .main-nav .vs-nav-dropdown-trigger::before,
        .main-nav .vs-nav-dropdown-trigger::after,
        .main-nav .vs-nav-dropdown-trigger:hover::before,
        .main-nav .vs-nav-dropdown-trigger:hover::after,
        .main-nav .vs-nav-dropdown-trigger:focus::before,
        .main-nav .vs-nav-dropdown-trigger:focus::after {
          content: none !important;
          display: none !important;
          border: none !important;
          background: none !important;
        }

        /* Submenu links styled as buttons, without hover lines */
        .vs-nav-dropdown-menu a.vs-shift-button,
        .vs-nav-dropdown-menu a.vs-shift-button:hover,
        .vs-nav-dropdown-menu a.vs-shift-button:focus,
        .vs-nav-dropdown-menu a.vs-shift-button:active {
          display: block;
          padding: 10px 14px;
          border: 1px solid #d9e3e3 !important;
          border-radius: 6px;
          background: #ffffff !important;
          color: #294b50 !important;
          box-shadow: none !important;
          text-decoration: none !important;
          background-image: none !important;
          outline: none !important;
        }

        .vs-nav-dropdown-menu a.vs-shift-button::before,
        .vs-nav-dropdown-menu a.vs-shift-button::after {
          content: none !important;
          display: none !important;
        }
      `}</style>

      <div className="container header-inner">
        <Brand />

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {/* HOME */}
          <Link
            className="active"
            to="/"
            onClick={handleHomeClick}
            style={{
              textDecoration: "none",
              borderBottom: "none",
              boxShadow: "none",
            }}
          >
            Home
          </Link>

          {/* THE SHIFTS */}
          <div className="vs-nav-dropdown">
            <button
              type="button"
              onClick={() => handleSectionClick("shifts")}
              className="vs-nav-dropdown-trigger"
              style={{
                background: "none",
                border: "none",
                padding: "25px 0",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "none",
                textDecoration: "none",
              }}
            >
              The Shifts <span className="chevron">⌄</span>
            </button>

            <ul className="vs-nav-dropdown-menu">
              <li>
                <Link
                  to="/strategy-transformation"
                  onClick={handleShiftLinkClick}
                  className="vs-shift-button"
                >
                  Strategy → Transformation
                </Link>
              </li>

              <li>
                <Link
                  to="/people-performance"
                  onClick={handleShiftLinkClick}
                  className="vs-shift-button"
                >
                  People → Performance
                </Link>
              </li>

              <li>
                <Link
                  to="/transition-continuity"
                  onClick={handleShiftLinkClick}
                  className="vs-shift-button"
                >
                  Transition → Continuity
                </Link>
              </li>

              <li>
                <Link
                  to="/digital-enablement"
                  onClick={handleShiftLinkClick}
                  className="vs-shift-button"
                >
                  Digital → Enablement
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTEXTS */}
          <Link to="/business-contexts" onClick={closeMenu}>
            Contexts
          </Link>

          {/* OUR APPROACH */}
          <Link
            to="/#insights"
            onClick={() => handleSectionClick("insights")}
          >
            Our Approach
          </Link>

          {/* GET IN TOUCH */}
          <Link
            className="header-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Get in Touch <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
