import Image from "next/image";
import React from "react";

interface Card {
  icon_path: string;
  title: string;
  text: string;
  fromGradient: string;
}

const CardIntro: React.FC<Card> = ({
  icon_path,
  title,
  text,
  fromGradient,
}) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${fromGradient}, transparent)`,
      }}
      className="rounded-t-3xl p-5"
    >
      <header>
        <Image
          src={icon_path}
          alt="icone_demonstracao"
          width={40}
          height={40}
        />
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
    <section className="retrato-tablet:mt-44 mt-36 w-full p-5">
      <div className="max-w-6xl flex justify-center items-center w-full m-auto">
        <div>
          <a
            href="#"
            className="flex m-auto text-white border border-[#17222F] font-medium items-center py-1 pe-1 ps-3 justify-between w-64 retrato-tablet:w-80 rounded-full bg-[#0C1318]"
          >
            <p>Baixe o Prospectus</p>
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
              Torne-se um Patrocinador
            </h1>
            <div className="retrato-tablet:w-4/5 w-full m-auto">
              <p className="text-white pt-4 text-normal paisagem-tablet:text-xl">
                Faça parte da revolução tecnológica em Angola. Seja um
                patrocinador e impulsione a inovação conosco
              </p>
              <p className="pt-5 text-[#515D65]">Continue lendo</p>
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
      </div>

      {/* BENEFICIOS SECTION */}
      <section className="w-full pt-14" id="beneficios">
        <h2 className="text-[#383f44] text-center text-3xl">Benefícios</h2>
        <div className="max-w-6xl mt-10 w-full m-auto grid grid-cols-1 retrato-tablet:grid-cols-2 paisagem-tablet:grid-cols-3 gap-3">
          <CardIntro
            icon_path="/icons/marca.svg"
            title="Visibilidade de Marca"
            fromGradient="#FD392D"
            text="Os patrocinadores têm a oportunidade de aumentar sua visibilidade entre um público altamente segmentado. Sua marca será destacada nos materiais de marketing do evento, incluindo site, redes sociais, materiais promocionais e durante o próprio evento, gerando reconhecimento e alcance"
          />
          <CardIntro
            icon_path="/icons/network.svg"
            title="Networking Estratégico"
            fromGradient="#0C1318"
            text="Ao patrocinar o evento, as empresas têm acesso a uma rede exclusiva de profissionais da indústria, líderes de pensamento e potenciais parceiros de negócios. Isso proporciona oportunidades valiosas para estabelecer conexões significativas e explorar colaborações futuras"
          />
          <CardIntro
            icon_path="/icons/hand.svg"
            title="Demonstração de Apoio à Comunidade"
            fromGradient="#0C1318"
            text="O apoio a eventos locais e à comunidade de programação demonstra o comprometimento da empresa com o crescimento e desenvolvimento do setor tecnológico. Isso pode aumentar a reputação da marca como uma empresa que valoriza e investe no avanço da tecnologia e na formação de profissionais qualificados"
          />
        </div>
      </section>
    </section>
  );
}
