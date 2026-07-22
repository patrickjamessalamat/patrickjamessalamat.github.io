# Portfolio

A personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), styled after the GitHub profile layout. Fully static, deployed to GitHub Pages.

Fork it, replace the contents of `src/data/`, and you have your own site.

## Features

- Six pages — Overview, Projects, Stacks, Experience, Certifications, Contact
- Light/dark theme with a circular reveal transition, remembered across visits
- Client-side navigation via Astro's `ClientRouter`
- Content lives in typed data files; components never need editing
- SEO built in — Open Graph and Twitter cards, JSON-LD `Person` schema, canonical URLs, `sitemap.xml`
- Optional Google Analytics 4, active only on deployed builds

## Editing your content

Everything personal lives in `src/data/`. Each file ships with a `.example.ts`
template beside it — copy the template over the real file and fill it in:

```sh
cp src/data/site.example.ts src/data/site.ts
```


| File | What it holds |
| --- | --- |
| `site.ts` | Name, handle, role, tagline, bio, contact details, socials, analytics IDs |
| `projects.ts` | Project cards — description, tags, links, and optional nested sub-projects |
| `experience.ts` | Work and education timeline, grouped by organisation |
| `skills.ts` | Skill groups shown on the Stacks page |
| `certifications.ts` | Certifications and trainings, with optional certificate images |

Also replace these:

- `public/images/profile.png` — your photo. Also the source for the favicon, generated on every build by `scripts/make-favicon.mjs`.
- `public/resume.pdf` — the file behind the Download resume buttons
- `public/images/certificates/` — certificate images referenced from `certifications.ts`
- `public/robots.txt` — update the `Sitemap:` URL to your own domain

## Configuration

In `astro.config.mjs`, set `site` to the URL you deploy to. Absolute URLs in the sitemap, canonical tags, and Open Graph metadata are all resolved against it:

```js
site: 'https://YOUR-USERNAME.github.io',
```

If you deploy to a **project** site rather than a user site — a repo not named `YOUR-USERNAME.github.io` — also add a matching `base`, or every asset and link will 404:

```js
base: '/YOUR-REPO-NAME',
```

### Analytics and search console (optional)

Both are off unless you fill them in, in `src/data/site.ts`:

```ts
analyticsId: '',            // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'
googleSiteVerification: '', // Search Console HTML-tag token (the content value only)
```

Analytics only ship on builds that run in GitHub Actions. Local `npm run dev` and `npm run build` emit no tracking code and mark pages `noindex`, so development traffic never reaches your reports and draft builds stay out of search results.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # output in dist/
npm run preview  # preview the production build
```

## Deployment

### GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

One-time setup:

1. Make the repository **public** — GitHub Pages only publishes from public repos on the free plan.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**. Leaving it on "Deploy from a branch" runs Jekyll instead, which strips Astro's `_astro/` asset directory and serves an unstyled site.
3. For a root-domain URL, name the repo `YOUR-USERNAME.github.io`. Otherwise set `base` in `astro.config.mjs` as described above.

### Vercel or Cloudflare Pages

The build is plain static output, so migrating is straightforward:

1. Update `site` in `astro.config.mjs` to the new domain.
2. **Vercel:** import the repo — Astro is auto-detected, no configuration needed.
3. **Cloudflare Pages:** build command `npm run build`, output directory `dist`.

Note that the analytics gate keys off `GITHUB_ACTIONS`, so on another host you'll want to adjust that check in `src/layouts/BaseLayout.astro`.
