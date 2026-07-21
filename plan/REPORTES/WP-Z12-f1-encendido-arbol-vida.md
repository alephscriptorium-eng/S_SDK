# WP-Z12-f1 · encendido-arbol-vida — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z12-f1 |
| fecha | 2026-07-21 |
| rama | `wp/gc-z12-f1-arbol-vida` (zeus-sdk + games-library) |
| commits | zeus-sdk `fa73062` · games-library `5b5bf4e` · reporte SCRIPT_SDK tip `f792220` |
| eje(s) CA | **I** (e2e barrio) · **III** (spawn solo Z06) · **IV** (2º cliente mando) · ceguera kit |
| estado propuesto | listo para revisión |

## Qué se hizo

Soft-block Z06 levantado (`03350a2`). Implementación **solo f1**:

1. **`@zeus/lifecycle-kit`** (engine): hoja XState 5 (`parada→arrancando→viva⇄degradada→parando→parada`·`rota`) + agregador fijo; actuadores inyectados; sin nombres `ciudad`/`barrio`/`marco`.
2. **`@zeus/ciudad-lifecycle`** (mesh): cerebro de composición — `city_start`/`city_stop`/`city_status` → `dispatchMando` → Z06 `ProcessManager.launch/stop/health`. Cero `child_process` en el paquete.
3. **Catálogo f1** de 3 barrios (`state-machine` 1 · `prolog-editor` 3 · `aaia-gallery` 1+backend) en el servicio + extensión mínima `arbol` en startpack-ciudad (`catalogId`, `aaia-backend`).
4. **E2e barrio StateMachine** con fixture HTTP + wake/health vía Z06; proyección `latente↔vivo` + ledger de hechos.

**Desviaciones:** round-trip `wake` contra authority Z03 **no** cableado e2e — documentado `<pendiente>` (brief: no bloquear f1 si health→hecho→proyección se demuestra). Cascada/zonas = f2 fuera de alcance. Tip **sin push** (gate §E a).

## Archivos tocados

- `packages/engine/lifecycle-kit/**` (creado): kit hoja/agregado + tests
- `packages/mesh/ciudad-lifecycle/**` (creado): runtime, MCP tools, mando-client, catalog-extend, fixture, e2e
- `package.json` (zeus): script `start:ciudad-lifecycle`
- `games-library/.../startpack-ciudad/seeds/gamemap.json` · `schemas/arbol.schema.json` · `scripts/ciudad-source.mjs`: `catalogId` + aaia-backend
- `plan/REPORTES/WP-Z12-f1-encendido-arbol-vida.md` (este reporte)

## Evidencia

```
# env
git -C …/zeus-sdk/.worktrees/wp-gc-z12-f1-arbol-vida rev-parse HEAD
→ fa73062124a10839c3f821d5e61c250ea14f734b (base 03350a2)
git -C …/zeus-sdk rev-parse origin/main
→ 03350a24480c97a9c8d34dd002896d6790a56c2e
git -C …/games-library rev-parse HEAD
→ 5b5bf4e23e311f05d5e7e96320a74ac253b3faa7 (base 0d7d821)

# tests
npm test -w @zeus/lifecycle-kit
→ tests 10 / pass 10 / fail 0
npm test -w @zeus/ciudad-lifecycle
→ tests 6 / pass 6 / fail 0
  ok eje I: city_start(state-machine) → Z06 health → vivo → stop → latente
  ok eje IV: segundo cliente mando (mandoClientCall) mismo vocab
  ok win32 supervisión: kill proceso → degradada → reintento
  ok adopción: segundo start no duplica proceso
  ok eje III: sin import node:child_process
npm test -w @zeus/mcp-launcher
→ tests 11 / pass 10 / skip 1 / fail 0 (CATALOG_SEED sin tree/autoRestart — frontera Z06 intacta)
npm test -w @zeus/startpack-ciudad
→ tests 7 / pass 7 / fail 0

# ceguera kit
rg -i '\bciudad\b|\bbarrio\b|\bmarco\b' packages/engine/lifecycle-kit/src → 0
# anti-legacy
rg 'interpret\(|\bMachine\(' packages/engine/lifecycle-kit/src → 0
# Z03 wake round-trip físico
→ <pendiente> (proyección local + ledger sí; authority wake no invocada en este WP)
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: lifecycle-kit · ciudad-lifecycle · arbol seeds · reporte; sin BACKLOG; sin f2
- [x] Cero árboles copiados de otros mundos: concepto mesh vieja, no código
- [x] Sellos con fuente; Z06 tip `03350a2` verificado con `rev-parse`
- [x] Sin fluff; wake Z03 marcado `<pendiente>`
- [x] Ejes I/III/IV evidenciados; ceguera kit OK
- [x] Gates ejecutados de verdad (arriba)
- [x] Commits convencionales
- [x] Push tip: **no** (gate §E a)

## Hallazgos fuera de alcance

- f2: rollup ciudad + cascada zonas + tablero Z08-f4
- Cablear proyector → `ciudad` domain `wake` / ledger de juego (Z03) en un solo cliente de room
- Spawn real de StateMachine/Prolog/AAIA (no en monorepo zeus) — e2e usa fixture; entries city sin `workspace` en catálogo extendido

## Dudas / bloqueos

Ninguno bloqueante. Pedir push tip al orquestador cuando revise.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno). Caveats wake Z03 = f2.

zeus-sdk `main` @ `fa73062` (FF sobre `03350a2` · push `origin/main`) · games-library `main` @ `5b5bf4e` (FF · push `origin/main`) · submodules SCRIPT_SDK → mismos SHAs. Packs `@zeus/lifecycle-kit` + `@zeus/ciudad-lifecycle` + seeds `arbol` (catalogIds). Ejes I/III/IV + ceguera kit OK. Wake authority Z03 / cascada zonas → **f2 ⬜**. **Ola GC-2 cerrada** (Z03·Z06·Z08-f4..5·Z12-f1).

### Verificado (brazo REVISIÓN + merge)
- SHAs: zeus `fa73062` sobre Z06 `03350a2` · GL `5b5bf4e` · SDK reporte tip `0f9ccf6`
- Alcance dentro de BRIEF; frontera Z06 actuador / Z12 cerebro; `src` ciudad-lifecycle sin `child_process`
- Gates: lifecycle-kit 10/10 · ciudad-lifecycle 6/6 · mcp-launcher 10 pass + 1 skip · startpack-ciudad 7/7
- Merge FF + push `origin/main` zeus+GL; sin force-push
- Wake Z03 authority `<pendiente>`: **no bloquea f1** (BRIEF + ficha f2)

### Caveats (no bloquean; van a f2)
1. Wake authority Z03 / ledger de juego → f2
2. E2e con fixture HTTP, no workspace StateMachine real
3. Eje IV f1 = `mandoClientCall`; dashboard Z08 = consumidor f2
4. Cascada/zonas / rollup ciudad = f2
