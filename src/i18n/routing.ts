import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // قائمة اللغات المدعومة
  locales: ['ar', 'en'],
  
  // اللغة الافتراضية
  defaultLocale: 'ar',
  
  // استخدام prefix للغة في الـ URL
  localePrefix: 'as-needed', // هيظهر /en للإنجليزي، و / للعربي (default)
  
  // المسارات
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/projects': '/projects',
    '/contact': '/contact',
  }
});

// هنا بنصدّر الـ navigation helpers
export const { Link, redirect, usePathname, useRouter } = 
  createNavigation(routing);