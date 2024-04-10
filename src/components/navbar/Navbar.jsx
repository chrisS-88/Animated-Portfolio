import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Portfolio
        </motion.span>
        <motion.div
          className="socials"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
        >
          <a href="#" target="_blank">
            <img src="/github-logo.png" alt="social icon" width="22px" />
          </a>
          <a href="#" target="_blank">
            <img src="/in-logo.png" alt="social icon" width="22px" />
          </a>
          <a href="#" target="_blank">
            <img src="/mail-logo.png" alt="social icon" width="22px" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
