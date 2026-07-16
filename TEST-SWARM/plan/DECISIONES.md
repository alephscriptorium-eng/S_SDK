# DECISIONES — registro de TEST-SWARM

Independiente de los registros de los mundos reales. Formato: DE-n, fecha,
decisión, consecuencia. Las abiertas (DA-n) las resuelve el custodio.

## Tomadas

- **DE-0 · 2026-07-16 · Ensayo general, no producción.** TEST-SWARM replica
  el protocolo canónico reinicializado (procedencia: `emmanuel-sdk/plan` @
  2026-07-16). Banco de pruebas **demolible entero**; nada de aquí gobierna
  ni se promete a los mundos reales. Consecuencia: escribir fuera de
  `TEST-SWARM/` = devolución (gate a).
- **DE-1 · 2026-07-16 · Papel primero.** Los WPs entregan documentos y
  artefactos de demo; código solo instrumental (gates, validadores).
- **DE-2 · 2026-07-16 · El pack une simulación y acta.** Tramos: guion →
  Nota 1 (forma M) → Nota 2 (máquina + espejo) → Nota 3 (ejecución trazada)
  → superposición → acta v2. Los sellos (Verificado / Doctrina / Pendiente)
  rigen todo el pack: ningún sello sin fuente.
- **DE-3 · 2026-07-16 · Leer y citar, jamás tocar ni copiar.** Los mundos
  reales se releen como fuente con ruta citada; cero escrituras hacia
  ellos, cero copia de árboles (gate d).
- **DE-4 · 2026-07-16 · Género: las Notas de Lovelace, no el pitch.**
  Precedente histórico: la pasión del salón de Babbage (1832, el fragmento
  de la máquina funcionando, sin pedir nada) y las Notas de Ada (1843, la
  Nota G ejecutando a mano el programa de Bernoulli sobre una máquina en
  construcción). El pack **describe la máquina y corre un caso sobre ella**;
  no solicita. Consecuencia: retórica de fundraising (hockey, curvas, TAM,
  «retorno») = devolución (gate e, PRACTICAS §1.7).
- **DE-5 · 2026-07-16 · Munición ≠ moneda.** Línea Tomás Ibáñez: las
  municiones para disidentes narrativos son **ideas y obra**, no dinero ni
  pólvora. La equiparación munición-pólvora-dinero del acta v1 es
  contaminación de la fuente original y queda prohibida. Consecuencia: gate
  (e).
- **DE-6 · 2026-07-16 · La unidad es el punto de scrum.** Las 100.000
  unidades son **puntos de scrum** repartidos sobre los backlogs de la
  constelación (coherente con el mapa de masas del inversor), jamás
  unidades monetarias. El acta v1 = fuente histórica intocada; el acta v2
  (WP-D12) la corrige. Decisión del custodio.
- **DE-7 · 2026-07-16 · Canal de publicación: `main` huérfana en este mismo
  repo.** Se conserva el *fin* (el backstage no se expone) y se fija el
  *mecanismo* elegido por el custodio: publicar a
  `github.com/alephscriptorium-eng/S_SDK` (remote `origin`) desde SCRIPT_SDK,
  con **`main` huérfana = solo `docs/`** (la doc para Pages, sin historia ni
  árbol backstage) y **`draft` = backstage local que JAMÁS se empuja** (el
  custodio ya creó `draft` desde `main`, `e18ff9c`, como copia del
  backstage). Pages sirve `main` /docs. La orfandad es la garantía: `main`
  no puede filtrar la raíz backstage (HIPOTESIS, DEVOPS, LLM.md,
  autoridades) porque no la contiene. **Ampliada por DA-4:** `main` lleva
  `docs/` (el sitio) **y** `TEST-SWARM/` (el ensayo conservado, sin
  duplicar el sitio). Runbook literal en WP-D22.
- **DE-8 · 2026-07-16 · Look: la plantilla fanzine de la casa.** El pack y
  el acta v2 se maquetan sobre el poster-template monocromo de
  pub.escrivivir.co (procedencia:
  `aleph-scriptorium\BlockchainComPort\OASIS_PUB\EXTENSIONS\LANDINGPAGE\docs\poster-template\`).
  Reuso por **copia-release con cabecera de procedencia** (patrón ya
  sancionado por `OASIS_PUB\site\assets\fanzine.css`). Consecuencia: sin
  CDNs ni fuentes web; paleta mono (#000/#fff, Courier); desviación de
  estilo = devolución.

## Abiertas (bloquean lo indicado)

*(ninguna — todas las decisiones abiertas están cerradas a 2026-07-16)*

## Cerradas

- **DA-1 · Formato final del pack** — **cerrada 2026-07-16 (custodio):** HTML
  autocontenido (`index.html`) sobre plantilla fanzine (DE-8), publicado por
  Pages (DE-7). Desbloquea WP-D20.
- **DA-2 · Estatuto de la analogía M** — **cerrada 2026-07-16 (custodio):
  dos estratos, cada uno con su sello, nunca mezclados.** En paladino:
  cuando el pack habla de la M, dice dos cosas distintas y las distingue.
  (1) **La lección** — hechos de manual (cinco teorías de cuerdas,
  dualidades que las traducen, formulación completa que nadie tiene):
  divulgación con consenso, sello **Verificado** + fuente pública. El
  visitante se lleva la clase gratis, venga o no por el producto.
  (2) **La apuesta** — que esa forma sea un holón 06, que el centro vacío
  delate un peldaño faltante, que lo abra un taller mixto: lore de la casa,
  ya firmado como pagaré (`SCRIPT_SDK/DEVOPS/VISION.md` §lore), sello
  **Doctrina**, declarado apuesta y pendiente de auditoría (05). El lector
  sabe siempre cuándo está en clase y cuándo en la casa de apuestas.
  Desbloquea el tono de WP-D10.
- **DA-3 · Relación Notas ↔ acta v2** — **cerrada 2026-07-16 (custodio
  delega, decide el plan): sección propia al cierre del pack.** El pack ES
  la v2 de la web (el diseño absorbió ese concepto); el acta no es página
  aparte ni pie de página: es el **último acto**, sección entera y suya
  dentro de `index.html`, con su moira. Desbloquea WP-D12.
- **DA-4 · Tras el estreno** — **cerrada 2026-07-16 (custodio):
  conservar.** El ensayo (TEST-SWARM entero: plan, GUION, NOTAS, actas) se
  añade al git y **se publica junto con `docs/`** en la `main` huérfana: el
  método a la vista es parte de la demostración. Nota al push: TEST-SWARM
  incluye el acta v1 (.htm) como fuente histórica declarada; si el custodio
  no la quiere pública, la excluye en WP-D22.
- **DA-5 · Credencial de publicación** — **cerrada 2026-07-16 (custodio):
  nadie hace push salvo el custodio.** Los workers jamás empujan; el 403
  (`denied to escrivivir-co`) es asunto del custodio fuera del plan. El
  runbook de WP-D22 termina donde empieza el push.
