import React from "react";
import logo from "./logo.svg";
import "./App.css";

function AppHeader() {
  return (
    <div>
      <button id="removeSelected">❌ Remove Selected</button>
      <input type="search" name="search" id="search" />
    </div>
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
      <AppHeader />;
      <MainMenu />;
      <SideMenu />;
      <AppFooter />;
    </div>
  );
}

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
