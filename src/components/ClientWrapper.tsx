'use client';

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import LoadingAnimation from "./LoadingAnimation";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1300); // مدة الظهور 2 ثانية
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <LoadingAnimation />}
      {!loading && (
        <>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
