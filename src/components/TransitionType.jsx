import { motion } from "framer-motion";
import React from "react";

export default function TransitionType() {
  return (
    // Framer Motion Transition type
    // 1)default transition type is "tweens";
    <div>
      <motion.div
        className=" m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We love animation. That's why we Learning it. Framer Motion is Great
          !!
        </p>
      </motion.div>
      {/* Framer Motion Transition type
        2)Animation type is  "spring with bounce"; */}
      <motion.div
        className=" m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring", bounce: 0.5 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We love animation. That's why we Learning it. Framer Motion is Great
          !!
        </p>
      </motion.div>

      {/* Framer Motion Transition type
        2)Animation type is  "spring without bounce"; */}
      <motion.div
        className=" m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1>Learning Animation</h1>
        <p>
          We love animation. That's why we Learning it. Framer Motion is Great
          !!
        </p>
      </motion.div>
    </div>
  );
}
