import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import RoleEntry from "./components/RoleEntry";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import ProductExperience from "./components/ProductExperience";
import Trust from "./components/Trust";
import FinalCTA from "./components/FinalCTA";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-brand-primary/20 selection:text-ink overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <RoleEntry />
        <ProblemSolution />
        <Features />
        <ProductExperience />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
