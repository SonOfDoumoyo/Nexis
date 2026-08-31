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
  <div
    className="
      relative
      w-full
      min-h-screen
      overflow-hidden
      bg-cover
      bg-center
      bg-no-repeat
    "
    style={{
      backgroundImage: `url(${
        isMobile ? NexisMobileBackground : NexisBackground
      })`,
    }}
  >
    <main
      className="
        absolute
        inset-0
        w-full
        h-full
        overflow-y-auto
        overflow-x-hidden
        flex
        flex-col
        gap-16
        px-5
        py-7
        sm:px-7
        lg:px-10
      "
    >
      <section className="w-full shrink-0">
        <HeroSection />
      </section>

      <section className="w-full shrink-0">
        <ServicesSection />
      </section>

      <section className="w-full shrink-0">
        <PhilosophySection />
      </section>

      <section className="w-full shrink-0">
        <AboutSection />
      </section>

      <section className="w-full shrink-0">
        <ContactSection />
      </section>

      <footer className="w-full shrink-0">
        <Footer />
      </footer>
    </main>
  </div>
);
}