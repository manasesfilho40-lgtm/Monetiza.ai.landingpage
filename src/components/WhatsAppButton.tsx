"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const openWA = () => {
    const phone = '5563992284738';
    const msg = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative inline-flex overflow-hidden rounded-full" style={{ borderRadius: '60px' }}>
        {/* Spinning conic gradient */}
        <div 
          className="absolute -top-[200%] -bottom-[200%] left-0 right-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent 200deg, #25D366, transparent)',
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
        <motion.button
          onClick={openWA}
          className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full cursor-pointer outline-none overflow-hidden group"
          style={{
            backgroundColor: 'transparent',
            color: '#f0efe9',
            borderRadius: '58px',
            border: 'none',
            transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 3,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Slide-in fill */}
          <span 
            className="absolute inset-0 rounded-full bg-[#25D366] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]"
            style={{ zIndex: 0, borderRadius: '58px' }}
          />
          
          {/* Icon */}
          <svg
            className="relative z-10 w-5 h-5 fill-white transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-5"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
          </svg>
          
          {/* Text */}
          <span className="relative z-10 text-[15px] font-semibold text-white tracking-tight whitespace-nowrap">
            Chat no WhatsApp
          </span>
        </motion.button>

        <style jsx global>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </motion.div>
  );
}
