# WP-I31 · portada-ficha-mythos — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i31 · holón 07 |
| fecha | 2026-07-19 |
| rama | `wp/i31-portada-ficha-mythos` |
| worktree | `C:/Users/aleph/SCRIPT_SDK-wp-i31` |
| base | `main` @ `bbd1f8b` (post-I32; FF desde `9c26edf`) |
| commits | `e089999` docs(docs): portada + ficha 01 Mythos… |
| estado propuesto | listo para revisión |
| push | no (orquestador mergea) |

## Qué se hizo

Portada `docs/index.md` presenta la holarquía con CTA a Mythos y tabla
01–07 enlazada. Ficha pública `docs/holones/01-mythos.md` con anclas
submodule y superficies selladas (browser + npm canal real). Nav/sidebar
Holones unificado **01–07** tras merge de I32 (`bbd1f8b`): se añadió 01
sin pisar fichas 02–07. ENTREGA-I31 + inventario CANTERA actualizado.
`docs:build` verde. Sin BACKLOG, sin push, sin mutar `HOLONES/`.

## Archivos tocados

- `docs/index.md` — modificado: hero holarquía + features + tabla 01–07
- `docs/holones/01-mythos.md` — creado: ficha sellada
- `docs/.vitepress/config.mjs` — modificado: nav/sidebar Holones 01–07
- `WEBS/ENTREGA-I31/00-NOTA.md` · `01-PAQUETE.md` — creados: ANTES→DESPUÉS
- `WEBS/CANTERA/01-inventario-superficies.md` — modificado: superficies I31/I32
- `plan/REPORTES/WP-I31-portada-ficha-mythos.md` — este acta

**No tocados:** `docs/holones/02-*.md` … `07-*.md` · `HOLONES/` ·
`plan/BACKLOG.md`.

## Evidencia

### CA1 — URLs navegadas (browser Playwright, 2026-07-19)

| URL | Título / captura textual |
| --- | ---------------------- |
| https://z-sdk.escrivivir.co/ | `Zeus SDK` · H1 «Z_SDK / Juegos de Ventana de Contexto» · «FOSS Docs: framework ARG para comunidades.» |
| https://games.z-sdk.escrivivir.co/ | `Zeus Games Library` · H1 «Juegos Z_SDK / Catálogo» · cards delta/pozo/solve-coagula/call4makers |
| https://github.com/alephscriptorium-eng/Z_SDK | `GitHub - alephscriptorium-eng/Z_SDK: <out of order> <experimental> <no suitable for work>` |
| https://github.com/alephscriptorium-eng/Z_SDK-games-library | `GitHub - alephscriptorium-eng/Z_SDK-games-library: Z_SDK games library — juegos Zeus y releases de datos (hermano de Z_SDK)` |
| https://github.com/alephscriptorium-eng/Z_SDK/releases | `Releases · alephscriptorium-eng/Z_SDK` · Latest `@zeus/webrtc-signaling@0.2.1` · también `@zeus/volumes-ops@0.2.1`, `@zeus/protocol@0.2.0`, … |

### CA2 — npm canal real (2026-07-19)

```text
$ npm view @zeus/<pkg> version --registry=https://npm.scriptorium.escrivivir.co
@zeus/app-shell 0.2.1
@zeus/authority-kit 0.2.0
@zeus/feed-kit 0.3.0
@zeus/firehose-core 0.1.2
@zeus/game-engine 0.1.1
@zeus/http-contract 0.1.2
@zeus/linea-kit 0.2.0
@zeus/operator-bridge 0.1.0
@zeus/playbook-kit 0.1.2
@zeus/player-mcp-kit 0.1.2
@zeus/presets-sdk 0.1.2
@zeus/protocol 0.2.0
@zeus/room-client-browser 0.1.2
@zeus/rooms 0.1.0
@zeus/story-board-schema 0.2.0
@zeus/test-utils 0.1.2
@zeus/ui-3d-kit 0.1.1
@zeus/ui-kit 0.1.2
@zeus/view-kit 0.1.2
@zeus/volumes-ops 0.2.1
@zeus/webrtc-signaling 0.2.1
```

Conteo: **21** paquetes con versión (brief ~19; canal real = 21 el día
de la medición). Tabla idéntica en la ficha 01.

### CA3 — Sello por afirmación

En `docs/holones/01-mythos.md` cada bloque de superficie tiene **Sello:**
(navegada / comando / fecha). Narrativa y ratificación marcadas
`<pendiente>`. El lector distingue verificado vs pendiente.

### CA4 — build + ceguera + HOLONES

```text
$ npm run docs:build
vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 22.24s.
BUILD_EXIT:0
```

Ceguera en obra I31 (`docs/index.md`, `docs/holones/01-mythos.md`):
grep `OASIS|SCRIPTORIUM_V0|C:\Users` → **0** matches.

`git diff` sobre fichas 02–07 → vacío (intactas).

`git submodule status HOLONES/01-mythos` (sin init en worktree):

```text
-b463a1a6dcb7310c8008cb6769d46f714b787c05 HOLONES/01-mythos/games-library
-0afe1e1fb44e361c24c2baacb9792883c7ce06a5 HOLONES/01-mythos/zeus-sdk
```

Cero commits dentro de submodules (no se hizo `submodule update`; gitlinks
intactos desde main).

### Merge post-I32

```text
$ git merge origin/main   # fast-forward 9c26edf..bbd1f8b
# trae fichas 02–07 + nav I32; conflicto stash en config.mjs → resuelto
# unificando bloque Holones 01–07
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

Nota: delta 1 de `plan/PRACTICAS.md` redefine autocontención a todo el
repo S_SDK (no solo TEST-SWARM/). Checklist leído con ese delta.

- [x] Diff solo del alcance holón 07 / WP-I31: docs portada+01+nav,
      WEBS ENTREGA/CANTERA, reporte. Sin BACKLOG.
- [x] Cero árboles/ficheros copiados de otros mundos: ficha cita URLs y
      rutas relativas del repo; no pega copy zeus.
- [x] Sellos con fuente; URLs/comandos ejecutados de verdad.
- [x] Nombres en castellano; rutas `holones/` coherentes con I32.
- [x] Sin fluff; `<pendiente>` donde falta ratificación.
- [x] Cero moneda / fundraising.
- [x] Sin afirmación física fuera de forma citada.
- [x] Web fiel a VitePress + piel zine existente (no se tocó CSS/CDN).
- [x] Gates: `docs:build` exit 0; npm view canal real; browser.
- [x] Commits convencionales (ver §commits al pie / log).
- [x] Diff solo del alcance: fichas 02–07 no modificadas.

## Hallazgos fuera de alcance

1. `docs/.vitepress/theme/custom.css` conserva ruta OASIS en cabecera de
   procedencia (preexistente; no introducida por I31). Candidato a higiene
   de ceguera en WP futuro si el CA de sitio vivo lo exige.
2. Releases de games-library como URL GitHub aparte:
   `<pendiente de re-navegar en I41>` (portal games sí navegado).

## Dudas / bloqueos

Ninguno. Listo para revisión orquestador → merge a main (sin push worker).

---

## Revisión del orquestador

**Aceptado ✅** — orquestador holón 07 · 2026-07-19 · rama
`wp/i31-portada-ficha-mythos` @ `41b68d3` (+ commit de esta revisión).

### Verificado

1. **CA-1 URLs navegadas** — z-sdk / games / GitHub Z_SDK + games-library +
   Releases: títulos del reporte reproducidos en revisión (browser
   Playwright 2026-07-19: `Zeus SDK`, `Zeus Games Library`).
2. **CA-2 npm canal real** — muestra `@zeus/protocol@0.2.0` y
   `@zeus/webrtc-signaling@0.2.1` contra
   `https://npm.scriptorium.escrivivir.co`; tabla 21 paquetes en ficha.
3. **CA-3 sello por afirmación** — `docs/holones/01-mythos.md`: cada
   superficie con **Sello:**; narrativa/ratificación `<pendiente>`.
4. **CA-4 docs:build + ceguera + HOLONES** — `npm run docs:build` exit 0
   (~20.1s, revisión); cero OASIS/rutas absolutas en obra I31; gitlinks
   submodule intactos; diff 02–07 vacío.
5. **Nav unificado 01–07** — `holonesNav` en `config.mjs` tras FF post-I32;
   portada tabla 01–07; no pisó fichas 02–07.
6. **PRACTICAS** — alcance docs/WEBS/reporte; castellano; citar-no-copiar;
   sellos con fuente; sin fluff.

### Orden de merge

1. Merge `wp/i31-portada-ficha-mythos` → `main` **ya** (I32 ya en main).
2. BACKLOG I31 🔶→✅; I33 ⬜→🔶 + brief I33; push raíz (cadencia I3).
3. Retirar worktree `SCRIPT_SDK-wp-i31`.
4. Lanzar 1 worker I33 — **no** implementar en esta revisión.
