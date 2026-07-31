# Plan · prueba-de-H-M y Barrio LORE

| dato | valor |
| ---- | ----- |
| Estado | propuesta refinada · lista para aprobación/ejecución |
| Obra objetivo | `C:\S\scriptorium\playground\prueba-de-H-M` |
| Ownership | HUB posee el playground; S aporta cantera y fuentes RO |
| Gates | `WP-HUB-080`–`WP-HUB-084` |
| INÉDITO | no hay usuarios ni compatibilidad que preservar |

## Propósito

Crear un kit nuevo sin reescribir `prueba-de-dos`. H y M conservan sus roles:
H = Human/A/anfitrión, autoridad y emisor de leases de pod; M = Machine/B,
controlador de Future Machine.

El primer escenario, **Barrio LORE**, representa el barrio canónico
`document-machine-sdk`, número 20 del distrito `lore-voz`. La v1 ejecuta la
ceremonia completa:

```text
H + M inflan Bartleby/Cristalizador
  → Cristalizador prepara y M despliega Future Machine
  → Onfalo raw alimenta DocumentMachine
  → VectorMachine mock indexa con marca explícita
  → se materializan líneas reales
  → el grafo bifurca universos
  → cada universo corre en su unidad/pod
  → los cortos exponen chunks consultables de ejecución
```

Cada agente o unidad dinámica mantiene un pod propio para estado, eventos y
artefactos. El mismo arnés podrá descubrir en el futuro escenarios de todos
los barrios y ejecutar sobre ellos un conformance suite común.

## Principios

1. Experiencia bilateral: la corrida no pasa porque arranquen procesos; H y M
   deben observar y registrar la misma cadena causal.
2. Una unidad, un pod: sin estado global implícito ni pod compartido por
   comodidad.
3. JSON wire manda; JSON-LD es una vista semántica verificable.
4. `@zeus/linea-kit` es el contrato de LINEAS; el kit no inventa otro.
5. VectorMachine es mock determinista y siempre declara `mock=true`.
6. OASIS y S_LAB son fuentes RO/import-once, nunca dependencias de runtime.
7. Cristalizador prepara infraestructura; Pipeline orquesta la ejecución.
8. Ningún paso continúa si falta upstream o deja estado parcial.

## Fase 1 · Contrato y estructura

1. Crear `C:\S\scriptorium\playground\prueba-de-H-M` como kit autocontenido.
   No modificar `prueba-de-dos`, `.claude/skills`, backlogs F2 ni repos LAB.
2. Definir `scenarios/barrio-lore/scenario.json` con:
   - `scenarioId=barrio-lore`;
   - `barrioId=document-machine-sdk`;
   - distrito `lore-voz`;
   - roles H/M fijos;
   - Onfalo como fuente, AgentLore como catálogo y VectorMachine como contrato
     simulado, sin fusionarlos con la identidad del barrio;
   - unidades, ceremonia, artefactos esperados, cleanup y CA.
3. Crear `schemas/scenario.schema.json` y un catálogo de unidades:
   `loreador`, `bartleby`, `archivero`, `vector-mock`, `grafista`, `demiurgo`,
   `dramaturgo`, `pipeline`, `portal` y `cristalizador`.
4. Cada unidad declara tipo `agent|machine`, inputs, outputs, dependencias,
   verbos, schema de estado y condición `bootstrap|deployed|dynamic`.
   Bartleby y Cristalizador son bootstrap; los runners de universo son
   dinámicos.
5. Añadir schemas para `unit`, `machine`, `activity`, `pod`, `pod-lease`,
   `artifact-chain`, `graph`, `universe`, `corto` y `evidence-report`.
   Reusar los schemas publicados por `@zeus/linea-kit@0.3.0` para líneas.
6. Crear `ontology/hm-v1.context.jsonld`, `ontology/hm-v1.ttl` y
   `reference/VERBOS.md`. Reusar ActivityStreams 2.0, PROV-O y DCTERMS antes
   de acuñar términos `hm:` o `fm:`. La huella se calcula sobre el wire o
   snapshot sellado, nunca sobre la vista RDF.

Los puntos 3–5 pueden avanzar en paralelo tras cerrar el escenario.

## Fase 2 · Generador, customizations y pods

7. Implementar una sola instalación raíz. `scripts/generar.mjs` crea corridas
   regenerables en `.runs/<run-id>/H` y `.runs/<run-id>/M`, con opciones
   `--scenario`, `--run`, `--sin-install` y `--force-new`.
8. El generador no sobrescribe: reanuda solo una corrida cuyo manifest
   coincide; drift de configuración o artefactos falla ruidoso. Genera env
   sin defaults silenciosos, handoffs vivos, room, manifest sellado y raíz de
   evidencia.
9. Mantener la semántica heredada:
   - H aloja nodo/autoridad, valida identidad, emite/revoca leases y observa;
   - M solicita inflación, controla Future Machine y consulta resultados.
10. La inflación es bilateral: M emite `unit.inflate`; H valida identidad y
    emite `pod.lease`; solo entonces la unidad se materializa y pasa a READY.
11. Añadir recursos portátiles del kit:
    - skills `prueba-hm`, `future-machine`, `pod-state`, `barrio-lore`;
    - agentes `anfitrion-h`, `maestro-m`, `bartleby`, `cristalizador`;
    - prompts `hm-boot`, `hm-inflate`, `hm-deploy`, `hm-run`, `hm-inspect`,
      `hm-shutdown`.
12. El generador materializa esos recursos en la corrida. No se escriben en
    `.claude/skills` ni se presentan como publicación canónica de L. Tras un
    segundo consumidor se podrá proponer su promoción a skills-library.
13. Implementar `PodStore` file-backed. Cada unidad recibe la IRI
    `urn:scriptorium:hm:<run-id>:pod:<unit-id>` y una ubicación física resuelta
    por el manifest, nunca publicada como ruta de máquina.
14. Contenido mínimo de cada pod:
    `descriptor.jsonld`, `state.json`, `events.ndjson`,
    `artifacts/manifest.json`, `inbox/` y `outbox/`.
15. Máquina de estados:
    `declared → leased → inflated → ready → running → paused|stopped|failed`.
    Probar ACL positiva, omitida, inválida y expirada.
16. Crear un pod para cada una de las diez unidades estáticas y para cada
    `universe-runner-<id>` dinámico. Onfalo es fuente y AgentLore es catálogo;
    no reciben pod salvo que una pieza concreta se ejecute como unidad.

Customizations y PodStore pueden avanzar en paralelo tras el generador.

## Fase 3 · Fixture portable Barrio LORE

17. Implementar `scripts/importar-onfalo.mjs` como import-once build-time.
    Recibe `--source-root` explícito y selecciona exactamente:
    - `2024-05-01_primero-de-mayo.md`;
    - `2026-05-01_auge-de-la-educacion-emocional.md`.
18. Antes de copiar, comprobar licencia y secretos. Generar
    `source.manifest.json` con repo lógico, paths relativos, tamaño, media type
    y SHA-256. No guardar rutas `C:\Users\...`. Si no se puede redistribuir,
    fallar sin corpus sustituto silencioso.
19. La corrida normal consume únicamente el snapshot sellado bajo
    `scenarios/barrio-lore/fixtures/onfalo/raw/` y funciona sin OASIS.
20. Implementar handlers deterministas:
    - Bartleby produce sus cinco secciones y metadatos estructurados;
    - Cristalizador inspecciona capacidades y genera el machine manifest;
    - VectorMock genera embeddings/vecinos con algoritmo y seed declarados;
    - las capas restantes materializan derivados con provenance.
    Los tests no invocan LLM ni VectorMachine real.
21. Materializar dos líneas con `@zeus/linea-kit`:
    - `barrio-lore-onfalo`: raw → análisis → referencias vectoriales;
    - `barrio-lore-futuros`: grafo → universos → cortos.
    Completar manifests/nodos/registros y ejecutar los validadores publicados.
22. Construir un grafo de futuros que enlace ambas `linea://...` y las URNs
    de VectorMock. Instanciar dos universos deterministas para demostrar una
    bifurcación real.
23. Cada universo crea su `universe-runner` con pod, ejecuta una secuencia
    breve en la ciudad simulada y emite eventos.
24. Definir `hm:CortoDeEjecucion` como chunk inmutable y consultable del log
    de un runner: `universeId`, `graphDigest`, referencias a línea/vector,
    intervalo, eventos y huella. No presentarlo como equivalente del corto
    literario histórico.
25. `corto.query` permite filtrar por universo, unidad, verbo y rango; cada
    resultado debe trazarse hasta el raw Onfalo.

## Fase 4 · Ontología verbal y ceremonia

26. Toda actividad usa un envelope con `id`, `actor`, `verb`, `object`,
    `target`, `context`, `instrument`, timestamps, `result`, `provenance` y
    `digest`. Cada PASS escribe:
    - `evidence/activities/<seq>-<verb>.wire.json`;
    - `evidence/activities/<seq>-<verb>.view.jsonld`;
    - el evento correspondiente en el pod de la unidad.
27. Catálogo de verbos:
    - base H/M: `peer.join`, `peer.announce`, `state.inspect`, `session.exit`;
    - pods: `pod.lease`, `pod.revoke`, `unit.inflate`, `unit.start`,
      `unit.pause`, `unit.resume`, `unit.stop`, `unit.debug`, `machine.deploy`;
    - LORE: `source.ingest`, `document.analyze`, `vector.mock-index`,
      `line.materialize`, `graph.bifurcate`, `universe.instantiate`,
      `corto.emit`;
    - diagnóstico: `machine.status`, `unit.inspect`, `artifact.data`,
      `artifact.spec`, `pipeline.gaps`, `artifact.validate`,
      `provenance.trace`, `coverage.measure`, `corto.query`.
28. Conservar alias TUI históricos `boot`, `status`, `loadMOCK`, `run`,
    `run --desde`, `inspect`, `data`, `spec`, `gaps`, `docs`, `validate`,
    `trace`, `coverage`, `exit`. Cada alias traduce a una actividad tipada;
    no constituye una ontología paralela.
29. Ejecutar `barrio-lore-v1` en orden bloqueante:
    1. preflight e identidad H/M;
    2. room y autoridad;
    3. leases e inflación conjunta de Bartleby/Cristalizador;
    4. machine manifest y despliegue de las demás unidades/pods;
    5. ingest Onfalo y análisis Bartleby;
    6. VectorMock;
    7. dos líneas validadas;
    8. grafo enlazado;
    9. dos universos y runners con pods;
    10. emisión/consulta de cortos;
    11. trace, coverage y shutdown limpio.
30. Generar `evidence/report.json` y `evidence/report.md` desde eventos, no a
    mano. Incluir matriz verbo/actor/object/PASS, pods, cadena de artefactos,
    hashes, cobertura, cortos consultados, fallos y procesos residuales.
31. H y M conservan handoffs bilaterales con la misma CA y firman solo su
    mitad. Un verificador externo valida el reporte sin consultar sus
    directorios vivos.

## Fase 5 · Manuales, extensión y tests

32. Crear `manual.md` y manuales especializados:
    `CEREMONIA.md`, `PODS.md`, `ONTOLOGIA-Y-VERBOS.md`, `BARRIO-LORE.md`,
    `CREAR-ESCENARIO.md` y `EVIDENCIA.md`.
33. Crear plantillas inmutables `handoffs/handoff-H.md` y
    `handoffs/handoff-M.md`; el generador copia instancias vivas a la corrida.
34. Diseñar el futuro test de todos los barrios mediante descubrimiento de
    `scenarios/*/scenario.json`. Todo escenario declara barrio canónico,
    fixture, unidades, verbos, CA y cleanup. Solo Barrio LORE entra en v1.
35. Implementar con `node:test` pruebas unitarias para:
    schemas, verbos, JSON-LD, idempotencia/no-clobber, drift de manifest,
    PodStore/ACL/transiciones, VectorMock, línea/grafo/universo/corto y queries.
36. Añadir E2E offline de la ceremonia y negativos para corpus/hash/schema,
    pod/lease, VectorMock no declarado, upstream ausente y runner caído.
37. Cerrar con consumidor limpio: `npm ci` en checkout temporal, generación
    sin sibling paths, runtime offline tras seed, rerun determinista,
    verificación externa y shutdown sin procesos, puertos o locks huérfanos.

## Árbol objetivo

```text
playground/prueba-de-H-M/
├── package.json
├── package-lock.json
├── SKILL.md
├── manual.md
├── handoffs/
├── manuales/
├── ontology/
├── reference/
├── schemas/
├── scenarios/barrio-lore/
│   ├── scenario.json
│   └── fixtures/onfalo/
├── units/catalog/
├── customizations/
│   ├── agents/
│   ├── prompts/
│   └── skills/
├── scripts/
│   ├── generar.mjs
│   ├── importar-onfalo.mjs
│   ├── ejecutar-ceremonia.mjs
│   └── verificar-evidencia.mjs
├── src/
│   ├── pod-store.mjs
│   ├── machine-runtime.mjs
│   ├── vector-mock.mjs
│   ├── linea-adapter.mjs
│   ├── artifact-chain.mjs
│   ├── evidence.mjs
│   └── cli.mjs
└── test/
```

## Criterios de aceptación

1. `npm ci && npm test` pasa desde checkout limpio.
2. Import Onfalo produce exactamente dos piezas, hashes reproducibles, cero
   secretos y cero paths absolutos.
3. Dos ejecuciones del generador son no-op; drift manual falla sin overwrite.
4. La ceremonia produce diez pods estáticos más dos runners dinámicos, dos
   líneas validadas y dos universos.
5. Hay al menos un corto consultable por universo y trazable hasta grafo,
   línea, VectorMock y raw Onfalo.
6. El verificador externo valida wire, JSON-LD, hashes, ACL, transiciones,
   cobertura, reporte y shutdown sin depender de H/M.
7. La ceremonia se repite offline después de instalar/sembrar.
8. Los negativos fallan en su frontera y dejan cero estado parcial.
9. `npm run skills:ceguera` pasa desde la raíz del hub.

## Fronteras

Incluye el kit completo, generadores, manuales, skills locales, handoffs,
schemas, ontología, PodSim, TUI, Onfalo importado, VectorMock,
líneas/grafos/universos/cortos, tests y evidencia.

Excluye revivir o editar hornadas OASIS, mutar Z/G/L/S, servidor SOLID/CSS
real, VectorMachine real, LLM en tests, publicación de skills, UI gráfica,
peercard reuse entre niveles y modificación de las siete marcas existentes.

— **Sol**