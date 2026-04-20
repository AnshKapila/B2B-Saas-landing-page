import { ReactNode } from "react";

const logos: { component: ReactNode }[] = [
  {
    component: (
      <div className="flex flex-col items-center justify-center -space-y-1 h-[48px] select-none">
        <svg viewBox="0 0 94 82" className="h-[24px] mb-1">
          <path fill="#FFC72C" d="M84.1 6.8c-2.3 0-6.1 1.1-10.4 4.7-6.2 5.1-13.6 15.1-20.2 30.6-2.5 5.9-4.7 12.3-6.4 18.5-1.9-6.3-4.1-12.7-6.7-18.6C33.8 26.6 26.5 16.6 20.3 11.5 16 7.9 12.2 6.8 9.9 6.8 4 6.8 0 11.6 0 18.2c0 2.2.6 4.9 1.8 8l10.9 44h15.2l-6.8-29c-1.3-5.4-1.6-9-1.2-11.2.7-3.8 3.5-5.7 7.2-5.7s6.8 1.9 9.3 6.3c3.4 6 7 16.9 10 30l4.3 18.8 3.2-11.1c2-6.8 4.6-14.3 7-20.7 2.1-5.7 4.2-10.8 6-14.9 3.5-8.1 7.2-12.7 10.5-12.7 3.5 0 6.6 1.9 7.2 5.7.4 2.2.1 5.8-1.2 11.2l-6.8 29h15.2l10.9-44c1.2-3.1 1.8-5.8 1.8-8 0-6.6-4-11.4-9.9-11.4" />
        </svg>
        <span className="text-[#DA291C] font-black text-[20px] tracking-tighter" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          McDonald's<sup className="text-[0.4em] font-bold">&reg;</sup>
        </span>
      </div>
    )
  },
  {
    component: (
      <div className="flex items-center justify-center text-[#F26722] font-black text-[34px] tracking-tight h-[48px] select-none" style={{ fontFamily: 'Impact, sans-serif', transform: 'scaleY(1.1)' }}>
        S<span className="font-normal text-[0.8em] mx-[1.5px]">[#]</span>CIAL
      </div>
    )
  },
  {
    component: (
      <div className="flex flex-col items-start justify-center font-black text-[#E62B28] uppercase leading-[0.85] h-[48px] select-none" style={{ fontFamily: 'Impact, sans-serif', transform: 'scaleY(1.05)' }}>
        <span className="text-[15px] tracking-[0.02em]">COFFEE</span>
        <span className="text-[28px] tracking-tight">DAY</span>
      </div>
    )
  },
  {
    component: (
      <div className="flex items-center justify-center text-[#D05C5E] font-black text-[34px] tracking-widest uppercase h-[48px] select-none" style={{ fontFamily: '"Arial Rounded MT Bold", Quicksand, sans-serif' }}>
        DIGGIN
      </div>
    )
  }
];

const filledLogos = [...logos, ...logos, ...logos, ...logos];

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
        <div className="flex animate-marquee gap-24 px-12 items-center cursor-default">
          {filledLogos.map((logo, idx) => (
            <div key={`set1-${idx}`} className="logo-item flex items-center justify-center min-w-[140px]">
              {logo.component}
            </div>
          ))}
        </div>
        <div className="flex animate-marquee gap-24 px-12 items-center cursor-default" aria-hidden="true">
          {filledLogos.map((logo, idx) => (
            <div key={`set2-${idx}`} className="logo-item flex items-center justify-center min-w-[140px]">
              {logo.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
