"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Rocket, Globe, ShieldCheck } from "lucide-react";

// Datos de tus servicios
const services = [
  {
    title: "Desarrollo Web Full Stack",
    description: "Sitios corporativos y aplicaciones web complejas con Next.js. Velocidad y SEO incluidos.",
    icon: <Code2 className="w-8 h-8 text-[#f53a87]" />,
    colSpan: "col-span-12 md:col-span-8", // Ocupa más espacio
  },
  {
    title: "Apps Móviles",
    description: "iOS y Android nativo o híbrido. Tu negocio en el bolsillo de tus clientes.",
    icon: <Smartphone className="w-8 h-8 text-[#c126cb]" />,
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Sistemas a Medida",
    description: "Dashboards, CRMs y automatización de procesos internos.",
    icon: <Database className="w-8 h-8 text-indigo-400" />,
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Optimización & SEO",
    description: "Hacemos que Google te ame. Performance auditada al 100%.",
    icon: <Rocket className="w-8 h-8 text-green-400" />,
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Ciberseguridad",
    description: "Protección de datos y arquitecturas seguras desde el día uno.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    colSpan: "col-span-12 md:col-span-4",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 px-4 max-w-7xl mx-auto relative">
      
      {/* Título de la sección */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
          Nuestro Arsenal Tecnológico.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          No usamos plantillas. Construimos soluciones digitales píxel a píxel adaptadas a tu negocio.
        </p>
      </div>

      {/* Grid Bento */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

// Componente de Tarjeta con Efecto Spotlight
const Card = ({ title, description, icon, colSpan }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${colSpan} relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] px-8 py-10`}
    >
      {/* El efecto Spotlight (El brillo que sigue al mouse) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      
      {/* Contenido de la tarjeta */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-6 bg-white/5 w-14 h-14 rounded-lg flex items-center justify-center border border-white/5">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};