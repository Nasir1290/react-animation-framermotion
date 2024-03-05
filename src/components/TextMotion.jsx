import { motion } from 'framer-motion';
import React from 'react'

export default function TextMotion() {
    const message = "We are Enjoying Reactive Accelerator and LWS are awesome!!";
    const msgArray = message.split(" ");
    
  return (
    <div className=' text-2xl text-center m-4'>
      {msgArray.map((word,index) => (
        <motion.span
         key={index}
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1,delay:index/10}}
         >{word+" "}</motion.span>
        ))}
    </div>
  )
}
