import { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../../styles/globals.css";
import ClientWrapper from "../../components/ClientWrapper";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "SADIF - شركة سديف للاستشارة الهندسية",
  description: "شركة سديف للاستشارة الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع",
  keywords: ["سديف", "استشارات هندسية", "تصميم معماري", "إدارة مشاريع", "SADIF"],
  authors: [{ name: "SADIF" }],
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://www.sadif.sa/en",
    siteName: "SADIF",
    title: "SADIF - شركة سديف للاستشارة الهندسية",
    description: "شركة سديف للاستشارة الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع",
    images: [
      {
        url: "/imags/logoW.png",
        width: 1200,
        height: 1200,
        alt: "SADIF Logo",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SADIF - شركة سديف للاستشارة الهندسية",
    description: "شركة سديف للاستشارة الهندسية - خبرة في المشاريع الهندسية",
    images: ["/imags/logoW.png"],
  },
  
  // Icons & Manifest
  icons: {
    icon: [
      { url: "/imags/logoW.png", sizes: "32x32", type: "image/png" },
      { url: "/imags/logoW.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/imags/logo.png",
  },
  // manifest سيتم توليده تلقائياً من app/manifest.ts
  
  // Verification (أضف لو عندك)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // تأكد أن اللغة صحيحة
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data (JSON-LD) for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SADIF - شركة سديف للاستشارة الهندسية',
    alternateName: 'SADIF Engineering Consultancy',
    url: 'https://www.sadif.sa/en',
    logo: 'https://www.sadif.sa/en/imags/logo.png',
    description: 'شركة سديف للاستشارة الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-559-033-519', // ضع رقم الهاتف الحقيقي
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['ar', 'en']
    },
    sameAs: [
      // ضع لينكات السوشيال ميديا هنا
       'https://www.instagram.com/sadif.co/',
      'https://www.tiktok.com/@sadif510?is_from_webapp=1&sender_device=pc',
      // 'https://www.linkedin.com/company/sadif',
      // 'https://twitter.com/sadif',
    ]
  };

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ClientWrapper>{children}</ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}