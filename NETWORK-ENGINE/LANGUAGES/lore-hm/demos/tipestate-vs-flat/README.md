# Demo · tipestate vs config plana (WP-SDK-L02)

> **Esta demo cambió de tesis.** La versión anterior concluía que la regla era
> *imposible* de expresar en config plana. Es falso, y ahora está medido: los
> tres esquemas de [`flat-schema/`](flat-schema/) la expresan. Lo que el
> tipestate da y el esquema no es **exhaustividad en compilación**, no
> expresividad. Detalle del cambio en `../../REPORTE-ZV-S.md` §⓪.

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
  OK: esquema + fase nueva sin rama `if` ⇒ paused→ready VÁLIDO: permisividad silenciosa, 0 errores
  OK: punto ciego medido: A acepta inflated→ready aislado; C lo rechaza porque exige la traza entera
  OK: illegalJump literal del fixture → INVÁLIDO por esquema A
```

Cotejo del evaluador contra `ajv@8.20.0` (2020-12): **93 comparaciones, 0
desviaciones** — procedimiento y salida literal en `REPORTE-ZV-S.md` §⓪.

## Conclusión (reescrita)

1. **La regla SÍ se expresa con configuración plana.** JSON Schema 2020-12 la
   escribe en tres formas distintas y las tres rechazan `declared→ready`. La
   tesis vieja —«≥1 regla imposible con config plana»— queda **refutada por
   medición**, no matizada.

2. **El discriminante es la exhaustividad, no la expresividad.** Añadir una
   fase al `enum` del esquema sin añadir su rama `if` deja el esquema
   *silenciosamente permisivo*: `paused→ready` pasa, cero errores. El mismo
   olvido en `UnitPhase` pone rojo a `tsc` por el chequeo `never` de
   `describePhase`. El esquema no tiene forma de saber que le falta una rama;
   el compilador sí.

3. **El esquema juzga documentos; el tipo juzga programas.** La forma A acepta
   `inflated→ready` aislado aunque la corrida nunca tuviera lease: sólo ve la
   transición que el documento se acordó de traer. La forma C lo cierra
   exigiendo la traza entera — es decir, exigiendo que quien produce el
   documento diga la verdad. El tipestate no pide colaboración: sin la cadena
   no hay manera de *construir* un `UnitState<'ready'>`.

4. **Coste de deriva.** El esquema es un segundo artefacto que hay que
   mantener sincronizado con la máquina. Esta demo tuvo que añadir un
   cross-check de 72 pares justamente para impedir que naciera una cuarta
   máquina de estados. El tipestate **es** la máquina.
