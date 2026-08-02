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

## Contrato cotejable

Este bloque lo **parsea y coteja** `vocab/scripts/verificar-vocab-l04.mjs`
contra el registro vivo. Si el registro cambia y este bloque no, el gate se
pone rojo. No es prosa decorativa.

```json contrato
{
  "canonicalPath": "NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json",
  "$id": "urn:lore-hm:vocab-registry:v1",
  "entriesNotariadas": 40,
  "activas": 39,
  "retiradas": 1,
  "superficieDeConsumo": "notariadosPorTipoSemantico",
  "indexadoPor": "semanticType",
  "proyeccionLegacy": "w3cEquivalents"
}
```

## Superficie que lee el gate

### Lo que el gate hub hace hoy (y por qué no basta)

El checker hub (`playground/prueba-de-H-M/ci/test-101-ontologia.mjs`,
`gateVocabCoining()`) indexa **por nombre de verbo**:

```js
const equiv = registry.w3cEquivalents[verb];
if (!equiv) continue;   // ← cualquier verbo fuera del mapa queda EXENTO
```

`w3cEquivalents` tiene **9** claves y el playground declara **29** verbos:
la regla anti-acuñación exime a 20 de 29. Y el umbral de justificación es
`coinReason.length > 10`, así que once caracteres cualesquiera valen.

> **Precisión del enrutado.** Las citas de arriba son **fichero, función y
> símbolo**, no línea: los números de línea del repo hub no son verificables
> desde este árbol y no se inventan. Quien aplique el arreglo localiza
> `gateVocabCoining` y dentro de ella el `continue` sobre `equiv` y el umbral
> `coinReason.length`.

### Lo que este registro publica para arreglarlo

`registro.json` → **`notariadosPorTipoSemantico`**: los **39 términos activos**
(de 40 notariados; 1 retirado va en `retirados[]`) indexados por **tipo
semántico**, no por nombre de verbo — y con la **justificación incluida**, que
es la otra mitad de la CA:

```json
"unit.lifecycle.stop": {
  "term": "hm:UnitStop",
  "family": "hm:",
  "namespace": "https://logos.local/ns/hm#",
  "verb": "unit.stop",
  "reason": "AS2 Rec has no Stop activity for unit tipestate; Leave/Delete are not equivalent.",
  "w3cChecked": ["as:Leave", "as:Delete", "as:Remove", "prov:wasEndedBy"]
}
```

Con `reason` y `w3cChecked` en el índice, un gate construido sobre esta
superficie puede comprobar las dos cosas: **«¿está notariado?»** y **«¿estaba
justificada la acuñación?»**. Sin ellos sólo podía comprobar la primera.

El gate del hub debe **indexar por `semanticType`** y recorrer el índice
completo: un verbo cuyo tipo semántico ya está notariado no puede acuñar otro
término, y un verbo sin tipo semántico declarado no queda exento — queda
**rojo**.

Referencia de validación de acuñaciones:
[`../vocab/w3c-conocidos.json`](../vocab/w3c-conocidos.json) — subconjunto
**declarado** de AS2/PROV-O/DCTERMS (272 términos) contra el que se comprueba
que una acuñación no duplique un término existente y que los `w3cChecked[]`
citen candidatos **reales**, no ficción.

`w3cEquivalents` se conserva como **proyección legacy** (compatibilidad con el
gate actual del hub) y el verificador L04 comprueba que sea consistente con
`entries[]`. No es la superficie: es un subconjunto.

### Registro notarial (`entries[]`)

| campo | obligatorio | notas |
| ----- | ----------- | ----- |
| `term` | sí | CURIE (`as:`/`prov:`/`dcterms:`/`hm:`/`lore:`) |
| `family` | sí | `AS2` · `PROV-O` · `DCTERMS` · `hm:` · `lore:` |
| `semanticType` | sí | tipo punteado en minúsculas; **único entre entradas activas** — es la clave anti-acuñación |
| `reason` | sí | prosa argumentada (≥40 chars, ≥6 palabras, vocabulario no repetido); «once puntos» = FAIL |
| `w3cChecked` | sí, si `hm:`/`lore:` | CURIEs W3C concretos evaluados y descartados antes de acuñar |
| `date` | sí | `YYYY-MM-DD` de la decisión |
| `signer` | sí | quién firma la fila |
| `verb` | no | vínculo al verbo playground si aplica |
| `verbAliases` | no | otros verbos que comparten el mismo término |
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
