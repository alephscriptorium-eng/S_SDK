# Bridge MCP ↔ Solid

| aspecto | regla | estado |
| ------- | ----- | ------ |
| resources | passthrough por la **misma URI** del recurso Pod/MCP | **verificada** (contrato) |
| tools | actividades que **pueden** producir artefactos en Pod | **verificada** |
| auth | token / capability en **relay** (H transporta; Pod evalúa) | **verificada** |
| tool → RDF | un nombre de tool **nunca** se convierte automáticamente en predicado RDF | **verificada** |

## Mapeo tipado

```text
MCP resource URI  ──passthrough──►  Pod resource URI (igual)
MCP tool invoke   ──►  Activity (AS2)  ──puede►  Artifact en Pod
tool name         ──✗──►  predicado RDF  (prohibido auto)
```

Para aparecer en la vista RDF, un verbo/tool necesita término registrado
(AS2/PROV-O/DCTERMS o acuñación L04 con razón) — nunca el string del tool.
