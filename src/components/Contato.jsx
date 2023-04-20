import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";

export default function Contato() {
  return (
    <div id="contato" className="h-full my-[5vh]">
      <div className="lg:mx-[10%] flex items-center justify-center xl:h-screen flex-wrap">
        <div className="absolute flex items-center justify-center opacity-[0.35] -z-20">
          <h1 className="hidden xl:block text-[19vw] font-kizard font-bold text-[#000000] tracking-wider">
            Contato
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex mt-5 order-2 items-center justify-center w-[90%] xl:w-[35%]  xl:border-r-2 border-[#767676]"
        >
          <div className="flex flex-col items-center p-5 bg-[#111111] rounded-lg justify-evenly">
            <div className="flex flex-col items-center">
              <h1 className="text-[#803cff] text-[4.5vw] md:text-[2.5vw] lg:text-[1.2rem] font-Roboto font-bold tracking-wider uppercase">
                Email:
              </h1>
              <a
                href="#"
                className="font-Roboto text-white text-[4.5vw] md:text-[2.5vw] lg:text-[1.2rem] underline tracking-wider"
              >
                lucasstevanin@gmail.com
              </a>
            </div>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://wa.me/5514997038530?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20de%20emprego.%20"
              className="flex items-center text-center xl:flex-col mt-[4vh]"
            >
              <svg
                className="w-[22vw] md:w-[12vw] lg:w-24 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                fill="#803cff"
              >
                <path d="M22,6.55a12.61,12.61,0,0,0-.1-1.29,4.29,4.29,0,0,0-.37-1.08,3.66,3.66,0,0,0-.71-1,3.91,3.91,0,0,0-1-.71,4.28,4.28,0,0,0-1.08-.36A10.21,10.21,0,0,0,17.46,2H6.55a12.61,12.61,0,0,0-1.29.1,4.29,4.29,0,0,0-1.08.37,3.66,3.66,0,0,0-1,.71,3.91,3.91,0,0,0-.71,1,4.28,4.28,0,0,0-.36,1.08A10.21,10.21,0,0,0,2,6.54C2,6.73,2,7,2,7.08v9.84c0,.11,0,.35,0,.53a12.61,12.61,0,0,0,.1,1.29,4.29,4.29,0,0,0,.37,1.08,3.66,3.66,0,0,0,.71,1,3.91,3.91,0,0,0,1,.71,4.28,4.28,0,0,0,1.08.36A10.21,10.21,0,0,0,6.54,22H17.45a12.61,12.61,0,0,0,1.29-.1,4.29,4.29,0,0,0,1.08-.37,3.66,3.66,0,0,0,1-.71,3.91,3.91,0,0,0,.71-1,4.28,4.28,0,0,0,.36-1.08A10.21,10.21,0,0,0,22,17.46c0-.19,0-.43,0-.54V7.08C22,7,22,6.73,22,6.55ZM12.23,19h0A7.12,7.12,0,0,1,8.8,18.1L5,19.1l1-3.72a7.11,7.11,0,0,1-1-3.58A7.18,7.18,0,1,1,12.23,19Zm0-13.13A6,6,0,0,0,7.18,15l.14.23-.6,2.19L9,16.8l.22.13a6,6,0,0,0,3,.83h0a6,6,0,0,0,6-6,6,6,0,0,0-6-6Zm3.5,8.52a1.82,1.82,0,0,1-1.21.85,2.33,2.33,0,0,1-1.12-.07,8.9,8.9,0,0,1-1-.38,8,8,0,0,1-3.06-2.7,3.48,3.48,0,0,1-.73-1.85,2,2,0,0,1,.63-1.5.65.65,0,0,1,.48-.22H10c.11,0,.26,0,.4.31s.51,1.24.56,1.33a.34.34,0,0,1,0,.31,1.14,1.14,0,0,1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56,5.56,0,0,0,1,1.24,5,5,0,0,0,1.44.89c.18.09.29.08.39,0s.45-.52.57-.7.24-.15.4-.09,1.05.49,1.23.58.29.13.34.21A1.56,1.56,0,0,1,15.73,14.36Z" />
              </svg>
              <span className="text-[3.5vw] md:text-[2vw] lg:text-[1.2rem] font-bold tracking-wider text-white uppercase font-Roboto">
                Envie-me uma <br /> mensagem
              </span>
            </a>

            <div className="flex xl:block mt-[4vh]">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://www.linkedin.com/in/lucas-stevanin/"
                className="flex flex-col items-center justify-center w-40 text-center"
              >
                <svg
                  className="w-[22vw] md:w-[12vw] lg:w-24 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#803cff"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
                <span className="text-[3.5vw] md:text-[2vw] lg:text-[1.2rem] font-bold tracking-wider text-white uppercase font-Roboto">
                  Linkedin
                </span>
              </a>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href="https://github.com/lucasstevanin"
                className="flex flex-col items-center justify-center w-40 text-center"
              >
                <svg
                  className="w-[22vw] md:w-[12vw] lg:w-24 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="#803cff"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill-rule="evenodd"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                  ></path>
                </svg>
                <span className="text-[3.5vw] md:text-[2vw] lg:text-[1.2rem] font-bold tracking-wider text-white uppercase font-Roboto">
                  Github
                </span>
              </a>
            </div>
          </div>
        </motion.div>
        <div className="xl:order-2 w-[90%] xl:w-[55%]">
          <ContactForm />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
