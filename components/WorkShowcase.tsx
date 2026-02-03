"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const WorkShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 min-h-screen relative flex flex-col items-center justify-center perspective-1000"
      style={{ perspective: "1000px" }}
    >
      
      {/* Título */}
      <div className="text-center mb-10 md:mb-16 z-10 px-4">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4"
        >
          Ingeniería Visual.
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
        >
          Desde dashboards complejos en escritorio hasta experiencias nativas en móvil.
        </motion.p>
      </div>

      {/* --- CONTENEDOR TRANSFORMABLE (PC vs MOBILE) --- */}
      <motion.div
        style={{ rotateX, scale, opacity }}
        // AQUÍ ESTÁ LA MAGIA RESPONSIVE:
        // Mobile: max-w-[320px] (ancho de un celu), aspect-[9/19] (alto), rounded-3xl (muy redondo)
        // Desktop (md): max-w-6xl (ancho total), aspect-[16/9] (panorámico), rounded-xl (menos redondo)
        className="relative w-full max-w-[320px] md:max-w-6xl aspect-[9/19] md:aspect-[16/9] mx-auto bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] md:rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out"
      >
        {/* Glow de fondo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f53a87]/10 via-transparent to-[#c126cb]/10 pointer-events-none" />

        <div className="w-full h-full flex flex-col">
          
          {/* BARRA SUPERIOR (Cambia según dispositivo) */}
          <div className="h-14 md:h-10 border-b border-white/5 flex items-center justify-between md:justify-start px-6 md:px-4 gap-2 bg-black/20 shrink-0">
            
            {/* Botones (Solo en Desktop) */}
            <div className="hidden md:flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>

            {/* Hora (Solo Mobile - Simula iPhone) */}
            <div className="md:hidden text-xs font-bold text-gray-200">
               9:41
            </div>

            {/* URL / Título */}
            <div className="md:ml-4 px-3 py-1 rounded-md md:bg-white/5 text-[10px] md:text-xs text-gray-400 md:text-gray-500 font-mono md:border border-white/5">
              dashboard.devoys.app
            </div>

            {/* Icono Batería (Solo Mobile) */}
             <div className="md:hidden flex gap-1 items-center">
                <div className="w-4 h-2 border border-gray-500 rounded-sm relative">
                   <div className="absolute inset-0.5 bg-white w-[70%]"></div>
                </div>
             </div>
          </div>

          {/* CONTENIDO INTERNO (Layout cambia de Flex a Grid) */}
          <div className="flex-1 p-4 md:p-6 overflow-hidden">
            {/* Mobile: flex flex-col (uno abajo del otro) 
               Desktop: grid grid-cols-12 (diseño complejo)
            */}
            <div className="h-full flex flex-col gap-4 md:grid md:grid-cols-12 md:grid-rows-6 md:gap-4">
            
              {/* Widget Grande (Analytics) */}
              <div className="flex-1 md:flex-none md:col-span-8 md:row-span-4 rounded-2xl bg-white/5 border border-white/5 p-5 relative overflow-hidden group hover:border-[#f53a87]/30 transition-colors flex flex-col justify-between">
                 <div className="absolute top-0 right-0 p-4 opacity-50">
                    <div className="w-20 h-20 bg-[#f53a87]/20 blur-xl rounded-full"></div>
                 </div>
                 <h3 className="text-lg md:text-xl font-bold text-gray-200">Analytics</h3>
                 
                 {/* Gráfico simplificado */}
                 <div className="flex items-end gap-1 md:gap-2 h-24 md:h-32 mt-4">
                    {[40, 70, 45, 90, 60, 80, 50, 65, 30].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-t-sm hover:bg-[#c126cb] transition-colors" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
              </div>

              {/* Contenedor secundario para Mobile (Agrupa los widgets chicos) */}
              <div className="flex gap-4 md:contents">
                  {/* Widget Pequeño 1 (Score) */}
                  <div className="flex-1 md:col-span-4 md:row-span-2 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center items-center hover:border-[#c126cb]/30 transition-colors">
                     <div className="text-3xl md:text-4xl font-bold text-white mb-1">98.5%</div>
                     <div className="text-xs md:text-sm text-gray-400 text-center">Uptime</div>
                  </div>

                  {/* Widget Pequeño 2 (Users) */}
                  <div className="flex-1 md:col-span-4 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#f53a87]/20 to-[#c126cb]/20 border border-white/5 p-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                     <div>
                       <div className="text-xs md:text-sm text-gray-300">Users</div>
                       <div className="text-xl md:text-2xl font-bold text-white">1.2k</div>
                     </div>
                     <div className="animate-pulse w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] mt-2 md:mt-0"></div>
                  </div>
              </div>

              {/* Footer Widget */}
              <div className="h-12 md:h-auto md:col-span-12 md:row-span-2 rounded-xl md:rounded-lg bg-black/40 border border-white/5 p-3 md:p-4 flex items-center justify-between font-mono text-[10px] md:text-xs text-gray-500 shrink-0">
                 <span>&gt; System ready</span> 
                 <span>v2.0.4 mobile</span>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Luz ambiental */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#000212] to-transparent z-20"></div>
    </section>
  );
};