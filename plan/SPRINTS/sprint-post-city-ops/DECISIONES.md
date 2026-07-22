# DECISIONES — sprint-post-city-ops

Carril city · GO PO R15 · +2 WPs · 2026-07-22. Contrato v1.1 (DE-I22).

### DC-PCO-particion-v2 · 2026-07-22 · **cerrada** (GO PO · R15)

**Tema:** dónde viven T1 y S04 respecto de webs-post-city.

**Decisión:** abrir micro-sprint **`sprint-post-city-ops/`** (no meter T1
bajo webs: no es «web»; no reabrir PREP de `sprint-ciudad-real` ya ✅).
Partición V2:

| sprint | foco | gate |
|---|---|---|
| `sprint-webs-post-city` | docs sites WW-Z∥G∥S | R15-city |
| `sprint-post-city-ops` | runtime/acta T1 + skill S04 | R15-T1-S04 |

Paths tentativos ∩ = ∅ con WW-* (`docs/**` vs runtime/acta/skill).

**Vetos:** despachar sin R15-T1-S04 · mezclar commits gobierno webs+ops
en el mismo tick de aceptación (V2) · tocar bosque BACKLOG.

### DC-PCO-apertura · 2026-07-22 · **cerrada** (GO PO · R15)

**Tema:** montar ola PCO-1.

**Decisión:** emitir 🔶 + BRIEF definitivos para **T1** y **S04**.
**Sin despacho** hasta gate vigía **R15-T1-S04** PASS
([AVISO](REPORTES/AVISO-R15-T1-S04.md) · protocolo R7/R10). S04 queda
**parked** hasta T1 ✅ (acta de fricción = insumo obligatorio).

**Norte T1:** flujo vivo authority + operator-ui + actor MCP con kits
**DEL REGISTRY** (C8); CA diferido C05 «campana suena»; entregable =
**ACTA DE FRICCIÓN** (qué costó / confunde / falta) → insumo S04.
**Sin commits de obra** salvo el acta.

**Norte S04:** skill usuario lado zeus — peercard + dónde-está-cada-cosa
con URLs estables anti-deprecated (DRY semver); ceguera regla 1 en repo
producto; destilar acta T1.

### DC-PCO-S04-reasignado · 2026-07-22 · **cerrada**

**Tema:** contrato v1.1 — S04 era bosque → city.

**Origen:** `sprint-skills-bosque` ola B-3 · «parked / re-asignable»
([BACKLOG bosque](../sprint-skills-bosque/BACKLOG.md) fila S04 · issue
hermano [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14)).

**Decisión:** **re-asignar** S04 al carril city (este sprint). **No** editar
el BACKLOG bosque (regla de oro 2: solo bosque-orq escribe allí). Encolar
nota vía [NOTA-S04-REASIGNADO](REPORTES/NOTA-S04-REASIGNADO-bosque.md)
para que bosque-orq marque S04 parked/re-asignado city.

### DC-PCO-proyeccion · 2026-07-22 · **cerrada** (política sprint)

**Tema:** proyección issues.

**Decisión:**

1. **Durante el sprint:** **LOCAL-ONLY** — no `gh issue create` filas
   nuevas. Markdown local = fuente (regla 15).
2. Citar [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14)
   (B-3) y Z_SDK #4/#5/#6 **sin** duplicar ni cerrar OPEN ajenos.
3. Sync-map post-apply (regla 17) en [`.sync-map.json`](.sync-map.json).

**Mapa especulativo pre-apply = devolución.**
