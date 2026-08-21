import nav from './es/nav';
import meta from './es/meta';
import footer from './es/footer';
import { home, about, company, planificador, contacto, incentivos, cruceros, hoteles,recorridos } from './es/data';
import type { Translations } from './types';

const es: Translations = {
  lang: 'es',
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

export default es;