import nav from './pt/nav';
import meta from './pt/meta';
import footer from './pt/footer';
import { home, about, company, planificador, contacto, incentivos, cruceros, hoteles, recorridos } from './pt/data';
import type { Translations } from './types';

const pt: Translations = {
  lang: 'pt',
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

export default pt;