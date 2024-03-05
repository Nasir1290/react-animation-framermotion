import { motion } from 'framer-motion'
import React from 'react'

export default function TransitionType() {
  return (
    <motion.div
    initial={{opacity:0, x:"-100vh"}}
    animate={{opacity:1, x:0}}
    >
      <h1>Learning Animation</h1>
      <p>We love animation. That's why we Learning it. Framer Motion is Great !!</p>

    </motion.div>
  )
}
