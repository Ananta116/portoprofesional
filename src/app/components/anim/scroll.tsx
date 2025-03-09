"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface IAnimate {
    children:ReactNode
}

export default function Animasi({children}:IAnimate) {

  return (
    <motion.div
      initial={{y:30, scale: 1, opacity: 0 }}
      whileInView={{y:0, scale: 1, opacity: 1 }}
      transition={{
        duration:1,
        delay:0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        {children}
    </motion.div>
  );
}