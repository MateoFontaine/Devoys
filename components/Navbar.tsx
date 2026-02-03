"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
    { name: "Inicio", href: "/" }, // Agregamos Inicio
    { name: "Servicios", href: "/#servicios" }, // Agregamos / para que funcione desde otras páginas
    { name: "Proyectos", href: "/proyectos" }, // Enlace a la nueva página
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#000212]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#000212]/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* --- LOGO (Con el degradado nuevo) --- */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Icono 'D' con gradiente de fondo */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f53a87] to-[#c126cb] shadow-lg shadow-[#c126cb]/20 group-hover:shadow-[#c126cb]/50 transition-all duration-300 transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            
            {/* Texto DEVOYS con gradiente en las letras */}
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f53a87] via-[#c126cb] to-[#f53a87] bg-[length:200%_auto] bg-left group-hover:bg-right transition-all duration-500 ease-in-out">
              DEVOYS
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:flex">
            <Link
              href="#contacto"
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white/10 px-6 font-medium text-neutral-200 duration-300 hover:w-32 hover:bg-white/20 hover:text-white border border-white/10"
            >
              <span className="mr-2">Contacto</span>
              <div className="absolute right-3 translate-x-[150%] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </div>
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#000212] border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-center bg-gradient-to-r from-[#f53a87] to-[#c126cb] text-white rounded-lg font-bold shadow-lg shadow-[#c126cb]/20"
              >
                Empezar Proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};