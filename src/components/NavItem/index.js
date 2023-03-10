import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

function NavItem(props) {
  return (
    <NavLink
      to={props.path}
      end
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      {props.text}
    </NavLink>
  );
}

export default NavItem;
