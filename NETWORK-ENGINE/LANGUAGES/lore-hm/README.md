# LORE-HM · incubación (WP-SDK-L02)

> **Incubación en s-sdk** bajo protocolo de lenguajes del holón 04
> (`NETWORK-ENGINE/LANGUAGES/`). **No** es package publicable. **No** introduce
> dependencias del runtime OASIS. Namespace candidato futuro: `@logos/lore-hm`
> (holón 02) — ver [`docs/NAMESPACE.md`](docs/NAMESPACE.md).

## Mandato

Definir la lengua común H/M (anfitrión / operador Future Machine) con contrato
de inception P1–P5, ontología nuclear de **exactamente cinco** primitivas, y
demostración de semántica no reducible a config plana.

| atributo | valor | estado |
| -------- | ----- | ------ |
| WP | WP-SDK-L02 | **verificada** |
| Package npm | ninguno (incubación) | **verificada** |
| Destino post-puerta | `@logos/lore-hm` (origen lo decide custodio) | **hipótesis** |
| Dependencias runtime OASIS | cero | **verificada** |
| Dossier L01 (RO conceptual) | `DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/` | **verificada** |

## Árbol

| ruta | función |
| ---- | ------- |
| [`docs/P1-P5.md`](docs/P1-P5.md) | contrato inception respondido |
| [`docs/PUERTA-PROMOCION.md`](docs/PUERTA-PROMOCION.md) | gates antes de extraer package |
| [`docs/NAMESPACE.md`](docs/NAMESPACE.md) | `@logos/*` candidato, sin repo |
| [`src/primitives.ts`](src/primitives.ts) | Peer, Unit, Lease, Activity, Artifact |
| [`src/projections.ts`](src/projections.ts) | Pod, Línea, Grafo, Universo, Corto, Barrio, Document Machine |
| [`src/tipestate.ts`](src/tipestate.ts) | phantom states + transiciones legales |
| [`demos/tipestate-vs-flat/`](demos/tipestate-vs-flat/) | regla imposible en config plana |
| [`scripts/verificar-inception-l02.mjs`](scripts/verificar-inception-l02.mjs) | check local |

## Ontología nuclear (conteo exacto = 5)

1. `Peer` — sujeto que actúa; H/M son **roles/capacidades**, no tipos de ser
2. `Unit` — agente o máquina operable
3. `Lease` — autorización temporal y revocable
4. `Activity` — hecho causal dentro de la ceremonia
5. `Artifact` — entidad producida o consumida

Todo lo demás (Pod, Línea, Grafo, Universo, Corto, Barrio, Document Machine) es
**proyección**, no primitiva.

## Verificación local

```bash
node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs
```

Falla si el conteo de primitivas ≠ 5 o si falta la demo tipestate vs flat.

## Herencia

- L01 dossier ✅ (tip base de esta rama)
- Spike 112: FM no corre — la lengua define el contrato del simulacro
- Verde **local** hasta espejo CI
