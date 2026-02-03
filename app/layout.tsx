import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // Importamos el componente Navbar

// Configuración de la fuente Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devoys | Desarrollo de Software",
  description: "Agencia de desarrollo web y software minimalista, especializada en apps, landing pages y sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth"> 
      {/* Clases del body:
         - bg-[#000212]: El fondo oscuro estilo "Linear".
         - text-[#ededed]: Texto blanco suave.
         - selection:bg-indigo-500/30: Color de selección de texto personalizado.
      */}
      <body className={`${inter.className} antialiased bg-[#000212] text-[#ededed] selection:bg-indigo-500/30 overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}