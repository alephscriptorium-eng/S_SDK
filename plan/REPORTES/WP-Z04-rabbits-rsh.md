# WP-Z04 · rabbits-rsh — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z04 (swarm fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z04-rabbits-rsh` (games-library) · reporte S_SDK `wp/gc-z04-rabbits-rsh` |
| commits | games-library `b020a81dd00f4557ed2e797ebed9631e5450d1a5` |
| eje(s) CA | **IV** (peer externo = 2º cliente rooms/protocol) |
| estado propuesto | listo para revisión |
| issue | ⏳ sin verificar sync-map → `alephscriptorium-eng/S_SDK#4` (no afirmado) |

## Qué se hizo

Se implementó la federación e2e r/s/h contra authority ciudad (Z03): mock
control-plane OpenAPI (`POST /bots`, `GET /peers`, `GET /actor-registry` +
rito RNFP), peer externo que solo habla `@zeus/rooms` + `makeIntent`
(contrato, sin tocar dominio), `barrio-horse` (`HORSE tools/call` → intent
`wake` con `horseMode:'horse'`), caso **C-03** en `spec/CASOS.md`, smoke
in-process y demo e2e con socket aislado. **Sin push** tip gobierno /
submodule. **Sin BACKLOG.**

## Archivos tocados

- `packages/ciudad/fixtures/federation/*` (creado): mock CP, peer-external,
  barrio-horse, demo-peer
- `packages/ciudad/fixtures/federation-smoke.mjs` (creado): e2e in-process eje IV
- `packages/ciudad/spec/CASOS.md` (modificado): C-03 federación
- `packages/ciudad/test/federation.test.mjs` + `casos.test.mjs` (creado/mod)
- `packages/ciudad/package.json` / `README.md`: scripts federation-*
- `e2e/ciudad-federation-demo.mjs` + `e2e/roots.mjs` + root `package.json`
- `plan/REPORTES/WP-Z04-rabbits-rsh.md` (este reporte, superproyecto)

## Evidencia

> Worktree GL: `…/games-library/.worktrees/wp-gc-z04-rabbits-rsh`
> Env (rev-parse, nunca `test -d .git`):

```
git -C …/games-library/.worktrees/wp-gc-z04-rabbits-rsh rev-parse HEAD
→ b020a81dd00f4557ed2e797ebed9631e5450d1a5

git -C …/zeus-sdk rev-parse HEAD
→ fa73062124a10839c3f821d5e61c250ea14f734b

git -C …/SCRIPT_SDK/.worktrees/wp-gc-z04-rabbits-rsh rev-parse HEAD
→ (reporte; base brief cd37849 + commit de este archivo)
```

### A1 npm-ci (pendiente · vivos deferibles)

```
# Intento documentado 2026-07-21
cd …/wp-gc-z04-rabbits-rsh && npm ci --ignore-scripts
→ no cerró a tiempo / entorno incompleto (A1 cola post-GC-2)
# Worktree usó symlink a node_modules del checkout GL main para gates locales.
# Vivo socket: mcp-core-sdk MODULE_NOT_FOUND ./IUserDetails → deferido.
```

### Gates ejecutados

```
$ node fixtures/federation-smoke.mjs   # cwd packages/ciudad
FEDERATION_SMOKE_OK {
  barrio: 'vivo',
  horseMode: 'horse',
  rnfp: 'active',
  peerCount: 3,
  controlPlane: 'http://127.0.0.1:…'
}

$ node --test test/*.test.mjs          # cwd packages/ciudad
# tests 10
# pass 10
# fail 0
  ok — CASOS C-01..C-03 coherencia playbook-kit
  ok — ceguera método
  ok — domain MVP + rechazo muerto
  ok — mock CP bots+RNFP
  ok — federation-smoke in-process (eje IV)

$ node e2e/ciudad-federation-demo.mjs
✅ G-FED.0 mock CP
❌ G-FED e2e · timeout HTTP :13057/health
  (socket-server: Cannot find module './IUserDetails' en mcp-core-sdk)
→ vivo deferido (A1); CA local cubierto por federation-smoke
```

### Eje IV

Peer `createFederationPeer` + smoke: segundo cliente independiente del
player-MCP; solo `rooms`/`protocol` + control-plane; snapshot observado
vía bus de contrato; authority no se muta por import de `domain`.

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: ciudad fixtures/e2e/CASOS + reporte; sin mcp-launcher / lifecycle / flows / dramaturgo / BACKLOG
- [x] Cero árboles copiados de otros mundos: precedente tap-horse citado; OpenAPI mcp-core en zeus http-contract
- [x] Sellos con fuente; rutas citadas existentes: worktree + SHA rev-parse
- [x] Sin fluff; vivo socket / issue sync-map / A1 = `<pendiente>` o deferido
- [x] Eje IV evidenciado: federation-smoke + test federation (peer ≠ player-mcp)
- [x] Gates ejecutados de verdad: 10/10 + smoke OK; e2e socket deferido con intento
- [x] Commits convencionales: `feat(ciudad): …`
- [x] Diff solo del alcance del WP: sí
- [x] Push tip: **no** (gate custodio / brief)

## Hallazgos fuera de alcance

- **A1 npm-ci** zeus+GL: sigue pendiente; `mcp-core-sdk` dist incompleto
  bloquea socket-server vivo (mismo síntoma A1).
- **e2e socket+authority** (`e2e:ciudad-federation`): listo en código;
  re-smoke tras A1.
- **Launcher Z06 → RNFP capability real**: mock activa RNFP; cableado
  launch→active queda para consumo cruzado Z06/Z04 vivo post-A1.

## Dudas / bloqueos

- Ningún bloqueo para revisión sobre CA local (eje IV + C-03 + mock).
- ¿Orquestador re-abre vivo e2e tras A1, o acepta smoke in-process como
  cierre de Z04?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno). Caveat **A1**.

Obra games-library `b020a81` (rebase limpio sobre tip post-Z07 `006aef1` · FF `main` + push `origin/main`) · tip reporte worker rebaseado sobre `main` post-Z07 · bump submodule SCRIPT_SDK → `b020a81`. Diff = federación e2e r/s/h (`packages/ciudad/fixtures/federation/*` + smoke/tests/CASOS C-03 + `e2e/ciudad-federation-demo.mjs`) + este reporte. Sin solape de paths con Z07 (kits/dramaturgo). Eje **IV** ✅ (federation-smoke + node:test 10/10). **Sin conflictos con Z07.**

### Verificado (brazo REVISIÓN + merge)
- SHAs: GL tip pre-rebase worker `5135559` → post-rebase merge `b020a81` sobre `006aef1` · SDK reporte base `f657838` rebaseado sobre tip post-aceptación Z07
- Alcance dentro de BRIEF; peer externo ≠ player-MCP; sin tocar dramaturgo/lifecycle/flows/BACKLOG en obra
- Gates reportados: federation-smoke OK · ciudad tests 10/10; e2e socket vivo deferido (A1 / mcp-core-sdk)
- Merge FF + push `origin/main` GL; sin force-push
- Follow-up (no este merge): regenerar proyección Z07 ledger→story-board (D1 de Z07) — trivial/otro agente

### Caveat (no bloquea ✅)
1. **A1** npm-ci / dist mcp-core-sdk incompleto → e2e socket+authority (`e2e:ciudad-federation`) y re-smoke vivo deferidos a cola A1 post-GC-2

