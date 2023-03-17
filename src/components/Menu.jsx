import React, { useState } from "react";
import { motion } from "framer-motion";

const menuVariants = {
  open: { rotate: 180, transition: { duration: 0.2 } },
  closed: { rotate: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const listVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      animate={isOpen ? "open" : "closed"}
      className="fixed z-[999] h-10 m-5 font-Aquatico"
    >
      <motion.button
        className="flex rounded-lg p-2 h-16  uppercase items-center bg-[#803CFF] text-white font-bold text-[1.2rem]"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        &lt; /&gt;
        <motion.div
          className="pl-2"
          variants={menuVariants}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="white">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="flex uppercase rounded-sm bg-[#803CFF] p-4 flex-col font-bold gap-3 text-[white] items-start justify-center"
        variants={listVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <a href="">
          <motion.li className="" variants={itemVariants}>
            &lt;Home/&gt;
          </motion.li>
        </a>
        <a href="">
          <motion.li className="" variants={itemVariants}>
            &lt;Sobre Mim/&gt;
          </motion.li>
        </a>
        <a href="">
          <motion.li className="" variants={itemVariants}>
            &lt;Tecnologias/&gt;
          </motion.li>
        </a>
        <a href="">
          <motion.li className="" variants={itemVariants}>
            &lt;Projetos/&gt;
          </motion.li>
        </a>
        <a href="">
          <motion.li className="" variants={itemVariants}>
            &lt;Contato/&gt;
          </motion.li>
        </a>
      </motion.ul>
    </motion.nav>
  );
}
