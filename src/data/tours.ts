// src/data/tours.ts
import type { Tour } from './data.types';

export const toursData: Tour[] = [
  {
    id: "peru-espectacular",
    title: "Perú Espectacular",
    category: "lujo",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1778686961/iStock-1388676876_nf7wfz.jpg",
    link: "/itinerarios/peru-espectacular",
    descriptionKey: "peru_espectacular_desc",
    tagKey: "tag_lujo"
  },
  {
    id: "peru-magico",
    title: "Perú Mágico",
    category: "aventura",
    difficultyLevel: 3,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/Titicaca-Lake-portada2_jfbusw.jpg",
    link: "/itinerarios/peru-magico",
    descriptionKey: "peru_magico_desc",
    tagKey: "tag_aventura"
  },
  {
    id: "peru-maravilla",
    title: "Perú de Maravilla",
    category: "culturales",
    difficultyLevel: 1,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
    link: "/itinerarios/peru-maravilla",
    descriptionKey: "peru_maravilla_desc",
    tagKey: "tag_cultural"
  },
  {
    id: "peru-jeans",
    title: "Perú en Jeans",
    category: "familias",
    difficultyLevel: 1,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/luxury-train_i18flh.jpg",
    link: "/itinerarios/peru-jeans",
    descriptionKey: "peru_jeans_desc",
    tagKey: "tag_familias"
  },
  {
    id: "peru-express",
    title: "Perú Express",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/oasis-de-Huacachina-ica-paracas-nazca_flmink.jpg",
    link: "/itinerarios/peru-express",
    descriptionKey: "peru_express_desc",
    tagKey: "tag_grupos"
  },
  {
    id: "peru-esencial",
    title: "Perú Esencial",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/mapi-portada_vvfhnw.jpg",
    link: "/itinerarios/peru-esencial",
    descriptionKey: "peru_esencial_desc",
    tagKey: "tag_grupos"
  },
  {
    id: "majestad-inca",
    title: "Majestad Inca",
    category: "grupos",
    difficultyLevel: 2,
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1771514450/mapi-portada_vvfhnw.jpg",
    link: "/itinerarios/majestad-inca",
    descriptionKey: "majestad_inca_desc",
    tagKey: "tag_grupos"
  }
];