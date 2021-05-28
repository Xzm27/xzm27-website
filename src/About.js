import React from "react";
import "./About.css";
import PersonalInfo from "./PersonalInfo.js";
import Skills from "./Skills.js";
import tem1 from "./—Pngtree—young guy programmer freelancer working_5369036.png";
import OtherSkills from "./OtherSkills.js";
import Education from "./Education.js";


// personal info  projects
// coding skills
// other skills
// hobbies
// education

function about() {
  return (
    <div className="about" data-aos="fade-in">
      <h1 className="about__title">ABOUT ME</h1>
      <div className="about__top" >
        <PersonalInfo />
        <img src={tem1} alt="" />
      </div>
      <div className="about__skills" >
        <h2>Coding Skills</h2>
        <div className="about__skills-row">
          <div className="about__skills-col">
            <Skills language="Python" done="85" />
            <Skills language="Java" done="65" />
            <Skills language="mySQL" done="95" />
          </div>
          <div className="about__skills-col">
            <Skills language="HTML CSS" done="90" /> 
            <Skills language="Javascript" done="70" />
            <Skills language="React.js" done="80" />
          </div>
        </div>
      </div>
      <div className="about__otherskills" >
        <OtherSkills />
      </div>
      <div className="Education" >
        <Education />
      </div>
    </div>
  );
}

export default about;


