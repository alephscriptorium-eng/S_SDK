# Vocabulario LORE-HM · registro durable (WP-SDK-L04)

Fuente única de decisiones de vocabulario para la incubación LORE-HM.

| archivo | rol |
| ------- | --- |
| [`registro.json`](registro.json) | machine-readable: término · familia · razón · fecha · firmante |
| [`scripts/verificar-vocab-l04.mjs`](scripts/verificar-vocab-l04.mjs) | check local (CA + path canónico) |
| [`../docs/CONSUMO-HUB-101.md`](../docs/CONSUMO-HUB-101.md) | contrato de consumo para el gate WP-HUB-101 |

## Familias

| familia | significado |
| ------- | ----------- |
| `AS2` | reuso ActivityStreams 2.0 |
| `PROV-O` | reuso PROV-O |
| `DCTERMS` | reuso Dublin Core Terms |
| `hm:` | acuñación namespace H/M |
| `lore:` | acuñación proyecciones de escenario |

Schema.org **sólo** como suplemento declarado en `schemaOrgSupplement[]` (vacío en v1).

## Reglas

1. **Una fila por término acuñado** (`family` ∈ `hm:`|`lore:`) con `reason` no vacía.
2. **Cero acuñaciones sin razón** — el checker falla si falta o es corta.
3. **Retiro ≠ borrado** — setear `retiredDate` + `retireReason`; la fila permanece.
4. El gate hub-101 **consume este JSON**, no una copia local del stub.

## Path canónico

```text
NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json
```

Mover o renombrar este archivo sin actualizar el contrato + checker = **FAIL**.

## Verificación

```bash
node NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs
```
