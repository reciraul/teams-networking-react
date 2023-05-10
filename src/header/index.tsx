import { MainMenu } from "../menu/MainMenu";
import logo from "./clar.png";

export default function AppHeader() {
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
