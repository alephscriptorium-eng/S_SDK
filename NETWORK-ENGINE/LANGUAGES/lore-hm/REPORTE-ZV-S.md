# REPORTE-ZV-S · lore-hm

Worker del swarm Z·V recogiendo el trabajo del swarm idle, tras dos vueltas de
auditoría adversarial.

| dato | valor |
| ---- | ----- |
| worktree | `C:/S_LAB/wt/s-sdk-wp-sdk-l05` |
| rama | `wp/sdk-l05-sellado-de-network-engine` |
| tip de partida | `d6be525` |
| commits de obra | `9917e55`, `d2a2936` |
| alcance | `NETWORK-ENGINE/LANGUAGES/lore-hm/**`, `DEVOPS/METODOLOGIA/holones/**`, `.github/workflows/ci-lore-hm.yml` |
| fecha de medición | 2026-08-02 |
| entorno | node v22.21.1 · npm 10.9.4 · Windows 11 · typescript 5.9.3 · ajv 8.20.0 (ambos fuera del árbol, ver §Herramienta) |

**NO se ha empujado nada.** `plan/` intacto. Ningún fichero fuera del alcance
modificado (`HOLONES/03-emmanuel/`, `WPS_QUEUE/`, `package.json` raíz: sólo
leídos).

---

## Resumen

| frente | estado | evidencia |
| ------ | ------ | --------- |
| ⓪ CI configurado para rechazar su propia corrección | **cerrado** | los 3 esquemas existen y se ejecutan; tesis reescrita |
| ① sello DIC-4 inexistente | **cerrado** | huella almacenada + dos direcciones + batería de 12 mutaciones |
| ② sellado no muerde (13/13 mutaciones verdes) | **cerrado** | 0/13 verdes tras el arreglo |
| ③ la lengua no compila | **cerrado** | `tsc` verde + paso bloqueante en CI |
| ④ regla anti-acuñación exime 20/29 | **cerrado mi lado** · hub **enrutado** | 0/12 mutaciones verdes; residual declarado en §④ |
| ⑤-a orden de fusión | **decisión declarada** | §⑤ |
| ⑤-b checkout cruzado anclado a rama | **no está en este árbol** — enrutado | §⑤ |

---

## ⓪ El CI estaba configurado para rechazar su propia corrección

### Lo medido antes de tocar nada

`reject-flat-illegal.mjs:37-42` exigía que el fixture se autodeclarase
aceptable por esquema plano. Corregir el fixture a la verdad ponía rojo un paso
bloqueante:

```
$ node -e "…acceptedByFlatSchema: true → false…"
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/demos/tipestate-vs-flat/reject-flat-illegal.mjs
FAIL: illegalJump debe declarar acceptedByFlatSchema=true (sin rechazo de esquema)
reject exit=1
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs
verificar-inception-l02: FAIL (1 errores)
l02 exit=1
```

Confirmado también que en toda la demo **no había ningún JSON Schema escrito**.

### Lo hecho

Se escriben los tres esquemas planos que la demo debía tener, en JSON Schema
2020-12 estándar, y **se ejecutan**:

- `demos/tipestate-vs-flat/flat-schema/A-transicion.schema.json` — `if`/`then`
  sobre `from` fija el único sucesor legal. Valida el objeto `illegalJump`
  **literal** del fixture.
- `demos/tipestate-vs-flat/flat-schema/B-pares-legales.schema.json` — la misma
  regla como tabla plana: `anyOf` de pares `const`.
- `demos/tipestate-vs-flat/flat-schema/C-corrida.schema.json` — la regla sobre
  la corrida entera: si `phase ≥ ready`, `contains` exige la traza.
- `demos/tipestate-vs-flat/flat-schema/casos.json` — 7 transiciones + 4
  corridas con veredicto esperado.
- `ci/json-schema-mini.mjs` — evaluador 2020-12 sin dependencias, **fail-closed
  ante keyword desconocida** (una keyword no implementada *lanza*; nunca se
  evalúa «válido por omisión»).

`flat-config.attempt.json` pierde `acceptedByFlatSchema` y
`acceptedByTipestate`. El gate ahora **prohíbe** esos campos.

### Salida literal (verde)

```
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/demos/tipestate-vs-flat/reject-flat-illegal.mjs
  OK: tipestate.ts: 6 fases · 6 filas de TransitionMap (derivado, no copiado)
  OK: esquemas A/B/C compilados (2020-12, evaluador fail-closed ante keyword desconocida)
  OK: esquemas A y B ≡ TransitionMap de tipestate.ts: 72 pares, 0 desviaciones
  OK: tabla de casos: 18 evaluaciones de esquema, 0 desviaciones
  OK: config plana (JSON Schema 2020-12) RECHAZA declared→ready y ACEPTA declared→leased
       ⇒ la tesis vieja («regla imposible en config plana») queda REFUTADA por medición
  OK: tipestate runtime también RECHAZA declared→ready (coinciden, no se contradicen)
  OK: esquema + fase nueva sin rama `if` ⇒ paused→ready VÁLIDO: permisividad silenciosa, 0 errores
       ⇒ el mismo olvido en `UnitPhase` pone rojo a tsc (describePhase, chequeo `never`)
       ⇒ discriminante = EXHAUSTIVIDAD EN COMPILACIÓN, no expresividad
  OK: punto ciego medido: A acepta inflated→ready aislado; C lo rechaza porque exige la traza entera
       ⇒ el esquema sólo juzga lo que el documento se acuerde de traer
  OK: fixture sin autodeclaración: ningún campo del dato decide su propio veredicto
  OK: illegalJump literal del fixture → INVÁLIDO por esquema A (1 error(es))
       #/allOf/0/then/properties/to: const: esperado "leased", recibido "ready"
reject-flat-illegal: PASS
```

### La conclusión cambió — no se forzó la vieja

`demos/tipestate-vs-flat/README.md` y `flat-config.verdict.md` están
reescritos. Tesis nueva, con las cuatro afirmaciones medidas:

1. **La regla SÍ se expresa con config plana.** Las tres formas rechazan
   `declared→ready`. La tesis vieja queda **refutada**, no matizada.
2. **El discriminante es la exhaustividad, no la expresividad.** Ampliar el
   `enum` del esquema sin añadir su rama `if` ⇒ `paused→ready` VÁLIDO, cero
   errores. El mismo olvido en `UnitPhase` ⇒ `tsc` rojo (ver §③ ROJO-B).
3. **El esquema juzga documentos; el tipo juzga programas.** A acepta
   `inflated→ready` aislado; C sólo lo cierra exigiendo que el productor traiga
   la traza entera.
4. **Coste de deriva:** el esquema es un segundo artefacto que hay que
   sincronizar. Esta demo necesitó el cross-check de 72 pares para impedir que
   naciera una cuarta máquina de estados.

El gate `verificar-inception-l02.mjs` ya **no exige la tesis vieja**: el check
`/imposible|no puede/i` se sustituye por (a) citar los tres esquemas, (b)
declarar el discriminante medido, (c) un **round-trip numérico** — el «72
pares» del documento se recalcula de `src/tipestate.ts` en cada corrida.

### Las tres máquinas de estados → una

`reject-flat-illegal.mjs:15-20` decía ser «espejo de `tipestate.ts` / podstore»
y no lo era: 4 claves, un `failed` inexistente en `tipestate.ts`, sin
`running`/`halted` — bajo esa tabla `running→halted` (la cadena canónica) era
ILEGAL.

**Quién manda: `src/tipestate.ts`.** El script ahora **deriva** la tabla
parseando `UnitPhase` y `TransitionMap` del propio fichero, comprueba que se
describen mutuamente, y verifica que los esquemas A y B codifican exactamente
esa tabla (36 pares × 2 formas).

La tercera máquina —`PodState` de 8 estados
(`declared|leased|inflated|ready|running|paused|stopped|failed`) en
`WPS_QUEUE/investigacion-freeze-vigilancia.md:315` y
`WPS_QUEUE/DRAFT/PLAN.md:107`— es de un **WP borrador no aceptado**, fuera del
alcance de esta rama. `WPS_QUEUE/` está fuera del ALCANCE_DIFF: **no se toca**.
Queda declarada como divergencia en el README de la demo y en el comentario del
script; cuando ese WP entre, se reconcilia contra `tipestate.ts`.

### Casos rojos (clase, no caso)

| mutación | resultado |
| -------- | --------- |
| reintroducir `acceptedByFlatSchema: true` | `FAIL: flat-config.attempt.json se autodeclara: acceptedByFlatSchema — el veredicto lo pone el esquema al ejecutarse, no el fixture` |
| cambiar `TransitionMap.inflated: 'ready'` → `'running'` sin tocar el esquema | `FAIL: esquema A: inflated→ready = true, tipestate.ts dice false` (+ 3 más) |
| añadir `paused` a `UnitPhase` (cita «72 pares» queda rancia) | `FAIL: veredicto/README citan un número de pares distinto de 98 (7 fases × 7 × 2 formas) — cita rancia tras cambiar la máquina` |

---

## ① El sello DIC-4

### Lo medido antes

```
$ sed -i 's/urn:lore-hm:peer:h-demo/urn:lore-hm:peer:ATACANTE/' solid/fixtures/wire-activity.sealed.json
$ npm run test:lore-hm-lengua
suite-lengua: PASS (5 verificadores)
SUITE_EXIT=0
```

Cambiar el actor del wire autoritativo dejaba la suite entera **VERDE**.
Causas: (1) el fichero llamado *sellado* no contenía `huellaLedger`, que su
propio `schemas/wire-activity.schema.json:7-14` declara `required`; (2) no
había ni un sha256 de 64 hex almacenado en todo `solid/`; (3)
`verificar-solid-l03.mjs:210` comprobaba una lista de claves escrita a mano que
omitía `huellaLedger`, y `:216-218` calculaba un digest sólo para verificar que
tuviera 64 hex — tautología.

### Lo hecho

`solid/scripts/sello-dic4.mjs` define la canonicalización **única**:

```
payload sellado := objeto wire SIN la clave `huellaLedger`,
                   claves ordenadas lexicográficamente (recursivo),
                   indentación 2, salto de línea final, UTF-8.
huellaLedger     := { alg: "sha256", digest: sha256(payload sellado) }
```

Huella almacenada del fixture:
`sha256:cc6a07318ce61f3aaf2fde77d21cea0b4126fa5ed7fdb4b9040d7e5d9341e91b`.

`verificar-solid-l03.mjs` sustituye la lista a mano por:

- **validación contra su propio esquema** (con el evaluador de `ci/`), y una
  guarda extra por si alguien relaja el esquema en vez de arreglar el dato;
- **huella almacenada ≡ recalculada**;
- **AFIRMATIVA** — batería sobre *toda* clave de primer nivel del wire + el
  caso nombrado `actor→ATACANTE` + `provenance.wasAssociatedWith`: 12
  mutaciones, las 12 deben mover la huella;
- **PROHIBITIVA** — mutar la vista no puede mover la huella (por construcción:
  la vista no entra en el payload);
- **la vista apunta al sello sin definirlo** — `identifier: "sha256:<64hex>"`
  debe igualar la huella vigente; vista rancia = rojo;
- **canonicalización** — reordenar claves NO mueve la huella (el sello liga
  contenido, no formato).

`docs/DIC-4-HASH.md` y `src/hash-dic4.ts` (`LEDGER_KEY`,
`assertSealedPayloadShape`) quedan alineados.

### Salida literal (verde)

```
  OK: wire fixture valida contra su propio esquema (huellaLedger incluido)
  OK: huellaLedger almacenada ≡ sha256(payload sellado) = cc6a07318ce61f3a…
  OK: afirmativa: 12 mutaciones del wire, 12 mueven la huella (0 ciegas)
  OK: canonicalización: reordenar claves del wire NO mueve la huella
  OK: vista sin huellaLedger
  OK: vista authoritative:false
  OK: prohibitiva: mutar la vista NO mueve la huella del wire
  OK: vista.identifier apunta al sello vigente del wire (apunta, no define)
```

### Caso rojo

```
$ sed -i 's/urn:lore-hm:peer:h-demo/urn:lore-hm:peer:ATACANTE/' solid/fixtures/wire-activity.sealed.json
$ npm run test:lore-hm-lengua
FAIL: huellaLedger.digest almacenada ≠ recalculada
FAIL: vista.identifier=cc6a07318ce61f3a… ≠ huella del wire bb81ff9686eb1e49… (vista rancia)
suite-lengua: FAIL — verificar-solid-l03 exit=1
suite-lengua: FAIL (1/5)
SUITE_EXIT=1
```

**Clase cerrada, no caso:** la batería recorre todas las claves, así que no es
`actor` lo que está protegido — es el contenido del wire.

---

## ② El sellado no mordía

### Batería antes / después

Harness: `verificar-sellado-l05.mjs` corrido contra 13 mutaciones, con
backup/restore explícito de los ficheros tocados.

| # | mutación | antes | después |
| - | -------- | ----- | ------- |
| M1 | `L_SDK/` + `package.json {"name":"@logos/lore-hm"}` + `HOLONES/08-logos/` | VERDE | ROJO |
| M1b | `LSDK/` | VERDE | ROJO |
| M1c | `packages/lore-hm/package.json` con `@logos/lore-hm` | VERDE | ROJO |
| M1d | `HOLONES/08-lore-hm/.gitkeep` | VERDE | ROJO |
| M2 | fila 08 en **negrita** | VERDE | ROJO |
| M2b | fila 08 con padding | VERDE | ROJO |
| M2c | fila 08 en HTML | VERDE | ROJO |
| M2d | fila 08 como ítem de lista | VERDE | ROJO |
| M3 | añadir 08 y borrar 06 (total sigue 7) | VERDE | ROJO |
| M4 | junturas reducidas a dos palabras | VERDE | ROJO |
| M5 | junturas dicen «**Nada** pendiente» | VERDE | ROJO |
| M5b | juntura íntegra pero «costura cerrada y fusionada» | VERDE | ROJO |
| M6 | asiento a 790 chars diciendo «INFLADO, submódulo añadido» | VERDE | ROJO |
| | **resumen** | **13/13 verdes** | **0/13 verdes** |

### La causa y el arreglo, CA por CA

**CA anti-holón-08 / anti-L_SDK — no tenía guard, ni malo.** El único hit de
«L_SDK» en código ejecutable de todo el árbol era el comentario de
`verificar-inception-l02.mjs:165-168`, que anunciaba «anti holón 08 / L_SDK» y
cuyo código grepeaba la palabra «cinco»: un comentario mal etiquetado colocado
exactamente donde un revisor lo buscaría. **Se ha hecho lo uno y lo otro:** el
comentario se retira y se sustituye por lo que el código hace de verdad (anclar
la ontología, ahora exigiendo los 5 nombres además de la palabra «cinco»), y el
guard real se implementa en `verificar-sellado-l05.mjs` →
`checkNoExtraccionLengua()`.

> **Corrección de tres frases falsas de la primera versión de este informe.**
> Decían «recorre **todos** los directorios», «**cualquier** `package.json` a
> cualquier profundidad» y «cualquier `HOLONES/08…` **o superior**». Las tres
> eran más anchas que el código: el guard reutilizaba el walk del grep-gate y
> heredaba sus skips (`NETWORK-ENGINE/L_SDK/` pasaba), iteraba la lista de
> `package.json` **post-skip**, y el patrón de holón exigía **dos** dígitos
> (`HOLONES/8-logos/` pasaba). Además evadían `LORE_HM_SDK/`, `name:"lore_hm"`
> (el regex no cubría el guion bajo), la fila 08 declarada en **otro** fichero
> de la metodología, y un submódulo declarado en `.gitmodules`.
>
> Ya es cierto, y con censo propio: `censoIntegro()` recorre el árbol entero
> saltando sólo `.git` y `node_modules` (**157 directorios, 6 `package.json`**,
> frente a los 91/post-skip de antes); el patrón de directorio es `l…SDK` con
> relleno arbitrario; el de holón acepta uno o dos dígitos; el de `name` cubre
> `-`, `_` y sin separador; se revisan los `.md` de `DEVOPS/METODOLOGIA/`
> completos con exención **por línea**; y se leen los `path` de `.gitmodules`.
> Los seis vectores de evasión están en la batería (E1–E6, todos rojos).

**CA HOLONES.md — cardinalidad → identidad del conjunto.** El regex viejo no
casaba `| **08** |`, así que la fila entraba en negrita sin mover el conteo; y
añadir 08 borrando 06 dejaba el total en 7. Ahora se **desnuda** cada primera
celda (negrita, cursiva, HTML, backticks, viñetas) y se exige que el conjunto
sea exactamente `{01..07}` — sin sobrantes, sin faltantes, sin duplicados. Más
una guarda contra declarar un holón 08 fuera de tabla.

**CA junturas — el patrón se subsumía a sí mismo.** `/⏳ pendiente|pendiente/`
casaba dentro de «Nada pendiente». Ahora se exige: encabezado `# Juntura NN↔MM`,
sección `## La grieta`, sección `## …LORE-HM`, marcador `⏳ pendiente`, cita de
`E01`+`E11` y del sellado — **y ninguna negación** de la pendencia («nada
pendiente», «costura cerrada/fusionada», «madurez 🟢», «ya no está pendiente»).

**CA asiento — bytes → propiedad.** `length > 800` dejaba pasar 790 chars
diciendo «INFLADO». Ahora: `.gitmodules` no puede registrar el asiento, el
directorio no puede contener `.git`, sólo puede haber `README.md`, el README no
puede **afirmar** el inflado, y sí debe declarar la reserva (con el texto
desnudo, para que la negrita no la falsee). `HOLONES/03-emmanuel/` está fuera
del alcance: **no se modificó** — el gate se adaptó al contenido real.

### Superficie del grep-gate: de 1 fichero a 75

Medido antes: `SKIP_PREFIXES` excluía `DEVOPS/ plan/ docs/ WPS_QUEUE/ .claude/`
y `CODE_EXT` limitaba a `.ts/.js/.json`, dejando **1 fichero de 782**
(`package.json`, que además ya cubría otro check).

Ahora:

- skips reducidos a 4, **cada uno con su razón, impresa en cada corrida**;
- allowlist de hits **fichero a fichero con motivo** (2 ficheros: el workflow y
  `suite-lengua.mjs`, ambos arneses que invocan verificadores por ruta) — ya no
  hay directorios enteros exentos;
- **anclas de superficie**: si `package.json`, el workflow o `suite-lengua.mjs`
  dejan de escanearse, rojo;
- **suelo** `MIN_ESCANEADOS = 40` (medido: 75);
- **autocomprobación**: `HIT_RE` debe morder un import sintético en cada
  corrida.

Caso rojo de la regresión (volver a ensanchar los skips):

```
$ # reañadir 'DEVOPS/', 'plan/', 'docs/' a SKIPS
$ node NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-sellado-l05.mjs
FAIL: superficie del grep-gate: no se escanean las anclas DEVOPS/…/suite-lengua.mjs — ¿se reintrodujo un skip de conveniencia?
FAIL: superficie del grep-gate = 4 ficheros < suelo 40: el mecanismo es real pero no mira nada
EXIT=1
```

---

## ③ La lengua no compilaba

### Lo medido antes

```
$ tsc --noEmit --strict --target ES2022 --module NodeNext --moduleResolution NodeNext src/index.ts
src/brands.ts(16,10): error TS2352: Conversion of type 'S' to type 'Iri' may be a mistake …
src/brands.ts(20,10): error TS2352: Conversion of type 'S' to type 'Digest' may be a mistake …
TSC_EXIT=2
$ grep -c tsc .github/workflows/ci-lore-hm.yml
0
```

### Lo hecho

- `src/brands.ts` → `as unknown as Iri` / `as unknown as Digest`.
- `NETWORK-ENGINE/LANGUAGES/lore-hm/tsconfig.json` — `strict`, `noEmit`,
  `NodeNext`, más `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
  `verbatimModuleSyntax`. Cubre `src/`, `solid/src/` y `demos/`.
- `exactOptionalPropertyTypes` sacó dos errores reales más, corregidos:
  `solid/src/identity.ts:61` y `solid/src/planes.ts:34` construían objetos con
  `undefined` explícito donde el tipo pedía la clave ausente. En `identity.ts`
  eso además contradecía la «degradación honesta» (la clave ausente es lo que
  concuerda con `missing[]`).
- `.github/workflows/ci-lore-hm.yml` gana el paso **bloqueante**
  `typecheck-lore-hm`, con toolchain fijada:
  `npx --yes --package=typescript@5.9.3 -- tsc -p …/tsconfig.json`.

**Por qué `npx` y no `devDependencies`:** `package.json` raíz está fuera del
ALCANCE_DIFF, y además el propio sellado L05 prohíbe que el workspace raíz
declare dependencias de la incubación. La versión va fijada en `env.TS_VERSION`.

### Verde y tres casos rojos

```
$ tsc -p NETWORK-ENGINE/LANGUAGES/lore-hm/tsconfig.json
TSC_EXIT=0
```

| mutación | salida |
| -------- | ------ |
| revertir `brands.ts` a `value as Iri` | `error TS2352` ×2 |
| añadir `paused` a `UnitPhase` sin caso en `describePhase` | `src/tipestate.ts(63,13): error TS2322: Type '"paused"' is not assignable to type 'never'.` |
| que la transición ilegal deje de serlo | `tipestate-illegal.ts(18,1): error TS2578: Unused '@ts-expect-error' directive.` |

El segundo es, además, la **medición del discriminante de §⓪**: el olvido que
el esquema plano acepta en silencio, el compilador lo pone rojo.

---

## ④ La regla anti-acuñación

### Lo medido antes (mi lado)

Con el registro y el gate originales:

| mutación | resultado |
| -------- | --------- |
| acuñar `hm:Announce` junto a `as:Announce` | VERDE |
| acuñar `lore:Join` junto a `as:Join` | VERDE |
| acuñar `hm:UnitHalt`, sinónimo de `hm:UnitStop` del propio fichero | VERDE |
| `coinReason` = once puntos | VERDE |
| sustituir las 98 líneas de `CONSUMO-HUB-101.md` por una línea de basura con tres palabras clave | VERDE |
| borrar `w3cEquivalents` entero | ROJO |

Causas: el detector de duplicados era **igualdad exacta de CURIE**
(`seenTerms.has(e.term)`); `reason` era `.length ≥ 10`; y la comprobación del
protocolo de consumo era un **substring** (`md.includes(path)` + `/stub/i` +
`/migraci[oó]n/i`).

### Lo hecho

**Indexar por tipo semántico, no por nombre.** Las 40 entradas notariadas ganan
`semanticType` (tipo punteado en minúsculas). Unicidad exigida **entre entradas
activas** — un término nuevo para un tipo ya notariado es acuñación paralela.
El retiro libera el hueco (por eso `hm:Lease`, retirado, puede compartir
`provenance.association` con `prov:wasAssociatedWith`, que es exactamente lo que
dice su `retireReason`).

**Consultar los 40, no la proyección de 9.** El registro publica
`notariadosPorTipoSemantico` — las **39 entradas activas** indexadas por tipo
semántico, con `term`/`family`/`namespace`/`verb`/`verbAliases` — más
`retirados[]` con la 1 retirada. `w3cEquivalents` (9 claves) se conserva como
**proyección legacy** para el gate actual del hub, y el verificador comprueba
que sea consistente con `entries[]`.

**`coinReason` deja de ser longitud.** Ahora exige prosa argumentada (≥40
chars, ≥6 palabras de ≥3 letras, ≥5 palabras distintas) **y** `w3cChecked[]`:
la lista de candidatos W3C concretos evaluados y descartados antes de acuñar
(las 22 acuñaciones la llevan). Además, colisión léxica: el local name
normalizado de una acuñación no puede chocar con el de ningún término de
familia W3C — cambiar el prefijo no crea un término nuevo.

**El protocolo de consumo deja de verificarse por substring.**
`docs/CONSUMO-HUB-101.md` lleva ahora un bloque de contrato en JSON que el gate
**parsea y coteja** contra el registro vivo (path canónico, `$id`, 40/39/1,
nombre de la superficie y del índice). Más las cuatro secciones obligatorias y
las tres piezas del protocolo de resolución (`LORE_HM_VOCAB_REGISTRY`,
`fail-closed`, `Prohibido`).

### Batería después: 0/12 verdes

```
BASE exit=0
ROJO V1  acuñar hm:Announce (duplica as:Announce, otra CURIE)
ROJO V2  acuñar lore:Join (duplica as:Join)
ROJO V3  acuñar hm:UnitHalt con el tipo semántico de hm:UnitStop
ROJO V4  coinReason = once puntos
ROJO V4b coinReason de 11 palabras repetidas
ROJO V4c acuñación sin w3cChecked
ROJO V5  CONSUMO-HUB-101.md → 1 línea de basura con 3 palabras clave
ROJO V5b contrato rancio (activas: 39 → 40)
ROJO V6  borrar w3cEquivalents entero
ROJO V7  borrar notariadosPorTipoSemantico
ROJO V8  entrada nueva sin semanticType
ROJO V9  borrar la fila retirada (retiro por borrado)

resumen: 0/12 mutaciones pasan en verde
```

### Residual declarado

Un autor que **invente un `semanticType` nuevo y falso** para un concepto ya
notariado (p. ej. `hm:UnitHalt` con `semanticType: "unit.lifecycle.terminate"`)
seguiría pasando. Lo que se ha cerrado es la acuñación **por omisión**: sin
tipo semántico declarado, sin candidatos W3C evaluados, con razón de relleno, o
duplicando léxicamente un término W3C, ya no se puede. Distinguir dos tipos
semánticos genuinamente distintos de uno disfrazado es **juicio notarial**, no
mecánico; el registro deja la firma y la fecha para que ese juicio tenga dueño.

### El gate del hub — NO es mío, queda enrutado

Repo distinto, worker distinto. Enrutado con fichero, función y línea en
`docs/CONSUMO-HUB-101.md` §Superficie y en el comentario de
`vocab/scripts/verificar-vocab-l04.mjs`:

- `playground/prueba-de-H-M/ci/test-101-ontologia.mjs` · `gateVocabCoining()`
  — `const equiv = registry.w3cEquivalents[verb]; if (!equiv) continue;`
  indexa por **nombre de verbo** contra un mapa de 9, y exime a los 20 verbos
  restantes de los 29 del playground.
- mismo fichero — umbral `coinReason.length > 10`.
- **Qué debe hacer:** indexar por `semanticType` sobre
  `notariadosPorTipoSemantico` (39 activas) y recorrer el índice completo; un
  verbo sin tipo semántico declarado no queda exento, queda rojo.

---

## ⑤ Las dos cosas de forma

### ⑤-a Orden de fusión — decisión declarada

`ci-lore-hm.yml` vive sólo en esta rama. Si L01–L04 se fusionaran en el orden
declarado, entrarían a `main` **sin ningún gate**.

**Decisión: L05 se fusiona primero** (trae el arnés) y L01–L04 se rebasan sobre
él, para entrar ya con los gates encima. La alternativa —adelantar sólo el
workflow a `main` en un PR aparte— se descarta: separaría el arnés de los
verificadores que invoca y dejaría el job rojo hasta que llegue el resto.

Escrito en la cabecera del propio `ci-lore-hm.yml` para que viaje con el
fichero. **Es una decisión de orquestación: si el custodio prefiere lo
contrario, el cambio es una línea en el plan, no en el código.**

### ⑤-b Checkout cruzado anclado a rama — no está en este árbol

Re-medido:

```
$ ls .github/workflows/                → ci-lore-hm.yml  docs.yml
$ grep -rn "ref:" .github/workflows/   → (sin resultados)
```

El único `actions/checkout@v4` de este repo no lleva `ref`. El checkout cruzado
que apunta a `ref: wp/sdk-l05-…` **vive en el workflow del otro repo (hub)** y
está fuera del ALCANCE_DIFF. **Enrutado, no arreglado.**

Lo que hay que hacer allí: sustituir `ref: wp/sdk-l05-sellado-de-network-engine`
por el **SHA** del tip aceptado o por un **tag** creado al fusionar — esa rama
muere en el merge y el checkout se rompe en silencio (o peor: resuelve a algo
distinto si el nombre se reutiliza).

---

## Herramienta: por qué hay un evaluador JSON Schema en el árbol

Todos los `verificar-*.mjs` declaran «sin deps externas», y `package.json` raíz
está fuera del ALCANCE_DIFF. Para **ejecutar** esquemas de verdad hacía falta un
evaluador en el árbol: `ci/json-schema-mini.mjs`, subconjunto 2020-12
**fail-closed** — una keyword no implementada **lanza**, nunca se evalúa
«válido por omisión».

Cotejado contra `ajv@8.20.0` (modo 2020-12) sobre los tres esquemas: 36 pares
× 2 formas + 7 transiciones × 2 + 4 corridas + el fixture literal + el control
+ el esquema ampliado con una fase nueva.

> **Acotación (corrige la primera versión de este informe).** «93 comparaciones,
> 0 desviaciones» es equivalencia **sobre lo que estos tres esquemas
> ejercitan**, no sobre todo el subconjunto implementado: hay keywords en el
> evaluador que la demo no usa y que el cotejo no toca. La cifra sin esta
> acotación exagera lo medido.

```
ajv 8.20.0 · comparaciones=93 · desviaciones=0
fixture.illegalJump {"from":"declared","to":"ready"} → mini=false ajv=false
control            {"from":"declared","to":"leased"} → mini=true ajv=true
A-ampliado(+paused) {"from":"paused","to":"ready"}   → mini=true ajv=true
EXIT=0
```

El script de cotejo vive fuera del árbol (scratchpad) porque requiere `ajv`
instalado; **no es un gate**, es la prueba de equivalencia de esta entrega. Si
alguien quiere repetirla: `npm i ajv@8` en un directorio aparte e importar
`ci/json-schema-mini.mjs`.

`typescript@5.9.3` se usó igual: fuera del árbol para medir localmente, fijado
por versión en el workflow para que CI lo ejecute de verdad.

---

## Verde final

```
$ tsc -p NETWORK-ENGINE/LANGUAGES/lore-hm/tsconfig.json    → 0
$ npm run test:lore-hm-lengua                              → 0
    verificar-dossier-l01: PASS
    verificar-inception-l02: PASS
    verificar-solid-l03: PASS
    verificar-vocab-l04: PASS
    verificar-sellado-l05: PASS
    suite-lengua: PASS (5 verificadores)
```

---

## Qué NO cubro

1. **El gate del hub** (`playground/prueba-de-H-M/ci/test-101-ontologia.mjs`).
   Otro repo, otro worker. Enrutado con fichero, función y línea en §④.
2. **El checkout cruzado** anclado a rama. Vive en el workflow del hub, no en
   este árbol (re-medido). Enrutado en §⑤-b.
3. **`WPS_QUEUE/`** — donde vive la tercera máquina de estados (`PodState`, 8
   estados). Fuera del ALCANCE_DIFF. Declarada como divergencia, no fusionada.
4. **`HOLONES/03-emmanuel/`** — fuera del alcance. El gate se adaptó al
   contenido real del asiento; no se tocó el README.
5. **`package.json` / `package-lock.json` raíz** — fuera del alcance. Por eso
   el typecheck usa `npx` con versión fijada en vez de una `devDependency`.
6. **No se ha ejecutado CI real.** Todo lo medido es local (node 22.21.1,
   Windows). El paso `typecheck-lore-hm` con `npx --package=typescript@5.9.3`
   no se ha visto correr en GitHub Actions; se ha verificado el equivalente
   local (`tsc -p …` con typescript 5.9.3, exit 0) y no se han añadido run-ids
   a `ci/VECTOR-ROJO.md` porque **no se ha empujado**.
7. **No se ha empujado.** Ni `git push`, ni PR, ni tag. `plan/` intacto.
8. **`solid/schemas/shapes.shacl.ttl`** — SHACL no se ejecuta (haría falta un
   motor RDF). El sello DIC-4 se verifica con JSON Schema + sha256; la
   conformidad SHACL sigue siendo pendiente como antes de esta entrega.
9. **Cobertura del evaluador**: `ci/json-schema-mini.mjs` implementa el
   subconjunto 2020-12 que estos esquemas usan. No implementa `$dynamicRef`,
   `$recursiveRef`, `unevaluatedProperties`/`unevaluatedItems`,
   `contentEncoding` ni aserción de `format`. Todas ellas **lanzan** si
   aparecen; no se ignoran.

---

# Ronda 2 · devolución de la contrarrevisión adversarial

Cuatro bloqueantes y seis menores, todos re-medidos antes de tocar nada y con su
vector re-ejecutado después. Commits `3e409c2` (bloqueantes) y el de esta ronda.

## B1 · el sello no ligaba el fichero: clave duplicada en verde

**Medido antes.** `sealedBytes()` serializaba el objeto **ya parseado**.
`JSON.parse` aplica *último gana* en claves repetidas:

```
fixture con DOS "actor": el primero ATACANTE, el segundo el legítimo
  claves actor en fichero: 2
  actor tras JSON.parse = urn:lore-hm:peer:h-demo
  digest recalculado == almacenado ? true      ← VERDE
```

Y el docstring prometía «sha256 de los **bytes** del payload sellado» mientras
entregaba un sello del objeto parseado.

**Arreglo.** `parseWire()` es ahora la única entrada de lectura, y
`assertSinClavesDuplicadas()` recorre el TEXTO y rehúsa el fichero. Además
`canonicalizar()` usa `Object.create(null)`: con `{}`, asignar la clave
`__proto__` mutaba el prototipo y la clave **desaparecía** del payload sin mover
la huella. La batería afirmativa pasa de 12 a **15** vectores (tres de ellos
`__proto__`/`constructor` inyectados **en el texto**, que es como llegarían).

```
  OK: afirmativa: 15 mutaciones del wire, 15 mueven la huella (0 ciegas)
  OK: claves duplicadas en el fichero: rechazadas al leer (el sello liga lo que se leyó)
```

**Vector re-ejecutado:**

```
$ # inyectar un segundo "actor" ATACANTE antes del legítimo
$ node solid/scripts/verificar-solid-l03.mjs
FAIL: fixtures JSON inválido o con claves duplicadas: clave duplicada «actor»
      en línea 6: JSON.parse la colapsaría (último gana) y el sello dejaría de
      ligar el fichero
```

**Declarado en el docstring lo que el sello NO liga** (era la otra mitad de la
objeción): no liga bytes arbitrarios del fichero; **no normaliza Unicode** (NFC
y NFD dan huellas distintas: una normalización de editor obliga a resellar); y
**no es una firma** — un adversario con escritura puede suplantar el `actor`,
correr `--sellar`, actualizar `vista.identifier` y quedar verde. Detecta
**deriva**, no adversario.

## B2 · el gate rechazaba una ampliación correcta

**Medido antes.** El bloque del discriminante cableaba el literal `paused` y
**exigía que la sonda fuese permisiva**. Consecuencia: añadir la fase `paused`
correctamente (tipo + tabla + `describePhase` + esquemas A/B/C + la cita del
round-trip) ponía el gate **ROJO**, mientras que `suspended` —misma operación—
pasaba. Y `paused` es justo el estado del `PodState` que este árbol promete
reconciliar: la reconciliación nacía rota.

**Arreglo.** La sonda **deriva** un nombre ausente de `PHASES`, en vez de
cablear ninguno.

**Vector re-ejecutado** (ampliación correcta, dos nombres):

```
fase «paused»    añadida correctamente → demo exit=0 · l02 exit=0  VERDE ✔
fase «suspended» añadida correctamente → demo exit=0 · l02 exit=0  VERDE ✔
```

Misma operación, mismo veredicto, se llame como se llame.

## B3 · la tesis refutada seguía certificada

**Medido antes.** Tres sitios de la propia lengua firmaban la tesis que este WP
refutó, y **ningún gate miraba ninguno**:

| sitio | qué decía |
| ----- | --------- |
| `docs/P1-P5.md:56` | «**verificada** — al menos una regla **imposible** de expresar/validar con config plana… demostrada en `demos/tipestate-vs-flat/`» — apuntando a la demo que mide lo contrario |
| `README.md:37` | «regla imposible en config plana» |
| `src/tipestate.ts:4` | «Imposible de garantizar con JSON plano + schema de strings» |

**Arreglo.** Las tres reescritas —P4 pasa a **REFUTADA por medición**, con lo que
sí queda verificado— y guard nuevo en `verificar-inception-l02.mjs` que recorre
los **52 ficheros** de la lengua buscando la tesis refutada, con exención sólo
si el contexto la marca como corregida o histórica.

**Un fallo propio, encontrado al construirlo:** la primera versión del guard
daba verde sobre el texto original, porque `regla **imposible**` no casaba con
el patrón — la **negrita** escondía la frase. Es exactamente la clase que ya
había cerrado para la fila 08 de `HOLONES.md` y que no había aplicado aquí.
Ahora el texto se desnuda de énfasis **sin mover offsets** (sustitución carácter
a carácter, para que la línea reportada siga siendo la real).

**Vector re-ejecutado** (reintroducir la frase, con negrita):

```
FAIL: docs/P1-P5.md:107 certifica la tesis REFUTADA «regla imposible»: «regla   imposible»
FAIL: docs/P1-P5.md:107 certifica la tesis REFUTADA «imposible de expresar/validar/garantizar»
```

## B4 · el discriminante era artefacto del estilo de esquema

**Medido antes**, con ajv sobre las tres formas:

```
A (+fase en enum, sin su rama if)   fase→ready = true    ← permisiva
B (tabla plana, sin tocar)          fase→ready = false   ← fail-closed
C (+fase en enum)                   fase→ready = false   ← fail-closed
```

La «permisividad silenciosa» se daba **sólo en la forma A**. La forma **B —la
«tabla plana» del propio demo—** es fail-closed ante el mismo olvido, igual que
`tsc`. El bloque medía sólo A e imprimía la conclusión como general: la tesis
nueva era tan estrecha como la vieja, y el contraejemplo estaba dentro de la
demo, sin medir.

**Arreglo.** El bloque mide **las tres** y asserta la *relación* entre ellas —si
deja de darse, la conclusión cambió y hay que reescribirla, no ajustar la sonda:

```
  ·  olvido medido («zzz-fase-sonda» en el alfabeto, sin su regla de transición
       forma A: zzz-fase-sonda→ready = VÁLIDO (permisiva)
       forma B: zzz-fase-sonda→ready = INVÁLIDO (fail-closed)
       forma C: zzz-fase-sonda→ready = INVÁLIDO (fail-closed)
  OK: discriminante medido en LAS TRES formas, con sonda derivada (no un nombre cableado)
```

**Conclusión reescrita, a la anchura que la medición sostiene** (en
`demos/tipestate-vs-flat/README.md`, `flat-config.verdict.md` y `docs/P1-P5.md`):

- No hay «regla imposible en config plana» (⓪), **y tampoco un déficit de
  exhaustividad de la config plana** (B4). Las dos tesis anteriores eran falsas.
- Lo que hay: **dos estilos de esquema plano —restringir por excepción vs
  enumerar lo permitido—, sólo uno seguro ante la extensión, y ningún aviso de
  cuál se escribió.**
- Lo que aporta el tipestate: **no deja escribir el estilo malo.** En TypeScript
  la forma cerrada es la única disponible (unión cerrada + `never` en
  `describePhase`, medido: `TS2322`). En JSON Schema las dos son igual de
  idiomáticas.

## Los seis menores

| # | objeción | estado |
| - | -------- | ------ |
| 1 | guard anti-extracción más estrecho que la prosa; tres frases falsas del informe | **cerrado** — censo propio (157 dirs / 6 `package.json`), patrones ampliados, `.gitmodules`, `.md` de la metodología. **Las tres frases corregidas** en §② |
| 2 | residual del vocabulario más ancho de lo declarado | **cerrado** — `w3c-conocidos.json` (272 términos AS2/PROV-O/DCTERMS declarados) + colisión entre acuñaciones + pertenencia de `w3cChecked` + razón copiada |
| 3 | «el retiro se publica» era autocoherencia | **cerrado** — `notarialFloor` ancla el conjunto fuera del recuento, y un tipo liberado por retiro no se reacuña |
| 4 | `validate()` no era fail-closed; `multipleOf` fail-open; cifra de ajv sin acotar | **cerrado** — 4/4 ramas no alcanzadas lanzan también en `validate()`; `multipleOf` sin tolerancia, 4/4 igual que ajv; cifra acotada aquí y en el módulo |
| 5 | `__proto__` no movía la huella; faltaba declarar NFC/NFD y la ausencia de firma | **cerrado** — `Object.create(null)` + 3 sondas en la batería; las dos limitaciones declaradas en el docstring |
| 6 | enrutado sin línea; índice sin `reason`/`w3cChecked` | **cerrado** — la afirmación se corrige a «fichero · función · símbolo» (las líneas del hub no son verificables desde aquí y no se inventan); el índice ya lleva `reason` y `w3cChecked` |

**Hallazgo del menor 2, sobre datos propios:** la comprobación de pertenencia de
`w3cChecked` cazó **dos CURIEs que yo mismo había inventado** en la ronda
anterior — `dcterms:Software` y `dcterms:Report`, que no existen en DCMI.
Corregidos a `prov:Plan` y `dcterms:ProvenanceStatement`. Es el mejor argumento
de que el chequeo de forma no bastaba.

## Baterías tras la ronda

| batería | antes de ZV-S | ronda 1 | ronda 2 |
| ------- | ------------- | ------- | ------- |
| sellado `verificar-sellado-l05` | 13/13 verdes | 0/13 | **0/19** (con E1–E6 de evasión) |
| vocabulario `verificar-vocab-l04` | 5/6 verdes | 0/12 | **0/18** (con R1–R6) |
| sello DIC-4, mutaciones que deben mover la huella | 0 | 12 | **15** + rechazo de claves duplicadas |
| evaluador, ramas no alcanzadas que lanzan | — | 0/4 en `validate()` | **4/4** |

## Verde final de la ronda 2

```
$ tsc -p NETWORK-ENGINE/LANGUAGES/lore-hm/tsconfig.json   → 0
$ npm run test:lore-hm-lengua                             → 0  (5 verificadores PASS)
$ node zv-ajv-cotejo.mjs                                  → ajv 8.20.0 · 93 comparaciones · 0 desviaciones
$ node menores-eval.mjs                                   → 4/4 ramas lanzan · multipleOf 4/4 = ajv
```

## Lo que sigue sin cubrirse tras la ronda 2

Todo lo de la lista original, más:

10. **El sello no es una firma.** Declarado, no arreglado: hacerlo exigiría
    claves y un modelo de confianza que este WP no tiene. Un adversario con
    escritura en el repo queda verde tras `--sellar`.
11. **NFC/NFD.** Declarado, no normalizado: sellar bytes y normalizar Unicode
    son decisiones opuestas y la segunda no está tomada.
12. **`w3c-conocidos.json` es un subconjunto declarado**, no el vocabulario
    completo. Un término legítimo ausente produce un falso rojo en
    `w3cChecked`; se añade y se cita la fuente. Está dicho en el propio fichero.
13. **El residual del vocabulario sigue existiendo, más estrecho:** un autor que
    invente un `semanticType` falso *y* cite `w3cChecked` reales pero
    irrelevantes *y* escriba una razón original sigue pudiendo acuñar. Eso es
    juicio notarial, no mecánico; el registro deja firma y fecha para que tenga
    dueño.
