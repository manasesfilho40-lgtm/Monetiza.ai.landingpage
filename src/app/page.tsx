"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Sparkles, 
  Users, 
  Eye, 
  TrendingUp, 
  Flame,
  ArrowRight,
  FileText,
  CalendarDays,
  ChartColumn,
  Target,
  Check
} from "lucide-react";

// Stats data
const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Criadores ativos",
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    icon: Eye,
    value: 2,
    suffix: "M+",
    label: "Views geradas",
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    icon: TrendingUp,
    value: 340,
    suffix: "%",
    label: "Crescimento médio",
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    icon: Flame,
    value: 10,
    suffix: "K+",
    label: "Roteiros criados",
    color: "text-white",
    bgColor: "bg-white/10",
  },
];

// Features data
const features = [
  {
    icon: FileText,
    title: "Criar com IA + Hooks Prontos",
    description: "Gere roteiros com IA em segundos e acesse uma biblioteca de ganchos virais prontos para usar.",
  },
  {
    icon: CalendarDays,
    title: "Planejamento + Templates",
    description: "Calendário editorial semanal, banco de ideias e templates de bios e CTAs para cada plataforma.",
  },
  {
    icon: ChartColumn,
    title: "Banco de Nichos + Estudos",
    description: "Nichos testados com subnichos virais, ideias infinitas e aulas sobre algoritmo, crescimento e retenção.",
  },
  {
    icon: Target,
    title: "Estratégias de Monetização",
    description: "Aprenda a transformar seguidores em receita com estratégias comprovadas de monetização.",
  },
];

// Benefits list
const benefits = [
  "+10 mil arquivos de fotos e vídeos em alta resolução e livre de metadados",
  "Imagens escolhidas pensando em estética, impacto e performance",
  "Ferramentas e materiais para criar vídeos magnéticos e virais",
  "Atualizações semanais totalmente gratuitas com novas imagens",
  "Acesso vitalício - pague uma vez, use para sempre",
];

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, start]);
  
  return count;
}

// Canvas-based interactive particles background
function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    glow: number;
  }>>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles function
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.8,
        opacity: 0.6,
        glow: 1,
      }));
    };

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouchMove = (e: TouchEvent) => {
      mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation loop
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = '#080603';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;

      // Update and draw particles
      const mouse = mouseRef.current;
      const influence = 120;

      particlesRef.current.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < influence && dist > 0) {
          const force = (influence - dist) / influence;
          const nx = dx / dist;
          const ny = dy / dist;
          const gf = force * 0.05;

          // Attract to mouse
          p.vx += nx * gf;
          p.vy += ny * gf;

          p.opacity = Math.min(1, 0.6 + force * 0.4);
          const target = 1 + force * 2.5;
          p.glow += (target - p.glow) * 0.15;
        } else {
          p.opacity = Math.max(0.18, p.opacity - 0.02);
          p.glow += (1 - p.glow) * 0.08;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.001;
        p.vy += (Math.random() - 0.5) * 0.001;
        p.vx *= 0.999;
        p.vy *= 0.999;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Draw particle
        ctx.save();
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 14 * p.glow * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

// Custom cursor component - only renders on client after hydration
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPosRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);
  const mountedRef = useRef(false);

  // Use callback pattern to avoid lint error
  const initializeCursor = useCallback(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    setIsReady(true);
  }, []);

  useEffect(() => {
    // Initialize after mount - this is intentional to detect client-side
    // eslint-disable-next-line react-hooks/set-state-in-effect
    initializeCursor();
    
    // Check for mobile
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide default cursor
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    // Config
    const cfg = {
      hoverScale: 1.5,
      clickScale: 0.75,
      lerpFactor: 0.15, // Lower = slower ring (0.1 = very slow, 0.5 = fast)
    };

    // Animation loop for smooth ring following
    const animate = () => {
      // Lerp ring position towards mouse position
      ringPosRef.current.x += (mousePosRef.current.x - ringPosRef.current.x) * cfg.lerpFactor;
      ringPosRef.current.y += (mousePosRef.current.y - ringPosRef.current.y) * cfg.lerpFactor;
      
      ring.style.left = ringPosRef.current.x + 'px';
      ring.style.top = ringPosRef.current.y + 'px';
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current.x = e.clientX;
      mousePosRef.current.y = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleMouseDown = () => {
      ring.style.transform = `translate(-50%, -50%) scale(${cfg.clickScale})`;
    };

    const handleMouseUp = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const bindHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.style.transform = `translate(-50%, -50%) scale(${cfg.hoverScale})`;
        });
        el.addEventListener('mouseleave', () => {
          ring.style.transform = 'translate(-50%, -50%) scale(1)';
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    bindHover();

    // Re-apply when DOM changes (SPAs)
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  // Only render after mount
  if (!isReady) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 200ms ease',
          opacity: 0,
          top: 0,
          left: 0,
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          border: '1.5px solid #ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'transform 200ms ease, opacity 200ms ease',
          opacity: 0,
          top: 0,
          left: 0,
          background: 'transparent',
        }}
      />
    </>
  );
}

// Word animation component for hero
function AnimatedWord({ word, index, isVisible }: { word: string; index: number; isVisible: boolean }) {
  return (
    <motion.span
      className="inline-block mr-[0.25em] text-white"
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  );
}

// Scroll reveal text component
function ScrollRevealText({ 
  children, 
  className = "",
  color = "#ffffff"
}: { 
  children: string; 
  className?: string;
  color?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = children.trim().split(/\s+/);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const word = entry.target as HTMLSpanElement;
          const idx = wordsRef.current.indexOf(word);
          if (idx !== -1 && !visibleWords.has(idx)) {
            setTimeout(() => {
              setVisibleWords((prev) => new Set([...prev, idx]));
            }, idx * 60);
            observer.unobserve(word);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    wordsRef.current.forEach((word) => {
      if (word) observer.observe(word);
    });

    return () => observer.disconnect();
  }, [children, visibleWords]);

  const words = children.trim().split(/\s+/);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-3xl mx-auto px-4 sm:px-6 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center ${className}`}
      style={{ color }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => { if (el) wordsRef.current[index] = el; }}
          className="inline-block transition-all duration-500 ease-out mr-[0.15em] mb-1"
          style={{
            opacity: visibleWords.has(index) ? 1 : 0,
            transform: visibleWords.has(index) ? 'translateY(0)' : 'translateY(18px)',
            filter: visibleWords.has(index) ? 'blur(0px)' : 'blur(6px)',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

// Card with hover effects
function AnimatedCard({ children, index, className = "", style }: { 
  children: React.ReactNode; 
  index: number; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className={`${className} relative overflow-hidden group`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Liquid Glass Card with 3D tilt effect
function LiquidGlassCard({ 
  children, 
  index, 
  className = "",
  variant = "default"
}: { 
  children: React.ReactNode; 
  index: number;
  className?: string;
  variant?: "default" | "stats" | "feature" | "benefits";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const rotX = (-dy * 7).toFixed(2);
    const rotY = (dx * 7).toFixed(2);
    setTransform(`translateY(-10px) scale(1.025) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const variantClasses = {
    default: '',
    stats: 'liquid-glass-stats',
    feature: 'liquid-glass-feature',
    benefits: 'liquid-glass-benefits'
  };

  return (
    <motion.div
      ref={cardRef}
      className={`liquid-glass-card ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: transform || undefined,
        transition: transform ? 'none' : 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div className="liquid-glass-content">
        {children}
      </div>
    </motion.div>
  );
}

// SVG Filter for breathing liquid effect
function LiquidGlassSVGFilter() {
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    const turb = turbRef.current;
    if (!turb) return;

    let t = 0;
    let animationId: number;

    const tick = () => {
      t += 0.003;
      const bfx = (0.012 + Math.sin(t) * 0.003).toFixed(5);
      const bfy = (0.008 + Math.cos(t * 0.7) * 0.002).toFixed(5);
      turb.setAttribute('baseFrequency', `${bfx} ${bfy}`);
      animationId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="liquid-glass-filter">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.012 0.008"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

// Animated button with slide-in fill effect
function AnimatedButton({ children, href, className = "", style, withConicBorder = false }: { 
  children: React.ReactNode; 
  href: string; 
  className?: string;
  style?: React.CSSProperties;
  withConicBorder?: boolean;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  // Fill color - azul para botão principal
  const fillColor = withConicBorder ? '#3B82F6' : '#ffffff';
  
  // Conic border version
  if (withConicBorder) {
    return (
      <div className="relative inline-flex overflow-hidden rounded-full" style={{ borderRadius: '60px' }}>
        {/* Spinning conic gradient */}
        <div 
          className="absolute -top-[200%] -bottom-[200%] left-0 right-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent 200deg, #3B82F6, transparent)',
            animation: 'spin 4s linear infinite',
            zIndex: 1,
          }}
        />
        {/* Inner overlay */}
        <div 
          className="absolute"
          style={{
            top: '2px',
            left: '2px',
            right: '2px',
            bottom: '2px',
            background: '#080603',
            borderRadius: '58px',
            zIndex: 2,
          }}
        />
        {/* Button content */}
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} relative inline-flex items-center justify-center gap-2 overflow-hidden group`}
          style={{
            ...style,
            backgroundColor: 'transparent',
            color: '#f0efe9',
            borderRadius: '58px',
            border: 'none',
            transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 3,
          }}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ scale: 0.97 }}
          animate={isClicked ? { scale: 0.95 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Slide-in fill */}
          <span 
            className="absolute inset-0"
            style={{
              background: fillColor,
              transform: isHovered ? 'translateX(0%)' : 'translateX(-101%)',
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 0,
              borderRadius: '58px',
            }}
          />
          {/* Content */}
          <span 
            className="relative z-10 inline-flex items-center gap-2"
            style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            {children}
          </span>
        </motion.a>
        <style jsx global>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} relative inline-flex items-center justify-center gap-2 overflow-hidden group`}
      style={{
        ...style,
        backgroundColor: 'transparent',
        color: '#f0efe9',
        borderRadius: '60px',
        border: '2px solid rgba(240,239,233,0.25)',
        transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      animate={isClicked ? { scale: 0.95 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Slide-in fill */}
      <span 
        className="absolute inset-0 rounded-full"
        style={{
          background: fillColor,
          transform: isHovered ? 'translateX(0%)' : 'translateX(-101%)',
          transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 0,
        }}
      />
      {/* Content */}
      <span 
        className="relative z-10 inline-flex items-center gap-2"
        style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {children}
      </span>
    </motion.a>
  );
}

// Section wrapper with scroll reveal
function SectionReveal({ 
  children, 
  id, 
  direction = "left",
  className = ""
}: { 
  children: React.ReactNode; 
  id?: string;
  direction?: "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Stats Card Component
function StatsCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');
  
  const count = useCountUp(stat.value, 2000, isInView);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const rotX = (-dy * 7).toFixed(2);
    const rotY = (dx * 7).toFixed(2);
    setTransform(`translateY(-10px) scale(1.025) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };
  
  return (
    <motion.div
      ref={ref}
      className="liquid-glass-card liquid-glass-stats"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transition: transform ? 'none' : 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div className="liquid-glass-content">
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <span className="text-sm font-medium text-white/80">{stat.label}</span>
        </div>
        <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-syne)" }}>
          {isInView ? count : 0}{stat.suffix}
        </div>
      </div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const rotX = (-dy * 7).toFixed(2);
    const rotY = (dx * 7).toFixed(2);
    setTransform(`translateY(-10px) scale(1.025) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <motion.div
      ref={ref}
      className="liquid-glass-card liquid-glass-feature h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transition: transform ? 'none' : 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div className="liquid-glass-content flex gap-4">
        <div 
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <feature.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="mb-1 text-lg font-semibold text-white">{feature.title}</h3>
          <p className="text-sm text-white/60">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Benefits Card Component
function BenefitsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const rotX = (-dy * 5).toFixed(2);
    const rotY = (dx * 5).toFixed(2);
    setTransform(`translateY(-8px) scale(1.015) rotateX(${rotX}deg) rotateY(${rotY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <motion.div
      ref={ref}
      className="liquid-glass-card liquid-glass-benefits"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transition: transform ? 'none' : 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div className="liquid-glass-content">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl mb-8 text-white" style={{ fontFamily: "var(--font-syne)" }}>
          Entre no nosso <span className="italic text-white">TIME</span>
          <br />
          e tenha acesso a:
        </h2>
        
        <ul className="mx-auto max-w-lg space-y-4 text-left mb-8">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-base font-medium text-white/70"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <span className="mt-1 h-4 w-4 shrink-0 rounded-sm bg-white flex items-center justify-center" style={{ transform: "rotate(45deg)" }}>
                <Check className="w-3 h-3 text-black" style={{ transform: "rotate(-45deg)" }} />
              </span>
              {benefit}
            </motion.li>
          ))}
        </ul>
        
        <AnimatedButton
          href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR"
          className="whitespace-nowrap text-base font-semibold h-12 px-8 shadow-lg"
        >
          Entre agora!
          <ArrowRight className="w-5 h-5" />
        </AnimatedButton>
      </div>
    </motion.div>
  );
}

export default function MonetizaLanding() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  // Split headline into words
  const headlineWords = "Saia das 0 visualizações para".split(" ");
  
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden">
      {/* SVG Filter for liquid glass effect */}
      <LiquidGlassSVGFilter />
      
      {/* Canvas Bubble Background */}
      <BubbleBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Content wrapper - z-index 1+ */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          suppressHydrationWarning
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
              <span className="tracking-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Monetiza.ai
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#funcionalidades" className="text-sm text-white/60 transition-colors hover:text-white">
                Funcionalidades
              </a>
              <a href="#preco" className="text-sm text-white/60 transition-colors hover:text-white">
                Preço
              </a>
              <a href="#faq" className="text-sm text-white/60 transition-colors hover:text-white">
                FAQ
              </a>
            </nav>
            <AnimatedButton
              href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR"
              className="hidden md:inline-flex whitespace-nowrap text-sm font-medium h-10 px-4 py-2"
            >
              Começar agora
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </div>
        </motion.header>

        <main>
          {/* Hero Section */}
          <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white/70 mb-6 bg-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                </motion.span>
                Acesso imediato · Pagamento único
              </motion.div>

              {/* Main Title */}
              <h1
                className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {headlineWords.map((word, i) => (
                  <AnimatedWord key={i} word={word} index={i} isVisible={isHeroInView} />
                ))}
                {" "}
                <motion.span
                  className="inline-block text-white"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={isHeroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + headlineWords.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  100mil
                  <motion.span
                    className="inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-full bg-white"
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p
                className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl text-white/70"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + headlineWords.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                Roteiros com IA, calendário editorial, análise de padrões e estratégias de monetização — o sistema completo para explodir seu conteúdo e transformar views em receita.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + headlineWords.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatedButton
                  href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR"
                  className="whitespace-nowrap text-base font-semibold h-12 px-8 shadow-lg"
                  withConicBorder={true}
                >
                  <span className="relative z-10">Começar por apenas R$29</span>
                  <motion.span className="relative z-10" whileHover={{ x: 3 }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </AnimatedButton>
              </motion.div>

              <motion.p
                className="text-sm text-white/50"
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + headlineWords.length * 0.08 }}
              >
                Pagamento único · Sem mensalidade · Acesso vitalício
              </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                <motion.div
                  className="w-1.5 h-3 rounded-full bg-white"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section id="stats" className="w-full px-4 py-20 relative">
            <div className="max-w-6xl mx-auto w-full">
              <motion.div
                className="mb-12 text-center w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Resultados que <span className="font-black text-white">falam por si</span>
                </h2>
                <p className="text-white/60">Dados reais de criadores usando o Monetiza.ai</p>
              </motion.div>

              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 w-full">
                {stats.map((stat, index) => (
                  <StatsCard key={stat.label} stat={stat} index={index} />
                ))}
              </div>

              {/* Live indicators */}
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {["3 pessoas compraram nos últimos 30 min", "12 roteiros criados agora", "Online: 47 criadores"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    {text}
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Message Section */}
          <section className="relative w-full">
            {/* Spacer */}
            <div className="h-[25vh]" />
            
            {/* Scroll Text 1 */}
            <ScrollRevealText>
              Pare de consumir e comece a produzir conteúdo que gera receita recorrente todo dia
            </ScrollRevealText>
            
            {/* Spacer */}
            <div className="h-[25vh]" />
            
            {/* Scroll Text 2 */}
            <ScrollRevealText>
              Roteiros com IA calendário editorial estratégias de monetização e mais de dez mil mídias em alta resolução
            </ScrollRevealText>
            
            {/* Spacer */}
            <div className="h-[25vh]" />
          </section>

          {/* Benefits Section */}
          <SectionReveal id="benefits" direction="left" className="px-4 py-24 relative">
            <div className="max-w-3xl mx-auto">
              <BenefitsCard />
            </div>
          </SectionReveal>

          {/* Features Section */}
          <section id="funcionalidades" className="w-full px-4 py-24 relative">
            <div className="max-w-6xl mx-auto w-full">
              <motion.div
                className="mb-12 text-center w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Tudo que você precisa para <span className="font-black text-white">crescer</span>
                </h2>
                <p className="mx-auto max-w-2xl text-white/60">
                  Ferramentas inteligentes projetadas para criadores que querem resultados reais.
                </p>
              </motion.div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full">
                {features.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="cta" className="w-full px-4 py-24 relative">
            <motion.div
              className="max-w-4xl mx-auto w-full text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Comece <span className="font-black text-white">agora</span> a transformar seu conteúdo
              </h2>
              <p className="mb-8 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
                Junte-se a centenas de criadores que já estão transformando views em receita com o Monetiza.ai.
              </p>
              
              <AnimatedButton
                href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR"
                className="whitespace-nowrap text-lg font-semibold h-14 px-10 shadow-xl"
                withConicBorder={true}
              >
                Começar por apenas R$29
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
              
              <p className="mt-6 text-sm text-white/40">
                ✓ Pagamento único · ✓ Sem mensalidade · ✓ Acesso vitalício
              </p>
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-white/20 bg-black/30 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  Monetiza.ai
                </span>
                <span>© 2025</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Termos</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
