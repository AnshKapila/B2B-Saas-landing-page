import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";

import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden isolate pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: ["-10%", "10%", "-10%"],
            y: ["10%", "-10%", "10%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-brand-primary/20 via-brand-primary-light/10 to-transparent blur-3xl mix-blend-multiply"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: ["10%", "-10%", "10%"],
            y: ["-10%", "10%", "-10%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-10 right-1/4 w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-brand-primary-light/20 to-transparent blur-3xl mix-blend-multiply"
        />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-black/5 backdrop-blur-sm text-sm font-medium text-ink mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
          Meet Gradient 365 Cafe Portal
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] text-ink max-w-5xl leading-[1.05]"
        >
          Run your cafe, <br className="hidden md:block"/>
          <span className="font-serif italic text-brand-primary font-normal mt-2 md:mt-0 inline-block">not your spreadsheets.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-8 text-xl text-soft-ink max-w-2xl font-light"
        >
          Discover suppliers, negotiate pricing, and manage all your inventory in one beautiful platform designed specifically for independent cafe owners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium tracking-tight shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] hover:bg-brand-primary-dark transition-all"
          >
            Start Ordering Smarter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <button className="px-8 py-4 rounded-full text-lg font-medium text-soft-ink hover:text-ink transition-colors">
            Book a Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="relative z-10 mt-20 w-full max-w-6xl mx-auto px-4 sm:px-6 h-[400px] md:h-[600px] perspective-1000"
      >
        <motion.div 
          animate={{ rotateX: [10, 5, 10], rotateY: [-5, 5, -5] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full relative"
        >
           <DashboardMockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
