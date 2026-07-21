# WP-Z06 · mcp-launcher — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z06 (retoma dirty + rebase hotfix) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z06-mcp-launcher` (zeus-sdk) |
| commits | zeus-sdk `03350a2` (rebase sobre `origin/main` `4ab91a0` · PR #3 hotfix) · 1 ahead · **sin push** |
| eje(s) CA | **I** |
| estado propuesto | listo para revisión |

## Qué se hizo

Se **retomó** el dirty del worktree (no greenfield). Paquete `@zeus/mcp-launcher`
(`packages/mesh/mcp-launcher`, `zeus.role: mcp`) sobre `createStandardMcpServer`:
tools `launch_mcp_server` / `stop` / `restart` / `launch_all` / `health` /
`generate_vscode_config` (+ `resolve_capability` / `list_capabilities`). Catálogo
declarativo (lineas primero: tronco+satélite mismo `spawnGroup`); puerto launcher
**3050** en `presets-sdk` env; gate = solo ids de catálogo. Frontera Z12
documentada (sin XState / supervisión / `autoRestart`).

Addenda orquestador: rebase limpio sobre hotfix `4ab91a0` (lock linea-kit + scrub
viaje). Sin conflicto de `package-lock.json`; scrub `acceptWalks` intacto.

Desviación CA: live `linea-system` **skipped** — volumen local solo `LINEAS/demo`
(no `espana`). Eje I cerrado con fixture dual-peer vía **tool call MCP real**.

## Archivos tocados

- `packages/mesh/mcp-launcher/**` (creado): servidor, catálogo, process-manager, tools, fixtures, tests, README
- `package.json` (modificado): script `start:mcp-launcher`
- `package-lock.json` (modificado): workspace `@zeus/mcp-launcher` (post-rebase sobre tip hotfix)
- `packages/engine/presets-sdk/src/env/index.mjs` (modificado): `launcher.disk` 3050 + `ZEUS_MCP_LAUNCHER`
- `plan/REPORTES/WP-Z06-mcp-launcher.md` (este reporte, superproyecto)

## Evidencia

```
# env / rebase
git -C …/wp-gc-z06-mcp-launcher rev-parse HEAD
→ 03350a24480c97a9c8d34dd002896d6790a56c2e
git -C …/zeus-sdk rev-parse origin/main
→ 4ab91a0bcd1a57afcb888bfbab25b01af20668f5
git merge-base --is-ancestor 4ab91a0 HEAD → OK
# scrub viaje retenido: acceptWalks (no acceptWalksPozo)

# tests (post-rebase)
npm test -w @zeus/mcp-launcher
→ tests 11 / pass 10 / fail 0 / skipped 1
→ ok eje I: tool call launch_mcp_server starts tronco + satelite
→ ok launch tronco brings satelite (shared spawnGroup)
→ ok launcher MCP listens and exposes actuator tools
→ ok generate_vscode_config is valid
→ ok catalog gate rejects unknown id
→ SKIP live linea-espana (no LINEAS/espana; demo-only volume)

# frontera Z12
rg xstate|createMachine|interpret( packages/mesh/mcp-launcher/src → 0
# tree/autoRestart ausentes en CATALOG_SEED

# CI tip hotfix (orquestador)
https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29788553875
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: mcp-launcher + engarce env/start + reporte; sin Z03/Z08/Z12/BACKLOG
- [x] Cero árboles/ficheros copiados de otros mundos: concepto MCPLauncher, no código aleph
- [x] Sellos con fuente; rutas citadas existentes: puerto tabla 3008/3012/3050
- [x] Sin fluff; wake map vacío; player-MCP sin workspace = no launch
- [x] Eje I: tool call MCP → tronco+satélite health (fixture); live linea `<pendiente>` sin volumen espana
- [x] Gates: `npm test -w @zeus/mcp-launcher` post-rebase
- [x] Commits convencionales: `feat(mcp-launcher): …`
- [x] Hotfix absorbido; scrub viaje no revertido
- [x] Push tip: **no** (gate §E a)

## Hallazgos fuera de alcance

- Volumen LINEAS = demo only → smoke live linea-system requiere `espana`.
- e2e Z04 RNFP + editor-ui refresh live: best-effort / Z04 no mergeado.
- Campos `tree.*` / política restart: extensión Z12.

## Dudas / bloqueos

Ninguno bloqueante.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk `main` @ `03350a2` (FF sobre `4ab91a0` · push `origin/main`) · submodule SCRIPT_SDK → `03350a2`. Pack `@zeus/mcp-launcher`; Eje I ✅ (`callTool launch_mcp_server` tronco+satélite fixture; 11/pass 10/skip 1). Frontera Z06≠Z12 intacta (sin XState/`autoRestart`). Live `linea-espana` skipped (volumen demo) — no bloquea. **Z06 ✅ — Z12-f1 despachable.**

### Verificado (brazo REVISIÓN + merge)
- Rama `wp/gc-z06-mcp-launcher` tip `03350a2` sobre hotfix PR #3; merge FF → `main`; push tip autorizado (GO gate).
- Ceguera método 0; scrub `acceptWalks` retenido; sin BACKLOG en diff zeus.
