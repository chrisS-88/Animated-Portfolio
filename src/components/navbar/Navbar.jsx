import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Portfolio.CS</span>
        <div className="socials">
          <a href="#" target="_blank">
            <img src="/github-logo.png" alt="social icon" width="22px" />
          </a>
          <a href="#" target="_blank">
            <img src="/in-logo.png" alt="social icon" width="22px" />
          </a>
          <a href="#" target="_blank">
            <img src="/mail-logo.png" alt="social icon" width="22px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
