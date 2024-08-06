import Footer from '../shared/Footer';
import Guide from './components/Guide';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import OffCanvas from './components/Offcanvas';

const PatrocinePage = () => {
  return (
    <div className="app_main">
      <Header />
      <main>
        <IntroPage />
        <Guide />
      </main>
      <Footer />
      <OffCanvas />
    </div>
  );
};

export default PatrocinePage;
