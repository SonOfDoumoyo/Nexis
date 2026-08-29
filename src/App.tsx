import HeroSection from "./Pages/Hero"
import ProblemSection from "./Pages/Problems"
import QuoteSection from "./Pages/Quote"
import AimSection from "./Pages/Aim"
import Philosophy from "./Pages/philosphy"
import About from "./Pages/about"

export default function App() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <QuoteSection />
      <ProblemSection />
      <AimSection />
      <About />
      <Philosophy />
    </div>
  )
}