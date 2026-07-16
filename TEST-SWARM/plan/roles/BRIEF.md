# Brief para lanzar worker (TEST-SWARM)

_Plantilla que rellena el **orquestador** (tras marcar 🔶 en BACKLOG) y el
usuario pega en un **chat nuevo** junto con `plan/roles/WORKER.md`._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D?? · <título>
Rama: wp/d??-<slug>
Worktree: ../SCRIPT_SDK-wp-d??   (solo si hay workers en paralelo)
Reporte: TEST-SWARM/plan/REPORTES/WP-D??-<slug>.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-?/DA-?
- (archivos concretos que el orquestador ya identificó)

Notas del orquestador:
- (conflictos con otros WPs en vuelo, orden de merge, excepciones de gates…)

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

---

## Lote activo — Ola D0 *(asignado 2026-07-16)*

Paralelo: dos chats worker, cada uno con su worktree. Merge sugerido: **D00
antes que D01** (D01 no depende de D00, pero el guion asume gates verdes en
revisiones posteriores).

### WP-D00

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D00 · Gates del ensayo
Rama: wp/d00-gates-ensayo
Worktree: ../SCRIPT_SDK-wp-d00
Reporte: TEST-SWARM/plan/REPORTES/WP-D00-gates-ensayo.md

Lecturas extra:
- plan/PRACTICAS.md §1 (reglas duras) y §3 (checklist de entrega)
- plan/DECISIONES.md DE-0/DE-8 (autocontención; fanzine.css como excepción
  gate d)
- plan/BACKLOG.md WP-D00 (CA literal: rojo sintético a–e, verde sobre
  TEST-SWARM)

Notas del orquestador:
- Script raíz bajo TEST-SWARM/ (bash o similar; Git Bash en Windows).
  Gates a–e según BACKLOG: (a) diff solo TEST-SWARM/; (b) nombres castellano;
  (c) rutas bajo sello Verificado existen; (d) cero árboles copiados salvo
  assets/fanzine.css con cabecera de procedencia; (e) grep moneda/munición=
  dinero/pólvora.
- Incluir fixtures o modo --violación para demostrar rojo por cada gate.
- No tocar GUION.md ni otros entregables de D01.
- Commits: test(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

### WP-D01

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D01 · Guion del pack
Rama: wp/d01-guion-pack
Worktree: ../SCRIPT_SDK-wp-d01
Reporte: TEST-SWARM/plan/REPORTES/WP-D01-guion-pack.md

Lecturas extra:
- plan/VISION.md §el género (las Notas), §la idea y §candados
- plan/DECISIONES.md DE-2/DE-4/DE-5/DE-6 (tramos, género Lovelace,
  munición≠moneda, punto de scrum) y las DA cerradas — en especial DA-2
  (dos estratos lección/apuesta, cada uno con su sello) y DA-3 (el acta v2
  es sección final propia del pack)
- ../Municiones — acta de inversión en una página.htm (SOLO lectura: los
  sellos y la moira a respetar; OJO contaminación de v1 —munición=pólvora=
  dinero— que el guion NO hereda: el acta v2 la corrige, WP-D12)
- SCRIPT_SDK/DEVOPS/VISION.md §lore (SOLO lectura: procedencia de la
  analogía Gravitón/Gravedad; citar, no copiar)

Notas del orquestador:
- Entregable único: TEST-SWARM/GUION.md. No tocar gates ni script de D00.
- El guion declara sello por tramo; lo no comprobable, <pendiente>.
- Las tres Notas (forma M / máquina+espejo / ejecución trazada) son la
  partitura; la fuente física de la M se cita en D10, no aquí. Cifras solo en
  puntos de scrum; nada de retórica de fundraising.
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

---

## Lote activo — Ola D1 *(asignado 2026-07-16)*

Paralelo: tres chats worker, cada uno con su worktree. Merge sugerido: **D10
antes que D11** (D11 entrega lado a lado con la Nota 1); **D12 independiente**
(contenido del acta; D20 lo maqueta).

### WP-D10

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D10 · Nota 1 · La forma M
Rama: wp/d10-la-forma-m
Worktree: ../SCRIPT_SDK-wp-d10
Reporte: TEST-SWARM/plan/REPORTES/WP-D10-la-forma-m.md

Lecturas extra:
- GUION.md §Nota 1 (tramos 1.0–1.6: partitura literal)
- plan/DECISIONES.md DA-2 (dos estratos lección/apuesta, sellos distintos)
- plan/VISION.md §el género, §candados
- SCRIPT_SDK/DEVOPS/VISION.md §lore (SOLO lectura: holón 06, Gravedad/Gravitón;
  citar, no copiar)

Notas del orquestador:
- Entregable único: TEST-SWARM/NOTAS/nota-1-la-forma-m.md (topología + mapa
  en una página). Crear carpeta NOTAS/ si no existe.
- Dos estratos DA-2: (1) lección — cinco nodos, dualidades, centro vacío,
  sello Verificado + fuente pública; (2) apuesta — holón 06, peldaño faltante,
  sello Doctrina con ancla al pagaré. Nunca mezclar en el mismo párrafo.
- El centro es vacío, no sexto nodo. Afirmación física solo con procedencia
  citada o <pendiente>.
- No tocar GUION.md, gates, ni entregables de D11/D12.
- Gate (c) verde antes de parar: rutas bajo sello Verificado existen.
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

### WP-D11

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D11 · Nota 2 · La máquina y sus partes
Rama: wp/d11-la-maquina
Worktree: ../SCRIPT_SDK-wp-d11
Reporte: TEST-SWARM/plan/REPORTES/WP-D11-la-maquina.md

Lecturas extra:
- GUION.md §Nota 2 (tramos 2.0–2.7: máquina + espejo M↔casa)
- plan/DECISIONES.md DE-2/DE-3 (método + citar-no-copiar)
- SCRIPT_SDK/DEVOPS/VISION.md §misión, §hipótesis OSI, §lore, §asiento de las
  piezas 05–07
- SCRIPT_SDK/DEVOPS/METODOLOGIA/HOLONES.md (asiento holones 05–07)
- HIPOTESIS.md mapa de masas (SOLO lectura: anclas de mundos soberanos)
- NOTAS/nota-1-la-forma-m.md (tras merge de D10; si aún no está en main,
  leer la partitura en GUION.md y dejar hueco para el lado a lado)

Notas del orquestador:
- Entregable único: TEST-SWARM/NOTAS/nota-2-la-maquina.md, lado a lado con
  la Nota 1 (diagrama espejo o sección paralela).
- Estilo Menabrea: dos leyes (ceguera ascendente / acceso descendente),
  crecimiento por junturas, sellos, registry. Honesta: máquina en
  construcción, pendientes declarados.
- Espejo M↔casa término a término; cada ancla Verificado con ruta absoluta
  existente en disco. Centro vacío en ambos grafos.
- No prometer máquina terminada; no tocar D10/D12 ni gates.
- Gates (c)(d) verdes antes de parar.
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

### WP-D12

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D12 · Reedición del acta (v2)
Rama: wp/d12-acta-v2
Worktree: ../SCRIPT_SDK-wp-d12
Reporte: TEST-SWARM/plan/REPORTES/WP-D12-acta-v2.md

Lecturas extra:
- GUION.md §Remate del pack (tramos R.2–R.6: acta v2 en partitura)
- plan/DECISIONES.md DE-5/DE-6/DA-3 (munición≠moneda; puntos de scrum;
  acta como sección final propia)
- plan/VISION.md §glosario (moira)
- Municiones — acta de inversión en una página.htm (SOLO lectura: patrón
  visual moira/stats-bar; NO heredar contaminación munición=pólvora=dinero)

Notas del orquestador:
- Entregable único: TEST-SWARM/ACTA-V2.md (contenido de la sección; WP-D20
  la maqueta en index.html). El .htm v1 NO se toca.
- Correcciones respecto a v1: (a) munición = ideas/obra (Ibáñez), pólvora
  fuera; (b) 100.000 puntos de scrum (40k taller / 25k federación / 25k obra
  / 10k fondo), jamás unidades monetarias; (c) género comparecencia/
  demostración, no solicitud; moira conservada.
- Gate (e) verde antes de parar: cero moneda, cero munición=dinero.
- No HTML ni index.html (eso es D20). No tocar Notas ni gates.
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

---

## Lote activo — WP-D13 *(asignado 2026-07-16)*

**Depende de ✅ WP-D11** (operaciones del método en Nota 2). D10 y D12 ya
aceptados en main.

### WP-D13

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D13 · Nota 3 · La ejecución trazada
Rama: wp/d13-ejecucion
Worktree: ../SCRIPT_SDK-wp-d13
Reporte: TEST-SWARM/plan/REPORTES/WP-D13-la-ejecucion.md

Lecturas extra:
- GUION.md §Nota 3 (tramos 3.0–3.7 y corrida canónica: arco entrada→máquina→salida→acta)
- plan/DECISIONES.md DE-4/DE-5/DE-6/DA-3 (modo Nota G; munición≠moneda; acta como cierre)
- plan/VISION.md §ejecución trazada
- plan/PRACTICAS.md §1.3 (sellos por paso)
- NOTAS/nota-1-la-forma-m.md (cinco nodos, dualidades, centro vacío)
- NOTAS/nota-2-la-maquina.md (operaciones del método: registry, juntura, sello)
- ACTA-V2.md (desemboque 3.7: comparecencia en puntos de scrum)

Notas del orquestador:
- Entregable único: TEST-SWARM/NOTAS/nota-3-la-ejecucion.md. Corazón Lovelace:
  **corre** la M a mano, no explica desde fuera.
- Tabla de traza (tramo 3.6): columnas paso · operación del método · entrada ·
  salida · sello — de «registrar fragmento» a «declarar centro vacío».
- **Solo** operaciones ya definidas en Nota 2; cada paso con sello y fuente;
  reproducible por lector sin contexto (modo Nota G).
- Último paso: centro vacío / capa GRAVEDAD·GRAVITÓN como `<pendiente>` donde
  corresponda; cierre enlazado al acta v2 sin moneda ni promesa futura sin sello.
- No tocar Nota 1/2, ACTA-V2, gates ni HTML (D20).
- Gates verdes antes de parar (en especial (c) rutas Verificado).
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

---

## Lote activo — WP-D20 *(asignado 2026-07-16)*

**Depende de ✅ D10, D11, D12, D13** (contenido en main). Un solo worker; sitio
en `TEST-SWARM/docs/` para que WP-D22 publique.

### WP-D20

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D20 · Pack ensamblado
Rama: wp/d20-pack-ensamblado
Worktree: ../SCRIPT_SDK-wp-d20
Reporte: TEST-SWARM/plan/REPORTES/WP-D20-pack-ensamblado.md

Lecturas extra:
- GUION.md (mapa del pack + Remate R.1–R.6: superposición, acta, sellos, moira)
- plan/DECISIONES.md DA-1/DA-3/DE-8 (index.html fanzine; acta como último acto;
  plantilla mono sin CDNs)
- plan/PRACTICAS.md §1 (autocontención) y §3 (checklist)
- plan/BACKLOG.md WP-D20 (CA literal)
- NOTAS/nota-1-la-forma-m.md, nota-2-la-maquina.md, nota-3-la-ejecucion.md
  (contenido a integrar; no reescribir salvo typos obvios)
- TEST-SWARM/ACTA-V2.md (sección final; §Notas para WP-D20)
- TEST-SWARM/Municiones — acta de inversión en una página.htm (SOLO lectura:
  patrón .stats-bar + countdown; NO heredar moneda ni munición=pólvora)
- Procedencia fanzine (SOLO lectura, copia-release): DE-8 en DECISIONES —
  `aleph-scriptorium\BlockchainComPort\OASIS_PUB\EXTENSIONS\LANDINGPAGE\docs\poster-template\`

Notas del orquestador:
- Entregable único: **sitio navegable** bajo `TEST-SWARM/docs/` (`index.html` +
  `assets/fanzine.css` + enlaces relativos). Crear `docs/` si no existe.
- Orden de la página (DA-1): orientación/guion → Nota 1 → Nota 2 → Nota 3 →
  **superposición** (R.1) → **acta v2** como última `<section>` propia (DA-3).
- Superposición: un `<pre class="diagram">` ASCII; JS inline conmuta etiquetas
  M ↔ casa **sin mover topología**; centro vacío visible en ambas rotulaciones.
- Sellos en pantalla (R.5): Verificado → `.kw`; Doctrina → `.kw-inv`; Pendiente →
  `.stamp`. Moira (R.4): `.stats-bar` + countdown JS; textos de ACTA-V2.md.
- `assets/fanzine.css`: copia-release con **cabecera de procedencia** (gate d);
  paleta mono (#000/#fff, Courier); sin fuentes nuevas ni modo oscuro inventado.
- Cada `<pendiente>` del markdown debe quedar visible en HTML (`.stamp` o texto
  declarado); no tapar cabos sueltos.
- No editar BACKLOG, GUION.md, NOTAS (salvo corrección mínima acordada en
  reporte), gates (`validar-ensayo.sh`), ni acta v1 `.htm`.
- Gates **verdes** antes de parar: `./TEST-SWARM/validar-ensayo.sh` desde raíz.
- Commits: feat(TEST-SWARM): … o docs(TEST-SWARM): … (solo bajo TEST-SWARM/)

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```


---

## Lote activo — Cierre ola D2 *(asignado 2026-07-16)*

Paralelo: dos chats worker (D21 + D22), cada uno con su worktree. **D20 ya ✅**
en main (`TEST-SWARM/docs/` listo). Merge sugerido: **independientes** (D21 solo
`plan/`; D22 entrega runbook/script bajo `TEST-SWARM/` + evidencia de dry-run en
reporte). **Ningún worker hace `git push`** (DA-5).

### WP-D22

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D22 · El estreno público (runbook de publicación)
Rama: wp/d22-estreno-publico
Worktree: ../SCRIPT_SDK-wp-d22
Reporte: TEST-SWARM/plan/REPORTES/WP-D22-estreno-publico.md

Lecturas extra:
- plan/BACKLOG.md WP-D22 (CA literal + runbook bash embebido)
- plan/DECISIONES.md DE-7/DA-4/DA-5 (main huérfana docs+TEST-SWARM; draft
  jamás push; push solo custodio)
- plan/PRACTICAS.md §1 (autocontención del diff del worker) y §3
- TEST-SWARM/docs/ (árbol que debe acabar en docs/ raíz tras publicación)
- Reporte WP-D20-pack-ensamblado.md (revisión orquestador + gates)

Notas del orquestador:
- Entregable: runbook **escrito y probado en seco** — p. ej.
  `TEST-SWARM/plan/runbook-estreno-publico.sh` (Git Bash) que automatice o
  guíe los pasos 1–4 del BACKLOG; documentar precondiciones (paso 0) y el
  bloque «SOLO CUSTODIO» (paso 5) sin ejecutarlo.
- Dry-run: crear rama `main-sitio` huérfana de usar-y-tirar, verificar árbol
  (solo `docs/` + `TEST-SWARM/`; grep cero raíz backstage; sin duplicar sitio
  dentro de TEST-SWARM), borrar rama y limpiar **sin tocar** `main` ni `draft`.
- **PROHIBIDO:** `git push origin draft` o cualquier push. El 403 de credenciales
  es asunto del custodio fuera del WP.
- Opcional en dry-run: nota en runbook si el custodio excluye acta v1 `.htm`
  (DA-4) antes del `git add`.
- Commits: chore(TEST-SWARM): … o docs(TEST-SWARM): … (diff solo TEST-SWARM/)

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```

### WP-D21

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D21 · Acta del ensayo
Rama: wp/d21-acta-ensayo
Worktree: ../SCRIPT_SDK-wp-d21
Reporte: TEST-SWARM/plan/REPORTES/WP-D21-acta-ensayo.md

Lecturas extra:
- plan/BACKLOG.md WP-D21 (CA literal)
- plan/VISION.md §el ensayo y candados del protocolo
- plan/PRACTICAS.md §4 (honestidad en evidencia)
- plan/roles/README.md (ciclo orquestador/worker/revisión)
- plan/REPORTES/WP-D00-gates-ensayo.md … WP-D20-pack-ensamblado.md (todos los
  reportes aceptados del ensayo; commits citados ahí)
- plan/DECISIONES.md (DE/DA cerradas durante el ensayo — contexto de fricciones)

Notas del orquestador:
- Entregable único: `TEST-SWARM/plan/ACTA-DEL-ENSAYO.md` — retrospectiva del
  ensayo general: protocolo (fricciones, tiempos, devoluciones, huecos de roles),
  como insumo para el primer swarm real.
- **CA:** evidencia con rutas a reportes y hashes de commits de este ensayo;
  veredicto explícito «qué cambiar antes del estreno real» (plan/roles,
  PRACTICAS, gates, paralelismo, merge…).
- Hechos en pasado; sin pitch ni promesa sin `<pendiente>`. Cero moneda.
- No tocar `docs/`, NOTAS, gates ni BACKLOG. No push ni merge a main.
- Gates verdes si el acta cita rutas Verificado bajo TEST-SWARM/.
- Commits: docs(TEST-SWARM): …

Empieza: sitúate en rama/worktree (crear worktree desde main @ 8631a1b si falta),
lee PRACTICAS entero, luego implementa.
```
