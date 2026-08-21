import nav from './en/nav';
import meta from './en/meta';
import footer from './en/footer';
import { home, about, company, planificador, contacto, incentivos, cruceros, hoteles, recorridos } from './en/data';
import type { Translations } from './types';

const en: Translations = {
  lang: 'en',
  nav,
  home,
  about,
  company,
  meta,
  planificador,
  contacto,
  footer,
  incentivos,
  cruceros,
  hoteles,
  recorridos
} as const;

export default en;