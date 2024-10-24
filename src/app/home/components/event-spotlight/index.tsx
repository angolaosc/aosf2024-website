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
    window.open('https://ticket.ao/event/angola-open-source-fest-2024/', '_blank');  
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
