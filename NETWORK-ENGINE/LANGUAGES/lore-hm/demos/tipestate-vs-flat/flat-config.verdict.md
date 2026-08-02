# Veredicto · intento flat config (reescrito tras medir)

> **Corrección.** La versión anterior de este documento afirmaba, citando el
> campo `acceptedByFlatSchema: true` del propio fixture, que un JSON Schema
> aceptaría `declared → ready`, y concluía «≥1 regla imposible con config
> plana». Las dos cosas eran falsas: el campo era una autodeclaración que
> nadie verificaba, y en toda la demo **no había ningún JSON Schema escrito**.
> Ahora los hay, se ejecutan, y el veredicto es el contrario.

## Medición

Ejecutar: `node demos/tipestate-vs-flat/reject-flat-illegal.mjs`

| criterio | veredicto | quién lo emite |
| -------- | --------- | -------------- |
| ¿Un JSON Schema 2020-12 acepta `{"from":"declared","to":"ready"}`? | **NO** — inválido | `flat-schema/A-transicion.schema.json`, ejecutado |
| ¿Y la misma regla escrita como tabla plana de pares? | **NO** — inválido | `flat-schema/B-pares-legales.schema.json`, ejecutado |
| ¿Y sobre la corrida entera con traza? | **NO** — inválido | `flat-schema/C-corrida.schema.json`, ejecutado |
| ¿Aceptan el sucesor legal `declared → leased`? | **SÍ** — válido | A y B |
| ¿Los esquemas codifican la misma máquina que `src/tipestate.ts`? | **SÍ** — 72 pares (6×6 × 2 formas), 0 desviaciones | cross-check en el script |
| ¿Hay lease en la corrida? | **no** (`lease: null`) | dato del fixture |
| ¿El tipestate acepta `transition(declared, 'ready')`? | **no** — `@ts-expect-error` (compilación) **y** tabla derivada (runtime) | `tsc` + script |
| ¿Config plana puede expresar «solo sucesor legal»? | **SÍ puede** | medido arriba |

Cotejo del evaluador propio contra `ajv@8.20.0`: 93 comparaciones, 0
desviaciones.

## Qué queda en pie del contraste

Lo que el tipestate da y el esquema **no**:

1. **Exhaustividad en compilación.** Ampliar el `enum` del esquema sin añadir
   la rama `if` correspondiente ⇒ `paused→ready` VÁLIDO, cero errores
   (medido). El mismo olvido en `UnitPhase` ⇒ `tsc` rojo por el chequeo
   `never` de `describePhase`. El esquema **no puede** detectar que le falta
   una rama; el compilador sí.

2. **Cobertura sin cooperación del productor.** La forma A acepta
   `inflated→ready` aislado aunque no hubiera lease: sólo ve lo que el
   documento trae. La forma C lo cierra exigiendo la traza entera — pero eso
   es exigir que quien escribe el documento diga la verdad. El tipestate no
   pide colaboración: sin la cadena no existe el valor.

3. **Un artefacto, no dos.** El esquema es una copia de la máquina que hay que
   mantener sincronizada. Esta demo necesitó un cross-check de 72 pares para
   evitar que naciera una cuarta máquina de estados en el árbol.

**Conclusión:** no hay «regla imposible en config plana». Hay una **regla que
la config plana sólo cumple si alguien se acuerda de mantenerla completa**, y
esa diferencia —exhaustividad y coste de deriva— es lo que compra el
tipestate. El rechazo es **mecanismo** por los dos lados: esquema ejecutado y
compilador, no markdown.
