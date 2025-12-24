import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../styles/globals.css";
import ClientWrapper from "../../components/ClientWrapper";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "SADIF - شركة سديف الاستشارات الهندسية",
  description:
    "شركة سديف الاستشارات الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع",
  keywords: [
    "سديف",
    "استشارات هندسية",
    "تصميم معماري",
    "إدارة مشاريع",
    "SADIF",
  ],
  authors: [{ name: "SADIF" }],

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://www.sadif.sa",
    siteName: "SADIF",
    title: "SADIF - شركة سديف الاستشارات الهندسية",
    description:
      "شركة سديف الاستشارات الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع",
    images: [
      {
        url: "/images/logoW.png", // ✅ تصحيح المسار
        width: 1200,
        height: 630,
        alt: "SADIF Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SADIF - شركة سديف الاستشارات الهندسية",
    description: "شركة سديف الاستشارات الهندسية - خبرة في المشاريع الهندسية",
    images: ["/images/logoW.png"], // ✅ تصحيح المسار
  },

  // Icons & Manifest
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // ✅ إضافة Android Chrome icons
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

// دالة مساعدة للتحقق من صحة اللغة
function isValidLocale(locale: string): locale is "ar" | "en" {
  return routing.locales.includes(locale as "ar" | "en");
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // تأكد أن اللغة صحيحة
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data (JSON-LD) for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SADIF - شركة سديف الاستشارات الهندسية",
    alternateName: "SADIF Engineering Consultancy",
    url: "https://www.sadif.sa",
    logo: "https://www.sadif.sa/images/logo.png", // ✅ تصحيح المسار
    description:
      "شركة سديف الاستشارات الهندسية - خبرة في المشاريع الهندسية والتصميم المعماري وإدارة المشاريع",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-559-033-519",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["ar", "en"],
    },
    sameAs: [
      "https://www.instagram.com/sadif.co/",
      "https://www.tiktok.com/@sadif510?is_from_webapp=1&sender_device=pc",
    ],
  };

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

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