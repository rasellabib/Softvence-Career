import React from "react";
import "./NavSection.css"; 
const NavSection = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <h1 className="logo-text">
              Ridge <span>Street</span>
            </h1>
          </div>
          <div className="nav-ul">
            <ul >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
