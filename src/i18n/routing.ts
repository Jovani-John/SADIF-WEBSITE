import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar', // العربية هي الافتراضية ✅
  localePrefix: 'as-needed', // مثالي - العربي بدون prefix ✅
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/projects': '/projects',
    '/contact': '/contact',
  }
});

export const { Link, redirect, usePathname, useRouter } = 
  createNavigation(routing);