import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/assignments">Assignments</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/reading-list">Reading List</NavLink>
      <NavLink to="/sessions">Sessions</NavLink>
      <NavLink to="/staff">Staff</NavLink>
      <NavLink to="/students">Students</NavLink>
    </div>
  );
};

export default Navigation;
