# Dossier notarial — juntura 01↔03: las tres liturgias (preparación del 02 — Logos)

> **NOTARÍA (2026-07-16). Describir, no prescribir.** Rigen los tres fallos
> del custodio de esta fecha: (1) *describir lo que hay = notaría; prescribir
> lo que será = spec* — ontología y semántica van como secciones descriptivas
> ⏳, y aquí no hay grammar, vision ni roadmap de ningún `@logos/*`;
> (2) **tres liturgias o nada** — toda equivalencia a dos se registra como
> evidencia, jamás como gatillo de destilación; (3) semáforo de madurez:
> **SPEC ratificada + una línea real de dramaturgo cruzando la boca pública**.
> Regla de oro: lo no verificado se marca `⏳ sin verificar`; la evidencia se
> apunta por ruta absoluta (DS-5). Fuentes leídas hoy salvo indicación.

## 0. Mandato y estado de la ronda

Hipótesis registrada a contrastar (no dar por cierta): *force* (zeus, 01),
*dossier-mapa* (Bot Hilbert) y *línea personal* (emmanuel, 03) son **el mismo
artefacto con tres liturgias**. Este dossier cartografía las tres, tabula
equivalencias y huecos, enuncia los requisitos del conversor en tabla llana,
y levanta acta de madurez. No ejecuta destilación alguna.

Resultado adelantado: **dos liturgias legibles y citables hoy; la tercera
existe solo como intención declarada en su plan.** Acta en 🔴 (§4).

## 1. Cartografía de las tres liturgias

### 1.1 Liturgia «force» — zeus (01)

Fuente: `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\plan\DATOS.md` (leído
hoy; §1–2 la spec de líneas, §8 forces y cotas).

Qué es, en palabras de su fuente (§8):

> «**Force** = corpus indexado que inyecta origen de mirada y lore en una
> ronda. Formalmente es pariente de la línea: raw (logs de agente) →
> segmentador → manifest + escenas `prompt/think/output` con anclas y
> cobertura 100% verificable (el segmentador que devuelve `ok: true` es un
> gate).»

> «Las forces son conversaciones capciosas indexadas: hilos que tocan un tema
> y avanzan enumerando los argumentos que en el juego crean la tensión» (§8).

Formato real:

- **Activación declarativa** — `force.json`: `viewpoint_origin`, `lore_hook`,
  `anchor_scene`, `activation_triggers`, `pairs_with`; registry agregado con
  `session_budget` y exclusiones («pares que jamás se activan juntos») (§8).
- **Cotas** — dos corpus hermanos que acotan la perturbación: «**sima** (cota
  inferior: ruptura, discrepancia, estados sin colapsar — el polo del COLAPSO
  de una ronda) y **cima** (cota superior: confluencia, objetividad
  sistémica — el polo de la VICTORIA)» (§8).
- **Fixture verificado hoy**:
  `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\VOLUMES\DISK_03\FORCES\`
  contiene `registry.json`, `forces/`, `cotas/`, `README.md`,
  `IMPORT_NOTES.md`, `INDICE.md` — coherente con lo declarado en §8 (12
  corpus, 68 escenas, formato v0 en su README `⏳ README no leído`).
- **Sustrato: la línea** (§1–2): tronco curado (`nodos.yaml` →
  `manifest.json` + `nodos/Pxx/meta.json`) + satélites a fuentes remotas con
  autoridad (manifest central con `snapshots{…}` + `ontology_sections` +
  `milestones[]` + `registros[]`); cache de autoridad
  (`cache/snapshots/<oldid>.wikitext` + sidecar de provenance `source_url`,
  `fetched_at`); curación humana `registro.md`/`delta.md` con
  `delta_status: pending|draft|curated`; catálogos `registry.yaml` y
  `volumes.json`. Regla de diseño: «**el wikitext (dato de autoridad) es la
  verdad; el markdown es índice y curación**» (§2).
- Reglas duras de la liturgia (§8): las forces concretas son **datos, no
  código** (viajan por VOLUMES; el motor solo conoce el formato); la entropía
  la aporta el sistema (intents de rol `operator`/`dj`, asiento en ledger).

**Deuda de unificación confesa dentro del propio 01** (§2) — pieza mayor para
la juntura:

> «`labeled` del firehose, `delta_status` de las líneas y `editorialStatus`
> transmedia **son un solo concepto a unificar** en el linea-kit.»

Zeus ya reconoce tres vocabularios de curación *propios* sin unificar.

### 1.2 Liturgia «dossier-mapa» — Bot Hilbert (tercer testigo)

Fuente:
`C:\Users\aleph\OASIS\SCRIPTORIUM_V0\emmanuel-sdk\AgentLoreSDK\general-definition.md`
(leído hoy; topología «Bot Hilbert v2.0.0»).

Vocabulario operativo — «Estos términos no son metáforas. Son el lenguaje de
trabajo. Usarlos con precisión.»:

| término | qué significa allí (cita compactada) |
|---|---|
| Espacio de Hilbert | «el campo completo de posiciones posibles sobre un tema… El mapa entero.» |
| Eigenstate | «una posición concreta, identificable, con axiomas propios, dentro del espacio.» |
| Decoherencia | «el proceso por el cual el campo se colapsa en un eigenstate concreto. Tomar partido.» |
| Epoché | «suspensión del juicio. Mantener el campo abierto… sin colapsar.» |
| Aleph | «transcardinal canónico de Cantor como mecanismo dimensional para capas de superposición en el mapa.» |

Formato real de la sede (sección «Convenciones de sede y artefactos»):

- `dossier-<tema>-v00-<tag>/` con `mapa.<formato>` («tabla, ensayo, grafo
  JSON, markdown…»), `itinerarios/<fecha>-<sesión>.md` y
  `.meta/manifest.md` (ledger único: «manifest, no confeti»).
- `parking/<nave-id>/` — «Las **naves** son herramientas reejecutables para
  abrir dossiers existentes (**no para generarlos**)».
- **Firma mínima** de todo artefacto persistente: `model`, `model_id`,
  `runtime`, `editor`, `date_iso`, `session_id`, `skill_version`,
  `tasa_de_cambio` («eón / época / año / mes / día / minuto»),
  `formato_soporte` + `parsers`, y `modelo_lente`: «corpus dominante del
  modelo (anglófono, eslavo, hispano…) como **leyenda obligatoria del
  mapa**».
- Modos de sesión: `mapa` / `viaje` / `snapshot` volátil; política de
  destrucción gradada 0% / 50% / 100%.
- Señal 73: el límite de políticas/alineamiento se **pinta como relieve** del
  mapa («dar el relieve de la limitación», no forcejar); señal 74 remite al
  bot integrador.
- Saber que no se sabe es dato: «Saber que no hay datos es un dato muy
  valioso para cuantificar (en ese sentido se usan Alephs de Cantor para
  medir espacios desconocidos e inabarcables por definición)» (Disposiciones
  generales).

Instanciación verificada hoy (la liturgia no es solo papel): la sede aloja
una biblioteca y un parking **bajo `docs/`** —
`…\AgentLoreSDK\docs\biblioteca\yo-no-soy-yo-propositions-engine\`,
`…\AgentLoreSDK\docs\parking\yo-no-soy-yo-propositions-engine\` +
`docs\index.html` (la nave-browser). Observación de matiz: la canónica
prescribe `dossier-*/` y `parking/` **en raíz de sede**; esta sede los sirve
bajo `docs/` `⏳ motivo sin verificar (¿GitHub Pages?)`.

Observaciones notariales menores (defectos de fuente, se enuncian, no se
corrigen — solo lectura):

- La línea 1 de `general-definition.md` contiene residuo de secuencias de
  escape de terminal (`]633;E;sed -n '1,256p' …`) antepuesto al título
  `# Skill — CARTÓGRAFO`.
- La canónica referencia
  `./examples/horizont-event-locator/why-this-general-definition.md`; lo que
  existe hoy en esa carpeta es `why-this-skill.md` (+ `pics/`). Ancla
  probablemente rota `⏳ sin verificar si hay redirección`.

### 1.3 Liturgia «línea personal» — emmanuel (03)

**⏳ NO LEGIBLE HOY: la SPEC no existe.** Verificado por listado de la raíz
de `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\emmanuel-sdk\` (hoy): `AgentLoreSDK/`,
`DocumentMachineSDK/`, `README.md`, `VectorMachineSDK/`, `VectorMachineUI/`,
`plan/` — no hay `SPEC/`. El mundo es «papel primero»: plan sin código.

Lo único legible es su **intención declarada**, y es citable
(`…\emmanuel-sdk\plan\BACKLOG.md` y `…\plan\DECISIONES.md`, leídos hoy):

- **WP-E01 · SPEC del contrato de alimentación** (⬜): «formato de línea
  (tronco curado + satélites a fuentes con autoridad), **compatible por
  formato con la lengua de zeus** (procedencia: `zeus-sdk/plan/DATOS.md`
  §1–2, se relee, no se toca). Entregable: `SPEC/linea.md` + ejemplos
  **sintéticos** (jamás la fuente).»
- **WP-E11 · Boca firehose** (⬜): «**conversación indexada → línea (spec
  E01) → espacio exploratorio abierto en nave**. CA: un hilo sintético cruza
  entero: línea válida + nave que lo abre.»
- **DE-2** (tomada): «Compatibilidad por contrato con la lengua de líneas…
  zeus se relee, jamás se toca… cero llamadas entre mundos.»
- **DE-3** (tomada): «El motor no trae lore… epoché (el colapso es de la
  persona), **la nave abre y no genera**… La fuente no se empaqueta:
  satélites a ediciones remotas con autoridad.»
- **DA-3** (abierta, del custodio): «Cómo entra el corpus fundacional
  *(bloquea WP-E20)*» — bloquea la *primera línea fundacional*, **no** el
  criterio de madurez de esta acta (fallo 3: vale cualquier línea de
  dramaturgo por la puerta pública).

### 1.4 Ontología descriptiva ⏳ — qué nombra cada liturgia

*(Sección descriptiva autorizada por el fallo 1: nombrar lo que cada liturgia
ya nombra. Nada de aquí prescribe la lengua futura.)*

| dimensión | force (01) | dossier-mapa (Hilbert) | línea personal (03) |
|---|---|---|---|
| unidad de corpus | force / línea (tronco+satélites) | dossier-mapa | «línea» ⏳ por intención (WP-E01) |
| pieza mínima | escena `prompt/think/output` con ancla; registro/nodo | eigenstate en el mapa | ⏳ sin spec |
| catálogo | `registry.json` / `registry.yaml` / `volumes.json` | `.meta/manifest.md` por unidad viva | ⏳ sin spec |
| abridor | servidor MCP loader read-only (§3) | nave («abre, no genera») | nave (WP-E11, por intención) |
| procedencia del dato | `oldid`, sidecar `source_url`/`fetched_at` | — | satélites a «fuentes con autoridad» (intención) |
| procedencia del observador | — | firma: `model_id`, `modelo_lente`, `session_id` | — |
| curación | `pending\|draft\|curated`, `raw→triaged→canon`, `labeled` | tasa de cambio + destrucción 0/50/100 | ⏳ sin spec |
| polos de la ronda/campo | cotas sima (COLAPSO) / cima (VICTORIA) | decoherencia / epoché | «el colapso es de la persona» (DE-3) |
| física de activación | `session_budget`, `pairs_with`, exclusiones | — | — |
| privacidad | no existe («VOLUMES son del mesh, compartidos», §1) | no se pronuncia | volumen **privado**, P2P/ad hoc (intención, WP-E30/E31) |
| lo desconocido | — | Alephs para «medir espacios desconocidos»; señal 73 | — |
| asiento/auditoría | ledger («nada se borra sin asiento», §4) | manifest + firma | ⏳ sin spec |

Qué nombra cada una que las otras no: **01** — la autoridad remota del dato,
la física de activación acotada, la proyección disco↔mundo («ninguna
geometría "de mentira"», §4). **Hilbert** — el observador como leyenda
obligatoria (`modelo_lente`), la tasa de cambio del tema, el hueco como dato.
**03** — la persona: privacidad, «mis líneas», el colapso como acto de cada
cual (todo por intención; sin spec que lo fije).

### 1.5 Semántica descriptiva ⏳ — rimas observadas entre liturgias

*(Descripción de coincidencias halladas en las fuentes; interpretaciones
marcadas. Ninguna rima habilita nada por sí sola — fallo 2.)*

1. **Conversación indexada.** 01: «las forces son conversaciones capciosas
   indexadas… raw (logs de agente) → segmentador → manifest + escenas con
   anclas» (§8). 03: «conversación indexada → línea (spec E01) → nave»
   (WP-E11). **Mismo objeto de entrada y mismo gesto (segmentar con anclas)
   nombrados en dos liturgias distintas.** Cita cruzada literal, no
   interpretación.
2. **El abridor read-only.** 01: «exponerlo con un servidor MCP loader
   read-only (patrón linea-system / linea-firehose)» (§3). Hilbert: «naves…
   para abrir dossiers existentes (no para generarlos)». 03 (DE-3): «la nave
   abre y no genera». **Tres liturgias, un mismo órgano.** La tercera es
   intención, no código.
3. **Los dos polos.** 01 los nombra como *corpus* (cotas sima/cima = polos
   COLAPSO/VICTORIA); Hilbert como *operaciones del observador*
   (decoherencia/epoché); 03 como *derecho de la persona* («el colapso es de
   la persona»). `⏳ interpretación sin ratificar: que sean el mismo par.`
4. **La curación como deuda ya confesa.** 01 declara por escrito que sus
   tres vocabularios de estado «son un solo concepto a unificar» (§2). La
   juntura no inventa ese problema: lo hereda enunciado.

## 2. Matriz de equivalencias y huecos

> **EVIDENCIA, NO GATILLO** (fallo 2): las filas con veredicto favorable
> entre 01 y Hilbert corroboran la hipótesis pero **no habilitan destilación
> parcial** — la pareja madura es justo la que no incluye al 03. Hilbert es
> tercer testigo que corrobora, no pilar que sustituye. Se destila cuando
> hable la persona.

| concepto | 01 ↔ Hilbert | con el 03 | veredicto |
|---|---|---|---|
| corpus indexado con anclas | escenas ancladas ↔ mapa con posiciones | intención WP-E11 | **1:1 entre los dos legibles**; 03 ⏳ |
| catálogo/manifest | registry.json/yaml ↔ .meta/manifest.md | ⏳ sin spec | traducible con pérdida de forma (yaml/json ↔ md) |
| abridor read-only | MCP loader ↔ nave | «la nave abre y no genera» (DE-3) | **1:1 conceptual a tres voces** (una por intención) |
| procedencia del dato | oldid/sidecar ↔ — | satélites con autoridad (intención) | **hueco en Hilbert**: su firma no cubre el dato remoto |
| procedencia del observador | — ↔ modelo_lente/firma | — | **hueco en 01 y 03**; exige decisión |
| curación por estados | 3 vocabularios (deuda §2) ↔ tasa de cambio + destrucción | ⏳ | **no se traduce 1:1**; exige decisión |
| polos colapso/victoria | cotas ↔ decoherencia/epoché | «colapso de la persona» | rima fuerte, ⏳ sin ratificar |
| física de activación | budget/pares/exclusiones ↔ — | — | **se pierde** fuera de 01; ¿aceptable? decisión |
| privacidad | mesh compartido ↔ silencio | volumen privado (intención) | **hueco doble**: solo el 03 la nombra, y sin spec |
| cambio del territorio | snapshots por oldid ↔ tasa_de_cambio | ⏳ | dos respuestas al mismo problema; exige decisión |

## 3. Requisitos del conversor — tabla llana

*(Fallo 1: tabla llana — entradas, salidas, pérdidas. Las «pérdidas
aceptables» se enuncian como candidatas; la aceptabilidad la ratifica el
custodio, §5.)*

| entrada | salida | pérdida candidata |
|---|---|---|
| force (manifest + escenas + `force.json`) | dossier-mapa (mapa + manifest) | física de activación (`session_budget`, exclusiones) — sin casilla en la sede Hilbert |
| dossier-mapa (mapa + itinerarios + manifest) | línea (tronco + satélites) | naves (código, no viajan) y modos de sesión; itinerarios ⏳ ¿registros? |
| línea (tronco + satélites + cache) | dossier-mapa navegable | la cache pesada no viaja: la nave abre por referencia (coherente con DE-3 y files-first §5) |
| conversación indexada (hilo firehose) | — | **fuera del conversor**: eso es la boca (WP-E11), órgano del 03. El conversor traduce entre liturgias ya escritas; la boca ingiere mundo. |
| toda conversión | toda conversión | **candidata a pérdida NO aceptable** ⏳ propuesta del notario: la procedencia (del dato *y* del observador) debe sobrevivir todo viaje — es lo único que las tres liturgias tratan como sagrado (verdad-wikitext §2; firma obligatoria; satélites con autoridad) |

## 4. Acta de madurez

**Criterio (fijado por el custodio, 2026-07-16):** 🟢 = SPEC ratificada
(WP-E01) **+** una línea real de dramaturgo cruzando la boca pública
(WP-E11) — vale cualquier línea (el hilo de Marx, un game de zeus…), no el
corpus fundacional (DA-3 bloquea WP-E20, no esta acta).

**Estado hoy: 🔴 — 0 de 2.**

| bloqueante | estado (leído hoy en `…\emmanuel-sdk\plan\BACKLOG.md`) | owner / fecha |
|---|---|---|
| WP-E01 · SPEC del contrato | ⬜ pendiente; `SPEC/` no existe en el repo | **sin owner, sin fecha** — dato, no bloqueo; asignar es del orquestador cuando el custodio pida «estado del swarm» |
| WP-E11 · Boca firehose | ⬜ pendiente | ídem |

**Evidencia registrada a favor de la hipótesis** (se asienta, no se actúa):
(a) DE-2 declara compatibilidad *por contrato* con la lengua de zeus;
(b) WP-E11 une las tres liturgias en una frase (conversación → línea →
nave); (c) 01 llama a sus forces «conversaciones capciosas indexadas» — el
mismo objeto que la boca del 03 ingerirá; (d) el abridor read-only existe en
las tres voces (§1.5.2); (e) 01 ya confiesa su propia deuda de unificación
de curación (§2 de DATOS.md).

**En contra / sin resolver:** la tercera liturgia es intención sin spec; las
rimas semánticas (§1.5.3) no están ratificadas; la privacidad —lo único que
solo el 03 aporta— no tiene forma escrita en ninguna parte.

## 5. Decisiones que se enuncian (las resuelve el custodio)

- **D-N1.** ¿La procedencia del observador (`modelo_lente`, firma Hilbert)
  viaja en la lengua común, o es liturgia local de la sede?
- **D-N2.** ¿Es aceptable perder la física de activación (budget/exclusiones)
  al convertir force → dossier-mapa?
- **D-N3.** ¿Público/privado se nombra en la lengua común o lo nombra cada
  mundo? (Solo el 03 lo trae, y aún sin spec.)
- **D-N4.** La unificación `labeled`/`delta_status`/`editorialStatus` —
  deuda que 01 declara suya (§2, «linea-kit») — ¿la asume su linea-kit o la
  juntura? Si la asume 01 antes de la destilación, el 02 nace más simple.
- Las DA-1…DA-5 de emmanuel quedan citadas (§1.3) y son de su propio plan;
  aquí solo se constata cuáles rozan la juntura (DA-3, DA-5).

## 6. Límites de esta notaría

No leído hoy (fuera de mandato o de tiempo): README/formato v0 del volumen
`DISK_03/FORCES`; `AgentLoreSDK/catalogo.md`, `docs/biblioteca/*` por dentro,
skills delegados (`.github/skills/`) y `ARCHIVO/`; DATOS.md §3–7 se leyeron
pero solo se citan donde cruzan el mandato. El README de `junturas/` no se
toca: enlazar este dossier es del custodio.

**Señal de fin:** la juntura **no está madura** — faltan WP-E01 y WP-E11, y
son del swarm de emmanuel (sin lanzar; la asignación es del orquestador a la
voz de «estado del swarm»). La evidencia acumulada favorece la hipótesis; la
palabra «destílese» queda donde debe: en boca del custodio.

---

*Notario: Claude (Fable 5) · sesión 2026-07-16 · compilado en solo lectura
sobre zeus-sdk, emmanuel-sdk y AgentLoreSDK; escritura únicamente en este
fichero (DS-5: toda cita con ruta absoluta; lo no verificado, ⏳).*