import React from "react";
import './Navbar.css';
import SvgIcon from "../../assets/svgIcons";

const Navbar = (props) => {
  return (
    <header className="navbar">
      <div className="navigation">
        <div className="nav-logo" ><SvgIcon name="logo" /></div>
        <div className="nav" onClick={() => props.setId("emotions")}>Emotions</div>
        <div className="nav" onClick={() => props.setId("manifesto")}>Manifesto</div>
        <div className="nav" onClick={() => props.setId("test")}>Self-awareness test</div>
        <div className="nav" onClick={() => props.setId("contact")}>Work with us</div>
      </div>
      <button className="btn-nav">Download app</button>
    </header>
  );
};

export default Navbar;