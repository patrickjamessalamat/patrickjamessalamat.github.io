# My Portfolio

Personal portfolio site built with [Astro](https://astro.build). Fully static, zero client-side JavaScript, deployed to GitHub Pages.

**Live site:** https://patrickjamessalamat.github.io/my-portfolio-app/

## Editing your content

All personal content lives in `src/data/` — you never need to touch components to update the site:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, role, bio, email, social links |
| `src/data/projects.ts` | Project cards (title, description, tags, links, optional image) |
| `src/data/skills.ts` | Skill groups |
| `src/data/experience.ts` | Work and education timeline |

Also replace:
- `public/resume.pdf` — placeholder; drop in your real resume
- `public/images/` — project screenshots (reference them via the `image` field in `projects.ts`)

## Development

```sh
npm install
npm run dev      # http://localhost:4321/my-portfolio-app/
npm run build    # output in dist/
npm run preview  # preview the production build
```

Note: the site is served under the `/my-portfolio-app/` base path (configured in `astro.config.mjs`) because GitHub Pages hosts project sites under a subpath.

## Deployment

### GitHub Pages (current setup)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time setup: in the GitHub repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.

### Moving to Vercel or Cloudflare Pages

The site is plain static output, so migrating is trivial:

1. In `astro.config.mjs`, remove the `base` option (and update `site` to your new domain).
2. **Vercel:** import the repo at vercel.com — Astro is auto-detected, no config needed.
3. **Cloudflare Pages:** create a project from the repo — build command `npm run build`, output directory `dist`.
