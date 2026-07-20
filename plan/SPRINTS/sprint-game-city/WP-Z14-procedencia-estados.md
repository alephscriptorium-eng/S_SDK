# WP-Z14 — Procedencia de estados de barrio (cantera versionada)

| dato | valor |
|---|---|
| track / prio | PACK / 1 (micro-WP post GC-1 · D1 vigía) |
| depende de | Z02 ✅ (seeds ya tienen `estado`; este WP ancla la fuente) |
| base | cantera del sprint + generador/`startpack-ciudad` en games-library |
| origen del hallazgo | revisión vigía cierre Ola GC-1 (D1 procedencia) |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md). Esta ficha no lleva glifo de estado.

## Objetivo

Cerrar la discrepancia de **procedencia**: el atributo jugable `estado`
(vivo/latente/muerto/roto) de los 24 barrios en `startpack-ciudad` debe
citarse desde **dato versionado en la cantera del sprint**, no desde un
borrador externo sin commit. Regenerar seeds citando esa cantera.
La cara que aterriza en games-library **solo menciona data/cantera del
sprint** (cero rutas a borradores del plan).

## Entregables

1. Dato versionado en cantera, p.ej. `cantera/CIUDAD/CENSO-ESTADOS.md`
   (tabla barrio-id → estado) **o** campo `estado` en cada ficha de
   `cantera/CIUDAD/01-BARRIOS/`. Preferible un solo fichero censo si las
   fichas no se tocan en masa.
2. Generador de seeds (`ciudad-source` / equivalente) lee **solo** ese
   dato de cantera; comentario o README del generador cita la ruta de
   cantera (no borradores TEMP).
3. Regenerar `seeds/gamemap.json` (y cualquier proyección Z01 que use
   estados) de forma determinista; diff de seeds = 0 si los valores ya
   coincidían, o justificado en el reporte si hubo corrección.
4. Reporte con evidencia: ruta cantera → comando regenerar → checksum /
   diff seeds.

## Criterios de aceptación

- [ ] Existe fuente versionada en `plan/SPRINTS/sprint-game-city/cantera/`
      con los 24 estados.
- [ ] El generador del startpack (y el de mockdatas si aplica el mismo
      atributo) lee esa fuente; grep del generador no apunta a TEMP/ ni
      borradores fuera de cantera.
- [ ] Regenerar produce seeds coherentes; engine/carga estática no rompe.
- [ ] Ceguera: entregable en games-library sin nombres de marco/holones/
      borradores del plan; solo data.
- [ ] Reporte con plantilla del skill + evidencia literal (sin elisiones).

## Notas

- Z01/Z02 ✅ **no se reabren**; este es trabajo nuevo que sella trazabilidad.
- Si los valores actuales de seeds son la verdad operativa, la cantera
  puede **importarse desde esos seeds** (round-trip) y luego el generador
  queda anclado — no hace falta reinventar el censo.
- No pisar paths de Z09 (mini-clon / Docker / WiringEditor).
