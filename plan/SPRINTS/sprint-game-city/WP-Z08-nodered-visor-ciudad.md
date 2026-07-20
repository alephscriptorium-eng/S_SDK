# WP-Z08 — Constelación Node-RED: visor, coordinación y población de la ciudad

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | VISOR / 2 |
| depende de | — (fases 1-3 contra zeus tal cual); f6 población plena empuja Z05 items 1-2; sinergias: Z01 (browsers), Z03 (juego), Z09 (switch/clon), Z10 (caminos) |
| piezas | `node-red-contrib-alephscript-core@0.2.0` + `node-red-dashboard-2-alephscript-rooms@0.2.0` (Verdaccio; fuentes en `WiringEditor\packages\`) — ver [RECURSOS-LIBS](RECURSOS-LIBS.md) §0-2 |
| enganche clave | **mismo protocolo**: los nodos hablan `@alephscript/mcp-core-sdk` y el socket-server de zeus (`packages\mesh\socket-server`, :3017, ns `/runtime`, auth `{token:'dev-secret',room,user}`) es un wrapper del mismo SDK. Conexión directa, sin adaptador. |
| redefinición | ver [RECAP-NODERED](RECAP-NODERED.md) §1 — de un visor central a **constelación sin centro** |

## Objetivo

**Orquestar la ciudad en una constelación de Node-REDs sincronizados con el gamemap** —
sin nodo central. Cada instancia Node-RED orquesta un ámbito (un Node-RED las
ciudades/distritos, otro los locales, otro la plaza/ops…) y hospeda a su población de
ciudadanos-agentes. Meta: los **169 ciudadanos** del censo
(`cantera\CIUDAD\GRAFO\print-agentes.txt`) pululando por el mapa.

**Regla de transparencia:** el juego no sabe que los actores viven en Node-REDs. La
authority solo ve clients en rooms emitiendo intents con envelope `@zeus/protocol`
(`{v, game, kind, from, ts}`). Node-RED es hosting de población y ops, no pieza del engine.

## Topología

```
[NR distritos]──┐            169 ciudadanos repartidos por ámbito
[NR locales]────┼──/runtime──► socket-server zeus :3017 ──► authority juego ciudad
[NR plaza/ops]──┘            (el juego solo ve clients+intents)
```

- Cada Node-RED puede además embeber su propio sub-mesh (`alephscript-rooms-server`,
  modo `managed-port`) para tráfico interno de su ámbito; hacia el juego, todos son
  clientes del fabric `/runtime`.
- Simetría a futuro: un Node-RED por distrito ≈ sharding de autoridad por distrito
  (item 5 de Z05). No se fuerza ahora; la constelación lo prefigura.

## Fases / entregables

1. **Oreja** — un Node-RED (1880) + `contrib-core` contra `ws://localhost:3017`
   `/runtime` (`dev-secret`): escucha `state|track|ledger` + `SET_STATE` de `PUBLIC_ROOM`
   y de la room de un juego (heartbeat 5 s de la authority). Plantillas:
   `WiringEditor\examples\flows\`.
2. **Ojo** — widget `dashboard-2-alephscript-rooms` con clients/rooms del mesh en vivo.
3. **Ciudad completa** — flows `http request` agregando las REST de zeus:
   `console-monitor :3014 /snapshot`, `editor-ui :3012 /api/mcp/servers`,
   `firehose-browser :3016` / `cache-browser :3015`. Dashboard: un grupo por distrito;
   taxonomía de canales `sys/app/ui/agent/game` (patrón 3d-monitor).
4. **Mano** — coordinar: function-nodes componen envelope y emiten intents
   `walk`/`wake` (Z03/pozo); `operator-bridge` (lib pura) portado a function-node.
5. **Ciudadano** — plantilla de ciudadano (subflow): announce con identidad del censo
   (nombre del `.agent.md`), presencia, walk periódico, reacción a snapshot. Base:
   patrón `alephscript-rooms-agent-dummy`. Rutas de paseo: caminos de Z10 cuando exista;
   random-walk por calles mientras tanto.
6. **Población y constelación** — reparto de los 169 por ámbito según censo
   (`print-agentes.txt` agrupa por zona); N instancias Node-RED (mínimo: distritos +
   locales + plaza/ops), cada una levantando su población. **Población por lotes con
   techo explícito** (aporte 2 feedback aleph): arrancar con `POBLACION_MAX` ≈ 24
   (uno por zona) y subir por lotes **solo mientras** snapshot/latencia aguanten;
   el techo vigente se anota en el reporte del WP. El dolor de snapshots completos
   con el techo alcanzado es la **señal esperada** que abre formalmente Z05 items
   1-2 — no un bug del juego ni de este WP. Los 169 plenos son meta de Z05+f7, no
   CA de f6.
7. **Wishlist zeus←node-red** (alimenta Z05/Z09): republicar nodos sobre SDK `^1.5.0`;
   documentar `catalog:servers` y envelope para consumidores externos; token real por
   room (ownership, Z05 item 3); opcional `@zeus/nodered-kit` (subflow ciudadano +
   plantillas empaquetadas) si las fases 5-6 lo justifican.

## Criterios de aceptación

- [ ] F1-F3: un dashboard muestra rooms + fleet MCP + un volumen, refrescando en vivo.
- [ ] F4: un inject-node dispara un intent válido que la authority acepta.
- [ ] F5: un ciudadano-subflow con identidad del censo se anuncia y camina; su rastro
      se ve en snapshot y dashboard.
- [ ] F6: ≥2 instancias Node-RED de ámbitos distintos con población simultánea; escala
      probada hacia 169 (aunque sea por lotes) y el juego **no distingue** el origen de
      los clients (transparencia verificada: la authority no tiene código Node-RED-aware).
- [ ] Cero forks: nodos desde Verdaccio (o `npm install` de fuentes WiringEditor);
      carencias → wishlist, no fork local.

## Notas

- El visor NO sustituye a browsers ni 3d-monitor: es la capa de ops/población cableable.
- Con el switch de Z09, cualquier instancia apunta a zeus local (:3017), al mini-clon
  (:3010) o al VPS (`wss://rooms.scriptorium.escrivivir.co`) cambiando `serverUrl`.
- 169 clientes con snapshots completos van a doler: eso es señal esperada (dispara Z05),
  no fracaso del WP.
