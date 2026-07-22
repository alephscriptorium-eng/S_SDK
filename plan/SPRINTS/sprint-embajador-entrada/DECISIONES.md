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
| **A5** | **Árbol dominante Z17-zeus** `zeus-sdk/.worktrees/wp-ee-a5-puerta`. Paths: `packages/mesh/operator-ui/{serve.mjs,projects/dev-app/src/app/{zeus-operator-bridge.service.ts,app.ts,operator-hud.component.ts},fixtures/**,package.json,README.md}` · **satélite Z04-GL** `packages/ciudad/fixtures/federation/{peer-external,demo-peer}.mjs` · `federation-smoke.mjs` · `test/federation.test.mjs` · `packages/ciudad/README.md` · `docs/startpacks.md` · **satélite webs/S_SDK** `docs/guide/tuberia-protegida.md` · `plan/REPORTES/WP-A5-puerta.md`. Ref `startpack-ciudad-v0.1.0`. **Ninguna superficie nueva.** Deps: E02+f1 **reales** (no stubs). | **f2:** `authority-kit/**` · `protocol/src/peer-card.mjs` · **E02:** `webrtc-signaling/**` · `docs/guide/external-handshake.md` · **f1:** `embajador-kit/**` salvo import · `startpack-ciudad/**` · `ciudad/src/**` · f3/f4 · E_SDK |

**Paralelismo autorizado:** E01-f1 ∥ E02. **Serie:** E02 → E01-f2 → A5.
A5 exige E02+f1 en tip (**firma+kit reales; no stubs**). f2 preferible
merged; A5 solo consume peercard — no implementa f2. ∩ ficheros = devolución R7.

### DC-EE-A5-paths · 2026-07-22 · **cerrada** (gobierno micro ola 1 margen)

**Tema:** pinear árbol dominante + paths exactos WP-A5 (inequívoco).

**Decisión:** 3 repos máx — (1) **Z17-zeus dominante**
`HOLONES/01-mythos/zeus-sdk` · (2) **Z04-GL**
`HOLONES/01-mythos/games-library` · (3) **webs/S_SDK** `MUNDO_RAIZ`
(`docs/guide` + reporte). Brief canónico:
[`BRIEF-WP-A5-puerta.md`](../../REPORTES/BRIEF-WP-A5-puerta.md). Frontera:
A5 = operator-ui / docs / GL federation fixtures; f2 = authority-kit +
protocol peercard; E02 = signaling + `external-handshake.md`.

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

### DC-EE-frontera-citas · 2026-07-22 · **cerrada** (GO custodio)

**Tema:** ids de tracking en frontera (plan vs obra) — espejo operativo
de [DE-I20](../../DECISIONES.md).

**Decisión:** en `plan/` de mundos vecinos, ids ajenos **tolerados** si
anclan C9 a artefacto público existente; en obra
(`packages/`+`e2e/`+`kits/instances/`) **prohibidos** sin excepción.
ENTREGA no introduce ids nuevos en prosa. Caso fundante: `WP-I60` citado
por zeus U145/U146 (tolerado). Vigía: excepción conocida, no re-elevar.
Gate orquestador: PRACTICAS δ12 (`WP-[A-Z]{1,2}\d` pre-merge).
