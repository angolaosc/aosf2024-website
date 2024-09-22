'use client';
import Image from 'next/image';
import gup16 from '../../../../../public/Group 16.png';
import EventDetailsCardsSlide from './card';
import styles from './styles.module.css';
import { i18n } from '@/translate/i18n';

const EventDetails = () => {
  const { container } = styles;
  return (
    <div className={container} id="guia">
      <EventDetailsCardsSlide cards={i18n.t('section_2.details_List', {returnObjects: true})} />
      <br />
      <hr className="bg-custom-dark h-0.7 w-full m-8" />
      <div>
        <div className="p-5 flex justify-between items-center">
          <Image src={gup16} width={40} height={40} alt="Spotlight Icon" />
          <h2 className="text-white">{i18n.t('section_2.detailStar.title')}</h2>
        </div>
        <p className="p-5 text-white">
          {i18n.t('section_2.detailStar.description')}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
