'use client';
import OffCanvas from '../patrocine/components/Offcanvas';
import Footer from '../shared/Footer';
import CompaniesSection from './components/companiesSection/companiesSection';
import EventSpotlight from './components/event-spotlight';
import EventDetails from './components/eventdetails/eventDetails';
import EventTopics from './components/eventTopics/EventTopics';
import Header from './components/header';
import OtherEvents from './components/other-events';
import PartnersSection from './components/partnersSection';

export default function HomePage() {
  return (
    <div className="app_main">
      <Header />
      <main>
        <EventSpotlight />
        <CompaniesSection />
        <EventDetails />
        <EventTopics />
        <OtherEvents />
        <PartnersSection />
      </main>
      <Footer />
      <OffCanvas />
    </div>
  );
}
