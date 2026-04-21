import { motion } from "motion/react";

const useCases = [
  {
    id: 1,
    title: "Order in Seconds",
    desc: "A cafe owner placing wholesale orders effortlessly from their phone.",
    img: "https://picsum.photos/seed/cafeownerindia/800/1000?blur=1",
    tag: "For Cafes"
  },
  {
    id: 2,
    title: "Never Let Stock Out",
    desc: "A warehouse stacked with provisions, ready for the morning dispatch.",
    img: "https://picsum.photos/seed/indianwarehouse/800/1000?blur=1",
    tag: "For Suppliers"
  },
  {
    id: 4,
    title: "Breeze Through Rushes",
    desc: "A barista confidently serving the morning line, knowing inventory is handled.",
    img: "https://picsum.photos/seed/busycafe/800/1000?blur=1",
    tag: "Peace of Mind"
  },
  {
    id: 3,
    title: "Track Everything Live",
    desc: "A delivery associate loading fresh goods into a truck at dawn.",
    img: "https://picsum.photos/seed/cafedelivery/800/1000?blur=1",
    tag: "Real-time"
  }
];

export default function BentoFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-24 bg-surface relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-4">
            Operations Built for Reality
          </h2>
          <p className="text-lg text-soft-ink font-light max-w-2xl mx-auto">
            See how Gradient 365 transforms chaos into a structured orchestra.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px] md:auto-rows-[400px]"
        >
          {useCases.map((card, idx) => {
            // Bento Grid spanning logic:
            // Item 0: Spans 2 cols on md screens (top left wide)
            // Item 1: Spans 1 col
            // Item 2: Spans 1 col
            // Item 3: Spans 2 cols on md screens (bottom right wide)
            const isWide = idx === 0 || idx === 3;
            // Alternate visual styles (no image, solid color)
            const isAlternate = idx === 1 || idx === 2;
            // Both alternate cards will be ink (black in brand guidelines)
            const bgColor = isAlternate ? "bg-ink" : "bg-white";

            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className={`relative group rounded-2xl overflow-hidden border border-black/5 cursor-pointer shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-end ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                } ${bgColor}`}
              >
                {/* Background Image / Solid Colors */}
                {!isAlternate && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.05] z-0"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Overlay */}
                {!isAlternate && (
                  <>
                    <div className="absolute inset-0 bg-ink/60 opacity-20 group-hover:opacity-80 transition-opacity duration-700 ease-out z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  </>
                )}

                {/* Tag */}
                <div
                  className={`absolute top-6 left-6 px-3 py-1 backdrop-blur-md border rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-700 z-20 ${
                    isAlternate
                      ? "bg-brand-secondary/20 border-brand-secondary/30 text-white group-hover:bg-brand-secondary/10 group-hover:border-brand-secondary/20"
                      : "bg-white/20 border-white/10 text-white opacity-90"
                  }`}
                >
                  {card.tag}
                </div>

                {/* Hover Interaction Content */}
                <div className="relative p-8 z-20 flex flex-col justify-end h-full mt-auto">
                  <div className={`transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${!isAlternate && 'group-hover:-translate-y-2'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-700">
                      {card.title}
                    </h3>
                  </div>
                  <div className={`h-0 opacity-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-auto group-hover:max-h-[100px] group-hover:opacity-100 mt-0 ${!isAlternate ? 'group-hover:mt-3' : 'group-hover:mt-3'}`}>
                    <p className="text-sm md:text-base leading-relaxed drop-shadow-md text-white/90 transition-colors duration-700">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
