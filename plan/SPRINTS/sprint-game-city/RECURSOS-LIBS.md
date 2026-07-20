# RECURSOS-LIBS — Librerías reusables para el visor/coordinador Node-RED

> Resultado del barrido de workers (2026-07-20) sobre WiringEditor, WiringAppHypergraphEditor,
> NETWORK-ENGINE, ScriptoriumVps + OASIS_PUB, el registry Verdaccio y los enganches de zeus-sdk.
> Alimenta WP-Z08 (visor) y WP-Z09 (mini-clon VPS).

## 0. EL HALLAZGO CENTRAL — protocolo compartido

Los nodos Node-RED y el socket-server de zeus están construidos sobre el **mismo SDK**
(`@alephscript/mcp-core-sdk`) y hablan el **mismo wire**:

| Aspecto | Valor común |
|---|---|
| Transporte | Socket.IO, namespace `/runtime` |
| Handshake | `CLIENT_REGISTER {usuario,sesion,type,features}` → `CLIENT_SUSCRIBE {room}` |
| Mensajería | `ROOM_MESSAGE {event,room,data,from,timestamp}` · `GET_SERVER_STATE`/`SET_SERVER_STATE` |
| Auth | `{token, room, user}` (shared-secret por room) |

**Consecuencia:** un Node-RED con `node-red-contrib-alephscript-core` se conecta **tal cual**
al socket-server de zeus (`packages\mesh\socket-server`, puerto **3017**, secreto dev
`dev-secret`). Zeus no reimplementa transporte; solo añade el envelope tipado de
`@zeus/protocol` (`{v, game, kind, from, ts}`, kinds `state|intent|track|ledger`) que un
function-node puede componer.

Única fricción de versiones: los nodos publican contra SDK `^1.4.0`; zeus ya usa `^1.5.0`
(publicado 2026-07-12). Republicar los nodos sobre 1.5.0 es parte de la deuda (WP-Z09).

## 1. Piezas Node-RED (fuentes en `C:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\`)

| Pieza | Versión (local=publicada) | Qué da | Reuso | Esfuerzo |
|---|---|---|---|---|
| `node-red-contrib-alephscript-core` | 0.2.0 | 3 nodos: config (`serverUrl`,`namespace`,`authToken/Room/User`), client, format — cliente genérico del protocolo | **Alto** — la boca del visor hacia zeus y hacia el VPS | Bajo |
| `node-red-dashboard-2-alephscript-rooms` | 0.2.0 | Config 3 modos (`managed-port`/`external`/`same-origin`), server node que **embebe el mesh** (`SocketIoMeshLogics`, puerto 3010), agente dummy, **widget Vue Dashboard-2** de rooms/clients en vivo | **Muy alto** — es a la vez el monitor y el mini-mesh embebido | Bajo-medio (`same-origin` roto, conocido) |
| `node-red-contrib-alephscript` (legacy) | 0.1.0 | 12-13 nodos: canales app/sys/ui + orchestrator + format (RxJS) | Medio — el patrón de 3 canales sirve de diseño para el coordinador; código desalineado (SDK 1.2.0 instalado vs `^1.3.0`) | Medio-alto |
| `ORCHESTRATOR\` (staging dentro de core) | — | 8 nodos copiados del legacy + `plan.md` de refactor no ejecutado; NO registrados en package.json | Medio — diseño del routing, no código activo | Alto |
| `node-red-gamify-ui` | 0.1.0 | App Angular 19: discovery multi-instancia Node-RED + routing iframe por canal | Medio (patrón), stack aparte | Alto |
| `node-red-contrib-alephscript-escribiente` / `-firehose` (Bluesky) | 0.1.0 | Transcripción audio / consumo AT-proto | Bajo para el visor (otros dominios) | — |
| `examples\flows\*.json` (11+5 flows) | — | Plantillas: bot, multi-canal, orchestrator, cross-room, dashboard | Medio — arranque rápido de flows | Bajo |

Notas de estado: sin tests en core/rooms (`echo 'No tests yet'`); docs raíz (ARCHITECTURE,
NODE_REFERENCE, CHECKLIST) solo cubren el legacy y están desactualizadas; los README de
core/rooms sí están al día.

## 2. Superficies zeus para el visor (rutas en `HOLONES\01-mythos\zeus-sdk`)

| Superficie | Puerto | Endpoint / canal | Qué da al visor |
|---|---|---|---|
| **socket-server** (`packages\mesh\socket-server`) | **3017** (`ZEUS_PORT_SCRIPTORIUM`) | `/runtime` Socket.IO; relay de `state|intent|track|ledger`, `SET_STATE`, `catalog:servers` | El bus vivo de la ciudad; auth dev: `{token:'dev-secret', room:'PUBLIC_ROOM', user}` |
| Autoridades de juego (games-library) | — (vía 3017) | snapshot `state` cada 5 s (`HEARTBEAT_MS`, `pozo\src\authority.mjs:26-49`) | Latido por juego/room (`ARG_DELTA`, etc.) |
| **console-monitor** | **3014** | `GET /snapshot` REST sin auth (composite session+decks+health+servers+events) + MCP `player://*` | El "todo en una llamada" para un dashboard |
| **editor-ui** | **3012** | `GET /api/mcp/servers` (+`/:id/tools|resources|prompts`) | Catálogo MCP vivo de la fleet |
| **firehose-browser** / **cache-browser** | **3016** / **3015** | `GET /api/browse|file|posts|stats` / `GET /api/lineas` — todo GET, sin auth | Contenido de volúmenes DISK_01/DISK_02 (los de Z01) |
| linea-firehose (MCP disk) | **3008** | `POST /mcp` | Firehose de disco como MCP |
| operator-bridge (`packages\mesh\operator-bridge`) | — (lib pura) | `state`/`ledger` → AlephMessage, sin red | **Portable a un function-node** para proyectar snapshots |
| 3d-monitor | 3019 | cliente de `/runtime`; clasifica canales `sys/app/ui/agent/game` | Referencia de clasificación de tráfico para el dashboard |

Volúmenes: `VOLUMES\volumes.json` los declara **readonly** y las APIs de los browsers son
GET puras — un flow Node-RED lee por REST; escribir es siempre por filesystem (generador Z01).
Grep: **cero menciones a node-red dentro de zeus-sdk** — el visor es territorio virgen.

## 3. El switch local ↔ VPS (no hay flag único; 3 niveles)

| Nivel | Fichero | Campo/Var | VPS | Local |
|---|---|---|---|---|
| Servidor rooms | `ScriptoriumVps\node-red-projects\rooms-mvp-candidate.flow.json` (nodo `alephscript-rooms-config`) | `mode` / `managedHost` / `managedPort` | `managed-port` / `127.0.0.1` / `3010` | igual, o `external` |
| Cliente federado | `ScriptoriumVps\node-red-projects\pub-room-client.flow.json:13` (nodo `alephscript-core-config`) | **`serverUrl`** | `wss://rooms.scriptorium.escrivivir.co` | `ws://localhost:3010` (clon) o `ws://localhost:3017` (**zeus**) |
| Env contenedor / cliente | compose + `~/.node-red/.env.rooms` | `ROOMS_BIND_HOST`, `ROOMS_SECRETS_FILE`, `ROOMS_DEFAULT_ROOM` (`ROOMS_LAB`) · `ROOMS_USER/ROOMS_ROOM/ROOMS_SECRET` | rutas `/srv/...`, `/run/secrets/...` | rutas locales |

El flow referencia secretos vía `$(ROOMS_SECRET)` (env-var syntax de Node-RED) — nunca en claro.
`COPIA_NODE_RED_settings.js` de WiringEditor es el settings stock, sin switch.

## 4. Registry Verdaccio (`npm.scriptorium.escrivivir.co`) — 27 paquetes locales

- **21 `@zeus/*`** (engine+mesh publicados) · **4 `@alephscript/*`** (`mcp-core-sdk` 1.3/1.4/**1.5.0**,
  `core-browser` 1.2.0, `angular` 1.2.1, `skills-scriptorium` 0.3.4) · **2 node-red**
  (`-core` 0.2.0, `-rooms` 0.2.0, ambos 2026-05-09, deps `^1.4.0`).
- `@zeus/rooms@0.1.0` ya consume `mcp-core-sdk@^1.5.0` → los node-red van una versión por detrás.
- Endpoints útiles: packument `GET /<pkg>`; búsqueda solo-local `/-/verdaccio/data/search/<term>`
  (la `/-/v1/search` ahoga lo local con el proxy de npmjs).

## 5. Descartes y aparcados (veredictos corregidos en el recap — ver [RECAP-NODERED](RECAP-NODERED.md) §2)

| Codebase | Veredicto |
|---|---|
| `WiringAppHypergraphEditor` (wiki-racer) | ~~Descartado~~ → **Rescatado parcialmente (WP-Z10)**: como *visor de grafos* no aporta nada (sin d3/cytoscape/vis, sin Socket.IO, sin `@alephscript/*`; "HypergraphEditor" es aspiracional). Pero su **gestor de caminos wiki** sí: `src\juego.ts` (máquina de estados de navegación), `src\scraper\engine.ts` (candidatos por enlaces), `src\utils\cache.ts` (cache de recorridos, `CRIPTA\tree.json`). Se extrae el concepto a librería sobre linea-kit; el paquete no se importa. |
| `NETWORK-ENGINE` (transmedia-system) | **Aparcado con matiz**: plataforma metalingüística propia (bun, `edge-*`: mcp, pubsub, graphql, graphdb; mongo+graphdb docker), no habla protocolo alephscript — sigue sin ser pieza del visor. PERO es la **casa de los pythons de referencia** de las líneas (`segment_linea`, `fetch_wp_historia`, `fetch_snapshot` — `zeus-sdk\plan\DATOS.md` §7) que U81 portó como concepto. Consulta puntual para Z10; federación futura vía MCP. |

## 6. Anatomía VPS (para WP-Z09, resumen)

- Dos stacks compose unidos por red externa `oasis-pub-scriptorium_oasis_pub_net` y un solo
  edge Caddy (en `OASIS_PUB`). El servicio `nodered` (`ScriptoriumVps\PATTERN-DOCKER\`)
  lleva **el mesh rooms in-process en 3010** (alias `scriptorium-rooms` → proxy
  `rooms.scriptorium.escrivivir.co`, wss `/runtime`); `/dashboard/rooms` = Dashboard 2
  (`ui-base /dashboard` + `ui-page /rooms`) del flow `rooms-mvp-candidate`.
- **Trampa clave:** el Dockerfile copia `install-contribs.mjs` pero **no lo ejecuta** — los
  contribs se instalaron a mano en el contenedor vivo (RUNBOOK "Caveat de persistencia").
- Perfil `mcp` (mcp-devops) apagado; espera monorepos (`MCPGallery`, `WiringEditor` en
  `/opt/aleph/`) que no viven en esos árboles.
- Lo único que cerró de verdad en el VPS: **rooms** (validado 2026-05-09). Firehose-node sin
  backend, mcp-devops apagado, contribs sin hornear = la deuda.

## 7. XState 5 en zeus (precedente + doctrina — para WP-Z12)

- **Ya en el monorepo:** `player-ui\src\session-machine.mjs` (+test) — `setup()`,
  sesión `idle→preparada→activa→cierre`, deck actors
  `empty→loading→cued→playing→degraded`. xstate 5 ya es dependencia; Z12 no añade dep
  nueva.
- **Doctrina de referencia (concepto, no código):** constitución XState de
  NETWORK-ENGINE (`INSTRUCTIONS\LAYER_0\XSTATE.instructions.md`) — actor-first,
  `setup()`+`createActor()`, eventos = hechos, jerarquías por `spawnChild`/ActorSystem,
  checklist anti-legacy (0 `interpret(`/`Machine(`) **adoptada como gate de CA en Z12**.
- **Máquina implícita a portar como concepto:** mesh vieja `MCPLauncherServer.ts` /
  `mcp-mesh-sdk` (`ServerStatus`, `intentionalStops`, `restartCount`, health polls,
  catálogo `app.config.ts`, degradación diagnosticada de Prolog). El bug del campo
  muerto (`capabilities` vs `capabilitiesCheck`) NO se hereda.
