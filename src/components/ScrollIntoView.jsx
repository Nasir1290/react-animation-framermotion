import { motion } from "framer-motion";
import React from "react";

export default function ScrollIntoView() {
  const greetings = [
    "Hello",
    "Hi",
    "Hey",
    "Hola",
    "salam",
    "morning",
    "evening",
  ];
  return (
    <div className=" flex flex-col items-center justify-center ">
      {greetings.map((greeting, index) => (
        <ScrollItem key={index} text={greeting} />
      ))}
    </div>
  );
}

const ScrollItem = ({ text }) => {
  return (
    <motion.div
      className=" text-lg bg-sky-500 w-36 h-36 rounded-md mb-4 text-center"
      initial={{ opacity: 0, x:-50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: .6,
        },
      }}
      viewport={{ once: false }}
    >
      {text}
    </motion.div>
  );
};
