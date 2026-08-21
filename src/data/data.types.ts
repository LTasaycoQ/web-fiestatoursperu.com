// src/data/data.types.ts

export interface Hotel {
  id: string;
  name: string;
  city: 'Lima' | 'Cusco' | 'Amazonía' | 'Machu Picchu';
  stars: number;
  descriptionKey: string;
  tags: string[];
  image?: string;
  priceFrom?: number;
}

export interface Testimonio {
  id: string;
  author: string;
  role?: string;
  roleKey?: string;
  company: string;
  textKey: string;
  rating?: number;
  date?: string;
}

export interface IncentivoFeature {
  icon: string;
  titleKey: string;
  descKey: string;
  badge?: string;
}

export interface IncentivoExperience {
  tagKey: string;
  titleKey: string;
  descKey: string;
  img: string;
}

export interface IncentivoStat {
  num: string;
  labelKey: string;
}

export interface Cruise {
  id: string;
  title: string;
  tagKey: string;
  descriptionKey: string;
  durationNights: number;
  route: string;
}

export interface MealOption {
  name: string;
  type: string;
}

export interface OpcionActivity {
  id: string;
  title: string;
  description: string;
  image?: string;
  mealOptions?: MealOption[];
}

export interface DiaItinerario {
  day: number;
  title: string;
  description: string[];
  activities?: string[];
  accommodation?: string;
  meals?: string[];
  itinerarioImage?: string;
  location?: string;   // ← necesario para groupDaysByLocation
  lat?: number;
  lng?: number;
}

export interface ItinerarioLocation {
  name: string;
  icon: string;
}

export interface Itinerario {
  id: string;
  title: string;
  duration: string;
  locations: ItinerarioLocation[];
  days: DiaItinerario[];  
  optionalActivities?: OpcionActivity[];
  priceFrom: number;
  bestSeason: string;
  included?: string[];
  notIncluded?: string[];
}

export interface Tour {
  id: string;
  title: string;
  category: string;
  difficultyLevel: number;
  image: string;
  link: string;
  descriptionKey: string;
  tagKey: string;
}

// ─── NOSOTROS ────────────────────────────────────────────────
export interface NosotrosFeature {
  icon: string;
  titleKey: string;
  descKey: string;
  badge: string;
}
export interface NosotrosRazon {
  key: string;
}

export interface NosotrosStats {
  num: string;
  labelKey: string;
}

export type CityType = 'Lima' | 'Cusco' | 'Amazonía' | 'Machu Picchu';
export type TourCategory = 'lujo' | 'aventura' | 'culturales' | 'familias' | 'grupos';
export type DifficultyLevel = 1 | 2 | 3;