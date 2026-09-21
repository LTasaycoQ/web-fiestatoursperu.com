// src/lib/nav.ts
import type { Locale } from '@i18n/index';
import { localePath } from '@i18n/index';

export interface NavRoute {
  key: string;               // clave en t.nav
  path: string;              // ruta base en español
  children?: NavRoute[];
}

export const navRoutes: NavRoute[] = [
  { key: 'aboutUs', path: '/nosotros' },
  { key: 'destinations', path: '/destinos' },
  {
    key: 'tours',
    path: '/itinerarios',
    /*
    children: [
      { key: 'classic',      path: '/recorridos?filter=classic' },
      { key: 'adventure',    path: '/recorridos?filter=adventure' },
      { key: 'cultural',     path: '/recorridos?filter=cultural' },
      { key: 'experiential', path: '/recorridos?filter=experiential' },
    ],
    */
  },
  { key: 'blog', path: '/blog' },
  { key: 'contact', path: '/contacto' },
];

export const languages = [
  { code: 'es' as Locale, label: 'Español',   flag: '🇵🇪', code_pais: 'es', image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1790021194/peru_bandera_a2bqvb.png" },
  { code: 'en' as Locale, label: 'English',   flag: '🇺🇸', code_pais: 'en', image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1771217543/eeuu_zp1ijv.png" },
  { code: 'pt' as Locale, label: 'Português', flag: '🇧🇷', code_pais: 'pt-BR', image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1776789189/Flag_of_Brazil.svg_dcr2kp.png" },
];