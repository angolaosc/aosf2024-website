import React from "react";
import Image from "next/image";
import style from "./SpotlightCard.module.css";
import { SpotlightCardProps } from "../../../../interfaces/data";

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <div className={`${style.spotlightCard} ${className}`}>
      <Image src={icon} width={40} height={40} alt="Spotlight Icon" />
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </div>
  );
};

const SpotlightSlide: React.FC<{ spotlights: SpotlightCardProps[] }> = ({
  spotlights,
}) => {
  return (
    <div className={style.container}>
      <div className={style.slideWrapper}>
        {spotlights.map((spot, index) => {
          let elevationClass = '';
          if (index % 3 === 0) elevationClass = style.elevated1;
          else if (index % 3 === 1) elevationClass = style.elevated2;

          return (
            <SpotlightCard
              key={index}
              icon={spot.icon}
              title={spot.title}
              description={spot.description}
              className={elevationClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpotlightSlide;
