# Dossier WIP — el hueco 02–03: future-machine, el ser desde las líneas, naves

> **WORK IN PROGRESS (2026-07-16). Brainstorming, no doctrina.** Nada de lo
> aquí escrito está ratificado ni abre junturas. Regla de oro vigente: lo no
> verificado se marca `⏳ sin verificar`; la evidencia se apunta por ruta
> (DS-5). Compilado en sesión con el custodio; fuentes leídas hoy salvo
> indicación contraria.

## 0. Estado de la ronda

El tramo por diseñar es el del medio de la cadena: **02 Logos** (destilado,
sin fuente propia) y **03 Revelación** (fuente directa, sin fuente que traer).
Decisión de la sesión: **no hay fuente que traer → se manufactura la pieza**
(autorizado por el usuario, patrón DAS-1; véase §1 y el parte de ingeniería
previo). Estado actual: **abriendo espacio de posibilidad, sin decidir.**

Veredicto de la primera investigación: **«te compro, investiguemos más»** —
hay algo sin resolver en zeus (01) que está resuelto en aleph-scriptorium
(05-06), y el puente entre ambos es materia prima del 03.

## 1. Lo que llevamos (recapitulación de la ronda)

### 1.1 La idea kenosis (parte de ingeniería 2026-07-16)

Un gesto central: **la kenosis como inversión del contrato de zeus**. La
autoridad única e invisible del cosmos 01 entra al juego como persona sujeta
al mismo contrato, y solo desde dentro emite lo que ningún intent compra.
Contrato heredado `state|intent|track|ledger` + canales nuevos
`word|grace|covenant`. Siete primitivas: kenosis, segunda persona,
interioridad, gracia, jubileo, resurrección, testamento. Candados anti
admin-override. Nombres en discusión: mundo `emmanuel-sdk`, paquetes
`@emmanuel/ichthys` (reconocimiento) y `@emmanuel/charis` (gracia), sobre
lengua `@logos/*` (el 02 como paquete del registry, no como mundo).
**Nada decidido.**

### 1.2 La propuesta del usuario (2026-07-16, brainstorming)

> Interesa el **Dramaturgo**, y tras él, sobre su trazado de línea base, las
> **experiencias ichthys** de personas que **P2P** pero también **ad hoc en
> su privacidad personal de sus volúmenes privados** trabajan su «ser» — si
> **«ser es lo que emerge de las líneas que han almacenado y sus
> experiencias ARG sobre ellas»**.

Intuición de fondo: en zeus las líneas son materia del *mundo* (públicas, el
mapa ES el volumen); no existe «mis líneas» — no hay persona. La maquinaria
de trabajar un corpus propio ya existe, pero vive anclada a 05-06.

## 2. Pack 1 — la maquinaria del corpus (aleph-scriptorium, holones 05-06)

Rutas verificadas existentes hoy:

| pieza | ruta | qué es |
|---|---|---|
| DocumentMachineSDK | `C:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\` | nombre interno real: **para-la-voz-sdk**. SDK editorial agéntico: analiza corpus para **cristalizar una «Voz»** — con `corpus/`, `guiones/`, `mod/`, `workers/` |
| VectorMachineSDK | `C:\Users\aleph\OASIS\aleph-scriptorium\VectorMachineSDK\` | corpus vectorial consultable — `SPEC/`, `STORAGE/`, `apps/` (notebook, vector-console) |
| VectorMachineUI | `C:\Users\aleph\OASIS\aleph-scriptorium\VectorMachineUI\` | UI compañera (Next.js) |

**Los 4 agentes core de la Document Machine + el quinto** (fuente:
`…\TRANSMEDIA-SYSTEM\dossier.md` §3, leído hoy):

- `@bartleby` (analista, solo lectura): informe en 5 secciones — linaje,
  taxonomía funcional, mecanismos retóricos, emergencias, ausencias.
- `@archivero` (gestor del corpus): diff/merge contra `corpus.md`, la fuente
  de la verdad — **«lo que se pasa luego a la Vector Machine»** (§3.3).
- `@cristalizador` (diseñador de artefactos): cuando hay masa crítica,
  **propone el agente nuevo** — la `@voz` — construyendo sus instructions.
- `@portal` (interfaz adaptativa): adapta el tono **según quién interactúe**.
- `@voz` (resultado): el agente cristalizado que produce material nuevo
  **desde las reglas del corpus, no hablando sobre él**.

Patrón de ficheros estricto y unidireccional: motor (`main`) hereda hacia
datos/lore (`mod`), sin ensuciar el motor. Flujo por guiones + 6 comandos
(`/guion /feed /diff-corpus /merge-corpus /design /status`).

**Nota para el 03:** «si ser es lo que emerge de las líneas almacenadas», la
`@voz` cristalizada de un corpus **personal** es exactamente un ser emergiendo
de líneas. La máquina ya existe; en 05-06 apunta a la casa madre (auditar);
girada hacia la persona, es interioridad. Y `@portal` es la semilla técnica
de la «segunda persona». `⏳ interpretación sin ratificar`.

## 3. Pack 2 — líneas, dramaturgo, forces (zeus, holón 01)

Fuente: `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\plan\DATOS.md`
(leído hoy, refinamiento 2026-07-15).

- **Línea** (§1): obra de datos — tronco curado por autor + satélites a
  fuentes remotas con autoridad. **«Los juegos no leen las líneas: las
  inflan.»** Los VOLUMES son del mesh, compartidos.
- **Segmentación** (§1-2): no la hace el sistema — spec de formatos +
  herramientas + starterkits para que **cada dramaturgo traiga su línea**
  («Scriptorium no es la plataforma, es el sound system»). Motor de
  referencia en la cantera: `network-engine/linea-aleph/` (Python vivo).
- **El dramaturgo y sus dos kits** (§6): rol humano/agente de autoría — el
  término **viene de transmedia-system, donde es la skill que construye
  escenarios de bifurcación**. Kit de línea (datos, WP-U80/U81) + kit de
  experiencia (juego narrativo, WP-U86, carpeta DRAMATURGO con REIC y
  4 cadenas blockchain→agentchain→storychain→readerchain).
- **Files-first y alineación p2p** (§5, D-13/D-14): el estado duradero son
  archivos; objetos pesados **inmutables y direccionables** (clave natural,
  campo `cid` opcional mañana) — **añadir IPFS será pinnear y anotar, no
  migrar**. El P2P de volúmenes ya está preparado por diseño.
- **Forces y cotas** (§8): forces = **«conversaciones capciosas indexadas»**
  que inyectan mirada y lore; cotas **sima/cima** acotan el espacio (colapso
  / victoria). **«El dramaturgo trae sus propias forces»** y sus **líneas de
  cota: los máximos y mínimos de SU experiencia** — el termómetro personal
  ya asoma en zeus, pero como rol de sistema, no como persona jugadora.

**Lo sin resolver en zeus (el hueco que mira al 03):** no hay volumen
privado, no hay «mis líneas», no hay quien trabaje su propio corpus. La
persona no existe como categoría — coherente con su capa (cosmos cerrado),
y por eso es la grieta exacta donde el 03 tiene sentido.

## 4. Hallazgo A — el pipeline future-machine (la súper-cadena)

Fuente: `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\transmedia-system\SCRIPTORIUM-CORE\TRANSMEDIA-SYSTEM\dossier.md`
§4 (leído hoy). La Document Machine **no siempre es el proceso principal**:
en contextos amplios es **subcadena** de una pipeline mayor, la
**Future Machine**, orquestada por 5 agentes:

`@Puzzle → @Archivero Lore → @Grafista → @Demiurgo → @Dramaturgo Cortos`

Mapeo contra los **4 slots** recordados en sesión:

| slot (memoria de sesión) | agente(s) del doc | qué hace |
|---|---|---|
| 1 — **pieza** (embedding→RAG→inflar wiki/markdown) | `@Puzzle` (valida contra esquema) + `@Archivero Lore` (corpus unificado `CORPUS_PREVIEW.md`) | **aquí vive la subtrama Bartleby**: el Archivero Lore «delega en @bartleby el análisis profundo» — la Document Machine entera, absorbida como paso interno. La mitad embedding/RAG es el handoff a Vector Machine (§3.3 del doc) |
| 2 — **grafo** («una línea es una simplificación de un grafo») | `@Grafista` | lee el corpus, detecta fricciones/huecos/tensiones y estructura un **grafo dirigido de futuros posibles** |
| 3 — **universo** (wrapper programático que carga el grafo, lo configura, lanza threads del slot 4) | `@Demiurgo` | elige rama **en consenso con el usuario**, rellena variables, y la convierte en spec concreta: un **Universo** (`universo/*.md`) |
| 4 — **cortos / producciones / piezas** | `@Dramaturgo Cortos` | destino final: del Universo instanciado a la obra |

La memoria de sesión era fiel: 4 slots funcionales (Puzzle es el portero del
slot 1), Bartleby como subtrama del primero, y el doc confirma que es **«la
forma más genérica de recopilar el trabajo conjunto» de las dos machines**:
Document Machine alimenta el corpus, Vector Machine lo hace consultable, y
la cadena grafo→universo→obra lo convierte en producción.

**Cierre de círculo con zeus:** el Dramaturgo aparece en ambos extremos —
skill de bifurcación en transmedia-system (origen del término, DATOS.md §6)
y destino final de la future-machine. El rol del mundo A de zeus y el agente
5 de la súper-cadena son el mismo oficio a dos escalas. `⏳ sin ratificar`.

## 5. Hallazgo B — AgentLoreSDK / Bot Hilbert (actualizado tras el pull)

**Historia del hallazgo (dos lecturas en el mismo día):** la primera lectura
del submódulo local encontró solo un catálogo de plantillas (637+, integración
agent-creator). El `git pull` del usuario (2026-07-16,
`c3656b6..1498d67`, rama `integration/beta/scriptorium`) **borró el catálogo
entero y trajo Bot Hilbert real**: agentes, skills, la biblioteca y la nave.
Todo lo siguiente está verificado **en disco local** tras el pull.

### 5.1 El tema ERA marxismo — memoria vindicada

El dossier `yo-no-soy-yo-propositions-engine` cartografía **un hilo real de X
sobre Marx, marxismo y anarquismo** (`ARCHIVO/…/context.md`: la comuna vs. el
Estado, «Marx en sí mismo era anarquista», los sóviets, Bakunin). Y el nombre
de la nave sale de la cita del propio Marx que el hilo desentierra
(thread-core-refutation, Engels citando a Marx):

> «tout ce que je sais, c'est que je ne suis pas marxiste»
> — *lo único que sé es que **no soy marxista***.

**«Yo-no-soy-yo» = el gesto de Marx negando su propio -ismo.** La capa
`aleph-rojo-negro` despliega el sub-espectro R/N/RN (rojo = Estado obrero /
negro = anarquismo / rojo-negro = autogestión federada), con crossrefs,
experimentos territoriales (Makhnovshchina, CNT-FAI, Rojava, Chiapas) y
secuencia histórica 1892–2012.

### 5.2 La complementariedad con el 03 (anotada en sesión por el usuario)

Nuestro Cristo es el **«Yo soy»** (ΙΧΘΥΣ, Emmanuel, la identidad que se
afirma encarnándose); la nave existente es el **«yo no soy yo»** (el autor
negando la identidad que le cuelgan). Dos actos de habla inversos sobre la
identidad — el hueco 02–03 y la pieza 05–06 se miran como positivo y negativo
de la misma placa. `⏳ interpretación sin ratificar, pero anotada como señal
de buen camino («aunque sea por complementario»)`.

### 5.3 Bot Hilbert — arquitectura verificada (general-definition.md, leído completo)

- **Superavatar + 4 subagentes** con handoffs y menor privilegio:
  `bot-hilbert` (orquestador) → **Cartógrafo** (`bot-biblioteca`),
  **Mecánico** (`bot-taller`), **Piloto** (`bot-parking`, sin edit/execute,
  escribe solo `itinerarios/`), **Orador** (`bot-volatil`, prohibido
  escribir) — más la capacidad transversal **Cristalizar**.
- **Vocabulario operativo** (no metáfora, lenguaje de trabajo): espacio de
  Hilbert (el campo completo de posiciones), **eigenstate** (posición con
  axiomas propios), **decoherencia** (colapsar en una posición),
  **epoché** (mantener el campo abierto — **«la epoché es del usuario»**),
  **Aleph** (transcardinal de Cantor para capas de superposición y espacios
  inabarcables).
- **Modos de sesión:** `mapa` (crear dossier) / `viaje` (navegar; deja
  itinerario) / `snapshot` volátil. Sin consenso explícito, el cartógrafo
  propone y se detiene.
- **Gobernanza:** canónica `general-definition.md` + DRY-guard por anclas +
  auditoría pull + firma de artefactos (incluida `modelo_lente`: el corpus
  dominante del modelo como **leyenda obligatoria del mapa**) + política de
  destrucción 0/50/100.

### 5.4 El nave-browser, verificado en disco

Separación exacta de datos y UI dentro de `docs/`:

| lado | ruta | qué es |
|---|---|---|
| **biblioteca** (datos) | `docs/biblioteca/yo-no-soy-yo-propositions-engine/` | `mapa.md` + `mapa.graph.json` + `alephs/` (capas) + `itinerarios/` + manifest |
| **parking/nave** (browser) | `docs/parking/yo-no-soy-yo-propositions-engine/nave/` | SPA HTML5 (`index.html`, `app.js`, `styles.css`): tabs Corpus/Mapa/Threads/Eigenstates/Forks/Galería, grafo SVG puro, capas toggleables |

**Frontera dura** (parking-naves.instructions): «una nave **abre** dossiers
existentes; **no los genera**. Si una nave empieza a producir contenido
cartográfico, deja de ser nave.» El dato aparcado no sabe qué browser lo
recorre — mismo patrón que zeus con sus UIs html-threejs-webrtc sobre
volúmenes.

### 5.5 Ligaduras nuevas que el pull destapa

1. **El dossier yo-no-soy-yo ES materialmente una force de zeus:** una
   conversación capciosa indexada (hilo de X con intención argumental) →
   segmentada en eigenstates con anclas y capas. Lo que DATOS.md §8 llama
   force («la visión de un tema a través de una force hace de la objetividad
   tierra inestable») y lo que Bot Hilbert llama dossier-mapa son **el mismo
   artefacto con dos liturgias**. El pipeline del dramaturgo (contextos →
   segmentador → escenas → carta de activación) y el del cartógrafo (tema →
   espacio de Hilbert → eigenstates → mapa + nave) son primos directos.
2. **Los 4 subagentes de Hilbert riman con los 4 slots de future-machine:**
   biblioteca/corpus ≈ pieza · `mapa.graph.json` ≈ grafo · nave ≈ universo
   (wrapper que carga el grafo y lo hace navegable) · itinerarios ≈
   producciones/viajes. Tercera aparición de la misma forma de 4 huecos.
3. **«Cristalizar» aparece en ambas máquinas:** el `@cristalizador` de la
   Document Machine diseña la `@voz`; el skill `cristalizador` de Bot
   Hilbert cristaliza mapas/naves/itinerarios/customizations. Mismo verbo,
   mismo gesto: de lo acumulado emerge un artefacto-agente.
4. **La epoché como interioridad protegida:** el cartógrafo mapea sin
   colapsar y **la decoherencia es derecho del usuario** — trasladado al 03:
   nadie colapsa el ser de otro; el volumen privado se explora, el colapso
   (identidad afirmada) es acto de la persona. El «yo no soy yo» como
   candado anti-etiquetado y el «Yo soy» como acto libre de gracia.
   `⏳ sin ratificar`.

## 6. La ligadura (estado del brainstorming — sin decidir)

La mesa queda así: cuatro slots, cada uno con maquinaria existente y un eco
en el diseño kenosis:

| slot | maquinaria existente | eco en el 03 |
|---|---|---|
| pieza (RAG + wiki) | Document Machine (`@voz`) + Vector Machine | **interioridad**: el volumen privado de líneas; el ser que emerge del corpus personal |
| grafo | `@Grafista`; líneas de zeus (una línea ≈ simplificación de un grafo) | el trazado de línea base del Dramaturgo |
| universo | `@Demiurgo` (rama elegida **en consenso con el usuario**) | el espacio configurado donde ocurre la experiencia; las naves como su browser |
| cortos/producciones | `@Dramaturgo Cortos` | las **experiencias ichthys**: P2P y ad hoc, encuentros de personas sobre sus líneas |

Más dos soportes transversales: **files-first + alineación IPFS** (DATOS.md
§5) como base técnica del P2P de volúmenes privados, y **forces/cotas**
(§8) como el precedente de «la experiencia personal como termómetro» (las
líneas de cota del dramaturgo).

## 7. Preguntas abiertas (próxima ronda)

1. ¿El mundo 03 ES una future-machine girada hacia la persona (corpus =
   tus líneas; `@voz` = tu ser; universo = tu nave), o la future-machine es
   solo su cantera de agentes?
2. Volúmenes privados: ¿partición por-persona en VectorMachine (`SPEC/` no
   leído aún — pendiente) o volumen local files-first con sync IPFS?
3. ¿Dónde queda la kenosis en la versión ser-desde-las-líneas? Candidato:
   la `@voz` de tu propio corpus como la interioridad «que te mira de
   vuelta» — pero gracia/jubileo/resurrección aún no tienen sustrato en
   esta versión. ¿Se funden ambas ideas o compiten?
4. El Dramaturgo a dos escalas (rol zeus / agente 5): ¿es el mismo oficio?
   ¿Quién traza la línea base de una persona — ella misma, el Dramaturgo,
   o la `@voz`?
5. ~~La nave marxista: localizar o corregir la memoria~~ — **RESUELTA
   (2026-07-16, tras el pull):** el tema es marxismo y el nombre sale de la
   cita de Marx «je ne suis pas marxiste» (§5.1).
6. Leer pendientes: `DocumentMachineSDK/plan.md` y `README.md`,
   `VectorMachineSDK/SPEC/`, `DocumentMachineSDK/.github/skills/futures-engine/SKILL.md`.
7. Nueva (del pull): ¿el mundo 03 usa Bot Hilbert como su cartógrafo de
   interioridad (el mapa del ser que no colapsa sin permiso), o el
   cartógrafo es otro oficio del mismo Dramaturgo? ¿Y es la nave el chasis
   natural de la «experiencia ichthys» (dossier del ser + browser P2P)?
8. Nueva: unificar liturgias force ↔ dossier-mapa (§5.5.1) — ¿un solo
   formato con dos vistas, o dos formatos con un conversor en `@logos/`?

## 8. Índice de anclas de este dossier

Verificadas hoy (2026-07-16) salvo nota:

- `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\transmedia-system\SCRIPTORIUM-CORE\TRANSMEDIA-SYSTEM\dossier.md` — §3 Document Machine (BARTLEBY), §4 Future Machine (leído completo)
- `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\plan\DATOS.md` — §1-2 líneas, §5 p2p, §6 dramaturgo, §8 forces (leído completo)
- `C:\Users\aleph\OASIS\aleph-scriptorium\DocumentMachineSDK\` — existencia y estructura (esqueleto)
- `C:\Users\aleph\OASIS\aleph-scriptorium\VectorMachineSDK\` + `VectorMachineUI\` — existencia y estructura (esqueleto)
- `C:\Users\aleph\OASIS\aleph-scriptorium\AgentLoreSDK\` — tras pull `c3656b6..1498d67` (2026-07-16): `general-definition.md` (canónica, leída completa), `ARCHIVO\yo-no-soy-yo-propositions-engine\context.md` (el hilo de Marx), `docs\biblioteca\…\alephs\aleph-rojo-negro.md`, `docs\parking\…\.meta\manifest.md` (la nave v2.0.0), `.github\instructions\parking-naves.instructions.md`
- github.com/escrivivir-co/mcp-agent-lore-sdk + escrivivir-co.github.io/mcp-agent-lore-sdk (portada, parking) — leídos vía web hoy (lectura previa al pull)
- Parte previo de la sesión: diseño kenosis/emmanuel (no commiteado; en conversación)
