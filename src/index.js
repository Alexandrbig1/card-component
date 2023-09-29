import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="image.jpg" alt="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Alex S jr.</h1>
      <p>
        Hi, I'm Alex S jr., a Front-end Web Developer with a passion for
        creating elegant and responsive web applications!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="WebDesign" emoji="💪🏻" bgColor="#f3d9fa" />
      <Skill skill="HTML+CSS" emoji="💪🏻" bgColor="#339af0" />
      <Skill skill="JavaScript" emoji="💪🏻" bgColor="#be4bdb" />
      <Skill skill="Git & GitHub" emoji="👍🏻" bgColor="#f03e3e" />
      <Skill skill="React" emoji="💪🏻" bgColor="#f59f00" />
      <Skill skill="Bootstrap" emoji="👍🏻" bgColor="#63e6be" />
      <Skill skill="SASS" emoji="👍🏻" bgColor="#faa2c1" />
      <Skill skill="TailWind" emoji="👍🏻" bgColor="#6741d9" />
      <Skill skill="Next.js" emoji="👍🏻" bgColor="#f76707" />
      <Skill skill="Node.js" emoji="👍🏻" bgColor="#099268" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
