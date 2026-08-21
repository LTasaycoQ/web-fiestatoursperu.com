// src/data/cruceros.ts
import type { Cruise } from './data.types';

export const crucerosData: Cruise[] = [
  {
    id: "gran-expedicion-amazonica",
    title: "Gran Expedición Amazónica",
    tagKey: "tag_amazonico",
    descriptionKey: "cruise_amazon_desc",
    durationNights: 7,                    // ✅ número puro
    route: "Iquitos → Afluentes → Iquitos" // ✅ nombres propios
  },
  {
    id: "amazonas-pacaya-samiria",
    title: "Amazonas & Pacaya-Samiria",
    tagKey: "tag_premium",
    descriptionKey: "cruise_pacaya_desc",
    durationNights: 4,
    route: "Iquitos → Pacaya-Samiria"
  },
  {
    id: "titicaca-navegable",
    title: "Titicaca Navegable",
    tagKey: "tag_altiplanico",
    descriptionKey: "cruise_titicaca_desc",
    durationNights: 2,
    route: "Puno → Isla del Sol"
  }
];