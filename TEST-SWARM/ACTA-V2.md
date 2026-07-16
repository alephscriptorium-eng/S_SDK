# MUNICIONES — acta v2

> Contenido de la **sección final** del pack (`index.html`, DA-3). WP-D12 entrega
> el texto; WP-D20 lo maqueta sobre la plantilla fanzine (DE-8).
>
> **Procedencia:** reedición de `TEST-SWARM/Municiones — acta de inversión en una
> página.htm` (acta v1, fuente histórica intocada). Correcciones DE-5, DE-6:
> munición = ideas y obra; cifras en puntos de scrum; género comparecencia, no
> solicitud.

---

## Moira — especificación operativa

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/VISION.md` §glosario (moira);
patrón visual acta v1 (`.moira`, cuenta atrás, velo de caducidad); verificado en
`zeus-sdk/packages/arg/spec/CASOS.md` §1 (colapso ~6 min).

| elemento | comportamiento |
| -------- | -------------- |
| Franja `.moira` | Sticky arriba; texto de ley + cuenta atrás `#cuenta` |
| Duración | 360 s (6 min), coherente con colapso zeus |
| Actividad | scroll, pointer, keydown, touchstart → reinicia contador |
| Caducidad | `restante <= 0` → velo `#velo` visible, sello «Ronda caducada» |
| Reapertura | clic en velo o botón `#reabrir` → nueva ronda |

**Texto de la franja (v2):**

> LEY DE LA MOIRA — esta comparecencia caduca en **05:44** si usted no actúa.
> *Como toda ronda del sistema. Mientras lee, vive.*

**Texto del velo (v2, sin semántica monetaria):**

> Nadie actuó, y lo que no se re-gana, expira. Así funciona el sistema que esta
> acta acaba de demostrar — acaba usted de verlo funcionar.

---

## Portada

**Casa:** Escrivivir.co, productora · Registro Scriptorium · MMXXVI

**Título:** MUNICIONES

**Subtítulo:** para disidentes narrativos

**Naturaleza:** Acta de comparecencia en una página. Sin metarrelato, sin curvas
de mercado, sin promesa de verdad: cada afirmación lleva su sello, y lo no
verificado se declara en vez de venderse.

**Cifra única del pack** (DE-6):

> Comparecen con: **cien mil (100.000) puntos de scrum** · se ofrece: arquitectura, no fe

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-6;
`TEST-SWARM/GUION.md` §Remate R.3

---

## I · Advertencia al lector

*Apostilla: de cómo se lee esta acta*

Esta casa escribe bajo una regla capital que a usted le va a gustar:

> «Si tu memoria interna y la codebase discrepan, la codebase es la verdad.»

**Sello:** Verificado · **Fuente:** `SCRIPT_SDK/LLM.md` — regla capital

La misma ley rige esta página. Tres sellos, y ninguno se estampa sin fuente:

| sello | significado |
| ----- | ----------- |
| **Verificado** | Comprobado en disco y en código, con ruta absoluta. No se fíe: vaya a mirarlo. |
| **Doctrina** | Compromiso de diseño escrito y vigente en el repositorio. No es un hecho: es ley de la casa, y solo se deroga por escrito, a la vista de todos. |
| **Pendiente** | Cabo suelto declarado. El reglamento prohíbe taparlo sin fuente — «alucinación soberbia», lo llama. |

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/PRACTICAS.md` §1.3;
`TEST-SWARM/plan/DECISIONES.md` DE-2

De teología del futuro y demás retórica de solicitud: nada (DE-4). Quien afirma
el futuro pretende *acceso descendente desde un peldaño que aún no existe*.
Aquí se inventaría lo que hay, se declara lo que falta, y se le deja a usted el
juicio — que es suyo, como todo lo demás en este sistema.

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-4;
`SCRIPT_SDK/DEVOPS/VISION.md` §lore

**Munición (DE-5):** para disidentes narrativos, la munición es **idea y obra**
(línea Ibáñez), jamás pólvora ni moneda. El acta v1 equiparó munición con
pólvora y unidades; esta v2 descarta esa contaminación y no la hereda.

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-5;
`TEST-SWARM/plan/VISION.md` §glosario (munición)

---

## II · Comparecen

### De una parte, la productora

**Escrivivir.co** — revista digital abierta («Escrituras & Vivencias»),
economía fraterna y ética, comunicación descentralizada P2P, licencia pública
abierta. Comparece como productora del registro; la v2 no solicita capital ni
denomina en moneda (DE-5, DE-6).

**Sello:** Verificado · **Fuente:** `SCRIPT_SDK/docs/autoridades/01-escrivivir-co.md`

### De otra, la constelación

No una app: una familia de codebases federadas bajo el marco **Scriptorium**
— la *Hackería* (taller: herramientas, SDKs, agentes), el *Parlament*
(gobernanza) y las *Future Rooms* (sesiones e indexado de corpus). El registro
que las ancla, SCRIPT_SDK, tiene días de vida en este ensayo; los mundos que
ancla llevan años de cantera.

**Sello:** Verificado · **Fuente:** `SCRIPT_SDK/docs/autoridades/02-scriptorium.md`;
`C:/Users/aleph/OASIS/SCRIPTORIUM_V0/`

### Y de otra, usted, el compareciente

A quien no se le pide fe. Venga con la sospecha puesta: esta acta está compuesta
para resistirla, no para esquivarla. **No se pide inversión:** comparecencia y
demostración (DE-4).

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-4;
`TEST-SWARM/GUION.md` §Cierre

---

## III · Exponen

*Apostilla: inventario de municiones — ideas y obra*

Cada munición es una pieza de la constelación que esta casa pone a disposición
del compareciente como **obra verificable o doctrina citada**, no como promesa
de retorno.

### Primero · Hay un cosmos, y funciona

**Sello:** Verificado

**zeus-sdk**, motor transmedia: *«Un solo juego, un solo contrato»*. Una sola
autoridad muta el mundo; todos los demás proyectan y emiten intenciones. El
contrato entero cabe en cuatro palabras: `state | intent | track | ledger`. Los
jugadores no consumen el mapa: lo inflan, cachando y curando volúmenes de datos
que son suyos.

**Fuente:** `zeus-sdk/plan/VISION.md` §principios;
`zeus-sdk/packages/volumes/volumes.json` — `<pendiente>` ruta exacta volumes en
este disco; verificar en WP-D20 si el sello Verificado se mantiene

### Segundo · El poder caduca por diseño

**Sello:** Verificado

> «La ronda CADUCA. Esto lo cambia todo.»

**Fuente:** `zeus-sdk/packages/arg/spec/CASOS.md` §1

Si nadie actúa, el mundo muere solo: colapso calculado y verificado al decimal
(~6 minutos, 20 riadas). La autoridad no se hereda ni se atrinchera: se re-gana
ronda a ronda, o expira. El fin del mundo está escrito *dentro* del mundo.

*Apunte:* la franja superior de esta acta obedece la misma ley. ¿No me cree?
Deje de actuar seis minutos.

### Tercero · La epoché es del usuario

**Sello:** Doctrina

**Bot Hilbert** (AgentLoreSDK): agentes que cartografían todas las posiciones
de un tema sin colapsarlas en una. Tercer axioma del cartógrafo, literal:
*«la epoché es del usuario»* — nada se crea sin consenso explícito, colapsar es
derecho de la persona, y el diseño lo asegura con candados: *sin admin-override*.
Es el reverso exacto del feed que decide por usted qué pensar.

**Fuente:** `emmanuel-sdk/AgentLoreSDK/.github/skills/cristalizador/SKILL.md`;
`emmanuel-sdk/plan/DECISIONES.md` — `<pendiente>` verificar rutas en disco al
maquetar; si no existen, bajar sello a Pendiente

### Cuarto · Corpus propios, no audiencias cautivas

**Sello:** Doctrina · Pendiente

**emmanuel-sdk**: volúmenes privados y máquinas de agentes. La *Document Machine*
lleva del corpus a la voz; la *Vector Machine*, del corpus a la consulta; la
*Future Machine*, del corpus al grafo de futuros posibles, y del grafo a la obra
dramática. Quien narra posee los medios de narración. Papel primero: el plan está
escrito; la SPEC, declarada pendiente — y así consta.

**Fuente:** `emmanuel-sdk/plan/VISION.md`; junturas en `SCRIPT_SDK/DEVOPS/` —
`<pendiente>` ancla exacta dossier Future Machine

### Quinto · Apuntar, no contener

**Sello:** Doctrina

Regla DS-5 de la casa: el registro no almacena los mundos — los ancla por ruta.
Todo se compone desde registry propio (`npm.scriptorium.escrivivir.co`),
federación por mesh P2P (HTTPS/WSS), endpoints MCP. Traducción: no hay jaula que
abandonar, porque no hay jaula. Usted se va cuando quiera, y se va con lo suyo.

**Fuente:** `SCRIPT_SDK/DEVOPS/VISION.md` §misión;
`SCRIPT_SDK/DEVOPS/METODOLOGIA/holones/07-script-sdk.md`

### Sexto · Hasta la ceguera es ley

**Sello:** Verificado

El mundo zeus no sabe que el registro que lo ancla existe, y está prohibido
decírselo: *«JAMÁS añadir puntero de vuelta»*. Cada capa sirve a la superior
sin poder concebirla — como TCP no sabe de HTTP. Y el método no se exime a sí
mismo: el registro deja escrito que *no puede auditarse solo*, y declara la
tarea de su propia auditoría como cabo suelto. Un sistema que legisla contra su
propia soberbia: eso no se ve en un pitch.

**Fuente:** `SCRIPT_SDK/DEVOPS/METODOLOGIA/holones/01-mythos.md` §regla dura;
`SCRIPT_SDK/DEVOPS/VISION.md` §guarda del 07

---

## IV · Renuncias

*Apostilla: lo que esta casa no hará — y qué lo impide*

| renuncia | mecanismo |
| -------- | --------- |
| **No habrá feed que decida por usted** | La epoché es del usuario: axioma con candados de diseño, sin admin-override. No es una política de empresa; es un invariante del contrato. |
| **No habrá jaula** | DS-5, apuntar no contener: sus volúmenes son suyos, la federación es P2P, y la salida es un derecho de arquitectura — no una tarifa. |
| **No habrá verdad central** | «Sostener fragmentos sin metarrelato»: el registro ancla y relee; no dicta. La misión, escrita, es esa — no otra vestida de esa. |
| **No habrá trono** | La moira: toda autoridad caduca si no se re-gana con obra, ronda a ronda. Verificado al decimal en el código del mundo. |
| **No habrá exit** | Economía fraterna que circula: obra, taller y federación bajo licencia abierta vAIGPLv1. Participación en lo producido, no especulación. |

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-4, DE-5;
renuncias alineadas con acta v1 §IV (semántica saneada)

Nótese que ninguna renuncia descansa en la virtud de nadie. Las virtudes se
traicionan; la arquitectura hay que derribarla — y esta se publica en abierto,
para que cualquiera vea venir la excavadora.

---

## V · Reparto de capacidad

*Apostilla: en qué se convierten los cien mil puntos de scrum*

Esta sección no lleva sello *Verificado*, y sería sospechoso que lo llevara: es
la parte que se **declara** como reparto de capacidad sobre los backlogs de la
constelación, no una solicitud de capital. Propuesta de partida, a deliberar
donde se delibera todo — en el Parlament:

| puntos de scrum | destino | qué cubre |
| --------------- | ------- | --------- |
| **40.000** | El taller (Hackería) | Pasar las máquinas de papel a SPEC y de SPEC a código; publicar los SDKs al registry. Obra verificable en cada ronda, con ruta, como todo aquí. |
| **25.000** | La federación | VPS, registry npm, mesh P2P, endpoints MCP: la infraestructura de la que cualquiera puede desertar llevándose lo suyo. Se sostiene precisamente *porque* no retiene a nadie. |
| **25.000** | La obra | Primeras Future Rooms y producciones del Futures-engine — ramificación dramatúrgica, Layer2 jugado como LARP. El juego tocando calle. |
| **10.000** | El fondo fraterno | Préstamo sostenible del taller a quien produzca en él. La economía que circula empieza circulando. |
| **100.000** | **Total del reparto** | Suma de capacidad en puntos de scrum sobre backlogs (DE-6). |

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-6;
`TEST-SWARM/GUION.md` §Remate R.3 (40.000 · 25.000 · 25.000 · 10.000)

### Cláusula de la moira

El reparto se libera por rondas trimestrales. Cada ronda se gana con obra
verificada — con ruta, como todo en esta acta. **Ronda sin obra: el compromiso
caduca solo y el resto vuelve a su mano.** Igual que el mundo: sin acción,
colapso.

No le pedimos confianza. Le entregamos un mecanismo de desconfianza que funciona.

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/VISION.md` §glosario (moira);
cláusula alineada con acta v1 §V (denominación corregida a puntos de scrum)

La participación en lo producido — obra, servicios de federación y taller — corre
bajo la licencia abierta de la casa. Participación que circula, no que acumula.
Si lo que busca es una salida especulativa, aquí no la hay; si lo que busca es
una entrada a la infraestructura narrativa que no le pertenecerá a nadie — tampoco
a nosotros —, acaba de verla ejecutarse en las Notas anteriores.

---

## VI · Otorgan

No le pedimos que crea: creer es colapsar, y el colapso es suyo. **Comparecemos
con munición** — cien mil puntos de scrum en ideas y obra — para sostener abierto
un campo donde la narración vuelva a ser de quien narra (DE-5).

**Sello:** Doctrina · **Fuente:** `TEST-SWARM/plan/DECISIONES.md` DE-5, DE-6;
`TEST-SWARM/GUION.md` §Cierre

Y para que conste donde la memoria no se pierde — en la codebase, que es la
verdad —, firman:

| rol | firma |
| --- | ----- |
| **La productora** | Escrivivir.co · secretaria@escrivivir.co |
| **El compareciente** | _(espacio en blanco)_ |

En la constelación, a dieciséis de julio de dos mil veintiséis. ❦

### Letra chica

Las autoridades de este registro son apócrifas por diseño (`AUTORIDADES.md`):
la ficción honesta se declara. La otra, la que no se declara, suele llamarse pitch.

Licencia vAIGPLv1 «Animus Iocandi», v1.0.0-beta.1 · Prosa breve y cervantina
por mandato de `LLM.md` · Todas las rutas citadas existen o están marcadas
`<pendiente>`: el repo es la verdad.

**Acta v1:** `TEST-SWARM/Municiones — acta de inversión en una página.htm` —
fuente histórica intocada; patrón visual de moira conservado; semántica monetaria
descartada en esta v2.

---

## Notas para WP-D20 (maquetación)

| elemento v1 | elemento fanzine (DE-8) |
| ----------- | ------------------------ |
| `.moira` + `#cuenta` | `.stats-bar` + countdown JS inline |
| `.sello.v` / `.d` / `.p` | `.kw` / `.kw-inv` / `.stamp` |
| sección propia al cierre | último `<section>` de `docs/index.html` (DA-3) |

El JS de moira puede reutilizarse del acta v1 (`a_002_3Tg-.htm`, solo lectura)
con textos de esta v2.
