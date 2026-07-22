# WP-E01-f2 · peercard — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-E01-f2 (ola EE-1 · post-HOTFIX) |
| fecha | 2026-07-22 |
| rama | `wp/ee-e01-f2-peercard` (zeus-sdk) · reporte en SCRIPT_SDK `wp/ee-e01-f2-peercard` |
| commits | zeus `3ebfce36b306710f14452e76ac81e1c0a4398b95` (base `bd02d70`) |
| eje(s) CA | **I** · **II** + ceguera (regla 14) |
| estado propuesto | listo para revisión |
| issue | LOCAL bajo umbrella S_SDK **#22** (sin alta) |
| guardarraíl | Z_SDK **#6** citado — no cerrado; niveles/escalado automático a poder = f3 |
| GL tocado | **no** |

## Qué se hizo

Ciclo de vida TTL de la peercard **sin tocar crypto/firma** (E02 intacto):

1. **`@zeus/protocol` `peer-card.mjs`** — campo opcional `issuedAt`; fases
   `PEER_CARD_PHASE` (`active` / `expired` / `not_yet_valid` / `malformed`);
   helpers `peerCardPhase` / `peerCardRemainingMs`; `isPeerCardFresh` = fase
   active. Tipos regenerados (`types-build` + `types:generate`).
2. **`@zeus/authority-kit` `issue-peer-card.mjs`** — sella `issuedAt`;
   `resolvePeerCardExpiresAt`; re-exporta ciclo TTL; **no** escala scopes/rol
   hacia más poder (test explícito; guardarraíl #6).
3. **Wiring mínimo `embajador-kit`** — `ttlMs` / `issuedAt` en
   `emitirCredencial`; `consumirCredencial` expone `phase` + `remainingMs`;
   re-export de helpers protocol. Sin dep de authority-kit.
4. Changeset `peercard-ttl-lifecycle.md`. Reporte (este fichero).

**Sin desviación:** cero `webrtc-signaling/**` · cero `peer-card-seat` · cero
hooks firma/ssbId reescritos · f3/f4 no · Z_SDK #4/#5/#6 no cerrados.

## Archivos tocados

(zeus · SHA `3ebfce3` · tip base `bd02d70`)

| archivo | cambio |
| ------- | ------ |
| `packages/engine/protocol/src/peer-card.mjs` | issuedAt + fases TTL |
| `packages/engine/protocol/src/index.mjs` | exports ciclo |
| `packages/engine/protocol/spec/types-build.mjs` + `types/index.d.ts` | tipos |
| `packages/engine/protocol/test/peer-card.test.mjs` | CA TTL |
| `packages/engine/authority-kit/src/issue-peer-card.mjs` | issuedAt + resolveExpires + guardarraíl scopes |
| `packages/engine/authority-kit/src/index.mjs` · `README.md` · test | exports / docs / CA |
| `packages/engine/embajador-kit/src/{emitir,consumir,index,tipos}.mjs` | wiring TTL |
| `packages/engine/embajador-kit/README.md` · test | docs / CA |
| `.changeset/peercard-ttl-lifecycle.md` | bump minor protocol + authority-kit |
| `plan/REPORTES/WP-E01-f2-peercard.md` | este reporte (superproyecto) |

## Worktrees / SHAs

| repo | worktree / rama | SHA |
| ---- | --------------- | --- |
| zeus-sdk | `.worktrees/wp-ee-e01-f2-peercard` · `wp/ee-e01-f2-peercard` | `3ebfce3` (base `bd02d70`) |
| games-library | **no tocado** | `84f9d79` |
| SCRIPT_SDK | rama `wp/ee-e01-f2-peercard` (reporte) | `f86824c` |

Env-check al arranque (rev-parse, nunca `test -d .git`):

```
zeus tip main = bd02d700dc795f81d645684dcad0c7851c395c51  (post HOTFIX-CEGUERA-EE1)
GL            = 84f9d7955059555defe6cfe0bd5ac9ecf3f88548
S_SDK         = 8b5bbe380e03bf6f7a89b7a91a7539c40c3229e7
```

## ∩ A5 (esperada vacía)

Paths A5 (DC-EE-exclusion-paths): `operator-ui/**` · `ciudad/fixtures/federation/**`
· `federation-smoke` · `docs/startpacks.md` · `docs/guide/tuberia-protegida.md` · …

**∩ con diff f2 = vacía** (`INTERSECTION_EMPTY`).

Paths exclusivos E02 no tocados: `webrtc-signaling/**` · `peer-card-seat` ·
hooks firma en peer-card (solo añadidos campos no-crypto).

## Evidencia

### Gates / tests

```
$ npm test -w @zeus/protocol
# tests 28 · pass 28 · fail 0

$ npm test -w @zeus/authority-kit
# tests 15 · pass 15 · fail 0
# (issuePeerCard TTL + no escala scopes)

$ npm test -w @zeus/embajador-kit
# tests 12 · pass 12 · fail 0

$ node scripts/gates/run.mjs
# gates: OK (0 offenders)
```

### CA (ficha WP-E01-f2)

| CA | estado |
| -- | ------ |
| TTL/ciclo verificable (smoke/test) | ✅ protocol + authority-kit + embajador |
| Firma delegada a E02; no reescrita | ✅ cero seat/sign/ssbId mutados |
| Ejes I · II + ceguera | ✅ ver abajo |
| Diff no pisa paths exclusivos E02 | ✅ |
| No escalado automático a poder (#6) | ✅ test + docs; issue #6 **OPEN** (no cerrado) |

### Eje I — extracción con cableado

Consumidor de pack: `@zeus/embajador-kit` (emit/consumir con `ttlMs` /
`phase` / `remainingMs`) y `@zeus/authority-kit` (`issuePeerCard` sella
`issuedAt`). Tests de comportamiento: `peer-card.test.mjs` (fases),
`authority-kit.test.mjs` (TTL), `emitir-consumir.test.mjs` (ttlMs→expired).

### Eje II — destino canónico

Símbolos de ciclo TTL viven en `@zeus/protocol` (`peerCardPhase`,
`peerCardRemainingMs`, `PEER_CARD_PHASE`); authority-kit / embajador-kit
re-exportan o consumen — no redefinen. Destino canónico CredencialEmbajador
sigue en embajador-kit (`destino-canonico.test.mjs` OK).

### Ceguera (regla 14 + DE-I20)

```
# obra tocada — tokens externos / método
rg "WP-E[0-9]|WP-A5" protocol/src/peer-card + authority issue-peer-card + embajador + changeset
→ CEGUERA_FOREIGN_OK count=0

# nativos WP-U* / D-40 / D-20 / Z_SDK #4 intactos (serie hogar + #4)

$ git log -p bd02d70..HEAD -- packages/engine/protocol packages/engine/authority-kit \
    packages/engine/embajador-kit .changeset/peercard-ttl-lifecycle.md
→ LOG_P_CEGUERA_OK count=0  (SCRIPT_SDK|S_SDK|HOLONES|holón|…|WP-E*)

$ node scripts/gates/run.mjs  # tracking-id WP-[A-Z]{1,2}\d · serie WP-U* OK
→ gates: OK (0 offenders)
```

## Auto-revisión (PRACTICAS)

- [x] Diff solo dentro de `ALCANCE_DIFF`: protocol peer-card (no-crypto) ·
      authority-kit issue-peer-card · wiring embajador-kit · tests · changeset ·
      reporte
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; tip base `bd02d70` literal
- [x] Sin fluff; #6 = guardarraíl citado, no cerrado; f3/f4 = `<pendiente>`
- [x] Ejes I · II evidenciados
- [x] Gates ejecutados de verdad
- [x] Commits convencionales
- [x] Diff solo del alcance del WP

## Hallazgos fuera de alcance

- Cableado A5 puerta / verify crypto live en embajador (sigue stub) = A5 / E02
  consumo.
- Niveles federación / escalado a poder = **f3** · Z_SDK #6 (no aquí).
- Visual peercard = **f4**.

## Dudas / bloqueos

Ninguno. Listo para revisión orquestador (sin merge por este worker).

## Cómo probar

```bash
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-ee-e01-f2-peercard
# si @zeus/protocol no resuelve al worktree: junction node_modules/@zeus/protocol → packages/engine/protocol
npm test -w @zeus/protocol
npm test -w @zeus/authority-kit
npm test -w @zeus/embajador-kit
node scripts/gates/run.mjs
```

Smoke manual TTL:

```js
import { issuePeerCard, peerCardPhase } from '@zeus/authority-kit';
const now = Date.now();
const card = issuePeerCard({ roomId: 'R', endpoint: 'http://ep', now, ttlMs: 1000 });
console.log(peerCardPhase(card, now));           // active
console.log(peerCardPhase(card, now + 1000));    // expired
```

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-22 · FF `bd02d70..3ebfce3` → `origin/main`.
∩ A5 = ∅ · gates OK · ceguera `WP-E0`=0 · nativos WP-U* OK.
Z_SDK #6 citado OPEN (no cerrado). Merge orden: f2 antes que A5.
