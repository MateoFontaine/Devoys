"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // <--- IMPORTANTE: Importar Image
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#000212] pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* --- FONDO ANIMADO (Estilo Hero) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Orbe 1: Rosa (#f53a87) */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] left-[10%] w-[400px] h-[400px] bg-[#f53a87]/20 rounded-full blur-[100px]"
        />

        {/* Orbe 2: Violeta (#c126cb) */}
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 40, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#c126cb]/15 rounded-full blur-[100px]"
        />
        
        {/* Grid de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- CONTENIDO DEL FOOTER --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Misión */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
               
               {/* --- AQUÍ ESTÁ EL LOGO NUEVO --- */}
               <div className="relative w-8 h-8">
                  <Image 
                    src="/Logo.png" // <--- CAMBIA ESTO SI TU ARCHIVO TIENE OTRO NOMBRE
                    alt="Devoys Logo"
                    fill
                    className="object-contain"
                  />
               </div>

               <span className="text-xl font-bold text-white tracking-tight">DEVOYS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creando el estándar en desarrollo de software moderno. Minimalismo, potencia y escalabilidad.
            </p>
          </div>

          {/* Columna 2: Mapa del Sitio */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/" className="hover:text-[#f53a87] transition-colors">Inicio</a></li>
              <li><a href="/proyectos" className="hover:text-[#f53a87] transition-colors">Proyectos</a></li>
              <li><a href="/#servicios" className="hover:text-[#f53a87] transition-colors">Servicios</a></li>
              <li><a href="/#contacto" className="hover:text-[#f53a87] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white font-bold mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#c126cb] transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-[#c126cb] transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-[#c126cb] transition-colors">Sistemas a Medida</a></li>
              <li><a href="#" className="hover:text-[#c126cb] transition-colors">Consultoría IT</a></li>
            </ul>
          </div>

          {/* Columna 4: Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/company/devoys/" />
              <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/devoys.software/?hl=es-la" />
              {/* <SocialIcon icon={<Twitter size={20} />} href="#" />
              <SocialIcon icon={<Github size={20} />} href="#" /> */}
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © 2026 DEVOYS INC. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6 text-xs text-gray-600 font-mono">
            <a href="#" className="hover:text-gray-400 transition-colors">PRIVACIDAD</a>
            <a href="#" className="hover:text-gray-400 transition-colors">TÉRMINOS</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Componente pequeño para los iconos sociales con hover
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
};