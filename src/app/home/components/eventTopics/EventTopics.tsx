import Link from 'next/link';
import styles from './styles.module.css';
import { i18n } from '@/translate/i18n';
import SpotlightSlide from '../spotlight-card/spotlight_card';
import spotlights from '../event-spotlight/spotlight';

const EventTopics = () => {
  const { topicSections, titulo, data, cardsSection, buttonSupport, topicOne } =
    styles;

  return (
    <>
      <h1 className={styles.titulo}>Participe nos eventos</h1>
      <section className={styles.topicSections}>
        <div className={styles.topicOne}>
          <div>
            <h4 id={titulo}>Inovação e Tendências Tecnológicas</h4>
            <h5 id={data}>Quinta-feira, 24 de Novembro - 2024</h5>
          </div>
        </div>
        <div className="topicOne">
          <div>
            <h4 id={titulo}>Inovação e Tendências Tecnológicas</h4>
            <h5 id={data}>Quinta-feira, 24 de Novembro - 2024</h5>
          </div>
        </div>
        <div className="topicOne">
          <div>
            <h4 id={titulo}>Inovação e Tendências Tecnológicas</h4>
            <h5 id={data}>Quinta-feira, 24 de Novembro - 2024</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventTopics;
