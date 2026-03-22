"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";

export function ClawdMascot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Array<{ type: "user" | "clawd"; text: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Show initial bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { type: "user", text: inputValue }]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate Clawd response
    setTimeout(() => {
      const responses = [
        "Ótima pergunta! Com o Monetiza.ai você pode criar roteiros virais em segundos! 🚀",
        "Vou te ajudar! O segredo está nos primeiros 3 segundos do vídeo!",
        "Excelente! Nossa IA pode gerar ganchos perfeitos para seu conteúdo!",
        "Já pensou em ter +10.000 mídias livres de direitos? Isso é só o começo! ✨",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: "clawd", text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed bottom-28 right-6 z-50 max-w-[260px]"
          >
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 shadow-xl border border-orange-200/50">
              <button
                onClick={() => setShowBubble(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-3 h-3 text-gray-500" />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🤖</span>
                <span className="font-semibold text-gray-800">Clawd</span>
              </div>
              <p className="text-gray-600 text-sm">Olá! Quer criar conteúdo viral? Clica em mim! 🚀</p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-br from-orange-50 to-amber-50 rotate-45 border-r border-b border-orange-200/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Mascot Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -4, 0],
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Clawd Face */}
        <svg viewBox="0 0 64 64" className="w-11 h-11">
          <circle cx="32" cy="32" r="28" fill="white" />
          {/* Eyes */}
          <ellipse cx="23" cy="28" rx="4" ry="5" fill="#1a1a1a" />
          <ellipse cx="41" cy="28" rx="4" ry="5" fill="#1a1a1a" />
          {/* Eye shine */}
          <circle cx="24" cy="26" r="1.5" fill="white" />
          <circle cx="42" cy="26" r="1.5" fill="white" />
          {/* Smile */}
          <path d="M 24 38 Q 32 48 40 38" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Blush */}
          <ellipse cx="16" cy="34" rx="4" ry="2" fill="#ffb3b3" opacity="0.7" />
          <ellipse cx="48" cy="34" rx="4" ry="2" fill="#ffb3b3" opacity="0.7" />
          {/* Sparkle */}
          <path d="M 32 4 L 32 10 M 29 7 L 35 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
        )}
        
        {/* Notification dot */}
        {!isOpen && showBubble && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>

      {/* Mac-style Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
          >
            {/* Mac Window Frame */}
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
              {/* Mac Title Bar */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200/70">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors group"
                  >
                    <X className="w-2 h-2 text-[#990000] opacity-0 group-hover:opacity-100 mx-auto" />
                  </button>
                  <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
                  <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
                </div>
                
                {/* Title */}
                <div className="flex-1 text-center">
                  <span className="text-xs font-medium text-gray-500">Clawd — Assistente IA</span>
                </div>
                
                <div className="w-14" /> {/* Spacer for balance */}
              </div>

              {/* Header with Clawd */}
              <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-4">
                <div className="flex items-center gap-3">
                  {/* Animated Clawd */}
                  <motion.div
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <svg viewBox="0 0 64 64" className="w-9 h-9">
                      <circle cx="32" cy="32" r="26" fill="white" />
                      <ellipse cx="23" cy="28" rx="3.5" ry="4.5" fill="#1a1a1a" />
                      <ellipse cx="41" cy="28" rx="3.5" ry="4.5" fill="#1a1a1a" />
                      <circle cx="24" cy="26" r="1.5" fill="white" />
                      <circle cx="42" cy="26" r="1.5" fill="white" />
                      <path d="M 24 38 Q 32 46 40 38" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <ellipse cx="16" cy="34" rx="3.5" ry="2" fill="#ffb3b3" opacity="0.7" />
                      <ellipse cx="48" cy="34" rx="3.5" ry="2" fill="#ffb3b3" opacity="0.7" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Clawd</h3>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-white/80 text-xs">Online agora</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
                {/* Welcome message */}
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg"
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-gray-500 text-sm mb-2">Olá! Eu sou o <strong className="text-orange-600">Clawd</strong> 👋</p>
                    <p className="text-gray-400 text-xs">Pergunte-me sobre como criar conteúdo viral!</p>
                  </div>
                )}

                {/* Messages */}
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-md"
                          : "bg-gray-100 text-gray-700 rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area - Mac Style */}
              <div className="p-3 border-t border-gray-200/70 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Digite sua mensagem..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <motion.button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
                
                {/* CTA Link */}
                <a
                  href="https://pay.cakto.com.br/3bwv3tq_781899?affiliate=gx2G2jnR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-center text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  🚀 Quero criar conteúdo viral agora!
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
