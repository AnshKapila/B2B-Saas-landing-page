import { motion } from "motion/react";
import { ArrowRight, Layers } from "lucide-react";

export default function DemoBanner() {
  return (
    <section className="py-8 px-6 bg-white relative z-20">
      <div className="container mx-auto max-w-[1400px]">
        <div className="relative rounded-[2rem] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
          
          {/* Background Image Setup */}
          {/* Using a high-quality stock placeholder that matches the provided Cafe Owner / Barista checking inventory visual */}
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop" 
            alt="Cafe owner checking inventory" 
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            referrerPolicy="no-referrer"
          />

          {/* Deep Dark Overlay for Text Legibility (Mimicking the reference style) */}
          <div className="absolute inset-0 bg-ink/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent z-10" />
          
          {/* Content */}
          <div className="relative z-20 w-full px-8 md:px-16 lg:px-24 flex flex-col justify-between h-full py-16">
            
            {/* Top Logo Area inside the Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-16 md:mb-24"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-ink shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">Gradient 365</span>
            </motion.div>

            {/* Main Typographical CTA */}
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-8"
              >
                The complete operating system for modern cafes
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a 
                  href="#demo"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-ink px-8 py-4 rounded-full text-lg font-medium tracking-tight hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Book a Demo 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-brand-secondary" />
                </a>
              </motion.div>
            </div>

            {/* Optional Bottom Right Context Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-16 right-8 md:right-16 lg:right-24 text-right hidden sm:block"
            >
              <div className="text-white/80 font-medium text-lg leading-snug">
                Used closely by top <br /> distributors globally.
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
