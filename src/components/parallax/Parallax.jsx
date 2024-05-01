import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, rgb(23, 107, 135), rgb(5, 59, 80))"
            : "linear-gradient(180deg, rgb(5, 59, 80), rgb(100, 204, 197))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "about" ? "About Me" : "Portfolio"}
      </motion.h1>
      <motion.div className="bg"></motion.div>
    </div>
  );
}

export default Parallax;
