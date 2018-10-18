import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-link">
      <li>
        <NavLink className="nav-hyperlink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/assignments">
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/contacts">
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/reading-list">
          Reading List
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/sessions">
          Sessions
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/staff">
          Staff
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-hyperlink" to="/students">
          Students
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
