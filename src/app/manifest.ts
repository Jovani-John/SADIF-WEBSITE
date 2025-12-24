import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SADIF - شركة سديف الاستشارات الهندسية',
    short_name: 'SADIF',
    description: 'شركة سديف الاستشارات الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png', // ✅ استخدام الملف الصحيح
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png', // ✅ استخدام الملف الصحيح
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}