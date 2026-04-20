import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const Metric = ({ value, suffix = "", prefix = "", label, delay = 0 }: MetricProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && numberRef.current) {
      const controls = animate(0, value, {
        duration: 1.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Smooth custom easing
        onUpdate(val) {
          if (numberRef.current) {
            // Handle fractional vs int values (e.g. 99.9 vs 500)
            const formatted = value % 1 !== 0 ? val.toFixed(1) : val.toFixed(0);
            numberRef.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-2 relative group">
      <div className="text-5xl md:text-6xl font-bold text-ink mb-2">
        <span ref={numberRef}>0</span>
        <span className="opacity-0 hidden">{prefix}{value}{suffix}</span> {/* A11y & SSR fallback spacer */}
      </div>
      <div className="text-soft-ink font-semibold uppercase tracking-wider text-xs md:text-sm">
        {label}
      </div>
      
      {/* Animated subtle highlight underline */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease: "easeOut" }}
        className="h-1 w-12 bg-brand-primary rounded-full mt-4 origin-left"
      />
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-white relative z-10 border-b border-black/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <Metric value={500} suffix="+" label="Cafes Onboarded" delay={0.1} />
          <Metric value={200} suffix="+" label="Trusted Suppliers" delay={0.2} />
          <Metric value={99.9} suffix="%" label="Uptime" delay={0.3} />
          <Metric value={10} prefix="₹" suffix="M+" label="Orders Processed" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
