import { motion } from "motion/react";
import { Search, Plus, ListFilter, CreditCard, ChevronDown } from "lucide-react";

import DashboardMockup from "./DashboardMockup";

export default function ProductExperience() {
  return (
    <section id="experience" className="py-32 bg-surface text-ink overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Feels like magic, <br/>
            <span className="text-brand-primary font-serif italic font-normal text-5xl md:text-6xl inline-block mt-2">works like a charm.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft-ink font-light"
          >
            You don't need a manual to use Gradient 365. It's designed to be instantly familiar, blistering fast, and a joy to use everyday.
          </motion.p>
        </div>

        {/* Interactive UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto h-[700px]"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
