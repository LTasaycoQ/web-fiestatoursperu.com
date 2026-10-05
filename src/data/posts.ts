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
  translations?: Partial<Record<"en" | "pt", BlogPostTranslation>>;
}

export interface BlogPostTranslation {
  category: string;
  title: string;
  excerpt: string;
  date?: string;
  blocks: ContentBlock[];
  toc?: { id: string; label: string }[];
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
    readTime: "8",
    author: "Jesús Lopez",
    authorBio: "Especialista en viajes de lujo y alta montaña con más de 10 años explorando destinos andinos exclusivos.",
    tags: ["montaña", "aventura", "cusco", "naturaleza", "vinicunca", "trekking"],
    translations: {
      en: {
        category: "Nature & Wildlife",
        title: "The best way to visit Rainbow Mountain",
        excerpt: "Visiting Vinicunca is one of the most anticipated moments of a trip to Peru. How you experience it makes all the difference.",
        date: "May 15, 2026",
        toc: [
          { id: "colores", label: "Why does it have seven colors?" },
          { id: "privado", label: "Why choose a private service?" },
          { id: "prep", label: "Essential preparation" },
          { id: "epoca", label: "The best time to visit" },
        ],
        blocks: [
          {
            type: "lead",
            text: "Visiting Rainbow Mountain (Vinicunca) is one of the most anticipated moments of a trip to Peru. But how you experience it makes all the difference. Choosing a private service over a standard group tour is about more than comfort: it means better quality, greater safety and a more authentic way to enjoy the Andean landscape.",
          },
          { type: "heading2", text: "Set your own pace and choose better departure times.", id: "colores" },
          {
            type: "paragraph",
            text: "With a private service, the itinerary is tailored to you, not to a group. Strategic departure times help avoid peak crowds, while flexible stops and a steady ascent support proper acclimatization and physical comfort.",
          },
          { type: "heading2", text: "Leading guides in Cusco and the region.", id: "colores" },
          {
            type: "paragraph",
            text: "Your tour is led by outstanding guides from Cusco, carefully selected for their experience and expertise on routes across the region, from Rainbow Mountain to the Sacred Valley and Machu Picchu. Working exclusively with your party, they provide attentive service, tailor their explanations to each traveler and monitor signs of fatigue or altitude discomfort, making the experience safer, more enriching and memorable.",
          },
          { type: "heading2", text: "Greater comfort on the road", id: "colores" },
          {
            type: "paragraph",
            text: "Travel in a comfortable private vehicle with spacious seats and extra room to stretch your legs—ideal for a long and demanding journey.",
          },
          { type: "heading2", text: "Time to enjoy and take photos without rushing.", id: "colores" },
          {
            type: "paragraph",
            text: "A private service gives you the time you need to walk, rest and take photos without the pressure of a group schedule, so you can enjoy the landscape at your own pace and connect with your surroundings.",
          },
          { type: "heading2", text: "Dining: the best option in the area", id: "colores" },
          {
            type: "paragraph",
            text: "Breakfast and lunch are served at the best dining option available in the region. They may not be large restaurants, but they are the best the area has to offer and a clear step up from the basic options often used on standard tours.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1778863872/principal_fxuk5f",
            alt: "Panoramic view of Vinicunca at sunrise",
            caption: "A panoramic view of Vinicunca—the best time to visit is between 7 and 9 a.m., before the larger groups arrive.",
          },
        ],
      },
      pt: {
        category: "Natureza e vida selvagem",
        title: "A melhor maneira de visitar a Montanha das Sete Cores",
        excerpt: "Visitar Vinicunca é um dos momentos mais esperados de uma viagem ao Peru. A forma como você vive essa experiência faz toda a diferença.",
        date: "15 de maio de 2026",
        toc: [
          { id: "colores", label: "Por que a montanha tem sete cores?" },
          { id: "privado", label: "Por que escolher um serviço privado?" },
          { id: "prep", label: "Preparativos essenciais" },
          { id: "epoca", label: "A melhor época para visitar" },
        ],
        blocks: [
          {
            type: "lead",
            text: "Visitar a Montanha das Sete Cores (Vinicunca) é um dos momentos mais esperados de uma viagem ao Peru. Porém, a forma como você vive essa experiência faz toda a diferença. Escolher um serviço privado em vez de um passeio regular não é apenas uma questão de conforto: significa mais qualidade, segurança e uma maneira autêntica de aproveitar a paisagem andina.",
          },
          { type: "heading2", text: "No seu ritmo e com horários mais bem planejados.", id: "colores" },
          {
            type: "paragraph",
            text: "Em um serviço privado, o roteiro se adapta ao passageiro, e não ao grupo. Isso permite saídas estratégicas para evitar os horários mais movimentados, paradas flexíveis durante o percurso e uma subida em ritmo adequado, respeitando a aclimatação e o bem-estar físico.",
          },
          { type: "heading2", text: "Guias de referência em Cusco e na região.", id: "colores" },
          {
            type: "paragraph",
            text: "O passeio é conduzido por excelentes guias de Cusco, escolhidos cuidadosamente por sua experiência e conhecimento das rotas da região, da Montanha das Sete Cores ao Vale Sagrado e Machu Picchu. Atendendo seu grupo em caráter privado, eles oferecem atenção próxima, explicações adaptadas a cada viajante e acompanhamento constante diante de sinais de cansaço ou mal-estar causado pela altitude, tornando a experiência segura, enriquecedora e inesquecível.",
          },
          { type: "heading2", text: "Mais conforto no transporte", id: "colores" },
          {
            type: "paragraph",
            text: "O trajeto é feito em veículo privado e confortável, com assentos amplos e mais espaço para esticar as pernas, ideal para um percurso longo e exigente.",
          },
          { type: "heading2", text: "Tempo para aproveitar e fotografar sem pressa.", id: "colores" },
          {
            type: "paragraph",
            text: "O serviço privado oferece o tempo necessário para caminhar, descansar e tirar fotos sem correria nem pressão do grupo, permitindo apreciar a paisagem com calma e conexão com o ambiente.",
          },
          { type: "heading2", text: "Gastronomia: a melhor opção da região", id: "colores" },
          {
            type: "paragraph",
            text: "O café da manhã e o almoço são servidos na melhor opção gastronômica disponível na região. Não são grandes restaurantes, mas representam o melhor que o local oferece e fazem uma clara diferença em relação às opções básicas dos passeios regulares.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_png,q_auto/v1778863872/principal_fxuk5f",
            alt: "Vista panorâmica de Vinicunca ao amanhecer",
            caption: "Vista panorâmica de Vinicunca — o melhor horário é entre 7h e 9h da manhã, antes da chegada dos grandes grupos.",
          },
        ],
      },
    },
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

function localizePost(post: BlogPost, lang: "es" | "en" | "pt"): BlogPost {
  const translation = lang === "es" ? undefined : post.translations?.[lang];
  return translation ? { ...post, ...translation } : post;
}

export function getBlogPostBySlug(slug: string, lang: "es" | "en" | "pt" = "es"): BlogPost | undefined {
  const post = blogPosts[slug];
  return post ? localizePost(post, lang) : undefined;
}

export function getAllBlogPosts(lang: "es" | "en" | "pt" = "es"): BlogPost[] {
  return Object.values(blogPosts).map((post) => localizePost(post, lang));
}