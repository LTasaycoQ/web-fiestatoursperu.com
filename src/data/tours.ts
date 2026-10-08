// src/data/tours.ts
import type { Tour } from './data.types';

export const toursData: Tour[] = [
  
  {
    id: "peru-espectacular",
    title: "Perú Espectacular",
    category: "lujo",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1791496643/Portada_uhumwj.jpg",
    link: "/itinerarios/peru-espectacular",
    descriptionKey: "peru_espectacular_desc",
    tagKey: "tag_lujo"
  },
  {
    id: "peru-magico",
    title: "Perú Mágico",
    category: "aventura",
    difficultyLevel: 3,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1791497762/portada_dv3pjw.png",
    link: "/itinerarios/peru-magico",
    descriptionKey: "peru_magico_desc",
    tagKey: "tag_aventura"
  },
  {
    id: "peru-maravilla",
    title: "Perú de Maravilla",
    category: "culturales",
    difficultyLevel: 1,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1791498284/WhatsApp_Image_2026-10-08_at_17.03.58_h0usib.jpg",
    link: "/itinerarios/peru-maravilla",
    descriptionKey: "peru_maravilla_desc",
    tagKey: "tag_cultural"
  },
  {
    id: "peru-jeans",
    title: "Perú en Jeans",
    category: "familias",
    difficultyLevel: 1,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1791498461/foto-principal_xajssb.png",
    link: "/itinerarios/peru-jeans",
    descriptionKey: "peru_jeans_desc",
    tagKey: "tag_familias"
  },
  {
    id: "peru-express",
    title: "Perú Express",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1791498678/portada_js9eng.jpg",
    link: "/itinerarios/peru-express",
    descriptionKey: "peru_express_desc",
    tagKey: "tag_grupos"
  },
  {
    id: "peru-esencial",
    title: "Perú Esencial",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1791499184/WhatsApp_Image_2026-10-08_at_17.38.18_ne23mq.jpg",
    link: "/itinerarios/peru-esencial",
    descriptionKey: "peru_esencial_desc",
    tagKey: "tag_grupos"
  },
  {
    id: "majestad-inca",
    title: "Ocho Noches Inolvidables en un Viaje a Través del Tiempo",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/mapi-portada_vvfhnw",
    link: "/itinerarios/majestad-inca",
    descriptionKey: "majestad_inca_desc",
    tagKey: "tag_grupos"
  },

];