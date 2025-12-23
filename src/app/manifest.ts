import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SADIF - شركة سديف للاستشارة الهندسية',
    short_name: 'SADIF',
    description: 'شركة سديف للاستشارة الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/imags/logoW.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/imags/logoW.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}