import React from "react";
import EsferaTec from "./EsferaTec";
import { motion } from "framer-motion";

export default function Tecnologias() {
  return (
    <div id="tecnologias" className="relative h-full lg:h-screen">
      <div className="flex flex-col lg:mx-[10%] items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-[5vh] text-white font-kizard textoTec"
          >
            <span className="text-[#803cff]">Tecnologias</span> que uso / possuo
            <br />
            conhecimento:
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="efeitoVidro max-w-[95%] lg:max-w-full"
          >
            <EsferaTec />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
