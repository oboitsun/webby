import { useState, useEffect } from "react";
import Benefits from "./components/Benefits/Benefits";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import FreeTrialPopup from "./components/FreeTrialPopup/FreeTrialPopup";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import PlansSection from "./components/PlansSection/PlansSection";
import Reviews from "./components/Reviews/Reviews";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  const handleScreenWidth = (e) => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenWidth);
    setWidth(window.innerWidth);
    return () => {
      window.addEventListener("resize", handleScreenWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        scrolled={scrolled}
      />
      <HeroSection />
      <Benefits />
      <FeaturesSection />
      <Reviews />
      <PlansSection />
      <Footer />
      {/* <FreeTrialPopup /> */}
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="text-xs text-center py-6 leading-none">
        © Webby 2022. All Rights Reserved
      </div>
    </div>
  );
}

export default App;
