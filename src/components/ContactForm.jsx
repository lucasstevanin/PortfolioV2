import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Oportunidade de trabalho");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

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
      <p className="mb-[4vh] lg:mb-[8vh] textoDescritivo font-Roboto text-center uppercase tracking-wider text-[#767676]">
        Gostou do meu portfólio e gostaria de me integrar a sua equipe? Me envie
        uma mensagem!
      </p>
      <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-8">
        <div>
          <label
            for="email"
            className="block mb-2 text-[4vw] lg:text-[1rem] font-Roboto font-medium text-[#803CFF] uppercase"
          >
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email"
            type="email"
            className="input"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block mb-2 text-[4vw] lg:text-[1rem] text-[#803CFF] uppercase font-Roboto font-medium "
          >
            Assunto
          </label>
          <input
            value={subject}
            onChange={handleSubjectChange}
            type="text"
            id="subject"
            className="input"
            placeholder="Assunto"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 text-[4vw] lg:text-[1rem] text-[#803CFF] uppercase font-Roboto font-medium"
          >
            Sua Mensagem
          </label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            id="message"
            rows="6"
            className="input"
            placeholder="Deixe uma mensagem"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-5 py-3 text-[1rem] font-Roboto font-bold text-center text-white bg-[#803CFF] rounded-lg"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </motion.div>
  );
}
