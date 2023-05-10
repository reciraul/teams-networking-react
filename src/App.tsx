import React from "react";
import logo from "./clar.png";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="Selfie" />
        </div>
        <div>
          <h1>Raul Reci</h1>
          <h2 id="job-title">
            Junior Frontend Developer
            <span>@TEC:Agency</span>
          </h2>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}

function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
    </ul>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
      <div id="main">
        <div className="page" id="home">
          Home content
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="projects">
          Projects content
        </div>
        <div className="page" id="languages">
          Languages content
        </div>
      </div>
    </section>
  );
}

function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <form action="" method="get">
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="email" id="userEmail" placeholder="example@me.com" required />

          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section>M2</section>
    </div>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="">Linkedin</a>
    </footer>
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

export default App;
