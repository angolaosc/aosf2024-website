import styles from './styles.module.css';

const EventTopics = () => {
  const { topicSections, titulo, data, topicOne } = styles;

  return (
    <>
      <h1 className={titulo}>Participe nos eventos</h1>
      <section className={topicSections}>
        <div className={topicOne}>
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
