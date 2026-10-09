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
    path: "/today-tomorrow",
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
    title: "STRATEGY →",
    subtitle: "TRANSFORMATION",
       path: "/strategy-transformation",
    description: "Aligning leadership intent with actionable organizational design and operating models.",
    image: BRAND_IMAGES.strategy,
    metrics: "+40% Operational Efficiency"
  },
  {
    id: "people",
    title: "PEOPLE →",
    subtitle: "PERFORMANCE",
      path: "/people-performance",
    description: "Mobilizing leadership mindsets, capability building, and sustaining cultural agility.",
    image: BRAND_IMAGES.people,
    metrics: "95% Leadership Alignment"
  },
  {
    id: "transition",
    title: "TRANSITION →",
    subtitle: "CONTINUITY",
     path: "/change-sustainability",
    description: "Navigating M&A, restructuring, and change management without loss of momentum.",
    image: BRAND_IMAGES.change,
    metrics: "Zero Disruption Rollouts"
  },
  {
    id: "digital",
    title: "DIGITAL →",
    subtitle: "ENABLEMENT",
      path: "/today-tomorrow",
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
    "Deep dive to understand what organization want to achieve , identify the gap and define the transformation imperative.We align leadership strategic intent to Cuture , Organization design  & Operating Model , People Capablity & Mindsets , Technology",
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
    "Embed the change, mindsets &cultural shifts ,  measure outcomes, and ensure the transformation endures.",
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


      <main>

        {/* HERO */}
        <section
          className="hero"
          style={{
            "--hero-image": `url(${images.hero})`,
          }}
        >

          <div className="container hero-content1">

             <p className="vs-eyebrow" style={{ color: "#1D6E6B" }}>
      VERGE SHIFTS
    </p>

            <h1>
            <em> Transformation is a journey.</em>
              <br />
           
              <em>We help you navigate it.</em>
            </h1>

            <div className="accent-line" />

            <p className="hero-kicker" style={{ color: "#1D6E6B" }}>
      From Boardroom to Digital
    </p>

          </div>

          <div className="hero-grain" />

        </section>


        {/* THE SHIFTS */}
       {/* OUR PERSPECTIVE - SPLIT LAYOUT */}

     {/* THE SHIFTS */}
<section id="shifts" className="vs-shifts-grid-section" style={{
    padding: "2rem 0",           /* 1. Reduces top & bottom section height */
    backgroundColor: "#ffffff",
    width: "100%",
margin: "-30 auto",
  }}>
  <div className="vs-container">
    <div className="vs-shifts-header">
      <p className="vs-eyebrow">THE SHIFTS WE NAVIGATE</p>
      <h2 className="vs-shifts-title">Four transformation journeys.</h2>
      <p className="vs-shifts-subtitle">Four integrated journey , People-centric , Built for what next</p>
    </div>

    {/* 4 Pillars Grid */}
    <div className="vs-journey-grid">
      {JOURNEYS.map((journey) => (
        // <div
        //   key={journey.id}
        //   className="vs-journey-card"
        // >
        //   {/* Background Image Container */}
        //   <div
        //     className="vs-card-bg"
        //     style={{ backgroundImage: `url("${journey.image}")` }}
        //   />

        //   {/* Dark Overlay */}
        //   <div className="vs-card-overlay" />

        //   {/* Card Content */}
        //   <div className="vs-card-content">
        //     <span className="vs-card-tag">Transformation Pillar</span>

        //     <h3 className="vs-card-title">
        //       <span className="vs-title-main">{journey.title}</span>
        //       <span className="vs-title-sub">{journey.subtitle}</span>
        //     </h3>

        //     <p className="vs-card-description">{journey.description}</p>

        //     <div className="vs-card-footer">
        //       <span className="vs-action-text">View Blueprint</span>
        //       <ArrowRight className="vs-action-icon" size={16} />
        //     </div>
        //   </div>
        // </div>
        <Link
          key={journey.id}
          to={journey.path}
          className="vs-journey-card"
          style={{ textDecoration: "none", color: "inherit", display: "flex" }}
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
            <span className="vs-card-tag">Transformation Pillar</span>

            <h3 className="vs-card-title">
              <span className="vs-title-main">{journey.title}</span>
              <span className="vs-title-sub">{journey.subtitle}</span>
            </h3>

            <p className="vs-card-description">{journey.description}</p>

            <div className="vs-card-footer">
              <span className="vs-action-text">View Blueprint</span>
              <ArrowRight className="vs-action-icon" size={16} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
{/* <section 
  className="vs-perspective-section" 
  id="shifts-intro" 
  style={{
    padding: "2rem 0",
    backgroundColor: "#ffffff",
    width: "100%", 
    margin: "0 auto"
  }}
>
  <div 
    className="vs-perspective-container"
    style={{
      maxWidth: "1140px", 
      margin: "0 auto",
      padding: "0 1.5rem"
    }}
  >
    <div 
      className="vs-perspective-split"
      style={{
        display: "grid",
     
        gridTemplateColumns: "1fr 1.8fr", 
        gap: "8.5rem", 
        alignItems: "center"
      }}
    >
           <div 
        className="vs-perspective-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left"
        }}
      >
        <span 
          className="vs-eyebrow" 
          style={{ 
            color: "#1D6E6B", 
            marginBottom: "0.5rem",
            fontWeight: "700",
            fontSize: "0.85rem",
            letterSpacing: "0.18em"
          }}
        >
          OUR PERSPECTIVE
        </span>

        <p 
          className="vs-perspective-description"
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.65",
            color: "#64748B",
            margin: "0 0 1rem 0"
          }}
        >
          <span style={{ display: "block", color: "#0B2D3A", marginBottom: "0.5rem" }}>
               At the verge of every major business shift, there is complexity. We help leadership navigate it.
       
             </span>

          <strong style={{ color: "#0B2D3A" }}>Verge Shifts</strong> partners with Boards, CEOs, and leadership teams to navigate critical transformation and transition journeys — turning strategic intent into organizational, operational, technological, and people shifts, and ultimately into execution.
        </p>

       
        <div 
          className="vs-perspective-highlights"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "100%",
            paddingTop: "0.75rem",
            borderTop: "1px solid #E2E8F0"
          }}
        >
          <div className="vs-highlight-item" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#1E293B", fontWeight: "600" }}>
            <span className="vs-highlight-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1D6E6B", flexShrink: 0 }} />
            <span>Strategic Intent to Realized Outcomes</span>
          </div>
          <div className="vs-highlight-item" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#1E293B", fontWeight: "600" }}>
            <span className="vs-highlight-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1D6E6B", flexShrink: 0 }} />
            <span>People-Centric Transformation Frameworks</span>
          </div>
          <div className="vs-highlight-item" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#1E293B", fontWeight: "600" }}>
            <span className="vs-highlight-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1D6E6B", flexShrink: 0 }} />
            <span>Zero-Disruption Transition & Continuity</span>
          </div>
        </div>
      </div>
      
      <div 
        className="vs-perspective-visual"
        style={{ width: "100%", margin: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85"
          alt="Verge Shifts Leadership Perspective"
          className="vs-perspective-img"
          style={{
            width: "100%",
            height: "220px", 
            objectFit: "cover",
            borderRadius: "12px",
            display: "block"
          }}
        />
      </div>

    
 

    </div>
  </div>
</section> */}
        {/* CONTEXTS */}
        {/* CONTEXTS */}
{/* <section className="contexts" id="contexts">
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
</section> */}
    {/* CONTEXTS */}
{/* CONTEXTS */}
<section className="vs-contexts-section" id="contexts">
  <div className="vs-contexts-container">
    <div className="vs-contexts-layout">
      
      <div className="vs-contexts-intro">
        <p className="vs-eyebrow">BUSINESS CONTEXTS</p>
        <h2>Where we create impact.</h2>
        <p>
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

        {/* APPROACH */}
        {/* <section
          className="section approach"
          id="insights"
        >

          <div className="container approach-layout">

            <div className="approach-intro">

              <p className="eyebrow">
                OUR APPROACH
              </p>

              <h2>
                Right shift at right time 
              </h2>

              <p>
                Vergeshifts brings together areas 
                that are often addressed separately ,
                 we customize to the need of the organization
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

                      <h2>
                        {title}
                      </h2>

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

        </section> */}

{/* OUR APPROACH */}
{/* OUR APPROACH - COMPACT GRID */}
<section  className="vs-approach-section" id="insights">
  <div className="vs-approach-container">
    
    {/* Compact Side-by-Side Header */}
    <div className="vs-approach-header">
      <div className="vs-header-left">
        <span className="vs-eyebrow">OUR APPROACH</span>
        <h2>Right shift at the right time.</h2>
      </div>
      <p className="vs-header-right-p">
        Vergeshifts brings together areas that are often addressed separately. We customize our methodology to match your exact organizational needs.
      </p>
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
          <p className="vs-card-copy">{copy}</p>

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