import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// Fuente
const inter = Inter({ subsets: ["latin"] });

// 1. CONFIGURACIÓN DEL VIEWPORT (Barra de estado, escala móvil)
export const viewport: Viewport = {
  themeColor: "#000212", // Pinta la barra de estado del navegador del mismo color que tu fondo
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Evita zoom innecesario en inputs para sensación de App nativa
};

// 2. SEO Y METADATA COMPLETA
export const metadata: Metadata = {
  // URL base para que las imágenes de redes sociales funcionen bien
  metadataBase: new URL("https://devoys.com.ar"), // Cambia esto por tu dominio real cuando lo tengas

  title: {
    default: "Devoys | Ingeniería de Software & Diseño Digital",
    template: "%s | Devoys", // Para que otras páginas sean "Proyectos | Devoys"
  },
  
  description: "Agencia de desarrollo de software minimalista. Creamos sitios web de alto impacto, aplicaciones móviles y sistemas a medida que transforman negocios.",
  
  keywords: [
    "Desarrollo Web", 
    "Diseño Web Argentina", 
    "Software a Medida", 
    "App Development", 
    "Next.js Expertos", 
    "React Native", 
    "Agencia Digital", 
    "Pinamar", 
    "Devoys"
  ],

  authors: [{ name: "Mateo Fontaine" }, { name: "Devoys Team" }],
  creator: "Devoys",
  
  // Iconos (Favicon, iOS, Android)
  icons: {
    icon: "/Logo.png", // Icono en la pestaña del navegador
    shortcut: "/Logo.png", // Icono de acceso directo
    apple: "/Logo.png", // Icono para iPhone/iPad (Home Screen)
  },

  // Open Graph (Cómo se ve cuando compartes el link en WhatsApp/LinkedIn)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://devoys.com",
    title: "Devoys | Elevamos tu Visión Digital",
    description: "Ingeniería de software y diseño minimalista para empresas que buscan escalar.",
    siteName: "Devoys",
    images: [
      {
        url: "/Logo.png", // Imagen que sale en WhatsApp (1200x630px)
        width: 1200,
        height: 630,
        alt: "Devoys - Ingeniería Visual",
      },
    ],
  },

  // Twitter Card (Cómo se ve en X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Devoys | Software Studio",
    description: "Minimalismo y potencia en cada línea de código.",
    images: ["/og-image.jpg"],
  },

  // Configuración para Web App (PWA)
  appleWebApp: {
    capable: true,
    title: "Devoys",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth"> 
      <body className={`${inter.className} antialiased bg-[#000212] text-[#ededed] selection:bg-[#f53a87] selection:text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}