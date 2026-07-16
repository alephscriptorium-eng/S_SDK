# plan/ — centro de mando de TEST-SWARM

Mundo del **ensayo general**: réplica reinicializada del protocolo canónico
de los mundos hermanos (procedencia: `emmanuel-sdk/plan` @ 2026-07-16, la
más delgada de las accesibles). Aquí trabaja un **swarm de agentes** con un
**orquestador que solo lee ficheros y piensa**: el swarm implementa WPs, el
orquestador asigna, revisa y es el único que marca ✅; el usuario (el
custodio) resuelve las decisiones abiertas.

El producto de este mundo es el **pack demostración**, al género de las
**Notas de Lovelace** (DE-4): describe la máquina —el método de holones— y
**corre a mano** un caso sobre ella aunque esté en construcción. El caso son
tres Notas (la forma M como holón 06 · la máquina y su espejo doméstico · la
ejecución trazada) que desembocan en la superposición y en el **acta v2**
saneada. Papel primero: se entregan documentos, no producto. La unidad es el
**punto de scrum**, jamás la moneda.

Este plan es autocontenido: basta por sí solo, sin historial de chats ni
lecturas externas. Y es **demolible entero** (DE-0): banco de pruebas, no
doctrina.

## Mapa de documentos

| doc | qué contiene | quién lo edita |
| --- | ------------ | -------------- |
| [VISION.md](VISION.md) | la idea, el pack, los candados, glosario | orquestador |
| [BACKLOG.md](BACKLOG.md) | olas D0–D2 con CA | orquestador (estado); swarm propone |
| [PRACTICAS.md](PRACTICAS.md) | **lectura obligatoria antes de tocar nada** | orquestador |
| [DECISIONES.md](DECISIONES.md) | tomadas (DE-n) y abiertas (DA-n, las cierra el custodio) | orquestador |
| [roles/](roles/README.md) | protocolo del swarm (orquestador/worker/revisión/corrección/brief) | orquestador |
| [REPORTES/](REPORTES/) | un acta por WP, según [REPORTES/PLANTILLA.md](REPORTES/PLANTILLA.md) | swarm |

## Ciclo de trabajo (resumen; detalle en roles/)

1. El orquestador asigna un WP (marca 🔶 en BACKLOG, siempre en main) y
   entrega un brief.
2. El worker implementa en rama `wp/<id>-<slug>` (worktree si hay paralelo),
   con gates y auto-revisión.
3. Reporte en `REPORTES/WP-<id>-<slug>.md` con evidencia literal
   (`⏳ sin verificar` existe; inventar observaciones, no).
4. El orquestador revisa contra CA + PRACTICAS y marca ✅ (= autorización de
   merge) o devuelve.

## La regla que gobierna todo lo demás

Este mundo **no escribe fuera de `TEST-SWARM/` ni copia árboles ajenos**:
los mundos reales se releen y se citan, jamás se tocan. **Ningún sello sin
fuente**: lo Verificado lleva ruta que existe; lo no comprobado se declara
`<pendiente>`, no se vende. **Munición ≠ moneda** (DE-5): las municiones son
ideas y obra, jamás dinero; toda cifra de capacidad va en **puntos de
scrum**. Y **las Notas, no el pitch** (DE-4): comparece y demuestra, no
solicita.
