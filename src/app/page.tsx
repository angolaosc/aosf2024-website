import Header from "./components/Header";
import IntroPage from "./components/IntroPage";
import Guide from "./components/Guide";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="app_main">
      <Header />
      <IntroPage />
      <Guide />
      <Footer />
    </div>
  );
}
