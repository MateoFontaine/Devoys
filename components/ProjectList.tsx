"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Datos de tus proyectos (Portfolio)
const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Sistema Web / React",
    // Usa colores o gradientes por ahora si no tienes fotos
    color: "from-blue-900 to-slate-900", 
  },
  {
    id: 2,
    title: "E-Commerce Luxury",
    category: "Shopify / Next.js",
    color: "from-[#f53a87] to-[#c126cb]", // Tus colores de marca
  },
  {
    id: 3,
    title: "AI Medical Scanner",
    category: "App Nativa / Python",
    color: "from-emerald-900 to-black",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Plataforma Web",
    color: "from-orange-900 to-black",
  },
];

export const ProjectList = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="proyectos" className="py-24 px-6 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* --- COLUMNA IZQUIERDA: La Lista --- */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest">
            Proyectos Seleccionados
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(project)}
              className="group relative border-t border-white/10 py-8 cursor-pointer transition-colors hover:bg-white/5 px-4"
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${activeProject.id === project.id ? "text-white" : "text-gray-600"}`}>
                  {project.title}
                </h3>
                <ArrowUpRight 
                  className={`w-6 h-6 transition-all duration-300 ${activeProject.id === project.id ? "text-white opacity-100 rotate-45" : "text-gray-600 opacity-0"}`} 
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 font-mono">{project.category}</p>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* --- COLUMNA DERECHA: La Imagen (Preview) --- */}
        <div className="hidden md:block w-1/2 sticky top-32">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} flex items-center justify-center`}
              >
                {/* AQUÍ IRÍA LA FOTO DEL PROYECTO REAL (<img src=... />) */}
                {/* Por ahora pongo el título como placeholder */}
                <span className="text-white/20 text-5xl font-bold uppercase tracking-widest">
                  {activeProject.title}
                </span>
              </motion.div>
            </AnimatePresence>
            
            {/* Overlay de brillo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          
          <div className="mt-6 flex justify-between text-gray-400 font-mono text-xs">
             <span>CLIENT: CONFIDENTIAL</span>
             <span>YEAR: 2025</span>
          </div>
        </div>

      </div>
    </section>
  );
};