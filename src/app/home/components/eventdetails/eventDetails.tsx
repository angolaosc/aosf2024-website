import EventDetailsCardsSlide from './card';
import data from './data';
import styles from './styles.module.css';

const EventDetails = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <EventDetailsCardsSlide cards={data} />
    </div>
  );
};

export default EventDetails;
