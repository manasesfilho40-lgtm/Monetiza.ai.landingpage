"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  baseX: number;
  baseY: number;
  speed: number;
  phase: number;
  amplitude: number;
  hue: number;
  opacity: number;
}

export default function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Throttle resize
    let resizeTimeout: NodeJS.Timeout;
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 100);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize fewer bubbles (only 4 instead of 7)
    const initBubbles = () => {
      const bubbles: Bubble[] = [];
      const bubbleCount = 4;

      for (let i = 0; i < bubbleCount; i++) {
        const radius = Math.random() * 100 + 120; // Smaller: 120-220px
        const baseX = Math.random() * canvas.width;
        const baseY = Math.random() * canvas.height;

        bubbles.push({
          x: baseX,
          y: baseY,
          radius,
          baseX,
          baseY,
          speed: Math.random() * 0.0002 + 0.0001, // Slower
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 80 + 40, // Smaller movement
          hue: 22 + Math.random() * 6 - 3,
          opacity: 0.08 + Math.random() * 0.04, // More transparent
        });
      }

      bubblesRef.current = bubbles;
    };

    initBubbles();

    const drawBubble = (bubble: Bubble, time: number) => {
      const { radius, hue, opacity } = bubble;

      // Calculate position with wrap-around
      const offset = Math.sin(time * bubble.speed + bubble.phase) * bubble.amplitude;
      bubble.x = ((bubble.baseX + offset) % canvas.width + canvas.width) % canvas.width;
      bubble.y = ((bubble.baseY + offset * 0.5) % canvas.height + canvas.height) % canvas.height;

      // Skip if off-screen (with margin)
      if (bubble.x < -radius || bubble.x > canvas.width + radius ||
          bubble.y < -radius || bubble.y > canvas.height + radius) {
        return;
      }

      // Simple gradient - less complex
      const gradient = ctx.createRadialGradient(
        bubble.x - radius * 0.3,
        bubble.y - radius * 0.3,
        0,
        bubble.x,
        bubble.y,
        radius
      );
      
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${opacity * 1.2})`);
      gradient.addColorStop(0.6, `hsla(${hue}, 75%, 50%, ${opacity * 0.6})`);
      gradient.addColorStop(1, `hsla(${hue}, 70%, 40%, 0)`);

      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Simple highlight
      ctx.beginPath();
      ctx.ellipse(
        bubble.x - radius * 0.3,
        bubble.y - radius * 0.35,
        radius * 0.25,
        radius * 0.15,
        -0.4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
      ctx.fill();
    };

    let lastTime = 0;
    const targetFPS = 30; // Reduced from 60 to 30
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      // Throttle to 30fps
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      timeRef.current += 33; // ~30fps
      const time = timeRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all bubbles
      bubblesRef.current.forEach((bubble) => {
        drawBubble(bubble, time);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        willChange: 'transform',
      }}
    />
  );
}
