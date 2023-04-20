import "../styles/Home.module.css";
import React from "react";
import Apresentacao from "@/components/Apresentacao";
import QuemSou from "@/components/QuemSou";
import Tecnologias from "@/components/Tecnologias";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Menu from "@/components/Menu";
import RedesSociais from "@/components/RedesSociais";
import Footer from "@/components/Footer";
import { saveCache, setCache, loadCache } from "@/utils/cache";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Armazena o estado atual da página em cache quando o usuário sai da página
    window.addEventListener("beforeunload", saveCache);
    return () => {
      window.removeEventListener("beforeunload", saveCache);
    };
  }, []);

  // Usa o cache para evitar a renderização desnecessária da página
  const cachedData = loadCache();
  if (cachedData !== undefined) {
    setCache("data", cachedData);
  }

  return (
    <>
      <Menu />
      <RedesSociais />
      <Apresentacao />
      <QuemSou />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}
