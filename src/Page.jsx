import React from "react";

function Page({ page }) {
  return (
    <main className="page-shell">

      <section
        className="hero"
        style={{
          backgroundImage: `url("${page.image}")`,
        }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="page-number">
            {page.number}
          </span>

          <h1>{page.title}</h1>

          <p>{page.intro}</p>
        </div>
      </section>

      <section className="intro-grid">

        <article>
          <h2>The Challenge</h2>

          <p>
            {page.challenge}
          </p>
        </article>

        <article>
          <h2>Our Approach</h2>

          <p>
            {page.approach}
          </p>
        </article>

      </section>

      <section className="focus-grid">

        <div className="focus-copy">

          <h2>Key Focus Areas</h2>

          <ul>
            {page.focus.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>

        <div className="secondary-image-wrap">
          <img
            src={page.secondaryImage}
            alt=""
          />
        </div>

      </section>

      <section className="outcome">

        <div className="outcome-icon">
          {page.icon}
        </div>

        <div>
          <h2>The Outcome</h2>

          <p>
            {page.outcome}
          </p>
        </div>

      </section>

      <footer>

        <div className="brand-mark">
          <span className="brand-symbol">
            V
          </span>

          <span>
            VERGE SHIFTS
          </span>
        </div>

        <div className="tagline">
          FROM BOARDROOM TO DIGITAL
        </div>

      </footer>

    </main>
  );
}

export default Page;