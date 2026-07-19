# WP-I41 · verificacion-sitio-vivo — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i41 · holón 07 |
| fecha | 2026-07-19 |
| rama | `wp/i41-verificacion-sitio-vivo` |
| worktree | `../SCRIPT_SDK-wp-i41` |
| base | `main` @ `b04302a` |
| commits | _(este commit)_ |
| estado propuesto | listo para revisión |
| push | no (orquestador) |

## Qué se hizo

Acta C8 del sitio vivo `https://s-sdk.escrivivir.co` con **browser real**
(Playwright MCP): portada, 7 fichas `/holones/0X-*`, 2 autoridades,
`/guide/publicar-la-web`, `/ensayo/` (+ assets), assets VitePress del
bundle. Insumo estación `VIGIA-ESTADO.md` re-verificado (no copiado a
ciegas). Comandos de ejemplo de portada/guide ejecutados en worktree.
Sin mutar `docs/`, skills-library, HOLONES/, BACKLOG ni push raíz.
NO I27/I50/I52.

## Archivos tocados

- `plan/REPORTES/WP-I41-verificacion-sitio-vivo.md` — creado: esta acta

**No tocados:** `docs/**` · `TEST-SWARM/docs/**` · `HOLONES/` ·
`plan/BACKLOG.md` · skills-library.

## Evidencia

### CA1 — Browser real: 0 enlaces rotos (sitio propio)

Canal: Playwright `browser_navigate` + evaluación de anchors/assets
(2026-07-19). Recorrido SPA VitePress + hard nav a `/ensayo/`.

| ruta | HTTP | captura textual (browser) |
| ---- | ---- | ------------------------- |
| `/` | 200 | título `SCRIPT_SDK` · H1 `SCRIPT_SDK Holón 07` · CTA «01 · Mythos» + «Ensayo TEST-SWARM» |
| `/holones/01-mythos` | 200 | título `01 — Mythos \| SCRIPT_SDK` · H1 `01 — Mythos` |
| `/holones/02-logos` | 200 | título `02 — Logos \| SCRIPT_SDK` · H1 `02 — Logos` |
| `/holones/03-revelacion` | 200 | título `03 — Revelación (emmanuel) \| SCRIPT_SDK` · H1 acorde |
| `/holones/04-ilustracion` | 200 | título `04 — Ilustración (AOS / NETWORK-ENGINE) \| SCRIPT_SDK` |
| `/holones/05-sospecha` | 200 | título `05 — Sospecha (aleph-scriptorium · agujero negro) \| SCRIPT_SDK` |
| `/holones/06-posmodernidad` | 200 | título `06 — Posmodernidad (aleph-scriptorium · constelación) \| SCRIPT_SDK` |
| `/holones/07-script-sdk` | 200 | título `07 — SCRIPT_SDK (el método) \| SCRIPT_SDK` |
| `/autoridades/01-escrivivir-co` | 200 | título `01 — Escrivivir.co \| SCRIPT_SDK` |
| `/autoridades/02-scriptorium` | 200 | título `02 — Scriptorium \| SCRIPT_SDK` |
| `/guide/publicar-la-web` | 200 | título `Publicar la web (portal de docs) \| SCRIPT_SDK` |
| `/ensayo/` | 200 | título `MUNICIONES — las Notas y el acta · TEST-SWARM` · H1 `TEST-SWARM` · `#moira` presente · countdown Moira vivo |
| `/ensayo/assets/fanzine.css` | 200 | `text/css` (link del pack; no `/ensayo/fanzine.css`) |
| `/ensayo/favicon.ico` | 200 | icon del pack |
| `/ensayo/index.html` | 200 | mismo documento que `/ensayo/` |

**Enlaces internos del recorrido (anchors → pathname):** todos **200**;
`broken = []` en audit de `/holones/01-mythos` (nav completa 01–07 +
autoridades + portada) y en soft-nav de 03–07, autoridades, guide y
portada.

**Assets VitePress (HTML de `/`, browser fetch):** todos **200** —
`/assets/style.*.css`, `/assets/app.*.js`, `/assets/chunks/theme.*.js`,
`/assets/chunks/framework.*.js`, `/assets/index.md.*.lean.js`,
`/assets/inter-roman-latin.*.woff2`.

**Nota cosmético (no es `<a href>`):** petición automática del browser a
`/favicon.ico` (raíz VitePress) → **404**. Consola: «Failed to load
resource… 404 @ /favicon.ico». El favicon del pack vive en
`/ensayo/favicon.ico` (200). Hallazgo fuera de alcance.

HTTPS: `location.protocol === 'https:'` en todas las páginas SPA
recorridas. Headers `Server: GitHub.com` · `HTTP/1.1 200 OK` (curl
`-sSI`). Insumo VIGIA (Pages workflow, CNAME, cert) coherente con lo
re-verificado aquí.

### CA2 — Comandos de ejemplo: 0 fallidos

Portada y `/guide/publicar-la-web` citan el ciclo local. Ejecutados en
worktree I41 (post-`npm install`):

```text
$ npm install
EXIT_INSTALL:0
added 127 packages, and audited 128 packages in 1m

$ npm run docs:build
EXIT_BUILD:0
[sync-ensayo] …TEST-SWARM/docs → …docs/public/ensayo
vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 59.87s.

$ npm run docs:dev -- --host 127.0.0.1 --port 5180
➜  Local:   http://127.0.0.1:5180/
curl → HTTP 200 · título SCRIPT_SDK (smoke; proceso detenido tras captura)
```

`npm ci` aparece en guide como paso de CI Actions — **N/A local** en esta
acta (CA cubre los comandos de ejemplo del ciclo local documentados en
portada; CI no se re-ejecutó aquí). Canal CI: ⏳ sin re-verificar en I41
(insumo VIGIA citaba Docs success ×3).

### CA3 — Acta HTTP / captura por ruta clave

Ver tabla CA1 (browser + status). Complemento curl (misma clase, no
sustituye browser):

```text
200  https://s-sdk.escrivivir.co/
200  …/holones/01-mythos … /07-script-sdk  (×7)
200  …/autoridades/01-escrivivir-co
200  …/autoridades/02-scriptorium
200  …/guide/publicar-la-web
200  …/ensayo/
200  …/ensayo/assets/fanzine.css
200  …/ensayo/favicon.ico
200  …/ensayo/index.html
404  …/favicon.ico   ← auto-request raíz; ver hallazgo
```

### Links cruzados externos (anotar status; no mutar)

Desde ficha 01 (browser listó anchors) + curl `-L` (canal HTTP):

| URL | HTTP |
| --- | ---- |
| `https://z-sdk.escrivivir.co/` | 200 |
| `https://games.z-sdk.escrivivir.co/` | 200 |
| `https://npm.scriptorium.escrivivir.co/-/all` | 200 |
| `https://github.com/alephscriptorium-eng/Z_SDK` | 200 |
| `https://github.com/alephscriptorium-eng/Z_SDK-games-library` | 200 |
| `https://github.com/alephscriptorium-eng/Z_SDK/releases` | 200 |
| `https://games.z-sdk.escrivivir.co/releases` | 200 |
| `https://escrivivir-co.github.io/aleph-scriptorium/` | 200 |

Mundos externos: solo lectura/status; cero mutación.

### CA4 — Ceguera del reporte

- Este reporte **no** añade rutas absolutas de host.
- Cero mutación de `docs/` ni skills-library (solo acta en `plan/REPORTES/`).
- Diff de alcance = este fichero.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo del alcance (acta I41): sí
- [x] Cero árboles/ficheros copiados de otros mundos: N/A (solo reporte)
- [x] Sellos con fuente; evidencia literal browser/curl/npm: sí
- [x] Castellano; sin transición: sí
- [x] Sin fluff; `<pendiente>` donde toca (CI Docs no re-corrido): sí
- [x] Cero moneda; cifras solo como status HTTP / exit codes: sí
- [x] La M como forma: N/A (acta de verificación)
- [x] Web no mutada (fidelidad fanzine intacta): sí
- [x] Gates = browser + comandos de ejemplo ejecutados: sí
- [x] Commits convencionales: `docs(plan): …`
- [x] Sin BACKLOG / sin push / sin I27–I52: sí

## Hallazgos fuera de alcance

1. **`/favicon.ico` raíz 404** — VitePress no publica favicon en raíz;
   el pack sí en `/ensayo/favicon.ico`. Cosmético; no rompe `<a href>`.
2. **Portada aún dice** «Pages vivo → `<pendiente I40>`» mientras I40 ya
   está ✅ formal — copy stale (micro de docs; no I41).
3. **V1 (VIGIA):** comentario de procedencia con ruta host en
   `custom.css` — sigue abierto; destino I27/housekeeping (regla 12).
4. **Pack `/ensayo/`** contiene tablas con rutas de host en el HTML del
   ensayo (legado del pack TEST-SWARM) — fuera de alcance I41; no se
   citan aquí.

## Dudas / bloqueos

Ninguno bloqueante. CA1–CA4 cumplidos con evidencia literal.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
