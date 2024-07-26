"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Link {
  name: string;
  url: string;
}

const LinkItem: React.FC<Link> = ({ name, url }) => {
  return (
    <li>
      <a href={url} className="text-white transition-all hover:opacity-70">
        {name}
      </a>
    </li>
  );
};

export default function Header() {
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollNavbar = () => {
    if (!navbarRef.current) return;

    if (window.scrollY >= 1) {
      navbarRef.current.classList.remove("max-w-full");
      navbarRef.current.classList.add("max-w-7xl");
    } else {
      navbarRef.current.classList.remove("max-w-7xl");
      navbarRef.current.classList.add("max-w-full");
    }
  };

  document.addEventListener("scroll", scrollNavbar);

  return (
    <header>
      <div
        ref={navbarRef}
        className="header z-20 bg-[#030B10] transition-all fixed top-0 left-0 right-0 max-w-7xl py-4 m-auto items-center flex px-4 justify-between w-full border-b border-[#111D25]"
      >
        <div className="logo_container">
          <Image src="/logo.png" alt="Logo_Commmunity" width={30} height={30} />
        </div>
        <div className="navbar_container paisagem-tablet:inline-flex hidden">
          <nav>
            <ul className="flex justify-center items-center gap-16">
              <LinkItem name="Início" url="#inicio" />
              <LinkItem name="Benefícios" url="#beneficio" />
              <LinkItem name="Guia" url="#guia" />
              <LinkItem name="Contacto" url="#contacto" />
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden retrato-tablet:flex border-[#17222F]  border rounded-full font-medium text-[14px] items-center px-4 py-1.5 bg-[#0C1318] transition-all hover:bg-[#10171d] text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-globe size-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            PT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down size-5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button className="text-white paisagem-tablet:hidden inline-flex transition-all hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-ellipsis-vertical size-6"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
