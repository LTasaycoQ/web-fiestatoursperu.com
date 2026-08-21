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

  // ─── CRÓNICA PERSONAL: Vinicunca ─────────────────────────────────────────
  "vinicunca-mi-experiencia": {
    id: "vinicunca-mi-experiencia",
    slug: "vinicunca-mi-experiencia",
    category: "Mis Viajes",
    categoryKey: "journal",
    title: "Subí la Montaña de Siete Colores sin poder respirar bien — y no me arrepiento",
    excerpt: "Eran las 4 AM, hacía frío y mi cabeza latía por la altura. Pero cuando el sol tocó Vinicunca, entendí por qué había venido hasta aquí.",
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/incas-legacy_grfvrl.webp",
    date: "15 de Mayo, 2026",
    readTime: "8 min",
    author: "Luis Tasayco",
    authorBio: "Viajero, guía de montaña y escritor. Llevo 10 años recorriendo los Andes y todavía me sorprendo.",
    tags: ["vinicunca", "cusco", "crónica", "montaña", "altura"],
    toc: [
      { id: "partida", label: "La salida en la oscuridad" },
      { id: "camino", label: "El camino que no esperaba" },
      { id: "cima", label: "Cuando llegué arriba" },
      { id: "vuelta", label: "El regreso y lo que me llevé" },
    ],
    blocks: [
      // ── Apertura narrativa ─────────────────────────────────────────────
      {
        type: "lead",
        text: "Me dijeron que Vinicunca era «la foto más linda de Perú». Lo que nadie me dijo es que para llegar ahí tienes que madrugar en la oscuridad, caminar con los pulmones a medio gas y convencer a tus piernas de que sigan cuando ya no quieren.",
      },
      {
        type: "paragraph",
        text: "Llevaba dos días en Cusco aclimatándome. O eso creía. La altitud es tramposa: te deja dormir, te deja comer, incluso te deja caminar por la Plaza de Armas como si nada, y luego te cobra todo de golpe cuando subes a más de 5,000 metros.",
      },

      // ── Sección 1 ──────────────────────────────────────────────────────
      { type: "heading2", text: "La salida en la oscuridad", id: "partida" },
      {
        type: "moment",
        time: "3:45 AM",
        place: "Hotel en Cusco",
        text: "El teléfono vibró sobre la mesilla. Afuera, la ciudad dormía. Me puse tres capas de ropa intentando no hacer ruido y bajé a recepción, donde el guía ya esperaba con un termo de té de muña y una linterna frontal prestada.",
      },
      {
        type: "paragraph",
        text: "El camino hasta el punto de inicio tarda casi dos horas en carro. Dormí la mitad del trayecto con la frente pegada a la ventana, viendo pasar comunidades andinas iluminadas solo por una que otra bombilla amarilla.",
      },
      {
        type: "dialogue",
        speaker: "El guía, Wilber",
        text: "¿Primera vez que subes a más de 5,000?",
        response: "Sí. ¿Se nota? —le pregunté. Se rio, pero no respondió. Eso me preocupó un poco.",
      },

      // ── Foto de ambiente ───────────────────────────────────────────────
      {
        type: "image",
        src: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
        alt: "Amanecer sobre los cerros antes de llegar a Vinicunca",
        caption: "El cielo empezaba a abrirse cuando dejamos el carro. Esta foto la tomé todavía con guantes puestos.",
      },

      // ── Sección 2 ──────────────────────────────────────────────────────
      { type: "heading2", text: "El camino que no esperaba", id: "camino" },
      {
        type: "paragraph",
        text: "La subida oficial dura entre 45 minutos y una hora y media, dependiendo de cómo te lleve la altura. A mí me llevó mal. Al cuarto de hora, el paso se me acortó solo. No era cansancio muscular — era como si alguien hubiera reducido la cantidad de oxígeno en el aire sin avisarme.",
      },
      {
        type: "feeling",
        text: "Hay algo extrañamente humillante en tener que parar cada diez pasos en un camino que la gente local recorre corriendo. Y al mismo tiempo, algo liberador: la montaña no te juzga. Solo existe.",
      },
      {
        type: "paragraph",
        text: "Wilber caminaba a mi lado sin apurarme. En algún momento sacó una hoja de coca del bolsillo y me la ofreció sin decir nada. La mastiqué durante veinte minutos. No sé si fue psicológico, pero el dolor de cabeza bajó un poco.",
      },
      {
        type: "tip",
        label: "Lo que aprendí",
        text: "La coca no es magia, pero masticarla te obliga a respirar despacio. Y respirar despacio, resulta, es exactamente lo que necesitas a 4,800 metros.",
      },

      // ── Galería del camino ─────────────────────────────────────────────
      {
        type: "gallery",
        images: [
          {
            src: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778863872/principal_fxuk5f.jpg",
            alt: "Vista del valle desde la mitad del camino",
            caption: "Desde aquí ya se ve el valle de Cusco a lo lejos.",
          },
          {
            src: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778863872/principal_fxuk5f.jpg",
            alt: "Llamas en el camino a Vinicunca",
            caption: "Las llamas no se inmutan. Nos miraron pasar con absoluta indiferencia.",
          },
          {
            src: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778863872/principal_fxuk5f.jpg",
            alt: "Primeros colores de Vinicunca asomando",
            caption: "El momento en que empiezas a ver los primeros colores. Aquí ya no importa el cansancio.",
          },
        ],
      },

      // ── Sección 3 ──────────────────────────────────────────────────────
      { type: "heading2", text: "Cuando llegué arriba", id: "cima" },
      {
        type: "moment",
        time: "7:12 AM",
        place: "Cima de Vinicunca, 5,200 m.s.n.m.",
        text: "Llegué sin saber exactamente cuándo había llegado. De repente, el camino se aplanó y la montaña apareció entera frente a mí. Roja, verde, blanca, amarilla. No dije nada. Creo que no pude.",
      },
      {
        type: "paragraph",
        text: "Había una pareja de japoneses que se abrazaban en silencio. Una mujer peruana de unos sesenta años que había subido en mula rezaba en voz baja. Wilber sacó su teléfono para tomarme una foto, pero yo le pedí un minuto.",
      },
      {
        type: "feeling",
        text: "No soy de las personas que lloran frente a paisajes. Pero ese día entendí a quienes sí lo hacen. Hay vistas que te recuerdan que eres pequeño, y en lugar de asustarte, eso te tranquiliza.",
      },
      {
        type: "quote",
        text: "Aquí la tierra cuenta su historia. Cada color es un tiempo diferente. Tú solo tienes que escuchar.",
        cite: "Wilber, guía quechua de Pitumarca",
      },
      {
        type: "paragraph",
        text: "Me quedé en la cima cuarenta y cinco minutos. El frío era brutal — unos −3 °C con viento — pero no quería bajar. Tomé demasiadas fotos, la mayoría pésimas porque me temblaban las manos. Las mejores son las que no tomé: las que solo vi.",
      },

      // ── Sección 4 ──────────────────────────────────────────────────────
      { type: "heading2", text: "El regreso y lo que me llevé", id: "vuelta" },
      {
        type: "paragraph",
        text: "La bajada fue rápida y casi festiva. El cuerpo agradece ir hacia abajo. Wilber me contó que su abuelo pastoreaba llamas en esos mismos cerros cuando Vinicunca aún estaba cubierta de nieve y nadie la conocía fuera del distrito.",
      },
      {
        type: "paragraph",
        text: "Me preguntó qué me había parecido. Le dije que mejor de lo que esperaba. Me respondió que eso siempre pasa con las cosas que cuestan trabajo.",
      },
      {
        type: "feeling",
        text: "Regresé a Cusco con las rodillas doloridas, una foto de perfil nueva y la sensación clara de que hay lugares en el mundo que no se pueden describir bien. Vinicunca es uno de ellos. Por eso vine a intentarlo de todas formas.",
      },
    ],
  },

  // ─── POST INFORMATIVO: Amazon Wildlife Secrets ────────────────────────────
  "amazon-wildlife-secrets": {
    id: "amazon-wildlife-secrets",
    slug: "amazon-wildlife-secrets",
    category: "Naturaleza & Vida Silvestre",
    categoryKey: "nature",
    title: "La mejor manera de visitar La Montaña de Siete Colores o La Montaña Arcoíris",
    excerpt: "Visitar Vinicunca es uno de los momentos más esperados de un viaje al Perú. La manera en que se vive esta experiencia marca una diferencia profunda.",
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
    date: "15 de Mayo, 2026",
    readTime: "8 min",
    author: "Luis Tasayco",
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
        text: "Vinicunca — la Montaña de Siete Colores — es uno de esos destinos que cambia la manera en que ves el mundo. Ubicada a más de 5,200 metros sobre el nivel del mar, en la cordillera andina del Cusco, su paleta de colores mineral parece pintada a mano por la naturaleza misma.",
      },
      { type: "heading2", text: "¿Por qué tiene siete colores?", id: "colores" },
      {
        type: "paragraph",
        text: "La magia cromática de Vinicunca no es artificio ni leyenda: es geología pura. Durante milenios, la erosión fue revelando capas minerales de distintas épocas, cada una con su propia composición química y su propio color.",
      },
      {
        type: "features",
        items: [
          { title: "Rosa y rojo", description: "Arcilla roja y limolitas que afloran en los flancos más expuestos al viento andino." },
          { title: "Blanco nacarado", description: "Cuarzo y arenisca calcárea, residuo de antiguos fondos marinos elevados por tectónica." },
          { title: "Verde turquesa", description: "Filitas y rocas ricas en magnesio, glauconita y clorita de origen hidrotermal." },
          { title: "Amarillo mostaza", description: "Calizas con alto contenido de sulfuro de hierro oxidado." },
        ],
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778863872/principal_fxuk5f.jpg",
        alt: "Vista panorámica de Vinicunca al amanecer",
        caption: "Vista panorámica de Vinicunca — el mejor momento es entre las 7 y las 9 de la mañana, antes de que lleguen los grupos masivos.",
      },
      { type: "heading2", text: "Por qué elegir un servicio privado", id: "privado" },
      {
        type: "paragraph",
        text: "La caminata a Vinicunca puede vivirse de maneras muy distintas según el servicio que elijas. Un tour regular te integra a grupos de hasta 40 personas que parten y llegan en las mismas ventanas horarias, creando embotellamientos en la cima y reduciendo la experiencia a una foto rápida.",
      },
      {
        type: "quote",
        text: "El verdadero lujo en Vinicunca no es el precio del tour, sino la libertad de llegar antes del amanecer y tener la montaña para ti.",
        cite: "Luis Tasayco, Fiesta Tours",
      },
      { type: "heading3", text: "Ventajas concretas del servicio privado" },
      {
        type: "features",
        items: [
          { title: "Horario a medida", description: "Salida entre las 3 y las 4 AM para alcanzar la cima al amanecer, cuando la montaña está vacía y la luz es perfecta." },
          { title: "Guía dedicado", description: "Un especialista que adapta el ritmo al grupo, explica la geología y conoce los ángulos fotográficos menos transitados." },
          { title: "Transporte premium", description: "Vehículo exclusivo con calefacción, agua caliente y snacks de altitud incluidos." },
          { title: "Plan de aclimatación", description: "El guía monitorea la saturación de oxígeno y ajusta el itinerario si detecta signos de soroche." },
        ],
      },
      { type: "heading2", text: "Preparación esencial", id: "prep" },
      {
        type: "paragraph",
        text: "La caminata hasta Vinicunca cubre unos 7 km de ida con un desnivel de 400 metros a más de 4,800 m.s.n.m. No requiere experiencia técnica, pero sí una aclimatación real. Dos noches en Cusco —a 3,400 metros— son el mínimo recomendado.",
      },
      {
        type: "tip",
        label: "Consejo del guía",
        text: "La semana anterior al viaje, evita el alcohol y el tabaco. En Cusco, empieza con caminatas cortas el primer día y sube gradualmente. El té de muña o coca ayuda, pero no reemplaza la aclimatación.",
      },
      {
        type: "paragraph",
        text: "El equipo básico incluye ropa de abrigo por capas (temperatura puede bajar a −5 °C antes del amanecer), botas de senderismo impermeables, protector solar SPF 50+, lentes de sol con protección UV y al menos 2 litros de agua.",
      },
      { type: "heading2", text: "La mejor época para ir", id: "epoca" },
      {
        type: "paragraph",
        text: "La temporada seca —de abril a octubre— ofrece cielos más despejados y caminos firmes. Junio, julio y agosto son los meses más visitados; sin un servicio privado que te permita adelantarte a la multitud, la experiencia puede decepcionar.",
      },
      {
        type: "paragraph",
        text: "La temporada húmeda (noviembre–marzo) transforma el paisaje: la nieve cubre los picos, el verde se intensifica y los colores de la montaña contrastan con mayor dramatismo. Si vas en esta época, un guía experimentado es imprescindible para leer las condiciones del tiempo.",
      },
    ],
  },

  // ─── IQUITOS HIDDEN GEMS ─────────────────────────────────────────────────
  "iquitos-hidden-gems": {
    id: "iquitos-hidden-gems",
    slug: "iquitos-hidden-gems",
    category: "Viajes & Cultura",
    categoryKey: "travel",
    title: "Iquitos: Cinco Rincones Ocultos que Solo los Locales Conocen",
    excerpt: "La puerta de entrada a la Amazonía peruana guarda mucho más que mercados y mototaxis. Descubre sus patios silenciosos y santuarios a orillas del río.",
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1771514450/luxury-train_i18flh.webp",
    date: "28 de Abril, 2025",
    readTime: "5 min",
    author: "Carlos López",
    authorBio: "Explorador urbano y escritor de viajes especializado en destinos amazónicos fuera del circuito turístico convencional.",
    tags: ["iquitos", "amazonas", "cultura", "lugares-ocultos"],
    toc: [
      { id: "malecon", label: "El Malecón Tarapacá al atardecer" },
      { id: "playa", label: "La Playa de Santa Clara" },
      { id: "mercado", label: "El Mercado de Belén (el real)" },
      { id: "fierro", label: "La Casa de Fierro" },
      { id: "mirador", label: "El Mirador de la Calle Putumayo" },
    ],
    blocks: [
      {
        type: "lead",
        text: "Iquitos, la ciudad más grande del mundo a la que no se puede llegar por carretera, es un destino que desafía toda lógica. Más allá de los circuitos convencionales, existen cinco rincones que los locales cuidan en secreto.",
      },
      { type: "heading2", text: "1. El Malecón Tarapacá al atardecer", id: "malecon" },
      {
        type: "paragraph",
        text: "Aunque el Malecón es conocido, pocos turistas visitan el extremo norte al atardecer, donde las vistas del río Amazonas son espectaculares y el ambiente es más tranquilo y auténtico.",
      },
      { type: "heading2", text: "2. La Playa de Santa Clara", id: "playa" },
      {
        type: "paragraph",
        text: "A solo 20 minutos en bote, esta playa de arena blanca en la cuenca del río Nanay es el lugar favorito de los iquiteños para escapar del calor. Durante la temporada baja de agua (junio-noviembre), se forman hermosas playas fluviales.",
      },
      { type: "heading2", text: "3. El Mercado de Belén (pero no el turístico)", id: "mercado" },
      {
        type: "paragraph",
        text: "El mercado flotante es famoso, pero pocos se aventuran a la sección trasera, donde se encuentran los puestos de medicina tradicional amazónica con plantas y hierbas curativas utilizadas por chamanes locales.",
      },
      { type: "heading2", text: "4. La Casa de Fierro y su historia oculta", id: "fierro" },
      {
        type: "paragraph",
        text: "Diseñada por Gustave Eiffel, esta icónica estructura es conocida por todos, pero lo que pocos saben es que existe una galería en el tercer piso con fotografías históricas de la fiebre del caucho.",
      },
      { type: "heading2", text: "5. El Mirador de la Calle Putumayo", id: "mirador" },
      {
        type: "paragraph",
        text: "En el barrio de Pueblo Libre, este mirador improvisado ofrece vistas panorámicas de la confluencia de los ríos Nanay, Itaya y Amazonas. Los locales vienen aquí al amanecer para ver el despertar de la selva.",
      },
      {
        type: "tip",
        label: "Consejo del local",
        text: "La mejor época para visitar estos lugares es durante la temporada de vaciante (junio-noviembre), cuando los caminos son más accesibles y las playas fluviales están en su máximo esplendor.",
      },
    ],
  },

  // ─── PINK RIVER DOLPHINS ─────────────────────────────────────────────────
  "pink-river-dolphins": {
    id: "pink-river-dolphins",
    slug: "pink-river-dolphins",
    category: "Viajes & Cultura",
    categoryKey: "travel",
    title: "El Delfín Rosado: Mito, Leyenda y Maravilla Viviente",
    excerpt: "Venerado por comunidades indígenas durante milenios, el boto aparece al atardecer en los tributarios silenciosos y quiere conocerte.",
    image: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/isla-uros_m0ai0t.webp",
    date: "22 de Marzo, 2025",
    readTime: "7 min",
    author: "Carlos López",
    authorBio: "Explorador urbano y escritor de viajes especializado en destinos amazónicos fuera del circuito turístico convencional.",
    tags: ["delfines", "amazonas", "vida-silvestre", "leyendas"],
    toc: [
      { id: "leyenda", label: "La leyenda del Boto" },
      { id: "datos", label: "Datos fascinantes" },
      { id: "donde", label: "Dónde y cuándo verlos" },
      { id: "conservacion", label: "Esfuerzos de conservación" },
    ],
    blocks: [
      {
        type: "lead",
        text: "El delfín rosado (Inia geoffrensis), conocido como 'boto' en la región amazónica, es una de las criaturas más fascinantes y misteriosas del río Amazonas. Su color rosado característico y su comportamiento juguetón lo convierten en uno de los avistamientos más deseados.",
      },
      { type: "heading2", text: "La leyenda del Boto", id: "leyenda" },
      {
        type: "paragraph",
        text: "Según la mitología amazónica, durante la noche el delfín rosado se transforma en un apuesto hombre vestido de blanco que sale del río para seducir a las doncellas y llevarlas al fondo del agua, donde desaparecen para siempre.",
      },
      {
        type: "paragraph",
        text: "Esta leyenda, transmitida por generaciones, explica por qué muchas comunidades ribereñas tienen tradiciones particulares alrededor de estos cetáceos, como no mirarlos directamente a los ojos o evitar nadar al atardecer.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1566836610593-62a64888a216?w=700&q=80&auto=format&fit=crop",
        alt: "Delfín rosado en el Amazonas",
        caption: "El boto puede alcanzar hasta 2.5 metros de largo y pesar más de 185 kg.",
      },
      { type: "heading2", text: "Datos fascinantes", id: "datos" },
      {
        type: "features",
        items: [
          { title: "Color único", description: "Su tono rosado se debe a la capilaridad y se intensifica con la edad." },
          { title: "Inteligencia excepcional", description: "Tienen un cerebro 40 % más grande que el humano en proporción al cuerpo." },
          { title: "Adaptación única", description: "Pueden girar la cabeza 180 grados gracias a vértebras cervicales no fusionadas." },
          { title: "Comunicación compleja", description: "Utilizan 31 tipos diferentes de sonidos para comunicarse entre sí." },
        ],
      },
      { type: "heading2", text: "Dónde y cuándo verlos", id: "donde" },
      {
        type: "paragraph",
        text: "Los mejores lugares para avistar delfines rosados en Perú son la Reserva Nacional Pacaya Samiria y el Río Yarapa. La temporada seca (junio-noviembre) ofrece mejores oportunidades, ya que los delfines se concentran en los canales principales del río.",
      },
      { type: "heading2", text: "Esfuerzos de conservación", id: "conservacion" },
      {
        type: "paragraph",
        text: "El delfín rosado está clasificado como 'En Peligro' por la UICN debido a la contaminación de los ríos, la pesca incidental y la construcción de represas. Organizaciones como el Proyecto Delfín Amazónico trabajan para proteger estas increíbles criaturas y su hábitat.",
      },
      {
        type: "tip",
        label: "Avistamiento responsable",
        text: "Elige operadores que respeten un radio mínimo de 50 metros y que nunca alimenten a los delfines. La interacción no invasiva protege su comportamiento natural y garantiza que futuras generaciones puedan verlos.",
      },
    ],
  },

  // ─── SUSTAINABLE AMAZON TRAVEL ───────────────────────────────────────────
  "sustainable-amazon-travel": {
    id: "sustainable-amazon-travel",
    slug: "sustainable-amazon-travel",
    category: "Sostenibilidad",
    categoryKey: "sustain",
    title: "Viajar con Responsabilidad en Uno de los Ecosistemas Más Frágiles del Planeta",
    excerpt: "El turismo consciente puede ser una fuerza para la conservación. Aquí los principios que guían cada viaje que operamos.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80&auto=format&fit=crop",
    date: "5 de Marzo, 2025",
    readTime: "5 min",
    author: "María Gonzales",
    authorBio: "Directora de sostenibilidad en Fiesta Tours y colaboradora del Programa de las Naciones Unidas para el Medio Ambiente.",
    tags: ["sostenibilidad", "conservación", "ecoturismo"],
    toc: [
      { id: "principios", label: "Principios de turismo responsable" },
      { id: "fiesta", label: "Cómo contribuye Fiesta Tours" },
      { id: "viajero", label: "Tu papel como viajero consciente" },
    ],
    blocks: [
      {
        type: "lead",
        text: "La selva amazónica es uno de los ecosistemas más diversos y frágiles del planeta. Como viajeros, tenemos la responsabilidad de minimizar nuestro impacto y contribuir positivamente a su conservación.",
      },
      { type: "heading2", text: "Principios de turismo responsable", id: "principios" },
      { type: "heading3", text: "1. Elige operadores certificados" },
      {
        type: "paragraph",
        text: "Trabaja con agencias que tengan certificaciones de sostenibilidad reconocidas internacionalmente y que demuestren prácticas responsables auditadas.",
      },
      { type: "heading3", text: "2. Apoya a las comunidades locales" },
      {
        type: "paragraph",
        text: "Compra artesanías directamente a los productores, contrata guías locales y elige alojamientos que beneficien económicamente a las comunidades ribereñas.",
      },
      { type: "heading3", text: "3. Reduce tu huella" },
      {
        type: "paragraph",
        text: "Lleva una botella de agua reutilizable, evita plásticos de un solo uso y utiliza productos biodegradables. Nunca tires basura en la selva o los ríos.",
      },
      { type: "heading3", text: "4. Respeta la vida silvestre" },
      {
        type: "paragraph",
        text: "Mantén distancia de los animales, no los alimentes ni interactúes con ellos de manera que altere su comportamiento natural.",
      },
      { type: "heading2", text: "Cómo Fiesta Tours contribuye a la conservación", id: "fiesta" },
      {
        type: "paragraph",
        text: "En Fiesta Tours, cada viaje incluye una contribución a fondos de conservación local. Además, operamos con embarcaciones de bajo consumo energético y trabajamos exclusivamente con proveedores que comparten nuestro compromiso.",
      },
      {
        type: "quote",
        text: "El turismo no puede salvar la Amazonía por sí solo, pero un turismo bien gestionado puede financiar quienes sí lo hacen.",
        cite: "María Gonzales, Directora de Sostenibilidad",
      },
      { type: "heading2", text: "Tu papel como viajero consciente", id: "viajero" },
      {
        type: "paragraph",
        text: "Cada decisión que tomas durante tu viaje tiene un impacto. Al elegir opciones sostenibles, te conviertes en parte de la solución para proteger este ecosistema invaluable para las generaciones futuras.",
      },
    ],
  },

  // ─── AMAZON GASTRONOMY ───────────────────────────────────────────────────
  "amazon-gastronomy": {
    id: "amazon-gastronomy",
    slug: "amazon-gastronomy",
    category: "Cultura & Gastronomía",
    categoryKey: "culture",
    title: "Del Río a la Mesa: La Extraordinaria Gastronomía de la Cuenca Amazónica",
    excerpt: "Ceviche de paiche, agua fresca de camu camu, ensaladas de palmito — la cocina amazónica es uno de los secretos culinarios mejor guardados del mundo.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80&auto=format&fit=crop",
    date: "18 de Febrero, 2025",
    readTime: "6 min",
    author: "Chef Juan Reyes",
    authorBio: "Chef ejecutivo con formación en Le Cordon Bleu Lima y 15 años investigando la despensa amazónica.",
    tags: ["gastronomía", "cultura", "amazonas", "comida"],
    toc: [
      { id: "ingredientes", label: "Ingredientes emblemáticos" },
      { id: "platos", label: "Platos imperdibles" },
      { id: "donde-comer", label: "Dónde comer" },
    ],
    blocks: [
      {
        type: "lead",
        text: "La gastronomía amazónica es un tesoro culinario que combina ingredientes exóticos, técnicas ancestrales y sabores únicos. Desde el ceviche de paiche hasta el refrescante jugo de camu camu, cada plato cuenta la historia de la selva.",
      },
      { type: "heading2", text: "Ingredientes emblemáticos", id: "ingredientes" },
      { type: "heading3", text: "El Paiche" },
      {
        type: "paragraph",
        text: "Este gigante de agua dulce, uno de los peces más grandes del mundo, es la estrella de la cocina amazónica. Su carne firme y sabrosa se presta para ceviches, sudados y parrillas.",
      },
      { type: "heading3", text: "Camu Camu" },
      {
        type: "paragraph",
        text: "Esta fruta contiene la mayor concentración de vitamina C del reino vegetal (hasta 60 veces más que la naranja). Su sabor ácido es perfecto para refrescos, postres y salsas.",
      },
      { type: "heading3", text: "Palmito" },
      {
        type: "paragraph",
        text: "El corazón de la palmera es un ingrediente versátil que se usa en ensaladas, cremas y salteados, con una textura suave y un sabor delicado.",
      },
      { type: "heading2", text: "Platos imperdibles", id: "platos" },
      {
        type: "features",
        items: [
          { title: "Juane", description: "Arroz, pollo y huevo envueltos en hojas de bijao y cocidos al vapor." },
          { title: "Tacacho con cecina", description: "Plátano verde asado y machacado acompañado de carne seca y especias." },
          { title: "Patarashca", description: "Pescado envuelto en hojas de bijao y asado directamente al carbón." },
          { title: "Inchicapi", description: "Sopa espesa y reconfortante de maní, gallina y yuca." },
        ],
      },
      { type: "heading2", text: "Dónde probar la verdadera cocina amazónica", id: "donde-comer" },
      {
        type: "paragraph",
        text: "Los mercados locales como Belén en Iquitos ofrecen la experiencia más auténtica. Para una propuesta más refinada, restaurantes como Al Frio y Al Fuego o Amazon Bistro reinterpretan los sabores tradicionales con técnicas contemporáneas.",
      },
      {
        type: "tip",
        label: "Recomendación del chef",
        text: "Llega al mercado de Belén antes de las 8 AM para encontrar los ingredientes más frescos y probar el desayuno local: un caldo de pescado con yuca que los iquiteños consideran el mejor remedio contra el calor.",
      },
    ],
  },
};

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(blogPosts);
}