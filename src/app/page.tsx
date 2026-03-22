"use client";

import { useEffect, useRef, useState } from "react";
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
  Check,
  ChevronDown
} from "lucide-react";

// ============ THEME TOGGLE COMPONENT ============
function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <label className="switch">
      <input 
        id="input" 
        type="checkbox" 
        checked={!isDark} 
        onChange={onToggle}
      />
      <div className="slider round">
        <div className="sun-moon">
          {/* Moon dots */}
          <svg className="moon-dot" id="moon-dot-1" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg className="moon-dot" id="moon-dot-2" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg className="moon-dot" id="moon-dot-3" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
          </svg>
          
          {/* Sun rays */}
          <svg id="light-ray-1" viewBox="0 0 100 100">
            <polygon points="50,0 45,45 55,45" />
          </svg>
          <svg id="light-ray-2" viewBox="0 0 100 100">
            <polygon points="50,0 45,45 55,45" />
          </svg>
          <svg id="light-ray-3" viewBox="0 0 100 100">
            <polygon points="50,0 45,45 55,45" />
          </svg>
        </div>
        
        {/* Clouds */}
        <svg className="cloud-light" id="cloud-1" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        <svg className="cloud-light" id="cloud-2" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        <svg className="cloud-light" id="cloud-3" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        <svg className="cloud-dark" id="cloud-4" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        <svg className="cloud-dark" id="cloud-5" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        <svg className="cloud-dark" id="cloud-6" viewBox="0 0 24 24">
          <path d="M18.5,12c0-1.7-1.1-3.2-2.6-3.8C15.4,6.5,13.8,5.3,12,5.3c-2.1,0-3.9,1.4-4.5,3.3C5.7,8.9,4.5,10.3,4.5,12c0,2.2,1.8,4,4,4h9C19.2,16,20,15.1,20,14C20,12.9,19.1,12,18.5,12z" />
        </svg>
        
        {/* Stars */}
        <div className="stars">
          <svg className="star" id="star-1" viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
          <svg className="star" id="star-2" viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
          <svg className="star" id="star-3" viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
          <svg className="star" id="star-4" viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        
        .switch #input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #2196f3;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          z-index: 0;
          overflow: hidden;
        }
        
        .sun-moon {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: yellow;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
        
        #input:checked + .slider {
          background-color: black;
        }
        
        #input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }
        
        #input:checked + .slider .sun-moon {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
          background-color: white;
          -webkit-animation: rotate-center 0.6s ease-in-out both;
          animation: rotate-center 0.6s ease-in-out both;
        }
        
        .moon-dot {
          opacity: 0;
          transition: 0.4s;
          fill: gray;
        }
        
        #input:checked + .slider .sun-moon .moon-dot {
          opacity: 1;
        }
        
        .slider.round {
          border-radius: 34px;
        }
        
        .slider.round .sun-moon {
          border-radius: 50%;
        }
        
        #moon-dot-1 {
          left: 10px;
          top: 3px;
          position: absolute;
          width: 6px;
          height: 6px;
          z-index: 4;
        }
        
        #moon-dot-2 {
          left: 2px;
          top: 10px;
          position: absolute;
          width: 10px;
          height: 10px;
          z-index: 4;
        }
        
        #moon-dot-3 {
          left: 16px;
          top: 18px;
          position: absolute;
          width: 3px;
          height: 3px;
          z-index: 4;
        }
        
        #light-ray-1 {
          left: -8px;
          top: -8px;
          position: absolute;
          width: 43px;
          height: 43px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }
        
        #light-ray-2 {
          left: -50%;
          top: -50%;
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }
        
        #light-ray-3 {
          left: -18px;
          top: -18px;
          position: absolute;
          width: 60px;
          height: 60px;
          z-index: -1;
          fill: white;
          opacity: 10%;
        }
        
        .cloud-light {
          position: absolute;
          fill: #eee;
          animation-name: cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
        }
        
        .cloud-dark {
          position: absolute;
          fill: #ccc;
          animation-name: cloud-move;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-delay: 1s;
        }
        
        #cloud-1 { left: 30px; top: 15px; width: 40px; }
        #cloud-2 { left: 44px; top: 10px; width: 20px; }
        #cloud-3 { left: 18px; top: 24px; width: 30px; }
        #cloud-4 { left: 36px; top: 18px; width: 40px; }
        #cloud-5 { left: 48px; top: 14px; width: 20px; }
        #cloud-6 { left: 22px; top: 26px; width: 30px; }
        
        @keyframes cloud-move {
          0%   { transform: translateX(0px); }
          40%  { transform: translateX(4px); }
          80%  { transform: translateX(-4px); }
          100% { transform: translateX(0px); }
        }
        
        .stars {
          transform: translateY(-32px);
          opacity: 0;
          transition: 0.4s;
        }
        
        .star {
          fill: white;
          position: absolute;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          animation-name: star-twinkle;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }
        
        #input:checked + .slider .stars {
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          transform: translateY(0);
          opacity: 1;
        }
        
        #star-1 { width: 20px; top: 2px; left: 3px; animation-delay: 0.3s; }
        #star-2 { width: 6px; top: 16px; left: 3px; }
        #star-3 { width: 12px; top: 20px; left: 10px; animation-delay: 0.6s; }
        #star-4 { width: 18px; top: 0px; left: 18px; animation-delay: 1.3s; }
        
        @keyframes star-twinkle {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.2); }
          80%  { transform: scale(0.8); }
          100% { transform: scale(1); }
        }
        
        @keyframes rotate-center {
          0% { transform: translateX(26px) rotate(0); }
          100% { transform: translateX(26px) rotate(360deg); }
        }
      `}</style>
    </label>
  );
}

// ============ PIXEL MASCOT COMPONENT ============
function PixelMascot({ size = 48, isDark = true }: { size?: number; isDark?: boolean }) {
  const pixelGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 2, 1, 1, 1, 2, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const pixelSize = Math.floor(size / 9);
  const mainColor = isDark ? "#D2691E" : "#E87D2E";
  const eyeColor = isDark ? "#000000" : "#1a1a1a";

  return (
    <motion.div
      className="relative inline-block shrink-0"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(9, ${pixelSize}px)`,
        gridTemplateRows: `repeat(7, ${pixelSize}px)`,
        gap: 0,
        imageRendering: "pixelated",
      }}
    >
      {pixelGrid.flat().map((pixel, index) => (
        <div
          key={index}
          style={{
            width: pixelSize,
            height: pixelSize,
            backgroundColor:
              pixel === 0 ? "transparent" :
              pixel === 1 ? mainColor :
              pixel === 2 ? eyeColor :
              "transparent",
          }}
        />
      ))}
    </motion.div>
  );
}

// macOS Terminal Style Speech Bubble
function MacSpeechBubble({ 
  children,
  position = "left",
  isDark = true,
}: { 
  children: React.ReactNode;
  position?: "left" | "right";
  isDark?: boolean;
}) {
  const bgColor = isDark ? "#000" : "#1e293b";
  const borderColor = isDark ? "#0d1117" : "#334155";
  const textColor = isDark ? "#e6e6ef" : "#f1f5f9";

  return (
    <div className={`relative max-w-xs ${position === "left" ? "ml-3" : "mr-3"}`}>
      <div 
        className="relative rounded-lg overflow-hidden"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${borderColor}`,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Arrow pointer */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            position === "left" 
              ? "left-0 -translate-x-full" 
              : "right-0 translate-x-full"
          }`}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              [position === "left" ? "borderRight" : "borderLeft"]: `12px solid ${bgColor}`,
            }}
          />
        </div>

        {/* macOS Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor }}>
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c941]" />
        </div>

        {/* Content */}
        <div className="px-4 py-3 text-sm font-medium leading-relaxed" style={{ color: textColor, fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ============ SINGLE MASCOT THAT MOVES BETWEEN SECTIONS ============
function SingleMascot({ 
  activeSection,
  isDark = true,
}: { 
  activeSection: string | null;
  isDark?: boolean;
}) {
  const sectionMessages: Record<string, { text: React.ReactNode; position: "left" | "right" }> = {
    hero: { 
      text: <span>Olá! Eu sou o <strong style={{ color: "#f97316" }}>Pixel</strong>! Vou te mostrar como <strong>explodir suas views</strong>! 🚀</span>,
      position: "left"
    },
    stats: { 
      text: <span>Esses são os <strong>resultados reais</strong> de criadores! 📊</span>,
      position: "left"
    },
    carousel: { 
      text: <span>Esses são os <strong>3 pilares</strong> da plataforma! 🎯</span>,
      position: "left"
    },
    features: { 
      text: <span>Aqui estão as <strong>ferramentas poderosas</strong> para seu conteúdo! 🛠️</span>,
      position: "right"
    },
    benefits: { 
      text: <span>Agora vem a <strong>melhor parte</strong>! Veja tudo que você ganha! 🎁</span>,
      position: "left"
    },
    faq: { 
      text: <span>Ainda com dúvidas? Vou responder as <strong>perguntas mais comuns</strong>! 💬</span>,
      position: "left"
    },
    cta: { 
      text: <span className="text-base"><strong>Está pronto?</strong> Vamos começar! 🚀</span>,
      position: "left"
    },
  };

  if (!activeSection || !sectionMessages[activeSection]) return null;

  const { text, position } = sectionMessages[activeSection];

  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`w-full mb-6 flex items-center gap-3 ${
        position === "right" ? "justify-end flex-row-reverse" : "justify-start"
      }`}
    >
      <PixelMascot size={48} isDark={isDark} />
      <MacSpeechBubble position={position} isDark={isDark}>
        {text}
      </MacSpeechBubble>
    </motion.div>
  );
}

// ============ 3D CAROUSEL COMPONENT ============
function Carousel3D({ isDark = true }: { isDark?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    { image: "/prints/IMG_9575.jpeg" },
    { image: "/prints/IMG_9577.jpeg" },
    { image: "/prints/IMG_9578.jpeg" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] perspective-1000">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => {
          const offset = index - currentIndex;
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;
          
          let translateX = 0, translateZ = 0, rotateY = 0, scale = 1, opacity = 0.3;
          
          if (isActive) {
            translateX = 0; translateZ = 50; scale = 1; opacity = 1;
          } else if (isPrev) {
            translateX = -350; translateZ = -150; rotateY = 35; scale = 0.65;
          } else if (isNext) {
            translateX = 350; translateZ = -150; rotateY = -35; scale = 0.65;
          } else {
            translateX = offset > 0 ? 550 : -550; translateZ = -250; scale = 0.5; opacity = 0;
          }

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ width: "320px", height: "650px" }}
              initial={false}
              animate={{ x: translateX, z: translateZ, rotateY, scale, opacity }}
              transition={{ 
                duration: 0.7, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
            >
              {/* Phone-like frame */}
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "45px",
                  border: `10px solid ${isDark ? "#1a1a1a" : "#d4d4d4"}`,
                  backgroundColor: isDark ? "#000" : "#fff",
                  boxShadow: isDark 
                    ? "0 50px 100px -20px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255,255,255,0.1)" 
                    : "0 50px 100px -20px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(0,0,0,0.05)"
                }}
              >
                {/* Side buttons */}
                <div className="absolute -right-[10px] top-24 w-[3px] h-8 rounded-l" style={{ backgroundColor: isDark ? "#333" : "#bbb" }} />
                <div className="absolute -right-[10px] top-36 w-[3px] h-16 rounded-l" style={{ backgroundColor: isDark ? "#333" : "#bbb" }} />
                <div className="absolute -right-[10px] top-56 w-[3px] h-16 rounded-l" style={{ backgroundColor: isDark ? "#333" : "#bbb" }} />
                <div className="absolute -left-[10px] top-36 w-[3px] h-10 rounded-r" style={{ backgroundColor: isDark ? "#333" : "#bbb" }} />
                
                {/* Notch/Dynamic Island */}
                <div 
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-10"
                  style={{
                    width: "90px",
                    height: "28px",
                    backgroundColor: isDark ? "#000" : "#1a1a1a",
                    borderRadius: "20px",
                  }}
                />
                
                {/* Screen content - fills entire phone screen */}
                <div 
                  className="absolute inset-[10px] overflow-hidden"
                  style={{ borderRadius: "35px" }}
                >
                  <img 
                    src={slide.image} 
                    alt={`Print ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Home indicator */}
                <div 
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10"
                  style={{
                    width: "100px",
                    height: "4px",
                    backgroundColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-20" 
        style={{ 
          backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", 
          border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)", 
          color: isDark ? "white" : "black" 
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-20" 
        style={{ 
          backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", 
          border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)", 
          color: isDark ? "white" : "black" 
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className="transition-all duration-300 ease-out"
            style={{ 
              width: index === currentIndex ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: index === currentIndex ? "#f97316" : isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"
            }} 
          />
        ))}
      </div>
    </div>
  );
}

// ============ MONETIZA COMPONENTS ============
const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Criadores ativos" },
  { icon: Eye, value: 2, suffix: "M+", label: "Views geradas" },
  { icon: TrendingUp, value: 340, suffix: "%", label: "Crescimento médio" },
  { icon: Flame, value: 10, suffix: "K+", label: "Roteiros criados" },
];

const features = [
  { icon: FileText, title: "Criar com IA + Hooks Prontos", description: "Gere roteiros com IA em segundos e acesse uma biblioteca de ganchos virais prontos para usar." },
  { icon: CalendarDays, title: "Planejamento + Templates", description: "Calendário editorial semanal, banco de ideias e templates de bios e CTAs para cada plataforma." },
  { icon: ChartColumn, title: "Banco de Nichos + Estudos", description: "Nichos testados com subnichos virais, ideias infinitas e aulas sobre algoritmo, crescimento e retenção." },
  { icon: Target, title: "Estratégias de Monetização", description: "Aprenda a transformar seguidores em receita com estratégias comprovadas de monetização." },
];

const benefits = [
  "+10 mil arquivos de fotos e vídeos em alta resolução e livre de metadados",
  "Imagens escolhidas pensando em estética, impacto e performance",
  "Ferramentas e materiais para criar vídeos magnéticos e virais",
  "Atualizações semanais totalmente gratuitas com novas imagens",
  "Acesso vitalício - pague uma vez, use para sempre",
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function BubbleBackground({ isDark = true }: { isDark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; glow: number }>>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleTouchMove = (e: TouchEvent) => { mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animate = () => {
      ctx.fillStyle = isDark ? '#080603' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height, mouse = mouseRef.current, influence = 120;

      particlesRef.current.forEach((p) => {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < influence && dist > 0) {
          const force = (influence - dist) / influence;
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
          p.opacity = Math.min(1, 0.6 + force * 0.4);
          p.glow += (1 + force * 2.5 - p.glow) * 0.15;
        } else {
          p.opacity = Math.max(0.18, p.opacity - 0.02);
          p.glow += (1 - p.glow) * 0.08;
        }
        p.x += p.vx; p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.001;
        p.vy += (Math.random() - 0.5) * 0.001;
        p.vx *= 0.999; p.vy *= 0.999;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.save();
        ctx.shadowColor = isDark ? '#FFFFFF' : '#1e293b';
        ctx.shadowBlur = 14 * p.glow * 2;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = isDark ? '#FFFFFF' : '#64748b';
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
  }, [isDark]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />;
}

function AnimatedWord({ word, index, isVisible, isDark = true }: { word: string; index: number; isVisible: boolean; isDark?: boolean }) {
  return (
    <motion.span className="inline-block mr-[0.25em]" initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }} style={{ color: isDark ? "white" : "#1e293b" }}>
      {word}
    </motion.span>
  );
}

function AnimatedButton({ children, href, className = "", style, withConicBorder = false, isDark = true }: { children: React.ReactNode; href: string; className?: string; style?: React.CSSProperties; withConicBorder?: boolean; isDark?: boolean }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fillColor = withConicBorder ? '#3B82F6' : (isDark ? '#ffffff' : '#1e293b');

  if (withConicBorder) {
    return (
      <div className="relative inline-flex overflow-hidden rounded-full" style={{ borderRadius: '60px' }}>
        <div className="absolute -top-[200%] -bottom-[200%] left-0 right-0" style={{ background: 'conic-gradient(from 0deg, transparent 200deg, #3B82F6, transparent)', animation: 'spin 4s linear infinite', zIndex: 1 }} />
        <div className="absolute" style={{ top: '2px', left: '2px', right: '2px', bottom: '2px', background: isDark ? '#080603' : '#ffffff', borderRadius: '58px', zIndex: 2 }} />
        <motion.a href={href} target="_blank" rel="noopener noreferrer" className={`${className} relative inline-flex items-center justify-center gap-2 overflow-hidden group`} style={{ ...style, backgroundColor: 'transparent', color: isDark ? '#f0efe9' : '#1e293b', borderRadius: '58px', border: 'none', zIndex: 3 }} onClick={() => { setIsClicked(true); setTimeout(() => setIsClicked(false), 300); }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} whileTap={{ scale: 0.97 }} animate={isClicked ? { scale: 0.95 } : { scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <span className="absolute inset-0" style={{ background: fillColor, transform: isHovered ? 'translateX(0%)' : 'translateX(-101%)', transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: 0, borderRadius: '58px' }} />
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.a>
        <style jsx global>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" className={`${className} relative inline-flex items-center justify-center gap-2 overflow-hidden group`} style={{ ...style, backgroundColor: 'transparent', color: isDark ? '#f0efe9' : '#1e293b', borderRadius: '60px', border: isDark ? "2px solid rgba(240,239,233,0.25)" : "2px solid rgba(30,41,59,0.25)" }} onClick={() => { setIsClicked(true); setTimeout(() => setIsClicked(false), 300); }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} whileTap={{ scale: 0.97 }} animate={isClicked ? { scale: 0.95 } : { scale: 1 }}>
      <span className="absolute inset-0 rounded-full" style={{ background: fillColor, transform: isHovered ? 'translateX(0%)' : 'translateX(-101%)', transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)' }} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

function LiquidGlassSVGFilter() {
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  useEffect(() => {
    const turb = turbRef.current;
    if (!turb) return;
    let t = 0;
    const tick = () => { t += 0.003; turb.setAttribute('baseFrequency', `${(0.012 + Math.sin(t) * 0.003).toFixed(5)} ${(0.008 + Math.cos(t * 0.7) * 0.002).toFixed(5)}`); requestAnimationFrame(tick); };
    tick();
  }, []);
  return <svg style={{ position: 'absolute', width: 0, height: 0 }}><defs><filter id="liquid-glass-filter"><feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.012 0.008" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" /></filter></defs></svg>;
}

function StatsCard({ stat, index, isDark = true }: { stat: typeof stats[0]; index: number; isDark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div ref={ref} className="liquid-glass-card liquid-glass-stats" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} onMouseMove={(e) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); setTransform(`translateY(-10px) scale(1.025) rotateX(${-dy * 7}deg) rotateY(${dx * 7}deg)`); }} onMouseLeave={() => setTransform('')} style={{ transform: transform || undefined, transition: transform ? 'none' : 'transform 0.45s' }}>
      <div className="liquid-glass-content">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)' }}><stat.icon className="w-5 h-5" style={{ color: isDark ? "white" : "#1e293b" }} /></div>
          <span className="text-sm font-medium" style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)" }}>{stat.label}</span>
        </div>
        <div className="text-3xl font-extrabold" style={{ color: isDark ? "white" : "#1e293b" }}>{isInView ? count : 0}{stat.suffix}</div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ feature, index, isDark = true }: { feature: typeof features[0]; index: number; isDark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');

  return (
    <motion.div ref={ref} className="liquid-glass-card liquid-glass-feature h-full" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} onMouseMove={(e) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); setTransform(`translateY(-10px) scale(1.025) rotateX(${-dy * 7}deg) rotateY(${dx * 7}deg)`); }} onMouseLeave={() => setTransform('')} style={{ transform: transform || undefined, transition: transform ? 'none' : 'transform 0.45s' }}>
      <div className="liquid-glass-content flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)' }}><feature.icon className="w-6 h-6" style={{ color: isDark ? "white" : "#1e293b" }} /></div>
        <div><h3 className="mb-1 text-lg font-semibold" style={{ color: isDark ? "white" : "#1e293b" }}>{feature.title}</h3><p className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>{feature.description}</p></div>
      </div>
    </motion.div>
  );
}

function BenefitsCard({ isDark = true }: { isDark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [transform, setTransform] = useState('');

  return (
    <motion.div ref={ref} className="liquid-glass-card liquid-glass-benefits" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} onMouseMove={(e) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); setTransform(`translateY(-8px) scale(1.015) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`); }} onMouseLeave={() => setTransform('')} style={{ transform: transform || undefined, transition: transform ? 'none' : 'transform 0.45s' }}>
      <div className="liquid-glass-content">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl mb-8" style={{ color: isDark ? "white" : "#1e293b" }}>Entre no nosso <span className="italic">TIME</span><br />e tenha acesso a:</h2>
        <ul className="mx-auto max-w-lg space-y-4 text-left mb-8">
          {benefits.map((benefit, index) => (
            <motion.li key={index} className="flex items-start gap-3 text-base font-medium" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1 }}>
              <span className="mt-1 h-4 w-4 shrink-0 rounded-sm flex items-center justify-center" style={{ background: isDark ? "white" : "#1e293b", transform: "rotate(45deg)" }}><Check className="w-3 h-3" style={{ color: isDark ? "black" : "white", transform: "rotate(-45deg)" }} /></span>
              {benefit}
            </motion.li>
          ))}
        </ul>
        <AnimatedButton href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR" className="whitespace-nowrap text-base font-semibold h-12 px-8 shadow-lg" isDark={isDark}>Entre agora!<ArrowRight className="w-5 h-5" /></AnimatedButton>
      </div>
    </motion.div>
  );
}

// ============ MAIN PAGE ============
export default function MonetizaLanding() {
  const [isDark, setIsDark] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const headlineWords = "Saia das 0 visualizações para".split(" ");
  
  // Track which section is most visible
  useEffect(() => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "stats", ref: statsRef },
      { id: "carousel", ref: carouselRef },
      { id: "features", ref: featuresRef },
      { id: "benefits", ref: benefitsRef },
      { id: "faq", ref: faqRef },
      { id: "cta", ref: ctaRef },
    ];
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let mostVisible: string | null = null;
      let maxVisibility = 0;
      
      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const visibleTop = Math.max(0, -rect.top);
          const visibleBottom = Math.max(0, rect.bottom - windowHeight);
          const visibleHeight = rect.height - visibleTop - visibleBottom;
          const visibility = Math.max(0, visibleHeight) / rect.height;
          
          if (visibility > maxVisibility && visibility > 0.3) {
            maxVisibility = visibility;
            mostVisible = id;
          }
        }
      });
      
      setActiveSection(mostVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const textColor = isDark ? "white" : "#1e293b";
  const mutedColor = isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)";
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ color: textColor }}>
      <LiquidGlassSVGFilter />
      <BubbleBackground isDark={isDark} />
      
      <div className="relative z-10 w-full">
        {/* Header */}
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" 
          style={{ 
            borderBottom: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
            backgroundColor: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"
          }}
          initial={{ y: -100 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}><Zap className="h-6 w-6" style={{ color: textColor }} /></motion.div>
              <span className="tracking-tight" style={{ color: textColor }}>Monetiza.ai</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:opacity-100 transition-colors" style={{ color: mutedColor }}>Funcionalidades</a>
              <a href="#carousel" className="text-sm hover:opacity-100 transition-colors" style={{ color: mutedColor }}>Galeria</a>
              <a href="#faq" className="text-sm hover:opacity-100 transition-colors" style={{ color: mutedColor }}>FAQ</a>
              <a href="#benefits" className="text-sm hover:opacity-100 transition-colors" style={{ color: mutedColor }}>Preço</a>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
              <AnimatedButton href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR" className="hidden md:inline-flex whitespace-nowrap text-sm font-medium h-10 px-4 py-2" isDark={isDark}>Começar agora<ArrowRight className="w-4 h-4" /></AnimatedButton>
            </div>
          </div>
        </motion.header>

        <main>
          {/* Hero */}
          <section id="hero" ref={heroRef} className="flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
            <div className="w-full max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "hero" && <SingleMascot activeSection="hero" isDark={isDark} />}
              </AnimatePresence>
              <div className="text-center">
                <motion.div 
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-6 backdrop-blur" 
                  style={{ 
                    border: isDark ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(0,0,0,0.2)",
                    backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                    color: mutedColor
                  }}
                  initial={{ opacity: 0, y: 20 }} 
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Acesso imediato · Pagamento único
                </motion.div>

                <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {headlineWords.map((word, i) => <AnimatedWord key={i} word={word} index={i} isVisible={isHeroInView} isDark={isDark} />)}
                  {" "}
                  <motion.span className="inline-block" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}>
                    100mil
                    <motion.span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-full" style={{ backgroundColor: textColor }} animate={{ scaleY: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                  </motion.span>
                </h1>

                <motion.p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl" style={{ color: mutedColor }} initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
                  Roteiros com IA, calendário editorial, análise de padrões e estratégias de monetização — o sistema completo para explodir seu conteúdo e transformar views em receita.
                </motion.p>

                <motion.div className="mb-8 flex flex-col items-center gap-4" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}>
                  <AnimatedButton href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR" className="whitespace-nowrap text-base font-semibold h-12 px-8 shadow-lg" withConicBorder={true} isDark={isDark}>
                    <span className="relative z-10">Começar por apenas R$29</span>
                    <ArrowRight className="w-5 h-5" />
                  </AnimatedButton>
                </motion.div>

                <motion.p className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(30,41,59,0.5)" }} initial={{ opacity: 0 }} animate={isHeroInView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>Pagamento único · Sem mensalidade · Acesso vitalício</motion.p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section id="stats" ref={statsRef} className="w-full px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "stats" && <SingleMascot activeSection="stats" isDark={isDark} />}
              </AnimatePresence>
              <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold">Resultados que <span className="font-black">falam por si</span></h2>
                <p style={{ color: mutedColor }}>Dados reais de criadores usando o Monetiza.ai</p>
              </motion.div>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => <StatsCard key={stat.label} stat={stat} index={index} isDark={isDark} />)}
              </div>
            </div>
          </section>

          {/* Carousel */}
          <section id="carousel" ref={carouselRef} className="w-full px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "carousel" && <SingleMascot activeSection="carousel" isDark={isDark} />}
              </AnimatePresence>
              <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold">Conheça a <span style={{ color: "#f97316" }}>Plataforma</span></h2>
                <p style={{ color: mutedColor }}>3 seções principais para você crescer</p>
              </motion.div>
              <Carousel3D isDark={isDark} />
            </div>
          </section>

          {/* Features */}
          <section id="features" ref={featuresRef} className="w-full px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "features" && <SingleMascot activeSection="features" isDark={isDark} />}
              </AnimatePresence>
              <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold">Tudo que você precisa em <span className="font-black">um só lugar</span></h2>
                <p style={{ color: mutedColor }}>Ferramentas poderosas para criar, planejar e monetizar</p>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} isDark={isDark} />)}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="benefits" ref={benefitsRef} className="w-full px-4 py-20">
            <div className="max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "benefits" && <SingleMascot activeSection="benefits" isDark={isDark} />}
              </AnimatePresence>
              <BenefitsCard isDark={isDark} />
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" ref={faqRef} className="w-full px-4 py-20">
            <div className="max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "faq" && <SingleMascot activeSection="faq" isDark={isDark} />}
              </AnimatePresence>
              <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold">Perguntas <span className="font-black">Frequentes</span></h2>
                <p style={{ color: mutedColor }}>Tire suas dúvidas sobre o Monetiza.ai</p>
              </motion.div>
              <div className="space-y-4">
                {[{ q: "Como funciona o acesso?", a: "Após o pagamento, você recebe acesso imediato à plataforma. É só criar sua conta e começar!" }, { q: "É pagamento único ou mensal?", a: "É pagamento único! Você paga uma vez e tem acesso vitalício. Sem mensalidades ou taxas escondidas." }, { q: "Para quem é o Monetiza.ai?", a: "Para criadores de conteúdo que querem crescer nas redes sociais, iniciantes ou experientes." }, { q: "Tem garantia?", a: "Sim! Você tem 7 dias de garantia. Se não gostar, devolvemos seu dinheiro sem perguntas." }, { q: "Quais plataformas são atendidas?", a: "Instagram, TikTok, YouTube, Kwai e Twitter. As estratégias funcionam para qualquer rede social!" }].map((faq, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: index * 0.1 }} 
                    className="liquid-glass-card liquid-glass-feature"
                  >
                    <div className="liquid-glass-content">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
                          <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: mutedColor }} />
                        </summary>
                        <p className="mt-4" style={{ color: mutedColor }}>{faq.a}</p>
                      </details>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" ref={ctaRef} className="w-full px-4 py-20" style={{ background: isDark ? "linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.1))" : "linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.05))" }}>
            <div className="max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                {activeSection === "cta" && <SingleMascot activeSection="cta" isDark={isDark} />}
              </AnimatePresence>
              <div className="text-center">
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold mb-6">Comece <span style={{ color: "#f97316" }}>agora mesmo</span>!</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8 text-lg" style={{ color: mutedColor }}>Junte-se a mais de 500 criadores que já estão transformando suas redes sociais.</motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <AnimatedButton href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR" className="whitespace-nowrap text-lg font-semibold h-14 px-10 shadow-lg" withConicBorder={true} isDark={isDark}>Começar por R$29<ArrowRight className="w-6 h-6" /></AnimatedButton>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-4" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)" }}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Zap className="h-6 w-6" style={{ color: textColor }} />
                  <span className="text-xl font-bold" style={{ color: textColor }}>Monetiza.ai</span>
                </div>
                <p className="text-sm text-center max-w-md" style={{ color: mutedColor }}>
                  A plataforma completa para criadores de conteúdo que querem crescer nas redes sociais.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 pt-8" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)" }}>
                <p className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(30,41,59,0.4)" }}>© 2024 Monetiza.ai. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
