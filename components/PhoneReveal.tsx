"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const PadelProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Detectamos cuando este componente cruza la pantalla
  // "start end": cuando el top del elemento entra por el bottom de la pantalla
  // "end start": cuando el bottom del elemento se va por el top de la pantalla
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- ANIMACIONES FLUIDAS (Sin trabar el scroll) ---
  // El celular rota suavemente mientras pasas
  const rotateY = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [45, 0, -45]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  
  // El texto se mueve a diferente velocidad (Parallax)
  const textY = useTransform(scrollYProgress, [0.2, 0.8], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="py-32 min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }} // Clave para el 3D
    >
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- COLUMNA 1: TEXTO (Con Parallax suave) --- */}
        <motion.div style={{ y: textY, opacity }} className="flex flex-col justify-center order-2 md:order-1">
          <div className="inline-flex self-start items-center px-3 py-1 mb-6 border border-[#22c55e]/30 rounded-full bg-[#22c55e]/10">
             <span className="w-2 h-2 bg-[#22c55e] rounded-full mr-2 animate-pulse"></span>
             <span className="text-xs text-[#22c55e] font-bold tracking-wide uppercase">App Nativa iOS/Android</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Padel<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-emerald-600">Go</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Diseñamos una experiencia completa para jugadores y clubes. 
            Algoritmos de nivelación, reservas en 3 clics y pagos divididos automáticos.
          </p>

          <div className="flex flex-col gap-4 border-l-2 border-white/10 pl-6">
            <div>
              <h4 className="text-white font-bold">Stack Tecnológico</h4>
              <p className="text-sm text-gray-500 font-mono">React Native + Supabase + Stripe</p>
            </div>
            <div>
              <h4 className="text-white font-bold">Impacto</h4>
              <p className="text-sm text-gray-500 font-mono">+150% Reservas en el primer mes</p>
            </div>
          </div>
        </motion.div>

        {/* --- COLUMNA 2: EL CELULAR 3D --- */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <motion.div
            style={{ rotateY, scale, opacity }}
            className="relative w-[300px] h-[600px] bg-black border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-[0_0_50px_rgba(34,197,94,0.2)] overflow-hidden"
          >
            {/* Brillo Metálico del borde */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none z-20"></div>
            
            {/* Isla Dinámica */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex justify-center items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#333]"></div>
            </div>

            {/* --- PANTALLA DE LA APP --- */}
            <div className="w-full h-full bg-[#050505] flex flex-col relative overflow-hidden">
              
              {/* Fondo decorativo (Cancha) */}
              <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-[#22c55e]/20 to-transparent z-0"></div>

              {/* Header */}
              <div className="relative z-10 pt-16 px-6 pb-4 flex justify-between items-center">
                 <div>
                    <p className="text-gray-400 text-xs font-bold uppercase">Ubicación</p>
                    <div className="flex items-center gap-1 text-white font-bold">
                       Pinamar, ARG <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    🔔
                 </div>
              </div>

              {/* Card Principal: Partido Activo */}
              <div className="relative z-10 mx-4 bg-[#111] border border-white/10 rounded-3xl p-5 shadow-2xl">
                 <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#22c55e] text-black text-[10px] font-bold px-2 py-1 rounded-full">EN JUEGO</span>
                    <span className="text-gray-400 text-xs font-mono">00:45:20</span>
                 </div>
                 
                 <div className="flex justify-between items-center px-2">
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 mb-2"></div>
                       <span className="text-white text-xs font-bold">Mateo</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-500">VS</div>
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 mb-2"></div>
                       <span className="text-white text-xs font-bold">Rival</span>
                    </div>
                 </div>

                 <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#22c55e]"></div>
                 </div>
              </div>

              {/* Grid de Accesos Rápidos */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mx-4 mt-4">
                 <div className="bg-[#111] hover:bg-[#1a1a1a] transition-colors p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                       📅
                    </div>
                    <span className="text-gray-300 text-xs font-bold">Reservar</span>
                 </div>
                 <div className="bg-[#111] hover:bg-[#1a1a1a] transition-colors p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                       🏆
                    </div>
                    <span className="text-gray-300 text-xs font-bold">Torneos</span>
                 </div>
              </div>

              {/* Lista Scrollable */}
              <div className="relative z-10 mt-6 mx-4">
                 <h3 className="text-white font-bold text-sm mb-3">Canchas Disponibles</h3>
                 <div className="space-y-3">
                    {[1, 2].map((i) => (
                       <div key={i} className="flex items-center justify-between p-3 bg-[#111] border border-white/5 rounded-2xl">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center text-emerald-500">P{i}</div>
                             <div>
                                <p className="text-white text-xs font-bold">Cancha Cristal</p>
                                <p className="text-gray-500 text-[10px]">18:00 - 19:30</p>
                             </div>
                          </div>
                          <span className="text-white text-xs font-bold">$4000</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Barra inferior */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
            </div>
          </motion.div>

          {/* Sombra de piso (se mueve con el celular) */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-[-40px] w-[200px] h-[30px] bg-black/60 blur-xl rounded-[100%] z-[-1]" 
          />
        </div>

      </div>
      
      {/* Luz ambiental sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};