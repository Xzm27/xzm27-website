import React from "react";
import "./Education.css";
import study from "./studying.png";

function Education() {
  return (
    <div className="education">
      <h2>Education &amp; Experience</h2>
      <div className="education__in">
          <div className="ed">
            <h4>10th Standard(ICSE)</h4>
            <p>
              Passed 10th from <strong>The Scholar</strong>
              <br />
              Obtanined 92% Score in science.
              <br />
              <span>Year: </span>2019
            </p>
            <h4>12th Standard(CBSE)</h4>
            <p>
              Pursuing 12th Standard from <strong>APS Bengdubi</strong>
              <br />
              <span>Year: </span>2021
            </p>
            <h4>Coding experience</h4>
            <p>
              I have been coding for 2 years and have worked on multiple solo
              projects.
              <br /> Projects includes python, java and web apps
            </p>
          </div>
        
        <img src={study} alt=" " />
      </div>
    </div>
  );
}

export default Education;
