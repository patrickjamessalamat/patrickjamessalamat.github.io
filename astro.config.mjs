// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served from the domain root. On GitHub Pages this requires the repo to be
// named patrickjamessalamat.github.io (a user site); Vercel/Cloudflare need
// no changes.
export default defineConfig({
  site: 'https://patrickjamessalamat.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
