import { i18n } from '@/translate/i18n';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';

export const EventClock = () =>{
  const targetDate = new Date('2024-11-30T09:00:00Z');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center justify-center p-4 md:p-10 bg-transparent rounded-lg shadow-lg transition-all duration-300 w-full max-w-[800px]">
        <h2 className="text-palestra-color text-2xl sm:text-4xl font-bold mb-5 text-center">{i18n.t('section_1.contagem.title')}</h2>
        <div className="flex flex-wrap justify-center bg-custom-gradient rounded-[10px] p-2">
          <div className="flex flex-col items-center m-2 md:mx-4">
            <span className="text-white text-4xl sm:text-6xl font-semibold">{timeRemaining.days}</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase">{i18n.t('section_1.contagem.days')}</span>
          </div>
          <div className="flex flex-col items-center m-2 md:mx-4">
            <span className="text-white text-4xl sm:text-6xl font-semibold">{timeRemaining.hours}</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase">{i18n.t('section_1.contagem.hours')}</span>
          </div>
          <div className="flex flex-col items-center m-2 md:mx-4">
            <span className="text-white text-4xl sm:text-6xl font-semibold">{timeRemaining.minutes}</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase">{i18n.t('section_1.contagem.minutes')}</span>
          </div>
          <div className="flex flex-col items-center m-2 md:mx-4">
            <span className="text-white text-4xl sm:text-6xl font-semibold">{timeRemaining.seconds}</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase">{i18n.t('section_1.contagem.seconds')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
