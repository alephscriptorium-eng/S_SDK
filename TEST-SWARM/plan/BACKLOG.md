# BACKLOG — TEST-SWARM, por olas

Convención: WPs autocontenidos con **CA** verificables. Estados: ⬜ pendiente
· 🔶 en curso (agente + fecha, lo marca el orquestador al asignar) · ✅
aceptado (solo orquestador).

Este backlog NO gobierna ningún mundo real: todo entregable vive en
`TEST-SWARM/` (PRACTICAS §1.1). **Género del pack** (DE-4): las Notas de
Lovelace, no el pitch — se describe la máquina y se **corre a mano** un caso
sobre ella, aunque esté en construcción. La unidad de capacidad es el **punto
de scrum**, jamás la moneda (DE-5, DE-6).

---

## Ola D0 — El suelo del ensayo

- ✅ **WP-D00 · Gates del ensayo** *(aceptado · 2026-07-16)* — test raíz ejecutable (script, patrón
  grep + existencia): (a) el diff no toca nada fuera de `TEST-SWARM/`;
  (b) nombres de fichero en castellano, sin restos ingleses; (c) toda ruta
  citada bajo sello Verificado existe en disco; (d) cero árboles copiados
  de otros mundos — **excepción declarada:** `assets/fanzine.css` es
  copia-release con cabecera de procedencia (DE-8: la cabecera es la cita);
  (e) **cero unidades monetarias ni equiparación munición-dinero** en el
  pack (grep: `€|\$|unidades monetarias|pólvora seca|hockey`; «munición»
  solo como idea/obra).
  **CA:** rojo con violación sintética de cada tipo (a–e); verde sobre
  TEST-SWARM.

- ✅ **WP-D01 · Guion del pack** *(aceptado · 2026-07-16)* — la partitura de las tres Notas para el
  ángel, con su efecto declarado: **Nota 1 «esto es la teoría M»** →
  legitimidad (fragmentos federados es arquitectura de primera división, no
  caos); **Nota 2 «estas son sus partes, y este el producto»** →
  verificabilidad (la máquina descrita con anclas de ruta, espejo término a
  término); **Nota 3 «así se modela»** → prueba de capacidad (la máquina
  **corre la M en vivo**, ejecución trazada al modo Nota G, y desemboca en
  el acta). Entregable: `GUION.md` en `TEST-SWARM/`.
  **CA:** guion completo con las tres Notas, sello declarado y fuente o
  `<pendiente>` por tramo; toda cifra de capacidad en puntos de scrum; cero
  promesa de futuro sin declarar; cero retórica de fundraising.

## Ola D1 — Las Notas (las piezas del pack)

- ✅ **WP-D10 · Nota 1 · La forma M** *(aceptado · 2026-07-16)* — la M en una página, **como forma, no
  como física**, en **dos estratos con su sello** (DA-2 cerrada): (1) la
  **lección** — hechos de manual con consenso (cinco teorías-fragmento como
  nodos, dualidades T/S como junturas, formulación completa que nadie
  tiene), sello Verificado + fuente pública; (2) la **apuesta** — el centro
  vacío leído como peldaño faltante (holón 06), sello Doctrina con ancla al
  pagaré (`SCRIPT_SDK/DEVOPS/VISION.md` §lore), declarada apuesta. Entregable:
  `NOTAS/nota-1-la-forma-m.md` (topología + mapa).
  **CA:** cinco nodos y sus dualidades nombradas con fuente pública citada;
  el centro representado como vacío, no como nodo; **cada afirmación
  asignada a su estrato y sello, sin mezcla** (lección≠apuesta); ninguna
  afirmación física fuera de procedencia citada o `<pendiente>`; gate (c)
  verde.

- ✅ **WP-D11 · Nota 2 · La máquina y sus partes** *(aceptado · 2026-07-16)* — descripción estilo
  Menabrea del método (la máquina) + el espejo M↔casa. La máquina: dos leyes
  (ceguera ascendente / acceso descendente), crecimiento por junturas,
  sellos, registry. Correspondencias mínimas del espejo: teoría ↔ mundo
  soberano e incompleto; dualidad ↔ juntura real (registry, compatibilidad
  por contrato, endpoints); «M sin formulación» ↔ «sostener fragmentos sin
  metarrelato»; ceguera de cada teoría ↔ ceguera ascendente (zeus no sabe
  del registro); centro vacío ↔ la capa por abrir (GRAVEDAD/GRAVITÓN,
  `<pendiente>`). Honesta: máquina en construcción, pendientes declarados.
  Entregable: `NOTAS/nota-2-la-maquina.md`, lado a lado con la Nota 1.
  **CA:** correspondencia término a término M↔casa; cada ancla de la casa
  con ruta absoluta existente; el centro de ambos grafos marcado vacío;
  gates (c)(d) verdes.

- 🔶 **WP-D13 · Nota 3 · La ejecución trazada** *(agente pendiente · 2026-07-16)* — el corazón Lovelace: correr
  la M-como-forma por la máquina **a mano**, al modo Nota G (Bernoulli sobre
  una máquina sin construir). Tabla de traza: paso · operación del método ·
  entrada · salida · sello — de «registrar fragmento» a «declarar centro
  vacío». Entregable: `NOTAS/nota-3-la-ejecucion.md`.
  **CA:** la traza usa **solo** operaciones definidas en la Nota 2;
  reproducible por un lector sin contexto; cada paso con su sello; gates
  verdes.

- ✅ **WP-D12 · Reedición del acta (v2)** *(aceptado · 2026-07-16)* — el acta Municiones saneada, como
  **sección propia al cierre del pack** (DA-3 cerrada): el último acto de
  `index.html`, no página aparte. Correcciones respecto a v1: (a)
  **munición = ideas/obra** para disidentes narrativos (línea Ibáñez),
  pólvora fuera; (b) **100.000 puntos de scrum** repartidos sobre los
  backlogs de la constelación (40k taller / 25k federación / 25k obra /
  10k fondo, re-denominados), jamás unidades monetarias; (c) género
  comparecencia/demostración, no solicitud; la moira se conserva. El HTML
  v1 (`../Municiones — acta de inversión en una página.htm`) **no se toca**:
  fuente histórica. Entregable: `ACTA-V2.md` en `TEST-SWARM/` (el contenido
  de la sección; D20 la maqueta).
  **CA:** gate (e) verde (cero moneda, cero munición=dinero); sellos con
  fuente; puntos de scrum suman 100.000; moira operativa.

## Ola D2 — El estreno

- ⬜ **WP-D20 · Pack ensamblado** — el gran final: **la superposición**,
  maquetada sobre la plantilla fanzine (DE-8). Un solo grafo, dos
  rotulaciones conmutables (M ↔ casa), centro vacío en ambas; al conmutar,
  el ángel ve que es la misma forma. Realización fanzine: la superposición
  es un `<pre class="diagram">` ASCII (blanco sobre negro) con conmutador JS
  inline que intercambia las etiquetas sin mover la topología; sellos →
  `.kw`/`.kw-inv`/`.stamp`; moira → `.stats-bar` + countdown JS. Remate: «la
  máquina acaba de correr delante de usted; el vacío queda declarado — y el
  acta v2 dice cuántos puntos de obra cuesta abrirlo». Una sola pieza
  navegable (`index.html`, DA-1): guion → Nota 1 → Nota 2 → Nota 3 →
  superposición → **acta v2 como sección final propia** (DA-3: el último
  acto, dentro de la misma página). **Sitio construido en `TEST-SWARM/docs/`**
  (`index.html` + `assets/fanzine.css` + lo que enlace) — esa carpeta es la
  que WP-D22 publica.
  **CA:** navegable de punta a punta; el sitio vive en `TEST-SWARM/docs/`;
  la superposición conmuta entre ambas rotulaciones sin cambiar la
  topología; fidelidad a la plantilla (sin fuentes nuevas, sin colores fuera
  de la paleta mono, sin modo oscuro inventado); `assets/fanzine.css` con
  cabecera de procedencia; gates verdes; ningún `<pendiente>` sin declarar
  en el propio pack.

- ⬜ **WP-D22 · El estreno público (runbook de publicación)** *(depende de
  ✅ de D20)* — publicar a `origin`
  (`github.com/alephscriptorium-eng/S_SDK`) desde ESTE repo (DE-7 ampliada
  por DA-4): `main` **huérfana = `docs/` (el sitio) + `TEST-SWARM/` (el
  ensayo conservado)**; `draft` = backstage local que **nunca** se sube. El
  worker deja el runbook escrito y **probado en seco** (dry-run: crea la
  huérfana en una rama de usar-y-tirar, verifica el árbol, y la borra sin
  tocar `main` ni `draft`); **el push y Pages son actos exclusivos del
  custodio** (DA-5: nadie más empuja, nunca).

  Runbook (Git Bash; `draft` ya conserva el backstage = `e18ff9c`):
  ```bash
  # 0. PRECONDICIONES: WP-D20 ✅ (sitio en TEST-SWARM/docs/).
  #    NUNCA:  git push origin draft   (draft es backstage, se queda en local)
  # 1. Salvar el ensayo FUERA del repo (checkout --orphan arrastra el árbol).
  cp -r TEST-SWARM ../_ensayo
  # 2. Rama huérfana, sin historia ni árbol backstage.
  git checkout --orphan main-sitio
  git rm -rf .                          # vacía árbol e índice heredados
  # 3. El sitio a docs/ raíz; el ensayo a TEST-SWARM/ (sin duplicar el sitio).
  #    Nada de la raíz backstage: ni HIPOTESIS, ni DEVOPS, ni LLM.md, ni docs/autoridades.
  mkdir docs && cp -r ../_ensayo/docs/* docs/
  cp -r ../_ensayo TEST-SWARM && rm -rf TEST-SWARM/docs
  #    (llamada del custodio, DA-4: excluir aquí el acta v1 .htm si no la quiere pública)
  git add docs TEST-SWARM && git commit -m "docs: pack demo + ensayo para Pages"
  # 4. main pasa a ser la huérfana; el backstage sigue vivo en draft.
  git branch -D main                    # su historia sigue en draft
  git branch -m main-sitio main
  rm -rf ../_ensayo
  # 5. (SOLO CUSTODIO) push y Pages:
  git push -u origin main
  #    GitHub → Settings → Pages → Deploy from branch → main → /docs → Save
  ```
  **CA:** en seco — `main-sitio` resulta huérfana (`git log` sin ancestros)
  y contiene solo `docs/` + `TEST-SWARM/` (grep: cero raíz backstage
  —HIPOTESIS, DEVOPS, LLM.md, autoridades—; sin sitio duplicado); `main` y
  `draft` intactas tras el dry-run. Real (custodio): URL viva sirviendo el
  pack; la moira funciona en Pages (JS estático); `origin` sin rastro de
  `draft`.

- ⬜ **WP-D21 · Acta del ensayo** — retrospectiva del ensayo general: qué
  enseñó el protocolo (fricciones, tiempos, devoluciones, huecos de los
  roles), como insumo para el primer swarm real.
  **CA:** acta con evidencia (rutas a reportes y commits de este mismo
  ensayo); veredicto explícito: qué cambiar antes del estreno real.
