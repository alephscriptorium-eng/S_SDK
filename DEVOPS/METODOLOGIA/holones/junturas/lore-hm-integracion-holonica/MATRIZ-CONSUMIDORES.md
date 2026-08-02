# Matriz de consumidores · LORE-HM

> Quién consume qué, con qué gate y en qué modo (real / simulacro / contingencia).

## Leyenda

| modo | significado |
| ---- | ----------- |
| `real` | provider o package publicado por dueño del dominio |
| `simulacro` | handlers deterministas playground; `mock=true` |
| `contingencia` | sustituible sin cambiar escenario; marcado explícitamente |
| `RO` | solo lectura / citación DS-5 |

## Matriz principal

| consumidor | holón / mundo | qué consume | modo hoy | gate de promoción | estado |
| ---------- | ------------- | ----------- | -------- | ----------------- | ------ |
| S-SDK (07) | notaría | junturas, anclas, pins registry; **no** runtime ajeno | RO + registro | N/A (dueño método) | **verificada** |
| Logos (02) | destino `@logos/lore-hm` | definición lengua desde incubación 04 | **no existe** | Inception Review + 2 consumidores | **hipótesis** |
| E-SDK (03) | sound system | implementa `DocumentMachineProvider` gobernado por lengua | **no existe** (e-sdk vacío al medir 112) | E01, E11, E12, E13 | **verificada** — spike 112 |
| Network-Engine (04) | incubación | protocolo LANGUAGES; árbol `lore-hm` temporal | **no verificado** en L01 | extracción package sin deps runtime | **hipótesis** |
| Zeus (01) | contratos | `@zeus/linea-kit`, `acta-kit`, `linea-system`, `force-system` | parcial | cola B U245–U249 (fuera L01) | **verificada** — `QUEUE-B-ZEUS-TIPADO` |
| Playground (hub) | conformidad | lengua + Zeus + provider E o contingencia | **simulacro** | GHM + verificador 107 | **verificada** — spike 112 |
| Playground | import Onfalo | editoriales RO + manifiesto build-time | **real** (material) | WP-HUB-104 | **verificada** — spike 112 |
| OASIS DocumentMachine | definiciones agente | `.agent.md`, skills FM | RO | no runtime en L01 | **verificada** — spike 112 |
| aleph (05) / constelación (06) | cantera | contenido histórico | RO | no runtime dep | **verificada** |

## E-SDK vs barrio 20 (matriz de confusión prohibida)

| entidad | escala | ¿consume LORE-HM? | estado |
| ------- | ------ | ----------------- | ------ |
| E-SDK (mundo 03) | holón | **sí** — encarna provider | **verificada** |
| distrito `lore-voz` | ciudad cantera | **no** — escenario | **verificada** |
| barrio `document-machine-sdk` | barrio #20 | **no** — pieza dentro de E | **verificada** |
| Bartleby, Cristalizador, … | unidad | operan **dentro** del barrio; no son E-SDK | **verificada** |

## Providers Document Machine

| provider | dueño | modo | sustitución | estado |
| -------- | ----- | ---- | ----------- | ------ |
| `DeterministicDocumentMachineProvider` | playground | contingencia `contingency=true` | por provider E sin cambiar escenario | **hipótesis** — plan §37 |
| Provider real E | E-SDK / DocumentMachineSDK | real | reemplaza contingencia | **decisión pendiente** — obra E |
| Agentes OASIS `.agent.md` | OASIS RO | **no** runtime | prohibido como FM viva (112) | **verificada** |

## Zeus — paquetes tipados (cola B, referencia)

**verificada** — Alcance confirmado en plan §23–28: linea-kit, acta-kit,
linea-system, force-system.

**verificada** — Fuera de lote inicial: lifecycle-kit, story-board-schema,
parte-kit, embajador-kit (incompatibilidad semántica declarada).

**decisión pendiente** — Ejecución en z-sdk swarm; L01 no encola BACKLOG z.

## Playground — unidades y mocks

| pieza | consumidor | modo spike 112 | estado |
| ----- | ---------- | -------------- | ------ |
| VectorMachine | playground | `mock=true` | **verificada** — plan §38 |
| Cadena B→C→P | playground | simulacro handlers | **verificada** — 112 |
| LocalPodProvider | playground | files-first v1 | **hipótesis** |
| Room bilateral H/M | hereda `prueba-de-dos` | simulacro | **hipótesis** |

## Dos consumidores para promoción

**verificada** — Puerta de promoción `@logos/lore-hm`: al menos **E** y
**playground** compilando contra registry (`plan.md` §12, §41).

**decisión pendiente** — Terceros consumidores (zeus MCP, otros x-SDK) fuera
del mínimo de promoción.

## CI y conformidad

| check | mundo | estado |
| ----- | ----- | ------ |
| CI mirror s-sdk | S-SDK | **decisión pendiente** — addenda 113 P0 |
| CI hub pruebas | scriptorium | **verificada** — solo `docs.yml` al medir 112 |
| Verificador externo 107 | playground | **hipótesis** — diseño; no ejecutado en L01 |
