# DECISIONES — sprint-webs-post-city

Carril city · GO PO R15-plan · 2026-07-22. Contrato v1.1 (DE-I22).

### DC-WW-apertura · 2026-07-22 · **cerrada** (GO PO · R15-plan)

**Tema:** abrir sprint webs post-city (narrativa de las 3 webs).

**Decisión:** montar `sprint-webs-post-city/` (patrón city). Emitir 🔶 +
BRIEF definitivos para **WW-Z** · **WW-G** · **WW-S**. **Sin despacho**
hasta gate vigía **R15-city** PASS (AVISO-R15-city · protocolo R7/R10).
Partición V2: no tocar `sprint-skills-bosque/` (bosque S03/S05b ∥).

**Norte:** copy público destilado de CANTERA + lo publicado (skill
`site-web`); cero invención; cero promesas sin sello.

**Vetos:** E_SDK/DE-I8 · reopen ✅ · cerrar Z_SDK #4/#5/#6 · force-push ·
despachar sin R15-city.

**Hermano ops (∥):** [`sprint-post-city-ops`](../sprint-post-city-ops/)
T1+S04 · gate R15-T1-S04 (DE-I25) — no mezclar con WW-*.

### DC-WW-absorcion-W2 · 2026-07-22 · **cerrada**

**Tema:** micro-WP W2 encolado en R14.5.

**Origen:** residual de W1 (H1.6) — hallazgo en
[`WP-W1-catalogo-ciudad.md`](../../REPORTES/WP-W1-catalogo-ciudad.md):
nav/sidebar aún **sin** página dedicada `/games/ciudad` (solo fila
`/startpacks`). Encolado R14.5 (PO/vigía); **no** existía stub WP-W2
suelto en BACKLOG.

**Decisión:** **ABSORBER** W2 dentro de **WW-G** (una sola pasada por la
web de games). **No** despachar W2 suelto. Evidencia:
[ABSORCION-W2](REPORTES/ABSORCION-W2.md).

### DC-WW-proyeccion · 2026-07-22 · **cerrada** (política sprint)

**Tema:** proyección issues.

**Decisión:**

1. **Durante el sprint:** **LOCAL-ONLY** — no `gh issue create` filas
   nuevas. Markdown local = fuente (regla 15).
2. **Al cierre:** trazo grueso = **1 umbrella** S_SDK (patrón
   [DE-I23](../../DECISIONES.md) / DC-CR-proyeccion-arco) que agrupe
   WW-Z∥WW-G∥WW-S con evidencia ✅→closed; sync-map post-apply (regla 17)
   en [`.sync-map.json`](.sync-map.json).
3. Citar issues vivos (#27 · #30 · #22/#23 · Z_SDK #4/#5/#6) **sin
   duplicar** ni cerrar OPEN ajenos.

**Mapa especulativo pre-apply = devolución.**

### DC-WW-cierre-futuro · 2026-07-22 · **cerrada** (aceptación WW-1)

**Tema:** cierre de ola (R15-city PASS + obra ✅).

**Decisión:** patrón GO-5/GO-6 ejecutado — Docs×3 + C8 nav
(`/games/ciudad` 200 · z-sdk puertas · s-sdk vigía) + tabla regla 16 en
[ACTA-WW](../../REPORTES/ACTA-WW-webs-post-city-cierre-2026-07-22.md) +
umbrella [#32](https://github.com/alephscriptorium-eng/S_SDK/issues/32)
CLOSED + sync-map post-apply. Tips: zeus `2917634` · GL `2802f6a`.
**listo-R16-webs = sí.** Vetos: no T1/S04 · Z#4/#5/#6 OPEN.
