import React from "react"
import {motion} from "framer-motion"
import BotaoCV from "./BotaoCV"

export default function QuemSou() {
  return (
    <div id="sobreMim" className="relative lg:h-screen">
      <div className="lg:mx-[10%] flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            className="pb-[3vh] pt-[10vh] text-white textoAbout font-kizard"
          >
            Um pouco sobre <span className="text-[#803cff]">mim</span>
          </motion.h1>
          <motion.p
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            className="textoDescritivo mb-2 font-Aquantico font-medium uppercase tracking-wider text-[#767676] lg:w-[70%] w-[90%]"
          >
            Sou Lucas Stevanin, desenvolvedor front-end há 2 anos, apaixonado
            por criar interfaces funcionais e responsivas.
            Atuo na construção de sistemas do zero, fazendo desde a prototipação
            no Figma até o desenvolvimento com VueJS, ReactJS, Python, Docker,
            GraphQL e ferramentas de versionamento e automação, como GitLab e
            CI/CD.
            Estou sempre em busca de soluções criativas e eficientes para cada
            projeto em que me participo.
          </motion.p>

          <BotaoCV />
        </div>
      </div>
    </div>
  )
}
