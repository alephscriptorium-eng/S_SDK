# La tubería, protegida

Respuesta corta a la pregunta que hace todo invitado al juego: **¿van
protegidas la tubería y la mensajería?**

Esta página es un documento vivo. Lo que está hecho lleva evidencia. Lo
que falta lleva issue. Sin marketing.

---

## Lo que protege hoy

| Pieza | Qué hace | Evidencia |
| ----- | -------- | --------- |
| Transporte al pub | TLS sobre WebSocket hacia el pub de rooms | `wss://rooms.scriptorium.escrivivir.co` (contrato Z09 / bridge documentado en `.env.example` de Z_SDK) |
| Auth de sala | Al conectar al namespace `/runtime`, el cliente manda `{ token, room, user }` | [Handshake externo](https://z-sdk.escrivivir.co/guide/external-handshake) · `@zeus/rooms` |
| Peer-card | La autoridad de sala emite card con **rol** y **caducidad** (TTL por defecto 1 h) | `@zeus/authority-kit` · `DEFAULT_PEER_CARD_TTL_MS = 60 * 60 * 1000` · `issuePeerCard` |
| Firma del conector | El conector a terceros **exige** peer-card emitida por autoridad («visor pide card»); no se auto-fabrica como credencial de sala | Decisión **D-40** · commit [`b67b9ca`](https://github.com/alephscriptorium-eng/Z_SDK/commit/b67b9ca) en Z_SDK |
| Firma de asiento (ssbId) | Tarjeta viajera firmada ed25519 (`ssbId` + `seatSignature`) en el handshake de federación | `@zeus/protocol/peer-card-seat` · obra Z_SDK **#4** (citar; no cerrar aquí) · S_SDK **#23** |
| Puerta peercard → startpack | Entrante con peercard llega a **`startpack-ciudad-v0.1.0`** como base default (operator-ui + federación ciudad) | `@zeus/embajador-kit@0.1.1` (registry) · LOCAL bajo S_SDK **#22** · Z_SDK **#4** (citar) |
| Gate de catálogo (lanzador) | `@zeus/mcp-launcher` solo opera ids **declarados** en el catálogo; rechaza ids desconocidos — jamás comandos libres desde la tool | test `catalog gate rejects unknown id` · `packages/mesh/mcp-launcher` |

Sello de cierre del residual U93 / D-40: commit `b67b9ca` está en el
historial reachable de `main` de Z_SDK.

---

## El modelo (por qué no hace falta PGP aparte)

En la capa del pub, la identidad **es** la clave pública: feeds
`@….ed25519`. No hay un segundo anillo de claves «de aplicación» encima.

La mensajería privada a destinatario usa el modelo nativo SSB
(private-box / `recps`): el contenido viaja cifrado para los destinatarios
declarados. En el SDK eso aparece en el transporte de signaling
(`publishPrivate` + `recps` en `@zeus/webrtc-signaling`; ver también
U90).

El handshake de federación lleva la identidad SSB de forma explícita en la
firma de asiento (`ssbId` + `seatSignature`; ver fila «Firma de asiento» arriba
y [Z_SDK#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) — citar, no
cerrar). La **puerta** une peercard firmada + kit embajador para arrancar con
[`startpack-ciudad-v0.1.0`](https://github.com/alephscriptorium-eng/Z_SDK-games-library/releases/tag/startpack-ciudad-v0.1.0)
como base default (seguimiento LOCAL bajo
[S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22); privacidad
[S_SDK#23](https://github.com/alephscriptorium-eng/S_SDK/issues/23)).

La sala autentica con `{ token, room, user }` y la autoridad emite la
peer-card de rol/TTL; el residual de niveles/ACL sigue en la tabla abierta.

---

## Lo que está abierto

Ningún ítem sin issue. Cada fila enlaza el tracker real:

| Abierto | Issue |
| ------- | ----- |
| `ssbId` en el handshake + firma de la tarjeta viajera (extensión SSB; no reabre D-40) | [Z_SDK#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) |
| ACL direccional por peer (default deny donde hay poder real) | [Z_SDK#5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) |
| Niveles de federación: lo automático nunca escala a poder | [Z_SDK#6](https://github.com/alephscriptorium-eng/Z_SDK/issues/6) |

### Seguimiento en la casa (paraguas)

Misma regla: abierto solo con issue real. Estos son los tickets de la
casa que enmarcan el residual (no duplican la obra de esta página):

| Tema | Issue |
| ---- | ----- |
| Epic embajador (paraguas) | [S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) |
| Privacidad de federación | [S_SDK#23](https://github.com/alephscriptorium-eng/S_SDK/issues/23) |
| CAMPANAS (S-03) | [S_SDK#25](https://github.com/alephscriptorium-eng/S_SDK/issues/25) |

Cuando un issue cierre, estas tablas se actualizan. La página no promete
fechas.

---

## FAQ del amigo

### ¿Puede un tercero leer lo que nos mandamos?

En el carril privado SSB, el contenido con `recps` está cifrado para los
destinatarios. El transporte al pub de rooms va por WSS/TLS. Eso no
equivale a «nadie en el planeta puede»; equivale a: sin la clave del
destinatario / sin romper TLS, un observador de red no lee el plaintext.
Los huecos abiertos (ssbId en handshake, firma de tarjeta viajera) están
en [Z_SDK#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4);
el tracking de casa es
[S_SDK#23](https://github.com/alephscriptorium-eng/S_SDK/issues/23).

### ¿Quién puede arrancar o parar mis servidores?

Hoy el lanzador solo acepta ids del catálogo declarado
(`@zeus/mcp-launcher`). No hay spawn de comandos libres desde la tool.
Quién tiene rol de operador en la sala es otra capa (roles globales
hoy). El endurecimiento por peer es
[Z_SDK#5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5);
el paraguas embajador en la casa es
[S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22).

### ¿Qué ve el juego de mi máquina?

El juego ve lo que el runtime y los servers MCP del catálogo exponen:
estado de sala, intents tipados, recursos declarados. No tiene puerta
abierta a «cualquier binario de tu disco». El gate de catálogo es la
frontera operativa actual.

### ¿Todo esto es FOSS?

Sí. Piezas públicas:

- Núcleo: [alephscriptorium-eng/Z_SDK](https://github.com/alephscriptorium-eng/Z_SDK)
- Games library: [alephscriptorium-eng/Z_SDK-games-library](https://github.com/alephscriptorium-eng/Z_SDK-games-library)
- Casa (esta web): [alephscriptorium-eng/S_SDK](https://github.com/alephscriptorium-eng/S_SDK)
- Registry: `https://npm.scriptorium.escrivivir.co` (scope `@zeus`)

Licencias: las de cada paquete en su `package.json` / tarball del
registry. Esta página no inventa una licencia paraguas.

---

## Ver también

- [Publicar la web](/guide/publicar-la-web) — ciclo de esta casa
- [01 — Mythos](/holones/01-mythos) — ancla del juego / holón 01
- Docs del núcleo: [z-sdk.escrivivir.co](https://z-sdk.escrivivir.co/)
- Costura jugable 01↔03 (parked): [S_SDK#25](https://github.com/alephscriptorium-eng/S_SDK/issues/25)
