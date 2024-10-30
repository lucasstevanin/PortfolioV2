import React from "react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";

export default function BotaoCV() {
  const handleDownloadClick = () => {
    const fileUrl = "/CV_LucasDeOliveiraStevanin.pdf"; // Substitua pelo URL ou caminho do seu currículo
    const fileName = "CV_LucasDeOliveiraStevanin.pdf"; // Substitua pelo nome do arquivo do seu currículo

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, fileName))
      .catch((error) => console.error(error));
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      onClick={handleDownloadClick}
      className="bg-[#803cff] text-white textoBotao mt-[3vh] lg:mt-[6vh] font-Aquatico py-3 px-10"
    >
      Baixar CV
    </motion.button>
  );
}
