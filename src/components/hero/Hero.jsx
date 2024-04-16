import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollArrow: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-250%",
    transition: {
      duration: 24,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHRIS SMART</motion.h2>
          <motion.h1 variants={textVariants}>Front-End Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See my work</motion.button>
            <motion.button variants={textVariants} className="contact-btn">
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollArrow"
            src="/arrow-down.png"
            alt="arrow down"
            width="26px"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidingTextVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
