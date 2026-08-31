// Idiomas soportados
export type Lang = 'es' | 'en' | 'pt';

// ─────────────────────────
// NAV
// ─────────────────────────
export interface NavTranslations {
  destinations: string;
  tours: string;
  aboutUs: string;
  blog?: string;
  contact: string;
  languages: string;
  planBtn1: string;
  planBtn2: string;
  classic: string;
  adventure: string;
  cultural: string;
  experiential: string;
  hotelsLima: string;
  hotelsCusco: string;
  hotelsMachuPicchu: string;
  jungleLodges: string;
  mobileServices: string;
}

// ─────────────────────────
// HOME
// ─────────────────────────
export interface HomeTranslations {
  heroEyebrow: string;
  heroTitle: string;
  heroTitle2?: string;
  heroTitle3?: string;
  heroSubtitle: string;
  heroCta: string;
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;
  destEyebrow: string;
  destTitle: string;
  dest1Tag: string;
  dest1Title: string;
  dest1Desc: string;
  dest2Tag: string;
  dest2Title: string;
  dest2Desc: string;
  dest3Tag: string;
  dest3Title: string;
  dest3Desc: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  tittle2: string;
  parrafo1: string;
  parrafo2: string;
  testimonialTexts: Record<string, string>;
  roleTranslations?: Record<string, string>;

  logo? : string;
  preTitle?: string;
  title?: string;
  title2?: string;
  description?: string;
  description2?: string;
  description3?: string;

  infoTitle?: string;
  infoTitle2?: string;
  content?: Content[];
  infoDescription?: string;

  toursTitle?: string;
  toursTitle2?: string;
  testimoniosEyebrow?: string;  
  testimoniosTitle?: string;

  toursEyebrow?: string;
  aboutBtn?: string;
  toursBtn?: string;
}

export interface Content {
  id?: number;
  title?: string;
  description?: string;
}

// ─────────────────────────
// COMPANY
// ─────────────────────────
export interface CompanyTranslations {
  heroTitle: string;
  heroSubtitle: string;
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
  valuesTitle: string;
  value1: string;
  value2: string;
  value3: string;
}

// ─────────────────────────
// META SEO
// ─────────────────────────
export interface MetaTranslations {
  homeTitle: string;
  homeDescription: string;
}

// ─────────────────────────
// ROOT TRANSLATIONS
// ─────────────────────────
export interface Translations {
  lang: Lang;
  nav: NavTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  company: CompanyTranslations;
  meta: MetaTranslations;
  planificador: PlanificadorTranslations;
  contacto: ContactoTranslations;
  footer: FooterTranslations;
  incentivos: IncentivosTranslations;
  cruceros: CrucerosTranslations;
  hoteles: HotelesTranslations;
  recorridos: RecorridosTranslations;
}

export interface AboutTranslations {
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroTitleLine3: string;
  heroSubtitle: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  
  // Quote
  quoteText: string;
  
  // Empresa section
  empresaEyebrow: string;
  empresaTitle: string;
  empresaText1: string;
  empresaText2: string;
  empresaText3: string;
  empresaText4: string;
  statYearsLabel: string;
  statUstoALabel: string;
  statRankLabel: string;
  
  // Why section (incentivos)
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  
  // Razones section
  razonesEyebrow: string;
  razonesTitle: string;
  
  // Cierre section
  cierreQuote: string;
  cierreBtn: string;
  
  // Features translations
  featureTranslations: Record<string, string>;
  
  // Razon translations
  razonTranslations: Record<string, string>;
  
  // Tag translations
  tagTranslations: Record<string, string>;
}

// ─────────────────────────
// PLANIFICADOR
// ─────────────────────────
export interface PlanificadorTranslations {
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  eyebrow: string;
  sectionTitle: string;
  sectionBody: string;
  step1Num: string; step1Title: string; step1Desc: string;
  step2Num: string; step2Title: string; step2Desc: string;
  step3Num: string; step3Title: string; step3Desc: string;
  step4Num: string; step4Title: string; step4Desc: string;
  cta: string;
}

// ─────────────────────────
// CONTACTO
// ─────────────────────────
export interface ContactoTranslations {
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  eyebrow: string;
  sectionTitle: string;
  labelName: string; placeholderName: string;
  labelEmail: string; placeholderEmail: string;
  labelDest: string; placeholderDest: string;
  dest1: string; dest2: string; dest3: string; dest4: string; dest5: string;
  labelTravelers: string; placeholderTravelers: string;
  labelMessage: string; placeholderMessage: string;
  submitBtn: string;
  infoTitle: string;
  infoBody: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  quote: string;
}

// ─────────────────────────
// FOOTER
// ─────────────────────────
export interface FooterTranslations {
  destTitle: string;
  dest1: string; dest2: string; dest3: string;
  dest4: string; dest5: string; dest6: string;
  servTitle: string;
  serv1: string; serv2: string; serv3: string;
  serv4: string; serv5: string; serv6: string; serv7: string;
  compTitle: string;
  comp1: string; comp2: string; comp3: string;
  comp4: string; comp5: string; comp6: string;
  comp7: string; comp8: string; comp9: string;
  desc: string;
  reclamaciones: string;
  privacidad: string;
}

// ─────────────────────────
// INCENTIVOS
// ─────────────────────────
export interface IncentivoCardDetails {
  featIcon?: string;
  featTitle?: string;
  featDesc?: string;
}

export interface IncentivoExperience {
  tag?: string;
  title?: string;
  desc?: string;
  img?: string;
}

export interface IncentivoStat {
  num?: string;
  label?: string;
}

// ─────────────────────────
// RECORRIDOS
// ─────────────────────────
export interface RecorridosTranslations {
  metaTitle: string;
  metaDesc: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  filterAll: string;
  filterClassic: string;
  filterAdventure: string;
  filterCultural: string;
  filterExperiential: string;
  filterGroups?: string;
  cardCta: string;
  durationLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  tourDescriptions: Record<string, string>;
  tagTranslations: Record<string, string>;
  difficultyTranslations: Record<number, string>;
  featuredItinerary?: FeaturedItinerary;
}

export interface HoteleSucursales {
  hotelCity?: string;
  hotelName?: string;
  hotelDesc?: string;
  hotelStars?: string;
  hotelTag?: string;
}

// ─────────────────────────
// HOTELES
// ─────────────────────────
export interface HotelesTranslations {
  metaTitle: string;
  metaDesc: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionBody: string;
  cat1Title: string; cat1Desc: string;
  cat2Title: string; cat2Desc: string;
  cat3Title: string; cat3Desc: string;
  cat4Title: string; cat4Desc: string;
  cardCta: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  hotelDescriptions: Record<string, string>;
  tagTranslations: Record<string, string>;
}

// ─────────────────────────
// INCENTIVOS TRANSLATIONS
// ─────────────────────────
export interface IncentivosTranslations {
  metaTitle: string;
  metaDesc: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  expEyebrow: string;
  expTitle: string;
  statsEyebrow: string;
  statsTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  featureTranslations: Record<string, string>;
  experienceTranslations: Record<string, string>;
  statTranslations: Record<string, string>;
  tagTranslations: Record<string, string>;
}

// ─────────────────────────
// CRUCEROS
// ─────────────────────────
export interface CrucerosTranslations {
  metaTitle: string;
  metaDesc: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  amenitiesTitle: string;
  amen1: string; amen2: string; amen3: string;
  amen4: string; amen5: string; amen6: string;
  durationLabel: string;
  routeLabel: string;
  cardCta: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBtn1: string;
  ctaBtn2: string;
  durationFormat: string;
  cruiseDescriptions: Record<string, string>;
  tagTranslations: Record<string, string>;
}

// ─────────────────────────
// ITINERARIO DESTACADO
// ─────────────────────────
export interface ItineraryDay {
  dayNum: string;
  dayTitle: string;
  dayDesc: string;
  hotel?: string;
  meals?: string;
  mapLocation?: string;
  itinerarioImage?: string;
  location?: "lima" | "cusco" | "valle-sagrado" | "machu-picchu";
  lat?: number;
  lng?: number;
}

export interface ItineraryLocation {
  label: string;
  mapId: string;
  days: ItineraryDay[];
}

export interface FeaturedItinerary {
  subtitle: string;
  locations: ItineraryLocation[];
}

// ─────────────────────────
// ITINERARIOS (data)
// ─────────────────────────
export type CityLocation = "lima" | "cusco" | "valle-sagrado" | "machu-picchu";

export interface DiaItinerario {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation?: string;
  itinerarioImage?: string;
  location: CityLocation;
  lat?: number;
  lng?: number;
  meals?: string[];
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
  priceFrom: number;
  bestSeason: string;
  included: string[];
  notIncluded: string[];
}