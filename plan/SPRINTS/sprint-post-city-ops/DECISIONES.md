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

### DC-PCO-F5-apertura · 2026-07-22 · **cerrada** (GO PO · WP-F5)

**Tema:** montar ola PCO-2 «ciudad instanciable + federación».

**Decisión:** ampliar **`sprint-post-city-ops/`** (no abrir micro-sprint
`sprint-f5-federacion`). Un commit gobierno V2 = **solo territorio F5**
(stubs · briefs · aviso · checklist · nota S04-v2). Paraguas **WP-F5** +
filas/sub-WPs:

| id | foco | despacho |
|---|---|---|
| **F5a** | PUBLICAR lote mesh (changesets + Release + `npm view` C8) | tras R17-city PASS |
| **F5b** | CA estrella e2e DOS CIUDADES registry puro | tras PASS + **F5a ✅** |
| **F5c** | CHECK sidecar→pub oasis | tras PASS · **no bloquea** a/b |

**Sin despacho** hasta gate vigía **R17-city** PASS
([AVISO](REPORTES/AVISO-R17-city.md)).

**Lote F5a (mínimo):** `@zeus/ciudad` · `startpack-ciudad` · `socket-server`
· `mcp-launcher` (des-404 C2). Operator-ui: worker propone publish `dist/`
vs build-doc; **PO sella**. Guía: [DC-CR-kits-foss](../sprint-ciudad-real/DECISIONES.md#dc-cr-kits-foss--2026-07-22--cerrada-go-c1b)
— **ciudad = clase pública semilla**. Tren opcional: `embajador-kit`
`skill/` en tarball (follow-up S04 · sin reopen S04).

**Absorción T1:** fricciones C1–C8 →
[CHECKLIST-F5-C1-C8-T1](REPORTES/CHECKLIST-F5-C1-C8-T1.md) (muertas o
documentadas al cierre F5).

**Vetos:** despachar sin R17-city · E_SDK · cerrar Z#4/#5/#6 · reopen S04 ✅
· mezclar aceptación ✅ ajena en el mismo commit F5 (V2).

### DC-PCO-F5-oasis · 2026-07-22 · **cerrada** (GO PO · WP-F5)

**Tema:** alcance F5c sidecar→pub oasis.

**Decisión:** F5c es check **read-only** / reporte. Protocolos canónicos:

- https://o-sdk.escrivivir.co/PUB/RECOVERY-PROTOCOL
- https://o-sdk.escrivivir.co/PUB/UPGRADE-PROTOCOL

**Config del custodio NO entra al árbol** (ni secretos, ni `.env` pub).
Si pub/sidecar inaccesible desde la estación → `<pendiente>` honesto con
evidencia de intento. **F5c no bloquea** aceptación ni despacho de F5a/F5b.

### DC-PCO-S04-v2-parked · 2026-07-22 · **cerrada** (GO PO · WP-F5)

**Tema:** follow-up mapa «federar tu ciudad».

**Decisión:** candidato **S04-v2** queda **parked** post-F5 (tras F5b ✅
preferible). **No** reabrir S04 ✅. Citar `o-sdk.escrivivir.co/PUB` en el
mapa futuro. Nota:
[NOTA-S04-v2-parked](REPORTES/NOTA-S04-v2-parked.md).

### DC-PCO-F5a-operator-ui · 2026-07-22 · **cerrada** (sello PO = **B**)

**Tema:** `@zeus/operator-ui` — ¿publish tarball o build documentado?

**Propuesta worker F5a** ([reporte](REPORTES/WP-F5a-publish-mesh.md) §C6):

| opción | resumen |
|---|---|
| **A · publish con `dist/`** | `private:false` + `dist/` en Release; usable `npm i` C8 |
| **B · build-doc (recomendada)** | permanece `private:true`; documentar `npm run build:operator-ui` |

**Sello PO:** **B** (build documentado). `operator-ui` permanece
`private:true`; no publish C8. Receta canónica: `npm run build:operator-ui`
→ `npm run start:operator-ui` (mapa embajador
`skill/reference/donde-esta-cada-cosa.md` · tip zeus `d0d9de1` ·
embajador-kit@0.1.3). C6 = **documentada**.

### DC-PCO-F5a-parcial · 2026-07-22 · **cerrada** (city-orq · revisión)

**Tema:** aceptación parcial F5a + F5c; F5b parked.

**Decisión:**

1. **F5a ⚠️ parcial** — zeus C8 ✅ (`socket-server`/`mcp-launcher`/`embajador-kit`
   tip `c13546b` · Release 29931698137). GL tip `29edb7e` = prep
   `ciudad` public **sin** publish (secrets Actions vacíos). **No** ✅ total.
2. Custodio/PO: sembrar `NPM_*` (o token) en
   `Z_SDK-games-library` — [AVISO](REPORTES/AVISO-F5a-GL-NPM-secrets.md).
3. **F5c ✅** — protocolos PUB 200; sidecar→pub `<pendiente>` honesto
   (Docker + config custodio fuera); **no bloquea** a/b.
4. **F5b** permanece **parked** · **NO despachar** hasta F5a ✅ total
   (ciudad/startpack en C8).

### DC-PCO-F5a-total · 2026-07-22 · **cerrada** (city-orq · R18.5)

**Tema:** F5a ✅ total tras secrets GL + publish + sello B.

**Decisión:**

1. Secrets GL `NPM_USERNAME`/`NPM_PASSWORD` sembrados (custodio).
2. Workflow `Publish mesh ciudad` · tip GL `d178364` · run
   **29934850683** success · `npm view` ×3:
   `startpack-kit@0.1.0` · `startpack-ciudad@0.1.0` · `ciudad@0.1.0`.
3. Sello operator-ui = **B** (DC arriba).
4. **F5a ✅ total** → despacho F5b autorizado.

### DC-PCO-F5-cierre · 2026-07-22 · **cerrada** (city-orq · camino R19)

**Tema:** cierre paraguas F5 + aviso R19.

**Decisión:** F5a ✅ · F5b ✅ · F5c ✅ →
[ACTA-F5-cierre-2026-07-22](REPORTES/ACTA-F5-cierre-2026-07-22.md) ·
[AVISO-R19](REPORTES/AVISO-R19.md). No cerrar Z#4/#5/#6 · E_SDK veto.

### DC-PCO-R19-cierre · 2026-07-22 · **cerrada** (city-orq · VIGÍA R19 PASS)

**Tema:** cierre formal arco city · carril IDLE.

**Decisión:** VIGÍA R19 = **PASS** →
[ACTA-R19-cierre-arco-2026-07-22](REPORTES/ACTA-R19-cierre-arco-2026-07-22.md)
· sync-map **final** regla 17 · BACKLOG/README **CERRADO / IDLE** ·
S04-v2 parked · Z#4/#5/#6 OPEN · **cero despachos**. Constancia:
«día de método impecable» (frase vigía). Nota cruzada: o-bosque 0.5.1
= acta final su carril (city no escribe backlog bosque).
