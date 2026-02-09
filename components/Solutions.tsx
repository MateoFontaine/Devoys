"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Zap, ArrowRight, X, ChevronLeft, ChevronRight, CheckCircle2, Scale } from "lucide-react";
import Image from "next/image";

// --- DATOS ---
const solutions = [
  {
    id: "gastro",
    title: "Gastro OS",
    subtitle: "Gestión Gastronómica Integral",
    description: "Menú QR autogestionable con control de stock y comandas. Elimina la fricción entre la cocina y el cliente.",
    icon: <Utensils className="w-6 h-6 text-orange-400" />,
    features: ["Cambios de precio en 1 clic", "Sin comisiones por venta", "Analytics de platos más vendidos"],
    gradient: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    buttonColor: "bg-orange-500 hover:bg-orange-400",
    images: [
      "/proyectos/menu-desktop.png",
      "/proyectos/menu2.png",
      "/proyectos/menu3.png",
      "/proyectos/menu4.png",
      "/proyectos/menu1.png",
    ]
  },
  {
    id: "legal", // ID único
    title: "Legal Web",
    subtitle: "Identidad Digital para Estudios",
    description: "Sitio web institucional de alto prestigio. Diseño sobrio que transmite confianza, con gestión de artículos legales y equipo profesional.",
    icon: <Scale className="w-6 h-6 text-indigo-400" />, // Icono de Balanza
    features: ["CMS para publicar Novedades", "Diseño Minimalista y Serio", "Optimización SEO Local"],
    // Colores Serios (Indigo / Azul Noche)
    gradient: "from-indigo-500/20 to-slate-500/5",
    border: "group-hover:border-indigo-500/50",
    buttonColor: "bg-indigo-500 hover:bg-indigo-400",
    images: [
      "/proyectos/nlr-desktop.png",
      "/proyectos/landing1.png",
      "/proyectos/landing2.png",
    ]
  },
  {
    id: "energy",
    title: "Energy Core",
    subtitle: "Infraestructura & Mantenimiento",
    description: "Dashboard para empresas de energía. Certificación de avance de obra y control de recursos.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    features: ["Certificados de obra digitales", "Geolocalización de cuadrillas", "Reportes PDF automáticos"],
    gradient: "from-blue-500/20 to-indigo-500/5",
    border: "group-hover:border-blue-500/50",
    buttonColor: "bg-blue-500 hover:bg-blue-400",
    images: [
      "/proyectos/hpenergy-desktop.jpeg",
      "/proyectos/hp1.png",
      "/proyectos/hp2.png",
      "/proyectos/hp3.png",
      "/proyectos/hp4.png",
      "/proyectos/hp5.png",
      "/proyectos/hp6.png",
    ]
  },
];

export const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  // Bloquear scroll
  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedSolution]);

  return (
    <section className="py-32 px-6 bg-[#000212] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#000212] to-[#000212] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4 block"
          >
            Nuestros Productos
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Sistemas Listos para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Escalar tu Operación.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <SolutionCard 
                key={item.id} 
                item={item} 
                index={index} 
                onClick={() => setSelectedSolution(item)} 
            />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedSolution && (
          <Modal 
            solution={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

// --- COMPONENTE TARJETA (Sin layoutId) ---
const SolutionCard = ({ item, index, onClick }: { item: any, index: number, onClick: () => void }) => {
  return (
    <motion.div
      // CAMBIO 1: Eliminamos layoutId para quitar la conexión física
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-opacity-0 transition-all duration-500 cursor-pointer h-full flex flex-col`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`absolute inset-0 rounded-3xl border border-transparent ${item.border} transition-colors duration-500`} />

      <div className="relative p-8 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">{item.subtitle}</p>
        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{item.description}</p>
        
        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform mt-auto pt-4 border-t border-white/5">
          Ver Demo & Precios <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENTE MODAL (Fade In / Fade Out) ---
const Modal = ({ solution, onClose }: { solution: any, onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: any) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % solution.images.length);
  };

  const prevImage = (e: any) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + solution.images.length) % solution.images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-[#0f0f0f] w-full max-w-7xl max-h-[85vh] md:max-h-[90vh] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl relative flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()} 
        >
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
          >
            <X size={20} />
          </button>

          {/* --- COLUMNA IZQUIERDA: CARRUSEL --- */}
          <div className="hidden md:block w-full md:w-2/3 relative bg-black">
             {/* AL QUITAR mode="wait", logramos el CROSS-FADE perfecto */}
             <AnimatePresence initial={false}>
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Más lento y suave
                    className="absolute inset-0"
                >
                    <Image 
                        src={solution.images[currentImage]} 
                        alt="Screenshot" 
                        fill 
                        className="object-cover object-top" 
                        priority // Carga prioritaria para evitar parpadeo de carga
                    />
                </motion.div>
             </AnimatePresence>

             {/* Controles del Carrusel */}
             {solution.images.length > 1 && (
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                     <button onClick={prevImage} className="p-3 rounded-full bg-black/60 border border-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-110">
                         <ChevronLeft size={20} />
                     </button>
                     <button onClick={nextImage} className="p-3 rounded-full bg-black/60 border border-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-110">
                         <ChevronRight size={20} />
                     </button>
                 </div>
             )}
          </div>

          {/* --- COLUMNA DERECHA: INFO --- */}
          <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col bg-[#0f0f0f] h-full overflow-y-auto">
             
             <div className="mb-auto">
                <div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 md:pt-0">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        {solution.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">{solution.title}</h3>
                        <p className="text-xs text-gray-500 font-mono uppercase mt-1 tracking-wider">{solution.subtitle}</p>
                    </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    {solution.description}
                </p>

                <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <h4 className="text-white text-xs font-bold uppercase mb-4 tracking-widest opacity-80">Incluye:</h4>
                    <ul className="space-y-3">
                        {solution.features.map((f: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-white/5 pb-4 md:pb-0">
                <button 
                  className={`w-full py-4 rounded-xl font-bold text-white text-base shadow-2xl transition-all hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2 ${solution.buttonColor}`}
                >
                    Solicitar Demo <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-gray-600 mt-3 font-mono">
                    IMPLEMENTACIÓN INMEDIATA
                </p>
             </div>

          </div>

        </motion.div>
      </motion.div>
    </>
  );
};