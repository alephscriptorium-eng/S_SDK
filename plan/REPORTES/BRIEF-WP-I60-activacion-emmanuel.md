# BRIEF · WP-I60 · Activación del skill en emmanuel-sdk (03)

> Ola I6 de SCRIPT_SDK (holón 07). Orquestador: chat principal SCRIPT_SDK.
> Worker: chat/subagente nuevo. Canal directo (custodio media, DE — Eje V).

## Objetivo

El `plan/roles/` de emmanuel-sdk es hoy una **copia derivada** del protocolo
canónico del swarm (6 ficheros). Ese protocolo ya está publicado y versionado
en el paquete `@alephscript/skills-scriptorium@0.2.0 › skills/swarm-orquestacion`.

**Desduplicar:** emmanuel deja de copiar el protocolo genérico y lo
**referencia versionado**; conserva solo su **calibración local** (lo que es
propio de emmanuel y NO vive en el skill genérico).

## Repos tocados

- **emmanuel-sdk** (`C:\Users\aleph\OASIS\SCRIPTORIUM_V0\emmanuel-sdk`) —
  **solo `plan/`**. `ALCANCE_DIFF = plan/`.
- **Prohibido** tocar los submodules de emmanuel, zeus, o cualquier otro
  mundo. Prohibido tocar SCRIPT_SDK desde el worker (el reporte de aceptación
  lo escribe el orquestador).

## Fuentes (leer, no copiar en bloque)

| pieza | ruta |
|---|---|
| Skill canónico (destino de la referencia) | `C:\Users\aleph\S_SDK-skills-library\skills\swarm-orquestacion\` (SKILL.md + reference/roles/) |
| Paquete publicado | `@alephscript/skills-scriptorium@0.2.0` en `https://npm.scriptorium.escrivivir.co` |
| Estado actual a desduplicar | `emmanuel-sdk/plan/roles/` (README, ORQUESTADOR, WORKER, REVISION, CORRECCION, BRIEF) |
| Calibración local a conservar | `emmanuel-sdk/plan/PRACTICAS.md` §2 (submodules) + `plan/README.md` («el motor no trae lore») + DE-1/DE-3 |

## Trabajo

1. **Análisis de dedup:** confirmar qué de `plan/roles/` es copia del
   protocolo genérico (vive ya en el skill) y qué es delta local de emmanuel
   (regla de submodules: un WP toca superproyecto + N submodules, rama por
   repo, bump del puntero lo hace el orquestador; y «el motor no trae lore»).

2. **Sustituir la copia por referencia versionada.** `plan/roles/` pasa a un
   `README.md` que:
   - Declara el protocolo canónico como `@alephscript/skills-scriptorium@0.2.0
     › skills/swarm-orquestacion` (versión **fijada**, no `latest`), con la
     línea de instalación/consulta (`npm view` / instalar del registry real).
   - Conserva **explícita** la calibración local de emmanuel (submodules §2,
     lore-fuera) como delta sobre el canónico, sin re-copiar los prompts
     genéricos.
   - Elimina los 5 prompts duplicados (ORQUESTADOR/WORKER/REVISION/
     CORRECCION/BRIEF) del árbol de emmanuel, ya que su fuente es el paquete.

3. **Coser referencias:** ajustar `plan/README.md` y `plan/PRACTICAS.md` para
   que «autocontenido» pase a significar **«autocontenido vía referencia
   versionada al paquete»** (resoluble por `npm view`, C8), no «copiado aquí».

## CA (verificables, evidencia literal)

- **CA1 · dedup:** grep en `emmanuel-sdk/plan/` de los prompts genéricos del
  protocolo → definido **una sola vez** (referencia al paquete), no copiado.
  Aportar el grep y su salida.
- **CA2 · referencia versionada resoluble (C8):** `npm view
  @alephscript/skills-scriptorium --registry=https://npm.scriptorium.escrivivir.co`
  resuelve y la versión citada (`0.2.0`) existe. Pegar salida literal.
- **CA3 · autocontención:** el `plan/` de emmanuel sigue operable solo con su
  contenido + la referencia versionada; la calibración local (submodules,
  lore-fuera) queda visible sin abrir el paquete.
- **CA4 · alcance:** el diff toca **solo** `emmanuel-sdk/plan/`; cero
  submodules, cero SCRIPT_SDK, cero mundos ajenos nombrados/tocados.
- **CA5 · Eje V (swarms ajenos / mediación):** la activación no rompe la
  ceguera entre mundos; emmanuel no nombra el marco SCRIPT_SDK dentro de su
  cara pública salvo la cita de procedencia versionada del paquete.

## Entregable

- Cambios en `emmanuel-sdk/plan/` (working tree).
- Reporte `emmanuel-sdk/plan/REPORTES/WP-I60-activacion-skill.md` según la
  plantilla, con evidencia literal de CA1–CA5.
- **Git:** ver decisión de arranque abajo (emmanuel-sdk **no tiene commit
  inicial** todavía).

## Nota de git (bloqueante — decisión del custodio)

emmanuel-sdk main está **sin historia** (`No commits yet on main`; submodules
staged sin commitear). El worker **no estrena la historia del repo por su
cuenta**: mecánica exacta la fija el custodio antes del arranque.
