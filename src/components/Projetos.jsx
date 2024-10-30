import React from "react";
import CardProjects from "./CardProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import webscraping_img from "../assets/img_web_scraping-min.webp";
import LP01 from "../assets/img_LP01-min.webp";
import LP02 from "../assets/img_LP02-min.webp";
import theme_switcher from "../assets/img_theme_switcher-min.webp";
import card_nft from "../assets/img_card_nft-min.webp";
import to_do from "../assets/img_to_do_list-min.webp";
import img_quiz from "../assets/img_quiz.png"

export default function Projetos() {
  return (
    <div id="projetos" className="relative lg:h-screen h-full lg:mx-[10%]">
      <div className="absolute -translate-x-1/2 lg:opacity-50 lg:-top-5 left-1/2 ">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-[17vw] text-white lg:text-[16vw] mt-5 font-kizard font-bold lg:text-[#000000] tracking-wider"
        >
          Projetos
        </motion.h1>
      </div>

      <div className="flex h-screen">
        <div className="absolute md:block hidden text-center -translate-x-1/2 top-[20%] left-1/2">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-[1.5vw] font-Aquatico uppercase text-[#767676]"
          >
            Clique para ampliar os cards
          </motion.h1>
        </div>
        <Swiper
          breakpoints={{
            720: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <CardProjects
              titulo="Melhores FII's"
              width={500}
              height={280}
              src={webscraping_img}
              github={"https://github.com/lucasstevanin/Analisador_de_FII"}
              page={"https://github.com/lucasstevanin/Analisador_de_FII"}
              showItem={["pandas", "python", "numpy", "gmail"]}
              description={
                "Projeto de web scraping que pega todos os fundos imobiliarios, analisa eles com base em uma estratégia elaborado por mim e me retorna via email os melhores FII's"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Site empresarial"
              src={LP01}
              github={"https://github.com/lucasstevanin/site_empresarial"}
              page={"https://lucasstevanin.github.io/site_empresarial/"}
              showItem={["javascript", "css", "html", "figma"]}
              description={
                "site criado para ser exemplo de uma página empresarial, onde teriam todas as informações da empresa e um formulário para entrar em contato"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Landing Page"
              src={LP02}
              github={"https://github.com/lucasstevanin/landing_page"}
              page={"https://lucasstevanin.github.io/landing_page/"}
              showItem={["javascript", "css", "html", "figma"]}
              description={"landing page criada para captura de emails"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Theme Switcher"
              src={theme_switcher}
              github={"https://github.com/lucasstevanin/theme_switcher"}
              page={"https://lucasstevanin.github.io/theme_switcher/"}
              showItem={["javascript", "css", "html", "figma"]}
              description={
                "Tema onde podemos alterar entre modo escuro e modo claro"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="NFT Preview Card"
              src={card_nft}
              github={"https://github.com/lucasstevanin/nft_preview_card"}
              page={"https://lucasstevanin.github.io/nft_preview_card/"}
              showItem={["javascript", "css", "html"]}
              description={
                "um desafio feito pelo 'Frontend Mentor', onde desenvolvi um visualizador de um card NFT, com valor, descrição e nome"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="To Do List"
              src={to_do}
              github={"https://github.com/lucasstevanin/myToDoList"}
              page={"https://lucasstevanin.github.io/myToDoList/"}
              showItem={["javascript", "css", "html"]}
              description={
                "uma simples to-do list, onde você pode anotar suas tarefas, marca-lás como concluídas ou exclui-lás."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Monitor/Comparador de Preço"
              src={webscraping_img}
              showItem={["selenium", "pandas", "python", "excel"]}
              github={
                "https://github.com/lucasstevanin/monitor-comparador_de_precos"
              }
              page={
                "https://github.com/lucasstevanin/monitor-comparador_de_precos"
              }
              description={
                "Projeto web scraping que tem como intuito monitorar preços ou comparar preço de um mesmo produto em diversas lojas (perfeito para ecommerces ficar de olho no produto do concorrente)"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Quiz Interativo"
              src={img_quiz}
              showItem={["python", "reactjs", "sqlite", "typescript"]}
              github={
                "https://github.com/mateus040/ProjetoBootcamp"
              }
              page={
                "#"
              }
              description={
                "Quiz interativo de perguntas da area da programação desenvolvido como projeto final do bimestre da faculdade de ADS"
              }
            />
          </SwiperSlide>

          <div className="slider-controler">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="swiper-pagination"
            ></motion.div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
