# Grafo — capa 5

Artefactos de calles/puentes entre edificios.

| Archivo | Qué es |
|---------|--------|
| [`print-agentes.txt`](print-agentes.txt) | Print de rutas `.agent.md` / `.chatmode.md` por root (**169**) |
| [`print-skills.txt`](print-skills.txt) | Print de `SKILL.md` |
| [`handoffs.md`](handoffs.md) / [`handoffs.tsv`](handoffs.tsv) | Capa 5 — `.github_V1` (**513** edges) |
| [`05.1-INDICE.md`](05.1-INDICE.md) | **Capa 5.1** — barrios + Zigurat |
| [`handoffs-barrios.md`](handoffs-barrios.md) | Handoffs YAML en submódulos (**206**) |
| [`handoffs-zigurat.md`](handoffs-zigurat.md) | Edges `alephscript.*` / demos / PREFIX (**51**) |
| [`_gen_capa5.py`](_gen_capa5.py) / [`_gen_capa5_1.py`](_gen_capa5_1.py) | Regeneradores |

## Hallazgos (plaza V1)

| Métrica | Valor |
|---------|------:|
| Edges handoff | 513 |
| Emisores | 64 |
| Destinos únicos | 94 |
| Top emisor | `ox` (25) |
| Top destino | `Ox` (31) — cuidado: casing `Ox` vs `ox` |

### Hubs de la ciudad

```
ox / indice / aleph / periodico / scrum
        │
        ├── bridges plugin_ox_* ──► interiores de locales/naves
        └── banderas / revisor / vestibulo
```

### Gaps de puente (contrastado)

| Hueco | Evidencia |
|-------|-----------|
| ~~Sin `plugin_ox_scriptoriumvps`~~ | ✅ creado en 7.1 |
| `escribiente` sin bridge propio | Entra vía `plugin_ox_wireeditor` |
| Targets con path `.github/plugins/...` | Bridges apuntan a rutas legacy `.github/` aunque el pack vivo es `.github_V1/` |
| Casing inconsistente | `Ox` vs `ox`, `Indice` vs `indice` inflan in-degree aparente |
| Theatrical Zigurat sin YAML handoffs | Normal — grafo en `handoffs-zigurat.md` |
| MCPGallery agentes sin handoffs YAML | 13 agentes, 0 edges en 5.1 |

## Scope / no-scope

- **In (capa 5)**: handoffs YAML bajo `.github_V1`.
- **In (capa 5.1)**: handoffs YAML en barrios + edges lógicos Zigurat → ver [`05.1-INDICE.md`](05.1-INDICE.md).
- Theatrical agents del Zigurat: sin handoffs YAML (0 edges); el grafo útil es `handoffs-zigurat.md`.
