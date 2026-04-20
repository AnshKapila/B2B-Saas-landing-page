import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Store physics state outside React render cycle
  const stateRef = useRef(Array(5).fill(0).map(() => ({ x: -9999, y: -9999 })));
  const activeRef = useRef(false);
  const targetRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const dots = dotsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!dots.length) return;

    const state = stateRef.current;
    let animationFrameId: number;

    function onMove(e: MouseEvent) {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!activeRef.current) {
        activeRef.current = true;
        dots.forEach((d) => { d.style.opacity = '1'; });
      }
    }

    function onLeave() {
      activeRef.current = false;
      dots.forEach((d) => { d.style.opacity = '0'; });
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });

    function tick() {
      let x = targetRef.current.x;
      let y = targetRef.current.y;

      for (let i = 0; i < dots.length; i++) {
        const p = state[i];
        const ease = 0.22 - i * 0.03;

        p.x += (x - p.x) * Math.max(0.08, ease);
        p.y += (y - p.y) * Math.max(0.08, ease);

        const d = dots[i];
        if (d) {
          d.style.transform = `translate(${p.x - 8}px, ${p.y - 8}px)`;
        }

        x = p.x;
        y = p.y;
      }

      animationFrameId = requestAnimationFrame(tick);
    }
    
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // RGBA values for brand secondary (Vibrant Red)
  const trailingVisuals = [
    { op: 0.95, shadowOp: 0.35, blur: 18 },
    { op: 0.70, shadowOp: 0.24, blur: 16 },
    { op: 0.55, shadowOp: 0.22, blur: 16 },
    { op: 0.35, shadowOp: 0.14, blur: 14 },
    { op: 0.15, shadowOp: 0.10, blur: 10 }
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      {trailingVisuals.map((visual, i) => (
        <div
          key={i}
          ref={(el) => { dotsRef.current[i] = el; }}
          className="absolute w-4 h-4 rounded-full opacity-0 will-change-transform"
          style={{
            background: `rgba(209, 71, 71, ${visual.op})`, // using hsl(360, 60%, 55%) Red
            boxShadow: `rgba(209, 71, 71, ${visual.shadowOp}) 0px 0px ${visual.blur}px`,
            transition: 'opacity 250ms ease',
            transform: 'translate(-9999px, -9999px)'
          }}
        />
      ))}
    </div>
  );
}
