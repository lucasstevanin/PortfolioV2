import React from "react";
import { motion } from "framer-motion";

export default function Apresentacao() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative h-screen bg-[url('../assets/background-min.webp')] bg-cover
      grayscale-[40%]"
    >
      <div className="flex flex-wrap lg:mx-[10%] max-lg:px-[5%]">
        <div className="flex h-screen lg:w-1/2">
          <div className="flex flex-col justify-center text-white lg:items-end">
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="font-kizard textoGrande leading-[0.8]"
            >
              Lucas
              <br />
              Stevanin
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="p-2 w-[75%] md:w-auto bg-white textoSubtitulo font-Aquatico text-[#111111]"
            >
              Desenvolvedor Front-End
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="absolute w-[95%] h-screen lg:right-0 -z-10 lg:w-1/2"
        >
          <div className="h-full bg-cover bg-no-repeat lg:opacity-80 bg-[url('../assets/Perfil-min.webp')]"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
