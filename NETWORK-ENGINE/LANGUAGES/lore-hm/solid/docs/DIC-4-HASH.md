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

## Canonicalización del payload sellado (definición única)

Implementación de referencia: [`../scripts/sello-dic4.mjs`](../scripts/sello-dic4.mjs).
Espejo tipado: `assertSealedPayloadShape` en [`../src/hash-dic4.ts`](../src/hash-dic4.ts).

```
payload sellado := objeto wire SIN la clave `huellaLedger`,
                   serializado con claves ordenadas lexicográficamente
                   (recursivo; el orden de los arrays SÍ es significativo),
                   indentación 2 espacios, salto de línea final, UTF-8.
huellaLedger     := { alg: "sha256", digest: sha256(payload sellado) en hex }
```

Propiedades buscadas (todas con caso rojo en `verificar-solid-l03.mjs`):

| propiedad | comprobación |
| --------- | ------------ |
| El sello liga **contenido**, no formato | reordenar claves del wire **no** mueve la huella |
| Mutar el wire **exige** que la huella se mueva | batería sobre toda clave de primer nivel + `actor` + `provenance.wasAssociatedWith`: 0 mutaciones ciegas |
| Mutar la vista **no** puede mover la huella | la vista no entra en el payload, por construcción |
| La vista **apunta** al sello, no lo define | `identifier: "sha256:<64hex>"` debe igualar la huella vigente; vista rancia = rojo |
| El fixture valida contra **su propio** esquema | `schemas/wire-activity.schema.json`, con `huellaLedger` en `required` |

Resellar tras cambiar el wire: `node solid/scripts/sello-dic4.mjs --sellar`.

## Evidencia local

`verificar-solid-l03.mjs` compara la huella **almacenada** en el fixture con la
**recalculada**, y ejecuta las dos direcciones (afirmativa: mutar el wire mueve
la huella · prohibitiva: mutar la vista no la mueve).

> Corrección WP-ZV-S ①: antes de esta entrega no existía sello. El fichero
> llamado *sellado* no contenía `huellaLedger` —que su propio esquema declara
> `required`—, no había ni un sha256 de 64 hex almacenado en todo `solid/`, y
> el script calculaba un digest sólo para verificar que tuviera 64 hex
> (tautología). Medido: cambiar `actor` a `urn:lore-hm:peer:ATACANTE` dejaba
> la suite entera VERDE.
