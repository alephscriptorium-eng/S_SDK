# DECISIONES — sprint-ciudad-real

Espejo operativo de [DE-I19](../../DECISIONES.md). Embajador cerrado.
Padre cola: ítem 3 **CIUDAD-REAL** (GO-C1 · 2026-07-22).

### DC-CR-apertura · 2026-07-22 · **cerrada** (GO-C1)

**Tema:** abrir sprint CIUDAD-REAL tras cierre formal EE-1.

**Decisión:** montar `sprint-ciudad-real/` (patrón city/vida-1/embajador).
Alcance: SEMILLA **§2** + Z05 item **3** ACL (**Z_SDK #5** citar; no
cerrar) + SEMILLA-ARG **§A4**. Briefs candidatos listos; **sin** 🔶 /
despacho hasta vigía **R10**. Proyección = **LOCAL-ONLY**.

**Norte CA:** el mapa dice la verdad del sistema (salud real ↔ barrio);
acciones de juego read-only/idempotentes; capability explícita para
destructivo (Z_SDK #5/#6).

**Vetos:** E_SDK / DE-I8 · reopen ✅ · force-push · claim→acta/SHA ·
cerrar Z_SDK #5/#6 · Z05 4–6 / §6 / trama-agua.

### DC-CR-tick-cero · 2026-07-22 · **cerrada** (gate)

**Tema:** gate e2e entrada completa post-A1.

**Decisión:** fixture `fixtures/tick-cero/` instala `@zeus/protocol@0.3.0`
del canal `npm.scriptorium.escrivivir.co` (no `file:`). Peer externo
SIMULADO = proceso hijo; peercard firmada (`peer-card-seat`) → verificación
puerta → `startpack-ciudad-v0.1.0` default. Dep dura: Z_SDK PR #7 mergeado
+ Release verde.

### DC-CR-hito-amigo · 2026-07-22 · **abierta** (observación)

**Tema:** «primer amigo entra de verdad».

**Decisión:** hito **no bloqueante**, sin WP, sin CA. Documentar fricción
en acta futura cuando ocurra. No condiciona R10 ni merge de C01–C03.

### DC-CR-exclusion-paths · 2026-07-22 · **cerrada** (prep R10)

**Tema:** exclusión mutua tentativa (vigía R10 puede ajustar).

| WP | Exclusivo (tentativo) | No tocar |
| -- | --------------------- | -------- |
| **C01** | GL ciudad health/smoke wiring · docs startpack health | ACL engine C02 · catálogo ids C03 |
| **C02** | zeus `authority-kit` / protocol ACL peer · tests ACL | health C01 · §A4 mapping C03 · Z05 4–6 |
| **C03** | GL mapping edificio↔paquete · catálogo ids | ACL C02 · health probes C01 |

Paralelismo: C01 ∥ C03 posible si paths no se pisan; C02 serie tras shape
C01 o con stubs documentados. ∩ = devolución R10.

### DC-CR-proyeccion-local · 2026-07-22 · **cerrada**

**Tema:** proyección issues.

**Decisión:** no crear issues nuevas ahora. Filas C01/C02/C03 = LOCAL.
Overlap pack C02 = trabajar **Z_SDK #5** (citar; no cerrar). Sync-map
post-apply (regla 17) al cierre de lote.
