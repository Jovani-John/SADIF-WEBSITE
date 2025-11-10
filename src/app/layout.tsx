// app/layout.tsx
import { Metadata } from "next";
import { defaultMetadata, structuredData } from "./utils/seo-config";
import "../styles/globals.css";
import ClientWrapper from "../components/ClientWrapper";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
