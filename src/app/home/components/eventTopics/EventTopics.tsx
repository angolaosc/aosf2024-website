import Link from "next/link";
import styles from "./styles.module.css";
import { i18n } from "@/translate/i18n";
import SpotlightSlide from "../spotlight-card/spotlight_card";
import spotlights from "../event-spotlight/spotlight";

const EventTopics = () => {
  const { topicSections, titulo, data, cardsSection, buttonSupport } = styles;

  return (
    <section className={topicSections}>
      <h1>Participe nos eventos</h1>
      <div>
        <h4 id={titulo}>Inovação e Tendências Tecnológicas</h4>
        <h5 id={data}>Quinta-feira, 24 de Novembro - 2024</h5>
      </div>

      <SpotlightSlide spotlights={spotlights} />{" "}
      <Link href="/form" className={buttonSupport}>
        {i18n.t("nav.button")}
      </Link>
    </section>
  );
};

export default EventTopics;
