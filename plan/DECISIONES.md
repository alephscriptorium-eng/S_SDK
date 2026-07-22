# DECISIONES — holón 07, inicialización

Tomadas = DE-In (decisión, fuente, consecuencia). Abiertas = DA-In (las
cierra el custodio). Fuente común de las DE: conversación custodio↔Fable,
2026-07-19 (reunión de status + plan aprobado en `plan/BACKLOG.md`).

## Tomadas

- **DE-I0 · Inicialización como workspace raíz.** S_SDK deja de estar vacío
  en remoto: se conecta entero a GitHub, estructura tipo aleph-scriptorium
  (raíz que trae git submodules — ya puede traer los de zeus).
  Consecuencia: olas I0/I1; revisa DE-7 de TEST-SWARM (ver DE-I4).

- **DE-I1 · Web tech = VitePress + piel zine.** Export del mecanismo zeus
  completo; base limpia = variante library
  (`Z_SDK-games-library/.github/workflows/docs.yml` + su `config.mjs`).
  Los 7 puntos frágiles detectados en el pipeline zeus se corrigen de serie.

- **DE-I2 · Dominio = `s-sdk.escrivivir.co`**, parejo a z-sdk. Recursos
  parejos habilitados: CNAME commiteado, DNS CNAME →
  `alephscriptorium-eng.github.io`, Enforce HTTPS.

- **DE-I3 · Repo nuevo `S_SDK-skills-library`**, parejo a
  `Z_SDK-games-library`. Las habilidades hoy replicadas (WEBS;
  VIGILANCIA+ADDENDA; roles/ de swarm copiado en 4 planes) se convierten en
  **skills con formato estándar público**, publicadas al registry propio.
  Cada holón **activa** el skill común en vez de mantener copia.
  Consecuencia: ola I2 entera; I6 (activación en holones); aplica los ejes
  II/III/IV del RE-PLAN.

- **DE-I4 · Revisión de DE-7 (TEST-SWARM).** Ya no main huérfano solo-docs:
  publicación abierta del repo con línea público/backstage (DA-I1).
  El pack TEST-SWARM se conserva servido (DA-4 de TEST-SWARM se honra).

- **DE-I5 · Revisión de DS-5.** Entran submodules como **anclas read-only**
  (el puntero es descendente 07→01: legal; el árbol de zeus sigue ciego).
  La composición por registry que DS-5 protegía se **restaura** por la vía
  skills (DE-I3): los mundos componen método desde el registry, no copias.

- **DE-I6 · Capa de contenido por método WEBS.** La web de holones se
  redacta con el método de `OASIS/SCRIPTORIUM_V0/WEBS/` (backtracking,
  C8/C9, entrega verbatim §E). El **método** vive en el skill `site-web`;
  la **instancia** (CANTERA, ENTREGA-CAPA) vive en `WEBS/` de este repo.

- **DE-I7 · Creación y publicación de la skills-library delegada al swarm**
  *(cierra el tick «crear el repo»; custodio 2026-07-19).* El swarm tiene
  capacidades (gh CLI + npm publish al Verdaccio): **crea** el repo
  `S_SDK-skills-library` y **publica** el paquete de skills. Relajación
  puntual de DA-5 (que reservaba todo push al custodio). La skills-library
  no contiene material sensible (skills marco-agnósticos, PRACTICAS delta 5),
  luego su creación+push es segura para el swarm. *El push del repo raíz
  S_SDK ya no queda «solo custodio»: ver DE-I13. Nota de ops: si `npm
  publish` pide auth de escritura y el `.npmrc` no la trae, eso es tick de
  ops del custodio, no bloqueo del WP (procedimiento canónico: DE-I12).*

- **DE-I8 · Asentar sin inflar remotos** *(cierra DA-I2 y DA-I4; custodio
  2026-07-19).* Los submodules de aleph-scriptorium (05–06) y emmanuel (03)
  **no se añaden todavía**: se **asientan** — ficha + link en la web,
  placeholder de anclaje preparado en `HOLONES/` (ruta reservada, sin
  `git submodule add`). Solo el holón 01 (zeus + games-library) se ancla de
  verdad en WP-I03. Se re-abre cuando el custodio dé el tick de inflado.

- **DE-I9 · Dominio de la skills-library** *(cierra DA-I3; custodio
  2026-07-19).* Parejo al patrón games: `skills.s-sdk.escrivivir.co`
  (mismo esquema que `games.z-sdk.escrivivir.co`). CNAME commiteado + DNS +
  HTTPS, recursos parejos. Ya no bloquea el Pages de I24.

- **DE-I10 · La abstracción decide qué es público** *(cierra DA-I1;
  custodio 2026-07-19).* No es «esconder histórico»: es **separar protocolo
  de datos**. Regla:
  - **Protocolo/método → skill** (público, marco-agnóstico, SIN datos):
    roles del swarm, doctrina del vigía (ESTACION), método WEBS. Parametriza
    «el mundo»; jamás nombra mundos reales.
  - **Datos → instancia** (separada del skill): la sesión de vigilancia de
    zeus, sus addendas, los handoffs. Es DATO de un mundo, no método.
  - **Error fundamental nombrado:** que la VIGILANCIA del plan de zeus viva
    dentro de SCRIPT_SDK **viola DS-5** (el holón 07 no almacena código/dato
    de otro mundo — reléelo y ancla, no lo guardes). Corregirlo es parte del
    trabajo: esos datos **salen del núcleo** de SCRIPT_SDK.
  - **Primer caso de verificación:** los datos de vigilancia de zeus, una
    vez separados y **de-identificados** (mundo → parámetro), son el primer
    corpus-instancia que prueba que **otro holón puede usar el skill**
    (Eje IV del RE-PLAN: el segundo consumidor valida el contrato). El
    histórico real se preserva backstage (respeta ceguera 07→01); la
    derivación de-identificada es la fixture pública del skill.
  - **Alcance:** tanto VIGILANCIA+ADDENDA como WEBS se someten a esta
    abstracción (protocolo→skill · datos→instancia).
  - **Simulación (sin remotos aún):** como todavía no hay repos remotos ni
    registry para bajar los skills sin datos, el swarm **simula** el ciclo:
    estructura la skills-library en local, referencia por ruta/`npm pack`, y
    deja todo listo para que al publicar de verdad funcione igual.
  Consecuencia: reestructura la Ola I2 (ver BACKLOG); tras la separación,
  el núcleo de SCRIPT_SDK que se publica es solo marco (DEVOPS, plan, docs,
  TEST-SWARM, HOLONES, WEBS-instancia-propia).

- **DE-I11 · Destino backstage del histórico de vigilancia = local +
  `.gitignore`** *(cierra el tick de destino I24; custodio 2026-07-19).* El
  histórico real (`VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*`, y lo que I24
  separe del núcleo) **permanece en la codebase LOCAL** y se excluye del
  remoto vía `.gitignore`. **No** se abre un remoto privado nuevo ni una
  rama privada dedicada. Consecuencia: WP-I24 (y la higiene de WP-I01 que
  alinea `.gitignore`) preservan el histórico en disco; el árbol
  publicable/remoto no lo contiene. Compatible con DE-I10 (dato fuera del
  núcleo publicable) sin inventar infra remota.

- **DE-I12 · Procedimiento de publish I26 = el mismo que zeus / Verdaccio
  canónico** *(custodio 2026-07-19).* Fuente verificada (lectura en disco,
  2026-07-19):
  - Canónico ops: `C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\.npmrc.example`
    + `C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\scripts\publish-package.sh`
    (username + `_password` base64 + email + `always-auth`; **NO** `_auth` /
    `_authToken`; secrets desde `.env.generated-secrets`;
    `npm publish --registry https://npm.scriptorium.escrivivir.co`).
  - Espejo en zeus (CI): `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\.github\workflows\release.yml`
    y `publish-operator-bridge.yml` (secrets `NPM_USERNAME`/`NPM_PASSWORD`,
    D-24 (a), WP-U122 ✅).
  - Repo zeus local (no submodule aún en S_SDK):
    `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\` (también
    `Z_SDK-games-library/` hermano).
  Consecuencia: WP-I26 reutiliza ese patrón (script o pasos equivalentes);
  no inventar JWT/`NPM_TOKEN`. Si falta auth de escritura en el entorno del
  worker → tick ops del custodio (no bloquea el resto del WP).

- **DE-I13 · Push del repo raíz tras validación orquestador + vigilante**
  *(cierra el tick «I40 solo custodio»; custodio 2026-07-19).* El push
  inicial / de main del **raíz S_SDK** (WP-I40) **ya no es exclusivo del
  custodio**. Condición: **validación del orquestador + del vigilante**
  (el vigilante se presentará; mediación transparente, Eje V). Sustituye
  la reserva residual de DA-5/DE-I7 sobre el push del raíz y anula el
  bloqueo falso «DA-I1» en I40 (DA-I1 ya cerró por DE-I10). El custodio
  puede seguir mediando ops (DNS, HTTPS, secrets), pero el GO de push no
  exige su tick manual exclusivo.

## Abiertas (bloquean lo indicado)

*(ninguna propia viva — DA-I1..I4 cerradas por DE-I8/I9/I10; ticks I24/
I26-proc/I40 cerrados por DE-I11/I12/I13. I40 ops cerradas formalmente
2026-07-19 — verificado por custodio/estación; acta C8 = WP-I41.)*

*(Heredada, de TEST-SWARM: DA-6 «la puerta única» sigue abierta allí;
bloquea WP-D31 de aquel mundo, no bloquea este plan.)*

## Notas no bloqueantes (GO 2026-07-19)

- ~~Pages `skills.s-sdk.escrivivir.co`~~ — **cerrado** (WP-I27 ✅).
- ✅ **GO I5** (custodio · 2026-07-19) — cola **WP-I52** 🔶 abierta.
  Entregable = §Nota ciega
  `plan/REPORTES/ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md` (canal
  ENTREGA/vigía; ceguera 07→01). Zeus aplica micro-WP propio; CA I52
  abierto hasta merge U141 + re-verificación vigía. **I52 ≠ I50** (I52 =
  F6 scrub; I50 = Sprint 3). **I152 no existe.** I27 ✅ / I41 ✅.
- ✅ **GO I50 aparte** (usuario/custodio · 2026-07-19) — autorizó
  redactar/entregar Sprint 3. §Nota → U142 ✅ triage. **Cierre I50 ✅
  2026-07-19** (señal custodio / zeus libera GO): lote D-34 cerrado;
  **U143 ✅** · **U144 ✅**; tip Z_SDK `503b6b8` · library `a25ca08`;
  swarm zeus IDLE. Ball → **I51 🔶** (re-verif vigía CAs U143+U144).
  Prep: `ENTREGA-VIGIA-2026-07-19c-sprint3-GO-prep.md`. Brief I51:
  `BRIEF-WP-I51-verificacion-sprint3.md`. **NO I6.**
- I41 ✅ (acta C8); I27 ✅ (v0.2); I52 ✅; estación/vigilante como insumo.
- ✅ **GO I6** (custodio · 2026-07-19) — ola de activación en holones ajenos.
  I60 ✅. **I61 ✅** (2026-07-20 · aleph @ `adf297e` sin push — tick
  custodio/orquestador aleph). **I62** 🔶 — zeus **D-35** adoptó
  `@alephscript/skills-scriptorium@0.3.0` (referencia versionada;
  `plan/roles/` copia operativa; sin migración) — cita histórica; en holón
  07 la dependencia pasa a rango `0.x` (efectiva 0.3.4) por **DE-I17**.
  Gate: pendiente cierre
  I62 por orquestador/vigía (ver D-35 en main zeus). Ola I6:
  **cierre parcial**. Acta I61: `WP-I61-activacion-aleph.md`.
- ✅ **I61 aceptado** (orquestador · 2026-07-20) — CA1–CA6 OK; skill
  `@0.3.0` (cita histórica; rango `0.x` vigente por **DE-I17**); S14
  intacto; push remoto aleph pendiente canal media.

- **DE-I14 · F9 = scrub tipo U140 en aleph-scriptorium — sin exención
  casa-madre** *(custodio 2026-07-20).* El árbol público de aleph
  (`escrivivir-co/aleph-scriptorium`, rama `integration/beta/scriptorium`)
  lleva vocabulario del marco en su `plan/DECISIONES.md` (F9, preexistente
  a I61). El custodio decide: **scrub de árbol tipo U140** — mismo estándar
  que zeus (F6): dieta del árbol servido; el residual de historial se asume
  (paridad con zeus, cuyos commits pre-U140 también lo conservan; el
  rewrite estilo emmanuel solo fue viable por ser repo de 2 commits).
  Ejecuta el mundo aleph (su orquestador, micro-WP propio); entrega
  enmascarada del vigía (reglas 12/13/14 de serie). Consecuencia: WP-I63
  en Ola I6; PARTES/ sigue gitignorado (local-only, sin scrub).

- **DE-I15 · Retiro de `TEST-SWARM/` del árbol; DA-4 revertida; `/ensayo/`
  fuera del sitio** *(custodio 2026-07-20).* El pack del ensayo
  (`TEST-SWARM/`) se retira del árbol de SCRIPT_SDK (borrado en `4eadc84`).
  Fundamento: el **método** del ensayo ya vive en el skill
  `swarm-orquestacion@0.3.0` (cita histórica; rango `0.x` vigente por
  **DE-I17**) (roles, RE-PLAN, ejes-ca, ciclo, reglas). La
  **narrativa teatral** (GUION, NOTAS, ACTA-ENSAYO/V2, fanzine) **no** está
  en el skill; se preserva en el **historial git** (parent de `4eadc84`),
  no en el árbol vivo. Revierte **DA-4 / DE-I4** (el pack ya no se sirve).
  Consecuencia: se retira `/ensayo/` del sitio — `scripts/sync-ensayo.mjs`
  borrado, wiring `docs:sync-ensayo` fuera de `docs:build`/`docs:dev`,
  referencias en `index.md`/`config.mjs`/`theme/index.js`/ficha 07
  retiradas; **`docs:build` verde re-verificado** sin `TEST-SWARM`. WP-I33
  queda como histórico (obra revertida). Se ejecuta en **WP-I42**.

- **DE-I16 · Relajación puntual de DE-I11: guardas muertas fuera del
  `.gitignore`** *(custodio 2026-07-20; commit `18c5fc3`).* Se retiran del
  `.gitignore` las guardas de `HANDOFF_*`, `/HIPOTESIS.md` y `CONECTOR_*`
  (backstage cuyos ficheros ya no existen ni volverán tras el asentamiento
  I6/TEST-SWARM). **Se conservan `VIGILANCIA/` y `ADDENDA/`** (directorios
  aún vivos en local). Decisión del custodio: intencional, no accidental.
  **Riesgo residual asumido:** si en el futuro reaparece un `HANDOFF_*` o
  `CONECTOR_*`, ya no queda ignorado por patrón — la ceguera 07→01 de esos
  ficheros pasa a depender de higiene explícita, no de la red del
  `.gitignore`. Compatible con DE-I11 en lo esencial (el histórico vivo
  `VIGILANCIA/` + `ADDENDA/` sigue fuera del remoto).

- **DE-I17 · Versionado del skill: rango `0.x`, pin solo de major —
  upgrade a 0.3.4 con el patrón zeus** *(GO usuario · 2026-07-20; espejo de
  zeus D-36).* Holón 07 consumía el skill solo como referencia documental
  (`@0.3.0`). **Decisión:** la dependencia
  `@alephscript/skills-scriptorium` se declara con rango **`0.x`**
  (cualquier `0.x.x`; la efectiva la fija `package-lock.json`). **Deroga**
  el «pin exacto 0.3.0». Se adopta el **mecanismo de zeus**: devDependency
  en `package.json` raíz + `scripts/sync-claude-skills.mjs` (npm script
  `skills:sync`) que materializa `node_modules/…/skills/*` → `.claude/skills/`
  **commiteado** (auditable; la fuente de verdad sigue siendo el paquete
  versionado). Adoptar una 0.x nueva = `npm update
  @alephscript/skills-scriptorium` + `npm run skills:sync`, **sin WP** (si
  un update rompe un CA, se abre WP). Se adopta además el **contrato 0.3.4**:
  **regla 15** (fuente de verdad única + efimeralidad — holón 07 cumple de
  facto, solo se cita), doctrina **semver DC-22** (regla de método = minor;
  patch = sin cambio de contrato), **CHANGELOG de gobierno** (uno por mundo,
  derivado del BACKLOG, con gate `verificar-changelog.mjs`), y el **scrum**
  `proyectar-backlog.mjs` (proyección BACKLOG→issues, **LOCAL-ONLY DC-15**
  por defecto — proyección real a GitHub solo con GO explícito del usuario).
  Consecuencia: **Ola I7** (WP-I70…I74). Compatible con DE-I3/DE-I10 (el
  método vive en el skill versionado; el mundo lo referencia, no lo copia).

- **DE-I18 · Rama `draft` = cuaderno del custodio; exenta de poda**
  *(custodio · GO H2.2 · 2026-07-22).* La rama local `draft` es el **cuaderno
  del custodio** (notas, borradores, material sin autoridad de plan). **No**
  se poda en higiene de quietud ni en lotes H1/H2: solo `main` + `draft` como
  refs locales estables del raíz (acta H2.1 CA5). Consecuencia: ops puede
  borrar `wp/*` merged; **jamás** `draft` sin GO explícito del custodio.

- **DE-I19 · Cola de GOs post–sprint-game-city (v2 · enmienda GO-V1 ·
  GO-C1 · **cola v3 ratificada tick PO R10.6+R11**)**
  *(custodio · GO H2.2 · 2026-07-22 · enmienda GO-V1 · 2026-07-22 ·
  gobierno V2 · **GO-C1 2026-07-22** · **tick PO 2026-07-22**).* Tras
  C04, los parked pasan a **cola de GOs**. Vista histórica (H2.2) en
  [`sprint-game-city/BACKLOG.md`](SPRINTS/sprint-game-city/BACKLOG.md)
  §«Cola de GOs post-cierre» (city **cerrado** — solo puntero). Vista
  operativa viva: [`sprint-vida-1/`](SPRINTS/sprint-vida-1/) (✅) ·
  [`sprint-embajador-entrada/`](SPRINTS/sprint-embajador-entrada/)
  (**CERRADO** R9.5) · [`sprint-ciudad-real/`](SPRINTS/sprint-ciudad-real/)
  (**activo** GO-C1).

  **Orden v2 (GO-V1 → GO-C1) — marco de sprints cerrados/activo:**

  1. **VIDA-1** ✅ — SEMILLA §3+§4 (M01+M02)
  2. **EMBAJADOR-ENTRADA** ✅ **CERRADO** (E02+f1+HOTFIX+f2∥A5 · #23
     CLOSED · #22 OPEN parked · Z_SDK #4/#5/#6 OPEN)
  3. **CIUDAD-REAL** — **activo** (GO-C1) · SEMILLA **§2** + motor Z05
     item **3** ACL direccional (**Z_SDK #5** citar; no cerrar) +
     SEMILLA-ARG **§A4** · sprint
     [`sprint-ciudad-real/`](SPRINTS/sprint-ciudad-real/)
  4. SEMILLA **§6** meta-juego *(reordenado bajo cola v3 — ver abajo)*
  5. trama-agua *(idem)*

  **Cola v3 (ratificada · tick PO R10.6+R11 · 2026-07-22):**
  **CR-1 → C04 → C05 → PRUEBA-DE-DOS** (hito observación + acta fricción;
  protagonistas custodio+vigía) → **§6** meta-juego → **trama-agua**.
  Detalle / asiento:
  [`sprint-ciudad-real/DECISIONES.md`](SPRINTS/sprint-ciudad-real/DECISIONES.md)
  **DC-CR-cola-v3**. Sustituye el orden interno post–ítem 3 hacia §6 /
  trama-agua. Orden v2 de sprints (1–3) intacto.

  **Mantener (invariantes):** veto **E_SDK / DE-I8** fuera de cola hasta
  GO custodio propio · **no reopen ✅** · práctica **claim→acta/SHA**
  (sin acta/SHA = no cerrado). Encolar ≠ abrir: parked siguen ⬜ hasta
  GO que emita 🔶 + BRIEF (M01/M02 = GO-V2 ✅; embajador = CERRADO R9.5;
  CIUDAD-REAL = GO-C1 activo · C05 **🔶 brief** emitido tick PO ·
  **sin despacho** hasta cierre CR-1 (C03 ✅) + gate **R12**).

  **Horizonte (sin WP ni GO — carril declarado):**
  **extensión-VSCode-zigurat** como interfaz mesh (wrapper zeus-sdk +
  script-sdk). Base mock «lore-te-ipsum» conecta con
  `startpack-ciudad-v0.1.0` ya liberado (H2.4). No encola WP; no emite
  🔶; no reabre city.

- **DE-I20 · Ids de tracking en frontera de mundos (DC-frontera-citas)**
  *(custodio · GO · 2026-07-22).* Ids de tracking (`WP-…`, `U…`, etc.) en
  `plan/` de mundos vecinos:
  - **TOLERADOS** cuando anclan a artefacto público **existente** de otro
    repo (**C9** — no inventar).
  - **PROHIBIDOS** en obra (`packages/` + `e2e/` + `kits/instances/`),
    **sin excepción**.
  - El canal **ENTREGA** no introduce ids nuevos en prosa.
  - **Caso fundante:** `WP-I60` citado por zeus **U145/U146** (tolerado en
    `plan/` zeus; ancla a reporte/brief público de holón 07/emmanuel).
  - El vigía registra esta clase como **excepción conocida** y **no la
    re-eleva**.
  Consecuencia operativa (método): el grep pre-merge del orquestador
  amplía el patrón a `WP-[A-Z]{1,2}\d` sobre obra — ver PRACTICAS δ12.
  Espejo sprint: `sprint-embajador-entrada/DECISIONES.md`
  DC-EE-frontera-citas.

- **DE-I21 · Kits de juego/contratos = FOSS; apps = private**
  *(gobierno · GO-C1b · 2026-07-22).* Política de publicación por clase
  en el workspace zeus (superficie SDK gamificación p2p):
  - **Kits de juego / contratos → public** (`"private": false`) — regla 6
    city «ningún jugador privilegiado».
  - **Apps / monitores / harnesses → private** por defecto.
  - **WIP `0.0.0` → sin cambio** (no publish hasta versionado).
  **SUPERSEDE** el asiento puntual
  DC-CR-embajador-private ([`bbb29ba`](https://github.com/alephscriptorium-eng/S_SDK/commit/bbb29ba751d953dff19963e30abdad5c3eb51265);
  conservar como antecedente) — corrección vigía **R10.5**.
  Espejo sprint: `sprint-ciudad-real/DECISIONES.md` **DC-CR-kits-foss**.
  Obra = WP-C04 (rama zeus); no interrumpe C01∥C02.
