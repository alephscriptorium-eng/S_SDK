import { defineConfig } from 'vitepress';

/**
 * Docs públicas S_SDK (WP-I10 / DE-I1).
 * Fuente de resolveDocsBase: variante library
 * (Z_SDK-games-library/docs/.vitepress/config.mjs ~L9–18), env renombrado
 * a SSDK_DOCS_BASE. Guard MSYS (frágil #2).
 * base Pages (custom domain s-sdk.escrivivir.co): `/` también en Actions.
 * Local / docs:dev: `/`. Override opcional SSDK_DOCS_BASE (sin slash
 * inicial: Git Bash/MSYS reescribe rutas tipo `/foo/`).
 */
function resolveDocsBase() {
  const raw = process.env.SSDK_DOCS_BASE?.trim();
  if (raw) {
    // MSYS path conversion → `C:/Program Files/Git/...` — no es un base válido
    if (/^[A-Za-z]:[\\/]/.test(raw)) return '/';
    const cleaned = raw.replace(/^\/+|\/+$/g, '');
    return cleaned ? `/${cleaned}/` : '/';
  }
  return '/';
}

const holonesNav = [
  { text: '01 — Mythos', link: '/holones/01-mythos' },
  { text: '02 — Logos', link: '/holones/02-logos' },
  { text: '03 — Revelación', link: '/holones/03-revelacion' },
  { text: '04 — Ilustración', link: '/holones/04-ilustracion' },
  { text: '05 — Sospecha', link: '/holones/05-sospecha' },
  { text: '06 — Posmodernidad', link: '/holones/06-posmodernidad' },
  { text: '07 — SCRIPT_SDK', link: '/holones/07-script-sdk' }
];

export default defineConfig({
  title: 'SCRIPT_SDK',
  description:
    'Casa pública del holón 07 — metodología, anclas HOLONES y web fanzine',
  lang: 'es',
  base: resolveDocsBase(),
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Portada', link: '/' },
      { text: 'Holones', items: holonesNav },
      {
        text: 'Autoridades',
        items: [
          { text: '01 — Escrivivir.co', link: '/autoridades/01-escrivivir-co' },
          { text: '02 — Scriptorium', link: '/autoridades/02-scriptorium' }
        ]
      },
      { text: 'Publicar la web', link: '/guide/publicar-la-web' },
      { text: 'La tubería, protegida', link: '/guide/tuberia-protegida' },
      { text: 'El vigía juega', link: '/guide/el-vigia-juega' }
    ],
    sidebar: [
      {
        text: 'SCRIPT_SDK',
        items: [
          { text: 'Portada', link: '/' },
          { text: 'Publicar la web', link: '/guide/publicar-la-web' },
          { text: 'La tubería, protegida', link: '/guide/tuberia-protegida' },
          { text: 'El vigía juega', link: '/guide/el-vigia-juega' }
        ]
      },
      {
        text: 'Holones',
        items: holonesNav
      },
      {
        text: 'Autoridades',
        items: [
          { text: '01 — Escrivivir.co', link: '/autoridades/01-escrivivir-co' },
          { text: '02 — Scriptorium', link: '/autoridades/02-scriptorium' }
        ]
      }
    ],
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    footer: {
      message: 'Holón 07 · piel zine (DE-8)',
      copyright: 'Scriptorium · SCRIPT_SDK'
    }
  }
});
