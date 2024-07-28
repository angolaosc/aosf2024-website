'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import ScrollLink from './ScrollLink';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {});

  return (
    <header>
      <div
        ref={navbarRef}
        className={classNames(
          'header z-20 bg-[#030B10] transition-all fixed top-0 left-0 right-0 py-4 m-auto items-center flex px-4 justify-between w-full border-b border-[#111D25]',
          {
            'max-w-7xl': !isScrolled,
            'max-w-full': isScrolled,
          }
        )}
      >
        <div className="logo_container">
          <Image src="/logo.png" alt="Logo_Commmunity" width={30} height={30} />
        </div>
        <div className="navbar_container paisagem-tablet:inline-flex hidden">
          <nav>
            <ul className="flex justify-center items-center gap-16">
              <ScrollLink href="#inicio">Inicio</ScrollLink>{' '}
              <ScrollLink href="#beneficios">Benefícios</ScrollLink>
              <ScrollLink href="#guia">Guia</ScrollLink>
              <ScrollLink href="#contacto">Contacto</ScrollLink>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
