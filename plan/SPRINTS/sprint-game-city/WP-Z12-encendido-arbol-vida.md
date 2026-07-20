# WP-Z12 — Encendido del árbol de vida: lifecycle XState con start/stop real en mesh

| dato | valor |
|---|---|
| estado | ⬜ (fusión de ofertas r3 + r3-b, asentada 2026-07-20; estado canónico en BACKLOG) |
| track / prio | ENGINE (kit) + OPS (servicio) / 2 · **f1 en GC-2** (tras Z06) · cascada/zonas en GC-3 |
| depende de | Z06 (actuadores: launch/stop/health + catálogo; Z12 le da el cerebro) · Z02 (sección `arbol`/catálogo en seeds) · Z03 (round-trip `wake`) · alimenta Z08-f4 (tablero por zonas), Z13 (residentes) y GC-4 «estado real» (SEMILLA §2) |
| precedente interno | `player-ui\src\session-machine.mjs` — XState 5 con `setup()` (+test); xstate ya es dep del monorepo |
| doctrina (concepto, no código) | Constitución XState 5 de NETWORK-ENGINE: actor-first, `setup()`+`createActor()`, eventos = hechos, checklist anti-legacy como gate; **híbrido no-dogma** (no todo es actor) + separación mando→efecto→hecho (ADR-0007) |
| referencia a portar | mesh vieja `MCPLauncherServer.ts`/`mcp-mesh-sdk`: `ServerStatus`, `intentionalStops`, `restartCount`, health intervals, catálogo `app.config.ts`, degradación diagnosticada de Prolog — máquina implícita hecha a mano; Z12 la hace explícita. El bug del campo muerto (`capabilities` vs `capabilitiesCheck`) NO se hereda (un campo, validado por schema). Regla 2: concepto, no código |

## Objetivo

Que el tablero gamificado tenga **verdadero start/stop por zonas**: cada nodo del árbol
**ciudad → barrio → edificio → maquinaria** lleva vida formal XState 5; las hojas actúan
sobre procesos reales del mesh vía el launcher (Z06). Despertar un barrio arranca
infraestructura de verdad (salud **confirmada**, no «proceso vivo»); una maquinaria que
enferma degrada su barrio en el snapshot. El mapa dice la verdad (SEMILLA §2) y la
verdad tiene semántica de transición, no flags.

## Diseño (fusión: arquitectura r3-b dentro del empaquetado r3)

### 0. Nivel «maquinaria» + catálogo declarativo único (r3-b)

Nuevo nivel de la ciudad (análogo a «Plantas» del Zigurat): **1 maquinaria = 1 servicio
declarado** (id, cmd, puerto, healthcheck, autoRestart, deps, barrio, edificio) —
anclado a algo verificable en disco, nada fantasma. Vive como **catálogo/`arbol` en los
seeds de Z02** (única fuente de verdad del árbol arrancable; regla 4 cantera→repo).

### A. `@zeus/lifecycle-kit` (engine, genérico — regla de los dos mundos)

- **Hoja (`maquinaria`):** `parada → arrancando → viva ⇄ degradada → parando → parada`
  + `rota`. Con: **guarda de intención** (`parando` absorbe el exit sin auto-restart —
  el `intentionalStops` hecho estado); **reintento** por guard + backoff (delay actor —
  el `restartCount` hecho transición); **adopción idempotente** (`ARRANQUE_SOLICITADO`
  sobre servicio ya sano → `viva` adoptando por identidad de health, nunca error por
  colisión); **degradación diagnosticada** (`degradada` con diagnóstico de fase:
  distingue «apagada por mando» de «viva pero su dependencia no responde»). Actuadores
  inyectados como actores (`fromPromise` tool-call, `fromCallback` sonda). El kit no
  sabe qué es un barrio.
- **Agregados — híbrido, no dogma (r3-b):** *edificio* con maquinaria fija → **regiones
  paralelas** de un actor (barato, nativo); *barrio/ciudad* → **rollup reactivo de
  hechos** (read-model sobre `MAQUINARIA_*`; aguanta flota dinámica sin recontar);
  **`spawnChild` solo** donde la flota es numerosa y cambiante. Criterios de uso
  escritos en el kit.
- **Vocabulario = hechos:** `ARRANQUE_SOLICITADO`, `PROCESO_VIVO`, `SALUD_FALLIDA`,
  `PARADA_SOLICITADA`, `MAQUINARIA_ARRANCADA/PARADA/DEGRADADA`, `HIJO_CAMBIO` — nunca
  imperativos `DO_*`. La tabla `{event, from, to}` es data compilada a máquina (patrón
  `DECK_TRANSITIONS`); **todos los estados cerrados** (el gap `WATCHER_STOPPED` de
  NETWORK-ENGINE es la advertencia).
- El árbol concreto es **contenido** (seeds Z02), jamás hardcodeado en el kit.

### B. Servicio `ciudad-lifecycle` (composición) — mando → efecto → hecho

- **Mando:** tools MCP gateadas ofertadas por horse (`city.start/stop/status(nodo)`;
  approval-gate para zonas enteras). Bridge tool→actor: la tool solo `actor.send()`.
  **Una sola superficie de invocación** — veto por CA a la doble vía tools/Socket.IO
  desincronizada (antipatrón documentado de la mesh vieja).
- **Efecto:** el actor decide y ordena; **Z06 ejecuta** spawn/kill/health. Z12 jamás
  toca procesos (eje III: una implementación de ejecución, sin `child_process`).
- **Hecho:** el resultado vuelve como evento de dominio → rollup **y** ledger del juego
  vía intent/track (un cliente de room más; regla 3: la authority no lo conoce). El
  tablero pinta, el cronista narra.
- **Proyección al juego (un solo proyector — guarda de doble verdad):** el snapshot es
  la verdad *de juego*; el actor, la verdad *de proceso*; la reconciliación vive SOLO
  aquí (eje II: una definición del mapping).

## Glosario de estados de vida (previene drift Z02/Z03/Z12)

| gamething (juego) | máquina (Z12) | significa |
|---|---|---|
| vivo | viva (≥1 maquinaria viva y sana) | sirve ahora |
| latente | parada (arrancable; catálogo conocido) | dormido, despertable |
| muerto | sin maquinarias conocidas | solo anchor; despertar = contenido, no procesos |
| roto | rota (arranque falla tras reintentos) | pide humano (operador) |

`arrancando/degradada/parando` son estados de proceso; el juego los ve como transiciones
(exponibles como `transicion:` si Z03 quiere animarlos, sin ampliar el censo).

## Reparto con Z06 (frontera dura)

| capa | quién | qué |
|---|---|---|
| Actuación | Z06 launcher | tools launch/stop/restart/health, catálogo, procesos |
| Comportamiento | Z12 kit+servicio | cuándo, en qué orden, qué hacer al fallar (supervisión) |
| Verdad de juego | Z03 reducer (puro) | estados del gamething; ni importa xstate ni conoce procesos |

Si Z06 ya asentó catálogo, Z12 lo **extiende** (campos de árbol), no lo duplica. El
vocabulario de estados/eventos del kit ES la spec de comportamiento que le faltaba al
entregable 6 de Z06.

## Fases

- **f1 (GC-2, tras Z06):** esquema de catálogo + catálogo semilla de 3 barrios reales
  (StateMachine=1 · PrologEditor=3 · AAIAGallery=1+backend; datos desde fichas de
  cantera → repo) + kit hoja/edificio + **un barrio e2e** (StateMachine: 1 maquinaria,
  cero agentes — el caso mínimo perfecto).
- **f2 (GC-3):** rollup barrio/ciudad + cascada por zonas con concurrencia acotada
  (techo tipo `POBLACion_MAX`, patrón Z08-f6; techo vigente en el reporte) + tablero
  Z08-f4 + proyección al snapshot (round-trip `wake`).

## Criterios de aceptación

- [ ] **Eje I (e2e f1):** `city.start(barrio)` por horse → gate → Z06 arranca la
      maquinaria real → salud confirmada → hecho en ledger → barrio `vivo` en snapshot;
      stop de la zona lo devuelve a `latente` (graceful: hijos antes que padre).
      Evidencia: transcript de eventos del actor + snapshot antes/después.
- [ ] **Supervisión:** matar el proceso a mano → `SALUD_FALLIDA` → `degradada` →
      reintento con backoff → `viva` (o `rota` tras N); con `PARADA_SOLICITADA` previa
      NO hay reintento (intención). **Corre en win32 local antes de aceptar.**
- [ ] **Adopción:** start sobre maquinaria ya viva termina `viva` sin doble proceso
      (evidencia: identidad de health/pid).
- [ ] **Degradación diagnosticada:** matar el backend (no la maquinaria) →
      `degradada` con fase, no `parada` ni error opaco.
- [ ] **Tabla completa:** todos los estados alcanzables y cerrados (test de la máquina,
      no del runtime).
- [ ] **Eje IV:** segundo cliente independiente del contrato de mando/vocabulario —
      dashboard Z08 (zona start/stop) además de ciudad-lifecycle; gate, no feature.
- [ ] **Eje III:** grep → una sola implementación de spawn/kill (Z06); Z12 sin
      `child_process`. **Una superficie:** sin doble vía tools/eventos desincronizada.
- [ ] **Anti-legacy (constitución) como gate:** `grep -c` en el kit → 0 `interpret(`,
      0 `Machine(`, 0 `createMachine(` fuera de `setup()`; `setup()`+`createActor()`
      presentes. Pureza: grep `xstate` en `domain.mjs`/engine → 0.
- [ ] **Regla de los dos mundos + ceguera:** el kit no nombra ciudad/barrio/marco;
      árbol e historial reachable a 0 (reglas 13-14).

## Riesgos y guardas (van al BRIEF)

1. **Doble verdad** → un solo proyector (ciudad-lifecycle); snapshot = proyección.
2. **Tormenta de arranques** → cascada con concurrencia acotada + techo declarado.
3. **Win32/procesos** → CA de supervisión en win32 local obligatoria.
4. **Backends reales caídos** (AAIA :8007, Prolog :8000) → el modo degradado es el caso
   normal del mundo desde el día 1, no la excepción.
5. **Solape con session-machine** (player-ui) → no tocar; precedente de estilo.
6. **Scope** → f1 primero y bloqueante; ciudad entera y `spawnChild` (MCPGallery, 10
   puertos) en f2+.
