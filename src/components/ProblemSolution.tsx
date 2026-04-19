import { motion } from "motion/react";
import { MessageCircle, FileSpreadsheet, Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProblemSolution() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="problem" className="py-32 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
            From 6 AM supplier calls to <span className="text-brand-primary font-serif italic font-normal text-5xl md:text-6xl inline-block">peace of mind</span>
          </h2>
          <p className="text-lg text-soft-ink font-light">
            We know what the back-office of a cafe looks like. We built Gradient 365 to replace the chaos with a single, elegant source of truth.
          </p>
        </div>

        <div className="relative rounded-3xl md:rounded-[3rem] bg-white border border-black/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* The Chaos (Left / Top) */}
            <div className="p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="inline-flex px-3 py-1 rounded-full bg-red-50 text-red-600 font-medium text-xs tracking-wider uppercase mb-8">
                  The Old Way
                </div>
                <h3 className="text-3xl font-semibold mb-8 text-ink">Scattered & Stressful</h3>
                
                <div className="flex flex-col gap-4 relative">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex text-sm bg-white p-4 rounded-2xl shadow-sm border border-black/5 items-start gap-4 max-w-xs rotate-[-2deg]"
                  >
                    <div className="bg-green-50 p-2 rounded-full text-green-600 shrink-0"><MessageCircle size={18} /></div>
                    <p className="text-ink">"Hey, did you get the oat milk order? Need it by 7 AM!"</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex text-sm bg-white p-4 rounded-2xl shadow-sm border border-black/5 items-start gap-4 max-w-xs self-end rotate-[1deg]"
                  >
                    <div className="bg-blue-50 p-2 rounded-full text-blue-600 shrink-0"><FileSpreadsheet size={18} /></div>
                    <div className="flex-1">
                      <div className="h-2 w-16 bg-[#EBEBEB] rounded mb-2"></div>
                      <div className="h-2 w-full bg-red-100 rounded mb-1"></div>
                      <p className="text-red-500 font-medium text-xs mt-2">Error: Formula broken</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex text-sm bg-white p-4 rounded-2xl shadow-sm border border-black/5 items-center gap-4 max-w-xs rotate-[-1deg]"
                  >
                    <div className="bg-[#F5F5F7] p-2 rounded-full text-soft-ink shrink-0"><Phone size={18} /></div>
                    <p className="text-ink">Missed call from Supplier C</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* The Solution (Right / Bottom) */}
            <div 
              className="p-10 md:p-16 flex flex-col justify-center bg-white relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-primary/10 to-transparent opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="inline-flex px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary-dark font-medium text-xs tracking-wider uppercase mb-8">
                  Gradient 365
                </div>
                <h3 className="text-3xl font-semibold mb-8 text-ink">Unified & Beautiful</h3>
                
                <div className="flex flex-col gap-4">
                  {[
                    "One-click multi-supplier ordering",
                    "Real-time inventory tracking",
                    "Automated invoice matching",
                    "Beautiful supplier catalogues"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                      whileHover={{ x: 5, backgroundColor: "var(--color-surface)" }}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-black/5 transition-all cursor-default"
                    >
                      <motion.div 
                        animate={isHovered ? { scale: [1, 1.2, 1], color: ["#10B981", "#059669", "#10B981"] } : {}}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                        className="text-brand-primary shrink-0"
                      >
                        <CheckCircle2 size={24} />
                      </motion.div>
                      <span className="text-ink font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  className="mt-8 flex items-center gap-2 text-brand-primary font-medium hover:text-brand-primary-dark group"
                  whileHover={{ x: 5 }}
                >
                  See how it works 
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
