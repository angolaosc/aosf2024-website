'use client';
import Image from 'next/image';
import React from 'react';
import { EventDetailsCard } from '../../../../interfaces/data';
import style from './card.styles.module.css';

const EventDetailsCarsd: React.FC<EventDetailsCard> = ({ icon, title, description }) => {
  return (
    <div className={`${style.spotlightCard}`}>
      <div>
        <Image src={icon} width={40} height={40} alt="Spotlight Icon" />
        <h2 className={style.title}>{title}</h2>
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

const EventDetailsCardsSlide: React.FC<{ cards: EventDetailsCard[] }> = ({ cards }) => {
  return (
    <div className={style.container}>
      <div className={style.slideWrapper}>
        {cards.map((spot, index) => {
          let elevationClass = '';
          if (index % 3 === 0) elevationClass = style.elevated1;
          else if (index % 3 === 1) elevationClass = style.elevated2;

          return <EventDetailsCarsd key={index} icon={spot.icon} title={spot.title} description={spot.description} />;
        })}
      </div>
    </div>
  );
};

export default EventDetailsCardsSlide;
