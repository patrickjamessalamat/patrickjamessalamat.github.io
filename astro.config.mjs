// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project page, so the site is served
// under /my-portfolio-app. When moving to Vercel/Cloudflare, remove `base`.
export default defineConfig({
  site: 'https://patrickjamessalamat.github.io',
  base: '/my-portfolio-app/',
});
