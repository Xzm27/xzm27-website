import "./App.css";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Gallery from "./Gallery.js";
import Contact from "./Contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="app" >
        <Switch>
        <Route path="/contact">
            <div className="app__page">
              <Contact />
              <Navbar />
            </div>
          </Route>
          <Route path="/gallery">
            <div className="app__page">
              <Gallery />
              <Navbar />
            </div>
          </Route>
          <Route path="/about">
            <div className="app__page">
              <About />
              <Navbar />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Home />
              <Navbar />
            </div>
          </Route>
        </Switch>
        </div>
    </Router>

    //
  );
}

export default App;
