# Vocabulario · reuso antes de acuñar

Mandato: AS2 · PROV-O · DCTERMS **antes** de acuñar `hm:` / `lore:`.
Schema.org sólo como suplemento declarado. Registro durable = WP-SDK-L04.

## Prefijos

| prefijo | IRI | uso |
| ------- | --- | --- |
| `as` | `https://www.w3.org/ns/activitystreams#` | Activity / Actor / Object / generator |
| `prov` | `http://www.w3.org/ns/prov#` | Activity · Entity · wasGeneratedBy · wasDerivedFrom · wasAssociatedWith |
| `dcterms` | `http://purl.org/dc/terms/` | created · modified · identifier · title |
| `hm` | `https://logos.local/ns/hm#` | **sólo** huecos sin término W3C/DCMI (acuñación L04) |
| `lore` | `https://logos.local/ns/lore#` | proyecciones de escenario (acuñación L04) |

## Mapa mínimo wire → vista

| concepto LORE-HM | término preferido | acuñar? |
| ---------------- | ----------------- | ------- |
| Activity | `as:Activity` (+ `prov:Activity` cuando hay derivación) | no |
| Peer (actor) | `as:Actor` / `as:Person` | no |
| Artifact | `as:Object` + `prov:Entity` | no |
| Lease / association | `prov:wasAssociatedWith` + metadatos `dcterms:` | no (más `hm:Lease` si hace falta en L04) |
| Digest / identifier | `dcterms:identifier` (valor = digest etiquetado) | no |
| Tool MCP name | **nunca** predicado RDF automático | n/a |

## Regla de acuñación

1. Buscar en AS2 → PROV-O → DCTERMS.
2. Si falta: fila en registro L04 con razón, fecha, firmante.
3. Cero acuñaciones en L03 sin razón: este WP **no** acuña términos nuevos
   en runtime; los IRIs `hm:`/`lore:` del context son **reservas** documentadas.
