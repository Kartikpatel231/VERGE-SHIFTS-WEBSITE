import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Page from "./Page";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import BusinessContexts from "./BusinessContexts";
import { pages } from "./data";

function App() {
  return (
    <div className="site-shell" id="top">

      <Header />

      <main>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* PAGE 01 */}
          <Route
            path="/strategy-transformation"
            element={<Page page={pages.strategy} />}
          />

          {/* PAGE 02 */}
          <Route
            path="/people-performance"
            element={<Page page={pages.people} />}
          />

          {/* PAGE 03 */}
          <Route
            path="/change-sustainability"
            element={<Page page={pages.change} />}
          />

          {/* PAGE 04 */}
          <Route
            path="/today-tomorrow"
            element={<Page page={pages.future} />}
          />
          <Route
  path="/business-contexts"
  element={<BusinessContexts />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;