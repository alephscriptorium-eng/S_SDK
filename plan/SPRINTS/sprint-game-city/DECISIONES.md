# DECISIONES — sprint-game-city

Decisiones del custodio / orquestador propias de este sprint.
Ids estables `DC-GC-*`. El estado canónico de WPs vive en [BACKLOG.md](BACKLOG.md).

## Tomadas

### DC-GC-ceguera-marca · 2026-07-20 · **cerrada**

**Tema:** alcance de la «regla de los dos mundos» (ceguera) tras la revisión
vigía de GC-1 (H2): el scrub del worker Z01 usa el conjunto canónico de
**tokens del método**; el pack embarca `aleph` / `scriptorium` como datos
(nombre de ciudad, barrio, registry).

**Pregunta:** ¿la ceguera prohíbe solo el método (práctica actual) o también
la marca de producto/datos?

**Decisión:** interpretación vigente = **solo el método** (marco / holones /
práctica de gobierno). **`aleph` y `scriptorium` son admisibles** fuera de
cualquier lista negra de ceguera. **No** se abre WP de scrub de clase por
marca. Si en el futuro se quisiera prohibir marca, sería decisión nueva + WP
propio; hoy no.

**Consecuencia:** regla 1 del [BACKLOG](BACKLOG.md) actualizada; hallazgo H2
del vigía cerrado sin remedio de código; Z01 ✅ se sostiene.

### DC-GC-arg-1 · 2026-07-21 · **cerrada**

**Tema:** apertura de ola **ARG-1** (encolar A-16 / valor grande) tras cierre
GC-5 (Z16·Z17 ✅).

**Pregunta:** ¿se abre SEMILLA-ARG como hermana (extiende SEMILLA §2/§6 sin
enmendarlas) y con qué slice?

**Decisión:** sí. Ola **ARG-1** = 🔶 **WP-A01** (§A1 parte-kit) + 🔶
**WP-A02** (§A2 presencia). **§A3** parked «cuando A1 viva». **§A4–§A6**
sin masticar. Contratos/firmas/CA/no-haceres = literales de
[SEMILLA-ARG.md](SEMILLA-ARG.md) (asiento público del despiece A-16).
**No** des-aparca SEMILLA §2–§4/§6, Z05 items 3–6, ni epic embajador.

**Consecuencia:** BACKLOG §Olas + bullets A01/A02/A03; briefs en
`plan/REPORTES/BRIEF-WP-A01-*.md` / `BRIEF-WP-A02-*.md`. Despacho de
workers = paso aparte del orquestador (briefs listos, sin GO inmediato
autónomo).

**Addenda (2026-07-21):** gate «§A3 cuando A1 viva» **satisfecho** (A01 ✅
zeus `c7ec7d0`). Gobierno abre **WP-A03 🔶** +
[BRIEF-WP-A03](../REPORTES/BRIEF-WP-A03-acta-barrio.md). Sin nueva DC;
§A4–§A6 y parked SEMILLA/Z05/embajador sin cambio. Despacho worker =
paso aparte.

### DC-GC-siete-plantas · 2026-07-21 · **cerrada** (mapa; sin WP)

**Tema:** mediar el lore-mapa «siete plantas» (GO-6a) como **mapa de
decisión** — cosmología jugable = holarquía ya registrada (7 plantas, dos
leyes). No encarna obra.

**Pregunta:** ¿se asienta el mapa y se nombran los cinco spinoffs de los
huecos sin abrir WP?

**Decisión:** sí. Mapa canónico:
[MAPA-SIETE-PLANTAS.md](MAPA-SIETE-PLANTAS.md). Las dos leyes (ceguera
ascendente / acceso descendente) = reglas de juego; el `CEGUERA_PATTERN`
del parte ES la «censura del oráculo» ya en producción. **Cinco spinoffs
candidatos nombrados (parked, sin WP):**

| Id | Nombre |
| -- | ------ |
| S-02 | `dialectica-kit` |
| S-03 | `campanas` |
| S-05 | `digestión de incidentes` |
| S-06 | `casa de la federación` |
| S-J | `junturas ejecutables` |

**Consecuencia:** no 🔶 · no §A4–§A6 · no reopen Z05/embajador/SEMILLA
§2–§4/§6. S-03 sigue en [DC-GC-campanas-s03](#dc-gc-campanas-s03--2026-07-21--cerrada-candidata-parked).

### DC-GC-campanas-s03 · 2026-07-21 · **cerrada** (candidata parked)

**Tema:** candidata **CAMPANAS (S-03)** — primera juntura jugable 01↔03
(GO-6b). Las campanas dan voz al parte de plaza.

**Pregunta:** ¿se registra como candidata parked (sin abrir, sin brief)?

**Decisión:** sí, **parked**. Dep técnica **A01 ✅ cumplida** (parte-kit
existe). Condiciones para abrir (**NO ahora**):

1. **Runner verde HOTFIX-ARG-1** (paso 0 — CI+Release tip zeus citados).
2. **Tick custodio** para inflar la ruta reservada `HOLONES/03-emmanuel/`
   (DE-I8: destino `emmanuel-sdk`, remoto por decidir). La candidata **es**
   esa inflación; sin tick no hay apertura.

Brief masticado **al abrir**, contra el parte-kit real ya fusionado — no
ahora.

**Consecuencia:** nota en [BACKLOG](BACKLOG.md) §Candidatos y
[SEMILLA-ARG](SEMILLA-ARG.md). Sin 🔶 · sin WP · sin inflar 03.

**Addenda re-scope · 2026-07-21 (GO gobierno):** se **abre** WP-CAMPANAS con
alcance reducido — el parte suena en operator-ui (clases despertar/degradar/
roto + mute), fuente parte-kit ya fusionado, Zeus-side. **No** se ejecuta
DE-I8 ni se crea E_SDK; la juntura 01↔03 queda como horizonte declarado en
issue #25. Condición (i) HOTFIX-ARG-1 verde ya cumplida. Condición (ii)
DE-I8 **aplazada** (no bloquea este slice). Brief:
[BRIEF-WP-CAMPANAS](../../REPORTES/BRIEF-WP-CAMPANAS-city.md).

---

## Abiertas (custodio)

Ninguna decisión de calibración abierta tras DC-GC-siete-plantas /
DC-GC-campanas-s03 (+ addenda re-scope). Bloqueos operativos → BACKLOG.
DE-I8 sigue pendiente como horizonte (no bloquea CAMPANAS-city).
