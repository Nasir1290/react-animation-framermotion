import { motion } from "framer-motion";
import React from "react";
import { circleVariants } from "./animateVarients";

export default function Variants() {

  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={circleVariants}
        className=" w-32 h-32 border rounded-full bg-sky-500"
      >
        
      </motion.div>
    </div>
  );
}
