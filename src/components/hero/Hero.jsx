import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>CHRIS SMART</h2>
          <h1>Front-End Web Developer</h1>
          <div className="buttons">
            <button>See my work</button>
            <button className="contact-btn">Contact me</button>
          </div>
          <img src="/arrow-down.png" alt="arrow down" width="26px" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
