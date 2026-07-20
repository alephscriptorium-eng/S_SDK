# BACKLOG — sprint-game-city

> Solo el orquestador del sprint escribe aquí (regla de oro 2). Workers: un WP = un
> chat = una rama `wp/gc-<id>-<slug>` (+ worktree si hay paralelo); reporte con la
> plantilla del skill; NO editar este fichero.
> Estados: ⬜ pendiente · 🔶 brief emitido / en curso · ✅ aceptado · ⛔ bloqueado.

## Olas

**Ola GC-1 (arrancable hoy, sin dependencias):** Z01 · Z02 · Z08-f1..3 · Z10 (lib pura) · Z09
**Ola GC-2 (sobre GC-1):** Z03 · Z06 · Z08-f4..5
**Ola GC-3 (federación y población):** Z04 · Z07 · Z08-f6..7 · Z05 (por items, cuando duela)

## WPs

| WP | Título | Track | Prio | Estado | Depende de | Ejes CA (skill `reference/ejes-ca.md`) |
|---|---|---|---|---|---|---|
| [Z01](WP-Z01-mockdatas-browsers.md) | Pack mockdatas ciudad → firehose/cache-browser | PACK | 1 | ⬜ | — | I (consumidores reales: los 2 browsers arrancados) |
| [Z02](WP-Z02-startpack-ciudad.md) | `@zeus/startpack-ciudad` (seeds desde MAPA.md) | PACK | 1 | ⬜ | — | I (engine carga seeds); IV cuando `ciudad-model` sea compartido con Z01 |
| [Z03](WP-Z03-juego-ciudad.md) | Juego de engine `ciudad` (patrón pozo) | PACK | 2 | ⬜ | Z02 | IV diferido (segundos clientes del catálogo de intents: Z04 y Z08) |
| [Z04](WP-Z04-rabbits-rsh.md) | Rabbits r/s/h como actores externos (e2e) | PACK | 2 | ⬜ | Z03 (y Z06 para capacidad real) | IV (el peer externo ES el segundo cliente del contrato rooms/protocol) |
| [Z05](WP-Z05-engine-evoluciones.md) | Evoluciones de engine (deltas, zonas, ACL, loader, sharding) | ENGINE | 3 | ⬜ | disparo: Z08-f6 | IV por item; II si un item sustituye mecanismo vigente (destino canónico) |
| [Z06](WP-Z06-mcp-launcher.md) | `@zeus/mcp-launcher` — habilitador r/s/h + meta-ops | OPS | 2 | ⬜ | — | I (consumidor real: linea-system+satélite arrancados por tool call) |
| [Z07](WP-Z07-dramaturgo-ciudad.md) | Instancia dramaturgo `ciudad` (capa lectura) | PACK | 4 | ⬜ | Z03 (ledger) | — (CA propios del kit: validador story-board) |
| [Z08](WP-Z08-nodered-visor-ciudad.md) | Constelación Node-RED: visor + coordinación + población (169) | VISOR | 2 | ⬜ | — (f1 hoy) | IV (Node-RED = segundo cliente independiente del contrato `/runtime`) |
| [Z09](WP-Z09-miniclon-vps-rooms.md) | Mini-clon local VPS Node-RED + pago deuda rooms | OPS | 2 | ⬜ | — | I (los nodos 0.3.x republicados con consumidor real: el clon los instala) |
| [Z10](WP-Z10-viajes-wiki-linea.md) | «Viaje»: gestor de caminos wiki → lib sobre linea-kit | ENGINE | 2 | ⬜ | — (adaptador gamemap espera Z02/Z03) | I (consumidor real: adaptador/ciudadanos); II en modo concepto (destino canónico de cada pieza extraída de wiki-racer; el origen queda intacto como referencia) |

## Reglas del sprint (además de las del skill)

1. **Regla de los dos mundos:** cero nombres del marco/holones dentro de entregables
   que aterricen en zeus-sdk/games-library (paralela a la "regla de los dos juegos" de
   PRACTICAS zeus §1.11). Este plan puede nombrar lo que quiera; los paquetes no.
2. **Portar el concepto, no el código** (heredada de WP-U81 zeus): wiki-racer,
   MCPLauncherServer y los pythons de NETWORK-ENGINE son referencia, nunca dependencia.
3. **Transparencia para el juego** (Z08): la authority no lleva código Node-RED-aware;
   si un WP lo necesitara, es señal de diseño roto — parar y reabrir el WP.
4. **Cantera → repo:** ningún runtime lee `TEMP\material\` — los generadores (Z01/Z02)
   copian/transforman a datos versionados del repo destino.
5. Contexto histórico y decisiones de vista: [VISTA.md](VISTA.md) y
   [RECAP-NODERED.md](RECAP-NODERED.md). Catálogo técnico: [RECURSOS-LIBS.md](RECURSOS-LIBS.md).
