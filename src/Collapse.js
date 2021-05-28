import React, { useState } from "react";
import "./Collapse.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Collapse() {
  const [sidebar, showSidebar] = useState(false);

  const onClick = () => showSidebar(!sidebar);

  return (
    <div className="collapse">
      <MenuIcon onClick={onClick} className="menuico"/>
      <div className={sidebar ? "sidebar open" : "sidebar"}>
        <div onClick={onClick} >
          <div className="sidebar__items dd">
            <CloseIcon className="closebtn" />
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="sidebar__items">Home</h1>
          </Link>

          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h1 className="sidebar__items">About</h1>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <h1 className="sidebar__items">Gallery</h1>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <h1 className="sidebar__items">Contact</h1>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Collapse;
