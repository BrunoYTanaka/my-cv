import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface MotionBoxProps {
  children: React.ReactNode
  delay?: number
}

function MotionBox({ children, delay = 0.1 }: MotionBoxProps): ReactElement {
  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  const transition = {
    duration: 0.8,
    delay,
    ease: 'easeInOut',
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export { MotionBox }
