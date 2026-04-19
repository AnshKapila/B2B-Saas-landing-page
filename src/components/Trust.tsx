import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-brand-primary-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6">
            <Heart size={16} className="fill-brand-primary text-brand-primary" /> Made for Cafe Owners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6 font-serif italic">
            "Finally, someone understands hospitality."
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-14 rounded-3xl md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/5 relative"
          >
            <Quote className="absolute top-10 left-10 text-surface w-24 h-24 -z-10" />
            <div className="flex gap-1 text-brand-primary-light mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-brand-primary-light" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-light text-ink mb-10 leading-relaxed font-serif italic">
              “We used to spend 2 hours every night tallying up orders on WhatsApp and sending emails. Now it takes 5 minutes. Gradient 365 essentially gave us our evenings back.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#F0F0F0] overflow-hidden">
                <img src="https://picsum.photos/seed/barista4/200/200" alt="Sarah J." className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-ink">Sarah Jenkins</h4>
                <p className="text-soft-ink text-sm">Owner, The Daily Grind</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { text: "Say goodbye to 6 AM apology calls because you missed a milk order.", author: "Mike T., Two Stones Coffee" },
              { text: "It's literally foolproof. Even my newest staff can place the bakery order correctly.", author: "Elena R., Morning View" },
            ].map((quote, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-black/5"
              >
                <p className="text-lg text-ink font-serif italic mb-4">"{quote.text}"</p>
                <p className="text-sm font-medium text-soft-ink">— {quote.author}</p>
              </motion.div>
            ))}

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="mt-4"
            >
              <p className="text-soft-ink font-medium">Join 500+ independent cafes ordering smarter.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
