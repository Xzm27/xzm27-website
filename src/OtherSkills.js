import React from "react";
import "./OtherSkills.css";
import Gtr from "./guitar.png";
import mn from "./Music-note.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";



function OtherSkills() {
  return (
    <div className="otherSkills">
      <h2>Other Skills</h2>
      <div className="otherSkills__in">
        <img src={Gtr} alt=" " />
        <div className="otherSkills__hobby">
          <h4>I'm a guitarist</h4>
          <p>
            The sound of strings has never failed to sooth my ears and heart.
            <br />
            I play guitar as a hobby. I play acoustic guitar and have developed
            many teachniques and skills. <br />I mostly play rhythm guitar but
            sometimes I play lead too.
            <br />
            Let's jam together sometime ; )
          </p>
        </div>
      </div>
      <div className="otherSkills__in">
        <div className="otherSkills__hobby">
          <h4>I'm a also a photographer</h4>
          <p>
            I love to take photos of random things i see around.
            <br />
            I try to create some sort of story out of a random objects and depict that everyone and everything can have a story.<br />
            Photography helps me understand life in a better way. Through the lens I contemplate the inner meanings of life.
            <br />
          </p>
          <Link to="/gallery">
              <button className="explorebtn" >
                Gallery <ArrowForwardIosIcon className="arrow"/>
              </button>
            </Link>
        </div>
        <img src={mn} alt="" className="camera"/>
      </div>
    </div>
  );
}

export default OtherSkills;
