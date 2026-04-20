import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { MessageSquare, Bot, Sparkles, Heart, Coffee } from "lucide-react";

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arenaRef = useRef<HTMLDivElement>(null);
  
  const centerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const arena = arenaRef.current;
    if (!arena) return;

    const center = centerRef.current;
    const pills = pillRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!pills.length) return;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = pills.map((el) => ({
      el,
      x: 0, y: 0,
      vx: 0, vy: 0,
      w: 0, h: 0,
      r: 0
    }));

    function rand(min: number, max: number) { return min + Math.random() * (max - min); }

    function measure() {
      if (!arena) return null;
      const rect = arena.getBoundingClientRect();
      const aw = rect.width;
      const ah = rect.height;

      items.forEach((it) => {
        const pr = it.el.getBoundingClientRect();
        it.w = pr.width;
        it.h = pr.height;
        it.r = Math.max(it.w, it.h) / 2;
      });

      let centerObstacle = null;
      if (center) {
        const cr = center.getBoundingClientRect();
        const ar = arena.getBoundingClientRect();
        centerObstacle = {
          x: (cr.left - ar.left) + cr.width / 2,
          y: (cr.top - ar.top) + cr.height / 2,
          r: Math.max(cr.width, cr.height) / 2 + 10
        };
      }

      items.forEach((it) => {
        const speed = prefersReduced ? 0 : rand(0.9, 1.3);
        const angle = rand(0, Math.PI * 2);
        it.vx = Math.cos(angle) * speed;
        it.vy = Math.sin(angle) * speed;

        const pad = Math.max(12, it.r * 0.6);
        const minX = pad;
        const maxX = Math.max(pad, aw - pad);
        const minY = pad;
        const maxY = Math.max(pad, ah - pad);

        it.x = rand(minX, maxX);
        it.y = rand(minY, maxY);

        if (centerObstacle) {
          const dx = it.x - centerObstacle.x;
          const dy = it.y - centerObstacle.y;
          const d = Math.hypot(dx, dy) || 1;
          const minD = it.r + centerObstacle.r;
          if (d < minD) {
            const k = (minD - d) + 6;
            it.x += (dx / d) * k;
            it.y += (dy / d) * k;
          }
        }

        it.x = Math.min(maxX, Math.max(minX, it.x));
        it.y = Math.min(maxY, Math.max(minY, it.y));
        it.el.style.transform = `translate3d(${it.x - it.w / 2}px, ${it.y - it.h / 2}px, 0)`;
      });

      return { aw, ah, centerObstacle };
    }

    let dims = measure();
    
    function handleResize() {
      dims = measure();
    }
    window.addEventListener('resize', handleResize, { passive: true });

    function collideCircle(a: any, b: any) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 0.0001;
      const minDist = a.r + b.r;

      if (dist >= minDist) return;

      const overlap = (minDist - dist) + 0.2;
      const nx = dx / dist;
      const ny = dy / dist;

      a.x -= nx * overlap * 0.5;
      a.y -= ny * overlap * 0.5;
      b.x += nx * overlap * 0.5;
      b.y += ny * overlap * 0.5;

      const relVx = b.vx - a.vx;
      const relVy = b.vy - a.vy;
      const relVelAlongNormal = relVx * nx + relVy * ny;

      if (relVelAlongNormal > 0) return;

      const restitution = 0.95;
      const impulse = -(1 + restitution) * relVelAlongNormal / 2;

      const ix = impulse * nx;
      const iy = impulse * ny;

      a.vx -= ix;
      a.vy -= iy;
      b.vx += ix;
      b.vy += iy;
    }

    function collideWithWalls(it: any, aw: number, ah: number) {
      const pad = Math.max(8, it.r * 0.25);
      const minX = pad;
      const maxX = aw - pad;
      const minY = pad;
      const maxY = ah - pad;

      if (it.x - it.r < minX) { it.x = minX + it.r; it.vx *= -1; }
      if (it.x + it.r > maxX) { it.x = maxX - it.r; it.vx *= -1; }
      if (it.y - it.r < minY) { it.y = minY + it.r; it.vy *= -1; }
      if (it.y + it.r > maxY) { it.y = maxY - it.r; it.vy *= -1; }
    }

    function collideWithCenter(it: any, obstacle: any) {
      if (!obstacle) return;
      const dx = it.x - obstacle.x;
      const dy = it.y - obstacle.y;
      const dist = Math.hypot(dx, dy) || 0.0001;
      const minDist = it.r + obstacle.r;

      if (dist >= minDist) return;

      const nx = dx / dist;
      const ny = dy / dist;
      const overlap = (minDist - dist) + 0.4;

      it.x += nx * overlap;
      it.y += ny * overlap;

      const dot = it.vx * nx + it.vy * ny;
      it.vx = it.vx - 2 * dot * nx;
      it.vy = it.vy - 2 * dot * ny;
      it.vx *= 0.98;
      it.vy *= 0.98;
    }

    let last = performance.now();
    let animationFrameId: number;

    function tick(t: number) {
      if (!dims) { 
        animationFrameId = requestAnimationFrame(tick); 
        return; 
      }

      const dt = Math.min(32, t - last);
      last = t;

      const { aw, ah, centerObstacle } = dims;
      const step = prefersReduced ? 0 : (dt / 16.67);

      items.forEach((it) => {
        it.x += it.vx * step;
        it.y += it.vy * step;

        it.vx *= 0.999;
        it.vy *= 0.999;

        collideWithCenter(it, centerObstacle);
        collideWithWalls(it, aw, ah);
      });

      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          collideCircle(items[i], items[j]);
        }
      }

      items.forEach((it) => {
        it.x = Math.min(aw - it.r, Math.max(it.r, it.x));
        it.y = Math.min(ah - it.r, Math.max(it.r, it.y));
        it.el.style.transform = `translate3d(${it.x - it.w / 2}px, ${it.y - it.h / 2}px, 0)`;
      });

      animationFrameId = requestAnimationFrame(tick);
    }

    let startTries = 0;
    const start = () => {
      if(!arena) return;
      const rect = arena.getBoundingClientRect();
      if ((rect.width <= 2 || rect.height <= 2) && startTries < 30) {
        startTries++;
        animationFrameId = requestAnimationFrame(start);
        return;
      }
      if (!dims) dims = measure();
      animationFrameId = requestAnimationFrame((tt) => { last = tt; animationFrameId = requestAnimationFrame(tick); });
    };
    start();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Globe Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    // Force perfect sphere bound by the container
    let minDim = Math.min(width, height);
    let radius = minDim / 2.2;

    let allDots: any[] = [];
    let rotation: [number, number, number] = [0, 0, 0];

    const projection = d3.geoOrthographic()
      .scale(radius)
      .translate([minDim / 2, minDim / 2])
      .clipAngle(90);
      
    const path = d3.geoPath().projection(projection).context(context);

    function resize() {
      if(!container || !canvas || !context) return;
      width = container.clientWidth;
      height = container.clientHeight;
      minDim = Math.min(width, height);
      radius = minDim / 2.2;
      
      const dpr = window.devicePixelRatio || 1;

      canvas.width = minDim * dpr;
      canvas.height = minDim * dpr;
      canvas.style.width = `${minDim}px`;
      canvas.style.height = `${minDim}px`;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);

      projection.scale(radius).translate([minDim / 2, minDim / 2]);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();

    function render() {
      if(!context || !canvas) return;
      context.clearRect(0, 0, minDim, minDim);
      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      context.beginPath();
      context.arc(minDim / 2, minDim / 2, currentScale, 0, 2 * Math.PI);
      context.strokeStyle = "rgba(16, 185, 129, 0.25)"; 
      context.lineWidth = 1 * scaleFactor;
      context.stroke();

      const graticule = d3.geoGraticule();
      context.beginPath();
      path(graticule());
      context.strokeStyle = "rgba(16, 185, 129, 0.08)"; 
      context.lineWidth = 0.5 * scaleFactor;
      context.stroke();

      allDots.forEach((dot) => {
        const projected = projection([dot.lng, dot.lat]);
        if (!projected) return;
        context.beginPath();
        context.arc(projected[0], projected[1], 1.5 * scaleFactor, 0, 2 * Math.PI);
        context.fillStyle = "#10B981"; 
        context.fill();
      });
    }

    allDots = [];
    for (let i = 0; i < 600; i++) {
        allDots.push({ lng: Math.random() * 360 - 180, lat: Math.random() * 160 - 80 });
    }

    canvas.style.opacity = '1';

    // Interactive Dragging Setup
    let isDragging = false;
    let dragVelocity: [number, number] = [0.3, 0]; // default auto-spin
    
    const drag = d3.drag<HTMLCanvasElement, unknown>()
      .on('start', () => {
        isDragging = true;
      })
      .on('drag', (event) => {
        const k = 0.5;
        rotation[0] += event.dx * k;
        rotation[1] -= event.dy * k;
        
        // Clamp vertical rotation so you don't flip the globe completely over
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));
        
        projection.rotate(rotation);
        dragVelocity = [event.dx * k, -event.dy * k];
        render();
      })
      .on('end', () => {
        isDragging = false;
      });

    d3.select(canvas).call(drag as any);

    const timer = d3.timer(() => {
      if (!isDragging) {
        // Apply momentum or auto-spin
        rotation[0] += dragVelocity[0] || 0.3;
        rotation[1] += dragVelocity[1] || 0;
        
        // Slowly dampen velocity back to default slow spin
        dragVelocity[0] = dragVelocity[0] * 0.95 + 0.3 * 0.05; 
        dragVelocity[1] = dragVelocity[1] * 0.95;
        
        projection.rotate(rotation);
        render();
      }
    });

    return () => {
      timer.stop();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative z-10 flex items-center justify-center p-4 lg:p-8 min-h-[400px]">
      <div 
        ref={arenaRef} 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] aspect-square border border-brand-primary/15 rounded-full z-30 pointer-events-none overflow-hidden"
      >
        <div 
          ref={centerRef} 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-full flex items-center gap-3 border border-brand-primary/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] pointer-events-none"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-brand-primary to-brand-primary-light text-white shadow-sm shrink-0">
            <Coffee size={14} strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold text-ink hidden sm:block">Gradient 365</span>
        </div>

        <div 
          ref={(el) => { if(el) pillRefs.current[0] = el; }} 
          className="will-change-transform absolute top-0 left-0 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 border border-brand-primary/10 shadow-sm pointer-events-auto cursor-pointer hover:bg-white hover:scale-105 transition-transform"
        >
          <Bot className="w-5 h-5 text-brand-primary" />
          <span className="text-xs font-semibold text-ink hidden sm:block">GPT-4</span>
        </div>

        <div 
          ref={(el) => { if(el) pillRefs.current[1] = el; }} 
          className="will-change-transform absolute top-0 left-0 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 border border-brand-primary/10 shadow-sm pointer-events-auto cursor-pointer hover:bg-white hover:scale-105 transition-transform"
        >
          <MessageSquare className="w-5 h-5 text-brand-primary" />
          <span className="text-xs font-semibold text-ink hidden sm:block">Claude</span>
        </div>

        <div 
          ref={(el) => { if(el) pillRefs.current[2] = el; }} 
          className="will-change-transform absolute top-0 left-0 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 border border-brand-primary/10 shadow-sm pointer-events-auto cursor-pointer hover:bg-white hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-brand-primary" />
          <span className="text-xs font-semibold text-ink hidden sm:block">Gemini</span>
        </div>

        <div 
          ref={(el) => { if(el) pillRefs.current[3] = el; }} 
          className="will-change-transform absolute top-0 left-0 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center gap-2 border border-brand-primary/10 shadow-sm pointer-events-auto cursor-pointer hover:bg-white hover:scale-105 transition-transform"
        >
          <Heart className="w-5 h-5 text-brand-primary fill-brand-primary/20" />
          <span className="text-xs font-semibold text-ink hidden sm:block">Lovable</span>
        </div>
      </div>

      <canvas 
        ref={canvasRef}
        className="opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab active:cursor-grabbing z-20 pointer-events-auto rounded-full" 
        aria-hidden="true" 
      />
    </div>
  );
}
