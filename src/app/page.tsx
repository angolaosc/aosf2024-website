import Header from './components/Header';
import IntroPage from './components/IntroPage';
import Guide from './components/Guide';
import Footer from './components/Footer';
import OffCanvas from './components/Offcanvas';

export default function Home() {
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
}
