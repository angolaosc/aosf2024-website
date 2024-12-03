'use-client';

import { i18n } from '@/translate/i18n';
import Image from 'next/image';
import { FiFile, FiImage, FiShoppingCart, FiSliders, FiYoutube } from 'react-icons/fi';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { MdOutlineExplore } from 'react-icons/md';
import aosfest from '../../../../../public/aosfest.png';
import SpotlightSlide from '../spotlight-card/spotlight_card';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';


const INTERVAL_DELAY = 10; 
const SCROLL_DELAY = 3000; 
const TARGET_COUNTS = { speakers: 30, participants: 400, partners: 10 }; 

interface ScrollingDetail {
  label: string;
  count: string;
}


const scrollingDetails: ScrollingDetail[] = [
  { label: 'Speakers', count: '300+' },
  { label: 'Participants', count: '300+' },
  { label: 'Partners', count: '10+' },
];

const EventSpotlight = () => {
  const {
    Spotlights,
    eventspotlight_container,
    eventspotlight_container_body_1,
    eventspotlight_container_body_1_description,
    eventspotlight_container_body_1_hero_1,
    eventspotlight_container_body_1_hero_1_button_1,
    eventspotlight_container_body_1_hero_1_button_2,
    eventspotlight_container_body_1_hero_2,
    eventspotlight_container_body_1_hero_2_card,
    eventspotlight_container_body_1_hero_2_seperator,
  } = styles;

  const [counters, setCounters] = useState({ speakers: 0, participants: 0, partners: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => {
        const updated = { ...prev };
        (Object.keys(TARGET_COUNTS) as Array<keyof typeof TARGET_COUNTS>).forEach((key) => {
          if (prev[key] < TARGET_COUNTS[key]) {
            updated[key] += 1;
          }
        });
        return updated;
      });
    }, INTERVAL_DELAY);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollingDetails.length);
    }, SCROLL_DELAY);
    return () => clearInterval(interval);
  }, []);


  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-background-color">
      <div className={eventspotlight_container} id="eventspotlights">
        {/* Cabeçalho e descrição */}
        <div className={eventspotlight_container_body_1} id="inicio">
          <Image src={aosfest} width={470} height={148} alt="AOS Fest logo" />
          <p className={eventspotlight_container_body_1_description}>
            {i18n.t('section_1.description')}
          </p>

          {/* Botões principais */}
          <div className={eventspotlight_container_body_1_hero_1}>
            <button
              className={eventspotlight_container_body_1_hero_1_button_1}
              onClick={() =>
                openInNewTab('https://drive.google.com/drive/folders/1iEAIF1yaYjYYNSEv7SljNtm22RqpzrFE?usp=sharing')
              }
            >
              {i18n.t('section_1.button1')} <FiImage color="#F892121" />
            </button>
            <a
              className={eventspotlight_container_body_1_hero_1_button_2}
              href="https://drive.google.com/drive/folders/1Ct7I7VZcosgc8mu0_FWwjOAiiaeLunSh?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {i18n.t('section_1.button2')} <FiFile color="#F892121" />
            </a>
          </div>

          {/* Detalhes do evento */}
          <div className={eventspotlight_container_body_1_hero_2}>
            <div className={eventspotlight_container_body_1_hero_2_card}>
              <IoCalendarClearOutline />
              <div>
                <h2>{i18n.t('section_1.date.line_1')}</h2>
                <p>{i18n.t('section_1.date.line_2')}</p>
              </div>
            </div>
            <div className={eventspotlight_container_body_1_hero_2_seperator}></div>
            <div className={eventspotlight_container_body_1_hero_2_card}>
              <MdOutlineExplore />
              <div>
                <h2>Instituto Sapiens</h2>
                <p>Local</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide de destaques */}
        <div className={Spotlights} id="beneficios">
          <SpotlightSlide spotlights={i18n.t('section_1.spotlights', { returnObjects: true })} />
        </div>
      </div>

      {/* Seção de contadores */}
      <div className="flex justify-center mt-8 gap-8 flex-wrap">
        {[
          { icon: <IoCalendarClearOutline size={40} />, color: 'text-primary', count: counters.speakers, label: i18n.t('section_1.contagem.speakers') },
          { icon: <FiShoppingCart size={40} />, color: 'text-green-500', count: counters.participants, label: i18n.t('section_1.contagem.participants') },
          { icon: <MdOutlineExplore size={40} />, color: 'text-yellow-500', count: counters.partners, label: i18n.t('section_1.contagem.partners') },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-keynoteSpeakers-gradient rounded-lg shadow-lg p-2 w-44 md:w-48 lg:w-52"
          >
            <h2 className={`text-5xl font-bold ${item.color}`}>{item.count}+</h2>
            <p className="text-lg text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSpotlight;
