import React from "react";
import './Navbar.css';

const Navbar = (props) => {
    return (
      <header className="navbar">
        <div className="navigation">
          <div className="nav" onClick={() => props.setId("about")}>Emotions</div>
          <div className="nav" onClick={() => props.setId("project")}>Manifesto</div>
          <div className="nav" onClick={() => props.setId("contact")}>Self-awareness test</div>
          <div className="nav" onClick={() => props.setId("contact")}>Work with us</div>
        </div>
      <button>Download app</button>
      </header>
    );
  };
  
  export default Navbar;