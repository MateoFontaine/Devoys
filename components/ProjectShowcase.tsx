"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Padel App",
    category: "Sports & Booking Platform",
    description: "Ecosistema completo para clubes y jugadores. Sistema de reservas en tiempo real, matchmaking inteligente por niveles y pagos divididos automatizados.",
    tech: ["React Native", "Supabase", "Stripe"],
    color: "from-emerald-500 to-green-600",
    bgAccent: "bg-emerald-500/10",
    desktopImg: "/proyectos/padel-desktop.png", 
    mobileImg: "/proyectos/padel-mobile.png",
  },
  {
    id: 2,
    title: "NLR Abogados",
    category: "Legal Tech & Corporate",
    description: "Transformación digital para firma legal líder. Sitio institucional de alto rendimiento con gestión de causas, turnero digital y CMS autoadministrable.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    color: "from-slate-700 to-gray-900",
    bgAccent: "bg-white/5",
    desktopImg: "/proyectos/nlr-desktop.png",
    mobileImg: "/proyectos/nlr-mobile.png",
  },
];

export const ProjectShowcase = () => {
  return (
    <div className="bg-[#000212]">
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

const ProjectSection = ({ project, index }: { project: any, index: number }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 border-b border-white/5 snap-center py-20">
      
      {/* Luz ambiental de fondo */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${project.bgAccent} rounded-full blur-[150px] opacity-20 pointer-events-none`} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* --- IZQUIERDA: TEXTO --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
            <div className="h-px w-10 bg-white/20"></div>
            <span className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
              {project.category}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 font-mono">
                {t}
              </span>
            ))}
          </div>

          <button className="group flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 hover:border-white transition-all">
            Ver Caso de Estudio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* --- DERECHA: MOCKUPS CON IMÁGENES REALES --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative flex items-center justify-center perspective-1000"
        >
          {/* 1. LAPTOP FRAME */}
          {/* CAMBIO: Usamos aspect-video (16:9) que es el estándar de pantallas HD para que no se corte */}
          <div className="relative w-[500px] md:w-[650px] aspect-video bg-[#1a1a1a] rounded-t-2xl border-[4px] border-[#2a2a2a] shadow-2xl z-10">
            {/* Pantalla Laptop */}
            <div className="w-full h-full bg-black overflow-hidden rounded-t-lg relative flex flex-col">
              
              {/* Barra Superior Laptop */}
              <div className="h-6 bg-[#111] flex items-center px-4 gap-1.5 border-b border-white/5 z-20 relative shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              
              {/* --- IMAGEN DESKTOP --- */}
              <div className="relative w-full h-full">
                {project.desktopImg ? (
                  <Image 
                    src={project.desktopImg} 
                    alt={`${project.title} Desktop`}
                    fill
                    className="object-cover object-top" 
                  />
                ) : (
                   <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`}></div>
                )}
              </div>
            </div>
            
            {/* Base Laptop */}
            <div className="absolute -bottom-4 left-0 w-full h-4 bg-[#222] rounded-b-xl flex justify-center">
               <div className="w-1/3 h-1 bg-[#333] rounded-b-md"></div>
            </div>
          </div>

          {/* 2. PHONE FRAME */}
          <div className="absolute -bottom-10 -right-4 md:right-10 w-[120px] md:w-[140px] aspect-[9/19.5] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
             {/* Notch (Cámara Frontal) - CAMBIO: Más pequeño */}
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full z-30 pointer-events-none"></div>
             
             {/* --- IMAGEN MOBILE --- */}
             <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden rounded-[1.5rem]">
                {project.mobileImg ? (
                  <Image 
                    src={project.mobileImg} 
                    alt={`${project.title} Mobile`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-30`}></div>
                )}
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};