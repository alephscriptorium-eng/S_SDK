# plan/roles — el protocolo del swarm (TEST-SWARM)

Derivado del protocolo canónico de los mundos hermanos (@ 2026-07-16),
autocontenido aquí. Agnóstico de herramienta: cualquier runner los consume
tal cual.

## Roles

| Prompt | Rol | Cuándo |
| ------ | --- | ------ |
| [ORQUESTADOR.md](ORQUESTADOR.md) | Orquestador | Chat principal: estado, asignación, revisión, ✅ |
| [WORKER.md](WORKER.md) | Worker | Chat nuevo por WP: implementar + reportar |
| [REVISION.md](REVISION.md) | Orquestador | Revisar un entregable (reporte + diff) |
| [CORRECCION.md](CORRECCION.md) | Worker | Tras devolución: corregir en la misma rama |
| [BRIEF.md](BRIEF.md) | Orquestador → usuario | Plantilla de brief para lanzar un worker |

## Dónde vive el estado

- **`plan/BACKLOG.md` es del orquestador y vive en main.** Marca 🔶 al
  asignar y ✅ al aceptar. El worker no lo edita nunca.
- **El reporte vive en la rama del WP** (`plan/REPORTES/WP-….md`): nombre
  único = sin conflictos; llega a main con el merge.
- **`plan/DECISIONES.md` §abiertas es del custodio.**

## Repo y worktrees (regla de este mundo, PRACTICAS §2)

Un solo repo (SCRIPT_SDK); el mundo vive en `TEST-SWARM/`:

- Rama `wp/<id>-<slug>` por WP; el brief la declara.
- Paralelismo: un worktree por chat worker:

```bash
git worktree add ../SCRIPT_SDK-wp-d00 -b wp/d00-gates
# al aceptar y mergear: git worktree remove ../SCRIPT_SDK-wp-d00
```

## Flujo

```text
1. Chat orquestador (ORQUESTADOR.md) → «Estado del swarm»
2. Orquestador propone lote, marca 🔶 en main y rellena un BRIEF por WP
3. Usuario abre worktrees + chats worker (WORKER.md + brief)
4. Worker termina → reporte en plan/REPORTES/ (en su rama) → avisa
5. Chat orquestador (REVISION.md + reporte + rama) → ✅ + merge, o devolución
6. Si devuelto: mismo chat worker (CORRECCION.md + comentarios del reporte)
```

## Reglas de oro

1. Un WP = un chat worker = una rama = (si hay paralelo) un worktree.
2. Solo el orquestador escribe en BACKLOG; solo el custodio cierra
   DECISIONES.
3. Cero escrituras fuera de `TEST-SWARM/` (PRACTICAS §1.1).
4. Ningún sello sin fuente; citar, no copiar (PRACTICAS §1.2–1.3).
5. Munición ≠ moneda; cifras en puntos de scrum; las Notas, no el pitch
   (PRACTICAS §1.7–1.8, DE-4/5/6).
6. El brief + `plan/` bastan: no se asume historial de otros chats.
7. ✅ implica autorización de merge.
8. Commits convencionales (PRACTICAS §1.11).

## Primer lote sugerido (Ola D0)

WP-D00 (gates) y WP-D01 (guion) — paralelizables. D01 es el corazón del
pack: conviene un worker con criterio, no el más rápido.
