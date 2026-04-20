import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-brand-primary-light/5 to-white opacity-40 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl p-10 md:p-20 rounded-[3rem] border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-ink mb-8"
          >
            Ready to get your <br/>
            <span className="font-serif italic text-brand-primary font-normal inline-block mt-2">evenings back?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-soft-ink mb-12 max-w-2xl mx-auto font-light"
          >
            Join hundreds of forward-thinking cafe owners who have simplified their supply runs, lowered their COGS, and ditched the clunky spreadsheets.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.a 
              href="#role-entry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary text-white px-10 py-5 rounded-full text-xl font-medium tracking-tight shadow-xl hover:bg-brand-primary-dark transition-all group"
            >
              Get Started
            </motion.a>
            <button className="text-soft-ink font-medium hover:text-ink px-6 py-4 transition-colors">
              Talk to Sales
            </button>
          </motion.div>
          <p className="mt-8 text-sm text-[#A1A1AA]">No credit card required. Setup takes 2 minutes.</p>
        </div>
      </div>
    </section>
  );
}
