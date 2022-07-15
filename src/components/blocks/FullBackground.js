import React from 'react'
import { motion } from "framer-motion"

const FullBackground = ({ children }) => {

    const background = {
        initial: { 
          opacity: 0,
          scale:1
        },
        animate: {
          opacity: 1,
          scale:1.1,
          transition: {
            duration:1.25,
          }
        },
        exit: {
          opacity: 0,
          scale:1,
          transition: {
            duration:1.25,
          }
        }
      }
    
      const content = {
        initial: { 
          opacity: 0,
          x:100
        },
        animate: {
          opacity: 1,
          x:0,
          transition: {
            delay:.5,
            duration:.75,
          }
        },
        exit: {
          opacity: 0,
          x: -100,
          transition: {
            duration:1,
          }
        }
      }

  return (
    <section className='overflow-hidden'>
      <motion.div
          className='background'
          variants={background}
          initial="initial"
          animate="animate"
          exit="exit"
        >
        </motion.div>
        <motion.div
            className='content'
            variants={content}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            { children }
        </motion.div>
      </section>
  )
}

export default FullBackground