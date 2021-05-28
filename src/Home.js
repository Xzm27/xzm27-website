import React from "react";
import "./Home.css";
import bg from "./bg.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home" >
      <div className="home__content" data-aos="fade-in">
        <img src={bg} alt="" />
        <div className="myself">
          <h1>I'M SAYAN KUMAR SAH.</h1>
          <h2>WEB DEVELOPER</h2>
          <p>
            I'm a web developer, UI/UX designer
            <br />I mostly focus on personal portfolios, business websites and
            user interfaces. I am passionate about building websites beyond
            imaginable standards.
          </p>
          <div>
            <Link to="/about">
              <button className="explorebtn" >
                Explore more <ArrowForwardIosIcon className="arrow"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
