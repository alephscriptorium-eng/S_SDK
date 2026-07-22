# WP-E01-f1 · kit embajador — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-E01-f1 (ola EE-1) |
| fecha | 2026-07-22 |
| rama | `wp/ee-e01-f1-kit` (zeus-sdk) · reporte en SCRIPT_SDK `wp/ee-e01-f1-kit` |
| commits | zeus `de559780c207d98b78ffe17e9b22814fc6e8d128` · reporte S_SDK `a39d8f6542111390c16975b90bf736d51e2b9597` |
| eje(s) CA | **I** (smoke emitir→consumir) · **II** (CredencialEmbajador v1 canónico) · ceguera regla 14 |
| estado propuesto | listo para revisión |
| issue | LOCAL bajo umbrella S_SDK **#22** (sin alta) |
| GL tocado | **no** |

## Qué se hizo

Paquete nuevo `@zeus/embajador-kit` en zeus `packages/engine/embajador-kit/**`:
contrato **CredencialEmbajador v1** (`tipos.mjs`), `emitirCredencial` /
`consumirCredencial` (peercard vía `@zeus/protocol` makePeerCard + frescura),
`DEFAULT_STARTPACK` = `startpack-ciudad-v0.1.0`, stubs de firma
(`attachSignatureStub` / `verifySignatureStub` — nunca `verified:true`).
Tests: smoke eje I, destino canónico eje II, frontera, ceguera. Lock
workspace + sync colateral `operator-bridge`→`@zeus/parte-kit` (ya en
package.json del tip; faltaba en lock).

**Sin desviación de alcance:** cero `protocol/peer-card` · cero
`webrtc-signaling/**` · cero `authority-kit/issue-peer-card`.

## Archivos tocados

- `packages/engine/embajador-kit/**` (creado, zeus): kit + tests + README
- `package-lock.json` (zeus): workspace `@zeus/embajador-kit` (+ sync
  `operator-bridge` deps `parte-kit` ya declarado en tip)
- `plan/REPORTES/WP-E01-f1-kit.md` (este reporte, superproyecto)

## Worktrees / SHAs

| repo | worktree / rama | SHA |
| ---- | --------------- | --- |
| zeus-sdk | `.worktrees/wp-ee-e01-f1-kit` · `wp/ee-e01-f1-kit` | obra `de55978` (base `1086392`) |
| games-library | **no tocado** | `84f9d79` |
| SCRIPT_SDK | rama `wp/ee-e01-f1-kit` (reporte) | `a39d8f6` |

Env-check al arranque (rev-parse, nunca `test -d .git`):

```
zeus tip main al arranque = 1086392d67d6398b43ccf5379062713b3c0dd486
GL                        = 84f9d7955059555defe6cfe0bd5ac9ecf3f88548
S_SDK                     = a1c7adc63d13b88ad2ad908643dba18f14edeee1
```

## ∩ E02 (lock esperado)

Paths **exclusivos f1** (no ∩ código E02):

- `packages/engine/embajador-kit/**`

**Único fichero compartido de riesgo de merge:** `package-lock.json`.

Hunks f1 en lock:

| hunk | riesgo ∩ E02 |
| ---- | ------------ |
| `node_modules/@zeus/embajador-kit` → `packages/engine/embajador-kit` | bajo (entrada nueva; E02 no declara este workspace) |
| `packages/engine/embajador-kit` { name, deps `@zeus/protocol` } | bajo |
| `packages/mesh/operator-bridge` + `@zeus/parte-kit` | colateral tip campanas; E02 no toca operator-bridge |

Si E02 también regenera el lock (deps signaling/protocol), mergear lock por
**hunks** (no tirar el workspace embajador-kit). Código E02 sigue excluido:
`protocol/src/peer-card.mjs` · `webrtc-signaling/src/{peer-card-gate,ssb-private-signaling,signaling-service,socket-room-signaling}.mjs`.

## Evidencia

### Gates

```
$ npm test -w @zeus/embajador-kit
# tests 11 · pass 11 · fail 0
# ceguera · destino-canonico · emitir-consumir · frontera · tipos
```

### CA (ficha WP-E01-f1)

| CA | estado |
| -- | ------ |
| Contrato kit estable (eje II) destino canónico | ✅ `destino-canonico.test.mjs` — 1 export def / símbolo |
| Eje I smoke emit/consume | ✅ `emitir-consumir.test.mjs` — peercard + startpack-ciudad-v0.1.0 |
| Ceguera regla 14 (árbol + log-p) | ✅ count=0 |
| Diff solo embajador-kit/** + lock + reporte | ✅ |
| No toca crypto/handshake E02 ni f3/f4 | ✅ `git diff --name-only` sin peer-card/signaling/issue-peer-card |

### Ceguera ampliada (árbol + log-p)

```
# packages/engine/embajador-kit — tokens método
SCRIPT_SDK|S_SDK|HOLONES|holón|holarquía|juntura|swarm-orquestacion|BACKLOG|orquestador → 0

$ git log -p 1086392..HEAD -- packages/engine/embajador-kit
→ LOG_P_CEGUERA_OK count=0
```

### Eje I / II

- I: 5 tests ejercitan emitir / consumir / startpack default / expiración / stub firma.
- II: `CREDENCIAL_VERSION`, `DEFAULT_STARTPACK`, `isCredencialEmbajadorShaped`,
  `emitirCredencial`, `consumirCredencial` — una definición export cada una en `src/`.

## Cómo probar

```bash
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-ee-e01-f1-kit   # o checkout wp/ee-e01-f1-kit
npm test -w @zeus/embajador-kit
```

Smoke manual:

```js
import { emitirCredencial, consumirCredencial, DEFAULT_STARTPACK } from '@zeus/embajador-kit';
const c = emitirCredencial({
  roomId: 'R1', endpoint: 'wss://x/runtime', token: 't',
  expiresAt: Date.now() + 60_000
});
const out = consumirCredencial(c);
// out.ok === true · out.startpack.ref === 'startpack-ciudad-v0.1.0'
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: embajador-kit + lock + reporte; sin GL, sin E02 paths, sin BACKLOG
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; tip brief zeus `1086392` / GL `84f9d79` / S `a1c7adc` verificados al arranque
- [x] Sin fluff; firma real = `<pendiente>` E02 (stub tipado)
- [x] Ejes I/II + ceguera evidenciados (tests + log-p)
- [x] Gates ejecutados de verdad (`npm test -w` 11/11)
- [x] Commits convencionales (zeus)
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- Lock tip tenía `operator-bridge` sin `@zeus/parte-kit` pese a package.json
  (campanas) — npm install lo sincronizó; no es obra de este WP.
- Cableado puerta A5 / TTL f2 / verify crypto E02 = otros WPs.

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿Orquestador mergea zeus `wp/ee-e01-f1-kit`
  tras E02 (lock hunks) o en paralelo con cuidado de `package-lock.json`?

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
