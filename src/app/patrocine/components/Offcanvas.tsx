'use client';

import { useEffect, useRef } from 'react';
import ScrollLink from './ScrollLink';

export default function OffCanvas() {
  const closeButton = useRef<HTMLButtonElement>(null);
  const allItems = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const button = closeButton.current;
    if (button) {
      button.addEventListener('click', HideOffCanvas);
      return () => {
        button.removeEventListener('click', HideOffCanvas);
      };
    }
  }, []);

  useEffect(() => {
    allItems.current = document.querySelectorAll('.nav_link');
    if (allItems.current) {
      allItems.current.forEach((element) => {
        element.addEventListener('click', HideOffCanvas);
      });
      return () => {
        if (allItems.current) {
          allItems.current.forEach((element) => {
            element.removeEventListener('click', HideOffCanvas);
          });
        }
      };
    }
  }, []);

  const HideOffCanvas = () => {
    const backgroundOffCanvas = document.querySelector('.off_back') as HTMLElement;
    const offCanvas = document.querySelector('.off_nav') as HTMLElement;

    if (backgroundOffCanvas && offCanvas) {
      offCanvas.classList.remove('visible');
      offCanvas.classList.add('hide');

      setTimeout(() => {
        backgroundOffCanvas.classList.add('hidden');
      }, 500);
    }
  };

  return (
    <aside className="fixed hidden off_back top-0 z-30 left-0 right-0 w-full h-screen bg-[rgba(0,0,0,0.8)]">
      <div className="fixed off_nav right-0 h-full w-full retrato-tablet:w-[30rem] p-6 bg-[#03090e]">
        <header className="flex items-center justify-between border-b border-[#111D25] pb-3">
          <div>
            <button ref={closeButton} className="text-white transition-all hover:text-[#FD392D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x size-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div>
            <h6 className="text-white">Menu</h6>
          </div>
        </header>
        <div className="pt-10 grid grid-cols-1 gap-10">
          <ScrollLink href="#inicio">
            <div className="flex justify-between items-center nav_link">
              Inicio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house size-5"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
          </ScrollLink>
          <ScrollLink href="#beneficios">
            <div className="flex items-center justify-between nav_link">
              Beneficios
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gem size-5"
              >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
                <path d="M11 3 8 9l4 13 4-13-3-6" />
                <path d="M2 9h20" />
              </svg>
            </div>
          </ScrollLink>
          <ScrollLink href="#guia">
            <div className="flex items-center justify-between nav_link">
              Guia
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-waypoints size-5"
              >
                <circle cx="12" cy="4.5" r="2.5" />
                <path d="m10.2 6.3-3.9 3.9" />
                <circle cx="4.5" cy="12" r="2.5" />
                <path d="M7 12h10" />
                <circle cx="19.5" cy="12" r="2.5" />
                <path d="m13.8 17.7 3.9-3.9" />
                <circle cx="12" cy="19.5" r="2.5" />
              </svg>
            </div>
          </ScrollLink>
          <ScrollLink href="#inicio">
            <div className="flex items-center justify-between nav_link">
              Contacto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone size-5"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
          </ScrollLink>
        </div>
      </div>
    </aside>
  );
}
