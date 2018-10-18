import React from "react";
import NavLinks from "./nav-links";
import SubTitle from "../Title/sub-title";

const Navigation = () => {
  return (
    <nav className="navbar">
      <img
        src="http://wdux1819.bbkweb.org/img/bbk-logo-burgundy.png"
        alt="birkbeck-logo"
      />
      <p className="nav-subhead">Web Development and User Experience</p>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
