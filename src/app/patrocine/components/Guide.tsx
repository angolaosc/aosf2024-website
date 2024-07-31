'use client';
import { motion } from 'framer-motion';

export default function Guide() {
  return (
    <section id="guia" className="mt-36 w-full  mb-40">
      <motion.header
        initial={{ top: -100 }}
        whileInView={{ top: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center"
      >
        <h2 className="text-[#c6d0d6]  retrato-tablet:text-3xl text-2xl font-medium">
          Patrocine agora mesmo!
        </h2>
        <p className="text-white pt-4">
          Veja abaixo como podes patrocinar e ajudar-nos neste grande propósito!
        </p>
      </motion.header>
      <div className="guide_container mt-12 p-5 w-full">
        <div className="max-w-2xl pt-10 w-full m-auto grid grid-cols-1 retrato-tablet:grid-cols-2 gap-2">
          <div className="h-96 flex flex-col justify-between p-5 bg-gradient-to-br rounded-lg border border-[#17222F] from-[#0C1318] to-transparent">
            <header>
              <div className="w-10 h-10 rounded-full border border-[#17222F] text-[#E4352A] bg-[#030B10] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-down-to-line size-6"
                >
                  <path d="M12 17V3" />
                  <path d="m6 11 6 6 6-6" />
                  <path d="M19 21H5" />
                </svg>
              </div>
            </header>
            <div>
              <h4 className="text-xl text-white">
                Baixe o nosso aplicativo, Prospectus
              </h4>
              <small className="text-zinc-200 pt-5">
                Baixe o nosso prespectus e leia os termos e propostas!
              </small>
              <div className="mt-6 flex justify-end">
                <a
                  href="https://drive.google.com/file/d/1z5b5c7jdxubWIIwT5yRj1_Yb8jAmCm4L/view?usp=sharing"
                  className="block transition-all hover:bg-[#cf322a] text-[15px] text-white px-5 py-2.5 rounded-lg bg-[#F4372C]"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="h-96 flex flex-col justify-between p-5 bg-gradient-to-br rounded-lg border border-[#17222F] from-[#0C1318] to-transparent">
            <header>
              <div className="w-10 h-10 rounded-full border border-[#17222F] text-[#E4352A] bg-[#030B10] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-at-sign size-6"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                </svg>
              </div>
            </header>
            <div>
              <h4 className="text-xl text-white">Envie-nos um email</h4>
              <small className="text-zinc-200 pt-5">
                Envie-nos um email para{' '}
                <span className="text-[#f4372c]">info@aosc.social</span>{' '}
                com os dados da empresa como nome, email, telefone e foto!
              </small>
              <div className="mt-6 flex justify-end">
                <a
                  href="#"
                  className="block text-[15px] text-white px-5 py-2.5 transition-all hover:border-white rounded-lg bg-transparent border border-[#17222F]"
                >
                  Enviar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
