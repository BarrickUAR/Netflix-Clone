import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="headerImage">
        <img src="/public/assets/images/Logo.svg" alt="" />
      </div>

      <div className="headerButtons"></div>
    </header>
  );
}

function heroSection() {
  return <section></section>;
}

function valueProps() {
  return (
    <section>
      <h2>Value Props</h2>
    </section>
  );
}

function faqs() {
  return (
    <section>
      <h2>FAQs</h2>
    </section>
  );
}

function footer() {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
}

export default App;
