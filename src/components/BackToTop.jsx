import React from "react";
import { motion } from "framer-motion";

export default function BackToTop() {
  return (
    <a href="#">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed lg:right-16 lg:bottom-16 bottom-12 right-8 w-[5rem] h-[8vh] rounded-lg efeitoVidroMenu flex justify-center items-center"
      >
        <svg
          className="rotate-180"
          width="20vw"
          height="2.5vh"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path d="M0 7 L 20 7 L 10 16" />
        </svg>
      </motion.button>
    </a>
  );
}
