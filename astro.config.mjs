// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Served from the domain root. On GitHub Pages this requires the repo to be
// named patrickjamessalamat.github.io (a user site); Vercel/Cloudflare need
// no changes.
export default defineConfig({
  site: 'https://patrickjamessalamat.github.io',
  // Emits sitemap-index.xml + sitemap-0.xml at build time; robots.txt points to it.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
