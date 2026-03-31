import { promises as fs } from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const SITE = 'https://jiandongpei.com';

function toUrl(filePath) {
  const rel = path.relative(DIST_DIR, filePath);
  if (rel === 'index.html') return `${SITE}/`;
  if (rel.endsWith('/index.html')) {
    const dir = rel.slice(0, -'index.html'.length);
    return `${SITE}/${dir}`.replace(/\\/g, '/');
  }
  if (rel.endsWith('.html')) {
    const noExt = rel.slice(0, -5);
    return `${SITE}/${noExt}`.replace(/\\/g, '/');
  }
  return null;
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (e.isFile() && e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(DIST_DIR);
  const urls = files
    .filter(f => !/\/(404\.html|500\.html)$/.test(f))
    .map(toUrl)
    .filter(Boolean)
    .sort();
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(u => `  <url><loc>${u}</loc></url>`),
    '</urlset>'
  ];
  await fs.writeFile(path.join(DIST_DIR, 'sitemap.xml'), lines.join('\n'));
  console.log(`Generated sitemap.xml with ${urls.length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

