// Prefixes a root-relative public asset path (e.g. "/certificates/x.jpg")
// with Vite's configured base ("/Portfolio/" on GitHub Pages), so assets
// resolve correctly whether the site is served from a domain root or a
// project sub-path.
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + '/';
  return base + path.replace(/^\//, '');
}
