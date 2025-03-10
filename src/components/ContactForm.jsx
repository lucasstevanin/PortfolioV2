import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="antialiased lg:ml-[3vw] md:mx-auto"
    >
      <h2 className="mb-[2vh] text-center text-white uppercase textoContato font-kizard">
        Entre em <span className="text-[#803cff]">contato</span> comigo
      </h2>
      <p className="mb-[4vh] textoDescritivo font-Aquatico text-center uppercase tracking-wider text-[#767676]">
        Gostou do meu portfólio e gostaria de me integrar a sua equipe? Me envie
        uma mensagem!
      </p>
      <form
        action="https://formsubmit.co/lucasstevanin@gmail.com"
        method="POST"
        className="space-y-5 text-center lg:space-y-8"
      >
        <div>
          <input
            type="hidden"
            name="_next"
            value="https://lucasstevanin.vercel.app/"
          />
          <input type="hidden" name="_captcha" value="false" />
          <label
            for="name"
            className="text-left ml-[5%] block mb-2 text-[4vw] lg:text-[1rem] font-Aquatico font-medium text-[#803CFF] uppercase"
          >
            Nome
          </label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label
            for="name"
            className="text-left ml-[5%] block mb-2 text-[4vw] lg:text-[1rem] font-Aquatico font-medium text-[#803CFF] uppercase"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="seuemail@gmail.com"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            className="text-left ml-[5%] block mb-2 text-[4vw] lg:text-[1rem] text-[#803CFF] uppercase font-Aquatico font-medium"
          >
            Sua Mensagem
          </label>
          <textarea
            name="message"
            rows="6"
            className="input"
            placeholder="Deixe uma mensagem"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-5 py-3 text-[1rem] font-Aquatico font-bold text-center text-white bg-[#803CFF] rounded-lg"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </motion.div>
  );
}
