'use client';
import OffCanvas from '../patrocine/components/Offcanvas';
import Footer from '../shared/Footer';
import { EventClock } from './components/event-clock/EventClock';
import EventSpotlight from './components/event-spotlight';
import EventDetails from './components/eventdetails/eventDetails';
import { EventKeynotes } from './components/eventKeynotes/EventKeynotes';
import EventTopics from './components/eventTopics/EventTopics';
import Header from './components/header';
import PartnersSection from './components/partnersSection';

export default function HomePage() {
  return (
    <div className="app_main">
      <Header />
      
      <main>
        <EventSpotlight /><EventKeynotes />
        {/*<EventClock />*/}
        <EventDetails />
        
        <EventTopics />
        <PartnersSection />
      </main>
      <Footer />
      <OffCanvas />
    </div>
  );
}
