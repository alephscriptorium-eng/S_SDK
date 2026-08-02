# Demo · tipestate vs config plana (WP-SDK-L02)

> **Esta demo cambió de tesis dos veces, y las dos por medición.**
>
> 1. La versión original concluía que la regla era *imposible* de expresar en
>    config plana. **Falso:** los tres esquemas de [`flat-schema/`](flat-schema/)
>    la expresan (§⓪ del reporte).
> 2. La primera corrección dijo que el discriminante era «exhaustividad en
>    compilación», midiendo **sólo la forma A**. **También demasiado ancho:** la
>    forma B —la tabla plana— es fail-closed ante el mismo olvido, igual que
>    `tsc`. El contraejemplo estaba dentro de esta misma demo, sin medir.
>
> Lo que queda, con la anchura exacta que la medición sostiene, en §Conclusión.
> Detalle en `../../REPORTE-ZV-S.md` §⓪ y §B4.

## La regla

**Unit no puede alcanzar `ready` sin haber pasado por `leased` → `inflated`.**

Máquina canónica — **manda [`src/tipestate.ts`](../../src/tipestate.ts)**:

```
declared → leased → inflated → ready → running → halted → (terminal)
```

`reject-flat-illegal.mjs` **deriva** esa tabla del propio `tipestate.ts`
(parsea `UnitPhase` y `TransitionMap` y comprueba que se describen mutuamente).
No hay copia a mano. Un cambio en la lengua que no llegue aquí pone el gate en
rojo.

> Divergencia declarada, **no** fusionada: el `PodState` de 8 estados
> (`declared|leased|inflated|ready|running|paused|stopped|failed`) que aparece
> en `WPS_QUEUE/investigacion-freeze-vigilancia.md:315` y
> `WPS_QUEUE/DRAFT/PLAN.md:107` pertenece a un WP borrador no aceptado y fuera
> del alcance de esta rama. La lengua no lo implementa. Cuando ese WP entre, se
> reconcilia contra `tipestate.ts` — no contra una tabla copiada en un demo.

## Lo que se mide

| artefacto | qué hace |
| --------- | -------- |
| [`flat-schema/A-transicion.schema.json`](flat-schema/A-transicion.schema.json) | JSON Schema 2020-12 sobre el objeto `{from,to}` — `if`/`then` fija el único sucesor legal |
| [`flat-schema/B-pares-legales.schema.json`](flat-schema/B-pares-legales.schema.json) | La misma regla como **tabla de configuración**: `anyOf` de pares `const` |
| [`flat-schema/C-corrida.schema.json`](flat-schema/C-corrida.schema.json) | La regla sobre la corrida entera: si `phase ≥ ready`, `contains` exige la traza `leased`/`inflated` |
| [`flat-schema/casos.json`](flat-schema/casos.json) | Tabla de casos con veredicto **esperado**; ninguna instancia se autodeclara |
| [`flat-config.attempt.json`](flat-config.attempt.json) | Corrida plana con el salto ilegal. **Sin** `acceptedByFlatSchema` — si alguien lo reintroduce, el gate se pone rojo |
| [`reject-flat-illegal.mjs`](reject-flat-illegal.mjs) | Compila y **ejecuta** los tres esquemas; compara contra `tipestate.ts` |
| [`../../ci/json-schema-mini.mjs`](../../ci/json-schema-mini.mjs) | Evaluador 2020-12 sin dependencias, **fail-closed** ante keyword desconocida |
| [`tipestate-legal.ts`](tipestate-legal.ts) / [`tipestate-illegal.ts`](tipestate-illegal.ts) | La cadena legal y el `@ts-expect-error`, ahora **compilados** por CI (`../../tsconfig.json` + paso `typecheck-lore-hm`) |

## Resultados medidos

```
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/demos/tipestate-vs-flat/reject-flat-illegal.mjs
  OK: esquemas A y B ≡ TransitionMap de tipestate.ts: 72 pares, 0 desviaciones
  OK: config plana (JSON Schema 2020-12) RECHAZA declared→ready y ACEPTA declared→leased
  ·  olvido medido («zzz-fase-sonda» en el alfabeto, sin su regla de transición
       forma A: zzz-fase-sonda→ready = VÁLIDO (permisiva)
       forma B: zzz-fase-sonda→ready = INVÁLIDO (fail-closed)
       forma C: zzz-fase-sonda→ready = INVÁLIDO (fail-closed)
  OK: discriminante medido en LAS TRES formas, con sonda derivada (no un nombre cableado)
  OK: punto ciego medido: A acepta inflated→ready aislado; C lo rechaza porque exige la traza entera
  OK: illegalJump literal del fixture → INVÁLIDO por esquema A
```

Cotejo del evaluador contra `ajv@8.20.0` (2020-12): **93 comparaciones, 0
desviaciones sobre lo que estos tres esquemas ejercitan** — no es equivalencia
sobre todo el subconjunto implementado. Procedimiento en `REPORTE-ZV-S.md` §⓪.

## Conclusión (reescrita dos veces, con la anchura que la medición sostiene)

1. **La regla SÍ se expresa con configuración plana.** JSON Schema 2020-12 la
   escribe en tres formas distintas y las tres rechazan `declared→ready`. La
   tesis original —«≥1 regla imposible con config plana»— queda **refutada por
   medición**, no matizada.

2. **La permisividad silenciosa es del ESTILO de esquema, no de la config
   plana.** Ante el mismo olvido —ampliar el alfabeto de fases y no añadir la
   regla de transición de la nueva—:

   | forma | estilo | veredicto |
   | ----- | ------ | --------- |
   | A | restringir **por excepción** (`if`/`then` por caso) | **permisiva** |
   | B | enumerar **lo permitido** (`anyOf` de pares) | fail-closed |
   | C | enumeración anidada sobre la traza | fail-closed |

   La forma **B es literalmente «la tabla de configuración»** y es fail-closed
   *igual que `tsc`*. Decir «el esquema plano no es exhaustivo» sería tan falso
   como decir que la regla es inexpresable. Lo que falla es un estilo concreto.

3. **Lo que aporta el tipestate: no deja escribir el estilo permisivo.** En
   TypeScript la forma cerrada es la única disponible —una unión es cerrada, y
   `never` en `describePhase` comprueba que no falta ninguna rama (medido:
   `TS2322` al añadir una fase sin su caso)—. En JSON Schema las dos formas son
   igual de idiomáticas, **nada avisa de cuál se escribió**, y sólo una es
   segura ante la extensión. La garantía queda a merced de una decisión de
   estilo que el formato no fuerza ni señala.

4. **El esquema juzga documentos; el tipo juzga programas.** La forma A acepta
   `inflated→ready` aislado aunque la corrida nunca tuviera lease: sólo ve la
   transición que el documento se acordó de traer. La forma C lo cierra
   exigiendo la traza entera — es decir, exigiendo que quien produce el
   documento diga la verdad. El tipestate no pide colaboración: sin la cadena
   no hay manera de *construir* un `UnitState<'ready'>`.

5. **Coste de deriva.** El esquema es un segundo artefacto que hay que
   mantener sincronizado con la máquina. Esta demo tuvo que añadir un
   cross-check de 72 pares justamente para impedir que naciera una cuarta
   máquina de estados. El tipestate **es** la máquina.

> La sonda del punto 2 **deriva** un nombre ausente de `UnitPhase`; no cablea
> ninguno. Cablear `'paused'` hacía que añadir esa fase correctamente pusiera
> el gate rojo mientras `'suspended'` pasaba — y `paused` es justo el estado
> del `PodState` que este árbol promete reconciliar.
