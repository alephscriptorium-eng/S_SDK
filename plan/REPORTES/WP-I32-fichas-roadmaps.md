# WP-I32 · fichas-roadmaps — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i32 / WORKER holón 07 |
| fecha | 2026-07-19 |
| rama | `wp/i32-fichas-roadmaps` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i32` |
| base | `main` @ `9c26edf` |
| estado propuesto | listo para revisión |
| push rama `wp/*` | no (brief: NO push origin; merge = orquestador) |

## Qué se hizo

Fichas públicas `docs/holones/02`…`07` con roadmaps uniformes
(⬜/🔶/✅), estratos explícitos (verificado / asentado DE-I8 /
`<pendiente>` / roadmap), cero promesas sin sello. Nav/sidebar de
VitePress engancha 02–07 **sin** tocar hero/portada ni `01-mythos`
(territorio I31). Jekyll de aleph-scriptorium verificado por browser.
`npm run docs:build` verde (sin stub 01: no se enlaza 01 aún). HOLONES/
no mutado; sin `git submodule add`.

## Archivos tocados

### `docs/holones/` (creado)

- `02-logos.md` — juntura 01↔03 `<pendiente>` de destilar
- `03-revelacion.md` — emmanuel E0–E3 ⬜; DE-I8 asentado
- `04-ilustracion.md` — NETWORK-ENGINE B0–B2 ⬜; sin rutas OASIS absolutas
- `05-sospecha.md` — S0/S3/S4 ⬜; ancla DE-I8
- `06-posmodernidad.md` — S1/S2 ⬜ · S14 🔶 · Jekyll ✅ C8
- `07-script-sdk.md` — método + pack I33 `<pendiente>`

### `docs/.vitepress/config.mjs` (modificado)

- Nav + sidebar «Holones» con entradas 02–07 (comentario: 01 = I31)

### `plan/REPORTES/` (creado)

- `WP-I32-fichas-roadmaps.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · Cero promesas sin sello

Cada ficha declara tabla de estratos; afirmaciones vivas citan DEVOPS o
lectura de BACKLOG de mundo con fecha; gaps en `<pendiente>` /
`<pendiente de abrir>` / `<pendiente de ratificación>` / I33.

### CA-2 · Lector distingue estratos

Misma tabla «Estratos» en 02–07: Verificado · Asentado (DE-I8) ·
`<pendiente>` · Roadmap.

### CA-3 · Formato roadmap uniforme

Sección `## Roadmap` + tabla `| Ola | Estado | Nota |` con ⬜/🔶/✅ en
las seis fichas.

### CA-4 · `docs:build` + ceguera

```text
$ npm install && npm run docs:build
… build complete in 29.86s.   # 1ª pasada
$ npm run docs:build
… build complete in 27.33s.   # post-ajuste Jekyll en 06
exit_code: 0
```

Ceguera (rutas OASIS absolutas en `docs/holones/`):

```text
$ rg "C:\\\\Users\\\\aleph\\\\OASIS|/Users/aleph/OASIS" docs/holones
(sin matches)
```

Nota: `docs/.vitepress/theme/custom.css` L2 cita procedencia OASIS
preexistente (I10) — **no tocada** en este WP. Ficha 04 menciona la
palabra «OASIS» solo para declarar omisión de ruta absoluta.

```text
$ git status --short HOLONES/
(sin cambios)
# Placeholders 03/05/06 intactos; cero `git submodule add` ejecutado.
```

### Jekyll vivo (05–06)

```text
Playwright browser_tabs new →
URL: https://escrivivir-co.github.io/aleph-scriptorium/
Title: Aleph Scriptorium | Aleph Scriptorium
```

Sellado ✅ en roadmap de `06-posmodernidad.md`.

### Diff esperado post-merge I31 (nav)

I31 añadirá `docs/holones/01-mythos.md` y probablemente entrada nav
«01 — Mythos». Este WP dejó comentario en `config.mjs` y **no** enlaza
01 (evita dead link mientras I31 no mergea). Orquestador: al mergear
ambos, unificar bloque Holones 01–07 sin pisar hero de `docs/index.md`.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **N/A holón 07** — PRACTICAS
      delta 1 (S_SDK escribe en todo el repo); superficie = `docs/` +
      reporte `plan/` (como I30).
- [x] Cero árboles/ficheros copiados de otros mundos: citar DEVOPS +
      lectura BACKLOG; no copiar material OASIS a docs.
- [x] Sellos con fuente; rutas citadas existentes: DEVOPS holones +
      junturas; HOLONES placeholders; Jekyll C8; BACKLOGs mundos leídos.
- [x] Nombres en castellano, sin transición: `02-logos`… alineados a
      DEVOPS.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: I33, inflado
      submodule, destilar 02, narrativa 05/06 marcados.
- [x] Cero moneda; munición = idea/obra: N/A.
- [x] La M como forma: N/A física.
- [x] Web fiel a plantilla fanzine: solo md + nav; sin CDN/fuentes.
- [x] Gates ejecutados de verdad: docs:build ×2 exit 0; browser Jekyll.
- [x] Commits convencionales: ver §commits abajo.
- [x] Diff solo del alcance: no index.md hero; no 01-mythos; no BACKLOG;
      no HOLONES/; no I33/I27/I40.

## Hallazgos fuera de alcance

- Inventario `WEBS/CANTERA/01-inventario-superficies.md` aún marca
  «Fichas holones 01–07 PENDIENTE» — actualizar post-merge I31∥I32
  (no muté WEBS; capa-1 no era ENTREGA de este WP).
- `custom.css` conserva ruta absoluta de procedencia zeus (I10); scrub
  cosmético ≠ I32.
- I33 pack TEST-SWARM: solo `<pendiente>` en ficha 07.

## Dudas / bloqueos

Ninguno bloqueante. Merge paralelo I31: orquestador resuelve nav 01+02–07.

## Commits

- `dd816f4` — `docs(docs): fichas holones 02–07 + roadmaps uniformes`
- `a83fa8f` — `docs(plan): reporte WP-I32 fichas-roadmaps`

---

## Revisión del orquestador

**Aceptado ✅** — orquestador holón 07 · 2026-07-19 · rama
`wp/i32-fichas-roadmaps` @ `2e015ff` (+ commit de esta revisión).

### Verificado

1. **CA-1 cero promesas sin sello** — fichas 02–07: afirmaciones vivas
   citan DEVOPS/BACKLOG con fecha o quedan `<pendiente>` /
   `<pendiente de abrir|ratificación|generar>`; I33 solo como pendiente
   en 07; Jekyll C8 sellado en 06.
2. **CA-2 estratos** — tabla uniforme Verificado / Asentado (DE-I8) /
   `<pendiente>` / Roadmap en las seis fichas.
3. **CA-3 roadmap uniforme** — `## Roadmap` + `| Ola | Estado | Nota |`
   con ⬜/🔶/✅ en 02–07 (E0–E3, B0–B2, S0–S4/S14, I0–I6).
4. **CA-4 docs:build + ceguera** — `npm run docs:build` exit 0
   (reproducido en revisión, ~19.6s); sin rutas OASIS absolutas en
   `docs/holones/`; HOLONES/ no mutado; sin `01-mythos` ni
   `docs/index.md` (territorio I31).
5. **PRACTICAS** — alcance = docs/holones 02–07 + nav + reporte; castellano;
   citar-no-copiar; sellos con fuente (rutas DEVOPS/junturas/placeholders
   existen); sin fluff vendido.

### Orden de merge

1. Merge `wp/i32-fichas-roadmaps` → `main` **ya** (CA propio cumple;
   no esperar I31).
2. BACKLOG I32 🔶→✅ (commit gobierno en main) + push raíz (cadencia I3).
3. **Unificación nav con I31:** ambos tocan `docs/.vitepress/config.mjs`
   (bloque Holones). I31 WIP aún solo enlaza 01; I32 deja 02–07 +
   comentario. Al merge de I31: unificar `01–07` en un solo bloque nav/
   sidebar; no pisar hero de `docs/index.md`. Preferir rebase/merge I31
   **sobre** main post-I32.
4. I33 sigue ⬜ hasta I31∥I32 ✅.
