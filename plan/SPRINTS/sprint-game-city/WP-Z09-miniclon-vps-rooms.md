# WP-Z09 — Mini-clon local del VPS Node-RED + pago de la deuda rooms

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | OPS / 2 |
| depende de | — (independiente; Z08 lo aprovecha vía switch) |
| fuentes | `ScriptoriumVps\PATTERN-DOCKER\` (Dockerfile nodered, settings.js, compose, `node-red-contribs.json`), `ScriptoriumVps\node-red-projects\` (flows `rooms-mvp-candidate`, `pub-room-client`), `WiringEditor\packages\` (fuentes de los contribs) — detalle en [RECURSOS-LIBS](RECURSOS-LIBS.md) §3 y §6 |
| deuda que salda | el VPS lleva nodos-cliente de backends que nunca se conectaron; los contribs no están horneados en la imagen; los nodos publican contra SDK `^1.4.0` mientras zeus ya está en `^1.5.0`; y el mundo zeus (:3017) y el fabric rooms del VPS (:3010) son dos islas del mismo protocolo |

## Objetivo

Reproducir en local el servicio que SÍ funciona en el VPS (`/dashboard/rooms` + mesh rooms
in-process :3010) y, de paso, pagar la deuda técnica pendiente entre zeus-sdk y ese
Node-RED: mismo protocolo, mundos por fin conectables con un switch documentado.

## Receta del clon (solo servicio `nodered`; sin Verdaccio, sin mcp-devops, sin Caddy)

Copiable tal cual: `Dockerfile` nodered, `settings.js` (editor `/red`, Dashboard 2
`/dashboard`), `rooms-mvp-candidate.flow.json` (server) y `pub-room-client.flow.json`
(cliente). Adaptaciones obligatorias:

1. `ports: ["1880:1880"]` — el compose del VPS no publica puertos (edge aparte).
2. Red externa `oasis-pub-scriptorium_oasis_pub_net`: crearla (`docker network create`) o
   quitar el bloque del servicio.
3. `SCRIPTORIUM_REMOTE_ROOT` → dir local (defaults son rutas Linux `/srv/...`).
4. `NODERED_CREDENTIAL_SECRET` — obligatoria (el compose aborta sin ella).
5. `rooms-secrets.json` = `{"ROOMS_LAB":"<token>"}` en la ruta de `ROOMS_SECRETS_FILE`.
6. Cliente: `serverUrl` de `pub-room-client.flow.json` → `ws://localhost:1880` (o `:3010`);
   exportar `ROOMS_USER/ROOMS_ROOM/ROOMS_SECRET` (el flow los referencia via `$(VAR)`).

## La deuda, en checklist

- [ ] **Contribs horneados**: que el Dockerfile ejecute `install-contribs.mjs` /
      `build-local-contribs.mjs` en build (hoy copiados y no ejecutados; en el VPS se
      instalaron a mano en el contenedor vivo). El clon es el banco de pruebas.
- [ ] **Republicar** `node-red-contrib-alephscript-core` y `node-red-dashboard-2-alephscript-rooms`
      sobre `@alephscript/mcp-core-sdk@^1.5.0` (fuentes en WiringEditor; publish al
      Verdaccio como 0.3.x). Zeus ya consume 1.5.0 — los nodos van una versión por detrás.
- [ ] **El puente de las dos islas**: demostrar con el switch que un mismo flow cliente
      habla con el fabric rooms del clon (:3010/1880) y con el socket-server zeus (:3017)
      — verificación práctica de que la deuda de protocolo está saldada (lo consuma Z08 f4).
- [ ] Documentar el switch completo (tabla de RECURSOS-LIBS §3) como README del clon —
      hoy vive repartido entre flows, compose y notas del owner (`NOD-RED-FED-NOTES`).

Fuera de alcance (deuda que NO es nuestra): mcp-devops (perfil `mcp` del VPS, requiere
MCPGallery), el backend Bluesky del firehose-node, TLS/dominios, y el deploy real al VPS
(el clon es local; subir cambios al VPS es decisión aparte del operador).

## Criterios de aceptación

- [ ] `docker compose up` local → `http://localhost:1880/dashboard/rooms` sirve el widget
      con el mesh embebido (:3010) vivo.
- [ ] Un cliente federado (flow o nodo core) entra al clon con `ROOMS_*` env y aparece en
      el dashboard.
- [ ] El mismo flow, cambiando solo `serverUrl`, conecta contra el VPS real
      (`wss://rooms.scriptorium.escrivivir.co`) — switch probado en ambas direcciones.
- [ ] Imagen reconstruida desde cero trae los contribs sin `npm install` manual.
- [ ] Nodos 0.3.x publicados en Verdaccio con dep `^1.5.0` e instalables en el clon.

## Notas

- El clon usa las fuentes de `WiringEditor` montadas/copiadas (el manifiesto del VPS espera
  `/opt/aleph/WiringEditor/packages/...`); en local apuntar al checkout real de
  `C:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor`.
- Guardar el trabajo del clon en el lado zeus/SCRIPT_SDK (p. ej. `zeus-sdk\delta\` o
  carpeta nueva), no dentro de ScriptoriumVps — ese repo es del plan aleph.
