import React from "react";
import { motion } from "framer-motion";

export default function KeyFrame() {
  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <motion.div
        className=" bg-red-500 w-32 h-32 border-2 border-slate-500 rounded-full"
        
        animate={{
            borderRadius:["20%",  "50%", "100%","50%","20%"],
            scale:[1,2,3,2,1],
            rotate:[120,160,180,160,120,90]
        }}
        transition={{duration:2}}
      ></motion.div>
    </div>
  );
}
