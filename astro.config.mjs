// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '',

  build: {
    assets: 'assets'
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  image: {
    domains: ['res.cloudinary.com'],
  },

  site: 'https://fiestatoursperu.com',
  compressHTML: false,

  devToolbar: {
    enabled: false,
  },

  output: 'static',
  // ← sin adapter, Cloudflare Pages sirve estáticos nativamente
});