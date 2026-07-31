## Plan: Integración holónica LORE-HM

LORE-HM no será un holón 08 ni un framework del playground. Será una lengua común incubada con el método de lenguajes del holón 04, destilada como capacidad Logos 02, activada por Emmanuel/E-SDK 03 para operar Document Machine y demostrada bilateralmente en el playground. S-SDK 07 conserva la notaría, las junturas y los anclajes, nunca el código de los mundos. Zeus 01 aporta contratos tipados y servicios MCP consumidos como wrapper. La migración deja atrás la generación Network-Engine como runtime contenedor, pero preserva y extrae su conocimiento.

**Steps**

### Fase 0 · Dossier global en S, sin obra cross-repo

1. Crear `C:\S_LAB\s-sdk\.cursor\dossiers\lore-hm-integracion-holonica\` como mesa de investigación, separado del dossier de playground. Contendrá `README.md`, `FUENTES.md`, `MAPA-HOLONICO.md`, `LENGUA.md`, `SOLID.md`, `MATRIZ-CONSUMIDORES.md`, `DECISIONES.md` y `PLAN.md`.
2. En `MAPA-HOLONICO.md`, fijar categorías sin confundir escalas:
   - holón/mundo 03 = E-SDK/Emmanuel;
   - holón 04 = Network-Engine/AOS y su laboratorio de lenguajes;
   - holón 07 = S-SDK, casa del método y notaría;
   - distrito = `lore-voz`;
   - barrio 20 = `document-machine-sdk`;
   - unidades/edificios = Bartleby, Cristalizador, Pipeline, Grafista, Demiurgo, Dramaturgo, etc.;
   - playground = consumidor y banco de conformidad, no owner del dominio.
3. Registrar la cadena completa 01–07. LORE-HM no crea holón 08: cruza 01/02/03/04 y queda gobernado/notariado por 07. Los materiales 05–06 son cantera histórica y contenido, no dependencias runtime.
4. Promover, tras revisión del custodio, una síntesis durable a `C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\junturas\2026-07-31-dossier-lore-hm.md`. No modificar aún `HOLONES.md`, las fichas 02/03/04 ni inflar `HOLONES/03-emmanuel`; DE-I8 permanece intacta hasta tick propio.
5. Citar como precedentes el dossier notarial de tres liturgias, la juntura 01↔02, 02↔03 y 03↔04, I60/I61, DS-5 y el dossier actual `prueba-de-h-m-barrio-lore`. Marcar cada afirmación como verificada, hipótesis o decisión pendiente.

### Fase 1 · Inception de la lengua Logos/LORE-HM

6. Definir LORE-HM con el contrato de inception heredado de Network-Engine, sin crear package todavía. La definición responde P1–P5 y limita la ontología nuclear a cinco primitivas:
   - `Peer`: sujeto que actúa; H/M son roles/capacidades, no tipos de ser;
   - `Unit`: agente o máquina operable;
   - `Lease`: autorización temporal y revocable;
   - `Activity`: hecho causal dentro de la ceremonia;
   - `Artifact`: entidad producida o consumida.
7. Mantener como proyecciones, no primitivas: Pod = almacenamiento de Unit; Línea/Grafo/Universo/Corto = clases de Artifact; Barrio = escenario/contenido; Document Machine = provider/capacidad del barrio.
8. Formalizar semántica no reducible a JSON plano: tipestate de Unit, autoridad temporal, `request → grant|deny → materialize`, revocación, causalidad upstream, fallo atómico, provenance y chequeo exhaustivo de transiciones. El JSON describe una corrida; el lenguaje decide si una corrida es legal.
9. Diseñar una gramática TypeScript declarativa con const type parameters, discriminated unions, branded IRIs/digests, phantom states para leases/units, exhaustive checking y projection functions. No crear sintaxis textual ni parser hasta demostrar que TypeScript no basta.
10. Tratar `@logos/*` como namespace candidato del holón 02, conforme al dossier de 2026-07-16. No crear `L_SDK` ni holón/repo nuevo en esta fase: Logos estaba previsto como paquete de registry, no como mundo.
11. Incubar inicialmente la definición y el reference checker en `NETWORK-ENGINE/LANGUAGES/lore-hm` solo para aprovechar el protocolo ya existente. La incubación no introduce dependencias del runtime antiguo en consumidores.
12. Definir una puerta de promoción: Inception Review aprobada + E-SDK WP-E01 ratificada + una línea sintética cruzando E11 + dos consumidores compilando. Solo entonces extraer el package publicable `@logos/lore-hm` a un origen independiente decidido por el custodio; S-SDK registra el origen y pin, no copia el árbol.

### Fase 2 · Capa SOLID de primera clase

13. Incorporar el modelo completo de `https://github.com/alephscriptorium-eng/Z_SDK/pull/55` como insumo divulgado por curar, citando el PR directamente y su estado OPEN. No copiarlo ni afirmar que está implementado.
14. Diseñar dos representaciones coordinadas:
   - wire JSON ejecutable, validado por JSON Schema y sellado por bytes;
   - vista JSON-LD/RDF, validada por SHACL, no autoritativa salvo familias que adopten canonicalización semántica explícita.
15. Reusar AS2 para Activity/Actor/Object, PROV-O para derivación/asociación/generación y DCTERMS para metadatos. Acuñar términos `hm:`/`lore:` solo cuando no exista término W3C/DCMI adecuado y mantener un registro de decisiones de vocabulario.
16. Modelar identidad como tres credenciales relacionadas, nunca fusionadas: WebID, PeerCard y ssbId. Cada vínculo es una attestation verificable, con degradación honesta cuando falta una dimensión.
17. Definir `PodProtocol` separado de providers:
   - `LocalPodProvider`: contingencia files-first del playground, con IRI lógica y marca explícita de simulación;
   - `SolidPodProvider`: adaptador futuro contra CSS/LDP;
   - ambos exponen recursos por URI, pero solo el servidor Pod decide acceso.
18. Mapear autorización a WAC/ACP con relay sin autoridad: H puede emitir una lease y transportar token/capabilities, pero el Pod evalúa la política. Ausencia, expiración, firma faltante o scope insuficiente deniegan.
19. Mantener separados el plano de eventos Room/L2 y Solid Notifications/L1. Correlacionarlos con activity id, trace y provenance; no reenviar uno como si fuera el otro.
20. Definir bridge MCP↔Solid: resources = passthrough por la misma URI; tools = actividades que pueden producir artefactos en Pod; auth = token relay; tool name nunca se convierte automáticamente en predicado RDF.
21. Aplicar política de hash DIC-4: SHA-256 de bytes sellados por defecto; RDFC-1.0 solo en familias donde igualdad semántica sea requisito medido. La vista JSON-LD no altera `huellaLedger` existente.
22. Escalonar conformance: v1 local simulado; v1.1 JSON-LD+SHACL; v2 CSS local con WebID/WAC/ACP; v3 notifications/federación. La arquitectura completa queda en el plan desde v1 aunque los adapters reales lleguen después.

### Fase 3 · Frontera de tipos Zeus, acción posterior independiente

23. Después de aprobar y materializar el dossier global, realizar una acción de tipado separada en `z-sdk`. Esta planificación no edita ni encola `z-sdk/plan/BACKLOG.md`; el usuario la introducirá manualmente en el swarm congelado.
24. Alcance confirmado del publish tipado:
   - `@zeus/linea-kit`: todos los subpaths públicos;
   - `@zeus/acta-kit`: todos los subpaths públicos;
   - `@zeus/linea-system`: raíz y `./loader`;
   - `@zeus/force-system`: raíz y `./loader`.
25. No incluir inicialmente `lifecycle-kit`: sus estados de proceso no sustituyen la semántica declared/leased/inflated/ready/running del lenguaje; puede ser provider físico posterior. No incluir `story-board-schema`: valida acts/widgets y reparto, no Universo/Corto; será una proyección UI opcional. Tampoco incluir parte-kit/embajador-kit, pues protocol+acta cubren el contrato v1.
26. Para los cuatro paquetes, añadir declarations exactas, `exports.types`, `types` raíz cuando aplique y `files` publicables, sin modificar runtime `src/**`, schemas ni Lane D.
27. Reusar el patrón U155–U158: auditoría exports↔declarations, dos consumidores TS independientes `strict`/`noImplicitAny`, tarball smoke y consumidor limpio desde registry. Las declaraciones usan `unknown` donde runtime/schema no promete forma.
28. Usar changeset patch para adición compatible de tipos. Merge/push/publish solo bajo el protocolo operativo que se acuerde al ejecutar; nunca `npm publish` manual. Verificar tarball, registry, `tsc --noEmit`, CI/Release y main limpio al salir.
29. Mantener fuera de esta acción U204, `volumes-ops`, `linea-editor`, runtime SOLID y cualquier modificación del PR #55.

### Fase 4 · Activación en E-SDK / holón 03

30. Respetar ownership E: E-SDK no es un barrio ni una unidad, sino el mundo/holón 03. DocumentMachineSDK es la pieza de E asociada al barrio 20 del distrito lore-voz.
31. Tratar E00/E01/E11/E12/E13 como dependencias del mundo E, sin replanificarlas desde S:
   - E01 fija la lengua de línea;
   - E11 demuestra conversación→línea→nave;
   - E12 gira Document Machine a `@voz` personal;
   - E13 reencarna plugins contra contratos actuales.
32. Añadir, cuando E abra su obra, un puerto `DocumentMachineProvider` gobernado por `@logos/lore-hm`: analyze/feed, crystallize, deploy/run, inspect/status y provenance. La implementación real pertenece a E/DocumentMachineSDK.
33. Publicar providers/capacidades desde su origen por registry y pin exacto. S-SDK registra package/version/commit; el playground consume. Cero rutas OASIS o sibling en runtime.
34. Mantener los candados E: sound system, no plataforma; sin admin override; epoché; nave abre y no genera; motor sin lore; corpus por líneas/satélites con autoridad.

### Fase 5 · Playground consumidor-wrapper

35. Actualizar el dossier `prueba-de-h-m-barrio-lore` para declarar que consume `@logos/lore-hm`, contratos Zeus y el provider E. No convertir sus schemas locales en un segundo lenguaje.
36. Heredar de `prueba-de-dos` room, identidad bilateral y autoridad. H concede/revoca leases; M controla Future Machine mediante actividades legales del lenguaje; ambos observan la misma cadena causal.
37. Mientras E no publique runtime, usar `DeterministicDocumentMachineProvider` como contingencia del playground, marcado `contingency=true`, sin adjudicarse identidad canónica ni copiar código OASIS. Su contrato debe permitir sustitución por E sin cambiar escenario ni evidencia.
38. Mantener VectorMachine `mock=true`, Onfalo import-once, dos líneas canónicas, grafo bifurcado, dos universos/runners y cortos como chunks de ejecución consultables. Story-board es una vista opcional posterior, no definición de Corto.
39. Implementar LocalPodProvider con URN/IRI lógica, lease, ACL, events y artifacts; nunca llamarlo Solid Pod real. La sustitución por SolidPodProvider debe preservar URIs y actividades.
40. Producir por actividad wire JSON sellado + vista JSON-LD + evento de Pod. El reporte se genera desde eventos y un verificador externo comprueba causalidad, hashes, ACL, transiciones, provenance, cobertura y shutdown offline.

### Fase 6 · Promoción y salida de la generación anterior

41. Tras dos consumidores reales (E y playground) y registry smoke verde, promover `@logos/lore-hm` fuera del árbol Network-Engine. El destino exacto se decide entonces: package repository dedicado o library de lenguajes; no crear un nuevo x-sdk por inercia.
42. Reemplazar el provider contingente por el provider publicado de E y conservar el mock solo como fixture de test.
43. Sellar Network-Engine como fuente histórica del lenguaje: definición, commit y decisiones quedan anclados desde S; ningún consumidor mantiene dependencia runtime o path hacia la generación anterior.
44. Actualizar las junturas 01↔02, 02↔03 y 03↔04 solo después del criterio notarial de madurez. `HOLONES.md` mantiene siete filas; LORE-HM aparece como costura ejecutable/paquete, no nuevo holón.
45. Mantener el asiento `HOLONES/03-emmanuel` sin inflar hasta tick custodio. La activación por registry puede completarse antes y es el precedente preferido.

**Relevant files**

- `C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\HOLONES.md` — cadena canónica 01–07.
- `C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\02-logos.md` — Logos pendiente, destino conceptual de la lengua.
- `C:\S_LAB\s-sdk\DEVOPS\METODOLOGIA\holones\junturas\2026-07-16-dossier-notaria-tres-liturgias.md` — criterio de madurez E01+E11.
- `C:\S_LAB\s-sdk\plan\SPRINTS\sprint-game-city\MAPA-SIETE-PLANTAS.md` — spinoffs parked y junturas ejecutables.
- `C:\S_LAB\e-sdk\plan\{VISION,BACKLOG,DECISIONES}.md` — ownership y gates E.
- `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\transmedia-system\SCRIPTORIUM-CORE\NETWORK-ENGINE\LANGUAGES\` — protocolo de incubación heredado.
- `C:\S_LAB\s-sdk\.cursor\dossiers\prueba-de-h-m-barrio-lore\` — escenario consumidor actual.
- `C:\S_LAB\z-sdk\packages\engine\{linea-kit,acta-kit}\` — tipos requeridos.
- `C:\S_LAB\z-sdk\packages\mesh\{linea-system,force-system}\` — MCP systems tipados por decisión del usuario.
- `C:\S\scriptorium\playground\prueba-de-H-M\` — materialización posterior.

**Verification**

1. Dossier: toda afirmación tiene fuente/estado; no crea holón 08 ni confunde E-SDK con barrio/unidad.
2. Inception: máximo cinco primitivas, P1–P5 respondidas y al menos una regla imposible de expresar/validar con configuración plana.
3. SOLID: JSON Schema wire + expansión JSON-LD + SHACL; identidad triple no fusionada; hostil-omite deniega; planos Room/Notifications separados; hashes wire estables.
4. Zeus types: tests de los cuatro paquetes, audit exports, dos consumidores `tsc --noEmit`, tarballs y registry smoke post-publish; diff runtime/Lane D = 0.
5. E activation: E01 y E11 verdes antes de promover Logos; provider real sin rutas sibling y corpus sintético trazable.
6. Playground: E2E offline determinista, negativos fail-closed, 10 unidades + runners, dos líneas/universos, cortos trazables hasta Onfalo y cero procesos residuales.
7. Migración: dos consumidores registry, contingencia sustituida, Network-Engine sin dependencias entrantes runtime y ancla S actualizada.

**Decisions**

- No se crea holón 08 ni `L_SDK` en este programa.
- La lengua es una capacidad Logos incubada con tecnología del 04; E la encarna y el playground la prueba.
- S contiene notaría/anclas, no runtime ajeno.
- La capa SOLID completa entra en diseño desde el principio, con adapters reales escalonados.
- El lote Zeus incluye linea-kit, acta-kit, linea-system y force-system; lifecycle/story-board quedan opcionales por incompatibilidad semántica con el core.
- Esta sesión permanece READ-ONLY respecto a repos. No se crea ni encola plan en el swarm de z-sdk.

**Further Considerations**

1. El único punto que requiere decisión futura del custodio es el origen definitivo del package `@logos/lore-hm` al salir de incubación; se decide con evidencia de dos consumidores, no ahora.
2. PR #55 permanece fuente provisional abierta: el dossier cita URL/commit/estado y revalida al comenzar cada fase SOLID.
