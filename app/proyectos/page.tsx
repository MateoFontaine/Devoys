"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  // Lógica Spotlight
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    // CAMBIO CLAVE 1:
    // h-screen + overflow-y-scroll: Hace que el main tenga su propio scroll
    // snap-y snap-mandatory: Activa el magnetismo vertical obligatorio
    <main 
      className="bg-[#000212] h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth selection:bg-[#f53a87] selection:text-white"
      onMouseMove={handleMouseMove}
    >
      
      {/* --- SECCIÓN 1: HEADER (SNAP START) --- */}
      {/* Agregamos 'snap-start' y aseguramos que ocupe toda la pantalla (min-h-screen) */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start">
         
         {/* Fondo Devoys Gigante */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="text-[20vw] font-bold text-white/[0.02] tracking-widest leading-none whitespace-nowrap">
                DEVOYS
            </span>
            <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black"
                style={{
                  maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                  WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                  backgroundColor: "transparent"
                }}
            >
                <span className="text-[20vw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f53a87]/30 via-white/20 to-[#c126cb]/30 tracking-widest leading-none whitespace-nowrap blur-sm">
                  DEVOYS
                </span>
            </motion.div>
         </div>

         {/* Contenido Header */}
         <div className="relative z-10 text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f53a87] mr-2 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">
                Portfolio 2026
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
            >
              Casos de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                Éxito Digital.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-xl mx-auto text-lg"
            >
              Ingeniería y diseño aplicados a resultados reales.
              <br />
              <span className="text-sm opacity-50 mt-4 block animate-bounce">↓ Desliza para ver ↓</span>
            </motion.p>
         </div>
      </section>


      {/* --- SECCIÓN 2: PROYECTOS (SNAP INTERNO) --- */}
      <ProjectShowcase />


      {/* --- SECCIÓN 3: CIERRE (SNAP START) --- */}
      {/* Agrupamos Contacto y Footer en una sección final magnética */}
      <section className="relative z-10 bg-[#000212] snap-start min-h-screen flex flex-col justify-end">
         <div className="flex-1 flex items-center justify-center">
             <Contact />
         </div>
         <Footer />
      </section>
      
    </main>
  );
}