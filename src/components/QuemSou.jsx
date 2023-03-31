import React from "react";
import { saveAs } from "file-saver";

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
        <div className="absolute flex items-center justify-center opacity-[0.35] -z-10">
          <h1 className="text-[22vw] font-kizard font-bold text-[#000000] tracking-wider">
            Sobre
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="pb-[3vh] pt-[10vh] text-white textoAbout font-kizard">
            Um pouco sobre <span className="text-[#803cff]">mim</span>
          </h1>
          <p className="textoDescritivo mb-2 font-Roboto font-medium uppercase tracking-wider text-[#767676] lg:w-[70%] w-[90%]">
            Oi, sou o Lucas, um curioso, que transformou um antigo hobby em
            profissão.
            <br />
            Desde pequeno sempre fui muito curioso, amante de jogos, filmes e
            muita música. Entrei na programação por curiosidade e me apáixonei.
            <br />
            Minha meta com a programação é desenvolver aplicações que mudem o
            mundo, nem que seja o mínimo. Tanto o mundo dos dev&rsquo;s, quanto
            das pessoas em geral.
          </p>

          <button
            onClick={DownloadCV}
            className="bg-[#803cff] text-white textoBotao mt-[3vh] lg:mt-[6vh] font-Aquatico py-3 px-10"
          >
            Baixar CV
          </button>
        </div>
      </div>
    </div>
  );
}
