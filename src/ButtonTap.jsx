import { motion } from 'framer-motion'
import React from 'react'

export default function ButtonTap() {
  return (
    <div className=' flex items-center justify-center h-screen'>
      <motion.button className=' p-2 text-md text-white bg-purple-500 border rounded-md'
      animate={{}}
      whileTap={{scale:1}}

      whileHover={{scale:1.2,transition:{yoyo:Infinity}}}
      >
        Tap Me!!
      </motion.button>
    </div>
  )
}
