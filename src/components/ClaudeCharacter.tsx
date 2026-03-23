"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const sectionMessages: Record<string, { text: string; emoji: string }> = {
  stats: { text: "+500 criadores ativos! Olha só esses números crescendo...", emoji: "🎉" },
  funcionalidades: { text: "Clique nos cards para descobrir todas as ferramentas!", emoji: "💡" },
  benefits: { text: "+10 mil mídias em alta qualidade esperando você!", emoji: "📦" },
  cta: { text: "É agora! Comece a transformar seu conteúdo hoje!", emoji: "🚀" },
};

// Individual Clawd component for each section
export function Clawd({ sectionId }: { sectionId: string }) {
  const [isVisible, setIsVisible] = useState(false);

  const message = sectionMessages[sectionId];

  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId]);

  if (!message) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex items-start gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Clawd Avatar */}
          <motion.div
            className="relative flex-shrink-0"
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
              <img 
                src="/clawd.jpg" 
                alt="Clawd" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Speech Bubble - Mac Style */}
          <motion.div
            className="relative flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div 
              className="relative rounded-xl overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Mac Header */}
              <div 
                className="flex items-center gap-1.5 px-3 py-2"
                style={{
                  background: 'rgba(30, 30, 30, 0.9)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28c941' }} />
              </div>
              
              {/* Content */}
              <div className="p-3">
                <p className="text-sm text-white/90 font-medium leading-relaxed font-mono">
                  <span className="mr-1">{message.emoji}</span>
                  {message.text}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
