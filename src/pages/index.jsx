import "../styles/Home.module.css";
import Apresentacao from "@/components/Apresentacao";
import QuemSou from "@/components/QuemSou";
import Tecnologias from "@/components/Tecnologias";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Menu from "@/components/Menu";
import RedesSociais from "@/components/RedesSociais";
import Footer from "@/components/Footer";
import { useEffect, React } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Lucas Stevanin";
    document.favicon = "./assets/favicon.ico";
  }, []);

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
