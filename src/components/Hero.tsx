import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
    id: 3,
    title: "Track Everything Live",
    desc: "A delivery associate loading fresh goods into a truck at dawn.",
    img: "https://picsum.photos/seed/cafedelivery/800/1000?blur=1",
    tag: "Real-time"
  },
  {
    id: 4,
    title: "Breeze Through Rushes",
    desc: "A barista confidently serving the morning line, knowing inventory is handled.",
    img: "https://picsum.photos/seed/busycafe/800/1000?blur=1",
    tag: "Peace of Mind"
  }
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[100svh] pt-32 pb-0 flex flex-col justify-between bg-white overflow-hidden">
      
      {/* Dynamic Video Background Layer */}
      <div className="absolute inset-0 w-full h-[80%] z-0 pointer-events-none origin-top overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105"
          src="/background.mp4" 
        />
        {/* Fallback gradient in case video path is missing */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-primary-light/5 -z-10" />
        {/* Soft fade out to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      {/* Top Header Section */}
      <div className="container mx-auto px-6 mb-12 flex flex-col gap-8 relative z-10 w-full shrink-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-sm font-medium text-ink mb-8 shadow-sm mix-blend-hard-light"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            Meet Gradient 365 Cafe Portal
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[40px] md:text-[48px] lg:text-[56px] font-bold tracking-[-0.03em] text-ink/90 leading-[1.1] mb-6 mix-blend-multiply"
          >
            Run your cafe,<br />
            <span className="font-serif italic text-brand-primary/90 font-normal mt-1 inline-block">not your spreadsheets.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl text-soft-ink/90 font-light leading-relaxed mb-8 max-w-xl mix-blend-multiply"
          >
            Discover suppliers, negotiate pricing, and manage all your inventory in one beautiful platform built for the real world.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className=""
        >
          <a 
            href="#role-entry"
            className="group inline-flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-5 rounded-full text-lg font-medium tracking-tight shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:bg-brand-primary-dark transition-all w-full sm:w-auto"
          >
            Start Ordering Smarter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 border border-white/20 bg-white/10 rounded-full p-1 box-content transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Interactive Hero Cards Strip */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full flex-1 flex flex-col md:flex-row min-h-[40vh] md:min-h-[50vh] xl:min-h-[60vh] mt-auto"
      >
        {useCases.map((card, idx) => {
          const isAlternate = idx === 1 || idx === 3;
          
          return (
          <motion.div 
            key={card.id}
            variants={itemVariants}
            className={`relative group flex-1 w-full h-[30vh] md:h-auto overflow-hidden border-t md:border-t-0 md:border-l border-black/10 cursor-pointer ${isAlternate ? 'bg-ink' : ''}`}
          >
            {/* Background Image */}
            <img 
              src={card.img} 
              alt={card.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.05] z-0" 
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            {isAlternate ? (
              <div className="absolute inset-0 bg-ink group-hover:bg-brand-primary/85 transition-colors duration-700 ease-out z-10" />
            ) : (
              <>
                <div className="absolute inset-0 bg-ink/60 transition-colors duration-700 ease-out group-hover:bg-ink/30 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              </>
            )}
            
            {/* Tag (Always visible, slightly fades on hover) */}
            <div className={`absolute top-6 left-6 px-3 py-1 backdrop-blur-md border rounded-full text-xs font-semibold tracking-wider uppercase opacity-90 group-hover:opacity-100 transition-colors duration-700 z-20 ${isAlternate ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary group-hover:border-ink/20 group-hover:text-ink' : 'bg-white/20 border-white/10 text-white'}`}>
              {card.tag}
            </div>

            {/* Hover Interaction Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
              <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-2">
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-700 ${isAlternate ? 'text-brand-primary group-hover:text-ink' : 'text-white'}`}>{card.title}</h3>
              </div>
              <div className="h-0 md:h-auto md:max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-[100px] group-hover:opacity-100 mt-0 group-hover:mt-3">
                <p className={`text-sm md:text-base leading-relaxed drop-shadow-md transition-colors duration-700 ${isAlternate ? 'text-brand-primary/90 group-hover:text-ink/90' : 'text-white/90'}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        )})}
      </motion.div>

    </section>
  );
}
