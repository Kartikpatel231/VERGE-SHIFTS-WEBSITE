import React from "react";
import "./BusinessContexts.css";
import {
  TrendingUp,
  Handshake,
  Globe,
  Layers,
  ArrowRight,
  GitCompare,
  Network,
  Cpu,
  BarChart3,
} from "lucide-react";

// Updated contexts array with title, description, and Lucide icon components
const contexts = [
  {
    icon: BarChart3,
    title: "Growth",
    description:
      "Scaling the organisation, strengthening market presence and capability.",
  },
  {
    icon: Handshake,
    title: "M&A",
    description:
      "Integrating people, process and culture for value creation.",
  },
  {
    icon: Globe,
    title: "Expansion",
    description:
      "Building for new markets, new geographies and new opportunities.",
  },
  {
    icon: GitCompare,
    title: "Integration",
    description:
      "Aligning teams, systems and structures for stronger performance.",
  },
  {
    icon:  Network,
    title: "Restructuring",
    description:
      "Re-shaping the organisation and realigning for the next phase.",
  },
  {
    icon: Layers,
    title: "New Operating Model",
    description:
      "Designing flexible, efficient and future-ready operating models.",
  },
  {
    icon: Cpu,
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
              Different journeys. Same destination — Sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Context Cards */}
      <section className="contexts-content">
        <div className="contexts-grid">
          {contexts.map((context) => {
            const IconComponent = context.icon;

            return (
              <article className="context-card" key={context.title}>
                <div className="context-icon" aria-hidden="true">
                  <IconComponent size={28} className="lucide-icon" />
                </div>

                <h2>{context.title}</h2>
                <p>{context.description}</p>
              </article>
            );
          })}
        </div>

        {/* Highlight Message */}
        <div className="contexts-message">
          <div className="contexts-message-icon">✧</div>
          <p>
            Verge shifts bring deep expertise across key business contexts to
            help you navigate complexity and support in building your next
            organization operating model. From strategy to execution, we
            bespoke as per organisation need and stay with teams throughout
            the transformation journey.
          </p>
        </div>
      </section>
    </main>
  );
}

export default BusinessContexts;