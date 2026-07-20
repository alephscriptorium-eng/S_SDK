# TRAMA-AGUA — Juegos de ventana de contexto (rediseño de lore y flujos)

> Compañero narrativo de [SEMILLA-GAMIFICACION](SEMILLA-GAMIFICACION.md): la semilla da
> la **mecánica**; esto da la **trama** que armoniza a los tres tipos de jugador en una
> sola ilustración del SDK. Informa el diseño de Z03/Z07/Z08/Z10/Z11/Z12 y los ejes
> REIC del dramaturgo (candidato GC-4). **Brazo ejecutable:**
> [WP-Z13](WP-Z13-tres-jugadores.md) (fusión r3+r3-b: nombres Residente/Visitante/
> Corriente, cinco actos y contrato de mapeo viven allí; aquí, el porqué).

## 1. La tesis, completada

zeus_sdk es **juegos de ventana de contexto**. La transmedia fluye como agua llenando
distintas ventanas de contexto que, consumidas por jugadores, generan **nuevo caudal**:
intents que sedimentan en ledger, ledger que el dramaturgo destila en actos, actos que
el cronista devuelve a la plaza como announce — agua que vuelve al cauce para llenar la
siguiente ventana. Nada se consume del todo: cada lectura deja depósito (cache, curación,
cota) y cada depósito es fuente de la próxima lectura. **El juego es el ciclo hidrológico
del contexto**: los volúmenes son los acuíferos, las líneas los cauces, los viajes la
corriente, las ventanas los vasos — y jugar es mover el agua.

## 2. Tres jugadores = tres formas de ventana

| Jugador | Forma de ventana | Rol en la trama | Superficie técnica |
|---|---|---|---|
| **a) Sistema experto** (solar/linea/force/ssb, playbooks) | **Permanente y estrecha** — siempre llena, siempre el mismo dominio | **Maquinaria / oráculo residente**: no viaja; el agua pasa por él y sale transformada (inferencia continua). Vive y muere con su edificio (Z12) | MCP servers del mesh; catálogo Z06; hojas del árbol de vida |
| **b) Usuario humano** (varias UIs) | **Ancha e intermitente** — mira mucho, decide poco y caro | **Operador de la plaza / visitante**: abre y cierra compuertas. Lo caro que decide es exactamente lo que el sistema gatea: aprobar (`approve`), arrancar/parar zonas, fijar techos | player-ui (decks), player-3d-ui, operator-ui, editor-ui, dashboards Node-RED (Z08); approval-gate (Z11) |
| **c) Agente MCP** (como el que escribe esto) | **Acotada y episódica** — llega vacío, se llena, actúa, se va | **Rabbit / viajero-mensajero**: lo que aprende solo sobrevive si lo deja en el cauce (ledger, volúmenes, cache). El horse es su cántaro: lleva referencias, nunca corpus | protocolo r/s/h (Z04); viajes (Z10); tools gateadas (Z11); player-mcp-kit |

**La armonía no es que hagan lo mismo: es que ninguno tiene API privilegiada.** Los tres
consumen y generan por el mismo contrato (rooms `/runtime` + envelope + volúmenes
curados + gates). De ahí la regla estructural que esta trama propone elevar a principio
del sprint: **todo contrato del pack debe tener ≥2 tipos de jugador como consumidores**
(eje IV del skill convertido en ley de diseño, no solo CA puntual).

## 3. El mapa hidrológico del SDK (dónde está cada cosa)

| Agua | Pieza real | WP |
|---|---|---|
| Acuíferos | `VOLUMES/DISK_*` (firehose, lineas, forces, ssb) | Z01 los llena de ciudad |
| Cauces | líneas: tronco + satélites + segmentos (`linea-kit`) | Z10/Z11 |
| Corriente | **viajes** (caminos por el grafo; misiones de ciudadanos) | Z10, SEMILLA §3 |
| Lluvia / crecida | firehose (microposts, announces) | Z01, Z08 |
| Remanso | cache curada (`raw→candidate→labeled`, `CURATION_STATUSES`) | Z10/Z11 |
| **Vasos que se llenan** | **los decks de player-ui** (`empty→loading→cued→playing`) — llenar una ventana de contexto es literalmente cue-ar un deck | existente (precedente XState) |
| Compuertas y presas | árbol de vida: start/stop por zonas | Z12 (+Z06 actuadores) |
| Presión | energía del loop (announce recarga, wake cuesta) | SEMILLA §1 |
| Evaporación | decay (lo no visitado degrada) | SEMILLA §1 |
| Destilería | dramaturgo: ledger → actos → story-board | Z07 |
| Esclusa de escritura | mutación gateada de líneas (approve) | Z11 |
| Retorno | cronista: actos → announce en plaza | SEMILLA §4 |
| El terreno | gamemap ciudad (Plaza→Zigurat→distritos→barrios→calles) | Z02/Z03 |

## 4. El flujo armonizado (un solo loop con tres entradas)

```
        lluvia (firehose)                    acuíferos (volúmenes)
              │                                     ▲
              ▼                                     │ sedimenta
  [a] maquinarias tratan el agua ──► cauces (líneas) ──► corriente (viajes)
              ▲                                     │
   arranca/para (Z12+Z06)                           ▼
  [b] operador: compuertas, approve ◄── vasos: ventanas de contexto llenándose
              │                                     │
              ▼                                     ▼
        gates abiertos ─────────────► [c] rabbits actúan (tools/call gateado)
                                             │
                                   intents → ledger → destilería (Z07)
                                             │
                              cronista devuelve el acto a la plaza (retorno)
```

Lectura por jugador: el **experto** trabaja mientras esté vivo (su vida es
infraestructura: Z12); el **humano** decide qué corre y qué se aprueba (su escasez es
atención: gates y techos); el **agente** convierte corriente en hechos (su escasez es
contexto: viajes que caben en una ventana). El dramaturgo lo destila y el cronista lo
devuelve: la siguiente ventana ya se llena con lo que la anterior generó.

## 5. Qué cambia en el diseño (aterrizaje, no metáfora)

1. **Z10 dimensiona viajes en unidades de ventana:** un viaje/misión debe caber en una
   ventana de contexto de agente (presupuesto de pasos/tokens como parámetro del
   camino) — el primer parámetro de diseño que la trama impone al código.
2. **Z07 recibe los tres orígenes:** el story-board etiqueta el acto por tipo de jugador
   (maquinaria/operador/rabbit) — la trama es contable desde el ledger, sin inventar.
3. **Z08 muestra el agua, no solo los nodos:** los dashboards agregan caudal (eventos/
   tick por cauce) además de estados — la métrica natural del loop.
4. **Z12 es la orografía:** sin vida no hay flujo; arrancar una zona es abrir su valle.
5. **Ejes REIC del dramaturgo (Z07/GC-4):** proponer R=agua/caudal, E=compuertas/gates,
   I=ventanas/vasos, C=ciclo/retorno — la instancia `ciudad` narra este mundo, no uno
   genérico.
