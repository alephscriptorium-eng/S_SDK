# WP-Z06 — `@zeus/mcp-launcher` — habilitador de federación r/s/h (y meta-ops de la fleet)

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | OPS / **2** (subido de 3 — ver [RECAP-NODERED](RECAP-NODERED.md) §3) |
| depende de | — ; consumidores: Z04 (rito RNFP con capacidad real), Z03 (`wake` con contraparte física), Z08 (constelación lo invoca por tools) |
| base zeus | `createStandardMcpServer` (`presets-sdk\src\mcp\bootstrap.mjs`) · fleet: solar 4101-03, lineas 4111-12, forces 4113, ssb 4114, firehose 3008, consoleMonitor 3014 + player-MCPs 4121/22, 4131, 4132 · editor-ui (`POST /api/mcp/refresh`, `GET /api/mcp/servers`) |
| referencia externa | `mcp-mesh-sdk` de aleph (MCPGallery): `MCPLauncherServer.ts` (:3050, tools `launch/stop/restart/launch_all/health` + gen. `.vscode/mcp.json`) y `configs\app.config.ts` (catálogo). **Portar el concepto, no el código** (regla U81); cero deps heredadas. No traemos aquello: hacemos crecer zeus. |

## Objetivo

Cerrar el hueco explícito de las notas zeus — nadie lanza/para servers vía tools MCP —
pero con su motivo de fondo: **el Launcher es mecanismo de federación, no comodidad de
operador**. La cadena rabbit-spider-horse exige capacidades vivas:

- el **spider** federa por gate RNFP `active` → alguien tiene que poder **encender** la
  capacidad que el gate exige;
- el **horse** ejecuta `tools/call` contra un server destino → ese server tiene que
  estar arriba (o poder levantarse a demanda).

Sin launcher, la federación depende de humanos arrancando terminales. Con launcher,
**arrancar linea-system y sus satélites** (y solar/forces/ssb, y los player-MCPs) es un
tool call más — invocable por un flow de la constelación (Z08), por el rito de entrada
de Z04, o por el propio juego.

## Entregables

1. Paquete `packages\mesh\mcp-launcher` (`zeus.role: mcp`) sobre
   `createStandardMcpServer`, con tools:
   `launch_mcp_server` · `stop_mcp_server` · `restart_mcp_server` · `launch_all` ·
   `health` · `generate_vscode_config`.
2. **Catálogo declarativo de la fleet** (ids + puertos + comando de arranque + deps de
   arranque): la tabla de la nota zeus-mcp-servers como dato inicial; **linea-system y
   sus satélites primero** (las configs de `conectar-satelite` declaran los satélites —
   el catálogo las lee, no las duplica); player-MCPs de games-library incluidos.
3. **Arranque a demanda como capacidad federada:** correlación capacidad-RNFP → entrada
   de catálogo, de modo que "activar capacidad X" pueda resolverse en `launch` del
   server que la sirve (consumido por Z04).
4. **Mundo A/B — `wake` real:** puente opcional con Z03: el intent `wake` de un barrio
   puede disparar `launch` del server MCP asociado al barrio (si lo tiene). Despertar
   un barrio deja de ser solo un atributo del snapshot.
5. Integración con editor-ui: tras `launch`, un `refresh` ve el server nuevo.
6. Spec del rol Launcher (alimenta item 6 de Z05): sustituir el transcript de Copilot
   por contrato.

## Criterios de aceptación

- [ ] Vía tools MCP: lanzar un server del catálogo, verlo en `GET /api/mcp/servers`
      tras refresh, pararlo, verlo desaparecer.
- [ ] **linea-system + ≥1 satélite arrancados por tool call** (el caso que motiva el WP).
- [ ] `health` reporta la fleet completa con puerto y estado.
- [ ] e2e con Z04: un peer pide una capacidad no viva → launch → gate RNFP `active`
      pasa → el horse ejecuta su `tools/call`. (Si Z04 no está: simulado con cliente MCP
      plano.)
- [ ] `generate_vscode_config` produce un `mcp.json` válido para la fleet zeus.
- [ ] Sin colisión de puertos (firehose 3008 y editor-ui 3012 tienen herencias de la
      mesh vieja — documentar la tabla final).

## Notas

- Decisión local (ya sin junta con aleph): paquete mesh dedicado (candidato natural,
  arriba) vs tools del editor-ui. Paquete dedicado mantiene el editor como discovery puro.
- No confundir roles: Launcher = orquestador de procesos; player-MCP = agente de juego.
- Seguridad mínima: tools de lifecycle solo sobre el catálogo declarado (nada de
  `spawn` arbitrario por parámetro).
