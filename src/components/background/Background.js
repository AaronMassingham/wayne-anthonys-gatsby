import React from 'react'

import { motion } from "framer-motion"

export default function Background() {

  const container = {
    initial: { 
      opacity: 0,
      scale:.8
    },
    animate: {
      opacity: 1,
      scale:1
    },
    exit: {
      opacity: 0,
      scale:.8
    }
  }

  return (
      <motion.div
        className='background'
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
      </motion.div>

  )
}
