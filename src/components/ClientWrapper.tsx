'use client';

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import LoadingAnimation from "./LoadingAnimation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);

  useEffect(() => {
    // تحقق لو اللودينج ظهر قبل كده في الجلسة الحالية
    const loadingShown = sessionStorage.getItem('loadingShown');
    
    if (loadingShown === 'true') {
      // لو ظهر قبل كده، متظهروش تاني
      setLoading(false);
      setHasShownLoading(true);
    } else {
      // أول مرة، هيظهر اللودينج
      setLoading(true);
    }
  }, []);

  const handleLoadingFinish = () => {
    setLoading(false);
    setHasShownLoading(true);
    // احفظ في session storage إن اللودينج ظهر
    sessionStorage.setItem('loadingShown', 'true');
  };

  return (
    <>
      {loading && !hasShownLoading && <LoadingAnimation onFinish={handleLoadingFinish} />}
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