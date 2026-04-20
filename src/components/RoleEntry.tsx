import { motion } from "motion/react";
import { Store, Truck, ArrowRight } from "lucide-react";

export default function RoleEntry() {
  return (
    <section id="role-entry" className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-4"
          >
            How do you fit into the picture?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-soft-ink font-light max-w-2xl mx-auto"
          >
            Select your role to see how Gradient 365 simplifies your daily operations, whether you're behind the espresso machine or managing the warehouse.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cafe Owner Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[2.5rem] bg-surface border border-black/5 p-8 md:p-12 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-primary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Store size={32} />
              </div>
              <h3 className="text-3xl font-bold text-ink mb-4 group-hover:text-brand-primary transition-colors">I run a Cafe</h3>
              <p className="text-soft-ink leading-relaxed font-light mb-8 max-w-sm">
                I want to order from all my suppliers in one place, track deliveries, and stop managing invoices on WhatsApp and spreadsheets.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 text-brand-primary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              Continue as Cafe Owner <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>

            <img src="https://picsum.photos/seed/barista/800/600?blur=4" alt="Barista" className="absolute bottom-0 right-0 w-3/4 max-w-sm translate-y-1/3 translate-x-1/4 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-multiply pointer-events-none rounded-tl-[100px]" referrerPolicy="no-referrer" />
          </motion.div>

          {/* Supplier Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[2.5rem] bg-surface border border-black/5 p-8 md:p-12 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-secondary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-brand-secondary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Truck size={32} />
              </div>
              <h3 className="text-3xl font-bold text-ink mb-4 group-hover:text-brand-secondary transition-colors">I am a Supplier</h3>
              <p className="text-soft-ink leading-relaxed font-light mb-8 max-w-sm">
                I want a digital storefront, automated incoming orders, and an easier way to negotiate with and bill all my cafe clients.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 text-brand-secondary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              Continue as Supplier <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>

            <img src="https://picsum.photos/seed/warehouse/800/600?blur=4" alt="Warehouse" className="absolute bottom-0 right-0 w-3/4 max-w-sm translate-y-1/3 translate-x-1/4 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-multiply pointer-events-none rounded-tl-[100px]" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
