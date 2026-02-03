"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const Hero = () => {
  // --- LÓGICA DEL SPOTLIGHT ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    // Calculamos la posición del mouse relativa al contenedor
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 overflow-hidden w-full bg-[#000212] group"
      onMouseMove={handleMouseMove} // Detectamos el mouse en toda la sección
    >
      
      {/* --- FONDO ANIMADO --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Orbe 1: Rosa */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f53a87]/20 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Orbe 2: Violeta */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.1, 0.8, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#c126cb]/15 rounded-full blur-[120px] mix-blend-screen"
        />
        
        {/* Orbe 3: Centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      </div>

      {/* --- GRID DE FONDO --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* --- EFECTO SPOTLIGHT EN TEXTO DEVOYS --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
         
         {/* CAPA 1: Texto Oscuro (Siempre visible, muy tenue) */}
         <span className="text-[18vw] md:text-[22vw] font-bold text-white/[0.03] tracking-widest leading-none whitespace-nowrap">
            DEVOYS
         </span>

         {/* CAPA 2: Texto Brillante (Solo visible con la máscara del mouse) */}
         <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black"
            style={{
              // Esta máscara hace la magia: crea un agujero transparente donde está el mouse
              maskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
              WebkitMaskImage: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
              // Nota: en mask-image, 'black' significa visible y 'transparent' significa oculto.
              
              // Hacemos el fondo transparente para ver solo el texto
              backgroundColor: "transparent"
            }}
         >
            {/* Este texto brilla con el gradiente de la marca */}
            <span className="text-[18vw] md:text-[22vw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f53a87]/30 via-white/20 to-[#c126cb]/30 tracking-widest leading-none whitespace-nowrap blur-sm">
              DEVOYS
            </span>
         </motion.div>
      </div>


      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(193,38,203,0.3)]"
        >
          <span className="flex relative h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f53a87] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f53a87]"></span>
          </span>
          <span className="text-xs text-gray-200 font-medium tracking-wide uppercase">
            Agencia Digital
          </span>
        </motion.div>

        {/* Título H1 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
        >
          Elevamos tu <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
             Visión Digital.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Transformamos ideas complejas en software de alto impacto.
          Diseño minimalista, ingeniería robusta y escalabilidad infinita.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* Botón Principal */}
          <button className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-[0_0_30px_rgba(193,38,203,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(245,58,135,0.5)]">
             <div className="absolute inset-0 bg-gradient-to-r from-[#f53a87] to-[#c126cb] opacity-90 group-hover:opacity-100 transition-opacity" />
             <span className="relative flex items-center gap-2">
               Hablemos Ahora 
               <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </span>
          </button>
          
          {/* Botón Secundario */}
          <button className="px-8 py-4 text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all hover:border-white/20 hover:text-white backdrop-blur-sm">
            Explorar Servicios
          </button>
        </motion.div>
      </div>
      
    </section>
  );
};