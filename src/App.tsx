// import HeroSection from "./Pages/Hero"
// import ProblemSection from "./Pages/Problems"
// import QuoteSection from "./Pages/Quote"
// import AimSection from "./Pages/Aim"
// import Philosophy from "./Pages/philosphy"
// import About from "./Pages/about"
import { useIsMobile } from "./Hooks"

import NexisBackground from "./assets/nexis_new/background_2.png"
import NexisMobileBackground from "./assets/nexis_new/mobile_background.png"

import HeroSection from "./page/hero";
import ServicesSection from "./page/services";
import PhilosophySection from "./page/philosophy";
import AboutSection from "./page/about";
import ContactSection from "./page/contact";
import Footer from "./page/footer";

export default function App() {
  const isMobile = useIsMobile()

  return (
    <div className="overflow-hidden relative h-screen min-w-[400px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${isMobile == false ? NexisBackground : NexisMobileBackground})`}}>
      {/* <div className="max-h-fit min-h-fit h-full w-full overflow-hidden">
        <img src={`${isMobile == false ? NexisBackground : NexisMobileBackground}`} alt="" className="h-full w-full"/>
      </div> */}
      <div className="absolute overflow-y-scroll overflow-x-hidden flex flex-col inset-0 p-7 gap-10">
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        <AboutSection />
        <ContactSection />
        <Footer/>
      </div>
    </div>
  )
}