import { motion } from "motion/react";
import { Coffee } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-white/80 border-b border-black/5"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-primary-light text-white shadow-sm">
          <Coffee size={16} strokeWidth={2.5} />
        </div>
        <span className="font-bold text-lg tracking-tight text-ink">Gradient 365</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-soft-ink">
        <a href="#product" className="hover:text-ink transition-colors">Product</a>
        <a href="#features" className="hover:text-ink transition-colors">Features</a>
        <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
        <a href="#about" className="hover:text-ink transition-colors">About</a>
      </div>
      <div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-tight hover:bg-brand-primary-dark transition-colors shadow-sm"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
