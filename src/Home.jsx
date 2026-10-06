import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
import "./layourt.css"
import {
  TrendingUp,
  Handshake,
  Globe,
  Layers,
  GitCompare,
  Network,
  Cpu,
  BarChart3,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const images = {
 // hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85",
  hero : "/home.PNG",
  strategy:
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1000&q=85",

  people:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",

  change:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",

  future:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",

  ria:
    "https://media.licdn.com/dms/image/v2/D4D03AQGEt0Ky7M2ytQ/profile-displayphoto-crop_800_800/B4DaDsSVqyGUAI-/0/1790670629605?e=1792022400&v=beta&t=6E09vEUFMiVbTTG6qzooUU1KMHcGAoNlnVtLkw84Reo",

  cta:
    "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=85",
};

const journeys = [
  {
    image: images.strategy,
    eyebrow: "",
    title: "Strategy →",
    subtitle: "Transformation",
    path: "/strategy-transformation",
  },

  {
    image: images.people,
    eyebrow: "",
    title: "People →",
    subtitle: "Performance",
    path: "/people-performance",
  },

  {
    image: images.change,
    eyebrow: "",
    title: "Change →",
    subtitle: "Sustainability",
    path: "/change-sustainability",
  },

  {
    image: images.future,
    eyebrow: "",
    title: "Today →",
    subtitle: "Tomorrow",
    path: "/today-tomorrow",
  },
];

// const contexts = [
//   "Growth",
//   "M&A",
//   "Expansion",
//   "Integration",
//   "Restructuring",
//   "New Operating Model",
//   "Digital Transformation",
// ];
// import {
//   TrendingUp,
//   Handshake,
//   Globe,
//   Layers,
//   GitCompare,
//   Network,
//   Cpu,
//   BarChart3,
// } from "lucide-react";
const contexts = [
  { label: "Growth", icon: BarChart3 },
  { label: "M&A", icon: Handshake },
  { label: "Expansion", icon: Globe },
  { label: "Integration", icon: GitCompare },
  { label: "Restructuring", icon: Network },
  { label: "New Operating Model", icon:  Layers},
  { label: "Digital Transformation", icon: Cpu },
];

const approach = [
  [
    "01",
    "Understand",
    "Deep dive into your business, people and market context.",
  ],
  [
    "02",
    "Align",
    "Build shared clarity, priorities and success measures.",
  ],
  [
    "03",
    "Design",
    "Co-create the right strategy, model and solutions.",
  ],
  [
    "04",
    "Transition",
    "Enable adoption, build capability and embed sustainable outcomes.",
  ],
];



function Brand({ footer = false }) {
  return (
    // <Link
    //   className={`brand ${footer ? "brand--footer" : ""}`}
    //   to="/"
    //   aria-label="Verge Shifts home"
    // >
    //   {/* <span className="brand-mark" aria-hidden="true">
    //     <span />
    //     <span />
    //   </span> */}logo.png

    //   <span className="brand-copy">
    //     <strong>VERGE SHIFTS</strong>

    //     <small>
    //       Transformation &amp; Transition Management
    //     </small>
    //   </span>
    // </Link>
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

    <small>
      Transformation &amp; Transition Management
    </small>
  </span>
</Link>
  );
}
// function Brand({ footer = false }) {
//   return (
//     <a
//       className={`brand ${footer ? "brand--footer" : ""}`}
//       href="#top"
//       aria-label="Verge Shifts home"
//     >
//       <span className="brand-mark" aria-hidden="true">
//         <span />
//         <span />
//       </span>

//       <span className="brand-copy">
//         <strong>VERGE SHIFTS</strong>
//         <small>
//           Transformation &amp; Transition Management
//         </small>
//       </span>
//     </a>
//   );
// }

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      →
    </span>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-shell" id="top">

      {/* HEADER */}
      {/* <header className="site-header">

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

            <a
              className="active"
              href="#top"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#shifts"
              onClick={closeMenu}
            >
              The Shifts{" "}
              <span className="chevron">⌄</span>
            </a>

            <a
              href="#contexts"
              onClick={closeMenu}
            >
              Contexts
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About Ria
            </a>

            <a
              href="#insights"
              onClick={closeMenu}
            >
              Insights
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>

            <a
              className="header-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Get in Touch <Arrow />
            </a>

          </nav>

        </div>

      </header> */}

      <main>

        {/* HERO */}
        <section
          className="hero"
          style={{
            "--hero-image": `url(${images.hero})`,
          }}
        >

          <div className="container hero-content1">

             <p className="eyebrow eyebrow--light">
              VERGE SHIFTS
            </p> 

            <h1>
            <em> Transformation is a journey.</em>
              <br />
           
              <em>We help you navigate it.</em>
            </h1>

            <div className="accent-line" />

            <p className="hero-kicker">
              From Boardroom to Digital
            </p>

          </div>

          <div className="hero-grain" />

        </section>


        {/* THE SHIFTS */}
        <section className="section shifts-intro" id="shifts-intro">
        <div className="container shifts-intro-content">
          <p className="eyebrow">OUR PERSPECTIVE</p>
          <h1 className="shifts-headline">
            At the verge of every major business shift, there is complexity. We help leadership navigate it.
          </h1>
          <p className="shifts-description">
            <strong>Verge Shifts</strong> partners with Boards, CEOs, and leadership teams to navigate critical transformation and transition journeys — turning strategic intent into organizational, operational, technological, and people shifts, and ultimately into execution.
          </p>
        </div>
      </section>
        <section
          className="section shifts"
          id="shifts"
        >

          <div className="container shifts-layout">

            <div className="section-intro">

              <p className="eyebrow">
                THE SHIFTS WE NAVIGATE
              </p>

              <h2>
                Four transformation journeys.
              </h2>

              <p>
               People-centric. Built for what’s next.
              </p>

            </div>


            <div className="journey-grid">

              {journeys.map((journey) => (

                <Link
                  className="journey-card"
                  to={journey.path}
                  key={journey.title}
                  onClick={closeMenu}
                  style={{
                    "--card-image": `url(${journey.image})`,
                  }}
                >

                  <span className="journey-shade" />

                  <span className="journey-label">

                    <small>
                      {journey.eyebrow}
                    </small>

                    <strong>
                      {journey.title}
                      <br />
                      {journey.subtitle}
                    </strong>

                  </span>

                  <Arrow />

                </Link>

              ))}

            </div>

          </div>

        </section>


        {/* CONTEXTS */}
        {/* CONTEXTS */}
<section className="contexts" id="contexts">
  <div className="container contexts-layout">
    <div className="contexts-intro">
      <p className="eyebrow">BUSINESS CONTEXTS</p>
      <h2>Where we create impact.</h2>
      <p>
        Verge Shifts bring deep expertise across key business contexts
        to help you navigate complexity and support in building your next
        organization operating model.
      </p>
    </div>

    <div className="context-list">
      {contexts.map(({ label, icon: Icon }) => (
        <div className="context-item" key={label}>
          <Icon className="context-icon" size={28} strokeWidth={1.5} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* <section
          className="contexts"
          id="contexts"
        >

          <div className="container contexts-layout">

            <div className="contexts-intro">

              <p className="eyebrow">
                BUSINESS CONTEXTS
              </p>

              <h2>
                Where we create impact.
              </h2>

              <p>
               Verge shifts bring deep expertise across key business contexts 
               to help you navigate complexity and support in building your nextorganization operating model .
              
              </p>

            </div>


            <div className="context-list">

              {contexts.map((context, index) => (

                <div
                  className="context-item"
                  key={context}
                >

                  <span
                    className={`context-icon icon-${index}`}
                    aria-hidden="true"
                  />

                  <span>
                    {context}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section> */}


        {/* APPROACH */}
        <section
          className="section approach"
          id="insights"
        >

          <div className="container approach-layout">

            <div className="approach-intro">

              <p className="eyebrow">
                OUR APPROACH
              </p>

              <h2>
                From insight to impact.
              </h2>

              <p>
                A structured, pragmatic approach to turn
                strategic intent into lasting transformation.
              </p>

            </div>


            <div className="approach-steps">

              {approach.map(
                ([number, title, copy], index) => (

                  <div
                    className="approach-step"
                    key={number}
                  >

                    <div className="step-number">
                      {number}
                    </div>

                    <div>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {copy}
                      </p>

                    </div>

                    {index < approach.length - 1 && (
                      <span className="step-arrow">
                        →
                      </span>
                    )}

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* FOUNDER */}
        {/* <section
          className="founder"
          id="about"
        >

          <div
            className="founder-image"
            style={{
              "--founder-image": `url(${images.ria})`,
            }}
            aria-label="Portrait placeholder for Ria Mohta"
          />

          <div className="founder-main">

            <p className="eyebrow">
              FOUNDER &amp; PRINCIPAL CONSULTANT
            </p>

            <h2>
              Ria Mohta
            </h2>

            <p className="role-line">
              CHRO&nbsp;&nbsp;•&nbsp;&nbsp;
              TRANSFORMATION LEADER&nbsp;&nbsp;•&nbsp;&nbsp;
              CONSULTANT
            </p>

            <p className="founder-copy">
              With 24+ years of experience, Ria partners
              with Boards, CEOs and leadership teams across
              industries and geographies to navigate complex
              transformation and transition.
            </p>

            <a
              className="outline-button"
              href="#contact"
            >
              Know More <Arrow />
            </a>

          </div>


          <blockquote>
            “People, process,
            <br />
            technology and
            <br />
            leadership — when
            <br />
            brought together —
            <br />
            create enduring value.”

            <cite>
              — Ria Mohta
            </cite>

          </blockquote>


          <div className="founder-links">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </section>


      
        <section
          className="cta-section"
          id="contact"
          style={{
            "--cta-image": `url(${images.cta})`,
          }}
        >

          <div className="cta-overlay" />

          <div className="container cta-content">

            <p className="eyebrow eyebrow--light">
              LET’S SHAPE WHAT’S NEXT.
            </p>

            <p>
              Get in touch to explore how VERGE SHIFTS
              can support your transformation journey.
            </p>

            <div className="contact-details">

              <a
                href="mailto:connect@vergeshifts.com"
                className="contact-email"
              >
                connect@vergeshifts.com
              </a>

              <a
                href="mailto:ria@vergeshifts.com"
                className="contact-email"
              >
                ria@vergeshifts.com
              </a>

            </div>

            <a
              className="light-button"
              href="mailto:connect@vergeshifts.com"
            >
              Get in Touch <Arrow />
            </a>

          </div>

        </section> */}

      </main>


      {/* FOOTER */}
      {/* <footer className="site-footer">

        <div className="container footer-inner">

          <Brand footer />

          <div className="footer-links">

            <a href="#top">
              Home
            </a>

            <a href="#shifts">
              The Shifts
            </a>

            <a href="#contexts">
              Contexts
            </a>

            <a href="#about">
              About Ria
            </a>

            <a href="#insights">
              Insights
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div className="footer-social">
            <span>in</span>
            <span>◎</span>
          </div>

          <p className="copyright">
            © 2025 Verge Shifts. All rights reserved.
          </p>

          <p className="footer-tagline">
            FROM BOARDROOM TO DIGITAL
          </p>

        </div>

      </footer> */}

    </div>
  );
}

export default Home;