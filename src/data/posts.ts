// src/data/posts.ts

export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

// ─── Content block types ────────────────────────────────────────────────────
// "lead"      → Párrafo de apertura en grande (la primera impresión)
// "paragraph" → Párrafo narrativo normal
// "heading2"  → Sección principal (con ancla opcional para TOC)
// "heading3"  → Subsección
// "image"     → Foto con pie de foto (cuenta algo, no solo decora)
// "gallery"   → 2–4 fotos en rejilla horizontal
// "moment"    → Instante concreto: hora + lugar + lo que pasó (storytelling puro)
// "dialogue"  → Conversación real con alguien del lugar
// "feeling"   → Reflexión interna / emoción del autor (cursiva, destacada)
// "list"      → Lista simple
// "quote"     → Cita de alguien que conociste en el camino
// "tip"       → Dato práctico al margen (no rompe la narrativa)
// "features"  → Tarjetas de características (para posts más informativos)

export type ContentBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string; id?: string }
  | { type: "heading3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[] }
  | { type: "moment"; time: string; place: string; text: string }
  | { type: "dialogue"; speaker: string; text: string; response?: string }
  | { type: "feeling"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "tip"; label: string; text: string }
  | { type: "features"; items: FeatureItem[] };

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  categoryKey: string;
  title: string;
  excerpt: string;
  blocks: ContentBlock[];
  toc?: { id: string; label: string }[];
  date: string;
  readTime: string;
  author: string;
  authorBio?: string;
  image: string;
  tags?: string[];
}

export const blogPosts: Record<string, BlogPost> = {


  // ─── POST INFORMATIVO: Amazon Wildlife Secrets ────────────────────────────
  "montana-7-colores": {
    id: "montana-7-colores",
    slug: "montana-7-colores",
    category: "Naturaleza & Vida Silvestre",
    categoryKey: "nature",
    title: "La mejor manera de visitar La Montaña de Siete Colores o La Montaña Arcoíris.",
    excerpt: "Visitar Vinicunca es uno de los momentos más esperados de un viaje al Perú. La manera en que se vive esta experiencia marca una diferencia profunda.",
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1778863905/secun2_v0xlkr.jpg",
    date: "15 de Mayo, 2026",
    readTime: "8 min",
    author: "Jesús Lopez",
    authorBio: "Especialista en viajes de lujo y alta montaña con más de 10 años explorando destinos andinos exclusivos.",
    tags: ["montaña", "aventura", "cusco", "naturaleza", "vinicunca", "trekking"],
    toc: [
      { id: "colores", label: "¿Por qué tiene siete colores?" },
      { id: "privado", label: "Por qué elegir servicio privado" },
      { id: "prep", label: "Preparación esencial" },
      { id: "epoca", label: "La mejor época para ir" },
    ],
    blocks: [
      {
        type: "lead",
        text: "Visitar La Montaña de Siete Colores o La Montaña Arcoíris (Vinicunca) es uno de los momentos más esperados de un viaje al Perú. Sin embargo, la manera en que se vive esta experiencia marca una diferencia profunda. Optar por un servicio privado, frente a un servicio regular, no es solo una cuestión de comodidad, sino de calidad, seguridad y un disfrute auténtico del entorno andino.",
      },
      { type: "heading2", text: "Ritmo propio y horarios mejor pensados.", id: "colores" },
      {
        type: "paragraph",
        text: "En un servicio privado, el itinerario se adapta al pasajero, no al grupo. Esto permite salidas estratégicas para evitar las horas de mayor congestión, paradas flexibles durante el trayecto y un ascenso a la montaña a un ritmo adecuado, respetando la aclimatación y el bienestar físico",
      },


        { type: "heading2", text: "Guías líderes en Cusco y la región.", id: "colores" },
      {
        type: "paragraph",
        text: "El tour se realiza con los mejores guías de Cusco, cuidadosamente seleccionados por su experiencia y excelencia en todas las rutas de la región, desde la Montaña de Siete Colores hasta el Valle Sagrado y Machu Picchu. Asignados en privado, ofrecen atención cercana y permanente, explicaciones adaptadas a cada viajero y seguimiento constante ante cualquier señal de cansancio o malestar por la altura, asegurando así una experiencia segura, enriquecedora y memorable.",
      },



        { type: "heading2", text: "Mayor confort en el transporte", id: "colores" },
      {
        type: "paragraph",
        text: "El traslado se realiza en vehículos privados de alto confort, con asientos amplios y mayor espacio para estirar las piernas, ideales para un recorrido largo y exigente.",
      },

        { type: "heading2", text: "Tiempo para disfrutar y fotografiar sin prisas.", id: "colores" },
      {
        type: "paragraph",
        text: "El servicio privado permite disponer del tiempo necesario para caminar, descansar y tomar fotografías sin apuros ni presiones de grupo, disfrutando del paisaje con calma y conexión con el entorno.",
      },

       { type: "heading2", text: "Gastronomía: La mejor opción de la zona", id: "colores" },
      {
        type: "paragraph",
        text: "El desayuno y el almuerzo se realizan en la mejor alternativa gastronómica disponible en la región. Sin ser grandes restaurantes, es lo mejor que ofrece la zona y marca una diferencia clara frente a las opciones básicas utilizadas habitualmente en los servicios regulares.",
      },
     
      {
        type: "image",
        src: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1778863872/principal_fxuk5f",
        alt: "Vista panorámica de Vinicunca al amanecer",
        caption: "Vista panorámica de Vinicunca — el mejor momento es entre las 7 y las 9 de la mañana, antes de que lleguen los grupos masivos.",
      },
      // { type: "heading2", text: "Por qué elegir un servicio privado", id: "privado" },
      // {
      //   type: "paragraph",
      //   text: "La caminata a Vinicunca puede vivirse de maneras muy distintas según el servicio que elijas. Un tour regular te integra a grupos de hasta 40 personas que parten y llegan en las mismas ventanas horarias, creando embotellamientos en la cima y reduciendo la experiencia a una foto rápida.",
      // },
      // {
      //   type: "quote",
      //   text: "El verdadero lujo en Vinicunca no es el precio del tour, sino la libertad de llegar antes del amanecer y tener la montaña para ti.",
      //   cite: "Luis Tasayco, Fiesta Tours",
      // },
      // { type: "heading3", text: "Ventajas concretas del servicio privado" },
      // {
      //   type: "features",
      //   items: [
      //     { title: "Horario a medida", description: "Salida entre las 3 y las 4 AM para alcanzar la cima al amanecer, cuando la montaña está vacía y la luz es perfecta." },
      //     { title: "Guía dedicado", description: "Un especialista que adapta el ritmo al grupo, explica la geología y conoce los ángulos fotográficos menos transitados." },
      //     { title: "Transporte premium", description: "Vehículo exclusivo con calefacción, agua caliente y snacks de altitud incluidos." },
      //     { title: "Plan de aclimatación", description: "El guía monitorea la saturación de oxígeno y ajusta el itinerario si detecta signos de soroche." },
      //   ],
      // },
      // { type: "heading2", text: "Preparación esencial", id: "prep" },
      // {
      //   type: "paragraph",
      //   text: "La caminata hasta Vinicunca cubre unos 7 km de ida con un desnivel de 400 metros a más de 4,800 m.s.n.m. No requiere experiencia técnica, pero sí una aclimatación real. Dos noches en Cusco —a 3,400 metros— son el mínimo recomendado.",
      // },
      // {
      //   type: "tip",
      //   label: "Consejo del guía",
      //   text: "La semana anterior al viaje, evita el alcohol y el tabaco. En Cusco, empieza con caminatas cortas el primer día y sube gradualmente. El té de muña o coca ayuda, pero no reemplaza la aclimatación.",
      // },
      // {
      //   type: "paragraph",
      //   text: "El equipo básico incluye ropa de abrigo por capas (temperatura puede bajar a −5 °C antes del amanecer), botas de senderismo impermeables, protector solar SPF 50+, lentes de sol con protección UV y al menos 2 litros de agua.",
      // },
      // { type: "heading2", text: "La mejor época para ir", id: "epoca" },
      // {
      //   type: "paragraph",
      //   text: "La temporada seca —de abril a octubre— ofrece cielos más despejados y caminos firmes. Junio, julio y agosto son los meses más visitados; sin un servicio privado que te permita adelantarte a la multitud, la experiencia puede decepcionar.",
      // },
      // {
      //   type: "paragraph",
      //   text: "La temporada húmeda (noviembre–marzo) transforma el paisaje: la nieve cubre los picos, el verde se intensifica y los colores de la montaña contrastan con mayor dramatismo. Si vas en esta época, un guía experimentado es imprescindible para leer las condiciones del tiempo.",
      // },
    ],
  },

 
};

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts);
}