"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { nombre, empresa, email, mensaje } = formData;
    
    // Armar el mensaje para WhatsApp
    let texto = `Hola! Nueva consulta desde la web:\n\n*Nombre:* ${nombre}\n`;
    if (empresa) texto += `*Empresa:* ${empresa}\n`;
    texto += `*Email:* ${email}\n*Mensaje:* ${mensaje}`;
    
    // Número de teléfono en formato internacional sin el '+'
    const numero = "5491133139403";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* --- COLUMNA IZQUIERDA: Info --- */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Hablemos de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f53a87] to-[#c126cb]">
                tu próximo hito.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              ¿Tienes un proyecto en mente? Nos encantan los desafíos técnicos. 
              Cuéntanos tu idea y te diremos cómo construirla.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Escríbenos</p>
                  <a href="mailto:hola@devoys.com" className="text-lg font-medium hover:text-white transition-colors">devoys.software@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Base</p>
                  <p className="text-lg font-medium">Pinamar, Argentina</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- COLUMNA DERECHA: Formulario Estilo Dashboard --- */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative"
        >
          {/* Brillo superior del borde */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <form className="flex flex-col gap-6" onSubmit={handleWhatsApp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f53a87] focus:ring-1 focus:ring-[#f53a87] transition-all" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Empresa (Opcional)</label>
                <input 
                  type="text" 
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Acme Inc." 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c126cb] focus:ring-1 focus:ring-[#c126cb] transition-all" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f53a87] focus:ring-1 focus:ring-[#f53a87] transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Mensaje</label>
              <textarea 
                rows={4} 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Cuéntanos sobre tu proyecto..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c126cb] focus:ring-1 focus:ring-[#c126cb] transition-all resize-none" 
              />
            </div>

            <button type="submit" className="group mt-2 w-full bg-gradient-to-r from-[#f53a87] to-[#c126cb] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(193,38,203,0.3)]">
              Enviar Mensaje
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};