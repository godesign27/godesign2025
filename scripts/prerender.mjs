// Post-build static prerendering.
//
// Vite/React here is a pure client-side SPA: every route serves the same
// index.html shell and only gets its real title/meta/content after React
// mounts and SEOHead's useEffect runs. That's invisible to crawlers that
// don't execute JavaScript (Bing historically, and virtually all AI/GEO
// crawlers: GPTBot, ClaudeBot, PerplexityBot, CCBot, etc.).
//
// This script boots the built app in headless Chrome, visits every route
// in sitemap.xml, waits for it to fully render, and overwrites dist/<route>/
// index.html with the fully-rendered HTML. Netlify serves that static file
// directly for that path (existing files win over the SPA catch-all
// redirect), so crawlers see real content without executing JS, while
// browsers still hydrate normally on top of it.

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

function getRoutes() {
  const xml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return locs.map((url) => {
    const path = new URL(url).pathname;
    return path === '/' ? '/' : path.replace(/\/$/, '');
  });
}

function outPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  return join(distDir, route.replace(/^\//, ''), 'index.html');
}

async function main() {
  const routes = getRoutes();
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await preview({ root, preview: { port: 4173, strictPort: false } });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  let ok = 0;
  const failed = [];

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForSelector('link[rel="canonical"]', { timeout: 15000 });
      await page.waitForSelector('h1', { timeout: 15000 });

      const html = await page.content();
      const outPath = outPathFor(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      ok++;
    } catch (err) {
      failed.push({ route, error: err.message });
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await server.httpServer.close();

  console.log(`Prerendered ${ok}/${routes.length} routes.`);
  if (failed.length) {
    console.warn('Routes that failed to prerender (left as SPA shell, non-fatal):');
    for (const f of failed) console.warn(`  ${f.route}: ${f.error}`);
  }
}

main().catch((err) => {
  console.error('Prerender script crashed:', err);
  // Non-fatal: the SPA shell still works for every route, so don't fail the build.
  process.exit(0);
});
