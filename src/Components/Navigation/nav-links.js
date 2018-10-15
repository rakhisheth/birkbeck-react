import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-link">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/reading-list">Reading List</NavLink>
      </li>
      <li>
        <NavLink to="/sessions">Sessions</NavLink>
      </li>
      <li>
        <NavLink to="/staff">Staff</NavLink>
      </li>
      <li>
        <NavLink to="/students">Students</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
