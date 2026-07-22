import type { APIRoute } from 'astro';

// Crawl hints per route. Anything under src/pages that isn't listed here still
// lands in the sitemap, using the conservative fallback below.
const hints: Record<string, { changefreq: string; priority: string }> = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/projects/': { changefreq: 'weekly', priority: '0.9' },
  '/experience/': { changefreq: 'monthly', priority: '0.8' },
  '/stacks/': { changefreq: 'monthly', priority: '0.8' },
  '/certifications/': { changefreq: 'monthly', priority: '0.8' },
  '/contact/': { changefreq: 'yearly', priority: '0.6' },
};

const fallback = { changefreq: 'monthly', priority: '0.5' };

// Every page is a static .astro file, so the route list comes straight off the
// filesystem — a new page reaches the sitemap without anyone editing it here.
// Routes that exist as pages but must never be advertised to crawlers.
const excluded = new Set(['/404/']);

const files = Object.keys(import.meta.glob('./**/*.astro'));

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  // Build date, in the W3C date format sitemaps require. Every page is static,
  // so a deploy is the only thing that can change any of them.
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = files
    .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, ''))
    // Astro builds directory-style URLs, so every page but the index gets a
    // trailing slash — the sitemap has to match or Google sees a redirect.
    .map((route) => (route === 'index' ? '/' : `/${route}/`))
    .filter((route) => !excluded.has(route))
    .sort()
    .map((route) => {
      const { changefreq, priority } = hints[route] ?? fallback;
      const loc = new URL(`${base}${route.slice(1)}`, site).href;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
