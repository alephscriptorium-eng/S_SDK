# WP-Z17 · operator-ui-ciudad — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · WP-Z17 |
| fecha | 2026-07-21 |
| rama | `wp/gc-z17-operator-ui-ciudad` (zeus-sdk) · `wp/gc-z17-operator-ui-ciudad` (S_SDK reporte) |
| commits | zeus-sdk `8afc0a0` (base `0b566e6`) · S_SDK obra `f886da9` (rama `wp/gc-z17-operator-ui-ciudad`) |
| eje(s) CA | IV (2ª vista contrato state/ledger) · I (snapshot/startpack ciudad) · ceguera ampliada |
| estado propuesto | listo para revisión |

## Qué se hizo

Cableado de `@zeus/operator-ui` como vista 3D de **ciudad** (SEMILLA §5): default
`game:'ciudad'` + room `CIUDAD_DEMO` en `serve.mjs` / `window.__ZEUS__`. Thin wrap en
`@zeus/operator-bridge`: `state.barrios` → hub bots (canal por estado
vivo/latente/muerto/roto) + slice HUD (`barrioCount` / `barrioByEstado`). Host HUD lista
barrios coloreados; título de layout refleja el game. Smoke
`fixtures/ciudad-vista-smoke.mjs` proyecta fixture + seed startpack (24 barrios) y
verifica inject serve. Sin contrato engine nuevo; sin tocar Z16 / §2–§4/§6 / BACKLOG.

## Archivos tocados

- `packages/mesh/operator-bridge/src/index.mjs` — proyección barrios + tallies + ledger wake/sleep/announce
- `packages/mesh/operator-bridge/test/bridge.test.mjs` — tests barrios / tallies
- `packages/mesh/operator-bridge/INTEGRATION.md` — mapeo documentado
- `packages/mesh/operator-ui/serve.mjs` — default ciudad / CIUDAD_DEMO
- `packages/mesh/operator-ui/projects/dev-app/src/app/app.ts` — config + título
- `packages/mesh/operator-ui/projects/dev-app/src/app/zeus-operator-bridge.service.ts` — default game ciudad
- `packages/mesh/operator-ui/projects/dev-app/src/app/operator-hud.component.ts` — HUD barrios/estados
- `packages/mesh/operator-ui/projects/dev-app/src/zeus-libs.d.ts` — tipos slice barrios
- `packages/mesh/operator-ui/fixtures/ciudad-vista-smoke.mjs` — smoke proyección + serve
- `packages/mesh/operator-ui/package.json` — script `smoke:ciudad`
- `packages/mesh/operator-ui/README.md` — defaults y verificación
- `plan/REPORTES/WP-Z17-operator-ui-ciudad.md` — este reporte (S_SDK)

## Evidencia

```
# SHAs al arranque (brief)
zeus-sdk HEAD (main tip) = 0b566e6b090b7ff4ffbe9e1837ff121636852ac1
games-library HEAD       = d5548b1145702bdef69fab1788db106270d486aa
S_SDK HEAD (GO GC-5)     = 975d22a74654b74deaf583f8a7e4ef865c612ed8

# Worktree
C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z17-operator-ui-ciudad
rama wp/gc-z17-operator-ui-ciudad @ 8afc0a04b6890cbe6b087f533583f5aa87911a62

# npm test -w @zeus/operator-bridge
11 pass / 0 fail (incluye projectOperatorSlice tallies + onState barrios)

# npm --prefix packages/mesh/operator-ui run build:all
Built @zeus/threejs-ui-lib OK
Application bundle generation complete (dev-app) OK
  main-H5ZS25EL.js | 815.23 kB

# ZEUS_GAMES_LIBRARY=…/games-library node packages/mesh/operator-ui/fixtures/ciudad-vista-smoke.mjs
OK projection · fixture { barrioCount: 4, barrioByEstado: { vivo:1, latente:1, muerto:1, roto:1 }, hubMsgs: 5 }
OK projection · startpack@games-library { sceneId: 'ciudad-v0', barrioCount: 24, barrioByEstado: { vivo:14, latente:7, muerto:3, roto:0 }, hubMsgs: 24 }
OK serve/shell · game=ciudad room=CIUDAD_DEMO
CIUDAD_VISTA_SMOKE_OK { gamesLibrary: true, serve: { skipped: false } }

# Ceguera (árbol packs tocados, excl. node_modules/dist)
rg holones|SCRIPT_SDK|S_SDK|WP-Z\d+|swarm-orquestacion|juntura|BACKLOG → 0 hits
git log -1 -p (operator-ui|operator-bridge) mismos tokens → 0 hits
Marca aleph/scriptorium: no añadida; DC-GC-ceguera-marca = admisible si aparece en datos.
```

### Criterios de aceptación

| CA | evidencia |
| --- | --- |
| operator-ui conecta room ciudad y proyecta barrios+estados | default `__ZEUS__.game=ciudad` · bridge onState · HUD · smoke startpack 24 barrios |
| Cero contrato engine nuevo | reusa protocol + operator-bridge; intents role=operator |
| Eje IV 2ª vista | operator-ui sigue siendo cliente distinto de player-ui/player-3d sobre mismo wire; slice ciudad en operator |
| Eje I consumidor snapshot/startpack | smoke lee `startpack-ciudad/seeds/gamemap.json` (24 barrios) y proyecta |
| Diff solo ALCANCE | operator-ui/** + operator-bridge/** + este reporte |
| Ceguera | árbol + `git log -p` = 0 tokens método; marca OK |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: operator-ui + operator-bridge (thin) + reporte; kits accidentales revertidos
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: seed leído read-only vía path/env
- [x] Sellos con fuente; rutas citadas existentes: smoke + SHAs arriba
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: energía/decay Z16 = no implementado (bonus, no gate)
- [x] Eje(s) aplicables evidenciado(s): I + IV arriba
- [x] Gates ejecutados de verdad: bridge tests + build:all + smoke:ciudad
- [x] Commits convencionales: `feat(operator-ui): …`
- [x] Diff solo del alcance del WP: sí

## Hallazgos fuera de alcance

- Import directo de `@zeus/ciudad` domain desde GL falla sin resolver `@zeus/protocol` en ese contexto; smoke cae a proyección desde seed (equivalente escena). Live authority e2e con socket = ops residual / no bloquea slice.
- Soft-dep Z16 (energía/decay en tip): no pintado — bonus no gate.
- Budget Angular bundle >500kB: warning preexistente de tamaño, no introducido como CA.

## Dudas / bloqueos

Ninguno bloqueante. ¿El orquestador actualiza el puntero submodule zeus-sdk a `8afc0a0` en el merge, o espera push `origin` de la rama WP?

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-21 · orquestador (merge/gobierno).

zeus-sdk main @ 8afc0a0 (FF + push origin/main) · SCRIPT_SDK submodule → 8afc0a0.
Reporte tip 1e64819 / obra 886da9 (cherry-pick a main; cabecera del reporte cita obra 886da9).

Cableado game:'ciudad' + proyección barrios/estados en operator-bridge/ui; bridge 11/11 · build:all · ciudad-vista-smoke 24 barrios; ceguera 0. **Z17 ✅** · ola **GC-5 cerrada** (Z16 ✅ · Z17 ✅ = SEMILLA §1+§5).

### Verificado (brazo merge/gobierno)
- Rama zeus-sdk wp/gc-z17-operator-ui-ciudad @ 8afc0a0 · FF → main · push tip autorizado (lephscriptorium-eng)
- Rama reporte S_SDK wp/gc-z17-operator-ui-ciudad @ 1e64819 · cherry-pick → main · bump submodule zeus-sdk
- Sin force-push; sin tocar Z05-f1 / SEMILLA §2–§4/§6 / sync-map
