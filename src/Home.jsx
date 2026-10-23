import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
import "./layourt.css"
import "./ShiftsSection.css"
import "./ContextsSection.css"
import "./PerspectiveSection.css";
import "./ApproachSection.css";
import {
  TrendingUp,
  Handshake,
  Globe,
  Layers,
  GitCompare,
  Network,
  Cpu,
  ArrowRight,
  BarChart3,
   Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  Compass,
  Users,
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
    title: "STRATEGY →",
    subtitle: "TRANSFORMATION",
    path: "/strategy-transformation",
  },

  {
    image: images.people,
    eyebrow: "",
    title: "PEOPLE →",
    subtitle: "PERFORMANCE",
    path: "/people-performance",
  },

  {
    image: images.change,
    eyebrow: "",
    title: "TRANSITION → ",
    subtitle: "CONTINUITY",
    path: "/change-sustainability",
  },

  {
    image: images.future,
    eyebrow: "",
    title: "DIGITAL → ",
    subtitle: "ENABLEMENT",
    path: "/digital-enablement",
  },
];

const BRAND_IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
  strategy: "/strategy.png",
 // people: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
   people:"/people.png",
  change: "/transition.png",
  future: "/digitaltr.png",
  approachVisual: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
  ctaBg: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=85"
};

const JOURNEYS = [
  {
    id: "strategy",
    title: "STRATEGY  → ",
    subtitle: " TRANSFORMATION",
       path: "/strategy-transformation",
    description: "Aligning leadership intent with actionable organizational design and operating models.",
    image: BRAND_IMAGES.strategy,
    metrics: "+40% Operational Efficiency"
  },
  {
    id: "people",
    title: "PEOPLE  → ",
    subtitle: " PERFORMANCE",
      path: "/people-performance",
    description: "Mobilizing leadership mindsets, capability building, and sustaining cultural agility.",
    image: BRAND_IMAGES.people,
    metrics: "95% Leadership Alignment"
  },
  {
    id: "transition",
    title: "TRANSITION  → ",
    subtitle: " CONTINUITY",
     path: "/transition-continuity",
    description: "Navigating M&A, restructuring, and change management without loss of momentum.",
    image: BRAND_IMAGES.change,
    metrics: "Zero Disruption Rollouts"
  },
  {
    id: "digital",
    title: "DIGITAL  → ",
    subtitle: " ENABLEMENT",
      path: "/digital-enablement",
    description: "Connecting tech investments with human behavior to capture full digital ROI.",
    image: BRAND_IMAGES.future,
    metrics: "3.5x Digital ROI Captures"
  }
];

const contexts = [
  { label: "Growth", icon: BarChart3, desc: "Scaling operating models rapidly for market expansion." },
  { label: "M&A", icon: Handshake, desc: "Harmonizing cultures and unifying post-merger entities." },
  { label: "Expansion", icon: Globe, desc: "Adapting governance models across global territories." },
  { label: "Integration", icon: GitCompare, desc: "Streamlining technology stacks and organizational roles." },
  { label: "Restructuring", icon: Network, desc: "Rebuilding organizational resiliency under market shifts." },
  { label: "New Operating Model", icon: Layers, desc: "Designing agile, cross-functional organizational architectures." },
  { label: "Digital Transformation", icon: Cpu, desc: "Translating digital strategies into frontline habits." }
];

const approach = [
  [
    "01",
    "Diagnose",
    "Deep dive to understand what organization want to achieve , identify the gap and define the transformation imperative. We align leadership strategic intent to Cuture , Organization design  & Operating Model. People Capablity and Mindsets",
  ],
  [
    "02",
    "Design",
    "Co-create the transformation blueprint — Linking strategy to transformation roadmap, and governance model.",
  ],
  [
    "03",
    "Deploy",
    "Execute with precision — build capablity , mobilise teams, manage change, and track progress.",
  ],
  [
    "04",
    "Delivery",
    "Embed the change, mindsets & cultural shifts ,  measure outcomes, and ensure the transformation endures.",
  ],
];



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

    <small>
      Transformation &amp; Transition Management
    </small>
  </span>
</Link>
  );
}


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


      <main>

        {/* HERO */}
        <section
          className="hero"
          style={{
            "--hero-image": `url(${images.hero})`,
          }}
        >

          <div className="container hero-content1">
{/* 
             <p className="vs-eyebrow" style={{ color: "#1D6E6B" }}>
      VERGE SHIFTS
    </p> */}

            <h1>
            <em> Transformation</em>
            <em> <br></br>is a journey.</em>
              <br />
           
              <em>We help you to navigate it.</em>
            </h1>

            <div className="accent-line" />

            <p className="hero-kicker" style={{ color: "#0B61AA" }}>
      From Boardroom to Digital
    </p>

          </div>

          <div className="hero-grain" />

        </section>


        {/* THE SHIFTS */}
       {/* OUR PERSPECTIVE - SPLIT LAYOUT */}

<section
  id="perspective"
  className="vs-shifts-grid-section"
  style={{
    padding: "2rem 0",
    backgroundColor: "#ffffff",
    width: "100%",
    margin: "-30px auto",
    boxSizing: "border-box",
  }}
>
  <div
    className="vs-container"
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "10px 14px",
      boxSizing: "border-box",
    }}
  >
    {/* FULL-WIDTH CONTENT */}
    <div
      className="vs-perspective-content"
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* SECTION LABEL */}
      <p></p>
      <p
        className="vs-eyebrow"
        style={{
          
          fontSize: "16px",
          fontWeight: "900",
          letterSpacing: "2px",
          textTransform: "uppercase",
           color: "var(--vs-sage-green)",
           color: "#0B61AA",
          margin: "0 0 14px",
        }}
      >
        OUR PERSPECTIVE
      </p>

      {/* HEADING */}
      <h6
        className="vs-shifts-title"
        style={{
          fontSize: "clamp(30px, 3.5vw, 36px)",
          lineHeight: "1.2",
          fontWeight: "500",
          color: "#0B1F3A",
          margin: "0 0 22px",
        }}
      >
        Navigating every major business shifts
      </h6>

      {/* FULL-WIDTH DESCRIPTION */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "14px",
          boxSizing: "border-box",
        }}
      >
        <p
          className="vs-shifts-subtitle"
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#536174",fontFamily: "Arial, sans-serif",
             textAlign: "justify",
            margin: 0,
          }}
        >
          At the verge of every major business shift brings a critical
          challenge: turning strategic intent into execution.<br></br>
          Growth, transformation, expansion and transition demand more than a 
          clear vision. They require the right operating models, organisational capabilities,
           processes, leadership and technology to move the business forward.
        </p>

        <p
          className="vs-shifts-subtitle"
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#536174",
           textAlign: "justify",fontFamily: "Arial, sans-serif",
            margin: 0,
          }}
        >
          <b>VERGE SHIFTS bridges the gap between intent and execution.</b>
          <br></br>
          We work with Boards, CEOs, promoters 
          and business leaders to navigate significant business
          shifts — translating strategic priorities into
          practical action while sustaining continuity
          and building the capabilities required for what comes next.
        </p>
      </div>

      {/* CLOSING STATEMENT */}
      {/* <h4
        style={{
          color: "#0B61AA",
          fontSize: "16px",
          lineHeight: "1",
          margin: "20px 0 0",
          fontWeight: "500",
           fontSize: "16px",
          fontWeight: "900",
        }}
      >
        From  Boardroom to Digital, We help you to navigate it.
      </h4> */}
    </div>
  </div>
</section>

     {/* THE SHIFTS */}
<section id="shifts" className="vs-shifts-grid-section" style={{
    padding: "2rem 0",           /* 1. Reduces top & bottom section height */
    backgroundColor: "#ffffff",
    width: "100%",
margin: "-30 auto",
  }}>
   


<div className="vs-container">
    <div className="vs-shifts-header">
      <p className="vs-eyebrow" style={{
        color:"#0B61AA",
         fontSize: "16px",
         

      }}>THE SHIFTS WE NAVIGATE</p>
     <h4
  className="vs-shifts-title"
  style={{
    fontSize: "clamp(30px, 3.5vw, 36px)",
    lineHeight: "1.2",
    fontWeight: "500",
    color: "#0B1F3A",
    textAlign: "left",
    margin: "0 0 22px",
    fontFamily: "Arial, sans-serif",
  }}
>
  Four transformation journeys.
</h4>
      <p className="vs-shifts-subtitle" style={{
         textAlign: "justify",wordSpacing: "3px", fontSize: "16px",fontFamily: "Arial, sans-serif",
            lineHeight: "1.8"
      }}>Four integrated journey , People-centric , Built for what next</p>
     
    </div>

    {/* 4 Pillars Grid */}
    <div className="vs-journey-grid">
      {JOURNEYS.map((journey) => (
     
        <Link
          key={journey.id}
          to={journey.path}
          className="vs-journey-card"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {/* Background Image Container */}
          <div
            className="vs-card-bg"
            style={{ backgroundImage: `url("${journey.image}")` }}
          />

          {/* Dark Overlay */}
          <div className="vs-card-overlay" />

          {/* Card Content */}
          <div className="vs-card-content">
            {/* <span className="vs-card-tag">Transformation Pillar</span> */}
  <span className="vs-title-sub">{journey.title}{journey.subtitle}</span>
            <h3 className="vs-card-title">
              
              {/* <span className="vs-title-main">{journey.title}</span>
              <span className="vs-title-sub">{journey.subtitle}</span> */}
            </h3>

            {/* <p className="vs-card-description">{journey.description}</p> */}

            <div className="vs-card-footer">
              {/* <span className="vs-title-sub">{journey.title}{journey.subtitle}</span> */}
              {/* <span className="vs-title-sub">{journey.subtitle}</span> */}
              {/* <ArrowRight className="vs-action-icon" size={16} /> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>

</section>

<section className="vs-contexts-section" id="contexts">
  <div className="vs-contexts-container">
    <div className="vs-contexts-layout">
      
      <div className="vs-header-left">
        <p className="" style={{  color:"#0B61AA" ,   fontSize: "16px",
          fontWeight: "900",
          letterSpacing: "2px",
          textTransform: "uppercase"}}>BUSINESS CONTEXTS</p>
        <h2  className="vs-shifts-title"
        style={{
          fontSize: "clamp(30px, 3.5vw, 36px)",
          lineHeight: "1",
          fontWeight: "400",
          color: "#0B1F3A",
          margin: "0 0 22px",
        }}>Where we create impact.</h2>
        <p className="vs-shifts-subtitle"  style={{
         textAlign: "justify",wordSpacing: "3px", fontSize: "16px",fontFamily: "Arial, sans-serif",
            lineHeight: "1.8"
      }}>
          Verge Shifts brings deep expertise across key business contexts
          to help you navigate complexity and support in building your next
          organization operating model.
        </p>
      </div>

      <div className="vs-context-grid">
        {contexts.map(({ label, icon: Icon }) => (
          <div className="vs-context-item" key={label}>
            <Icon className="vs-context-icon" size={26} strokeWidth={1.75} />
            <span>{label}</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

       

{/* OUR APPROACH */}
{/* OUR APPROACH - COMPACT GRID */}
<section  className="vs-approach-section" id="insights">
  <div className="vs-approach-container">
    
    {/* Compact Side-by-Side Header */}
    <div className="vs-approach-header">
      <div className="vs-header-left">
       
          <p
        className="vs-eyebrow1"
        style={{
          
          fontSize: "16px",
          fontWeight: "900",
          letterSpacing: "2px",
          textTransform: "uppercase",
       
           color: "#0B61AA",
          margin: "0 0 14px",
        }}
      >OUR APPROACH</p>
        <h2  className="vs-shifts-title"
        style={{
          fontSize: "clamp(30px, 3.5vw, 36px)",
          lineHeight: "1.2",
          fontWeight: "500",
          color: "#0B1F3A",
          margin: "0 0 22px",fontFamily: "Arial, sans-serif"
        }}>Right shift at the right time.</h2>
    <p
  className="vs-header-right-p"
  style={{
    textAlign: window.innerWidth <= 768 ? "left" : "justify",
    wordSpacing: window.innerWidth <= 768 ? "1px" : "3px",
    fontSize: window.innerWidth <= 768 ? "14px" : "16px",
    fontFamily: "Arial, sans-serif",
    lineHeight: window.innerWidth <= 768 ? "1.7" : "1.8",
    whiteSpace: window.innerWidth <= 768 ? "normal" : "nowrap",
    margin: 0,
  }}
>
  Vergeshifts brings together areas that are often addressed separately. We customize our methodology to match your exact organizational needs.
</p>
      </div>
     
    </div>

    {/* Horizontal Step Cards */}
    <div className="vs-approach-grid">
      {approach.map(([number, title, copy], index) => (
        <div className="vs-approach-card" key={number}>
          
          <div className="vs-card-top">
            <span className="vs-card-number">STEP {number}</span>
             {index < approach.length - 1 && (
               <span className="vs-card-arrow">→</span>
            )} 
          </div>

          <h3 className="vs-card-title">{title}</h3>
          <p className="vs-card-copy"  style={{
         textAlign: "justify",wordSpacing: "1px", fontSize: "16px",
            lineHeight: "1.8",fontFamily: "Arial, sans-serif"
      }}>{copy}</p>

        </div>
      ))}
    </div>

  </div>
</section>
      </main>



    </div>
  );
}

export default Home;
