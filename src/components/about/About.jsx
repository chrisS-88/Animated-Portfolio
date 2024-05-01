import React, { useRef } from "react";
import "./about.scss";
import { motion } from "framer-motion";

const bioVariants = {
  initial: {
    x: -800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const techStackVariants = {
  initial: {
    x: 800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const listsVariants = {
  initial: {
    x: 800,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      staggerChildren: 1.5,
    },
  },
};

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Version Control (Git) ",
    "GitHub",
    "Node.js",
    "Responsive Design",
  ];

  const frameworks = ["Bootstrap", "jQuery", "React", "Framer Motion"];

  return (
    <motion.div
      className="aboutPage"
      variants={bioVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className="titleContainer">
        <h1>A little about me</h1>

        <div className="cv">
          <p>
            Download my CV
            <button>
              <a
                href="https://drive.google.com/file/d/1-MujGTbPkaQKRk6AE26w8AfuXYAv8pk4/view?usp=sharing"
                target="_blank"
                download="Chris Smart.pdf"
              >
                <img src="/download-icon.png" alt="" />
              </a>
            </button>
          </p>
        </div>
      </div>

      <div className="mainContent">
        <motion.div className="bioContainer" variants={bioVariants}>
          <p>
            Welcome to my corner of the web! I'm Chris, a passionate web developer
            dedicated to crafting engaging and user-friendly digital experiences. With a
            blend of creativity and technical expertise, I specialize in front-end
            development, transforming ideas into visually stunning and responsive
            websites.
            <br />
            <br />
            Whether you're an individual looking to establish your online presence or a
            business aiming to enhance your digital footprint, I'm here to collaborate and
            bring your vision to life.
          </p>
          <motion.div className="socials" variants={bioVariants}>
            <a href="https://github.com/chrisS-88" target="_blank">
              <img src="/github-logo.png" alt="github logo" />
            </a>

            <a href="https://www.linkedin.com/in/chris-smart88/" target="_blank">
              <img src="/in-logo.png" alt="github logo" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="techStackContainer" variants={techStackVariants}>
          <h3>My Tools</h3>
          <motion.div className="techLists" variants={techStackVariants}>
            <div className="skills">
              <h6>Core</h6>
              {skills.map((item) => (
                <motion.ul>
                  <motion.li key={item}>{item} </motion.li>
                </motion.ul>
              ))}
            </div>
            <div className="frameworks">
              <h6>Frameworks</h6>
              {frameworks.map((item) => (
                <motion.ul>
                  <motion.li key={item}>{item}</motion.li>
                </motion.ul>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
