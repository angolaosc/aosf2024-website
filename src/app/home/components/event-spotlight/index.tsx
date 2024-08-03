"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import aosfest from "../../../../../public/aosfest.png";
import { FiShoppingCart } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import SpotlightCard from "../spotlight-card/spotlight_card";
import SpotlightSlide from "../spotlight-card/spotlight_card"; // Importa o SpotlightSlide

import spotlights from "./spotlight"; // Certifique-se de que spotlights contém dados para os cards

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

  return (
    <div className={eventspotlight_container} id="eventspotlights">
      <div className={eventspotlight_container_body_1}>
        <Image src={aosfest} width={470} height={148} alt="aosfest" />
        <p className={eventspotlight_container_body_1_description}>
          Prepare-se para mergulhar em debates, workshops e descobertas que
          impulsionarão a inovação e o progresso na comunidade de programação de
          Angola. Junte-se a nós nessa jornada de aprendizado e colaboração.
        </p>

        <div className={eventspotlight_container_body_1_hero_1}>
          <a className={eventspotlight_container_body_1_hero_1_button_1} href="https://www.commudle.com/communities/aosc/events" >
            Comprar Ingresso <FiShoppingCart color="#F892121"/>
          </a>
          <a className={eventspotlight_container_body_1_hero_1_button_2} href="https://www.youtube.com/@angolaosc">
            Assista Online <FiYoutube color="#F892121" />
          </a>
        </div>
        
        <div className={eventspotlight_container_body_1_hero_2}>
          <div className={eventspotlight_container_body_1_hero_2_card}>
            <IoCalendarClearOutline />
            <div>
              <h2>30 de Novembro 2024</h2>
              <p>Data</p>
            </div>
          </div>
          <div
            className={eventspotlight_container_body_1_hero_2_seperator}
          ></div>
          <div className={eventspotlight_container_body_1_hero_2_card}>
            <MdOutlineExplore />
            <div>
              <h2>Academia BAI</h2>
              <p>Local</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Spotlights}>
        <SpotlightSlide spotlights={spotlights} />{" "}
        {/* Adiciona o SpotlightSlide */}
      </div>
    </div>
  );
};

export default EventSpotlight;
