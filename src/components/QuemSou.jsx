import React from "react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

export default function QuemSou() {
  function DownloadCV() {
    fetch("../assets/Curriculo_Lucas_Stevanin.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Curriculo_Lucas_Stevanin.pdf");
      });
  }

  return (
    <div id="sobreMim" className="relative lg:h-screen">
      <div className="lg:mx-[10%] flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="pb-[3vh] pt-[10vh] text-white textoAbout font-kizard"
          >
            Um pouco sobre <span className="text-[#803cff]">mim</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="textoDescritivo mb-2 font-Roboto font-medium uppercase tracking-wider text-[#767676] lg:w-[70%] w-[90%]"
          >
            Oi, sou o Lucas, um curioso, que transformou um antigo hobby em
            profissão.
            <br />
            Desde pequeno sempre fui muito curioso, amante de jogos, filmes e
            muita música. Entrei na programação por curiosidade e me apáixonei.
            <br />
            Minha meta com a programação é desenvolver aplicações que mudem o
            mundo, nem que seja o mínimo. Tanto o mundo dos dev&rsquo;s, quanto
            das pessoas em geral.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            onClick={DownloadCV}
            className="bg-[#803cff] text-white textoBotao mt-[3vh] lg:mt-[6vh] font-Aquatico py-3 px-10"
          >
            Baixar CV
          </motion.button>
        </div>
      </div>
    </div>
  );
}
