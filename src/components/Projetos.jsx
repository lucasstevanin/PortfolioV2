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
    <div className="relative lg:h-screen h-full lg:mx-[10%]">
      <div className="opacity-50 absolute -top-20 left-1/2 -translate-x-1/2 -z-[9999]">
        <h1 className="hidden lg:block text-[16vw] mt-5 font-kizard font-bold text-[#000000] tracking-wider">
          Projetos
        </h1>
      </div>
      <div className="flex h-screen">
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 50,
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
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
