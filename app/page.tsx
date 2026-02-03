import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase"; // El dashboard 3D
import { Services } from "@/components/Services";         // Bento Grid
import { Contact } from "@/components/Contact";           // <--- NUEVO
import { Footer } from "@/components/Footer";             // <--- NUEVO

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <WorkShowcase />
      <Services />
      
      {/* Sección de Contacto que lleva al cierre */}
      <Contact />
      
      {/* Footer gigante */}
      <Footer />
    </main>
  );
}