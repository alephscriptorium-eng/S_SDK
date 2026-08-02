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

> **Segunda corrección (WP-ZV-S B4).** Esta sección llegó a decir que el
> discriminante era «exhaustividad en compilación», midiendo **sólo la forma
> A**. Medido en las tres con ajv, era demasiado ancho: B y C son fail-closed
> ante el mismo olvido. Lo que sigue es lo que la medición sostiene, y nada más.

Ante el **mismo olvido** —ampliar el alfabeto de fases sin añadir la regla de
transición de la fase nueva—:

| forma | estilo | veredicto |
| ----- | ------ | --------- |
| A | restringir **por excepción** (`if`/`then` por caso) | **permisiva** |
| B | enumerar **lo permitido** (`anyOf` de pares) | fail-closed |
| C | enumeración anidada sobre la traza | fail-closed |
| `tsc` | unión cerrada + `never` en `describePhase` | fail-closed (`TS2322`) |

1. **La permisividad silenciosa es del estilo, no del formato.** La forma B es
   literalmente «la tabla de configuración» y aguanta el olvido igual que el
   compilador. No hay déficit de exhaustividad en la config plana.

2. **Lo que aporta el tipestate es que no deja escribir el estilo malo.** En
   TypeScript la forma cerrada es la única disponible. En JSON Schema conviven
   las dos, son igual de idiomáticas, y **nada avisa de cuál se escribió**.

3. **Cobertura sin cooperación del productor.** La forma A acepta
   `inflated→ready` aislado aunque no hubiera lease: sólo ve lo que el
   documento trae. La forma C lo cierra exigiendo la traza entera — pero eso es
   exigir que quien escribe el documento diga la verdad. El tipestate no pide
   colaboración: sin la cadena no existe el valor.

4. **Un artefacto, no dos.** El esquema es una copia de la máquina que hay que
   mantener sincronizada. Esta demo necesitó un cross-check de 72 pares para
   evitar que naciera una cuarta máquina de estados en el árbol.

**Conclusión:** no hay «regla imposible en config plana», y tampoco un déficit
de exhaustividad de la config plana. Hay **dos estilos de esquema plano, sólo
uno seguro ante la extensión, y ningún aviso de cuál se escribió**. Eso —más el
coste de mantener dos artefactos sincronizados— es lo que compra el tipestate.
El rechazo es **mecanismo** por los dos lados: esquema ejecutado y compilador,
no markdown.
