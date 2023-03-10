// import libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import components
import NavItem from "../NavItem";

// import image and style
import Avatar from "../../assets/images/avatar.png";
import "./style.css";

function Navbar() {
  // use state to control the navbar toggle
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm portfolio-navbar">
      <div class="container-fluid">
        <Link className="navbar-brand font-weight-bolder" to="/">
          <img
            src={Avatar}
            alt="Logo"
            width="36"
            height="36"
            className="vertical-align-middle"
          />
          <span className="">Mingzhao Zhou</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          {/* list of navigation links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavItem path="/" text="Home" />
            </li>
            <li className="nav-item">
              <NavItem path="/projects" text="Projects" />
            </li>
            <li className="nav-item">
              <NavItem path="/contact" text="Contact" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
