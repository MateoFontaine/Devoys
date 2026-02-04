"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "hero" : "");

  // DETECTAR SI ESTAMOS EN LA PÁGINA DE PROYECTOS
  const isProjectsPage = pathname === "/proyectos";

  const navLinks = [
    { name: "Inicio", href: "/", id: "hero" },
    { name: "Servicios", href: "/#servicios", id: "servicios" },
    { name: "Proyectos", href: "/proyectos", type: "page" },
  ];

  // --- LÓGICA DE SCROLL SPY ---
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      const sections = ["servicios", "contacto"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          } else if (rect.top < 0 && rect.bottom > 150) {
             setActiveSection(sectionId);
             break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);


  const isLinkActive = (link: any) => {
    if (link.type === "page") {
      return pathname === link.href;
    } else {
      if (pathname !== "/") return false;
      if (link.href === "/" && activeSection === "hero") return true;
      return activeSection === link.id;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        // CAMBIO AQUÍ: Lógica para ocultar en mobile si es ProjectsPage
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#000212]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#000212]/60
          ${isProjectsPage ? "hidden md:block" : "block"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group relative w-10 h-10 md:w-14 md:h-12">
             <Image 
               src="/Logo.png" 
               alt="Devoys Logo"
               fill
               className="object-contain"
               priority
             />
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-[#f53a87] drop-shadow-[0_0_15px_rgba(245,58,135,1)] scale-105" 
                      : "text-gray-400 hover:text-white" 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:flex">
            <Link
              href="#contacto"
              className={`
                px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg
                ${activeSection === 'contacto' && pathname === '/'
                    ? "bg-[#f53a87] text-white shadow-[#f53a87]/60 scale-105" 
                    : "bg-white/10 text-white hover:bg-[#f53a87] hover:shadow-[#f53a87]/30"
                }
              `}
            >
              Contacto
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
      {/* También ocultamos el overlay si estamos en proyectos para evitar bugs si quedó abierto */}
      {!isProjectsPage && (
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="fixed inset-x-0 top-16 z-40 bg-[#000212] border-b border-white/10 md:hidden overflow-hidden"
            >
                <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link) => {
                    const isActive = isLinkActive(link);
                    return (
                        <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                            isActive 
                            ? "text-[#f53a87] bg-[#f53a87]/10 drop-shadow-[0_0_5px_rgba(245,58,135,0.5)]" 
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        >
                        {link.name}
                        </Link>
                    )
                })}
                <div className="h-px bg-white/10 my-2" />
                <Link
                    href="#contacto"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-center bg-gradient-to-r from-[#f53a87] to-[#c126cb] text-white rounded-lg font-bold shadow-lg shadow-[#c126cb]/20 active:scale-95 transition-transform"
                >
                    Contacto
                </Link>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      )}
    </>
  );
};