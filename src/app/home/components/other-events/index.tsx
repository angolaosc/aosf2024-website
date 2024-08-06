'use client';
import Link from 'next/link';
import { useState } from 'react';

interface Event {
  title: string;
  date: string;
  href: string;
}

const events: Event[] = [
  {
    title: 'Software Engineering Principles',
    date: '15 a 17 de Março de 2024',
    href: '!#',
  },
  {
    title: 'Software Engineering Principles',
    date: '15 a 17 de Março de 2024',
    href: '!#',
  },
  {
    title: 'Software Engineering Principles',
    date: '15 a 17 de Março de 2024',
    href: '!#',
  },
];

export default function Index() {
  return (
    <section className="px-4 md:px-32">
      <h1 className="text-center text-white text-2xl md:text-[32px]">Outros eventos</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-20">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={event.href}
      className="p-5 bg-[#111A25] border border-neutral-300/20 rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-10">
        <Arrow backgroundColor={isHovered ? '#A0312C' : '#0B151D'} />
      </div>
      <h3 className="text-lg font-medium text-white">{event.title}</h3>
      <div>
        <div className="flex items-center justify-between py-3 mt-6 border-t border-[#213441]">
          <p className="text-base text-white">{event.date}</p>
          <YouTube />
        </div>
      </div>
    </Link>
  );
}

type ArrowProps = {
  backgroundColor: string;
};

function Arrow({ backgroundColor }: ArrowProps) {
  return (
    <svg width="35" height="35" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27.5" cy="27.5" r="27.5" fill={backgroundColor} />
      <path d="M16 28H38" stroke="#D9D9D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 17L38 28L27 39" stroke="#D9D9D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg width="40" height="27" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.1545 0.5H24.4215C26.8877 0.509076 39.3835 0.599831 42.7527 1.51344C43.7712 1.79226 44.6993 2.33575 45.4443 3.08958C46.1893 3.84341 46.725 4.78119 46.9979 5.80919C47.301 6.95876 47.514 8.48043 47.658 10.0505L47.688 10.3651L47.754 11.1517L47.778 11.4663C47.973 14.2313 47.997 16.8208 48 17.3866V17.6134C47.997 18.2003 47.97 20.9653 47.754 23.8453L47.73 24.163L47.703 24.4776C47.553 26.208 47.331 27.9263 46.9979 29.1908C46.725 30.2188 46.1893 31.1566 45.4443 31.9104C44.6993 32.6643 43.7712 33.2077 42.7527 33.4866C39.2725 34.4304 26.0446 34.497 24.2115 34.5H23.7855C22.8584 34.5 19.0242 34.4818 15.0039 34.3427L14.4939 34.3245L14.2329 34.3124L13.7199 34.2913L13.2068 34.2701C9.87662 34.1219 6.70542 33.8829 5.24433 33.4835C4.22615 33.205 3.29825 32.6619 2.55331 31.9087C1.80837 31.1554 1.27245 30.2183 0.999062 29.1908C0.666042 27.9293 0.444028 26.208 0.294018 24.4776L0.270017 24.1599L0.246015 23.8453C0.0970963 21.7955 0.0150469 19.7413 0 17.686L0 17.314C0.00600038 16.6635 0.0300019 14.4158 0.192012 11.9352L0.213013 11.6236L0.222014 11.4663L0.246015 11.1517L0.31202 10.3651L0.342021 10.0505C0.48603 8.48043 0.699044 6.95573 1.00206 5.80919C1.27499 4.78119 1.81071 3.84341 2.55568 3.08958C3.30065 2.33575 4.22879 1.79226 5.24733 1.51344C6.70842 1.12016 9.87962 0.878147 13.2098 0.726888L13.7199 0.705712L14.2359 0.687562L14.4939 0.678486L15.0069 0.65731C17.8622 0.56475 20.7187 0.513316 23.5755 0.503025L24.1545 0.5ZM19.2012 10.2108V24.7861L31.673 17.5015L19.2012 10.2108Z"
        fill="#A0312C"
      />
    </svg>
  );
}
