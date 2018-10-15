import React from "react";
import NavLinks from "./nav-links";
import Title from "../Title/title";

const Navigation = () => {
  return (
    <nav className="navbar">
      <img
        src="http://wdux1819.bbkweb.org/img/bbk-logo-burgundy.png"
        alt="birkbeck-logo"
      />
      <Title className="sub-title" title="Web Development & User Experience" />
      {/* <p className="sub-title">Web Development & User Experience </p> */}
      <NavLinks />
    </nav>
  );
};

export default Navigation;
