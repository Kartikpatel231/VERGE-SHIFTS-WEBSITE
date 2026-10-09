import React from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
import "./footer.css";
function Brand({ footer = false }) {
  return (
    <Link
      className={`vs-footer-brand ${footer ? "brand--footer" : ""}`}
      to="/"
      aria-label="Verge Shifts home"
    >
      <img
        src="/logo.png"
        alt="Verge Shifts Logo"
        className="vs-footer-logo"
      />

      <span className="brand-copy">
        <strong>VERGE SHIFTS</strong>
        <small>Transformation &amp; Transition Management</small>
      </span>
    </Link>
  );
}

export default Brand;