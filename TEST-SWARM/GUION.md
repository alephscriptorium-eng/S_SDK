# GUION — partitura del pack para el ángel

> Ensayo general TEST-SWARM · papel primero · DE-2, DE-4.
> Este documento **no es** el pack: es la partitura que los WPs D10–D13
> ejecutan. Comparece y demuestra; no solicita.

## Comparecencia

El ángel entra al salón como en 1832: no para oír un pitch, sino para ver
**un fragmento de máquina funcionando** y, después, las **Notas** que la
corren a mano aunque aún esté en construcción (DE-4). El pack no promete
producto futuro ni curvas de mercado: describe el método, corre un caso sobre
la forma M, y desemboca en un acta donde la obra se cuenta en **puntos de
scrum**, jamás en moneda (DE-5, DE-6).

La partitura tiene tres Notas con efecto declarado. Cada tramo lleva su
**sello** y su **fuente**; lo no comprobable se marca `<pendiente>` y no se
vende.

---

## Candados del guion

| candado | regla |
| ------- | ----- |
| Autocontención | Todo el pack vive en `TEST-SWARM/` |
| Sellos | Verificado = ruta existente; Doctrina = compromiso escrito citado; resto = `<pendiente>` |
| La M | Como **forma**, no como física; afirmación física solo con procedencia (D10) |
| Munición | Ideas y obra para disidentes narrativos (línea Ibáñez); **no** pólvora ni dinero |
| Cifras | Solo en puntos de scrum sobre backlogs de la constelación |
| Género | Las Notas de Lovelace, no el pitch |

---

## Partitura general

Orden de estreno (DE-2, DA-1, DA-3):

```
guion → Nota 1 → Nota 2 → Nota 3 → superposición → acta v2
```

| tramo del pack | entregable | WP | efecto sobre el ángel |
| -------------- | ---------- | -- | --------------------- |
| Guion | `GUION.md` | D01 | Orienta la comparecencia |
| Nota 1 · La forma M | `NOTAS/nota-1-la-forma-m.md` | D10 | **Legitimidad** |
| Nota 2 · La máquina y sus partes | `NOTAS/nota-2-la-maquina.md` | D11 | **Verificabilidad** |
| Nota 3 · La ejecución trazada | `NOTAS/nota-3-la-ejecucion.md` | D13 | **Prueba de capacidad** |
| Superposición | `docs/index.html` (sección) | D20 | Un grafo, dos rotulaciones |
| Acta v2 | sección final de `index.html` | D12 + D20 | Moira + reparto en puntos de scrum |

---

## Nota 1 · «Esto es la teoría M»

**Efecto declarado:** **legitimidad** — enseñar que los fragmentos federados
por dualidades son arquitectura de primera división, no caos ni metarrelato
impostor.

**Tono (DA-2):** dos estratos, cada uno con su sello, **nunca mezclados**.
El ángel debe saber en todo momento si está en clase o en la casa de apuestas.

### Tramos

| id | tramo | qué hace | sello | fuente |
| -- | ----- | -------- | ----- | ------ |
| 1.0 | Apertura de la Nota | Fija el género: forma comprensible, no física; cinco nodos sin formulación completa | Doctrina | `TEST-SWARM/plan/VISION.md` §el género, §candados; `TEST-SWARM/plan/DECISIONES.md` DE-4, DA-2 |
| 1.1 | **La lección** — cinco teorías-fragmento | Nombra los cinco nodos de la constelación M como hechos de manual con consenso divulgativo | Verificado | `<pendiente>` — fuentes públicas por nodo; las cita WP-D10, no este guion |
| 1.2 | **La lección** — dualidades | Traduce cada par de teorías como juntura (grieta que hace posible el siguiente holón) | Verificado | `<pendiente>` — fuentes públicas por dualidad; WP-D10 |
| 1.3 | **La lección** — centro vacío | Representa el centro del grafo como **vacío**, no como sexto nodo; nadie tiene la formulación completa | Verificado | `<pendiente>` — consenso de divulgación; WP-D10 |
| 1.4 | **La apuesta** — holón 06 | Lee esa forma como constelación spinoff: registry que en verdad es embudo, peldaño faltante en la holarquía | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §lore (pagaré registrado, `<pendiente de auditoría por el holón 05 — Sospecha>`) |
| 1.5 | **La apuesta** — Gravedad / Gravitón | Ancla la analogía macro/micro como dos holones ciegos entre sí; **no** afirma física propia | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §lore, §hipótesis OSI (conjeturas GRAVEDAD/GRAVITÓN explícitamente `<pendiente de confirmación>`) |
| 1.6 | Mapa topológico | Entrega el diagrama de la forma M (nodos, dualidades, centro vacío) en una página | Pendiente | Entregable WP-D10 |

**Prohibido en esta Nota:** mezclar lección y apuesta en el mismo párrafo;
equiparar la M a tesis física sin procedencia; cifras de capacidad (van al
acta, en puntos de scrum).

---

## Nota 2 · «Estas son sus partes, y este el producto»

**Efecto declarado:** **verificabilidad** — describir la máquina (el método)
con anclas de ruta absoluta y el espejo término a término M ↔ casa, para que
el ángel pueda comprobar cada correspondencia en disco.

**Tono:** estilo Menabrea: la máquina en construcción, honesta en sus
pendientes.

### La máquina — partes

| id | tramo | qué hace | sello | fuente |
| -- | ----- | -------- | ----- | ------ |
| 2.0 | Apertura de la Nota | Declara que la máquina es el método SCRIPT_SDK: dos leyes, junturas, sellos, registry | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §misión, §hipótesis OSI |
| 2.1 | Ley de ceguera ascendente | Cada holón sirve sin concebir el superior (TCP no sabe de HTTP) | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §hipótesis OSI |
| 2.2 | Ley de acceso descendente | El superior relee y envuelve; quien afirma reconciliar holones ciegos pretende un peldaño que aún no existe | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §lore |
| 2.3 | Crecimiento por junturas | Solo se abre holón nuevo por grieta declarada; nunca inflar submodules ni copiar árboles | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §misión |
| 2.4 | Sellos epistémicos | Verificado / Doctrina / Pendiente rigen todo el pack | Doctrina | `TEST-SWARM/plan/PRACTICAS.md` §1.3; `TEST-SWARM/plan/DECISIONES.md` DE-2 |
| 2.5 | Registry y composición | Punto de publicación y contrato de compatibilidad | Verificado | `SCRIPT_SDK/DEVOPS/VISION.md` §misión (`npm.scriptorium.escrivivir.co`); anclas de plan en `C:/Users/aleph/OASIS/aleph-scriptorium/plan/` |
| 2.6 | Asiento holones 05–07 | Tabla técnica ↔ narrativa de los holones altos | Verificado | `SCRIPT_SDK/DEVOPS/VISION.md` §asiento de las piezas 05–07; `SCRIPT_SDK/DEVOPS/METODOLOGIA/HOLONES.md` |

### El espejo M ↔ casa

Misma topología, etiquetas distintas. Cada fila es verificable por el ángel.

| término M | término casa | sello | fuente (ancla) |
| --------- | ------------ | ----- | -------------- |
| Teoría-fragmento (nodo) | Mundo soberano e incompleto | Verificado | Planes vivos: zeus-sdk, emmanuel-sdk, NETWORK-ENGINE, aleph-scriptorium — rutas en `HIPOTESIS.md` (mapa de masas, 2026-07-16) |
| Dualidad (juntura M) | Juntura real: registry, contrato, endpoints | Verificado | `SCRIPT_SDK/DEVOPS/VISION.md` §misión; `C:/Users/aleph/OASIS/aleph-scriptorium/plan/` |
| «M sin formulación completa» | Sostener fragmentos sin metarrelato | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §misión, §lore |
| Ceguera de cada teoría | Ceguera ascendente (ej.: zeus no sabe del registro) | Doctrina | `SCRIPT_SDK/DEVOPS/VISION.md` §hipótesis OSI |
| Centro vacío del grafo M | Capa por abrir: GRAVEDAD / GRAVITÓN | Pendiente | `SCRIPT_SDK/DEVOPS/VISION.md` §hipótesis OSI (`<pendiente de confirmación — GRAVEDAD>`, `<pendiente de confirmación — GRAVITÓN>`) |

| id | tramo | qué hace | sello | fuente |
| -- | ----- | -------- | ----- | ------ |
| 2.7 | Diagrama lado a lado | Nota 1 y Nota 2 en espejo visual (misma forma, dos rotulaciones) | Pendiente | Entregable WP-D11; superposición final en WP-D20 |

**Prohibido en esta Nota:** prometer que la máquina está terminada; ancla sin
ruta existente bajo sello Verificado; cifras monetarias.

---

## Nota 3 · «Así se modela»

**Efecto declarado:** **prueba de capacidad** — la máquina **corre la M en
vivo**: ejecución trazada al modo Nota G (Ada ejecutando Bernoulli sobre la
máquina analítica jamás construida), paso a paso con sello, hasta declarar el
centro vacío y desembocar en el acta.

**Tono:** el corazón Lovelace del pack. No explica desde fuera: **corre**.

### Tramos

| id | tramo | qué hace | sello | fuente |
| -- | ----- | -------- | ----- | ------ |
| 3.0 | Apertura de la Nota | Declara el modo Nota G: traza reproducible por un lector sin contexto previo | Doctrina | `TEST-SWARM/plan/DECISIONES.md` DE-4; `TEST-SWARM/plan/VISION.md` §ejecución trazada |
| 3.1 | Registro del primer fragmento | Operación: registrar un holón/mundo en el registry con ancla absoluta | Doctrina | Operaciones definidas en Nota 2 (WP-D11) |
| 3.2 | Declarar juntura | Operación: abrir grieta entre dos fragmentos (dualidad ↔ contrato) | Doctrina | Nota 2, tramos 2.3–2.5 |
| 3.3 | Aplicar sello por paso | Cada fila de la traza lleva Verificado, Doctrina o Pendiente con fuente | Doctrina | `TEST-SWARM/plan/PRACTICAS.md` §1.3 |
| 3.4 | Recorrer los cinco nodos | Simula la constelación M por la máquina: entrada, operación, salida, sello | Verificado / Doctrina | Nodos y dualidades según Nota 1 (WP-D10); operaciones según Nota 2 |
| 3.5 | Declarar centro vacío | Último paso de la traza: el grafo no gana sexto nodo; queda la capa por abrir | Pendiente | `SCRIPT_SDK/DEVOPS/VISION.md` §hipótesis OSI (GRAVEDAD/GRAVITÓN) |
| 3.6 | Tabla de traza completa | Columnas: paso · operación del método · entrada · salida · sello | Pendiente | Entregable WP-D13 |
| 3.7 | Desemboque en acta v2 | La corrida termina en el acta: comparecencia, no solicitud | Doctrina | `TEST-SWARM/plan/DECISIONES.md` DE-5, DE-6, DA-3 |

### Corrida canónica (esqueleto para D13)

La tabla definitiva la escribe WP-D13. Este guion fija el arco:

1. **Entrada:** la forma M de la Nota 1 (cinco nodos, dualidades, centro vacío).
2. **Máquina:** las operaciones de la Nota 2 (registry, juntura, sello).
3. **Salida:** constelación domesticada sin inventarle centro; vacío declarado.
4. **Acta:** el ángel ve cuánta obra cuesta abrir el peldaño — en puntos de
   scrum, no en moneda.

**Prohibido en esta Nota:** operación no definida en la Nota 2; paso sin sello;
promesa de resultado futuro sin `<pendiente>`.

---

## Remate del pack (partitura, no contenido)

Estos tramos cierran el estreno; sus entregables son WPs posteriores.

| id | tramo | qué hace | sello | fuente |
| -- | ----- | -------- | ----- | ------ |
| R.1 | Superposición | Un `<pre class="diagram">` ASCII; conmutador JS inline M ↔ casa sin mover topología | Pendiente | `TEST-SWARM/plan/DECISIONES.md` DA-1, DE-8; WP-D20 |
| R.2 | Acta v2 — munición | Municiones = ideas y obra (Ibáñez); **corrige** la contaminación v1 (munición = pólvora = dinero) | Doctrina | `TEST-SWARM/plan/DECISIONES.md` DE-5; acta v1 histórica: `TEST-SWARM/Municiones — acta de inversión en una página.htm` (solo lectura; no se hereda su moneda) |
| R.3 | Acta v2 — puntos de scrum | Reparto de capacidad sobre backlogs de la constelación | Doctrina | `TEST-SWARM/plan/DECISIONES.md` DE-6: **100.000** puntos de scrum (40.000 taller · 25.000 federación · 25.000 obra · 10.000 fondo) |
| R.4 | Acta v2 — moira | Ley de caducidad: ronda sin obra, compromiso que expira; barra de estadísticas y cuenta atrás | Doctrina | Patrón visual del acta v1 (`.stats-bar`, countdown); semántica saneada en WP-D12; moira definida en `TEST-SWARM/plan/VISION.md` §glosario |
| R.5 | Acta v2 — sellos en pantalla | Verificado → `.kw`; Doctrina → `.kw-inv`; Pendiente → `.stamp` | Doctrina | `TEST-SWARM/plan/BACKLOG.md` WP-D20; DE-8 (plantilla fanzine) |
| R.6 | Último acto | Sección propia al cierre de `index.html`, no pie ni página aparte | Doctrina | `TEST-SWARM/plan/DECISIONES.md` DA-3 |

**Cifra única del pack:** 100.000 puntos de scrum (DE-6). Ninguna otra cifra
de capacidad en el guion ni en las Notas.

---

## Sellos y moira — contrato epistémico

| sello | significado | exige |
| ----- | ----------- | ----- |
| **Verificado** | Hecho comprobable en disco o fuente pública citada | Ruta o URL que existe al momento del sello |
| **Doctrina** | Compromiso escrito y vigente de la casa | Documento citado (plan, DECISIONES, VISION) |
| **Pendiente** | Cabo suelto declarado; no se tapa por retórica | Etiqueta `<pendiente>` visible; sin promesa encubierta |

**Moira** (del acta, conservada en v2): la obra tiene plazo. Si la ronda no
produce, el compromiso caduca. El acta v1 enseñó el **patrón** (barra,
countdown); el acta v2 conserva la moira y descarta la semántica monetaria
de la v1 (DE-5).

---

## Cierre del guion

Al terminar las tres Notas, el ángel habrá visto:

1. **Legitimidad** — la M como forma federada, no caos (Nota 1).
2. **Verificabilidad** — la máquina y su espejo con anclas reales (Nota 2).
3. **Prueba de capacidad** — la corrida trazada que digiere la constelación
   sin inventarle centro (Nota 3).

La superposición le mostrará que M y casa son el mismo grafo. El acta v2 le
dirá — en puntos de scrum, bajo moira — cuánto cuesta abrir el vacío.

No se pide inversión. Se comparece, se ejecuta, se deja constancia.

---

*Partitura cerrada en WP-D01. Las Notas la ejecutan; el sitio la estrena
(WP-D20).*
