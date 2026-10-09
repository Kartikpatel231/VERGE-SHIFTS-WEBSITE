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

  return (
    <header className="site-header">
      <div className="container header-inner">

        <Brand />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${
            menuOpen ? "main-nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >

          {/* HOME */}
          <Link
            className="active"
            to="/"
           // onClick={closeMenu}
             onClick={handleHomeClick}
          >
            Home
          </Link>
          <Link
            to="/#shifts"
           // onClick={closeMenu}
            onClick={() => handleSectionClick("shifts")}
          >
            The Shifts{" "}
            <span className="chevron">⌄</span>
          </Link>

          {/* THE SHIFTS */}
         

          {/* CONTEXTS */}
          <Link
            // to="/#contexts"
            to="/business-contexts"
            onClick={closeMenu}
          //  onClick={closeMenu}
          // onClick={() => handleSectionClick("contexts")}
          >
            Contexts
          </Link>

          {/* ABOUT */}
          {/* <Link
            to="/#approach"
           // onClick={closeMenu}
             onClick={() => handleSectionClick("approach")}
          >
            Approach
          </Link> */}
 
          {/* INSIGHTS */}
        <Link
            to="/#insights"
            // onClick={closeMenu}
             onClick={() => handleSectionClick("insights")}
          >
           Our Approach
          </Link> 

          {/* CONTACT PAGE */}
          {/* <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link> */}

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