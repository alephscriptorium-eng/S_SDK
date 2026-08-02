# WP-SDK-L04 · registro-de-vocabulario — reporte worker

| dato | valor |
| ---- | ----- |
| WP | WP-SDK-L04 |
| agente | Worker LORE-HM (swarm LENGUA) |
| fecha | 2026-08-02 |
| rama | `wp/sdk-l04-registro-de-vocabulario` |
| worktree | `C:/S_LAB/wt/s-sdk-wp-sdk-l04` |
| HEAD base | `397a4c5` (tip L03) |
| preflight | worktree orquestado; detector identidad con `READ_ONLY_ROOTS=[]` literal → LOCK calibración (sin efectos previos; obra en wt ya montado) |
| tip entrega | `<pendiente commit>` |
| riesgo de revisión | `independiente` |
| revisor distinto del worker | `sí` · `VEREDICTO_REVISOR: ⏳ pendiente` |
| estado propuesto | listo para revisión adversarial |

## Qué se hizo

Se materializó el registro durable de vocabulario LORE-HM bajo incubación en
`NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json` (JSON machine-readable +
README): filas término|familia|razón|fecha|firmante; acuñaciones hub-101 +
reusos AS2/PROV-O/DCTERMS del wire SOLID; `hm:Lease` retirado con fecha (no
borrado); Schema.org solo suplemento vacío. Contrato de consumo para
WP-HUB-101 en `docs/CONSUMO-HUB-101.md` (path canónico + migración desde stub
`reference/vocab-registry.stub.json`). Checker local
`verificar-vocab-l04.mjs` (falla si se mueve el path). Sin BACKLOG, sin merge
main, sin inflar HOLONES.

## Archivos tocados

| ruta | acción |
| ---- | ------ |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json` | creado (fuente) |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/README.md` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs` | creado |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/docs/CONSUMO-HUB-101.md` | creado (contrato hub) |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/README.md` | modificado (índice + verify) |
| `NETWORK-ENGINE/LANGUAGES/lore-hm/solid/docs/VOCABULARIO.md` | modificado (puntero a L04) |
| `plan/REPORTES/WP-SDK-L04-registro-de-vocabulario.md` | creado (este) |

## Evidencia CA

| CA | evidencia | estado |
| -- | --------- | ------ |
| Una fila por acuñación; cero sin razón | `entries[]` hm:/lore: con `reason` ≥10; checker | **verificada** (script) |
| Gate hub-101 consume este registro, no copia | `docs/CONSUMO-HUB-101.md` + `w3cEquivalents`; path canónico; checker falla si se mueve | **verificada** (contrato + script; cableado hub `<pendiente>` WP hub) |
| Retiro = fecha, no borrado | `hm:Lease` con `retiredDate` + `retireReason` | **verificada** (script) |

## Evidencia checks locales

```text
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs
verificar-vocab-l04: PASS
  path: NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json
  entries: 40 (coined=22 retired=1)
  hub-101: consumir w3cEquivalents de este registro (no stub)

$ # smoke: canonicalPath alterado → FAIL
FAIL: canonicalPath="MOVED/registro.json" ≠ esperado "NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json"
smoke move-detection: PASS

$ node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs
verificar-inception-l02: PASS

$ node NETWORK-ENGINE/LANGUAGES/lore-hm/solid/scripts/verificar-solid-l03.mjs
verificar-solid-l03: PASS
```

Tip feat: `<pendiente>` · rama `wp/sdk-l04-registro-de-vocabulario`.

## Evidencia de riesgo y contrarrevisión

- `CASOS_ADVERSARIALES`:
  - `[automatizado]` acuñación sin razón → FAIL (script)
  - `[automatizado]` path canónico movido / canonicalPath alterado → FAIL
  - `[automatizado]` retirado sin retireReason → FAIL
  - `[manual]` no BACKLOG; no HOLONES inflados; no merge main
- `DEPENDENCIAS_DIRECTAS_VERIFICADAS`: built-ins Node (`fs`/`path`/`url`) en el checker; registro JSON sin deps
- `INSTALACION_LIMPIA`: no aplica (sin package publicable; checker zero-deps)
- `TEST_AUTOMATIZADO_VS_EVIDENCIA_MANUAL`:
  - Automatizado: `verificar-vocab-l04.mjs` + smoke move-detection
  - Manual: contraste stub hub-101 `reference/vocab-registry.stub.json` vs `w3cEquivalents` de este registro (9 verbos)
- `VEREDICTO_REVISOR`: `⏳ pendiente de revisor distinto`

## Auto-revisión

- [x] Diff en `NETWORK-ENGINE/LANGUAGES/lore-hm/{vocab,docs,README,solid/docs/VOCABULARIO}/**` + `plan/REPORTES/WP-SDK-L04-*.md`
- [x] Fuente única; hub documentado para consumir, no copiar
- [x] Sin inflar HOLONES/03 ni package `@logos/lore-hm`
- [x] No BACKLOG / no merge main
- [x] Riesgo independiente → veredicto revisor pendiente

## Hallazgos fuera de alcance

- Cablear resolutor `LORE_HM_VOCAB_REGISTRY` / sibling en `test-101-ontologia.mjs` del repo hub
- Deprecar/borrar stub hub tras ese tip

## Dudas / bloqueos

Ninguno para entrega L04 en s-sdk.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
