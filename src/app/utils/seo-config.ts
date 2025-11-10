// seo-config.ts
import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'SADIF - استشارات هندسية سعودية',
  description: 'شركة استشارات هندسية متخصصة في التصميم المعماري، الداخلي، وتصميم الحدائق.',
  keywords: 'تصميم معماري, تصميم داخلي, تصميم حدائق, استشارات هندسية, السعودية',
  authors: [{ name: 'SADIF' }],
  openGraph: {
    title: 'SADIF - استشارات هندسية',
    description: 'قيادة التصميم المبتكر والمستدام.',
    url: 'https://sadif.sa',
    siteName: 'SADIF',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SADIF - استشارات هندسية',
    description: 'قيادة التصميم المبتكر والمستدام.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SADIF',
  url: 'https://sadif.sa',
  logo: 'https://sadif.sa/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966-559-033-519',
    contactType: 'customer service',
  },
};