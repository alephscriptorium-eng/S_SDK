# BACKLOG F2 · s-sdk · casa pública del holón 07

| dato | valor |
| ---- | ----- |
| Mundo | `C:\S_LAB\s-sdk` |
| Fuente | INFORME-R4 · F2 · consenso H-01 |
| Estado | ⬜ propuesta · custodio aprueba/descarta · INÉDITO |
| Histórico | `plan/BACKLOG.md` · WPs ✅ no se reabren |

## Visión

`s-sdk` terminado es la casa pública y cantera del método: mantiene el mapa
7×24, documenta la genealogía de Ciudad, consume los skills publicados como
segundo cliente, presenta la holarquía con evidencia y conserva un root
limpio. No aloja la sala viva, no implementa playground, no vigila otros
WORLD_ROOT y no usa submodules como carpetas de trabajo.

## Contrato de despacho

- `ALCANCE_DIFF` dentro de `C:\S_LAB\s-sdk`; hub y mundos hermanos son RO.
- Extracción/contrato: Ejes I/IV; layout: Eje III; cara pública: ceguera.
- Claims web y catálogo se derivan de fuentes; `<pendiente>` no se rellena.
- P0 bloquea una primera casa FOSS honesta; todos los WPs esperan custodio.

## Lanes

| lane | propósito |
| ---- | --------- |
| CANTERA | mapa, censo y generación reproducible hacia G |
| DATA-CONTRACT | frontera cantera/packs/root y documentación del adaptador |
| HOLONES | anclas DS-5, roadmaps y limpieza del root |
| METHOD-CONSUMER | pin/sync/activación del método publicado |
| WEB-FOSS | portal, licencia, build y provenance |
| GOVERNANCE | backlog, prácticas, dependencias y cierre |
| **LENGUA (LORE-HM)** | **la lengua común: dossier holónico, inception, capa SOLID, vocabulario y sellado del 04** |
| HORIZONTE | temas futuros sin ejecución |

---

## Lane · CANTERA

### WP-SDK-C01 · indice-7x24
- **BRIEF:** mapa verificable de 7 plantas y 24 barrios, con owner y estado.
- **CA:** cada entidad cita fuente o `<pendiente>`; cero inventario copiado a
  mano cuando exista manifest; docs build.
- **Pri:** P0 · core

### WP-SDK-C02 · cantera-ciudad-frontera
- **BRIEF:** declarar cantera como fuente build-time, nunca root runtime.
- **CA:** README; grep de mounts/runtime en cantera = 0; generador citado.
- **Pri:** P0

### WP-SDK-C03 · censo-estados-proyeccion
- **BRIEF:** pipeline reproducible CENSO-ESTADOS → datos de startpack Ciudad.
- **CA:** input digest, dry-run y output determinista; G valida consumidor.
- **Pri:** P1 · Eje IV · coord G

### WP-SDK-C04 · generador-provenance
- **BRIEF:** manifest de generación con fuente, herramienta, versión y hash.
- **CA:** igual-input→igual-output; cambio de fuente cambia digest; rutas de
  máquina no viajan.
- **Pri:** P1

### WP-SDK-C05 · edificios-paquetes-mapa
- **BRIEF:** tabla de gobierno edificio→paquete/capacidad sin contener obra G/Z.
- **CA:** cada fila cita manifest o issue propietario; duplicado/hueco visible.
- **Pri:** P1

### WP-SDK-C06 · cantera-schema-y-linter
- **BRIEF:** schema mínimo para fichas, barrios, grafo y handoffs de cantera.
- **CA:** fixture válida/rota; referencias internas y IDs únicos.
- **Pri:** P1

---

## Lane · DATA-CONTRACT

### WP-SDK-D01 · guia-tres-momentos
- **BRIEF:** documentar instalar kit → sembrar pack → sincronizar por driver,
  como conceptos aprobados/candidatos según informe vigente.
- **CA:** no presenta C-6 como implementado; enlaces a owners G/Z/O.
- **Pri:** P1

### WP-SDK-D02 · frontera-cantera-pack-root
- **BRIEF:** tabla cantera build-time, pack semilla, storage montado y estado.
- **CA:** ejemplos sin paths absolutos; manifiesto/estado/corpus diferenciados.
- **Pri:** P1

### WP-SDK-D03 · adaptador-local-first-doc
- **BRIEF:** explicar namespace lógico, mounts físicos y boot offline sin
  definir API de Z.
- **CA:** alineado al compacto H-01 validado; no llama «root único físico» al
  namespace; sync explícita permitida.
- **Pri:** P1

### WP-SDK-D04 · shape-y-familias
- **BRIEF:** documentar shape FORCES y hermanos LINEAS/FIREHOSE/SSB sin
  convertir candidato en universal.
- **CA:** estatus ◆/★/⏳ visible; no corpus histórico en repo.
- **Pri:** P2

### WP-SDK-D05 · cero-secretos-y-contexto
- **BRIEF:** checklist para datos/cantera/docs: identidad fuera de git y del
  artefacto/contexto de build.
- **CA:** fixture-secret falla; inspección de artefacto final, no solo ignore.
- **Pri:** P0 · seguridad

---

## Lane · HOLONES

### WP-SDK-H01 · pin-submodules-honesto
- **BRIEF:** reconciliar gitlinks/pins o registrar divergencia aceptada.
- **CA:** submodule status limpio; ningún commit dentro; origen verificable.
- **Pri:** P1

### WP-SDK-H02 · roadmaps-01-07
- **BRIEF:** fichas y roadmaps derivados de planes reales; 07 = esta casa.
- **CA:** cada estado cita backlog/run; ninguna promesa sin sello.
- **Pri:** P1

### WP-SDK-H03 · PARK-WEBS-HOLONES-DEVOPS
- **BRIEF:** clasificar instancia, ancla, método o archivo; mover solo con GO.
- **CA:** acta por path; destino y owner; gate dedup; nada se borra sin veredicto.
- **Pri:** P1 · Ejes II+III

### WP-SDK-H04 · scrub-vocabulario-publico
- **BRIEF:** retirar vocabulario no apto de superficies públicas cuando el
  custodio cierre su destino.
- **CA:** ceguera árbol+historial; no borrar lore deliberado sin acta.
- **Pri:** P2

### WP-SDK-H05 · placeholders-honestos
- **BRIEF:** cada placeholder de mundo es gitlink/ruta real o ausencia explícita.
- **CA:** cero `<pendiente>` que parezca submodule; links verificables.
- **Pri:** P2

### WP-SDK-H06 · DS5-registry-composition
- **BRIEF:** demostrar composición por registry/punteros sin copiar método.
- **CA:** segundo consumidor; grep definiciones de protocolo = una canónica.
- **Pri:** P1 · Ejes III+IV

---

## Lane · METHOD-CONSUMER

### WP-SDK-M01 · pin-exacto-y-sync
- **BRIEF:** paquete de método con versión exacta, lock y espejo auditables.
- **CA:** `npm view`; node_modules/lock/espejo coinciden; drift falla.
- **Pri:** P0

### WP-SDK-M02 · activar-skill-mesa
- **BRIEF:** segundo consumidor real del skill de mesa publicado por L.
- **CA:** agente fresco monta fixture de sala sin contexto del marco; ceguera.
- **Pri:** P0 · dep L-A01

### WP-SDK-M03 · aceptar-fix-R1
- **BRIEF:** probar en este consumidor que vigilancia no trata el espejo
  generado como residuo.
- **CA:** fixture espejo 8 skills produce 0 anomalías; markdown de sesión sí.
- **Pri:** P1 · dep L-D01

### WP-SDK-M04 · kit-compuesto-432
- **BRIEF:** consumir la composición publicada sin fachada local duplicada.
- **CA:** caso sintético rooms→intake→crecimiento; imports desde paquete.
- **Pri:** P2 · dep L-B01/B02

### WP-SDK-M05 · activacion-multi-runtime
- **BRIEF:** verificar materialización en Claude/Cursor/runner genérico según
  contrato publicado.
- **CA:** tres instalaciones temporales; mismos skills/hashes; config funcional
  preservada, texto de sesión ausente.
- **Pri:** P1 · dep L-F10

---

## Lane · WEB-FOSS

### WP-SDK-W01 · licencia-package-coherente
- **BRIEF:** alinear package hoy UNLICENSED con LICENSE canónica del repo.
- **CA:** custodio valida SPDX; package/LICENSE/docs/artefacto coherentes.
- **Pri:** P0 · FOSS

### WP-SDK-W02 · piel-site-web-declarada
- **BRIEF:** instancia de `site-web` con piel local y sin CDN.
- **CA:** docs build, contraste, pesos y enlaces verdes.
- **Pri:** P1

### WP-SDK-W03 · guia-ciudad-en-casa
- **BRIEF:** guía del mapa/cantera/playground mediante punteros, sin contener
  datos vivos ni duplicar manuales.
- **CA:** claims trazables; navegación completa; segundo lector reproduce.
- **Pri:** P1

### WP-SDK-W04 · portal-skills-regenerable
- **BRIEF:** catálogo de skills consumidos derivado del paquete/espejo.
- **CA:** versión y número reales; cero lista manual stale.
- **Pri:** P2

### WP-SDK-W05 · cerco-v2-operadores
- **BRIEF:** explicar port de código histórico, storage externo, provenance,
  peer vivo y boot offline.
- **CA:** ejemplos positivo/negativo; no impone todo dentro del repo.
- **Pri:** P2

### WP-SDK-W06 · release-provenance-site
- **BRIEF:** build reproducible del sitio, checksums e inventario de assets.
- **CA:** CI/run-id verde; dos builds comparan manifest lógico; cero dist tracked.
- **Pri:** P1

---

## Lane · GOVERNANCE

### WP-SDK-G01 · ratificacion-backlog-F2
- **BRIEF:** aplicar decisiones custodio a este backlog sin tocar el del hub.
- **CA:** cada WP aprobado/descartado; conteos y deps reconciliados.
- **Pri:** P0

### WP-SDK-G02 · linter-backlog
- **BRIEF:** ejecutar/adoptar linter L sobre esta serie `WP-SDK-*`.
- **CA:** lane/BRIEF/CA/P/deps/ejes válidos; cero WPs falla.
- **Pri:** P1 · dep L-H06

### WP-SDK-G03 · vision-practicas-actuales
- **BRIEF:** actualizar VISION/PRACTICAS que hoy citan versiones y fronteras
  antiguas; historia queda en git.
- **CA:** package/lock/skills vigentes; cero contradicción con plan del hub.
- **Pri:** P1

### WP-SDK-G04 · changelog-y-runners
- **BRIEF:** backlog aprobado alimenta CHANGELOG y cierre con CI/Release verde.
- **CA:** gate gobierno; run-id citado; no inventar release si repo privado.
- **Pri:** P1

---

## Lane · LENGUA (LORE-HM)

> **Origen.** Mitad notarial de la rama `LORE-HM`, promovida desde el intake
> `WPS_QUEUE` **cola A** el **2026-08-02** por orden del product owner. La otra
> mitad —la obra del playground— vive en el hub como
> `WP-HUB-100`–`111`; la frontera de tipos de Zeus, en `z-sdk` como
> `U245`–`U249`. **S guarda la lengua, las junturas y los anclajes; nunca el
> código de los mundos.**

**La decisión estructural, ya tomada en el material y no reabierta aquí:**
LORE-HM **no es un holón 08** ni un framework del playground. Es una **lengua
común** incubada con el método de lenguajes del holón 04, destilada como
capacidad **Logos (02)**, activada por **E-SDK (03)** para operar Document
Machine, y demostrada bilateralmente en el playground. Cruza 01–04 y queda
gobernada y notariada por **07**. `HOLONES.md` sigue con **siete filas**.

### WP-SDK-L01 · dossier-holonico-lore-hm ✅
- **BRIEF:** dossier `lore-hm-integracion-holonica` con `README`, `FUENTES`,
  `MAPA-HOLONICO`, `LENGUA`, `SOLID`, `MATRIZ-CONSUMIDORES`, `DECISIONES` y
  `PLAN`. El mapa fija las escalas **sin confundirlas**: holón 03 = E-SDK ·
  04 = Network-Engine/AOS y su laboratorio de lenguajes · 07 = S, casa del
  método y notaría · distrito = `lore-voz` · barrio 20 =
  `document-machine-sdk` · unidades = Bartleby, Cristalizador, Pipeline,
  Grafista, Demiurgo, Dramaturgo · playground = **consumidor y banco de
  conformidad, no dueño del dominio**. Los materiales 05–06 son cantera
  histórica y contenido, **no dependencias de runtime**.
- **CA:** toda afirmación marcada **verificada / hipótesis / decisión
  pendiente**, sin excepción · no crea holón 08 ni `L_SDK` · no confunde E-SDK
  con un barrio ni con una unidad · `HOLONES.md`, las fichas 02/03/04 y el
  asiento `HOLONES/03-emmanuel` quedan **sin tocar** en este WP · precedentes
  citados con ruta: dossier de las tres liturgias, junturas 01↔02, 02↔03 y
  03↔04, I60/I61 y DS-5.
- **Pri:** P0
- **Estado:** ✅ ola 1 · tip `3d73075` · rama `wp/sdk-l01-dossier-holonico-lore-hm` · contrarrevisión PASS · verde **local** · **sin merge main**

### WP-SDK-L02 · inception-lengua-lore-hm
- **BRIEF:** definir LORE-HM con el contrato de inception heredado del 04,
  **sin crear package todavía**. Ontología nuclear limitada a **cinco
  primitivas y ni una más**: `Peer` (sujeto que actúa — H y M son roles y
  capacidades, **no tipos de ser**), `Unit`, `Lease`, `Activity`, `Artifact`.
  Quedan como **proyecciones**: Pod (almacenamiento de Unit), Línea, Grafo,
  Universo y Corto (clases de Artifact), Barrio (escenario) y Document Machine
  (capacidad del barrio). Gramática **TypeScript declarativa**: const type
  parameters, uniones discriminadas, IRIs y digests branded, phantom states
  para leases y units, chequeo exhaustivo y funciones de proyección. **Sin
  sintaxis textual ni parser** hasta demostrar que TypeScript no basta.
  Incubación en `NETWORK-ENGINE/LANGUAGES/lore-hm` sólo por aprovechar el
  protocolo existente, **sin introducir dependencias del runtime antiguo**.
- **CA:** P1–P5 respondidas · **al menos una regla imposible de expresar o
  validar con configuración plana**, demostrada con el intento fallido al lado
  (candidatas del material: tipestate de Unit, autoridad temporal,
  `request → grant|deny → materialize`, revocación, causalidad upstream, fallo
  atómico) · `@logos/*` tratado como **namespace candidato del holón 02**, sin
  crear repo ni mundo · **puerta de promoción escrita**: Inception Review
  aprobada + `WP-E01` de E ratificada + una línea sintética cruzando E11 + dos
  consumidores compilando; sólo entonces se extrae `@logos/lore-hm`, y el
  origen definitivo **lo decide el custodio con esa evidencia, no antes**.
- **Pri:** P0 · dep: L01

### WP-SDK-L03 · capa-solid-de-primera-clase
- **BRIEF:** diseñar **desde v1** la capa completa, con adapters escalonados.
  Dos representaciones coordinadas: **wire JSON ejecutable**, validado por
  JSON Schema y sellado por bytes, y **vista JSON-LD/RDF**, validada por
  SHACL y **no autoritativa** salvo familias con canonicalización semántica
  explícita. Identidad como **tres credenciales relacionadas y jamás
  fusionadas** —WebID, PeerCard, ssbId—, cada vínculo una attestation
  verificable con degradación honesta cuando falte una dimensión.
  `PodProtocol` separado de sus providers (`LocalPodProvider` files-first del
  playground con marca explícita de simulación · `SolidPodProvider` futuro
  contra CSS/LDP); ambos exponen recursos por URI y **sólo el servidor Pod
  decide acceso**. Autorización WAC/ACP con **relay sin autoridad**: H emite y
  transporta, el Pod evalúa. Planos **Room/L2 y Solid Notifications/L1
  separados**, correlacionados por activity id, trace y provenance — nunca
  reenviados uno como el otro. Bridge MCP↔Solid: resources = passthrough por
  la misma URI; tools = actividades que pueden producir artefactos en Pod;
  **un nombre de tool nunca se convierte automáticamente en predicado RDF**.
- **CA:** conformidad escalonada declarada con **lo que cada peldaño NO
  garantiza** (v1 local simulado · v1.1 JSON-LD+SHACL · v2 CSS local con
  WebID/WAC/ACP · v3 notifications y federación) · política de hash **DIC-4**
  escrita: sha256 de bytes sellados por defecto, RDFC-1.0 sólo donde la
  igualdad semántica sea requisito medido, y **la vista no altera
  `huellaLedger`** · `Z_SDK#55` citado con URL, commit y **estado OPEN**, como
  insumo por curar — prohibido copiarlo o afirmar que está implementado ·
  reuso AS2 / PROV-O / DCTERMS antes de acuñar.
- **Pri:** P1 · dep: L02

### WP-SDK-L04 · registro-de-vocabulario
- **BRIEF:** registro durable de decisiones de vocabulario: término, familia
  (AS2 · PROV-O · DCTERMS · `hm:` · `lore:`), razón de la elección, fecha y
  quién firma. Schema.org sólo como suplemento declarado.
- **CA:** una fila por término acuñado y **cero acuñaciones sin razón** · el
  gate de `WP-HUB-101` **consume este registro, no una copia** (probado
  moviéndolo: el gate del hub se pone rojo) · un término que deja de usarse se
  retira con fecha, no se borra.
- **Pri:** P1 · dep: L03

### WP-SDK-L05 · sellado-de-network-engine
- **BRIEF:** sellar la generación anterior como **fuente histórica** del
  lenguaje: definición, commit y decisiones anclados desde S. Ningún consumidor
  conserva dependencia de runtime ni path hacia ella.
- **CA:** grep con exit code = **cero** imports o paths hacia Network-Engine en
  consumidores · junturas 01↔02, 02↔03 y 03↔04 actualizadas **sólo tras el
  criterio notarial de madurez** · el asiento `HOLONES/03-emmanuel` **sin
  inflar** hasta tick explícito del custodio · LORE-HM aparece en `HOLONES.md`
  como **costura ejecutable, no como fila nueva**.
- **Pri:** P2 · dep: L02

---

## Lane · HORIZONTE

### WP-SDK-X01 · C6-P2P-en-mapa
- **BRIEF:** reflejar el segundo acto P2P cuando exista compacto, sin
  implementar drivers aquí.
- **CA:** owner/estado/enlaces; cero código sync.
- **Pri:** P2

### WP-SDK-X02 · peercard-reuso-frontera
- **BRIEF:** documentar solo el impacto en el mapa público tras decisión Z/G.
- **CA:** no emitir cards por nivel; estatus cita informe.
- **Pri:** P2

### WP-SDK-X03 · catalogo-51-futuro
- **BRIEF:** incorporar mapa 51/51 cuando el hub publique fuente regenerable.
- **CA:** no lista manual; piezas desconocidas siguen ⏳.
- **Pri:** P2

---

## Conteo

| prioridad | n |
| --------- | -: |
| P0 | 9 |
| P1 | 21 |
| P2 | 10 |
| **Total** | **40** |

✎ **2026-08-02**: 35 → 40 por la lane **LENGUA (LORE-HM)** — `L01` y `L02` P0,
`L03` y `L04` P1, `L05` P2. Promoción de la cola A del intake `WPS_QUEUE` por
orden del product owner.

✎ **2026-08-02**: ola 1 GO — `WP-SDK-L01` 🔶 despachado (wt
`C:/S_LAB/wt/s-sdk-wp-sdk-l01`).

✎ **2026-08-02**: ola 1 — `WP-SDK-L01` ✅ (PASS; verde local; sin merge main).

## Dependencias maestras

```text
L-A01 → SDK-M02
L-D01 → SDK-M03
L-F10 → SDK-M05
L-H06 → SDK-G02
SDK-C01·C02 → SDK-C03·C04
SDK-D01·D02 → SDK-D03
SDK-M01 → SDK-M02·M03·M05
SDK-W01 → cualquier publicación pública
```

Nada se despacha sin ratificación del custodio.

— **S** · proyección F2 de s-sdk