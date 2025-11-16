/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل ضغط الاستجابات
  compress: true,
  
  // React Strict Mode
  reactStrictMode: true,
  
  // إيقاف source maps في الإنتاج للسرعة
  productionBrowserSourceMaps: false,

  // تحسينات الصور
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // استبدل بـ domain الصور إذا كان خارجياً
        port: '',
        pathname: '/**',
      },
    ],
    // استخدام WebP و AVIF للحجم الأصغر
    formats: ['image/webp', 'image/avif'],
    // أحجام الأجهزة المختلفة
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache الصور لمدة دقيقة
    minimumCacheTTL: 60,
    // تفعيل SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers للأمان والتخزين المؤقت
  async headers() {
    return [
      // Headers للصور (Cache طويل)
      {
        source: '/imags/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache لمدة سنة
          },
        ],
      },
      // Headers عامة
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
              img-src 'self' data: https:;
              connect-src 'self' https://api.web3forms.com;
            `.replace(/\s+/g, ' ').trim(),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },

  // Experimental features للأداء الأفضل
  experimental: {
    optimizeCss: true, // تحسين CSS
    optimizePackageImports: ['framer-motion', 'react-icons', 'leaflet'], // تحسين استيراد المكتبات الكبيرة
  },
};

module.exports = nextConfig;