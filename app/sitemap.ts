import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tudominio.com.ar',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Agregá otras rutas si tenés /contacto, /servicios, etc.
  ]
}