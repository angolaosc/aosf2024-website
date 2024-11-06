import Image from 'next/image';
import React from 'react';
import { i18n } from '@/translate/i18n';
import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-evenly mt-[50px] mx-4 md:mx-16 lg:mx-32 rounded-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
    >
      <Image
        src='/aosfestPeople.jpg'
        alt="Event Image"
        width={800}
        height={100}
        className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
      />
      <div className="mt-6 md:mt-0 text-gray-100 max-w-[500px] leading-relaxed text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Angola Open Source Fest</h1>
        <p className="mb-4 text-sm sm:text-base">{i18n.t('section_2.detail.firstP')}</p>
        <p className="text-sm sm:text-base">{i18n.t('section_2.detail.secondP')}</p>
      </div>
    </motion.div>
  );
};

export default EventDetails;
