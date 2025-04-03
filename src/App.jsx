import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
// import Pop from "./components/Pop";
import Contact from "./components/Contact";
// import As from "./components/As";
import Timeline from "./components/Timeline";
import Services from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Count from "./components/Count/Count"
import Faq from "./components/FAQ"
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Startup Weekend 2025 - Delhi"; // Set browser tab title
  }, []);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Pop /> */}
        <Collaboration />
        {/* <As /> */}
        <Sponsors />
        <Benefits />
        <Services />
        <Timeline />
        <Count />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
