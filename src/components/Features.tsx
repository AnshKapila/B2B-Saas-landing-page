import { motion, useScroll, useTransform } from "motion/react";
import { BookOpen, ShoppingCart, MessageSquareHeart, MapPin, ReceiptText } from "lucide-react";
import { useState, useRef } from "react";

const features = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "10:00 PM — Closing Time",
    desc: "You walk the fridge. Instead of texting three different suppliers, you open Gradient 365, tap 'Reorder Last Week', and head home.",
    color: "bg-brand-primary text-white",
    image: "https://picsum.photos/seed/closingcafe/600/400?blur=2"
  },
  {
    icon: <MessageSquareHeart className="w-6 h-6" />,
    title: "6:00 AM — Quick Check-in",
    desc: "A supplier informs you they're out of almond milk. They suggest Oat milk as a replacement within the same chat thread. You approve.",
    color: "bg-blue-500 text-white",
    image: "https://picsum.photos/seed/phonechat/600/400?blur=2"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "7:30 AM — Delivery Arriving",
    desc: "You get a push notification. The delivery truck is 5 minutes away. Your barista is ready to receive the goods right before the morning rush.",
    color: "bg-emerald-500 text-white",
    image: "https://picsum.photos/seed/deliverytruck/600/400?blur=2"
  },
  {
    icon: <ReceiptText className="w-6 h-6" />,
    title: "End of Month — No Panic",
    desc: "Because every order was tracked in the system, your monthly invoices are already matched and synced to your accountant.",
    color: "bg-purple-500 text-white",
    image: "https://picsum.photos/seed/accountingdesk/600/400?blur=2"
  }
];

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="features" className="py-32 bg-surface overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6"
          >
            A day in the life, <span className="font-serif italic text-brand-primary font-normal">simplified.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft-ink font-light max-w-2xl mx-auto"
          >
            We don't just give you a dashboard. We manage the entire lifecycle of your inventory so you can focus on making great coffee.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative pl-8 md:pl-16 flex flex-col gap-16 md:gap-24">
          
          {/* Scroll Progress Track */}
          <div className="absolute left-[1px] md:left-[1px] top-6 bottom-6 w-[2px] bg-black/10 rounded-full">
            <motion.div 
              className="absolute left-0 top-0 w-full bg-brand-primary origin-top z-10 rounded-full"
              style={{ scaleY: scrollYProgress }} 
            />
            <motion.div 
              className="absolute left-[1px] w-6 h-6 rounded-full bg-brand-primary border-[4px] border-white shadow-[0_0_15px_rgba(16,185,129,0.5)] -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ top: lineHeight }}
            />
          </div>

          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 md:p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="order-2 md:order-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${feat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-4">{feat.title}</h3>
                  <p className="text-soft-ink leading-relaxed font-light text-lg">{feat.desc}</p>
                </div>
                
                <div className="order-1 md:order-2 overflow-hidden rounded-[1.5rem] relative aspect-[4/3] group-hover:-translate-y-2 transition-transform duration-500 shadow-md">
                  <motion.div 
                    animate={hoveredIdx === idx ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full"
                  >
                    <img src={feat.image} alt={feat.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
