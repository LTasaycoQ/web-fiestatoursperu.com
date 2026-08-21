// src/lib/footer.ts

export interface FooterLink {
  key: string;   // clave en t.footer
  path: string;  // ruta base en español
}

export interface FooterSection {
  titleKey: string;      // clave en t.footer para el título de columna
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    titleKey: 'destTitle',
    links: [
      { key: 'dest1', path: '/itinerarios' },
      { key: 'dest2', path: '/itinerarios' },
      { key: 'dest3', path: '/el-pais' },
      { key: 'dest4', path: '/el-pais' },
    ],
  },
  {
    titleKey: 'servTitle',
    links: [
      { key: 'serv1', path: '/itinerarios' },
      { key: 'serv2', path: '/incentivos' },
      { key: 'serv3', path: '/cruceros' },
      { key: 'serv4', path: '/hoteles' },
    ],
  },
];

export const footerLegal: FooterLink[] = [
  { key: 'reclamaciones', path: '/libro-de-reclamaciones' },
  { key: 'privacidad',    path: '/informacion-util/visa' },
];