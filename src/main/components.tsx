import { SideMenu } from "../menu/SideMenu";

export function ContentWrapper() {
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
