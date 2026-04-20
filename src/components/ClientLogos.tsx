import { Building2, Coffee, Star, Store, MapPin, BadgeCheck, Utensils } from "lucide-react";

const logos = [
  { name: "Daily Grind Coffee Co.", icon: <Coffee size={24} />, font: "font-serif italic" },
  { name: "Mumbai Dairy Direct", icon: <Store size={24} />, font: "font-sans font-bold tracking-tighter" },
  { name: "Bean & Leaf Roasters", icon: <Star size={24} />, font: "font-serif tracking-widest" },
  { name: "City Square Suppliers", icon: <Building2 size={24} />, font: "font-sans font-black uppercase" },
  { name: "The Good Cup", icon: <Utensils size={24} />, font: "font-serif font-semibold" },
  { name: "Local Bakehouse", icon: <BadgeCheck size={24} />, font: "font-sans font-bold" },
  { name: "Express Provisions", icon: <MapPin size={24} />, font: "font-sans tracking-wide uppercase text-sm" },
  { name: "Artisan Roasts", icon: <Coffee size={24} />, font: "font-serif italic font-light" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-surface overflow-hidden relative">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-10 text-sm font-semibold tracking-wider uppercase text-soft-ink">
        Trusted by local staples & scaling franchises
      </div>

      <div className="marquee-container group flex w-max">
        {/* We duplicate the inner track to create a seamless infinite scroll loop */}
        <div className="flex animate-marquee gap-16 px-8 items-center cursor-default">
          {logos.map((logo, idx) => (
            <div key={`set1-${idx}`} className="logo-item flex items-center gap-3 text-ink">
              <span className="opacity-80">{logo.icon}</span>
              <span className={`text-xl md:text-2xl ${logo.font}`}>{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee gap-16 px-8 items-center cursor-default" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div key={`set2-${idx}`} className="logo-item flex items-center gap-3 text-ink">
              <span className="opacity-80">{logo.icon}</span>
              <span className={`text-xl md:text-2xl ${logo.font}`}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
