# Consumo WP-HUB-101 · registro de vocabulario L04

> Este contrato vive en **s-sdk** porque el worker L04 no puede editar el
> repo hub. El gate de `WP-HUB-101` debe apuntar aquí — **consumir, no copiar**.

## Path canónico (fuente)

| campo | valor |
| ----- | ----- |
| Repo | `alephscriptorium-eng/S_SDK` (este árbol) |
| Path relativo a raíz | `NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json` |
| `$id` | `urn:lore-hm:vocab-registry:v1` |
| WP productor | `WP-SDK-L04` |

Cualquier otra ruta (incluido el stub del hub) es **no canónica**.

## Superficie que lee el gate

El checker hub (`playground/prueba-de-H-M/ci/test-101-ontologia.mjs`) usa
hoy `gateVocabCoining(verbs, registry)` y espera:

```js
registry.w3cEquivalents[verb] === {
  term: "as:Join" | "prov:…" | "dcterms:…",
  namespace: "<IRI>",
  family: "AS2" | "PROV-O" | "DCTERMS"
}
```

Esa clave **ya está** en `registro.json` → `w3cEquivalents`. El hub debe
cargar **este archivo** (o un enlace/resolución hacia él), no reescribir el
mapa a mano.

Además, `entries[]` es el registro notarial completo:

| campo | obligatorio | notas |
| ----- | ----------- | ----- |
| `term` | sí | CURIE (`as:`/`prov:`/`dcterms:`/`hm:`/`lore:`) |
| `family` | sí | `AS2` · `PROV-O` · `DCTERMS` · `hm:` · `lore:` |
| `reason` | sí | ≥ 10 chars; acuñaciones sin razón = FAIL |
| `date` | sí | `YYYY-MM-DD` de la decisión |
| `signer` | sí | quién firma la fila |
| `verb` | no | vínculo al verbo playground si aplica |
| `retiredDate` | sí (nullable) | `null` = activo; fecha = retirado (no borrar) |
| `retireReason` | si retirado | por qué se retiró |

## Protocolo de resolución (hub → s-sdk)

Orden de preferencia (fail-closed si ninguno resuelve):

1. **Env** `LORE_HM_VOCAB_REGISTRY` = path absoluto o relativo al registro
   canónico de s-sdk.
2. **Sibling clone** (dev local): si existe
   `<hub-root>/../s-sdk/NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json`
   o el path del worktree s-sdk calibrado por el orquestador.
3. **Git submodule / sparse pin** (opción futura): pin del tip L04+ que
   contenga el registro; el gate lee el fichero del pin, no un JSON
   embebido en hub.

Prohibido: `cp registro.json → reference/vocab-registry.json` como fuente
de verdad. Una copia local solo puede ser **caché regenerable** con
checksum/ancla al tip s-sdk.

## Migración desde el stub hub-101

| hoy (stub) | mañana (L04) |
| ---------- | ------------ |
| `playground/prueba-de-H-M/reference/vocab-registry.stub.json` | este `registro.json` |
| `_productionRegistry: "WP-SDK-L04:…"` | cumplido — esta entrega |
| `_expectedFuturePath: "reference/vocab-registry.json"` | **incorrecto como fuente**; como máximo symlink/resolutor hacia el path canónico s-sdk |

Pasos recomendados en el repo hub (fuera de este WP):

1. Cambiar `registryPath` en `ci/test-101-ontologia.mjs` para resolver vía
   el protocolo de arriba (env → sibling → pin).
2. Dejar el stub con `_deprecated: true` + puntero al path canónico, o
   borrarlo tras el tip que ya resuelve L04.
3. Probar el CA del backlog: **mover/ausentar** el registro canónico → el
   gate hub se pone rojo (no puede acuñar a ciegas).

Prueba local en s-sdk (este WP):
`vocab/scripts/verificar-vocab-l04.mjs` falla si el path canónico no existe
o si `canonicalPath` del JSON no coincide — simula el “mover el registro”.

## Cómo verificar compatibilidad sin editar hub

```bash
# En s-sdk (este árbol):
node NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs

# Smoke opcional (si hay clone hub + env):
# LORE_HM_VOCAB_REGISTRY=<abs>/NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json \
#   node playground/prueba-de-H-M/ci/test-101-ontologia.mjs
```

El smoke opcional queda `<pendiente>` de un WP hub que cablee el resolutor;
este WP solo publica la fuente y el contrato.
