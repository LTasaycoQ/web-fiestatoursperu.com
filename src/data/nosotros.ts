// src/data/nosotros.ts
import type { NosotrosFeature, NosotrosRazon, NosotrosStats } from './data.types';

// Datos puros (sin textos traducibles)
export const nosotrosFeatures: NosotrosFeature[] = [
  {
    icon: "medal",
    titleKey: "nosotros.feature_50_years.title",
    descKey: "nosotros.feature_50_years.desc",
    badge: "Desde 1976"
  },
  {
    icon: "compass",
    titleKey: "nosotros.feature_excellence.title",
    descKey: "nosotros.feature_excellence.desc",
    badge: "Excelencia"
  },
  {
    icon: "leaf",
    titleKey: "nosotros.feature_sustainable.title",
    descKey: "nosotros.feature_sustainable.desc",
    badge: "Sostenibilidad"
  },
  {
    icon: "phone",
    titleKey: "nosotros.feature_support.title",
    descKey: "nosotros.feature_support.desc",
    badge: "24/7"
  }
];

// Datos puros para razones
export const nosotrosRazones: NosotrosRazon[] = [
  { key: "nosotros.razon_1" },
  { key: "nosotros.razon_2" },
  { key: "nosotros.razon_3" },
  { key: "nosotros.razon_4" },
  { key: "nosotros.razon_5" },
  { key: "nosotros.razon_6" },
  { key: "nosotros.razon_7" },
  { key: "nosotros.razon_8" },
  { key: "nosotros.razon_9" },
  { key: "nosotros.razon_10" }
];

// Stats para la sección empresa
export const nosotrosStats: NosotrosStats[] = [
  { num: "48+", labelKey: "nosotros.stat_years.label" },
  { num: "USTOA", labelKey: "nosotros.stat_ustoa.label" },
  { num: "#1", labelKey: "nosotros.stat_rank.label" }
];