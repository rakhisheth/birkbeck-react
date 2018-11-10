import React from "react";
import NavLinks from "./nav-links";
import NavBurger from "./nav-burger";

const Navigation = () => {
  return (
    <nav className="navbar">
      <img
        src="http://wdux1819.bbkweb.org/img/bbk-logo-burgundy.png"
        alt="birkbeck-logo"
      />
      <p className="nav-subhead">Web Development and User Experience</p>
	  <NavBurger />
      <NavLinks />
    </nav>

	<script type="text/javascript">
      (function() {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('#'+burger.dataset.target);
        burger.addEventListener('click', function(){
          burger.classList.toggle('is-active');
          nav.classList.toggle('is-active');
        });
      })();
    </script>
  );
};

export default Navigation;
