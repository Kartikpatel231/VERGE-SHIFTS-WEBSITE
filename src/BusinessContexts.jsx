
import React from "react";
import "./BusinessContexts.css";

const contexts = [
  {
    icon: "◎",
    title: "Growth",
    description:
      "Scaling the organisation, strengthening market presence and capability.",
  },
  {
    icon: "♧",
    title: "M&A",
    description:
      "Integrating people, process and culture for value creation.",
  },
  {
    icon: "◎",
    title: "Expansion",
    description:
      "Building for new markets, new geographies and new opportunities.",
  },
  {
    icon: "♧",
    title: "Integration",
    description:
      "Aligning teams, systems and structures for stronger performance.",
  },
  {
    icon: "⚙",
    title: "Restructuring",
    description:
      "Re-shaping the organisation and realigning for the next phase.",
  },
  {
    icon: "⊕",
    title: "New Operating Model",
    description:
      "Designing flexible, efficient and future-ready operating models.",
  },
  {
    icon: "✣",
    title: "Digital Transformation",
    description:
      "Leveraging technology, people and process for sustainable growth.",
  },
];

function BusinessContexts() {
  return (
    <main className="business-contexts-page">
      {/* Hero */}
      <section className="contexts-hero">
        <div className="contexts-hero-overlay">
          <div className="contexts-hero-content">
            <span className="contexts-eyebrow">CONTEXTS</span>
            <h1>Business Contexts</h1>
            <p>
              Different journeys. Same destination — sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Context Cards */}
      <section className="contexts-content">
        <div className="contexts-grid">
          {contexts.map((context, index) => (
            <article className="context-card" key={context.title}>
              <div className="context-icon" aria-hidden="true">
                {context.icon}
              </div>

              <h2>{context.title}</h2>
              <p>{context.description}</p>
            </article>
          ))}
        </div>

        {/* Highlight Message */}
        <div className="contexts-message">
          <div className="contexts-message-icon">✧</div>
          <p>
           Verge shifts bring deep expertise across key business contexts to help you navigate 
           complexity and support in building your nextorganization operating model . From startegy to exection , 
           we bespoke as per your need  and stay with you through out transformation Journey 
          </p>
        </div>
      </section>
    </main>
  );
}

export default BusinessContexts;