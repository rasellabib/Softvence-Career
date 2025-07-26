import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <span className="green">RIDGE</span>
          <span className="gray">STREET</span>
        </div>
        <nav className="nav-links">
          <a href="#">Fix and Flip</a>
          <a href="#">Rental Loans</a>
          <a href="#">Where We Lend</a>
          <a href="#">About Us</a>
          <a href="#">Resources</a>
        </nav>
        <button className="cta-button">GET APPROVED ONLINE</button>

        <div className="hamburger" onClick={() => setDrawerOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setDrawerOpen(false)}>
          &times;
        </button>
        <a href="#">Fix and Flip</a>
        <a href="#">Rental Loans</a>
        <a href="#">Where We Lend</a>
        <a href="#">About Us</a>
        <a href="#">Resources</a>
        <button className="cta-button drawer-button">GET APPROVED ONLINE</button>
      </div>

      {/* Backdrop */}
      {drawerOpen && <div className="backdrop" onClick={() => setDrawerOpen(false)}></div>}
    </header>
  );
};

export default Navbar;
