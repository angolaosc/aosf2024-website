'use client';
import { i18n } from '@/translate/i18n';
import Image from 'next/image';
import { FiShoppingCart, FiYoutube } from 'react-icons/fi';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { MdOutlineExplore } from 'react-icons/md';
import aosfest from '../../../../../public/aosfest.png';
import SpotlightSlide from '../spotlight-card/spotlight_card';
import styles from './styles.module.css';
import toast from 'react-hot-toast';

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

  const handleClick = (e: any) => {
    e.preventDefault();
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image
                className="h-10 w-10 rounded-full"
                src="/logo.png"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Angola Open-Source Fest
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {i18n.t('section_1.toastMessage')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {i18n.t('section_1.closeButton')}
          </button>
        </div>
      </div>
    )
  )
    
    
  };
  return (
    <div className={eventspotlight_container} id="eventspotlights">
      <div className={eventspotlight_container_body_1} id="inicio">
        <Image src={aosfest} width={470} height={148} alt="aosfest" />
        <p className={eventspotlight_container_body_1_description}>{i18n.t('section_1.description')}</p>

        <div className={eventspotlight_container_body_1_hero_1}>
          <a
            className={eventspotlight_container_body_1_hero_1_button_1}
            onClick={handleClick}
          >
            {i18n.t('section_1.button1')} <FiShoppingCart color="#F892121" />
          </a>
          <a className={eventspotlight_container_body_1_hero_1_button_2} href="https://youtu.be/smzGyEPN8Zk?si=EKB-HiCAjvQVGENq">
            {i18n.t('section_1.button2')} <FiYoutube color="#F892121" />
          </a>
        </div>

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
              <h2>Academia BAI</h2>
              <p>Local</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Spotlights} id="beneficios">
        <SpotlightSlide spotlights={i18n.t('section_1.spotlights', {returnObjects: true})} /> {/* Adiciona o SpotlightSlide */}
      </div>
    </div>
  );
};

export default EventSpotlight;
