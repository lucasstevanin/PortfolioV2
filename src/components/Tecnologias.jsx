import React from "react";
import EsferaTec from "./EsferaTec";

export default function Tecnologias() {
  return (
    <div id="tecnologias" className="relative h-full lg:h-screen">
      <div className="flex flex-col lg:mx-[10%] items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-[5vh] text-white font-kizard textoTec">
            <span className="text-[#803cff]">Tecnologias</span> que uso / possuo
            <br />
            conhecimento:
          </h1>
          <div className="efeitoVidro max-w-[95%] lg:max-w-full">
            <EsferaTec />
          </div>
        </div>
      </div>
    </div>
  );
}
