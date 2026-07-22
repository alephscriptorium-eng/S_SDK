# WP-WW-G · games-ciudad-insignia — reporte (⊃ W2)

| dato | valor |
| ---- | ----- |
| agente | WW-G (worker) |
| fecha | 2026-07-22 |
| rama GL | `wp/ww-g-ciudad-insignia` |
| worktree | `HOLONES/01-mythos/games-library/.worktrees/wp-ww-g-ciudad-insignia` |
| commits GL | `4a74b9864e9e2e6304bfc1f3b5462ec256835207` (base `20c095c`) |
| tip GL obra | `4a74b98` |
| eje(s) CA | **III** · **IV** + ceguera regla 1 / δ12 |
| absorbe | **W2** — página `/games/ciudad` + nav (ABSORCION-W2) |
| issue | LOCAL-ONLY |
| estado propuesto | listo para revisión · **sin merge · sin push** |
| C8 live | ⏳ pendiente post-merge/deploy (pre-deploy HTTP 404) |

## Qué se hizo

Pasada única docs GL (W2 absorbido): ficha pública `/games/ciudad`, hero
insignia en home, nav/sidebar, ancla Releases, y `/games/futuros` declara
que ciudad **ya no es futuro**. Copy destilada de `@zeus/ciudad` README +
LORE + startpacks/releases publicados + tests CA regla 6 (C05) — sin
inventar loops ni misiones. Sin BACKLOG, sin WP-W2 suelto, sin tocar
WW-Z/WW-S/runtime.

## Archivos tocados

### games-library `4a74b98`

| path | cambio |
| ---- | ------ |
| `docs/games/ciudad.md` | **creado** — ficha insignia (estados, 3 jugadores, MCP+peercard/regla 6, instalar v0.1.0) |
| `docs/index.md` | hero → Ciudad + CTA ficha; feature card insignia primero |
| `docs/.vitepress/config.mjs` | nav + sidebar → `ciudad` |
| `docs/games/futuros.md` | nota «ciudad ya no es futuro» + enlaces ficha/release |
| `docs/releases.md` | ancla `{#ciudad}` + tag `startpack-ciudad-v0.1.0` |

### S_SDK (este reporte)

| path | cambio |
| ---- | ------ |
| `plan/SPRINTS/sprint-webs-post-city/REPORTES/WP-WW-G-games-ciudad-insignia.md` | este reporte |

## Evidencia

```
# env (brief)
zeus HEAD = 2aec4cb7d049861a5ea29bdc207c46fad1c22856
GL main base = 20c095cf698ed5b09a18fe409c8a7de37eb003bf
S  HEAD     = a64b63a14b575e811841f66168370c0a3a822714  (tip local puede diferir)

# release real (C8 canal)
gh release view startpack-ciudad-v0.1.0
  tag=startpack-ciudad-v0.1.0
  assets=ACTA-ciudad-v0.1.0.md + zeus-startpack-ciudad-0.1.0.tgz
  url=https://github.com/alephscriptorium-eng/Z_SDK-games-library/releases/tag/startpack-ciudad-v0.1.0

# docs:build (worktree)
$ npm run docs:build
  vitepress build docs · build complete in 19.29s · EXIT=0
  dist: docs/.vitepress/dist/games/ciudad.html  PRESENT

# ceguera (regla 1 / patrón W1) sobre ficha nueva
$ rg -n -i "WP-[A-Z]{1,2}\d|m[eé]todo|SCRIPT_SDK|S_SDK|hol[oó]n|HOLONES|swarm|BACKLOG|juntura" docs/games/ciudad.md
  → 0 matches (rg EXIT=1)

# C8 live pre-deploy (esperado sin push)
$ Invoke-WebRequest https://games.z-sdk.escrivivir.co/games/ciudad
  HTTP=404

# regla 6 citable (no reabrir C05)
packages/ciudad/test/ciudadano-agente.test.mjs
  it('regla 6: peercard humano-puerta + peercard agente-MCP (dos tipos)')
ACTA-C05 + WP-C05 reporte · tip GL base incluye e03f11a / 20c095c
```

### Ejes

| eje | evidencia |
| --- | --------- |
| **III** | Una sola ficha `/games/ciudad`; una entrada nav + una sidebar; sin segunda página paralela ni copy duplicada de contrato runtime |
| **IV** | Dos canales de verdad enlazados: GitHub Release `startpack-ciudad-v0.1.0` + tests peercard (humano puerta ∥ agente MCP); home + ficha como dos superficies del mismo sello |
| ceguera | `docs/games/ciudad.md` = 0 hits patrón regla 1 |
| sin promesa sin sello | Solo mecánicas/README publicados + tag Release real; e2e campana live sigue en cola C05 (`<pendiente>` no afirmado aquí) |

## Auto-revisión (PRACTICAS)

- [x] Diff solo `ALCANCE_DIFF` (GL docs + este reporte)
- [x] ∩ WW-Z / WW-S / T1 = ∅
- [x] Destilado CANTERA/publicado; sin inventar
- [x] Sellos con fuente (`startpack-ciudad-v0.1.0`, README/LORE, test regla 6)
- [x] Sin fluff / sin promesa live campana
- [x] Ejes III·IV evidenciados
- [x] `docs:build` EXIT=0 ejecutado
- [x] Commit convencional en rama GL
- [x] Sin BACKLOG · sin merge · sin push · sin force-push · sin `gh issue create`
- [x] W2 cubierto (página + nav) — no WP-W2 suelto

## Hallazgos fuera de alcance

- **C8 post-deploy** `/games/ciudad` 200 + navegación browser = orquestador
  tras merge/push + Docs workflow (worker sin push por PRACTICAS δ6).
- Hits preexistentes en docs tocados (no introducidos): comentario
  `WP-U107` en `config.mjs`; «método» en call4makers de `futuros.md`;
  substring `S_SDK` dentro de `ZEUS_SDK_ROOT` en `index.md` heredado.
- Bump submodule pointer en S_SDK tras merge GL = orquestador.

## Dudas / bloqueos

Ninguno para revisión. C8 live queda explícitamente ⏳ hasta deploy.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
