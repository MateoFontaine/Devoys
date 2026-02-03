"use client";

import { motion } from "framer-motion";
import { 
  Code2, Cpu, Globe, Layers, Zap, Wifi, 
  Terminal, Shield, Cloud, Smartphone 
} from "lucide-react";

// Lista de tecnologías (Iconos + Nombres)
const techs = [
  { name: "Next.js", icon: <Globe /> },
  { name: "React", icon: <Code2 /> },
  { name: "TypeScript", icon: <Terminal /> },
  { name: "Node.js", icon: <Cpu /> },
  { name: "Supabase", icon: <DatabaseIcon /> }, // Icono custom abajo
  { name: "AWS", icon: <Cloud /> },
  { name: "Tailwind", icon: <Layers /> },
  { name: "Framer", icon: <Zap /> },
];

// Duplicamos la lista para que el loop sea infinito sin cortes
const infiniteTechs = [...techs, ...techs, ...techs];

export const TechStream = () => {
  return (
    <section className="py-20 overflow-hidden relative border-y border-white/5 bg-white/[0.02]">
      
      {/* Título pequeño */}
      <div className="text-center mb-10">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
          Powering the next generation with
        </p>
      </div>

      {/* --- MÁSCARA DE GRADIANTE (Para el fade a los costados) --- */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-[#000212] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-[#000212] to-transparent z-10 pointer-events-none" />

      {/* --- EL CARRUSEL --- */}
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Se mueve hacia la izquierda
          transition={{
            duration: 30, // Velocidad (más alto = más lento)
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-16 md:gap-24 pr-16 md:pr-24 whitespace-nowrap"
        >
          {infiniteTechs.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-default">
              {/* Icono que brilla al pasar el mouse */}
              <div className="text-gray-600 group-hover:text-[#f53a87] transition-colors duration-300 transform group-hover:scale-110">
                {item.icon}
              </div>
              {/* Nombre Tech */}
              <span className="text-xl md:text-2xl font-bold text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Icono simple para rellenar
function DatabaseIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}