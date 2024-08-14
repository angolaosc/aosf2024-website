'use client';
import { i18n } from '@/translate/i18n';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface Card {
  icon_path: string;
  title: string;
  text: string;
  fromGradient: string;
}

const CardIntro: React.FC<Card> = ({ icon_path, title, text, fromGradient }) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${fromGradient}, transparent)`,
      }}
      className="rounded-t-3xl p-5"
    >
      <header>
        <Image src={icon_path} alt="icone_demonstracao" width={40} height={40} />
      </header>
      <div className="pt-10">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="pt-4 text-[15px] text-white">{text}</p>
      </div>
    </div>
  );
};

export default function IntroPage() {
  return (
    <section id="inicio" className="retrato-tablet:mt-44 mt-36 w-full p-5">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        exit={{ opacity: 0, y: -100 }}
        className="max-w-6xl flex justify-center items-center w-full m-auto"
      >
        <div>
          <a
            href="https://drive.google.com/file/d/1z5b5c7jdxubWIIwT5yRj1_Yb8jAmCm4L/view?usp=sharing"
            className="flex m-auto text-white border border-[#17222F] transition-all hover:bg-[#10171d] font-medium items-center py-1 pe-1 ps-3 justify-between w-64 retrato-tablet:w-80 rounded-full bg-[#0C1318]"
          >
            <p>{i18n.t('page_2.sponsor.headline')}</p>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f84438] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right size-5 stroke-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
          <div className="text-center">
            <h1 className="paisagem-tablet:text-6xl retrato-tablet:text-5xl small:text-4xl text-3xl font-semibold pt-5">
              {i18n.t('page_2.title')}
            </h1>
            <div className="retrato-tablet:w-4/5 w-full m-auto">
              <p className="text-white pt-4 text-normal paisagem-tablet:text-xl">{i18n.t('page_2.description')}</p>
              <p className="pt-5 text-[#88959e]">{i18n.t('page_2.prescription')}</p>
            </div>

            {/* ANIMATION SIGNAL SCROLL */}
            <div className="signal flex relative items-end pb-1 justify-center h-16 w-6 mt-5 mx-auto rounded-full bg-[#0C1318] border border-[#17222F]">
              <button className="text-white svg_animated absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevrons-down size-5"
                >
                  <path d="m7 6 5 5 5-5" />
                  <path d="m7 13 5 5 5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* BENEFICIOS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full pt-14"
        id="beneficios"
      >
        <header>
          <h2 className="text-[#c6d0d6] text-center retrato-tablet:text-3xl text-2xl">Benefícios</h2>
        </header>
        <div className="max-w-6xl mt-10 w-full m-auto grid grid-cols-1 retrato-tablet:grid-cols-2 paisagem-tablet:grid-cols-3 gap-3">
          <CardIntro
            icon_path="/icons/marca.svg"
            title={i18n.t('page_2.benefit.card_1.title')}
            fromGradient="#FD392D"
            text={i18n.t('page_2.benefit.card_1.description')}
          />
          <CardIntro
            icon_path="/icons/network.svg"
            title={i18n.t('page_2.benefit.card_2.title')}
            fromGradient="#0C1318"
            text={i18n.t('page_2.benefit.card_2.description')}
          />
          <CardIntro
            icon_path="/icons/hand.svg"
            title={i18n.t('page_2.benefit.card_3.title')}
            fromGradient="#0C1318"
            text={i18n.t('page_2.benefit.card_3.description')}
          />
        </div>
      </motion.section>
    </section>
  );
}
