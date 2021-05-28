import React from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Collapse from "./Collapse.js";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';



function Navbar() {
  return (
    <div className="fixed">
      <div className="navbar">
        <div className="navbar-collapse">
          <button className="btn2">
            <Collapse />
          </button>
        </div>

        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="wrap">
              <div
                className={`btn__full ${
                  window.location.pathname === "/" ? "active" : null
                }`}
              >
                <h4>Home</h4>
                <button className="btn">
                  <HomeIcon />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="wrap">
              <div
                className={`btn__full ${
                  window.location.pathname === "/about" ? "active" : null
                }`}
              >
                <h4>About</h4>
                <button className="btn">
                  <PersonIcon />
                </button>
              </div>
            </div>
          </Link>

          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <div className="wrap">
              <div
                className={`btn__full ${
                  window.location.pathname === "/gallery" ? "active" : null
                }`}
              >
                <h4>Gallery</h4>
                <button className="btn">
                  <PhotoLibraryIcon />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="wrap">
              <div
                className={`btn__full ${
                  window.location.pathname === "/contact" ? "active" : null
                }`}
              >
                <h4>Contact</h4>
                <button className="btn">
                  <ContactsIcon />
                </button>
              </div>
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
