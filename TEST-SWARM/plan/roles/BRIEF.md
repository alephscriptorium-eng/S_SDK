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

## Ejemplo — Ola D0

### WP-D01

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-D01 · Guion del pack
Rama: wp/d01-guion-pack
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

Notas: el guion declara sello por tramo; lo no comprobable, <pendiente>.
Las tres Notas (forma M / máquina+espejo / ejecución trazada) son la
partitura; la fuente física de la M se cita en D10, no aquí. Cifras solo en
puntos de scrum; nada de retórica de fundraising.
```
