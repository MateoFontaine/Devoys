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
    gradient: "from-[#064e3b] to-[#022c22]", 
    textColor: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/50",
    buttonColor: "bg-emerald-500 text-black hover:bg-emerald-400",
    desktopImg: "/proyectos/padel-desktop.png", 
    mobileImg: "/proyectos/padel-mobile.png",
  },
  {
    id: 2,
    title: "NLR Abogados",
    category: "Corporate & Legal",
    description: "Identidad digital sobria y de alto rendimiento. CMS autoadministrable para la gestión de causas, blog legal y turnero digital integrado.",
    tech: ["Next.js", "Tailwind", "Sanity"],
    gradient: "from-[#1e1b4b] to-[#0f172a]", 
    textColor: "text-indigo-400",
    borderColor: "group-hover:border-indigo-500/50",
    buttonColor: "bg-indigo-500 text-white hover:bg-indigo-400",
    desktopImg: "/proyectos/nlr-desktop.png",
    mobileImg: "/proyectos/nlr-mobile.png",
  },
];

export const ProjectShowcase = () => {
  return (
    <>
      {projects.map((project, index) => (
        <Card 
          key={project.id} 
          project={project} 
          index={index} 
          total={projects.length} 
        />
      ))}
    </>
  );
};

const Card = ({ project, index, total }: { project: any, index: number, total: number }) => {
  return (
    // CAMBIO CLAVE: snap-start (o snap-center)
    // Esto obliga al scroll a detenerse exactamente al inicio de este componente
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#000212] snap-start border-b border-white/5">
      
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }} // Se activa apenas entra
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`relative w-full max-w-7xl h-[85vh] md:h-[85vh] rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] overflow-hidden group ${project.borderColor} shadow-2xl`}
      >
        
        {/* --- FONDO DEGRADADO --- */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
        
        {/* --- RUIDO --- */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* --- CONTENIDO --- */}
        <div className="relative h-full flex flex-col md:flex-row p-6 md:p-12 gap-8 md:gap-16">
          
          {/* IZQUIERDA: Info */}
          <div className="flex flex-col justify-center w-full md:w-2/5 z-20">
             <div className="flex items-center gap-4 mb-6">
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono text-gray-300">
                    {index + 1}/{total}
                 </div>
                 <span className={`text-xs font-bold uppercase tracking-widest ${project.textColor}`}>
                    {project.category}
                 </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               {project.title}
             </h2>
             <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
               {project.description}
             </p>

             <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 font-mono border border-white/5">
                    {t}
                  </span>
                ))}
             </div>
             
             <button className={`w-fit px-6 py-3 rounded-full flex items-center gap-2 font-bold text-sm transition-transform hover:scale-105 shadow-lg ${project.buttonColor}`}>
                Ver Proyecto Completo <ArrowUpRight className="w-4 h-4" />
             </button>
          </div>

          {/* DERECHA: Visuals */}
          <div className="relative w-full md:w-3/5 h-full flex items-center justify-center md:justify-end">
             
             {/* BROWSER (Desktop) */}
             <div className="relative w-full md:w-[90%] aspect-[16/10] bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Header Browser */}
                <div className="h-8 bg-[#0f0f0f] rounded-t-xl flex items-center px-4 gap-2 border-b border-white/5">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                   </div>
                   <div className="ml-4 w-full max-w-[200px] h-2 bg-white/5 rounded-full" />
                </div>
                {/* Imagen */}
                <div className="relative w-full h-full bg-black overflow-hidden rounded-b-xl">
                   {project.desktopImg && (
                      <Image src={project.desktopImg} alt={project.title} fill className="object-cover object-top" />
                   )}
                   {/* Sombra interna */}
                   <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none" />
                </div>
             </div>

             {/* PHONE (Mobile) */}
             <div className="absolute bottom-[-20px] left-4 md:left-[-20px] w-[80px] md:w-[140px] aspect-[9/19] bg-[#121212] rounded-[1.2rem] md:rounded-[2rem] border-[3px] md:border-[5px] border-[#2a2a2a] shadow-2xl z-30 transition-transform duration-700 group-hover:translate-y-[-15px]">
                <div className="w-full h-full relative overflow-hidden rounded-[1rem] md:rounded-[1.7rem] bg-black">
                   {project.mobileImg && (
                      <Image src={project.mobileImg} alt="Mobile View" fill className="object-cover object-top" />
                   )}
                </div>
             </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};