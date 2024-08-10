import EventDetailsCardsSlide from './card';
import data from './data';
import styles from './styles.module.css';
import Image from 'next/image';
import React from 'react';
import style from './card.styles.module.css';
import gup16 from '../../../../../public/Group 16.png';
import gup22 from '../../../../../public/Group 22.png';

const EventDetails = () => {
  const { container } = styles;
  return (
    <div className={container} id='guia'>
      <EventDetailsCardsSlide cards={data} />
      <br />
      <hr className='bg-custom-dark h-0.7 w-full m-8'/>
      <div >
      <div className='p-5 flex justify-between items-center'>
        <Image src={gup16} width={40} height={40} alt="Spotlight Icon" />
        <h2 className='text-white'>VALORES</h2>
      </div>
      <p className='p-5 text-white'>A Associação dos Programadores Angolanos (APA) tem o prazer de apresentar este evento revolucionário. Nosso objetivo é promover o avanço e a colaboração na comunidade de programação de Angola. Com uma visão centrada na inovação e no crescimento profissional, este evento visa reunir mentes criativas, líderes da indústria e entusiastas da tecnologia para compartilhar conhecimento, explorar tendências emergentes e estimular a criatividade.</p>
    </div>
    </div>
  );
};

export default EventDetails;
