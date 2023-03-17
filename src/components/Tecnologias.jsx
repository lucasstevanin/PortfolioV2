import React from "react";
import EsferaTec from "./EsferaTec";

export default function Tecnologias() {
  return (
    <div className="relative h-full lg:h-screen">
      <div className="flex flex-col lg:mx-[10%] items-center justify-center h-screen">
        <div className="absolute flex items-center justify-center opacity-[0.35] -z-10">
          <h1 className="hidden lg:block text-[13.5vw] font-kizard font-bold text-[#000000] tracking-wider">
            Tecnologias
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-[12vh] mb-[3vh] text-white font-kizard textoTec">
            <span className="text-[#803cff]">Tecnologias</span> que uso / possuo
            <br />
            conhecimento:
          </h1>
          <div className="w-[94vw] efeitoVidro">
            <EsferaTec />
          </div>
        </div>
      </div>
    </div>
  );
}
