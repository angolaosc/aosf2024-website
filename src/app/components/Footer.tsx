import Image from 'next/image';
import React from 'react';
import { Facebook, Linkedin, Send, Youtube } from 'lucide';

interface Link {
  name: string;
  url: string;
}

interface Voluntario {
  nameV: string;
  area: string;
  path: string;
}

interface IconInterface {
  pathIcon: string;
}

const LinkItem: React.FC<Link> = ({ name, url }) => {
  return (
    <li className="list-none">
      <a
        href={url}
        className="text-zinc-300 transition-all hover:underline hover:text-white"
      >
        {name}
      </a>
    </li>
  );
};

const CardItem: React.FC<Voluntario> = ({ nameV, area, path }) => {
  return (
    <div className="flex p-3 rounded-lg bg-[#0B1317]  items-start gap-4">
      <div>
        <Image
          src={path}
          alt="imagem-voluntário"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <h6 className="leading-none text-white">{nameV}</h6>
        <small className="text-zinc-200">{area}</small>
      </div>
    </div>
  );
};

const BallIcon: React.FC<IconInterface> = ({ pathIcon }) => {
  return (
    <a
      href="#"
      className="flex items-center border border-[#636262] justify-center rounded-full text-white w-10 h-10 bg-[#0B1821]"
    >
      <Image src={pathIcon} alt="social-media-icon" width={20} height={20} />
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="p-6">
      <div className="full_container flex flex-col  w-full">
        <div className="grid grid-cols-2 max-w-7xl m-auto w-full gap-5">
          <div className="flex justify-center">
            <div>
              <Image
                src="/logo_spa.png"
                alt="imagem-angola-open-source"
                width={200}
                height={200}
              />
              <div className="pt-5 w-4/5">
                <p className="text-[12px] text-zinc-200">
                  A Associação dos Programadores Angolanos (APA) é uma
                  comunidade unida em torno do avanço e promoção da programação
                  em Angola. Buscamos criar oportunidades, promover o
                  aprendizado e impulsionar o crescimento da indústria
                  tecnológica no país
                </p>
              </div>
              {/* INFO */}
              <div className="pt-5">
                <a
                  href="#"
                  className="text-white transition-all hover:underline"
                >
                  info@aosc.social
                </a>
                <div className="flex items-center gap-4 pt-4">
                  <p className="text-white">+244 936 853 728 </p>
                  <p className="text-zinc-300">|</p>
                  <p className="text-white">+244 935 401 862</p>
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <header>
              <h5 className="text-zinc-200">Navegação</h5>
            </header>
            <div className="flex items-center flex-wrap gap-10 pt-5">
              <LinkItem name="inicio" url="#inicio" />
              <LinkItem name="Benefícios" url="#beneficios" />
              <LinkItem name="Guia" url="#guia" />
              <LinkItem name="Contacto" url="#contacto" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#17222F] mt-10 max-w-7xl pt-5 grid grid-cols-2 w-full m-auto">
          <div>
            <header>
              <h6 className="text-white">
                Shoutout para os Profissionais Voluntários
              </h6>
            </header>
            <div className="grid gap-2 grid-cols-2 mt-5">
              <CardItem
                nameV="Dev Dev"
                area="Software Engineer"
                path="/dev.png"
              />
              <CardItem
                nameV="Mário Monteiro"
                area="UI/UX Designer"
                path="/walt.png"
              />
              <CardItem
                nameV="Alfrânio Alves"
                area="Software Engineer"
                path="/alves.png"
              />
            </div>
          </div>
          <div className="social_media">
            <div className="flex justify-end items-center gap-5 flex-wrap">
				<BallIcon pathIcon="/icons/facebook.svg" />
				<BallIcon pathIcon="/icons/linkedin.svg" />
				<BallIcon pathIcon="/icons/discord.svg" />
				<BallIcon pathIcon="/icons/send.svg" />
				<BallIcon pathIcon="/icons/youtube.svg" />
			</div>
			<p className='text-end pt-5 text-[14px] text-white'>&copy;2023 Angola Open-Source Community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}