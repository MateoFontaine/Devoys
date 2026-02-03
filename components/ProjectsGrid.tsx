"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saint Thomas Golf",
    category: "Real Estate / Web",
    description: "Plataforma de gestión de propiedades y reservas para barrio cerrado. Integración con mapas interactivos.",
    color: "from-blue-900/40 to-slate-900/40",
    tech: ["Next.js", "Maps API", "Node.js"]
  },
  {
    id: 2,
    title: "Mainas Pizzas",
    category: "E-Commerce / Food",
    description: "App web progresiva (PWA) para pedidos online con seguimiento en tiempo real y panel de cocina.",
    color: "from-orange-900/40 to-red-900/40",
    tech: ["React", "Firebase", "Stripe"]
  },
  {
    id: 3,
    title: "HP Energy Dashboard",
    category: "Industrial / IoT",
    description: "Panel de control para monitoreo de consumo energético en tiempo real para planta industrial.",
    color: "from-emerald-900/40 to-teal-900/40",
    tech: ["Python", "WebSockets", "D3.js"]
  },
  {
    id: 4,
    title: "NLR Abogados",
    category: "Corporativo / CMS",
    description: "Sitio institucional con gestión de causas y turno online. Diseño sobrio y alto rendimiento.",
    color: "from-purple-900/40 to-indigo-900/40",
    tech: ["Astro", "Tailwind", "Sanity"]
  }
];

export const ProjectsGrid = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
          >
            {/* Imagen Abstracta (Placeholder) */}
            <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              {/* Overlay al hacer hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Botón flotante */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#f53a87] uppercase tracking-wider border border-[#f53a87]/20 bg-[#f53a87]/5 px-2 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#c126cb] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags de Tecnologías */}
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};