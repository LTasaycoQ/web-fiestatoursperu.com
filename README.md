# Fiesta Tours Perú — Sitio Oficial en Astro

Proyecto basado en las buenas prácticas de la documentación oficial de Astro.
Inspirado visualmente en el diseño de KUODA y adaptado al menú oficial de Fiesta Tours Perú.

---

## 🗂️ Estructura del proyecto

```
fiesta-tours-astro/
├── public/
│   ├── images/               # Logos, OG image, favicons
│   ├── fonts/                # Fuentes locales (.woff2) si aplica
│   └── favicon.svg
│
├── src/
│   ├── assets/               # Imágenes optimizadas por Astro (getImage, Image)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro  ← Menú doble oficial Fiesta Tours (top + bottom)
│   │   │   └── Footer.astro  ← Footer completo con todos los links
│   │   ├── sections/
│   │   │   └── Hero.astro    ← Hero fullscreen con tira de destinos
│   │   ├── seo/
│   │   │   └── Meta.astro    ← OG, Twitter Card, canonical
│   │   └── ui/               ← Botones, Cards, Badges reutilizables
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro  ← Layout raíz: Meta + Navbar + slot + Footer
│   │
│   ├── pages/                ← Cada archivo = una ruta (file-based routing)
│   │   ├── index.astro                    → /
│   │   ├── sobre-nosotros.astro           → /sobre-nosotros
│   │   ├── presencia-internacional.astro  → /presencia-internacional
│   │   ├── el-pais/
│   │   │   ├── index.astro               → /el-pais
│   │   │   ├── geografia.astro           → /el-pais/geografia
│   │   │   ├── historia.astro            → /el-pais/historia
│   │   │   ├── gastronomia.astro         → /el-pais/gastronomia
│   │   │   └── naturaleza.astro          → /el-pais/naturaleza
│   │   ├── recorridos/
│   │   │   ├── index.astro               → /recorridos
│   │   │   ├── clasicos.astro            → /recorridos/clasicos
│   │   │   ├── aventura.astro            → /recorridos/aventura
│   │   │   ├── culturales.astro          → /recorridos/culturales
│   │   │   └── vivenciales.astro         → /recorridos/vivenciales
│   │   ├── hoteles/
│   │   │   ├── index.astro               → /hoteles
│   │   │   ├── lima.astro                → /hoteles/lima
│   │   │   ├── cusco.astro               → /hoteles/cusco
│   │   │   ├── machu-picchu.astro        → /hoteles/machu-picchu
│   │   │   └── lodges-selva.astro        → /hoteles/lodges-selva
│   │   ├── informacion-util/
│   │   │   ├── index.astro               → /informacion-util
│   │   │   ├── visa.astro                → /informacion-util/visa
│   │   │   ├── salud.astro               → /informacion-util/salud
│   │   │   ├── moneda.astro              → /informacion-util/moneda
│   │   │   └── clima.astro               → /informacion-util/clima
│   │   ├── incentivos.astro              → /incentivos
│   │   ├── preguntas-frecuentes.astro    → /preguntas-frecuentes
│   │   ├── planificador.astro            → /planificador
│   │   ├── cruceros.astro                → /cruceros
│   │   ├── restaurantes.astro            → /restaurantes
│   │   ├── testimonios.astro             → /testimonios
│   │   ├── manual-de-servicios.astro     → /manual-de-servicios
│   │   ├── nuestra-cocina.astro          → /nuestra-cocina
│   │   ├── mapas-y-trenes.astro          → /mapas-y-trenes
│   │   ├── reservas.astro                → /reservas
│   │   ├── contacto.astro                → /contacto
│   │   ├── libro-de-reclamaciones.astro  → /libro-de-reclamaciones
│   │   └── membresias.astro              → /membresias
│   │
│   ├── content/              ← Content Collections (blog, equipo)
│   │   ├── config.ts         ← Esquemas Zod para cada colección
│   │   ├── blog/             ← Posts en .md / .mdx
│   │   └── team/             ← Perfiles del equipo
│   │
│   ├── lib/
│   │   ├── nav.ts            ← Datos de navegación oficiales (navTop + navBottom)
│   │   ├── seo.ts            ← Helper para generar metadatos
│   │   └── utils.ts          ← Funciones helper generales
│   │
│   └── styles/
│       └── global.css        ← Tokens CSS, reset, utilidades base
│
├── astro.config.mjs
├── tsconfig.json             ← Path aliases: @components, @layouts, @lib, @styles
└── package.json
```

---

## 🧭 Menú oficial Fiesta Tours Perú

### Barra superior (servicios)
| Ítem                         | Ruta                    | Dropdown |
|------------------------------|-------------------------|----------|
| Incentivos                   | `/incentivos`           | No       |
| Preguntas frecuentes         | `/preguntas-frecuentes` | No       |
| Descripciones de recorridos  | `/recorridos`           | Sí       |
| Planificador de viajes       | `/planificador`         | No       |
| Hoteles                      | `/hoteles`              | Sí       |
| Cruceros                     | `/cruceros`             | No       |
| Restaurantes                 | `/restaurantes`         | No       |
| Testimonios                  | `/testimonios`          | No       |
| Idiomas                      | —                       | Sí (selector) |

### Barra inferior (institucional)
| Ítem                         | Ruta                           |
|------------------------------|--------------------------------|
| Sobre nosotros               | `/sobre-nosotros`              |
| Presencia internacional      | `/presencia-internacional`     |
| El país                      | `/el-pais`                     |
| Manual de servicios          | `/manual-de-servicios`         |
| Nuestra cocina               | `/nuestra-cocina`              |
| Información útil             | `/informacion-util`            |
| Mapas y trenes               | `/mapas-y-trenes`              |
| Reservas                     | `/reservas`                    |
| Contáctanos                  | `/contacto`                    |
| Libro de reclamaciones       | `/libro-de-reclamaciones`      |
| Membresías                   | `/membresias`                  |

---

## 🚀 Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo → localhost:4321
npm run build        # Build de producción → dist/
npm run preview      # Vista previa del build
npm run check        # Verificar tipos TypeScript
```

---

## 📐 Convenciones clave

- **BaseLayout** se usa en TODAS las páginas — garantiza Navbar y Footer en todas
- **navTop / navBottom** en `src/lib/nav.ts` — fuente única de verdad para el menú
- **Path aliases** configurados en `tsconfig.json`: `@components`, `@layouts`, `@lib`, `@styles`
- **Content Collections** para blog y equipo con tipado Zod
- El Navbar usa `Astro.url.pathname` para marcar el link activo correctamente
