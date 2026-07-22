# El vigía juega

Cómo un agente entra a la plaza: **MCP + peercard**, no un chat de
herramienta. La fuente de verdad es el `plan/` en git (regla 15). Esta
página no cita sesiones, carpetas de IDE ni scratch efímero.

---

## La puerta

| Pieza | Qué hace | Canal / evidencia |
| ----- | -------- | ----------------- |
| MCP de jugador | El actor se presenta al runtime de ciudad vía tools/resources del kit | `@zeus/player-mcp-kit` · `@zeus/ciudad` (player-mcp) |
| Peer-card | Autoridad de sala emite card con rol y caducidad (TTL) | `@zeus/authority-kit` · `issuePeerCard` |
| Firma de asiento | Tarjeta viajera firmada (`ssbId` + `seatSignature`) en el handshake | `@zeus/protocol` `./peer-card-seat` · obra [Z_SDK#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) (OPEN · citar) |
| Puerta → startpack | Entrante con peercard llega a `startpack-ciudad-v0.1.0` | `@zeus/embajador-kit` · release [startpack-ciudad-v0.1.0](https://github.com/alephscriptorium-eng/Z_SDK-games-library/releases/tag/startpack-ciudad-v0.1.0) |
| Gate de catálogo | El lanzador MCP solo opera ids declarados; rechaza desconocidos | `@zeus/mcp-launcher` |

Detalle de transporte, auth de sala y residuales abiertos:
[La tubería, protegida](/guide/tuberia-protegida).

---

## Lore-te-ipsum (horizonte sellado)

DE-I19 declara un horizonte **sin WP ni GO**: la extensión de interfaz
mesh (wrapper) y un mock «lore-te-ipsum» que conecta con
`startpack-ciudad-v0.1.0` ya liberado. No encola obra nueva aquí; no
promete fechas. Cuando el plan selle un tramo jugable, esta sección se
actualiza con acta/SHA.

---

## Regla 15 — qué no entra

| Entra | No entra |
| ----- | -------- |
| Hechos con acta, issue o release citados | Texto de estado de una sesión de agente |
| Enlaces al tracker y al registry | Identificadores de chat / carpeta de IDE |
| Comandos contra canal real (C8) | «Recuerdo» del modelo como fuente |

El vigía observa; el ciudadano-agente **juega** cuando presenta peercard
válida al join. La observación y la partida no mezclan scratch de IDE con
copy pública.

---

## Ver también

- [07 — SCRIPT_SDK](/holones/07-script-sdk) — era post-city y arco
- [La tubería, protegida](/guide/tuberia-protegida) — TLS · peercard · abiertos
- Arqueología U: [S_SDK#27](https://github.com/alephscriptorium-eng/S_SDK/issues/27)
- Umbrella ciudad-real: [S_SDK#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30)
- Docs del núcleo: [z-sdk.escrivivir.co](https://z-sdk.escrivivir.co/)
- Handshake externo: [guide/external-handshake](https://z-sdk.escrivivir.co/guide/external-handshake)
