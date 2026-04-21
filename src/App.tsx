import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import BentoFeatures from "./components/BentoFeatures";
import RoleEntry from "./components/RoleEntry";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import ProductExperience from "./components/ProductExperience";
import DemoBanner from "./components/DemoBanner";
import Trust from "./components/Trust";
import FinalCTA from "./components/FinalCTA";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-brand-primary/20 selection:text-ink overflow-hidden relative">
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <BentoFeatures />
        <RoleEntry />
        <ProblemSolution />
        <Features />
        <ProductExperience />
        <DemoBanner />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
