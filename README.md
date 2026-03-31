# jiandongpei.com — Astro site

Canonical website for Jiandong Pei’s Boundary Model and architectural verdicts. Built with Astro 4.

Goals:

1. Canonical definition of the Boundary Model
2. Stable library of essays (on‑site full text)
3. Clear path to independent architectural verdicts

This is not a marketing site and not a blog‑first publication.

---

## Project structure (Astro)

- `src/pages/` — route pages (Astro)
  - `index.astro` homepage
  - `boundary-model.astro` canonical model
  - `insights/` essays index and article routes
  - `work.astro`, `about.astro`, `when-to-call-me.astro`, `contact.astro`
- `src/content/insights/` — Markdown articles with frontmatter
- `src/components/` — UI components (Card, Button, Nav, Footer…)
- `src/styles/global.css` — global styles and tokens
- `public/` — static assets (robots, sitemap, icons)

---

## Add or update essays

Essays live under `src/content/insights`. Use frontmatter fields defined in `src/content/config.ts`:

```
articleId, title, subtitle?, published?, boundary?, audience?, symptom?,
featured?, source?, canonicalUrl?, summary?, tags?
```

Imported full texts from `/Users/peijiandong/btp-verdict/10_ARTICLES` are already merged for A001/A003/A006/A012/A014/A019. To import more, add a new Markdown file with the correct frontmatter and paste the original content.

---

### Minimal steps to add a new essay

1. Copy an existing file in `src/content/insights/` as a template.
2. Update frontmatter fields (at minimum): `articleId`, `title`, `published`, `summary`, `source`, `sourceUrl`.
3. Paste the full text below the frontmatter. Keep on‑site canonical content; external links go into `sourceUrl`.
4. Run locally: `npm run dev`, then open `/insights/` and the new route to verify.
5. Optional: set `boundary`, `audience`, `tags`, and `featured` for better grouping.

Astro will statically generate the detail page and include it in the sitemap.

---

## Development

```
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview build on localhost
```

---

## Deployment

- Output: static site in `dist/`
- `CNAME`, `robots.txt`, and `sitemap.xml` are published with the build
- Suitable for GitHub Pages or any static hosting
