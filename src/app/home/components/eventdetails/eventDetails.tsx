'use client';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import { i18n } from '@/translate/i18n';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const { container } = styles;
  const targetDate = new Date('2024-11-30T09:00:00Z'); // Data e hora do evento
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerId); // Limpa o intervalo ao desmontar o componente
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // já passou
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-evenly mt-[70px] mx-4 md:mx-32 rounded-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <Image
        src='/aosfestPeople.jpg'
        alt="Event Image"
        width={800}
        height={100}
        className="w-full md:w-[800px] h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
      />
      <div className="ml-0 md:ml-12 mt-6 md:mt-0 text-gray-100 max-w-[500px] leading-relaxed">
  <h1 className="text-3xl font-bold mb-4">Angola Open Source Fest</h1>
  <p className="mb-4">{i18n.t('section_2.detail.firstP')}</p>
  <p>{i18n.t('section_2.detail.secondP')}</p>
</div>

    </motion.div>
  );
};

export default EventDetails;
