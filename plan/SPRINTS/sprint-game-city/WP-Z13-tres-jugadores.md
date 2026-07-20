# WP-Z13 — Los tres jugadores: fusión de expertos, humanos y agentes en la trama del SDK

| dato | valor |
|---|---|
| estado | ⬜ (fusión de ofertas r3 + r3-b, asentada 2026-07-20; estado canónico en BACKLOG) |
| track / prio | PACK (lore+flujos) / 3 · **ola GC-3** — no arranca antes de Z12-f1 (un barrio encendible) y Z03 |
| depende de | Z03 (juego/authority) · Z12-f1 (residentes = edificios en `running`) · Z04 (agentes por horse) · gancho Z07 (cronista) y Z11 (export) |
| diseño | [TRAMA-AGUA.md](TRAMA-AGUA.md) — este WP es su **brazo ejecutable**: la trama da el porqué; aquí se entrega lore + contrato + flujo + acto V |
| naturaleza | rediseño de lore/flujos + un contrato pequeño de mapeo — NO infraestructura nueva |

## La tesis (el encargo, digerido)

zeus-sdk es **«juegos de ventana de contexto»**: cada jugador — proceso, persona o
modelo — es una ventana de contexto con caudal limitado asomada al mismo estado
compartido. La transmedia fluye como agua llenando ventanas; consumida, genera nuevo
caudal que vuelve al cauce (ledger → cronista → TransmediaEvents → líneas → nuevas
ventanas). El SDK es el **ciclo**: la máquina que garantiza que ninguna ventana se
evapora sin llover en otra. La fusión **no exige tres contratos**: los tres tipos ya
caben en el protocolo (actores que emiten intents y reciben state/track/ledger); lo que
falta es armonizarlos en lore y flujo — que la partida los distinga por *cómo juegan*,
no por *por dónde entran*.

## Los tres jugadores (mapeo al contrato existente)

| Jugador | Quién es | Ventana de contexto | Rol catálogo | Verbo del agua |
|---|---|---|---|---|
| **Residente** (sistema experto) | Maquinarias despertadas por Z12: oráculo (Prolog), vivero (AAIA), contador (StateMachine)… | Permanente y estrecha — siempre llena, mismo dominio | `operator` (obra en su edificio) | **Filtra** |
| **Visitante** (humano, varias UIs) | view-kit/editor-ui, dashboards Z08, player-ui/3d, Zigurat/IDE | Ancha e intermitente — mira mucho, decide poco y caro (approve, start/stop, techos) | `player` | **Saborea** |
| **Corriente** (agente MCP) | Rabbits r/s/h y pares MCP: llegan, federan, actúan, se van; el horse es su cántaro (refs, nunca corpus) | Acotada y episódica — lo aprendido solo sobrevive si lo deja en el cauce | `player` (y `dj` solo el cronista) | **Canaliza** |

**Regla de armonía:** los residentes no son NPCs decorativos — **son los edificios en
`running`** (Z12). Despertar un barrio = poblar la partida; edificio apagado = personaje
dormido; degradado = enfermo. El estado técnico ES el estado narrativo (una sola fuente
de verdad, cero doble contabilidad).

## La trama ilustrativa (cinco actos = cinco capas reales del SDK)

1. **Acto I — La plaza** (rooms): el visitante entra, ve presencia. *Conexión/rooms.*
2. **Acto II — El despertar** (Z12): alguien enciende un barrio; un residente abre su
   ventana. *Launcher/lifecycle.*
3. **Acto III — La conversación** (horse): la corriente federa y llama la capability del
   residente; el visitante lo ve en el tablero. *r/s/h + MCP.*
4. **Acto IV — La obra** (intents/ledger): lo hecho queda asentado, verificable.
   *Protocol/authority.*
5. **Acto V — La lluvia** (cronista): ledger → TransmediaEvents → story-board →
   material de líneas (Z11) → semillas de la próxima partida. *Transmedia.*

El dramaturgo (Z07) no inventa: **lee del ledger**. La partida se escribe sola; el
cronista (rol `dj`) es el único jugador cuya jugada es narrar.

## Entregables

1. **Documento de lore** (capa lectura del pack ciudad): los tres jugadores, el ciclo
   del agua, los cinco actos — vocabulario del juego, ciego al marco (regla 1).
2. **Contrato de mapeo** (pequeño, en el contract del juego): tipo-de-jugador →
   rol-de-catálogo + convención `features[]` al registrarse (p. ej.
   `residente:<edificio>`) para que tablero y cronista distingan sin canal nuevo.
3. **Flujo residente:** patrón «edificio despierto = capability ofertada por horse +
   presencia en tablero» (une Z12 con Z04), especificado sobre UN residente real
   (candidato: el oráculo — backend sano y bot activo).
4. **Guion del acto V:** cadena cronista mínima (ledger → TransmediaEvent →
   story-board validado) reutilizando Z11/Z07 — sin código nuevo si el export de Z11
   ya está.

## Criterios de aceptación

- [ ] **Partida de demostración con los tres a la vez:** un residente despierto (Z12),
      un visitante mirando (UI), una corriente actuando (horse) — los tres visibles en
      el mismo snapshot con su tipo distinguible (contrato de mapeo).
- [ ] **Una fuente de verdad:** apagar el edificio del residente lo retira de la
      partida en el mismo tick; el estado narrativo NUNCA contradice el técnico.
- [ ] **Acto V real:** story-board que valida, generado solo desde el ledger de esa
      partida (cero escritura manual).
- [ ] **Eje IV:** el contrato de mapeo lo ejercitan dos clientes independientes
      (tablero y cronista) — y ≥2 **tipos de jugador** por contrato (regla 6 del
      sprint, nacida de esta ronda).
- [ ] **Ceguera:** lore y contrato no nombran marco/holones/mundos.

## Riesgos y guardas (van al BRIEF)

1. **Tentación de tercer canal:** si un flujo pide transporte nuevo «para agentes», es
   diseño roto — todo entra por rooms/protocol/horse (parar y reabrir; análogo regla 3).
2. **Residentes zombis:** sin Z12-f1, serían atrezzo hardcodeado — este WP espera.
3. **Lore que se despega:** el documento se valida contra partidas reales (evidencia
   literal, regla de oro 4), no contra la intención.
