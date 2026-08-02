# Política de hash DIC-4 · LORE-HM SOLID

Fuente de mandato: `WPS_QUEUE/plan.md` §21 · dossier L01 `SOLID.md` ·
insumo educativo Z_SDK#55 (DIC-4) **por curar**, no copiado como código.

## Reglas

| regla | enunciado | estado |
| ----- | --------- | ------ |
| Default | `huellaLedger = sha256(bytes_utf8_del_wire_sellado)` | **verificada** (diseño + helper `src/hash-dic4.ts`) |
| Semántica | RDFC-1.0 **sólo** donde la igualdad semántica sea requisito **medido** (familia + decisión de vocabulario) | **verificada** (política escrita); activación por familia = `<pendiente>` L04+ |
| Vista | La vista JSON-LD/RDF **no altera** `huellaLedger` existente | **verificada** (contrato + check en script) |
| Algoritmo etiquetado | Digest branded lleva `alg: 'sha256' \| 'rdfc-1.0'` | **verificada** |

## Prohibiciones

- Hashear la vista RDF como si fuera el pie de ledger.
- Cambiar el wire post-sellado sin nueva huella (nueva actividad / nueva versión).
- Afirmar RDFC-1.0 “por defecto” en v1.

## Evidencia local

El script `verificar-solid-l03.mjs` calcula `sha256` del fixture wire y exige
que el fixture de vista **no** contenga ni redefina esa huella como fuente.
