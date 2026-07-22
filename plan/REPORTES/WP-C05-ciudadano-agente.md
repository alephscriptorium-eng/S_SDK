# WP-C05 · ciudadano-agente — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-C05 |
| fecha | 2026-07-22 |
| rama | `wp/cr-c05-ciudadano-agente` (zeus + GL) |
| worktrees | `zeus-sdk/.worktrees/wp-cr-c05-ciudadano-agente` · `games-library/.worktrees/wp-cr-c05-ciudadano-agente` |
| commits | zeus `05d70fd` (base `73cb0c2`) · GL `e03f11a` (base `f388451`) |
| eje(s) CA | **I** · **IV** + regla 6 (≥2 tipos) + ceguera δ12 |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY |

## Qué se hizo

Cierre del gap **v3**: peercard firmada (peer-card-seat) en bootstrap del
actor MCP — mismo carril identidad que la puerta (E02). El agente ya no
entra solo con `type`/`features`.

1. **zeus `@zeus/rooms`** — `connectAndJoin` reenvía `peerCard` en
   `CLIENT_REGISTER` cuando viene en options.
2. **zeus `@zeus/player-mcp-kit`** — `createPlayerRoomBridge` acepta
   `peerCard` / `requirePeerCard` / `assertPeerCard`; `connect()` las
   presenta al join; getters `peerCard` / `ssbId`.
3. **GL `@zeus/ciudad`** — `issueActorPeerCard` + `createRoomBridge`
   async con seat verify; features `puerta`+`peercard`; tool
   `player_leer_parte` (campanas desde ledger); tests CA regla 6
   (humano-puerta + agente-MCP).

**v2** verificado intacto (resources `ciudad://…`). Sin merge · sin push ·
sin tocar bosque/contrato · sin cerrar Z#5/#6 · sin E_SDK.

## Archivos tocados

### zeus `05d70fd`

| path | cambio |
| ---- | ------ |
| `packages/engine/rooms/src/index.mjs` · types · test | `peerCard` en CLIENT_REGISTER |
| `packages/engine/player-mcp-kit/src/room-bridge.mjs` · test · README | bootstrap peercard |
| `.changeset/player-mcp-peercard.md` | patch kit + rooms |

### GL `e03f11a`

| path | cambio |
| ---- | ------ |
| `packages/ciudad/src/player-mcp/peer-card.mjs` | emitir/verify seat |
| `packages/ciudad/src/player-mcp/room-bridge.mjs` · `start.mjs` | requirePeerCard |
| `packages/ciudad/src/player-mcp/logic.mjs` | `player_leer_parte` |
| `packages/ciudad/test/ciudadano-agente.test.mjs` | CA I·IV·regla 6 |
| `packages/ciudad/package.json` | protocol `^0.3.0` |
| `packages/ciudad/README.md` | doc MCP+peercard |

## Respuestas v2 / v3 (prep R10.6)

| id | pregunta | respuesta C05 |
| -- | -------- | ------------- |
| **v2** | ¿cableado ciudad → player-mcp-kit (instancia/config)? | **EXISTE · verificado** — dep `@zeus/player-mcp-kit` · `src/player-mcp/{server,room-bridge,logic,config,start}` · resources `ciudad://player/state`·`scene`·`casos` (test «v2 wiring»). |
| **v3** | ¿room-bridge del kit presenta peercard en bootstrap? | **EXISTE (obra C05)** — kit `requirePeerCard` + reenvío en connect; ciudad emite seat y exige card antes del join. Gap prep = cerrado. |

## Evidencia

```
# zeus worktree @ 05d70fd
$ npm test -w @zeus/rooms
# tests 12 · pass 12 · fail 0  (incl. peerCard → CLIENT_REGISTER)

$ npm test -w @zeus/player-mcp-kit
# tests 12 · pass 12 · fail 0  (incl. requirePeerCard / connect reenvía)

# GL worktree @ e03f11a
$ $env:ZEUS_SDK_ROOT = "<zeus-worktree-c05>"
$ npm test -w @zeus/ciudad
# tests 63 · pass 63 · fail 0
#   + ciudadano-agente: seat · bootstrap · v2 URIs · campanas · regla 6 · connect

$ rg WP-[A-Z]{1,2}\d packages/engine/player-mcp-kit packages/ciudad/src packages/ciudad/test \
    --glob '!**/ceguera.test.mjs'   → 0 (δ12 obra)
$ git log -p <base>..HEAD -- <touched> | rg WP-C0|SCRIPT_SDK|…  → vacío (regla 14)
```

### CA experiencia (norte)

Flujo probado en unit/CA (sin mesh live en este WP):

1. Agente MCP: `issueActorPeerCard` → seat ok → `createRoomBridge` exige card.
2. `connect` reenvía `peerCard` en register (kit test).
3. `player_join` / `player_announce` ya cableados; `player_leer_parte`
   mapea titulares → clases de campana (`despertar`/…) que operator-ui
   consume vía `campanasFromLedger`.

Live e2e «campana suena en operator-ui» = arrancar authority + MCP +
operator-ui (orquestador / PRUEBA-DE-DOS); evidencia de cable aquí =
campanas desde parte en ledger.

### Ejes

| eje | evidencia |
| --- | --------- |
| **I** | ciudad consume API peercard del kit (`createRoomBridge` → `requirePeerCard`) |
| **IV** | 2º cliente: peercard humana (`emitirCredencialFederada`) + peercard agente MCP |
| regla 6 | ≥2 tipos jugador (puerta humano + MCP agente), seats distintos |
| δ12 + 14 | árbol obra + `git log -p` sin tokens de marco / WP-ids |

## Cómo probar

```powershell
# Zeus
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-cr-c05-ciudadano-agente
npm test -w @zeus/rooms
npm test -w @zeus/player-mcp-kit

# GL (pin tip kit+protocol seat)
cd HOLONES/01-mythos/games-library/.worktrees/wp-cr-c05-ciudadano-agente
$env:ZEUS_SDK_ROOT = (Resolve-Path ..\..\..\zeus-sdk\.worktrees\wp-cr-c05-ciudadano-agente).Path
npm test -w @zeus/ciudad
```

Smoke MCP (con authority viva): `npm run start:mcp -w @zeus/ciudad`
tras pin `ZEUS_SDK_ROOT` al tip kit; tools `player_join` → `player_announce`
→ `player_leer_parte`.

## Auto-revisión (PRACTICAS)

- [x] Diff solo ALCANCE_DIFF (player-mcp-kit · rooms · ciudad/player-mcp)
- [x] Cero árboles copiados; seat vía tip/registry
- [x] Sellos con fuente; v2/v3 respondidos
- [x] Sin fluff / sin claim live campana sin `<pendiente>` e2e mesh
- [x] Ejes I·IV + regla 6 evidenciados
- [x] Gates ejecutados (tests 12+12+63)
- [x] Commits convencionales
- [x] Sin BACKLOG · sin merge · sin force-push · sin Z#5/#6

## Hallazgos fuera de alcance

- Registry GL aún puede resolver `@zeus/protocol@0.2.0` sin
  `./peer-card-seat`; obra carga tip vía env/sibling (mismo patrón
  federation). Bump dep a `^0.3.0` — install limpio post-merge debe
  traer seat del canal.
- Publish/version bot de `@zeus/player-mcp-kit` + `@zeus/rooms` =
  orquestador post-aceptación (changeset listo).
- E2e mesh operator-ui campana live → hito PRUEBA-DE-DOS / observación.

## Dudas / bloqueos

Ninguno para revisión. Higiene worktrees/ramas = orquestador al aceptar
(ambos árboles). Sin push.

---

## Revisión del orquestador

**Aceptado ✅** · R13-city CADENA VERDE · 2026-07-22

| check | evidencia |
| ----- | --------- |
| obra | zeus `05d70fd` · GL `e03f11a` · v2/v3 OK |
| version | PR#10 `822a13e` → tip `2aec4cb` · Release **29890841579** · npm `player-mcp-kit@0.1.3` · `rooms@0.1.1` |
| HOTFIX-C05-CI | GL `20c095c` · CI main **29891318380** ✅ · solo path/import test |
| CA I·IV·regla 6·ceguera | ✅ (reporte + CI) |
| issue | [#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31) CLOSED |
| siguiente | **listo-R14** · campana live → **PRUEBA-DE-DOS** (no abrir aquí) |

Acta: [ACTA-C05-CIUDAD-REAL-cierre-2026-07-22](ACTA-C05-CIUDAD-REAL-cierre-2026-07-22.md).
