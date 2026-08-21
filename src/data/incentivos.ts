// src/data/incentivos.ts
import type { IncentivoFeature, IncentivoExperience, IncentivoStat } from './data.types';

export const incentivosFeatures: IncentivoFeature[] = [
  {
    icon: "medal",
    titleKey: "feature_50_years_title",
    descKey: "feature_50_years_desc",
  },
  {
    icon: "compass",
    titleKey: "feature_guides_title",
    descKey: "feature_guides_desc"
  },
  {
    icon: "leaf",
    titleKey: "feature_sustainable_title",
    descKey: "feature_sustainable_desc"
  },
  {
    icon: "phone",
    titleKey: "feature_support_title",
    descKey: "feature_support_desc",
    badge: "Viaje Consciente",
  }
];

export const incentivosExperiences: IncentivoExperience[] = [
  {
    tagKey: "tag_adventure",
    titleKey: "experience_inca_title",
    descKey: "experience_inca_desc",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=700&q=80&auto=format&fit=crop"
  },
  {
    tagKey: "tag_gastronomy",
    titleKey: "experience_gastronomy_title",
    descKey: "experience_gastronomy_desc",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=700&q=80&auto=format&fit=crop"
  },
  {
    tagKey: "tag_wellness",
    titleKey: "experience_wellness_title",
    descKey: "experience_wellness_desc",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=700&q=80&auto=format&fit=crop"
  }
];

export const incentivosStats: IncentivoStat[] = [
  { num: "500+", labelKey: "stat_programs" },
  { num: "98%", labelKey: "stat_satisfaction" },
  { num: "50+", labelKey: "stat_fortune500" },
  { num: "25K+", labelKey: "stat_participants" }
];
