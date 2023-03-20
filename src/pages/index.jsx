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

export default function Home() {
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
