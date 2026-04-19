import { motion } from "motion/react";
import { BookOpen, ShoppingCart, MessageSquareHeart, MapPin, ReceiptText } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Smart Catalogue",
    desc: "Discover premium suppliers with visual, easy-to-browse menus instead of dense PDFs.",
    color: "bg-brand-primary/10 text-brand-primary",
    bg: "from-brand-primary/5 to-white"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Multi-supplier Cart",
    desc: "Order coffee, milk, pastries, and packaging from different vendors in a single checkout.",
    color: "bg-blue-100 text-blue-600",
    bg: "from-blue-50 to-white"
  },
  {
    icon: <MessageSquareHeart className="w-8 h-8" />,
    title: "Real-time Negotiation",
    desc: "Chat directly with suppliers to discuss pricing, bulk discounts, and custom orders.",
    color: "bg-pink-100 text-pink-600",
    bg: "from-pink-50 to-white"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Order Tracking",
    desc: "Know exactly when your fresh deliveries are arriving so you can staff accordingly.",
    color: "bg-emerald-100 text-emerald-600",
    bg: "from-emerald-50 to-white"
  },
  {
    icon: <ReceiptText className="w-8 h-8" />,
    title: "Billing Dashboard",
    desc: "Auto-reconcile invoices and see your total COGS in one beautiful, simple chart.",
    color: "bg-brand-primary-light/10 text-brand-primary",
    bg: "from-brand-primary-light/5 to-white"
  }
];

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center md:text-left md:flex justify-between items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6"
            >
              Everything you need,<br />nothing you don't.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-soft-ink font-light"
            >
              We stripped away the clunky ERP features and kept exactly what independent cafes need to thrive.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative p-8 rounded-2xl border border-black/5 bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Dynamic Background Gradient */}
              <motion.div 
                animate={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-gradient-to-br ${feat.bg} opacity-0 z-0`} 
              />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <motion.div 
                    animate={hoveredIdx === idx ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`p-4 rounded-2xl ${feat.color}`}
                  >
                    {feat.icon}
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-ink mb-3">{feat.title}</h3>
                  <p className="text-soft-ink leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>

              {/* Decorative corner element */}
              <motion.div 
                animate={{ 
                  scale: hoveredIdx === idx ? 1 : 0,
                  opacity: hoveredIdx === idx ? 0.05 : 0
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-current text-ink origin-center pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
