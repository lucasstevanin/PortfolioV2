import React from "react";
import Menu from "./Menu";

export default function QuemSou() {
  return (
    <div className="relative h-full lg:h-screen">
      <div className="lg:mx-[10%] flex flex-col items-center justify-center h-screen">
        <div className="absolute flex items-center justify-center opacity-[0.35] -z-10">
          <h1 className="text-[22vw] font-kizard font-bold text-[#000000] tracking-wider">
            Sobre
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="pb-[3vh] mt-[10vh] text-white textoAbout font-kizard">
            Um pouco sobre <span className="text-[#803cff]">mim</span>
          </h1>
          <p className="textoDescritivo font-Roboto font-medium uppercase tracking-wider text-[#767676] lg:w-[60%] w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            praesentium doloremque asperiores, alias ipsum natus quibusdam ea
            minima maiores similique magnam Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Hic praesentium doloremque asperiores,
            alias ipsum natus quibusdam ea minima maiores similique magnam
          </p>

          <button className="bg-[#803cff] text-white textoBotao mt-[3vh] lg:mt-[6vh] font-Aquatico py-3 px-10">
            Baixar CV
          </button>
        </div>
      </div>
    </div>
  );
}