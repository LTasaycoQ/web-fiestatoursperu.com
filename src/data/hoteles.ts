// src/data/hoteles.ts
import type { Hotel } from './data.types';

export const hotelesData: Hotel[] = [
  {
    id: "el-pardo-doubletree",
    name: "El Pardo DoubleTree by Hilton Hotel",
    city: "Lima",
    stars: 5,
    descriptionKey: "hotel_el_pardo_desc",
    tags: ["business", "spa"],
    priceFrom: 180
  },
  {
    id: "crowne-plaza-lima",
    name: "Crowne Plaza Lima",
    city: "Lima",
    stars: 5,
    descriptionKey: "hotel_crowne_plaza_desc",
    tags: ["business", "luxury"],
    priceFrom: 200
  },
  {
    id: "inkaterra-la-casona",
    name: "Inkaterra La Casona",
    city: "Cusco",
    stars: 5,
    descriptionKey: "hotel_inkaterra_casona_desc",
    tags: ["historical", "luxury"],
    priceFrom: 450
  },
  {
    id: "inkaterra-reserva-amazonica",
    name: "Inkaterra Reserva Amazónica",
    city: "Amazonía",
    stars: 5,
    descriptionKey: "hotel_inkaterra_amazon_desc",
    tags: ["eco-luxury", "nature"],
    priceFrom: 350
  }
];

// Datos agrupados por ciudad (para facilitar el uso)
export const hotelesPorCiudad = {
  Lima: hotelesData.filter(h => h.city === "Lima"),
  Cusco: hotelesData.filter(h => h.city === "Cusco"),
  "Machu Picchu": hotelesData.filter(h => h.city === "Machu Picchu"),
  Amazonía: hotelesData.filter(h => h.city === "Amazonía")
};

