import React from "react";

export default function Apresentacao() {
  return (
    <div
      id="home"
      className="relative h-screen bg-[url('../assets/background.webp')] bg-cover
      grayscale-[40%]"
    >
      <div className="flex flex-wrap lg:mx-[10%] max-lg:px-[5%]">
        <div className="flex h-screen lg:w-1/2">
          <div className="flex flex-col justify-center text-white lg:items-end">
            <p className="font-kizard textoGrande leading-[0.8]">
              Lucas
              <br />
              Stevanin
            </p>
            <p className="p-2 w-[75%] md:w-auto bg-white textoSubtitulo font-Aquatico text-[#111111]">
              Desenvolvedor Front-End
            </p>
          </div>
        </div>
        <div className="absolute w-[95%] h-screen lg:right-0 -z-10 lg:w-1/2">
          <div className="h-full bg-cover bg-no-repeat lg:opacity-80 bg-[url('../assets/Perfil.webp')]"></div>
        </div>
      </div>
    </div>
  );
}
