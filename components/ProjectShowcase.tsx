"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PadelGo App",
    category: "Sports Platform",
    description: "La forma más rápida de reservar cancha. Ecosistema completo con pagos divididos, matchmaking por niveles y gestión de clubes en tiempo real.",
    tech: ["React Native", "Supabase", "Stripe"],
    // Link del proyecto
    href: "#", 
    // Estilos
    bgColor: "bg-[#022c22]", // Verde oscuro
    accentColor: "text-emerald-400",
    buttonColor: "bg-emerald-500 text-black hover:bg-emerald-400",
    // Imágenes
    desktopImg: "/proyectos/padel-desktop.png", 
    mobileImg: "/proyectos/padel-mobile.png",
  },
  {
    id: 2,
    title: "NLR Abogados",
    category: "Corporate & Legal",
    description: "Identidad digital sobria y de alto rendimiento. CMS autoadministrable para la gestión de causas, blog legal y turnero digital integrado.",
    tech: ["Next.js", "Tailwind", "Sanity"],
    // Link del proyecto
    href: "https://nlrabogados.com.ar",
    // Estilos
    bgColor: "bg-[#0f172a]", // Azul noche
    accentColor: "text-indigo-400",
    buttonColor: "bg-indigo-500 text-white hover:bg-indigo-400",
    // Imágenes
    desktopImg: "/proyectos/nlr-desktop.png",
    mobileImg: "/proyectos/nlr-mobile.png",
  },
  {
    id: 3,
    title: "HP Energy",
    category: "Infrastructure & Control",
    description: "Plataforma integral para gestión de proyectos de Alta Tensión. Control de obra, certificación de avances y monitoreo de recursos en infraestructura crítica.",
    tech: ["Next.js", "Tailwind", "Recharts"], 
    // Link del proyecto
    href: "https://hpenergy.com.ar",
    // Estilos (Industrial / Alta Tensión)
    bgColor: "bg-[#082f49]", // Azul Sky 950 (Industrial)
    accentColor: "text-[#38bdf8]", // Celeste eléctrico
    buttonColor: "bg-[#38bdf8] text-black hover:bg-sky-400",
    // Imágenes
    desktopImg: "/proyectos/hpenergy-desktop.jpeg",
    mobileImg: "/proyectos/hpenergy-mobile.jpeg",
  },
  {
    id: 4,
    title: "Menu QR",
    category: "SaaS & Gastronomy",
    description: "Carta digital inteligente y 100% autogestionable. Panel de administración en tiempo real para cambios de precios, control de stock y categorías dinámicas.",
    tech: ["Next.js", "Supabase", "Tailwind"], 
    // Link del proyecto
    href: "https://devoys.com.ar/menu",
    
    // ESTILOS (Gourmet / Apetito)
    // Fondo: Un "Warm Black" (Stone 950), más cálido que el negro puro.
    bgColor: "bg-[#1c1917]", 
    // Acento: Naranja vibrante (estimula el apetito)
    accentColor: "text-orange-500", 
    // Botón: Naranja intenso
    buttonColor: "bg-orange-600 text-white hover:bg-orange-500",
    
    // Imágenes
    desktopImg: "/proyectos/menu-desktop.png",
    mobileImg: "/proyectos/menu-mobile.png",
  },
];

export const ProjectShowcase = () => {
  return (
    <>
      {projects.map((project, index) => (
        <FullScreenSection 
          key={project.id} 
          project={project} 
          index={index} 
          total={projects.length} 
        />
      ))}
    </>
  );
};

const FullScreenSection = ({ project, index, total }: { project: any, index: number, total: number }) => {
  return (
    // SECCIÓN FULL SCREEN (SNAP START)
    <section className={`h-screen w-full flex items-center justify-center relative snap-start overflow-hidden ${project.bgColor}`}>
      
      {/* --- RUIDO (TEXTURA) --- */}
      <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* --- DEGRADADO SUAVE --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative w-full max-w-7xl h-full flex flex-col md:flex-row px-6 md:px-12 gap-10 md:gap-20 z-10 pt-20 md:pt-0">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
        <div className="flex flex-col justify-center w-full md:w-2/5 h-full order-2 md:order-1 pb-10 md:pb-0">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
               {/* Contador y Categoría */}
               <div className="flex items-center gap-4 mb-6 md:mb-8">
                   <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-mono text-white">
                      {index + 1}/{total}
                   </div>
                   <span className={`text-sm font-bold uppercase tracking-widest ${project.accentColor}`}>
                      {project.category}
                   </span>
               </div>
               
               {/* Título */}
               <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                 {project.title}
               </h2>
               
               {/* Descripción */}
               <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-md">
                 {project.description}
               </p>

               {/* Tecnologías */}
               <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-white/10 text-xs md:text-sm text-gray-200 font-mono border border-white/10 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
               </div>
               
               {/* BOTÓN CON LINK REAL */}
               <a 
                 href={project.href} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-fit block"
               >
                 <button className={`px-8 py-4 rounded-full flex items-center gap-3 font-bold text-sm md:text-base transition-transform hover:scale-105 shadow-2xl ${project.buttonColor}`}>
                    Ver Caso de Estudio <ArrowUpRight className="w-5 h-5" />
                 </button>
               </a>

           </motion.div>
        </div>

        {/* COLUMNA DERECHA: VISUALES (MOCKUPS) */}
        <div className="relative w-full md:w-3/5 h-full flex items-center justify-center md:justify-end order-1 md:order-2">
           
           {/* MOCKUP NAVEGADOR (Desktop) */}
           <motion.div 
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
             className="relative w-[90%] md:w-[110%] aspect-[16/10] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl z-10 md:translate-x-10"
           >
              {/* Barra Superior del Navegador */}
              <div className="h-6 md:h-10 bg-[#0f0f0f] rounded-t-xl flex items-center px-4 gap-2 border-b border-white/5">
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
                 </div>
              </div>
              {/* Imagen Desktop */}
              <div className="relative w-full h-full bg-black overflow-hidden rounded-b-xl group">
                 {project.desktopImg && (
                    <Image 
                      src={project.desktopImg} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-top transition-transform duration-[2s] group-hover:scale-105" 
                    />
                 )}
              </div>
           </motion.div>

           {/* MOCKUP CELULAR (Mobile) */}
           <motion.div 
             initial={{ y: 150, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="absolute bottom-[-10px] md:bottom-10 left-0 md:left-[-50px] w-[80px] md:w-[180px] aspect-[9/19] bg-[#121212] rounded-[1.2rem] md:rounded-[2.5rem] border-[3px] md:border-[6px] border-[#2a2a2a] shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-20"
           >
              <div className="w-full h-full relative overflow-hidden rounded-[1rem] md:rounded-[2.1rem] bg-black">
                 {project.mobileImg && (
                    <Image src={project.mobileImg} alt="Mobile View" fill className="object-cover object-top" />
                 )}
              </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};