import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";

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
      duration: 0.3,
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
      className="fixed z-[999] h-10 p-5 font-Aquatico "
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="flex rounded-lg p-2 h-16  uppercase items-center efeitoVidroMenu text-white font-bold text-[1.2rem]"
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
        className="flex flex-col items-start justify-center gap-3 p-4 font-bold text-white uppercase rounded-sm cursor-pointer efeitoVidroMenu"
        variants={listVariants}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <CustomLink to="home">
          <motion.li className="hover:text-[#9900ff]" variants={itemVariants}>
            &lt;Home/&gt;
          </motion.li>
        </CustomLink>
        <CustomLink to="sobreMim">
          <motion.li className="hover:text-[#51ff00]" variants={itemVariants}>
            &lt;Sobre Mim/&gt;
          </motion.li>
        </CustomLink>
        <CustomLink to="tecnologias">
          <motion.li className="hover:text-[#002fff]" variants={itemVariants}>
            &lt;Tecnologias/&gt;
          </motion.li>
        </CustomLink>
        <CustomLink to="projetos">
          <motion.li className="hover:text-[#F72585]" variants={itemVariants}>
            &lt;Projetos/&gt;
          </motion.li>
        </CustomLink>
        <CustomLink to="contato">
          <motion.li className="hover:text-[#ffe600]" variants={itemVariants}>
            &lt;Contato/&gt;
          </motion.li>
        </CustomLink>
      </motion.ul>
    </motion.nav>
  );
}
