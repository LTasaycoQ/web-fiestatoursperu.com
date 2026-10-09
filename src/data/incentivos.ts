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

export const incentivosExperiences = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1789593744/iStock-1091870010_vszoap.jpg",
    tagKey: "tag_adventure",
    titleKey: "experience_lima_title",
    descKey: "experience_lima_desc",
    ctaKey: "experience_lima_cta"
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1789594243/35012987295_9b5523806a_o_cjtoks.jpg",
    tagKey: "tag_adventure",
    titleKey: "experience_cusco_title",
    descKey: "experience_cusco_desc",
    ctaKey: "experience_cusco_cta"
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1789594404/014428_hj8vbm.jpg",
    tagKey: "tag_adventure",
    titleKey: "experience_valle_title",
    descKey: "experience_valle_desc",
    ctaKey: "experience_valle_cta"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    tagKey: "tag_adventure",
    titleKey: "experience_machu_title",
    descKey: "experience_machu_desc",
    ctaKey: "experience_machu_cta"
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772813539/Titicaca-Lake6_11zon_kdc3up.webp",
    tagKey: "tag_adventure",
    titleKey: "experience_puno_title",
    descKey: "experience_puno_desc",
    ctaKey: "experience_puno_cta"
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772813378/Arequipa-5_11zon_gjmvmc.webp",
    tagKey: "tag_adventure",
    titleKey: "experience_arequipa_title",
    descKey: "experience_arequipa_desc",
    ctaKey: "experience_arequipa_cta"
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1790283365/iStock-2210630679_meaglj.jpg",
    tagKey: "tag_adventure",
    titleKey: "experience_ica_title",
    descKey: "experience_ica_desc",
    ctaKey: "experience_ica_cta"
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1771863879/amazon-cruises_p0ij0b.webp",
    tagKey: "tag_adventure",
    titleKey: "experience_amazonia_title",
    descKey: "experience_amazonia_desc",
    ctaKey: "experience_amazonia_cta"
  }
];

export const incentivosStats: IncentivoStat[] = [
  { num: "500+", labelKey: "stat_programs" },
  { num: "98%", labelKey: "stat_satisfaction" },
  { num: "50+", labelKey: "stat_fortune500" },
  { num: "25K+", labelKey: "stat_participants" }
];

export const incentivosCategories = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1772812868/sacsayhuaman-cusco_ulhk25.webp",
    icon: "medal",
    titleKey: "category_culture_title",
    descKey: "category_culture_desc"
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1790285404/iStock-1433151734_nuomkw.jpg",
    icon: "compass",
    titleKey: "category_gastronomy_title",
    descKey: "category_gastronomy_desc"
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1790284914/iStock-865821532_ovhpme.jpg",
    icon: "leaf",
    titleKey: "category_nature_title",
    descKey: "category_nature_desc"
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1790288691/plj01.CIlgZlSf_Z1hq7Wc_jpgnfv.png",
    icon: "diamond",
    titleKey: "category_luxury_title",
    descKey: "category_luxury_desc"
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1790284988/HRB_Peru_Ext-0340_kttdun.jpg",
    icon: "rails",
    titleKey: "category_trains_title",
    descKey: "category_trains_desc"
  }
];