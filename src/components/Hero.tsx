import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import InteractiveGlobe from "./InteractiveGlobe";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[90svh] pt-32 pb-24 flex flex-col justify-center bg-white overflow-hidden">
      
      {/* Top Header Section */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full shrink-0">
        <div className="max-w-2xl lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm font-medium text-brand-secondary mb-8 shadow-sm mix-blend-hard-light"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
            Meet Gradient 365 Cafe Portal
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[40px] md:text-[48px] lg:text-[56px] font-bold tracking-[-0.03em] text-ink/90 leading-[1.1] mb-6 mix-blend-multiply"
          >
            Run your cafe,<br />
            <span className="font-serif italic text-brand-primary/90 font-normal mt-1 inline-block">not your spreadsheets.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl text-soft-ink/90 font-light leading-relaxed mb-8 max-w-xl mix-blend-multiply"
          >
            Discover suppliers, negotiate pricing, and manage all your inventory in one beautiful platform built for the real world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full sm:w-auto"
          >
            <a 
              href="#role-entry"
              className="group inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-5 rounded-full text-lg font-medium tracking-tight shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:bg-brand-primary-dark transition-all w-full sm:w-auto"
            >
              Start Ordering Smarter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 border border-white/20 bg-white/10 rounded-full p-1 box-content transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-[500px] relative z-0">
          <InteractiveGlobe />
        </div>
      </div>
    </section>
  );
}
