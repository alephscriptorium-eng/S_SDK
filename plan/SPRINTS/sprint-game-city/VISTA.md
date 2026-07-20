# VISTA — Vida y caso de uso para zeus-sdk (vista SCRIPT_SDK)

> El marco del sprint: desde SCRIPT_SDK, zeus-sdk y la games-library son submódulos
> propios (`HOLONES\01-mythos\zeus-sdk`, `HOLONES\01-mythos\games-library`). El objetivo
> es **dar vida y caso de uso a la base zeus** — incluso construyendo un pack entero
> previo a aleph-scriptorium. Aleph-scriptorium y su plan 05-06 **no gobiernan este sprint**.
> Los WPs operables viven en [BACKLOG.md](BACKLOG.md).

## 1. La vista

| Antes (encargo desde aleph) | Ahora (sprint desde SCRIPT_SDK) |
|---|---|
| zeus-sdk = "OTRO mundo, gobierno ajeno" | zeus-sdk = **nuestra base**, submódulo en `HOLONES\01-mythos\` |
| Deliverable: un plan/encargo (block3), NO código | Deliverable: **código, packs y datos** en el lado zeus |
| Todo subordinado al hueco 05-06 (juntura, INVENTARIO) | El pack ciudad vale **por sí mismo**; retroalimentar a aleph es opcional aguas abajo |
| Canal único = registry (DS-0) | Consumo directo en disco: los submódulos son hermanos de trabajo |

Cantera de datos: `TEMP\material\CIUDAD\` (24 fichas de barrios, MAPA.md, grafo de 513
handoffs) y `TEMP\material\zeus-notas\` (fleet MCP, agujero negro, monigotil, launcher)
— externa y sin trackear, ver aviso en [README.md](README.md).

## 2. Restricciones que CAEN (no cruzan a este sprint)

| Restricción (lado aleph) | Por qué no aplica aquí |
|---|---|
| DS-0: único canal sancionado entre mundos = registry npm | Gobernanza inter-mundos de aleph. Aquí zeus es submódulo propio; el disco es canal válido. |
| WP-S10: lista negra de `mcp-mesh-sdk` (deps `file:`/tgz) | Higiene interna del árbol aleph. Se puede **leer y portar** el Launcher como referencia sin heredar sus deps. |
| DAS-1 / DAS-2, ratificaciones pendientes, PARTE-005 | Bloqueos del plan aleph. Ningún WP de aquí espera por ellos. |
| Juntura 04-05, INVENTARIO, holones 05-06 | Deuda narrativa/técnica de aleph. Fuera de alcance. |
| "Primero digerir, luego fusionar" (enmienda 2 de block2) | Ordenaba el plan aleph. Aquí el Launcher zeus (Z06) no espera a la digestión de mcp-mesh-sdk. |
| Formato block3 = un único fichero autocontenido | Sustituido por este plan de sprint. |

## 3. Lo que SÍ se conserva (no son restricciones ajenas)

- **Contratos propios de zeus:** engine game-agnostic (D-8); horse nunca lleva bytes
  (SPEC-horse-blobs-v0); conexión externa por `@zeus/protocol` + `@zeus/rooms`
  (namespace `/runtime`, kinds `intent|state|track|ledger`, campo `game`) o
  `@zeus/player-mcp-kit`; roles `player`/`dj`/`operator`.
- **Decisiones del usuario ya tomadas:** doble capa (juego de engine + instancia
  dramaturgo); rabbits = peers canónicos r/s/h; wishlist de engine incluida en el
  trabajo; monigotil default / GLB opt-in; mockdatas centrados en firehose-browser y
  cache-browser; **constelación Node-RED sin nodo central, transparente para el juego**.
- **Límites actuales del engine** (1 autoridad por room, snapshots completos, sin ACL,
  grafo plano): se respetan como punto de partida y se atacan en Z05, no se niegan.

## 4. Historia del plan (dos pasadas)

- **Refinement 1 (workers, 2026-07-20):** barrido de 6 workers sobre WiringEditor,
  WiringAppHypergraphEditor, NETWORK-ENGINE, ScriptoriumVps+OASIS_PUB, registry
  Verdaccio y zeus-sdk. Hallazgo central: **los nodos Node-RED publicados y el
  socket-server de zeus hablan el mismo protocolo** (`@alephscript/mcp-core-sdk`,
  ns `/runtime`) — conexión directa sin adaptador. → [RECURSOS-LIBS.md](RECURSOS-LIBS.md).
- **Recap 2 ([RECAP-NODERED.md](RECAP-NODERED.md)):** Node-RED redefine el plan — de
  visor central a **constelación sin centro** (N Node-REDs por ámbito, 169
  ciudadanos-agentes pululando, transparente para el juego). Dos rescates: el gestor de
  caminos de wiki-racer → familia «viaje» sobre linea-kit (Z10, salda deuda fundacional
  `linea:*`); el Launcher como habilitador de rabbit-spider-horse (Z06 a prio 2).

**El "pack entero previo a aleph-scriptorium"** = track PACK completo (Z01+Z02+Z03+Z04+Z07):
datos que dan vida a los browsers, un startpack publicable, un juego jugable, peers
externos federando y una capa de lectura. Todo vive en el lado zeus; ningún entregable
requiere tocar aleph-scriptorium.

## 5. Drenaje — de dónde viene cada cosa

| Fuente | Qué se drenó | A dónde |
|---|---|---|
| `TEMP\handoff.md` | Diseño juego-ciudad, decisiones usuario, hechos discovery (Dramaturgo, patrón pozo, tap-horse, límites engine) | Z02, Z03, Z04, Z07, §3 |
| `TEMP\block1.md` §5 | Recon zeus verificado: fleet publicada, CI verde, games library | contexto general |
| `TEMP\block1.md` §4 | Censo estados vivo/latente/muerto/roto de las 24 zonas | **como datos** de seeds/mockdatas (Z01, Z02) |
| `TEMP\block2.md` §2 | Idea fuerza de las 6 notas; dato Z_SDK-games-library | Z01–Z06 |
| `TEMP\material\zeus-notas\` 1–5 | Monigotil/GLB, agujero negro MCP↔REST, fleet MCP + puertos, hueco Launcher | Z01, Z05, Z06 |
| `TEMP\material\CIUDAD\` | MAPA.md (topología), 24 fichas, grafo handoffs.tsv (513 edges), censo agéntico **169** | cantera de Z01, Z02, Z08 |
| `WiringEditor\packages\` (aleph, disco) | Nodos `contrib-core`/`dashboard-2-rooms` 0.2.0, flows de ejemplo, notas federación | Z08, Z09, RECURSOS-LIBS |
| `ScriptoriumVps` + `OASIS_PUB` (aleph, disco) | Anatomía deploy nodered, flows server/cliente, switch, deuda | Z09, RECURSOS-LIBS |
| Registry Verdaccio (vivo) | 27 paquetes locales: 21 `@zeus/*`, 4 `@alephscript/*`, 2 node-red | RECURSOS-LIBS §4 |
| `WiringAppHypergraphEditor` (wiki-racer) | Motor de caminos (máquina de estados, candidatos, cache recorridos) — **concepto** | Z10 |
| `NETWORK-ENGINE` | Casa de los pythons fundacionales de líneas (DATOS.md §7) — consulta puntual | Z10 |
| Plan zeus (`plan\REPORTES\briefs\WP-U80/U81`, BACKLOG-HISTORICO) | linea-kit vivo, tools segmentación, deuda `linea:*` sin montar | Z10, RECAP §2 |

**No drenado (se queda al otro lado):** bloqueos DAS, credencial Verdaccio del operador,
limpieza `.tgz`/`file:`, juntura 04-05, INVENTARIO, sync DRY de la ciudad (07.1) — todo
eso es plan de aleph-scriptorium y no condiciona este sprint.
