import React from "react";
import CardProjects from "./CardProjects";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Projetos() {
  return (
    <div id="projetos" className="relative lg:h-screen h-full lg:mx-[10%]">
      <div className="absolute -translate-x-1/2 lg:opacity-50 lg:-top-5 left-1/2 ">
        <h1 className="text-[17vw] text-white lg:text-[16vw] mt-5 font-kizard font-bold lg:text-[#000000] tracking-wider">
          Projetos
        </h1>
      </div>
      <div className="flex h-screen">
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
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardProjects
              titulo="Projeto 01"
              src="https://images.unsplash.com/photo-1676910226586-eb747ab85443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              showItem={[
                "javascript",
                "reactjs",
                "nextjs",
                "tailwind",
                "css",
                "html",
                "figma",
              ]}
            />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
