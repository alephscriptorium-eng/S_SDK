# WP-E02 · privacidad-federacion — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-E02 (ola EE-1) |
| fecha | 2026-07-22 |
| rama | `wp/ee-e02-privacidad-federacion` (zeus) |
| commits | `25a57a1704946e00781cff7e56c5cb99e38a3e7f` |
| eje(s) CA | I · IV + ceguera (regla 14) |
| estado propuesto | listo para revisión |
| overlap pack | [Z_SDK #4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) — citado; **no cerrado** |
| umbrella casa | S_SDK #23 |

## Qué se hizo

Se cableó la extensión SSB del peer-card (D-20 paso 3 / Z_SDK #4) sin tocar
`embajador-kit/**` ni `issue-peer-card` TTL (f1/f2):

1. **`ssbId` en handshake** — campo opcional en `makePeerCard`; propagación
   en mensajes gated; `SsbPrivateSignalingService` exige `ssbId` por defecto
   (amarra al feed `userId` / whoami al `joinRoom`).
2. **Firma de tarjeta viajera** — hooks canónicos en `@zeus/protocol`
   (`travelingPeerCardPayload` / `attachTravelingSeat`) +
   `signTravelingPeerCard` / `verifyTravelingPeerCard` (ed25519,
   `node:crypto`) en `@zeus/protocol/peer-card-seat`. El torno
   `assertSignalingPeerCard` verifica si hay `seatSignature` y **rechaza**
   si falla; `requireSeatSignature` la hace obligatoria.
3. Docs: `docs/guide/external-handshake.md` + README webrtc-signaling.
4. Sin `package-lock.json`. Sin cerrar Z_SDK #4/#5/#6.

## Archivos tocados

(zeus · SHA `25a57a1`)

| archivo | cambio |
| ------- | ------ |
| `packages/engine/protocol/src/peer-card.mjs` | ssbId / seatSignature + hooks canónicos |
| `packages/engine/protocol/src/peer-card-seat.mjs` | creado — sign/verify Node |
| `packages/engine/protocol/src/index.mjs` + `package.json` + types + types-build | exports / tipos |
| `packages/engine/protocol/test/peer-card.test.mjs` | CA firma + ssbId |
| `packages/engine/webrtc-signaling/src/peer-card-gate.mjs` | torno ssbId + seat |
| `packages/engine/webrtc-signaling/src/signaling-service.mjs` | handshake ssbId |
| `packages/engine/webrtc-signaling/src/ssb-private-signaling.mjs` | requireSsbId + wire |
| `packages/engine/webrtc-signaling/src/socket-room-signaling.mjs` | wire ssbId |
| `packages/engine/webrtc-signaling/src/index.mjs` + types + test + README | exports / CA |
| `docs/guide/external-handshake.md` | sección federación SSB |
| `.changeset/wp-e02-privacidad-federacion.md` | bump minor protocol + signaling |

## Evidencia

```
npm test -w @zeus/protocol
# tests 27 # pass 27 # fail 0

npm test -w @zeus/webrtc-signaling
# tests 22 # pass 22 # fail 0
# (incluye requireSsbId + seat signature reject + sendOffer propagates ssbId)

gh issue view 4 --repo alephscriptorium-eng/Z_SDK → state OPEN (no cerrado)
#5 OPEN · #6 OPEN

Env brief GO-E1:
  zeus HEAD base 1086392 · tip obra 25a57a1
  GL 84f9d79 · S_SDK a1c7adc
```

### Eje I — extracción con cableado

Consumidor de producción del pack: `@zeus/webrtc-signaling` (torno +
`SsbPrivateSignalingService` / `SocketRoomSignalingService`) usa
`ssbId` + `verifyTravelingPeerCard`. Test de comportamiento:
`peer-card-gate.test.mjs` (propagación handshake + rechazo firma).

### Eje IV — segundo cliente

1. Carril socket (`SocketRoomSignalingService` + `abstractMessageToWire`).
2. Carril SSB (`SsbPrivateSignalingService` + DM `webrtc-signal`).
Ambos ejercitan el mismo torno / contrato de card.

### Ceguera (regla 14)

Árbol (paths de alcance, `grep -c`):

| token | count |
| ----- | ----- |
| SCRIPT_SDK | 0 |
| S_SDK | 0 |
| juntura | 0 |
| holón / holarquía | 0 |

Historial reachable: `git log -1 -p` del tip `25a57a1` — mismos tokens
método/marco = 0. Marca aleph/scriptorium: OK (DC-GC-ceguera-marca).

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: sí (protocol peer-card +
  webrtc-signaling listados + docs guide + reporte; sin embajador-kit /
  issue-peer-card / BACKLOG / sync-map / package-lock)
- [x] Cero árboles copiados de otros mundos: sí
- [x] Sellos con fuente; Z_SDK #4 citado OPEN: sí
- [x] Sin fluff / futuro sin `<pendiente>`: ACL #5 y niveles #6 fuera
- [x] Ejes I · IV evidenciados: sí
- [x] Gates ejecutados de verdad: unit protocol + webrtc-signaling
- [x] Commits convencionales: `feat(protocol,webrtc-signaling): …`
- [x] Diff solo del alcance del WP: sí

## ∩ f1 (GATE pre-merge)

Paths E02 tocados — **ninguno** es `embajador-kit/**` ni `package-lock.json`.
Lista para verificar ∩ vacío con f1:

```
packages/engine/protocol/src/peer-card.mjs
packages/engine/protocol/src/peer-card-seat.mjs
packages/engine/protocol/src/index.mjs
packages/engine/protocol/package.json
packages/engine/protocol/spec/types-build.mjs
packages/engine/protocol/types/index.d.ts
packages/engine/protocol/test/peer-card.test.mjs
packages/engine/webrtc-signaling/src/peer-card-gate.mjs
packages/engine/webrtc-signaling/src/signaling-service.mjs
packages/engine/webrtc-signaling/src/ssb-private-signaling.mjs
packages/engine/webrtc-signaling/src/socket-room-signaling.mjs
packages/engine/webrtc-signaling/src/index.mjs
packages/engine/webrtc-signaling/types/index.d.ts
packages/engine/webrtc-signaling/test/peer-card-gate.test.mjs
packages/engine/webrtc-signaling/README.md
docs/guide/external-handshake.md
.changeset/wp-e02-privacidad-federacion.md
```

`package-lock.json`: **no tocado**.

## Cómo probar

```bash
cd HOLONES/01-mythos/zeus-sdk   # o worktree wp-ee-e02-…
git checkout wp/ee-e02-privacidad-federacion
npm test -w @zeus/protocol
npm test -w @zeus/webrtc-signaling
```

Demo mínima (Node):

```js
import { makePeerCard, roleScope } from '@zeus/protocol';
import {
  generateSeatKeyPair,
  signTravelingPeerCard,
  assertSignalingPeerCard
} from '@zeus/webrtc-signaling';

const keys = generateSeatKeyPair();
const signed = signTravelingPeerCard(
  makePeerCard({
    roomId: 'R', endpoint: 'ssb:oasis', token: 't',
    scopes: [roleScope('player')], expiresAt: Date.now() + 60_000
  }),
  keys.privateKey,
  keys.ssbId
);
console.log(assertSignalingPeerCard(signed, {
  requireSsbId: true,
  requireSeatSignature: true
}));
```

## Hallazgos fuera de alcance

- `issuePeerCard` (authority-kit) aún no adjunta `ssbId`/firma — cableo
  natural de **E01-f2** post-merge E02.
- Visor browser: verify seat queda Node-side en el torno signaling; no se
  abrió puente Web Crypto en este corte.

## Dudas / bloqueos

Ninguno. Worktree remove: orquestador (Windows).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
