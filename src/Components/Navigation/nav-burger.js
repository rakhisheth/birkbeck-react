import React from "react";
import NavLinks from "./nav-links";
import { NavBurger } from "react-router-dom";

const NavBurger = () => {
	return (
		<div>
		  <span class="navbar-burger burger" data-target="navMenu">
			<span></span>
			<span></span>
			<span></span>
		  </span>
		</div>
	);
};

export default NavBurger;
