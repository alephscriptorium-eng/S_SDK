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

### DC-CR-embajador-private · 2026-07-22 · **superseded** (antecedente)

**Asiento histórico:** [`bbb29ba`](https://github.com/alephscriptorium-eng/S_SDK/commit/bbb29ba751d953dff19963e30abdad5c3eb51265)
· **no borrar**. **SUPERSEDE** → [DC-CR-kits-foss](#dc-cr-kits-foss--2026-07-22--cerrada-go-c1b)
(corrección vigía **R10.5**).

**Tema (histórico):** `@zeus/embajador-kit` `"private": true` — frontera
anfitrión/peer.

**Decisión (histórico):** permanecía `"private": true` = frontera
anfitrión/peer **DELIBERADA** (no olvido ni deuda técnica). Evidencia:
fixture tick-cero `fixtures/tick-cero/peer.mjs` solo importa
`@zeus/protocol` (`peer-card`, `peer-card-seat`); `puerta.mjs` idem (sin
`embajador-kit`). Seat + peercard viajan en `@zeus/protocol@0.3.0`; el kit
quedaba del lado **anfitrión** (operator-ui / puerta). **Revisar
publicación** solo si **E01-f3** habilita emisión de sub-credenciales por
peers. Evita que un barrido futuro lo re-eleve como olvido.

### DC-CR-kits-foss · 2026-07-22 · **cerrada** (GO-C1b)

**Tema:** política FOSS por clase — kits de juego/contratos vs apps.

**Antecedente:** [DC-CR-embajador-private](#dc-cr-embajador-private--2026-07-22--superseded-antecedente)
@ [`bbb29ba`](https://github.com/alephscriptorium-eng/S_SDK/commit/bbb29ba751d953dff19963e30abdad5c3eb51265)
(**SUPERSEDE**; no borrar). **Corrección vigía R10.5.**

**Decisión:** publicación por **clase**, no por kit aislado:

| Clase | `"private"` | Notas |
| ----- | ----------- | ----- |
| **Kits de juego / contratos** | `false` (**public**) | Superficie SDK de la gamificación p2p; regla 6 city «ningún jugador privilegiado» ([BACKLOG city](../sprint-game-city/BACKLOG.md) §reglas) |
| **Apps / monitores / harnesses** | `true` por defecto | Operator-ui, fixtures, e2e, harnesses de demo |
| **WIP `0.0.0`** | sin cambio | No publish hasta versionado real |

Consecuencia: `@zeus/embajador-kit` y pares de contrato/juego entran al
canal publish cuando el WP de obra (C04) aplique manifest + changeset.
House: [DE-I21](../../DECISIONES.md). Sin tocar ola 1 (C01∥C02).

### DC-CR-cola-v3 · 2026-07-22 · **cerrada** (tick PO R10.6+R11)

> Antecedente: `DC-CR-cola-v3-candidata` (PREP R10.6 · propuesta). Ancla
> legacy `#dc-cr-cola-v3-candidata` → este asiento.

**Tema:** orden de cola post–ola CR-1 / C04 hacia meta-juego.

**Decisión (ratificada · house DE-I19):**

1. **CR-1** (C01∥C02 + gate C03)
2. **C04** kits FOSS / públicos (DE-I21)
3. **C05** ciudadano-agente (peercard en bootstrap MCP · regla 6) —
   **🔶 brief** emitido; **sin despacho** hasta cierre CR-1 (C03 ✅) +
   gate **R12**
4. **PRUEBA-DE-DOS** — hito observación + acta fricción; protagonistas
   custodio + vigía (engloba «primer amigo» / campana)
5. SEMILLA **§6** meta-juego
6. trama-agua

**Nota R11/R12:** R11 = re-verif ola 1 + gate C03 + `npm view` kits C04.
**R12** gatea despacho worker C05 (no este tick).

**Vetos intactos:** E_SDK / DE-I8 · reopen ✅ · force-push · claim→acta/SHA.

House: [DE-I19](../../DECISIONES.md) cola v3 ratificada.
