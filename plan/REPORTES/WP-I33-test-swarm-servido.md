# WP-I33 · test-swarm-servido — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i33 · holón 07 |
| fecha | 2026-07-19 |
| rama | `wp/i33-test-swarm-servido` |
| worktree | `C:/Users/aleph/SCRIPT_SDK-wp-i33` |
| base | `main` @ `666cefd` |
| commits | `e63f854` docs(docs) · `83bbe21` docs(WEBS) · `f7d6fc6` docs(plan) |
| estado propuesto | listo para revisión |
| push | no (orquestador mergea) |

## Qué se hizo

Se honró DA-4 sirviendo el pack canónico `TEST-SWARM/docs/` como ruta
estática `/ensayo/` bajo VitePress (espejo vía `npm run docs:sync-ensayo`
antes de `docs:dev`/`docs:build`; destino `docs/public/ensayo/`, gitignored).
Enlaces desde portada y ficha 07; se quitó el `<pendiente>` de I33.
Hard-nav en theme para que el click SPA no 404-ee el HTML estático.
Inventario CANTERA: ruta TEST-SWARM = VIVA-OK. Sin mutar el pack, HOLONES/,
BACKLOG ni I27/I40.

## Archivos tocados

- `scripts/sync-ensayo.mjs` — creado: copia `TEST-SWARM/docs` → `docs/public/ensayo`
- `package.json` — modificado: `docs:sync-ensayo` + prehooks en dev/build
- `.gitignore` — modificado: ignora espejo `docs/public/ensayo/`
- `docs/.vitepress/config.mjs` — modificado: `ignoreDeadLinks` para `/ensayo/`
- `docs/.vitepress/theme/index.js` — modificado: hard-nav a `/ensayo/`
- `docs/index.md` — modificado: CTA/feature/sección Ensayo → `/ensayo/`
- `docs/holones/07-script-sdk.md` — modificado: enlace real; roadmap pack ✅
- `WEBS/CANTERA/01-inventario-superficies.md` — modificado: VIVA-OK I33
- `plan/REPORTES/WP-I33-test-swarm-servido.md` — este acta

**No tocados:** `TEST-SWARM/docs/**` (origen) · `HOLONES/` · `plan/BACKLOG.md`
· Pages/DNS (I40).

## Evidencia

### CA1 — Pack accesible desde portada

Preview estático del build (`npx serve docs/.vitepress/dist -l 4174`):

| paso | resultado |
| ---- | --------- |
| `GET /` | 200 · título `SCRIPT_SDK` · CTA «Ensayo TEST-SWARM» → `/ensayo/` |
| click CTA (browser) | navega a `http://localhost:4174/ensayo/` · título `MUNICIONES — las Notas y el acta · TEST-SWARM` · H1 `TEST-SWARM` |
| `GET /ensayo/` | 200 · HTML idéntico al origen (`cmp` OK) + `assets/fanzine.css` |

### CA2 — Moira funcional (preview local; Pages = `<pendiente I40>`)

Browser Playwright @ `http://localhost:4174/ensayo/` (2026-07-19):

```text
cuenta: "05:48"   (arranca 06:00; setInterval −1s — ticking)
moira:  "LEY DE LA MOIRA — esta comparecencia caduca en 05:48 si usted no actúa."
#moira presente; .stats-bar = 2; assets/fanzine.css loaded
```

Tras ~2.5s el countdown avanzó (`ticking: true`). Dominio Pages vivo →
`<pendiente I40>` (no bloquea este WP).

### CA3 — docs:build verde + ceguera + pack intacto

```text
$ npm run docs:build
[sync-ensayo] …/TEST-SWARM/docs → …/docs/public/ensayo
vitepress v1.6.4 · build complete · exit 0

$ test -f docs/.vitepress/dist/ensayo/index.html && echo DIST_OK
DIST_OK

$ rg -n OASIS docs/index.md docs/holones/07-script-sdk.md \
    WEBS/CANTERA/01-inventario-superficies.md scripts/sync-ensayo.mjs \
    docs/.vitepress/config.mjs
(no matches)

$ cmp -s TEST-SWARM/docs/index.html docs/public/ensayo/index.html && echo HTML_IDENTICAL
HTML_IDENTICAL
```

HOLONES/ sin diff. Contenido doctrinal del pack no reescrito.

### CA4 — Inventario CANTERA

`WEBS/CANTERA/01-inventario-superficies.md`: «Ruta TEST-SWARM servida» =
**VIVA-OK** (`/ensayo/` preview local; Pages dominio `<pendiente I40>`).

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo del alcance I33 (docs/WEBS/scripts/package/gitignore/reporte)
- [x] Cero árboles copiados de mundos ajenos; espejo = mismo pack TEST-SWARM
- [x] Sellos: Pages marcado `<pendiente I40>`; moira sellada en preview
- [x] Sin fluff; cifras del pack intactas (no tocadas)
- [x] Web fanzine del pack intacta (DE-8 del ensayo)
- [x] Gates: `docs:build` + browser moira + ceguera OASIS en tocados
- [x] Commits convencionales
- [x] Sin BACKLOG / sin push raíz / sin HOLONES

## Hallazgos fuera de alcance

1. Workflow `docs.yml` `paths: docs/**` no dispara si solo cambian
   `scripts/` o `package.json` (ya documentado frágil #7). Tras merge, un
   touch a `docs/**` o `workflow_dispatch` basta.
2. Favicon raíz del portal VitePress 404 en preview (`/favicon.ico`); el
   pack trae el suyo bajo `/ensayo/favicon.ico`. Cosmético; no I33.

## Dudas / bloqueos

Ninguno. Listo para revisión orquestador.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
