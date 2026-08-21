// src/i18n/index.ts

import type { Translations, Lang } from './types';

export type { Translations, Lang };

import es from './es';
import en from './en';
import pt from './pt';

export type Locale = Lang;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // → "/PERU"

const translations: Record<Locale, Translations> = {
  es,
  en,
  pt,
};

export const locales: Locale[] = ['es', 'en', 'pt'];
export const defaultLocale: Locale = 'es';


// ✅ Detecta idioma desde la URL
export function getLang(url: URL): Locale {
  // Elimina el base antes de analizar segmentos
  const pathname = url.pathname.replace(BASE, '') || '/';
  const segment = pathname.split('/')[1] as Locale;
  return locales.includes(segment) ? segment : defaultLocale;
}


// ✅ Obtiene traducciones activas
export function useTranslations(lang: Locale): Translations {
  return translations[lang];
}


// ✅ Cambia idioma manteniendo ruta + base
export function switchLocalePath(url: URL, targetLang: Locale): string {
  const segments = url.pathname
    .replace(BASE, '')          // quita el prefijo /PERU
    .split('/')
    .filter(Boolean);

  const firstSegment = segments[0] as Locale;

  const pathWithoutLang = locales.includes(firstSegment)
    ? segments.slice(1)
    : segments;

  if (targetLang === defaultLocale) {
    return `${BASE}/` + pathWithoutLang.join('/');
  }

  return `${BASE}/` + [targetLang, ...pathWithoutLang].join('/');
}


// ✅ Genera links respetando idioma activo + base
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return `${BASE}${path}`;
  return `${BASE}/${lang}${path}`;
}