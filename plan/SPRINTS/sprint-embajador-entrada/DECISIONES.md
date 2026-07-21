# DECISIONES — sprint-embajador-entrada

Espejo operativo de [DE-I19 v2](../../DECISIONES.md). City cerrado.
Padre cola: ítem 2 **EMBAJADOR-ENTRADA** (GO-E1 · 2026-07-22).

### DC-EE-apertura · 2026-07-22 · **cerrada** (GO-E1)

**Tema:** abrir sprint EMBAJADOR-ENTRADA; promover briefs BORRADOR → 🔶.

**Decisión:** emitir 🔶 + BRIEF definitivos para el **corte de entrada**:
**WP-E02** · **WP-E01-f1** · **WP-E01-f2** · **WP-A5**. E01-f3/f4
siguen en paraguas (**no** 🔶). Proyección de WPs nuevos del corte =
**LOCAL-ONLY** hasta cierre de lote + sync-map post (regla 17); umbrellas
casa ya existen: S_SDK **#22** (E01 paraguas) · **#23** (E02). Overlap
pack: trabajar **Z_SDK #4** (citar); **no cerrar** Z_SDK **#5** / **#6**.

**Norte CA (vinculante):** «un amigo entra con su peercard y arranca con
`startpack-ciudad-v0.1.0` como base default».

**Secuencia (aún NO despachar):** E02 primero (identidad = dep dura de
peercard); E01-f1 ∥ E02 si paths no se pisan; E01-f2 **tras** E02; A5 tras
deps del corte (o stubs documentados). Siguiente gate = **vigía R7**
pre-despacho.

**Vetos:** E_SDK / DE-I8 · niveles automáticos nunca escalan a poder
(Z_SDK #6 = guardarraíl diseño f2/f3) · city cerrado · CIUDAD-REAL / §6 /
trama-agua parked · claim→acta/SHA · no `gh issue create` de WP bajo
umbrella.

**Consecuencia:** briefs en `plan/REPORTES/BRIEF-WP-E02-*.md` ·
`BRIEF-WP-E01-f1-*.md` · `BRIEF-WP-E01-f2-*.md` · `BRIEF-WP-A5-*.md`.
Workers **no** despachados hasta R7 PASS.

### DC-EE-exclusion-paths · 2026-07-22 · **cerrada** (R7)

**Tema:** exclusión mutua de paths para lote paralelo / secuencia.

| WP | Exclusivo (zeus salvo nota) | No tocar |
| -- | --------------------------- | -------- |
| **E02** | `packages/engine/protocol/src/peer-card.mjs` (hooks firma / ssbId en card) · `webrtc-signaling/src/{peer-card-gate,ssb-private-signaling,signaling-service,socket-room-signaling}.mjs` (handshake ssbId + verify) · tests/e2e peer-card/ssb · `docs/guide/external-handshake.md` | `embajador-kit/**` · `issue-peer-card.mjs` (TTL/campos f2) · f3/f4 · GL engine |
| **E01-f1** | paquete nuevo `packages/engine/embajador-kit/**` (+ lock workspace) | crypto/handshake E02 · `issue-peer-card` f2 · Z17 reopen · GL |
| **E01-f2** | `packages/engine/authority-kit/src/issue-peer-card.mjs` · campos/TTL/ciclo en protocol **no-crypto** (coordinar merge tras E02) · wiring mínimo consumidor kit | firma/ssbId (E02) · niveles (f3/#6) · visual (f4) |
| **A5** | cableado superficies **existentes**: rabbits/Z04 · webs guía · tracker cita · operator-ui Z17 entrada · ref `startpack-ciudad-v0.1.0` — **ninguna superficie nueva**; paths exactos en reporte | crypto E02 · kit greenfield f1 salvo import · f3/f4 · E_SDK |

**Paralelismo autorizado:** E01-f1 ∥ E02. **Serie:** E02 → E01-f2 → (A5 con stubs OK si f2 aún no merged). ∩ ficheros = devolución R7.

### DC-EE-proyeccion-local · 2026-07-22 · **cerrada**

**Tema:** proyección issues del corte.

**Decisión:** no crear issues nuevas de WP ahora. Umbrella:
- **#23** ↔ WP-E02 (obra = Z_SDK #4 citar)
- **#22** ↔ E01 paraguas; f1/f2/A5 = filas LOCAL bajo #22 hasta apply+sync-map post-lote

Prep (sin apply):

| id local | issue casa | nota |
| -------- | ---------- | ---- |
| WP-E02 | #23 | ya OPEN |
| WP-E01-f1 | LOCAL → #22 | no alta |
| WP-E01-f2 | LOCAL → #22 | no alta |
| WP-A5 | LOCAL → #22 | no alta |
| E01-f3/f4 | #22 parked | sin 🔶 |
