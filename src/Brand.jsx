import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Brand({ footer = false }) {
  return (
    <Link
      className={`brand ${footer ? "brand--footer" : ""}`}
      to="/"
      aria-label="Verge Shifts home"
    >
      <img
        src="/logo1.png"
        alt="Verge Shifts Logo"
        className="brand-logo"
      />

      <span className="brand-copy">
        <strong>VERGE SHIFTS</strong>
        <small>Transformation &amp; Transition Management</small>
      </span>
    </Link>
  );
}

export default Brand;