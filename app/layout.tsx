import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devoys.com.ar"),
  title: {
    default: "Devoys | Ingeniería de Software & Diseño Digital",
    template: "%s | Devoys",
  },
  description: "Agencia de desarrollo de software minimalista...",
  keywords: [
    "Desarrollo Web", "Diseño Web Argentina", "Software a Medida", 
    "App Development", "Next.js Expertos", "React Native", 
    "Agencia Digital", "Pinamar", "Devoys"
  ],
  authors: [{ name: "Mateo Fontaine" }, { name: "Devoys Team" }],
  creator: "Devoys",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://devoys.com",
    title: "Devoys | Elevamos tu Visión Digital",
    description: "Ingeniería de software y diseño minimalista...",
    siteName: "Devoys",
    images: [{ url: "/Logo.png", width: 1200, height: 630, alt: "Devoys" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devoys | Software Studio",
    description: "Minimalismo y potencia en cada línea de código.",
    images: ["/og-image.jpg"],
  },
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
    // AGREGADO AQUÍ: style={{ colorScheme: "dark" }}
    <html lang="es" className="scroll-smooth dark" style={{ colorScheme: "dark" }}> 
      <body className={`${inter.className} antialiased bg-[#000212] text-[#ededed] selection:bg-[#f53a87] selection:text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}