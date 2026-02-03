import { ProjectShowcase } from "@/components/ProjectShowcase"; // <--- Importar
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#000212]">
      
      {/* Header Breve */}
      <div className="pt-32 pb-10 text-center px-4">
         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Casos de Estudio
         </h1>
         <p className="text-gray-400">Innovación aplicada a negocios reales.</p>
      </div>

      {/* El Showcase de pantalla completa */}
      <ProjectShowcase />

      {/* Cierre */}
      <Contact />
      <Footer />
    </main>
  );
}