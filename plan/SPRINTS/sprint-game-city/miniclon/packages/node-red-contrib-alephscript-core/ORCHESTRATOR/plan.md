## Plan: Fusionar orquestación y nodos de canal

Mover la lógica de canales, tipos, parsing y composición de mensajes a `src/lib`, conservar en Node-RED solo el adaptador a la API de nodos y a la conexión compartida, y construir una demo externa mínima de ping-pong para validar la operativa fuera de Node-RED. La recomendación es usar el cliente/conexión real actual como base de transporte y tomar de `ORCHESTRATOR/contrib` la semántica funcional por canal, comentando y resolviendo cada diferencia antes de migrarla.

**Steps**
1. Fijar el contrato canónico de canales y mensajes en `src/lib` y resolver los diffs actuales. Esto bloquea todo lo demás.
   - Mantener los canales conocidos como `app`, `sys` y `ui`, y reservar una salida `else` solo para mensajes no clasificados o eventos no mapeados.
   - Unificar `BaseMessage`, `AppMessage`, `SysMessage` y `UIMessage` en `src/lib/types/index.ts` usando como referencia principal la intención funcional de `ORCHESTRATOR/contrib`, pero sin romper el transporte real ya usado por `src/nodes/alephscript-core-client.ts`.
   - Resolver inconsistencias de naming: `sendAlephMessage`/`sendAlephEvent` en interfaces versus `sendAlephMessage`/`sendAlephEvent` en `src/lib/orchestration/app-channel.ts`; `sendConnectionStatus` usa `connected` pero `SysMessage.payload.status` hoy no lo admite.
   - Definir explícitamente qué entra en `else`: eventos Socket.IO ajenos a `app_message`, `sys_message`, `ui_message`, mensajes con `channel` desconocido, o payloads que no pasan parsing.
2. Extraer a `src/lib` una capa reutilizable de codecs y adapters por canal. Depende del paso 1.
   - Crear módulos reutilizables para `app`, `sys` y `ui` que hagan dos cosas: construir mensajes compatibles desde datos de entrada y parsear mensajes inbound del cliente/socket a tipos fuertes.
   - Reubicar aquí la lógica hoy duplicada en `ORCHESTRATOR/contrib/app-format-node.ts`, `sys-format-node.ts`, `ui-format-node.ts`, y la lógica de clasificación hoy embebida en `app-channel-node.ts`, `sys-channel-node.ts`, `ui-channel-node.ts`.
   - Mantener estas piezas libres de Node-RED para que puedan usarse desde scripts, tests futuros y la demo de ping-pong.
3. Reconvertir el orquestador en wrapper del cliente compartido, no en otro cliente Socket.IO. Depende de los pasos 1-2.
   - Rediseñar `ORCHESTRATOR/contrib/orchestrator-node.ts` para consumir el `config` compartido del paquete en lugar de abrir su propio `io(...)`.
   - Hacer que el nodo orquestador se suscriba a eventos inbound del socket existente y reparta 4 salidas: `app`, `sys`, `ui`, `else`.
   - La salida `else` debe emitir el sobre original más metadatos de clasificación para que el flujo pueda inspeccionar lo no reconocido sin perder información.
   - Si se mantiene la idea de cross-channel correlation, dejarla como metadato opcional o segunda fase; no mezclarla con la salida `else` en esta primera implementación.
4. Convertir los nodos de canal en wrappers finos de Node-RED. Depende de los pasos 2-3.
   - Cada nodo `send/listen` por canal debe delegar en la librería de canal para serializar, validar, filtrar y parsear; no debe volver a definir `AppMessage`, `SysMessage` o `UIMessage` localmente.
   - Todos los nodos de canal deben usar el patrón de `src/nodes/alephscript-core-config.ts`: conexión única compartida, callbacks de conexión/auth y limpieza ordenada en `close`.
   - Los filtros actuales (`stateFilters`, `actionFilters`, `messageTypes`, `serviceIds`, `components`, etc.) deben normalizarse en utilidades de `lib` para poder reutilizarlos fuera de Node-RED.
   - Revisar si `send` y `listen` conviven en un mismo nodo por canal o se separan en dos nodos. Recomendación: mantener un nodo por canal con entrada y salidas, siempre que la UX no quede confusa.
5. Sustituir el formateador genérico por format/parse específicos de canal, dejando un escape hatch genérico. Puede avanzar en paralelo con el paso 4 una vez cerrado el contrato del paso 1.
   - `src/nodes/alephscript-core-format.ts` hoy es demasiado horizontal y no refleja las diferencias reales entre `app`, `sys` y `ui`.
   - Opción recomendada: conservarlo como nodo genérico de bajo nivel para `room/raw`, y añadir `app-format`, `app-parse`, `sys-format`, `sys-parse`, `ui-format`, `ui-parse` apoyados en la nueva capa de codecs en `src/lib`.
   - Esto permite favorecer a `contrib` en la semántica de negocio sin sacrificar compatibilidad con el runtime actual.
6. Añadir una demo externa de ping-pong usando dos clientes y la nueva librería. Depende de los pasos 1-2; puede validarse antes de acabar Node-RED.
   - Crear un pequeño ejemplo o script que instancie dos clientes/adapters, envíe mensajes entre canales y valide parseo/round-trip sin depender de la API de Node-RED.
   - Tratarlo como demo de desarrollo, no como API pública estable del paquete en esta fase.
7. Integrar exports, packaging y registro de nodos. Depende de los pasos 3-5.
   - Exportar desde `src/index.ts` y los índices de `src/lib` las nuevas piezas reutilizables.
   - Registrar en `package.json` los nuevos nodos de Node-RED que queden oficialmente soportados.
   - Asegurar que el copiado de `.html` incluye los archivos que se adopten desde `ORCHESTRATOR/contrib` o moverlos al layout definitivo si hace falta.
8. Verificar la implementación en dos niveles. Depende de todos los anteriores.
   - Validar build TypeScript y empaquetado de Node-RED.
   - Validar manualmente flujos: cliente conectado, orquestador repartiendo `app/sys/ui/else`, nodos de canal enviando y recibiendo, parse/format round-trip y demo ping-pong funcionando.

**Relevant files**
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\lib\types\index.ts` — contrato canónico de mensajes y corrección de inconsistencias de naming y estados.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\lib\orchestration\app-channel.ts` — hoy concentra conveniencias de `app`; debe alinearse con el contrato final y servir como base del wrapper Node-RED.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\lib\orchestration\sys-channel.ts` — base para health/log/status y para normalizar `sys` frente a la intención de `contrib`.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\lib\orchestration\ui-channel.ts` — base para parsing y composición de mensajes UI.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\lib\orchestration\orchestrator.ts` — referencia del orquestador puro; debe seguir libre de Node-RED.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\nodes\alephscript-core-config.ts` — patrón correcto de conexión compartida y callbacks; debe convertirse en la única puerta de entrada al socket en Node-RED.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\nodes\alephscript-core-client.ts` — transporte real y comandos Socket.IO a conservar como base.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\nodes\alephscript-core-format.ts` — decidir si queda como raw/generic formatter o se desdobla en nodos específicos por canal.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\ORCHESTRATOR\contrib\orchestrator-node.ts` — hoy duplica conexión y routing; debe transformarse en wrapper del config/client compartido.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\ORCHESTRATOR\contrib\app-channel-node.ts` — ejemplo claro de lógica a extraer: tipos locales, conexión propia, filtros y parseo.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\ORCHESTRATOR\contrib\sys-channel-node.ts` — revisar eventos reales, filtros y health-check antes de migrar a `lib`.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\ORCHESTRATOR\contrib\ui-channel-node.ts` — revisar componentes, fases y display updates para convertirlos en codec/adapters reutilizables.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\ORCHESTRATOR\contrib\app-format-node.ts` — semántica de composición a subir a `lib`.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\src\index.ts` — export surface del paquete.
- `c:\Users\aleph\OASIS\aleph-scriptorium\WiringEditor\packages\node-red-contrib-alephscript-core\package.json` — registro de nodos Node-RED y scripts de build.

**Verification**
1. Ejecutar el build del paquete y confirmar que compilan `src/lib`, `src/nodes` y los nodos adoptados desde `ORCHESTRATOR/contrib`.
2. Verificar manualmente un flujo Node-RED con `alephscript-core-config` + cliente + orquestador y comprobar las 4 salidas: `app`, `sys`, `ui`, `else`.
3. Verificar que un mensaje de cada canal hace round-trip: `format` o `send` → transporte → `listen` o `parse`, manteniendo tipo, source, timestamp y payload esperados.
4. Verificar que no se abren conexiones Socket.IO duplicadas al instanciar varios nodos de canal junto al orquestador.
5. Ejecutar la demo ping-pong externa y comprobar que dos clientes intercambian mensajes usando la nueva librería sin depender de Node-RED.
6. Probar al menos un caso de mensaje desconocido o no parseable y confirmar que cae en la salida `else` con contexto suficiente para depuración.

**Decisions**
- `sys` se mantiene como nombre del canal conocido; la mención a `log` fue un lapsus.
- Primera iteración en Node-RED: incluir `orchestrator` con 4 salidas, nodos `send/listen` por canal y nodos `format/parse` por canal.
- La demo ping-pong se incluye como ejemplo de desarrollo, no como API pública estable.
- Recomendación de fuente de verdad híbrida: el transporte, auth y ciclo de vida del socket deben seguir el runtime real actual; la semántica de negocio por canal debe favorecer a `ORCHESTRATOR/contrib` siempre que se documenten y resuelvan sus diferencias con el runtime.
- Fuera de alcance inicial: rehacer el monitor/dashboard salvo lo mínimo necesario para que no quede roto por cambios de interfaz.

**Further Considerations**
1. Resolver pronto si `else` debe incluir solo mensajes inbound desconocidos o también errores de parseo/validación; recomiendo incluir ambos con una marca de `reason` o `classification`.
2. Decidir si los nodos `send` y `listen` por canal se unifican o se separan. Recomiendo empezar unificados para reducir catálogo y extraer después solo si la UX lo pide.
3. Añadir tests automatizados más adelante alrededor de codecs y clasificación de canales; el paquete hoy no tiene tests y esa zona va a concentrar la nueva lógica reutilizable.