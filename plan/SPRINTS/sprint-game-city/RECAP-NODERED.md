# RECAP — La llegada de Node-RED redefine el plan

> 2026-07-20, segunda pasada sobre el BACKLOG. El barrido de workers demostró que Node-RED
> habla el protocolo de zeus sin adaptador ([RECURSOS-LIBS](RECURSOS-LIBS.md) §0). Ese
> hecho asciende a Node-RED de "visor bonito" a **tejido de orquestación de la ciudad**,
> y arrastra dos rescates de material que el primer refinement había infravalorado.

## 1. El giro: de visor central a constelación sin centro

El plan original (Z08 v1) imaginaba UN Node-RED mirando la ciudad. El plan nuevo:
**varios Node-REDs sincronizados con el gamemap, cada uno orquestando un ámbito** —
uno las ciudades/distritos, otro los locales, otro la plaza/ops… — sin nodo central.

- **Población:** el censo de la ciudad (`cantera\CIUDAD\GRAFO\print-agentes.txt`)
  da **169 edificios agénticos** (`.agent.md`/`.chatmode.md`) — no 162. El objetivo es
  verlos a todos **pululando**: cada ciudadano = un cliente del mesh (patrón
  `alephscript-rooms-agent-dummy` como títere mínimo; subflows como plantilla de
  ciudadano) que se anuncia, camina y reacciona.
- **Transparencia para el juego:** la authority NO sabe que los actores viven en
  Node-REDs. Solo ve clients en rooms emitiendo intents con envelope `@zeus/protocol`.
  Node-RED es hosting de población, no una pieza del engine.
- **Efecto colateral virtuoso:** 169 clientes × snapshots completos = el dolor real que
  activa los items 1-2 de Z05 (`GAME_STATE_DELTA`, suscripción por zona) y a término el
  5 (multi-autoridad por distrito ≈ un Node-RED por distrito, simetría natural).

## 2. Rescate 1 — El gestor de caminos de wiki-racer → «viaje» sobre líneas (nuevo WP-Z10)

El primer refinement descartó `WiringAppHypergraphEditor` por no traer visor de grafos.
Veredicto corregido: lo valioso no era el visor, es el **motor de caminos por la wiki**
(máquina de estados de navegación artículo→artículo por enlaces + cache de recorridos en
disco). No se importa el paquete: se **extrae la lógica a librerías reusables** en el
marco de la cache wiki de zeus.

El enganche zeus ya existe y estaba pendiente desde la fundación:
- `@zeus/linea-kit` (WP-U80/U81 ✅): `conectar-satelite` con remotes **wiki**/ATProto/SSB,
  `fetchSnapshot` (materializa wikitext con gate `approve`), `readWikitext`, `segmentar`
  (historial → milestones), curación unificada (`CURATION_STATUSES`).
- Los pythons de referencia de la fundación (`segment_linea`, `fetch_wp_historia`,
  `fetch_snapshot` — DATOS.md §7) viven en **NETWORK-ENGINE** — el "aparcado" del
  refinement 1 resulta ser la casa del concepto original.
- Deuda fundacional explícita: refs `linea:*` no montadas en linea-system
  (BACKLOG-HISTORICO de zeus, "pendiente, no error").

**La síntesis:** un *viaje* = camino origen→destino por un grafo de nodos (wiki hoy,
gamemap ciudad mañana), con candidatos, poda, segmentación del recorrido y cache
materializada como volumen curado. WikiRacer lo probó con Wikipedia; la ciudad lo
necesita para que los 169 ciudadanos caminen con sentido. → [WP-Z10](WP-Z10-viajes-wiki-linea.md).

## 3. Rescate 2 — El Launcher no es ops: es vital para rabbit-spider-horse (Z06 reformulado)

El primer refinement trató `@zeus/mcp-launcher` como comodidad de operador. Corrección:
es **mecanismo de federación**. La cadena r/s/h exige capacidades vivas: el spider federa
por gate RNFP `active`, y el horse necesita su server destino arriba. Sin launcher, nadie
enciende la capacidad que el gate exige — la federación depende de humanos arrancando
terminales.

- Catálogo objetivo prioritario: **linea-system y sus satélites** (configs de
  `conectar-satelite`), solar/forces/ssb, player-MCPs.
- Cierre del círculo con el juego: el intent `wake` de un barrio (Z03) puede tener
  contraparte real — el launcher **arranca de verdad** el server MCP del barrio
  (mundo A juego / mundo B infra). "Despertar un barrio" deja de ser solo un atributo
  en el snapshot.
- Igual que Z10: no se trae `mcp-mesh-sdk`; se hace **crecer zeus** portando el concepto
  (tools `launch/stop/restart/health` de MCPGallery como referencia de diseño).

## 4. Impacto WP por WP

| WP | Antes (refinement 1) | Ahora |
|---|---|---|
| Z08 | Visor/coordinador (un Node-RED) | **Constelación**: N Node-REDs por ámbito + población 169 pululando; el visor es solo la fase 1-3 |
| Z06 | Meta-ops de fleet (comodidad) | **Habilitador r/s/h**: arranca linea-system+satélites; `wake` de barrio con contraparte real; sube de prio 3 → 2 |
| Z10 (nuevo) | (wiki-racer descartado) | Extraer motor de caminos → familia `viaje` en el marco linea-kit/cache-wiki; salda deuda fundacional `linea:*` |
| Z05 | Evoluciones "a demanda" | Items 1-2 con disparador concreto (169 clientes); item 5 alineado con constelación por distrito |
| Z04 | e2e federación con mocks | Sin cambio de alcance, pero el rito RNFP gana sustancia: la capacidad se enciende vía Z06 |
| Z03 | Juego patrón pozo | Sin cambio; los walk de ciudadanos pueden venir de caminos Z10 |
| Z01/Z02/Z07/Z09 | — | Sin cambio (Z09 sigue siendo el switch/clon que la constelación aprovecha) |

## 5. Datos verificados en esta pasada

- Censo agéntico: **169** (`print-agentes.txt`, "Total: 169"; el grep de líneas de agente da 168+cabecera — usar 169 como cifra canónica).
- `@zeus/linea-kit` publicado y aceptado (U80/U81, orquestador 2026-07-17), tools en
  `packages\engine\linea-kit\src\tools\` (`segmentar.mjs`, `conectar-satelite.mjs`, …).
- Pendiente fundacional: refs `linea:*` no montadas (BACKLOG-HISTORICO zeus ~L746);
  pythons de referencia fuera del monorepo (network-engine).
- Regla heredada de U81 que Z10 y Z06 adoptan: **portar el CONCEPTO, no el código**.
