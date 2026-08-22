import type { Itinerario, DiaItinerario } from "./data.types";

// ─── COORDENADAS POR CIUDAD ────────────────────────────────────────────
const CITY_COORDS = {
  lima: { lat: -12.0464, lng: -77.0428 },
  cusco: { lat: -13.5319, lng: -71.9675 },
  "valle-sagrado": { lat: -13.3167, lng: -72.1167 },
  "machu-picchu": { lat: -13.1631, lng: -72.5450 },
} as const;

// ─── Perú Espectacular ──────────────────────────────────────────────────
const peruEspectacularDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada",
    description: [
      "Al llegar al aeropuerto, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.",
      "Lima, una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba.",
      "Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor.",
    ],
    itinerarioImage: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Tour de Lima Colonial y Moderna (D)",
    description: [
      "El Tour de Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas que, enmarcada por su bella Catedral y por los palacios Arzobispal, de Gobierno y Municipal, te transportará al pasado con sólo pisar uno de sus escalones.",
      "Luego visitaremos una obra maestra de la arquitectura colonial: el Convento de San Francisco con sus famosas Catacumbas.",
      "Proseguiremos con la Lima Moderna y sus hermosos barrios turísticos de San Isidro y Miraflores, desde los cuales podrás fotografiar increíbles vistas del Océano Pacífico y de los acantilados de la Costa Verde.",
    ],
    itinerarioImage: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/luxury-train_i18flh.jpg",
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Lima – Cusco con visita a la ciudad de Cusco y ruinas Aledañas (D)",
    description: [
      "Desayuno. Traslado de salida con destino a la ciudad de Cusco. Al llegar al aeropuerto de Cusco, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.",
      "Por la tarde la emoción y el asombro serán inigualables, desde la Catedral a la Plaza de Armas, pasando por el Convento de Santo Domingo, construido sobre el famoso Templo del Koricancha; hasta las ruinas de Kenko, Puca Pucará, Tambomachay y la Fortaleza de Sacsayhuaman.",
      "Alguna vez el centro de la civilización Inca; Cusco sigue cautivando a sus visitantes, viviendo en sus recuerdos por mucho, mucho tiempo.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Cusco – Valle Sagrado (D, A)",
    description: [
      "Desayuno. Viajaremos por las fértiles campiñas hasta arribar al colonial pueblo de Pisac (Diario). Un mercado colorido y de abundantes maravillas se presentará ante tus ojos, donde tendrás la oportunidad de observar y comprar la más variada artesanía y joyería cuzqueña.",
      "Después de almorzar, nuestro tour continúa hacia Ollantaytambo, una antigua fortaleza inca compuesta por numerosos templos y terrazas que se elevan majestuosamente sobre el valle.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 5,
    title: "Valle Sagrado – Machu Picchu – Cusco (D)",
    description: [
      "Desayuno. Traslado a la estación del tren para iniciar nuestro viaje a la ciudad perdida de los Incas, Machu Picchu. Esta impresionante y colosal ciudadela constituye uno de los más importantes atractivos turísticos de Cusco.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica a la vez el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
      "Por la tarde regreso en tren a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 6,
    title: "Día Libre en Cusco (D)",
    description: [
      "Desayuno. Día libre para realizar actividades independientes. Camine a través de esta adorable ciudad, explorando sus asombrosas calles estrechas la cual será una experiencia inolvidable.",
      "Excelentes compras son las tradicionales artesanías Peruanas, chompas de lana de alpaca, ponchos, cerámica, joyas de oro y plata, etc.",
      "Debido a la gran variedad de productos, nosotros recomendamos que una vez que encuentre un artículo en particular lo compre ya que puede ser que no encuentre uno similar en otra tienda.",
    ],
    location: "cusco",
    // ✅ CORREGIDO: Ahora usa coordenadas de Cusco, no de Machu Picchu
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 7,
    title: "Cusco – Lima – Salida Internacional (D)",
    description: [
      "Desayuno. Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa.",
      "Comparta con familiares y amigos su inolvidable experiencia en Perú, El Imperio de Tesoros escondidos.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Perú Mágico ────────────────────────────────────────────────────────────
const peruMagicoDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada",
    description: [
      "Al llegar al aeropuerto, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.",
      "Lima, una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba.",
      "Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor.",
    ],
    itinerarioImage: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Tour de Lima Colonial y Moderna (D)",
    description: [
      "El Tour de Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas que, enmarcada por su bella Catedral y por los palacios Arzobispal, de Gobierno y Municipal, te transportará al pasado con sólo pisar uno de sus escalones.",
      "Luego visitaremos una obra maestra de la arquitectura colonial: el Convento de San Francisco con sus famosas Catacumbas.",
      "Proseguiremos con la Lima Moderna y sus hermosos barrios turísticos de San Isidro y Miraflores, desde los cuales podrás fotografiar increíbles vistas del Océano Pacífico y de los acantilados de la Costa Verde.",
    ],
    itinerarioImage: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/luxury-train_i18flh.jpg",
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Lima – Cusco – Valle Sagrado (D)",
    description: [
      "Luego de un corto y espectacular vuelo sobre la majestuosa Cordillera de los Andes y sus imponentes montañas nevadas, aterrizaremos en la que fuera capital de una de las civilizaciones más importantes del mundo: Cusco, la legendaria capital del Imperio Inca y patrimonio de la humanidad.",
      "Cusco, española e inca, sagrada y divina, nos da la bienvenida. A su llegada, un anfitrión lo recibirá y lo asistirá en su traslado directamente al hotel en el Valle Sagrado.",
      "Tómese el resto del día para descansar, adaptarse a la altura del lugar y disfrutar de las instalaciones del hotel elegido. Pernocte en el Valle Sagrado.",
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 4,
    title: "Mercado de Pisac y Complejo Arqueológico de Ollantaytambo – Machu Picchu (D, A, C)",
    description: [
      "Viajamos por los campos fértiles del Valle Sagrado de los Incas, hacia el pintoresco pueblo colonial de Pisac, donde el colorido mercado indio se ha convertido en una importante atracción turística. Artesanos de los pueblos cercanos llegan a Pisac con atractivos tejidos de alpaca y trabajos de artesanía. Durante su visita al mercado, tendrá la oportunidad de negociar con los nativos por la compra de los diferentes productos que ellos ofrecen.",
      "Complejo Arqueológico de Ollantaytambo: Los incas lo construyeron como una fortaleza que incluye un templo, andenes y un sector urbano. Hay dos sectores diferenciados: la zona religiosa y de culto, y la zona residencial. Ollantaytambo también fue un importante centro administrativo con funciones militares si se tiene en cuenta las murallas y torres. El pueblo de Ollantaytambo es llamado 'Pueblo Inca Viviente', ya que los habitantes mantienen prácticas y costumbres desde el tiempo de los Incas.",
      "El almuerzo está incluido. Luego de un buen almuerzo, seremos trasladados hacia la estación de Ollantaytambo para tomar el tren hacia Aguas Calientes. A nuestro arribo, seremos recibidos por un representante que nos acompañará hacia el hotel.",
      "El resto de la noche libre para poder conocer el pueblo, descansar o disfrutar de las instalaciones del hotel. Cena en el hotel. Pernocte en Aguas Calientes.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 5,
    title: "Machu Picchu – Cusco (D)",
    description: [
      "Empezamos la excursión con un viaje combinando bus, tren y bus. Esta impresionante y colosal ciudadela constituye el más importante atractivo del Perú.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica fue el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
      "Por la tarde retorno a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS["machu-picchu"].lat,
    lng: CITY_COORDS["machu-picchu"].lng,
  },
  {
    day: 6,
    title: "Cusco – Tour de Cusco y ruinas cercanas (D)",
    description: [
      "Los visitantes se encuentran emocionados al recorrer por la antigua capital del Imperio Inca, una admirable combinación de arquitectura inca y colonial.",
      "El tour visita los atractivos más importantes como la Catedral, la Plaza de Armas y Koricancha el 'Templo del Sol'.",
      "La visita a la ciudad más antigua continuamente habitada en el hemisferio occidental también incluye Kenko, Puca Pucara, Tambomachay y la fortaleza de Sacsayhuaman, un imponente ejemplo de la arquitectura militar Inca.",
    ],
    location: "cusco",
    // ✅ CORREGIDO: Ahora usa coordenadas de Cusco
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 7,
    title: "Cusco – Lima – Retorno a Casa (D)",
    description: [
      "Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa.",
      "Comparta con familiares y amigos su inolvidable experiencia de su visita al Perú, El Imperio de secretos escondidos.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Perú de Maravilla ─────────────────────────────────────────────────────
const peruMaravillaDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Llegada a Lima",
    description: [
      "Al llegar al aeropuerto, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.",
      "Lima, una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba.",
      "Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Tour de Lima Colonial y Moderna (D)",
    description: [
      "El Tour de Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas que, enmarcada por su bella Catedral y por los palacios Arzobispal, de Gobierno y Municipal, te transportará al pasado con sólo pisar uno de sus escalones.",
      "Luego visitaremos una obra maestra de la arquitectura colonial: el Convento de San Francisco con sus famosas Catacumbas.",
      "Proseguiremos con la Lima Moderna y sus hermosos barrios turísticos de San Isidro y Miraflores, desde los cuales podrás fotografiar increíbles vistas del Océano Pacífico y de los acantilados de la Costa Verde.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Lima – Cusco – Valle Sagrado (D)",
    description: [
      "Luego de un corto y espectacular vuelo sobre la majestuosa Cordillera de los Andes y sus imponentes montañas nevadas, aterrizaremos en la que fuera capital de una de las civilizaciones más importantes del mundo: Cusco, la legendaria capital del Imperio Inca y patrimonio de la humanidad.",
      "Cusco, española e inca, sagrada y divina, nos da la bienvenida. A su llegada, un anfitrión lo recibirá y lo asistirá en su traslado directamente al hotel en el Valle Sagrado.",
      "Tómese el resto del día para descansar, adaptarse a la altura del lugar y disfrutar de las instalaciones del hotel elegido. Pernocte en el Valle Sagrado.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Mercado de Pisac y Complejo Arqueológico de Ollantaytambo (D, A)",
    description: [
      "Viajamos por los campos fértiles del Valle Sagrado de los Incas, hacia el pintoresco pueblo colonial de Pisac, donde el colorido mercado indio se ha convertido en una importante atracción turística. Artesanos de los pueblos cercanos llegan a Pisac con atractivos tejidos de alpaca y trabajos de artesanía. Durante su visita al mercado, tendrá la oportunidad de negociar con los nativos por la compra de los diferentes productos que ellos ofrecen.",
      "Complejo Arqueológico de Ollantaytambo: Los incas lo construyeron como una fortaleza que incluye un templo, andenes y un sector urbano. Hay dos sectores diferenciados: la zona religiosa y de culto, y la zona residencial. Ollantaytambo también fue un importante centro administrativo con funciones militares si se tiene en cuenta las murallas y torres. El pueblo de Ollantaytambo es llamado 'Pueblo Inca Viviente', ya que los habitantes mantienen prácticas y costumbres desde el tiempo de los Incas.",
      "El almuerzo está incluido. Pernocte en el Valle Sagrado.",
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 5,
    title: "Moray, Salineras de Maras / Traslado por la tarde a la estación del tren (D, C)",
    description: [
      "Visite las vírgenes y pintorescas comunidades andinas en su camino al centro experimental inca agrícola de Moray, famoso por su anfiteatro hundido, formado por cuatro andenes circulares que parecen desaparecer en la tierra como un cráter artificial. El sitio era al parecer una estación de investigación agrícola inca lleno de tierra fértil y regada por complejos sistemas de regadío, destinadas a la experimentación con cultivos a diferentes alturas.",
      "Maras: Pozas blancas y brillantes, provenientes de un riachuelo subterráneo y expuestas al sol hasta evaporarse, las impresionantes Salineras de Maras son un espectáculo único para empezar una mañana.",
      "Por la tarde traslado a la estación del tren para iniciar nuestro viaje a la ciudad perdida de los Incas, Machu Picchu. El resto de la noche libre para poder conocer el pueblo, descansar o disfrutar de las instalaciones del hotel. Cena en el hotel. Pernocte en Aguas Calientes.",
    ],
    location: "cusco",
    // ✅ CORREGIDO: Ahora usa coordenadas de Valle Sagrado
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 6,
    title: "Machu Picchu – Cusco (D)",
    description: [
      "Por la mañana iniciaremos la excursión a la ciudadela de Machu Picchu. Esta impresionante y colosal ciudadela constituye uno de los más importantes atractivos turísticos de Cusco.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica a la vez el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
      "Retorno por la tarde a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 7,
    title: "Cusco – Tour de Cusco y ruinas cercanas (D)",
    description: [
      "Los visitantes se encuentran emocionados al recorrer por la antigua capital del Imperio Inca, una admirable combinación de arquitectura inca y colonial.",
      "El tour visita los atractivos más importantes como la Catedral, la Plaza de Armas y Koricancha el 'Templo del Sol'.",
      "La visita a la ciudad más antigua continuamente habitada en el hemisferio occidental también incluye Kenko, Puca Pucara, Tambomachay y la fortaleza de Sacsayhuaman, un imponente ejemplo de la arquitectura militar Inca.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 8,
    title: "Cusco – Lima – Retorno a Casa (D)",
    description: [
      "Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa.",
      "Comparta con familiares y amigos su inolvidable experiencia de su visita al Perú, El Imperio de secretos escondidos.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Perú en Jeans ─────────────────────────────────────────────────────────
const peruJeansDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada a la Ciudad de Reyes",
    description: [
      "Llegada a Lima, la 'Ciudad de los Reyes', famosa por su arquitectura colonial española, los museos y la gastronomía extraordinaria.",
      "Lima es reconocida internacionalmente como la 'Capital Gastronómica de las Américas', y su cocina es considerada una de las más diversa y exquisita en el mundo a la par con la cocina francesa.",
      "A su llegada, un anfitrión lo recibirá en el aeropuerto y lo asistirá en su traslado al hotel y en registrarse.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Cusco (D)",
    description: [
      "Traslado desde el hotel al aeropuerto para tomar un corto y espectacular vuelo a través de los andes nevados para llegar a la ciudad más antigua continuamente habitada en el hemisferio occidental, a una altura de 3,399 metros. A su llegada, un anfitrión lo recibirá y lo asistirá en su traslado al hotel y a registrarse.",
      "Tour de Cusco a pie – Catedral, Koricancha, San Blas: Los visitantes se encuentran emocionados al recorrer por la antigua capital del Imperio Inca, una admirable combinación de arquitectura inca y colonial. El paseo recorre los lugares más importantes, la Plaza de Armas de Cusco, la catedral y Koricancha, el 'Templo del Sol'.",
      "El tour también incluye una visita al emblemático barrio de San Blas, lleno de estrechas calles típicas y encantadoras casas pequeñas, galerías y talleres de artesanía, donde se ve artesanos locales en pleno trabajo.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Cusco – Machu Picchu – Cusco (D)",
    description: [
      "Empezamos la excursión con un viaje combinando bus, tren y bus. Esta impresionante y colosal ciudadela constituye el más importante atractivo del Perú.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica fue el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Cusco – Lima – Retorno a Casa (D)",
    description: [
      "Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa.",
      "Comparta con familiares y amigos su inolvidable experiencia de su visita al Perú, El Imperio de secretos escondidos.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Perú Express ──────────────────────────────────────────────────────────
const peruExpressDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada a la Ciudad de Reyes",
    description: [
      "Llegada a Lima, la 'Ciudad de los Reyes', famosa por su arquitectura colonial española, los museos y la gastronomía extraordinaria.",
      "Lima es reconocida internacionalmente como la 'Capital Gastronómica de las Américas', y su cocina es considerada una de las más diversa y exquisita en el mundo a la par con la cocina francesa.",
      "A su llegada, un anfitrión lo recibirá en el aeropuerto y lo asistirá en su traslado al hotel y en registrarse.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Cusco (D)",
    description: [
      "Después de un corto y espectacular vuelo sobre los majestuosos nevados de la Cordillera de los Andes, se llega a la que fue capital del Imperio inca y una de las ciudades más importantes del Virreinato del Perú. Declarada Patrimonio de la Humanidad por la Unesco, Cusco suele ser denominada, debido a la gran cantidad de monumentos que posee, como la 'Capital Arqueológica de América'. A su llegada, un anfitrión lo asistirá durante su traslado y registro en el hotel.",
      "Tour de Cusco y ruinas cercanas: Los visitantes se encuentran emocionados al recorrer por la antigua capital del Imperio Inca, una admirable combinación de arquitectura inca y colonial. El tour visita los atractivos más importantes como la Catedral, la Plaza de Armas y Koricancha el 'Templo del Sol'.",
      "La visita a la ciudad más antigua continuamente habitada en el hemisferio occidental también incluye Kenko, Puca Pucara, Tambomachay y la fortaleza de Sacsayhuaman, un imponente ejemplo de la arquitectura militar Inca.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Mercado de Pisac y Complejo Arqueológico de Ollantaytambo (D, A)",
    description: [
      "Viajamos por los campos fértiles del Valle Sagrado de los Incas, hacia el pintoresco pueblo colonial de Pisac, donde el colorido mercado indio se ha convertido en una importante atracción turística. Artesanos de los pueblos cercanos llegan a Pisac con atractivos tejidos de alpaca y trabajos de artesanía. Durante su visita al mercado, tendrá la oportunidad de negociar con los nativos por la compra de los diferentes productos que ellos ofrecen.",
      "Complejo Arqueológico de Ollantaytambo: Los incas lo construyeron como una fortaleza que incluye un templo, andenes y un sector urbano. Hay dos sectores diferenciados: la zona religiosa y de culto, y la zona residencial. Ollantaytambo también fue un importante centro administrativo con funciones militares si se tiene en cuenta las murallas y torres. El pueblo de Ollantaytambo es llamado 'Pueblo Inca Viviente', ya que los habitantes mantienen prácticas y costumbres desde el tiempo de los Incas.",
      "Almuerzo incluido. Por la tarde retorno a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Cusco – Machu Picchu – Cusco (D)",
    description: [
      "Empezamos la excursión con un viaje combinando bus, tren y bus. Esta impresionante y colosal ciudadela constituye el más importante atractivo del Perú.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica fue el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
      "Por la tarde retorno a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 5,
    title: "Cusco – Lima – Retorno a Casa (D)",
    description: [
      "Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa.",
      "Comparta con familiares y amigos su inolvidable experiencia de su visita al Perú, El Imperio de secretos escondidos.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Perú Esencial ─────────────────────────────────────────────────────────
const peruEsencialDays: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada",
    description: [
      "Una ciudad que siempre te recibirá con los brazos abiertos y que vive donde el pasado se mezcla con el presente. En ella los palacios, monasterios y conventos coloniales coexisten en asombrosa armonía con modernas edificaciones y milenarias pirámides precolombinas.",
      "Ya sea en el zaguán de una antigua casona o en la profundidad de una impactante catacumba, Lima, la Ciudad de los Reyes y Capital Gastronómica de América, te espera para deslumbrarte con su magia y embriagarte con su sabor.",
      "Al llegar al aeropuerto, un anfitrión lo recibirá y asistirá en su traslado al hotel.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima – Tour de Lima Colonial y Moderna – Cusco (D)",
    description: [
      "El Tour de Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas que, enmarcada por su bella Catedral y por los palacios Arzobispal, de Gobierno y Municipal, te transportará al pasado con sólo pisar uno de sus escalones. Luego visitaremos una obra maestra de la arquitectura colonial: el Convento de San Francisco con sus famosas Catacumbas. Proseguiremos con la Lima Moderna y sus hermosos barrios turísticos de San Isidro y Miraflores, desde los cuales podrás fotografiar increíbles vistas del Océano Pacífico y de los acantilados de la Costa Verde.",
      "Traslado desde el hotel al aeropuerto para tomar un corto y espectacular vuelo sobre la majestuosa Cordillera de los Andes y sus imponentes montañas nevadas, aterrizaremos en la que fuera capital de una de las civilizaciones más importantes del mundo: Cusco, la legendaria capital del Imperio Inca y patrimonio de la humanidad.",
      "Cusco, española e inca, sagrada y divina, nos da la bienvenida. A nuestra llegada, un anfitrión nos recibirá y asistirá durante el traslado al hotel.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Cusco – Tour de Cusco y ruinas cercanas (D)",
    description: [
      "Los visitantes se encuentran emocionados al recorrer por la antigua capital del Imperio Inca, una admirable combinación de arquitectura inca y colonial.",
      "El tour visita los atractivos más importantes como la Catedral, la Plaza de Armas y Koricancha el 'Templo del Sol'.",
      "La visita a la ciudad más antigua continuamente habitada en el hemisferio occidental también incluye Kenko, Puca Pucara, Tambomachay y la fortaleza de Sacsayhuaman, un imponente ejemplo de la arquitectura militar Inca.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Mercado de Pisac y Complejo Arqueológico de Ollantaytambo (D, A)",
    description: [
      "Viajamos por los campos fértiles del Valle Sagrado de los Incas, hacia el pintoresco pueblo colonial de Pisac, donde el colorido mercado indio se ha convertido en una importante atracción turística. Artesanos de los pueblos cercanos llegan a Pisac con atractivos tejidos de alpaca y trabajos de artesanía. Durante su visita al mercado, tendrá la oportunidad de negociar con los nativos por la compra de los diferentes productos que ellos ofrecen.",
      "Complejo Arqueológico de Ollantaytambo: Los incas lo construyeron como una fortaleza que incluye un templo, andenes y un sector urbano. Hay dos sectores diferenciados: la zona religiosa y de culto, y la zona residencial. Ollantaytambo también fue un importante centro administrativo con funciones militares si se tiene en cuenta las murallas y torres. El pueblo de Ollantaytambo es llamado 'Pueblo Inca Viviente', ya que los habitantes mantienen prácticas y costumbres desde el tiempo de los Incas.",
      "El almuerzo está incluido. Por la tarde retorno a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 5,
    title: "Cusco – Machu Picchu – Cusco (D)",
    description: [
      "Empezamos la excursión con un viaje combinando bus, tren y bus. Esta impresionante y colosal ciudadela constituye el más importante atractivo del Perú.",
      "400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham.",
      "Machu Picchu, centro de culto y observación astronómica fue el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección.",
      "Por la tarde retorno a Cusco.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 6,
    title: "Cusco – Lima – Retorno a Casa (D)",
    description: [
      "Traslado al aeropuerto para retornar a casa.",
      "Comparta con sus familiares y amigos su inolvidable experiencia vivida en Perú, País de Maravillas.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Majestad Inca ─────────────────────────────────────────────────────────
const majestadInca: DiaItinerario[] = [
  {
    day: 1,
    title: "Lima – Llegada",
    description: [
      "La Ciudad De Los Reyes, famosa por su arquitectura colonial española, sus extraordinarios museos y su gastronomía. Lima es reconocida internacionalmente como: 'Lima - La Capital Gastronómica De América', y su gastronomía se considera una de las más diversas y exquisitas del mundo, a la par de la francesa.",
      "Diversos maestros de la cocina peruana han sido galardonados con las máximas distinciones globales, posicionando a sus restaurantes en la cumbre de la gastronomía mundial.",
      "Recepción, asistencia con el equipaje y cómodo traslado a su hotel.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 2,
    title: "Lima Colonial y Espectáculo del Caballo Peruano de Paso (D, A)",
    description: [
      "El recorrido por la Lima Colonial incluye la hermosa Plaza Mayor, el Palacio de Gobierno y La Basílica y Convento de San Francisco, un conjunto arquitectónico monumental reconocido por su arquitectura barroca, su extensa biblioteca y sus fascinantes catacumbas subterráneas. Es Patrimonio Cultural de la Humanidad por la UNESCO.",
      "Después de la visita a la Lima Colonial, la excursión continúa para disfrutar del majestuoso espectáculo del Caballo Peruano de Paso.",
      "El mundialmente famoso Caballo Peruano de Paso es manso y de paso suave. Se distingue por un paso lateral natural de cuatro tiempos llamado 'Paso Llano'. Los peruanos remontan su ascendencia a estos caballos de paso; así como al Barbo, que aportaba fuerza y resistencia; y al Andaluz, que le aportaba estilo.",
      "El almuerzo está incluido. La excursión sale a las 8:30 am. Si el tiempo lo permite, visita de cortesía al 'Templo del Sol y el Templo de la Luna' en el Centro Ceremonial Arqueológico de Pachacamac.",
    ],
    location: "lima",
    lat: CITY_COORDS.lima.lat,
    lng: CITY_COORDS.lima.lng,
  },
  {
    day: 3,
    title: "Lima, Cusco y Valle Sagrado (D, A)",
    description: [
      "Traslado al aeropuerto de Lima para un vuelo sobre las montañas nevadas de la Cordillera de los Andes peruanos, para llegar a Cusco, capital del Imperio Inca.",
      "Cusco - La Capital del Imperio Incaico - Ombligo del Mundo, se encuentra a una altitud de 3500 metros. Por la tarde, traslado al Valle Sagrado, a 2500 metros de altitud. Esto le permitirá adaptarse fácil, gradual y cómodamente a la altitud.",
      "A su llegada a Cusco, traslado a 'Terra Andina Mansión Colonial', en el distrito histórico de Cusco, construida a principios del siglo XIX durante la época colonial española.",
      "Almuerzo ligero. Disfrute de la exquisita gastronomía en el restaurante Patio Colonial. Las comidas son a la carta.",
      "Por la tarde, traslado al Valle Sagrado, la fértil tierra de los Incas. De camino al valle, breve parada en el 'Museo Vivo de Yucay', también conocido como 'Museo de la Cultura Viva'.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 4,
    title: "Mercado Andino de Pisac, Complejo Arqueológico de Pisac y Fortaleza de Ollantaytambo (B)",
    description: [
      "Por la mañana, salida en coche por la fértil campiña del Valle del Urubamba hasta el pueblo colonial de Pisac, donde a diario se celebra un singular Mercado Andino de Pisac.",
      "La variedad de productos que se ofrece es abrumadora, desde cerámica con reproducciones de piezas arqueológicas hasta todo tipo de textiles, joyas y artesanías peruanas. Durante su visita a este animado mercado, tendrá la oportunidad de comprar de los artesanos y comerciantes indígenas. (Sugerimos no regatear, estos artesanos necesitan el dólar más que nosotros los visitantes a los Andes peruanos).",
      "Visite los restos del Centro Arqueológico de Pisac, conocidos como Inca Pisac, que se encuentran en la cima de una colina a la entrada del valle. Cuentan con un sistema de riego, un observatorio astronómico y un reloj y calendario solar (Intiwatana). La ladera está bordeada de terrazas agrícolas construidas por los incas y aún en uso. Con estructuras militares, religiosas y agrícolas, el sitio cumplía al menos un triple propósito.",
      "Además de una hacienda, se cree que Pisac defendía la entrada sur al Valle Sagrado, mientras que Choquequiaro defendía la entrada oeste y la fortaleza de Ollantaytambo la entrada norte",
      "Almuerzo en el lugar de su elección.",
      "Continúe hacia el Complejo Arqueológico de Ollantaytambo. Los incas lo construyeron como una fortaleza que incluía un templo, terrazas agrícolas y una zona urbana. Hay dos sectores diferenciados: la zona religiosa y de culto, y la zona residencial. Ollantaytambo fue un importante centro administrativo con probables funciones militares, considerando sus murallas y torres. También hay vestigios de antiguos caminos y acueductos.",
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 5,
    title: "Salineras de Maras, Terrazas de Moray (D)",
    description: [
      "Las Salineras de Maras son un impresionante conjunto de miles de estanques de evaporación de sal poco profundos y escalonados, ubicadas en el Valle Sagrado de los Incas. Alimentadas por un manantial subterráneo natural rico en minerales, las más de 3000 piscinas se han utilizado para la extracción de sal desde la época preincaica.",
      "El método de extracción se mantiene fiel a la tradición ancestral, donde los lugareños llenan cada pozo de manera controlada y permiten que el agua se evapore bajo el intenso sol andino. Una vez que el agua desaparece, se raspa la fina capa de sal rosada que queda en la superficie, un producto altamente valorado en la gastronomía internacional.",
      "Hoy en carencias de maquinaria moderna, las comunidades locales de Maras y Pichingoto continúan gestionando y protegiendo este paisaje vivo, conviertendolo no solo en un motor económico, sino también en un asombroso espectáculo cultural y visual para los viajeros.",
      "Las Terrazas de Moray son famosas por sus terrazas circulares concéntricas que funcionaron como laboratorio agrícola para probar cultivos en diferentes microclimas. Este complejo diseño genera variaciones térmicas de hasta quince grados Celsius entre la terraza superior y la más profunda, simulando múltiples pisos ecológicos en un solo lugar.",
      "Los ingenieros incas crearon un sistema de canales de drenaje tan perfecto que el sitio jamás se inunda, ni siquiera durante las intensas lluvias andinas.",
      "En la actualidad, este anfiteatro natural maravilla a los visitantes por su simetría perfecta y sigue siendo un testimonio vivo del avanzado conocimiento científico de una civilización que logró domar la geografía sagrada.",
      "Almuerzo en el lugar de su elección.",
      "Disfrute de una tarde libre en su propiedad en el Valle Sagrado. Dé un paseo relajado por los jardines o junto al Río Sagrado para relajarse.",
      "Disfrute de las comodidades del hotel, como un tratamiento de spa o la serenidad de la piscina con su impresionante paisaje andino.",
      "Pasee por los exuberantes jardines, escuchando el canto de los pájaros y descubriendo rincones tranquilos para reflexionar entre la flora.",
      "Aproveche la tranquilidad de la tarde para sumergirse por completo en el entorno.",
      "O reserve una visita opcional al pueblo de Chinchero y su complejo arqueológico.",
      "Actividades para niños disponibles bajo petición."
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 6,
    title: "Pueblo de Ollantaytambo y Viaje a Machu Picchu (D, A)",
    description: [
      "Exploración guiada de 'Ollantaytambo Pueblo - Pueblo Inca Viviente', un antiguo pueblo en el Valle Sagrado de Perú, habitado ininterrumpidamente desde los años 1200.",
      "Conserva su trazado urbano inca original y su arquitectura de piedra. Sus habitantes mantienen antiguas prácticas y costumbres.",
      "Sus antiguos canales de agua, que siguen siendo parte integral de la vida cotidiana, crean una atmósfera única y auténtica.",
      "Este extraordinario pueblo fue reconocido por la Organización Mundial del Turismo (OMT) como uno de los 'Mejores Pueblos Turísticos' del mundo, un premio que destaca su identidad cultural, la preservación de su patrimonio y su modelo de turismo sostenible.",
      "Caminar por el pueblo de Ollantaytambo es compartir el ritmo sereno de la vida andina, sentir la historia en cada rincón y conectar con una comunidad que honra sus tradiciones con orgullo.",
      "Es el deleitarse al contemplar sus hornos de barro, donde el fuego custodia técnicas milenarias para dar vida al pan que, cada mañana, nutre el cuerpo y despierta el alma de la comunidad.",
      "Una experiencia genuina, inspiradora y profundamente humana que invita a detenerse, observar... y decir. 'Quiero vivir esto'.",
      "Pachamanca Inca - Ritual Gastronómicow Ancestral en Ollantaytambo.",
      "Después de explorar el majestuoso Pueblo inca de Ollantaytambo, disfrutamos de una experiencia gastronómica íntima, profundamente conectada con la tierra y las tradiciones andinas, antes de abordar el tren a Machu Picchu.",    
      "En los jardines de El Albergue Ollantaytambo, con una ubicación histórica, participamos en la Pachamanca, una técnica culinaria ancestral cuyo nombre en quechua significa 'Horno de Tierra'. Pollo, cerdo y cordero, junto con verduras andinas, se cocinan lentamente bajo tierra sobre piedras calientes, siguiendo métodos precolombinos que aún perduran en los Andes.",
      "La experiencia incluye una visita guiada a la finca orgánica, la destilería artesanal andina y la tostadora de café, así como una demostración del proceso tradicional de elaboración de la Pachamanca, antes de disfrutar del almuerzo.",
      "La comida se sirve al aire libre, en un entorno natural privilegiado con vistas al paisaje andino y las montañas circundantes.",
      "El menú incluye pollo, cerdo y cordero, papas nativas, camote y vegetales orgánicos, acompañados de ensaladas caseras, salsas tradicionales y una refrescante chicha morada de maíz morado.",
      "Una experiencia auténtica e inolvidable que celebra la gastronomía ancestral peruana, el broche de oro ideal para la visita al Pueblo de Ollantaytambo antes de continuar en tren a Aguas Calientes - Machu Picchu Pueblo.",
      "Aventura panorámica en tren andino a Machu Picchu Pueblo - Aguas Calientes, justo debajo de la antigua ciudadela.",
      "A medida que el tren serpentea por el imponente Valle Sagrado, el paisaje se transforma en una exuberante selva alta, marcando su llegada a la puerta de entrada de los incas.",
      "Esta noche se instalarán en el vibrante pueblo de Aguas Calientes, rodeados de ríos susurrantes y picos esmeralda.",
      "Descanse bien hoy, porque mañana estará frente a Machu Picchu - La Legendaria Ciudad Perdida de los Incas, sintiendo la energía milenaria de un santuario que ha cautivado la imaginación del mundo durante siglos.",
    ],
    location: "cusco",
    lat: CITY_COORDS["valle-sagrado"].lat,
    lng: CITY_COORDS["valle-sagrado"].lng,
  },
  {
    day: 7,
    title: "Visita a Machu Picchu. (B)",
    description: [
      "Traslado a la estación de autobuses en Machu Picchu Pueblo.",
      "Ascenso a la legendaria Ciudad Perdida de los Incas por un sinuoso y estrecho camino de grava, diseñado para superar la considerable diferencia de altitud entre Machu Picchu Pueblo y el sitio arqueológico.",
      "Esta impresionante ciudadela, 'Machu Picchu❞ elegida como una de las nuevas '7 Maravillas del Mundo', fue el refugio privado del Inca Pachacutec, así como un centro de culto y observación astronómica.",
      "Consta de dos grandes áreas, la agrícola y la urbana, donde destacan templos, plazas y mausoleos reales, todos construidos con exquisita precisión.",
      "Permaneció oculta durante 400 años hasta que el explorador estadounidense Hiram Bingham la reveló al mundo en 1911.",
      "Al finalizar la visita, abordaremos el tren para regresar a Cusco.",
      "Caminata opcional a Huayna Picchu: Su guía turístico está disponible para una caminata matutina por el empinado sendero empedrado (1,9 km) de Huayna Picchu, la montaña con forma de pirámide que se alza sobre Machu Picchu, para disfrutar de una impresionante vista panorámica del sitio.",
      "Quienes asciendan a la cima disfrutarán de una conmovedora vista de cómo Machu Picchu se integró cuidadosamente en su entorno natural.",
      "Entre los imponentes picos andinos se alzan a lo lejos, mientras el sinuoso río Urubamba rodea casi por completo el sitio principal. No se lo pierda; Huayna Picchu es 'lo que la mayoría de la gente se pierde en Machu Picchu' (BBC Travel).",
      "Los excursionistas también aprovecharán la oportunidad para ver el Templo de la Luna. Escondido en un complejo de cuevas, oculto de las ruinas principales, se encuentra un santuario sobrenatural, posiblemente un lugar de enterramiento, construido directamente en la roca de la montaña. El Templo de la Luna cuenta con algunos de los trabajos en piedra más finos de Machu Picchu.",
      "¡Es sin duda uno de los paisajes más maravillosos del mundo!",
      "El secreto para subir a Huayna Picchu es caminar 10 minutos y descansar 5 minutos, caminar 10 minutos y descansar 5 minutos, y así...",
      "Si el tiempo lo permite, antes de tomar el tren a la estación de Ollantaytambo y continuar hacia Cusco, visita guiada gratuita al Mercado al Aire Libre de Aguas Calientes.",
    ],
    location: "cusco",
    lat: CITY_COORDS["machu-picchu"].lat,
    lng: CITY_COORDS["machu-picchu"].lng,
  },
  {
    day: 8,
    title: "City Tour por Cusco y las Imponentes Murallas de Sacsayhuaman; Tipón, una 'Obra Maestra de la Ingeniería Hidráulica Inca' e Iglesia Histórica de 'Andahuaylillas - La Capilla Sixtina de las Américas'. (D)",
    description: [
      "En el recorrido por Cusco, los visitantes se sumergen en la emoción de recorrer la antigua capital del Imperio Inca, una encantadora combinación de arquitectura inca y colonial",
      "El recorrido visita importantes lugares como la Catedral de Cusco, la Plaza de Armas y el Koricancha - El Templo del Sol, el templo más sagrado del Imperio Inca, pasando por Intik'ijllu o Callejón del Sol.",
      "La Callejón del Sol - Intik'ijllu, así fue conocida durante el imperio incaico, representa uno de los ejes urbanos y religiosos mejor conservados del Tahuantinsuyo, en Cusco (el 'ombligo del mundo') estaba reservada estrictamente para el Inca, las familias reales y la élite, esta calle en particular era un sendero exclusivo con importanci histórica por su diseño arquitectónico y de seguridad.",
      "Korikancha-Recinto de Oro no era el palacio de un rey, más bien fue él templo religioso y político sagrado en el Imperio Incaico es una de las mayores ironías físicas de la historia de la humanidad.",
      "Los conquistadores llegaron con la mentalidad europea de que una estructura fuerte debe ser rígida, pesada y cementada para durar. Los incas entendieron que la tierra en los Andes se mueve constantemente y que la verdadera resistencia está en la flexibilidad y el encaje dinámico.",
      "Este recorrido por la ciudad habitada más antigua del hemisferio occidental también incluye el monumental sitio arqueológico inca de la Fortaleza de Sacsayhuamán, un imponente ejemplo de arquitectura militar inca.",
      "Sacsayhuamán es una leyenda mágica, es una leyenda mágica, las murallas de Sacsayhuamán, hay que romper con un mito: los incas no usaban la fuerza bruta desorganizada, sino una física asombrosamente avanzada.",
      "Los bloques pesan 125 toneladas, encajados de forma tan perfecta que no entra un alfiler entre ellos, estás viendo la cúspide de la ingeniería lítica prehispánica. Así es como realmente lo lograron de forma original y sin tecnologías europeas.",
      "Cahuide, El Titán del Torreón",
      "En un combate cuerpo a cuerpo agónico en las terrazas zigzagueras, los españoles lograron arrinconar a los últimos defensores incas. Allí, en la cima del torreón cilíndrico de Muyucmarca, emergió una figura imponente: un capitán de la nobleza inca (un orejón) a quien la historia popular bautizó como Cahuide. El corría de un lado a otro del torreón como un león enjaulado. Estaba completamente solo, rodeado y cubierto de sangre enemiga y propia.",
      "Se dio cuenta de que no le quedaban más piedras que lanzar, ni hombres que comandar.", 
      "Se arrojó al vacío desde lo alto del torreón. Prefirió convertirse en pedazos contra las rocas milenarias de Sacsayhuamán. Prefirió convertirse en pedazos contra las rocas milenarias de Sacsayhuamán antes que ver sus manos atadas por cadenas extranjeras.",
      "Tipón - El Santuario de los Maestros del Agua. Por la tarde, rumbo al sur, al Valle Sagrado, hacia Tipón una Obra Maestra de la Ingeniería Hidráulica Inca, un impresionante complejo arqueológico inca famoso por su avanzado sistema de canales de agua, terrazas agrícolas y recintos ceremoniales.",
      "El Santuario de los Maestros del Agua, es más que un sitio arqueológico, Tipón es una obra maestra de ingeniería hidráulica celestial que desafía el tiempo.",
      "En este santuario, los incas lograron lo imposible: esculpieron la montaña para domar el agua, convirtiendo un recurso natural en un espectáculo de arte, misticismo y ciencia que sigue funcionando a la perfección después de más de 500 años.",
      "En Tipón el silencio no existe. El agua canta mientras desciende por la montaña, el sitio está vivo gracias al murmullo constante de manantiales sagrados que brotan de las rocas y fluyen con precisión milimétrica por canales de piedra pulida.",
      "Sin tecnología moderna, los ingenieros incas calcularon pendientes exactas para que el agua fluyera sin erosionar la piedra ni desbordarse.",
      "Hoy en día, los canales siguen vertiendo agua cristalina con la misma fuerza y precisión que en la época del Imperio. Las doce terrazas agrícolas de una simetría perfecta abrazan la quebrada.",
      "No eran solo para cultivar; eran laboratorios climáticos y altares de culto a la Pachamama (Madre Tierra) y al Unu (el Agua), donde los muros de contención absorben el calor del sol para crear microclimas.",
      "Continuaremos hasta el pueblo de Andahuaylillas y la Capilla Sixtina de Américas, un encantador y pacífico pueblo tradicional del Valle Sur de Cusco, famoso a nivel mundial.",
      "Dónde visitaremos la monumental Iglesia de San Pedro Apóstol, bautizada legítimamente y conocida como la 'Capilla Sixtina de América', conocida por sus impresionantes murales barrocos, altares dorados y pinturas coloniales.",
      "Su belleza reside tanto en su mística arquitectura religiosa colonial como en la profunda serenidad de sus paisajes andinos.",
      "Prácticamente todo el interior está cubierto de espectaculares frescos multicolores. Destacan los cuadros de la reputada Escuela Cusqueña y el icónico mural del artista Luis de Riaño que retrata gráficamente el Camino al Cielo y al Infierno.",
      "El altar principal está finamente tallado en madera y revestido de manera opulenta con pan de oro, espejos y plata repujada.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
  {
    day: 9,
    title: "Cuesta de San Blas, Vuelo Cusco-Lima y Regreso a Casa (D)",
    description: [      
      "Por la mañana, visita a La Cuesta de San Blas",
      "Descubre el portal mágico de Cusco, prepárate para una experiencia que transforme tu forma de ver el mundo.",
      "Deja atrás el bullicio del turismo convencional cerca de la calle Triunfo y prepárate para cruzar un auténtico portal emocional.",
      "A medida que avanzas, notarás cómo el ruido exterior se apaga por completo, invitándote a sincronizar tu propio ritmo con el místico silencio de las rocas andinas; una caminata que deja de ser un simple trayecto para convertirse en la mejor terapia de desconexión.",
      "Un Viaje En El Tiempo A Través De La Arquitectura Viva",
      "Caminar por esta emblemática cuesta es presenciar un diálogo visual que no encontrarás en ningún otro rincón del planeta. Aquí, la rigidez perfecta e indestructible de los muros incas sirve de base para sostener la fragilidad del adobe blanco y los balcones de madera colonial tallada.",
      "Es el escenario perfecto para tus mejores fotografías y recuerdos: una hermosa cicatriz histórica donde dos mundos opuestos se abrazaron con fuerza para crear el barrio más bohemio, fotogénico y vibrante de todo el Cusco.",
      "El Rincón Donde El Arte Respira Y Te Invita A Quedarte",
      "Más allá de sus encantadoras tiendas y cafeterías de especialidad, San Blas te envuelve en la energía de un taller artesanal vivo que ha funcionado por siglos.",
      "Al recorrer sus calles, sentirás que las paredes mismas respiran la creatividad de los legendarios maestros imagineros cuzqueños, flotando en una atmósfera impregnada de historia, maderas finas y pigmentos antiguos.",
      "Olvídate de las prisas, empaca tus maletas y ven a descubrir por qué subir la Cuesta de San Blas no es solo llegar a un destino, sino vivir la verdadera esencia del corazón de los Andes.",
      "La Cuesta de San Blas es como un 'Reloj de Piedra', deja de ser una calle para convertirse en un portal emocional. Es la Columna Vertebral del Arte Cuzqueño.",
      "Cuesta de San Blas no sube hacia un barrio, sino que sube hacia atrás en el tiempo. A medida que asciendes y el aire se vuelve más fino, la piedra parece 'Despertar'.",
      "Lo Que Veremos En La Cuesta De San Blas",
      "Escultores de 'Cuellos Largos': Herederos del estilo de la familia Mendivil, que crean vírgenes y santos con cuellos estilizados.",
      "Ceramistas: Maestros del barro que trabajan desde réplicas prehispánicas hasta el estilo 'Mérida'",
      "Talladores en Madera: Especialistas en marcos coloniales cubiertos de pan de oro y muebles finos.",
      "Pintores de la Escuela Cusqueña: Artistas que mantienen viva la técnica del óleo con aplicaciones de oro típica del siglo XVII.",
      "Textileros y joyeros: Aunque hay más en las calles laterales, en la misma cuesta verás joyería en plata con piedras andinas.",
      "También encontrarás galerías de renombre y las fachadas blancas con puertas azules que albergan los talleres de las grandes familias como los Mendivil casi al llegar a la plaza San Blas.",
      "Hay una presencia fuerte de joyería contemporánea y pequeñas muestras de pintura que aprovechan los muros incas que sirven de base en varios tramos de ese lado.",
      "Luego verás, algunos cafés con balcones que ofrecen vistas hacia la calle.",
      "Traslado al aeropuerto para su vuelo a Lima y conexión con el vuelo internacional.",
      "Regrese a casa con recuerdos inolvidables de la rica tradición de la Lima colonial, las imponentes montañas andinas nevadas y los exuberantes valles con el zigzagueante camino hacia la imponente vista de Machu Picchu, el asombroso legado inca.",
      "Si la escala entre vuelos Cusco-Lima-Regreso a Casa, él tiempo lo permite, le sugerimos almorzar en el Café del Museo y luego visitar el Museo Larco.",
      "Almuerzo en el Café del Museo.",
      "Un espacio rodeado de jardines donde podrá disfrutar de una mezcla única de cultura, historia, modernidad y buena comida.",
      "El menú incluye platos clásicos peruanos como cebiche, causa, lomo salteado (el plato icónico de Perú), así como originales creaciones internacionales o pastas con ingredientes locales.",
      "Visita al Museo Larco. El Museo Larco, fundado en 1926, exhibe notables galerías cronológicas que ofrecen una excelente visión general de 3000 años de desarrollo de la historia precolombina peruana.",
      "Ubicado en una singular mansión virreinal del siglo XVIII, construida sobre una pirámide precolombina del siglo VII, está rodeado de hermosos jardines.",
      "El Museo Larco también alberga la más fina colección de oro y plata del antiguo Perú y la famosa colección arqueológica erótica, una de las atracciones turísticas peruanas más visitadas.",
    ],
    location: "cusco",
    lat: CITY_COORDS.cusco.lat,
    lng: CITY_COORDS.cusco.lng,
  },
];

// ─── Export ────────────────────────────────────────────────────────────────
export const itinerariosData: Record<string, Itinerario> = {
  "peru-espectacular": {
    id: "peru-espectacular",
    title: "Perú Espectacular",
    duration: "7 días / 6 noches",
    locations: [
      { name: "Lima", icon: "🏙️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: peruEspectacularDays,
    optionalActivities: [
      {
        id: "montana-7-colores",
        title: "Montaña de los Siete Colores (A)",
        description: "La montaña de arco iris, conocida como la montaña de 7 colores, montaña colorada, montaña Vinicunca, es un lugar mágico donde sus caminos eran parte de la antigua cultura quechua, y se utilizaba para intercambiar productos (trueque), junto con las otras regiones Quechuas. Partiremos de cusco alrededor de las 5:00 am hacia el sur de la ciudad, pasaremos por Urcos, Cusipata (1:30 hrs. de viaje aprox.) en donde disfrutaremos de un nutritivo desayuno el cual durará unos 40 minutos aprox. Después de una breve charla continuaremos con nuestro viaje tomando nuestra movilidad con dirección al punto de inicio de la caminata la comunidad de fula wasi pata (1:00 hrs. Aprox). \n\n Empezaremos nuestra caminata al pie del nevado Ausangate, una subida de 1:30 hrs. Aproximadamente hasta llegar al punto más alto en donde podremos apreciar la montaña de colores ,durante este trayecto tendremos la oportunidad de ver las distintas variedades de camélidos sudamericanos así como flora propia del lugar ,llegando a la montaña de colores tendremos tiempo para tomar fotografías de este lugar enigmático aproximadamente unos 40 minutos después continuaremos con nuestra caminata de descenso de 1:00 hora aproximadamente llegando al punto en donde inicio nuestra caminata en donde nos espera nuestra movilidad para ir en dirección al restaurante en Cusipata donde nos espera nuestro delicioso almuerzo tendremos 1:00 hora aproximadamente para finalmente retornar con dirección a la ciudad de cusco en donde estaremos a las 4:00 pm aproximadamente.",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/luxury-train_i18flh.jpg",
      },
      {
        id: "laguna-huamantay",
        title: "Laguna Humantay – Cusco (A)",
        description: "Después del desayuno comenzaremos nuestra aventura hacia el Lago Humantay con un trayecto de 3.30 horas en transporte privado a Soraypampa (3900 m.s.n.m.). \n\n Soraypampa es nuestro campamento. En Soraypampa tendremos un delicioso mate y para los que deseen pueden solicitar un desayuno adicional para comenzar bien nuestro día antes de iniciar nuestra caminata. En Soraypampa comenzaremos nuestra caminata hasta el Lago Humantay con hermosas vistas y si el cielo es lo suficientemente claro, podemos ver el impresionante nevado Salkantay y Humantay. Es un paseo de ascenso hasta el lago, la caminata tendrá dificultad moderada, tendremos vista del paisaje natural más que mágica. Tendremos tiempo suficiente para tomar fotos, traer una ofrenda a los Apus, y para los valientes; nadar en el lago si el día es soleado. Comenzaremos nuestro descenso a Soraypampa. En Soraypampa nos esperará un delicioso almuerzo preparado por nuestro chef personal, después almorzar tomamos un breve descanso e iniciamos nuestro retorno a Cusco.",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
      },
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 2499,
    bestSeason: "Abril - Octubre",
    included: [
      "6 noches de alojamiento (2 noches en Lima / 3 en Cusco / 1 en Valle Sagrado)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "peru-magico": {
    id: "peru-magico",
    title: "Perú Mágico",
    duration: "7 días / 6 noches",
    locations: [
      { name: "Lima", icon: "🏔️" },
      { name: "Cusco", icon: "🌄" },
    ],
    days: peruMagicoDays,
    optionalActivities: [
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 1899,
    bestSeason: "Mayo - Septiembre",
    included: [
      "6 noches de alojamiento (2 noches en Lima / 1 en Valle Sagrado / 1 en Aguas Calientes / 2 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "peru-maravilla": {
    id: "peru-maravilla",
    title: "Perú de Maravilla",
    duration: "8 días / 7 noches",
    locations: [
      { name: "Lima", icon: "🏛️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: peruMaravillaDays,
    optionalActivities: [
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 1299,
    bestSeason: "Todo el año",
    included: [
      "7 noches de alojamiento (2 noches en Lima / 2 en Valle Sagrado / 1 en Aguas Calientes / 2 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "peru-jeans": {
    id: "peru-jeans",
    title: "Perú en Jeans",
    duration: "4 días / 3 noches",
    locations: [
      { name: "Lima", icon: "🏛️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: peruJeansDays,
    optionalActivities: [
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 1299,
    bestSeason: "Todo el año",
    included: [
      "3 noches de alojamiento (1 noche en Lima / 2 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "peru-express": {
    id: "peru-express",
    title: "Perú Express",
    duration: "5 días / 4 noches",
    locations: [
      { name: "Lima", icon: "🏛️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: peruExpressDays,
    optionalActivities: [
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 1299,
    bestSeason: "Todo el año",
    included: [
      "4 noches de alojamiento (1 noche en Lima / 3 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "peru-esencial": {
    id: "peru-esencial",
    title: "Perú Esencial",
    duration: "6 días / 5 noches",
    locations: [
      { name: "Lima", icon: "🏛️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: peruEsencialDays,
    optionalActivities: [
      {
        id: "opcionales-almuerzos-machu-picchu",
        title: "Opcionales de Almuerzo",
        description: "Selecciona tu opción de almuerzo preferida para tu visita a Machu Picchu",
        image: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771514450/banner-about-us3_w9sapa.jpg",
        mealOptions: [
          { name: "Sumaq Hotel", type: "a la carta" },
          { name: "Sanctuary Lodge", type: "estilo buffet" },
          { name: "Café Inkaterra", type: "a la carta" },
          { name: "SUNO Machu Picchu", type: "Menú turístico" },
          { name: "El Mapi", type: "buffet internacional" },
        ],
      },
    ],
    priceFrom: 1299,
    bestSeason: "Todo el año",
    included: [
      "5 noches de alojamiento (1 noche en Lima / 4 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
  "majestad-inca": {
    id: "majestad-inca",
    title: "Majestad Inca",
    duration: "6 días / 5 noches",
    locations: [
      { name: "Lima", icon: "🏛️" },
      { name: "Cusco", icon: "🏔️" },
    ],
    days: majestadInca,
    priceFrom: 1299,
    bestSeason: "Todo el año",
    included: [
      "5 noches de alojamiento (1 noche en Lima / 4 en Cusco)",
      "Todos los traslados aeropuerto - hotel - aeropuerto.",
      "Todas las excursiones y visitas indicadas en el itinerario.",
      "En la excursión a Machu Picchu se reservará el tren de acuerdo a la categoría elegido Expedition, Vistadome o Hiram Bingham.",
      "Desayuno diario (D).",
      "Comidas indicadas en el itinerario. (A) para los almuerzos y (C) para las cenas.",
      "Manipulación del equipaje en hoteles, aeropuertos, puertos, estaciones de bus y de tren.",
      "Servicios de trasladistas y de guías certificados por el Ministerio de Comercio y Turismo.",
      "Todos los traslados a hoteles, aeropuertos, puertos, estaciones de bus y estaciones de tren necesarios para la operación del itinerario.",
      "Todas las entradas o ingresos a lugares a visitar según el itinerario.",
      "Todos los boletos de tren o de bus o de botes necesarios para la operación del itinerario.",
      "Cargos por servicios en hoteles. Visitantes extranjeros están exonerados del impuesto IGV.",
      "Kit de bienvenida incluyendo consejos, mapas y lista de restaurantes sugeridos.",
      "Servicio al viajero con teléfonos de emergencia disponibles las 24 horas del día.",
    ],
    notIncluded: [
      "Vuelos domésticos.",
      "La excursión a Machu Picchu no incluye almuerzo.",
      "Gastos personales como llamadas telefónicas, lavandería, extras en hoteles, etc.",
      "Propinas a trasladistas, guías, meseros y trabajadores de hoteles.",
      "Servicios no indicados en el itinerario.",
    ],
  },
};

// ─── Funciones helper ──────────────────────────────────────────────────────
export function getItinerarioById(id: string): Itinerario | null {
  return itinerariosData[id] || null;
}

export function getAllItinerarioIds(): string[] {
  return Object.keys(itinerariosData);
}

export function getItinerarioByTourId(tourId: string): Itinerario | null {
  if (itinerariosData[tourId]) return itinerariosData[tourId];

  const tourToItinerarioMap: Record<string, string> = {
    "grande-tour-peru": "grande-tour-peru",
    "peru-magico": "peru-magico",
    "peru-express": "peru-express",
    "peru-esencial": "peru-esencial",
    "peru-jeans": "peru-jeans",
    "majestad-inca": "majestad-inca",
  };

  const itinerarioId = tourToItinerarioMap[tourId];
  return itinerarioId ? (itinerariosData[itinerarioId] || null) : null;
}

/**
 * Agrupa los días de un itinerario por ciudad (location).
 * Úsalo en el .astro en lugar de daysPerLocation.
 *
 * Ejemplo:
 *   const grouped = groupDaysByLocation(itinerario.days);
 *   const limaDays = grouped["lima"] ?? [];
 *   const cuscoDays = grouped["cusco"] ?? [];
 */
export function groupDaysByLocation(
  days: DiaItinerario[]
): Record<string, DiaItinerario[]> {
  return days.reduce(
    (acc, day) => {
      const key = day.location ?? "sin-ciudad";
      if (!acc[key]) acc[key] = [];
      acc[key].push(day);
      return acc;
    },
    {} as Record<string, DiaItinerario[]>
  );
}