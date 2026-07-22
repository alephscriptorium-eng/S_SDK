# WP-A5 · puerta — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-A5 (ola 2 EMBAJADOR-ENTRADA) |
| fecha | 2026-07-22 |
| rama | `wp/ee-a5-puerta` (zeus · GL · S_SDK) |
| commits | zeus `8194c78` · GL `2945290` · S `<este commit>` |
| eje(s) CA | **I** · **IV** · ceguera (regla 14) |
| estado propuesto | listo para revisión |

## Qué se hizo

Cableé la **puerta** peercard → `startpack-ciudad-v0.1.0` sin superficie nueva:
firma real E02 (`signTravelingPeerCard` / `verifyTravelingPeerCard`) + API
pública `@zeus/embajador-kit` (f1). Cliente 1 = operator-ui (serve + HUD +
smoke). Cliente 2 = federación ciudad (peer-external / federation-smoke /
test). Docs casa: flujo en `tuberia-protegida.md` citando S_SDK#22/#23 y
Z_SDK#4 (sin cerrar issues). No toqué `authority-kit/**`,
`protocol/src/peer-card.mjs`, `embajador-kit/**` (salvo import), ni
`webrtc-signaling/**`.

## Archivos tocados

### Z17-zeus (`zeus-sdk` · worktree `.worktrees/wp-ee-a5-puerta`)

- `packages/mesh/operator-ui/fixtures/puerta-entry.mjs` (creado): emitir/entrar con kit + seat E02
- `packages/mesh/operator-ui/fixtures/puerta-smoke.mjs` (creado): gate smoke
- `packages/mesh/operator-ui/serve.mjs` (modificado): `__ZEUS__.puerta` + `POST /api/puerta/enter`
- `projects/dev-app/src/app/zeus-operator-bridge.service.ts` (modificado): `puerta$` + `enterWithCredencial`
- `projects/dev-app/src/app/operator-hud.component.ts` (modificado): sección Puerta
- `projects/dev-app/src/app/app.ts` (modificado): seed puerta desde `__ZEUS__`
- `package.json` / `README.md` (modificado): script `smoke:puerta` + docs

### Z04-GL (`games-library` · worktree `.worktrees/wp-ee-a5-puerta`)

- `packages/ciudad/fixtures/federation/peer-external.mjs` (modificado): `emitirCredencialFederada` / `entrarPorPuertaFederada` / `enterWithPuerta`
- `packages/ciudad/fixtures/federation/demo-peer.mjs` (modificado): entra por puerta antes del join
- `packages/ciudad/fixtures/federation-smoke.mjs` (modificado): assert puerta en smoke
- `packages/ciudad/test/federation.test.mjs` (modificado): test eje IV puerta + smoke ref
- `packages/ciudad/README.md` · `docs/startpacks.md` (modificado): default visible `startpack-ciudad-v0.1.0`

### webs/S_SDK

- `docs/guide/tuberia-protegida.md` (modificado): flujo peercard→startpack + citas #22/#23/#4
- `plan/REPORTES/WP-A5-puerta.md` (este reporte)

## Evidencia

```
# zeus worktree @ aab6a68 base
node packages/mesh/operator-ui/fixtures/puerta-smoke.mjs
→ PUERTA_SMOKE_OK {"startpack":"startpack-ciudad-v0.1.0","defaultStartpack":true,"seatOk":true,...,"kit":"@zeus/embajador-kit","firma":"@zeus/protocol/peer-card-seat"}
EXIT=0

# GL worktree · ZEUS_SDK_ROOT=<zeus wp-ee-a5-puerta>
node --test packages/ciudad/test/federation.test.mjs
→ 4/4 pass (incluye «puerta A5» + federation-smoke con startpack-ciudad-v0.1.0)
EXIT=0

# Env tip al despacho
git -C HOLONES/01-mythos/zeus-sdk/.worktrees/wp-ee-a5-puerta rev-parse HEAD → 8194c78…
git -C HOLONES/01-mythos/games-library/.worktrees/wp-ee-a5-puerta rev-parse HEAD → 2945290…
git rev-parse HEAD (rama wp/ee-a5-puerta) → ver tip S al commit del reporte

# Ceguera r.14 (árbol operator-ui)
rg 'SCRIPT_SDK|S_SDK|holón|holarquía|juntura' packages/mesh/operator-ui → 0 hits
git log -p aab6a68..8194c78 -- packages/mesh/operator-ui → 0 tokens marco
```

## SHAs entrega

| repo | rama | SHA |
| ---- | ---- | --- |
| zeus-sdk | `wp/ee-a5-puerta` | `8194c780ca989f958ed14e69a95ea52b2566ebe7` (base `aab6a68`) |
| games-library | `wp/ee-a5-puerta` | `2945290cf2c6c4518e6c5a776297af2566a7e008` (base `84f9d79`) |
| S_SDK | `wp/ee-a5-puerta` | tip de este commit (tuberia + reporte) |
## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: operator-ui paths · GL federation/docs · tuberia + reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; rutas citadas existentes (`startpack-ciudad-v0.1.0`, E02 seat, kit f1)
- [x] Sin fluff ni promesa de futuro sin `<pendiente>` (Z#4/5/6 no cerrados)
- [x] Eje I: operator-ui consume `@zeus/embajador-kit` + seat E02 (smoke captura comportamiento)
- [x] Eje IV: 2º cliente = federación ciudad (`peer-external` / federation test+smoke)
- [x] Ceguera r.14: árbol operator-ui = 0; historial branch a verificar post-commit
- [x] Gates ejecutados de verdad: puerta-smoke · federation.test 4/4
- [x] Commits convencionales: `feat(operator-ui)` / `feat(ciudad)` / `docs(guide+reportes)`
- [x] Diff solo del alcance del WP (ruido CRLF feed/linea/playbook descartado)

## ∩ potencial vs f2 / hotfix

| path | A5 | f2 / hotfix |
| ---- | -- | ----------- |
| `packages/engine/authority-kit/**` | **NO** | f2 |
| `packages/engine/protocol/src/peer-card.mjs` | **NO** (solo import seat vía `peer-card-seat`) | f2 / E02 ya tip |
| `packages/engine/embajador-kit/**` | **NO** (solo import) | f1 cerrado |
| `packages/engine/webrtc-signaling/**` | **NO** | E02 / hotfix |
| `packages/engine/protocol/types/**` · signaling · changeset | **NO** | hotfix paralelo (disjunto) |
| `operator-ui/**` · GL federation fixtures · docs | **A5** | — |

∩ ficheros con f2/hotfix paths pineados: **vacío** (disjuntos).

## Hallazgos fuera de alcance

- GL `node_modules/@zeus/protocol` aún **no exporta** `./peer-card-seat` (tip E02 solo en zeus). La federación carga seat vía `ZEUS_SDK_ROOT` / sibling path — candidato a publish/bump protocol en GL cuando ops lo autorice.
- `embajador-kit` sigue exportando `firma-stub` internamente; A5 **no** lo usa en la puerta (firma = seat E02). Sustituir stub en el kit = WP kit/f2, no A5.

## Dudas / bloqueos

Ninguno bloqueante. f2 no merged: A5 solo consume peercard shape/freshness existente + seat E02; TTL/issue-peer-card queda en f2.

## Cómo probar

```bash
# Zeus (worktree wp-ee-a5-puerta)
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-ee-a5-puerta
node packages/mesh/operator-ui/fixtures/puerta-smoke.mjs
# opcional serve: npm --prefix packages/mesh/operator-ui run build:all && node packages/mesh/operator-ui/serve.mjs
# POST /api/puerta/enter con credencial JSON

# GL (2º cliente)
cd HOLONES/01-mythos/games-library/.worktrees/wp-ee-a5-puerta
set ZEUS_SDK_ROOT=..\..\..\zeus-sdk\.worktrees\wp-ee-a5-puerta   # Windows
node --test packages/ciudad/test/federation.test.mjs
```

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
