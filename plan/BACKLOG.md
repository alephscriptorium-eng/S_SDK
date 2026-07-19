# BACKLOG — inicialización del holón 07

Estados: ⬜ pendiente · 🔶 asignado · ✅ aceptado (solo orquestador marca).
Fuentes de evidencia citadas por ruta absoluta cuando salen de este repo.

**Plantillas y fuentes a reutilizar (no reinventar):**

| Pieza | Fuente |
|---|---|
| `docs.yml` limpio (build→upload-pages-artifact→deploy-pages) | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\Z_SDK-games-library\.github\workflows\docs.yml` |
| `config.mjs` + `resolveDocsBase()` | `Z_SDK-games-library\docs\.vitepress\config.mjs:9-18` |
| Piel zine (tokens existentes) | `zeus-sdk\docs\.vitepress\theme\custom.css` (entra como copia-release con cabecera de procedencia, DE-8) |
| Ciclo de publicación documentado | `zeus-sdk\docs\guide\publicar-la-web.md` |
| Método WEBS completo | `C:\Users\aleph\OASIS\SCRIPTORIUM_V0\WEBS\` |
| Protocolo swarm canónico | `TEST-SWARM\plan\roles\` + `VIGILANCIA\RE-PLAN-protocolo-swarm.md` |
| Doctrina del vigía | `VIGILANCIA\ESTACION.md` + `VIGILANCIA\watcher.sh` |
| Datos de holones | `DEVOPS\METODOLOGIA\HOLONES.md` + `holones/01..07-*.md`; `emmanuel-sdk\plan\`; `aleph-scriptorium\plan\` |

Los «frágiles #1–#7» citados abajo son los del pipeline zeus, detectados en
la exploración del 2026-07-19: #1 CNAME no commiteado · #2 `base:'/'` sin
guard para project-pages · #3 DNS hardcodeado · #4 `npm ci` vs `npm install`
incoherente · #5 `dist/` commiteado en la library · #6 acoplamiento
spec-gen en `docs:build` de zeus · #7 gap del filtro `paths: docs/**`.

---

## Ola I0 — Cimiento

- ✅ **WP-I00 · plan/ del holón 07** — este mismo plan/ (README, VISION,
  BACKLOG, DECISIONES, PRACTICAS, REPORTES/) asentado y coherente; roles/
  NO se copia (interinidad declarada en README).
  **CA:** plan autocontenido; cada DE-In cita fuente; DA-In asignadas al
  custodio; cero copia del protocolo (grep dedup).
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado — docs presentes;
  DE-I0..I13 con fuente; DA-I1..I4 cerradas; `plan/roles/` ausente (interino
  en TEST-SWARM); briefs del lote en `plan/REPORTES/BRIEF-WP-*.md`.

- ✅ **WP-I01 · Higiene y línea público/backstage** — `HIPOTESIS.md`
  (scratch de chats, 50 KB) fuera del árbol o a `VIGILANCIA/TRASH/`;
  `HANDOFF_*` archivados según DE-I10/DE-I11 (histórico local + gitignore,
  **no borrar**); `.gitignore` alineado a DE-I11 (VIGILANCIA/, ADDENDA/,
  HANDOFF_*, y lo que I24 separe — destino backstage = local, no remoto
  privado nuevo).
  **CA:** `git status` limpio respecto a lo publicable; histórico sigue en
  disco; grep de marco sensible en el árbol publicable = 0 o exención
  firmada por el custodio.
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado en worktree
  `SCRIPT_SDK-wp-i01` @ `4d19cda` — `.gitignore` DE-I11; HIPOTESIS en
  `VIGILANCIA/TRASH/` (49999 B); `git ls-files` backstage = 0; HANDOFF/
  ADDENDA en disco main; sin push/BACKLOG/I02/I03. Grep semántico «datos
  zeus» diferido a CA de WP-I24 (brief: no ejecutar I24). Rama
  `wp/i01-higiene-backstage`.

- ✅ **WP-I02 · Workspace raíz** — `package.json` (scripts `docs:dev` /
  `docs:build` planos, node 22), `.npmrc` (@zeus y @alephscript →
  `npm.scriptorium.escrivivir.co`), `.gitignore` (incluye
  `docs/.vitepress/dist/`, frágil #5).
  **CA:** `npm install` verde; `npm view @zeus/protocol` resuelve contra el
  registry (C8: canal real).
  **Aceptado ✅ 2026-07-19** · agente: `worker-i02` · rama
  `wp/i02-workspace-raiz` · HEAD `35755af` · brief
  `plan/REPORTES/BRIEF-WP-I02-workspace-raiz.md` · reporte
  `plan/REPORTES/WP-I02-workspace-raiz.md`.
  _Merge pendiente: unir `.gitignore` con I01 (backstage + node/dist)._

- ✅ **WP-I03 · Submodules holón 01** — `HOLONES/01-mythos/zeus-sdk` →
  `github.com/alephscriptorium-eng/Z_SDK` y
  `HOLONES/01-mythos/games-library` → `Z_SDK-games-library`.
  emmanuel/aleph: **asentados sin inflar** (DE-I8 — placeholder de ruta,
  sin `git submodule add`).
  **CA:** `git submodule update --init` funciona en clon fresco; cero
  commits dentro de los submodules; ceguera verificada
  (`git -C HOLONES/01-mythos/zeus-sdk grep -i "script_sdk|holón|holarquía"`
  = 0).
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado en worktree
  `SCRIPT_SDK-wp-i03` @ `1746b87` — `.gitmodules` solo mythos 01;
  gitlinks `160000` (zeus `0afe1e1`, games `b463a1a`); placeholders
  03/05/06 sin submodule; dirty submodule = 0; ceguera grep = 0;
  `submodule update --init` OK; sin push/BACKLOG/I01/I02. Rama
  `wp/i03-submodules-mythos`.

## Ola I1 — La máquina de la web (export del procedimiento zeus)

- ✅ **WP-I10 · VitePress base + piel zine** — `docs/` con config exportada
  (base parametrizado `SSDK_DOCS_BASE` con guard, frágil #2),
  `theme/custom.css` copia-release con cabecera de procedencia (DE-8);
  `docs/autoridades/` existente integrado en nav.
  **CA:** `docs:build` verde local; sin CDNs ni fuentes web (grep = 0).
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado en worktree
  `SCRIPT_SDK-wp-i10` @ `5822a63` — `resolveDocsBase` + guard MSYS;
  `custom.css` DE-8 con cabecera OASIS/zeus; nav `docs/autoridades/`;
  `docs:build` EXIT=0 re-ejecutado; grep CDN/fuentes = 0; sin
  docs.yml/CNAME/BACKLOG/push/HOLONES. Fuente config vía OASIS
  (tabla BACKLOG) aceptable: submodule games-library sin docs checked
  out. Rama `wp/i10-vitepress-piel-zine`. Merge local → `main` @
  `550095d` (sin push; sin conflicto con I12 `docs/guide/`).

- ✅ **WP-I11 · docs.yml + CNAME** — export de la variante library:
  triggers push main+`wp/**` con `paths: docs/**`, PR, `workflow_dispatch`,
  concurrency; `npm ci` (frágil #4); `docs/public/CNAME` =
  `s-sdk.escrivivir.co` (frágil #1); sin spec-gen (frágil #6); gap de paths
  documentado (frágil #7).
  **CA:** workflow parsea; build CI verde en rama `wp/`.
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado en worktree
  `SCRIPT_SDK-wp-i11` @ `c34ec84` — `docs.yml` variante library (`npm ci`,
  concurrency, deploy solo `main`); `docs/public/CNAME` =
  `s-sdk.escrivivir.co`; YAML Ruby OK; `npm ci` + `docs:build` EXIT=0
  re-ejecutado; gap paths #7 en workflow+guía+reporte; guía I12 ancla
  mínima sin `<pendiente I11>`; Actions remoto ⏳ sin push (aceptable
  DE-I13 / brief). Rama `wp/i11-docs-yml-cname`. Merge local → `main` @
  `d61d9a1` (incluye revisión dirty `0a940ca`; sin push; worktree
  `SCRIPT_SDK-wp-i11` eliminado). Cierra ola I1 (I10+I11+I12 ✅).

- ✅ **WP-I12 · publicar-la-web propia** — `docs/guide/publicar-la-web.md`
  al estilo zeus (la web se documenta a sí misma): ciclo editar/preview/
  build/publicar + checklist ops parejo a z-sdk (Settings→Pages→Source=
  Actions, Custom domain, DNS CNAME → `alephscriptorium-eng.github.io`,
  Enforce HTTPS).
  **CA:** cada comando citado corre tal cual (C8); calza con el workflow
  real, sin pasos inventados.
  **Aceptado ✅ 2026-07-19** (orquestador): CA verificado en worktree
  `SCRIPT_SDK-wp-i12` @ `439ae77` — guía + checklist; comandos =
  `package.json` (`docs:dev`/`docs:build`); C8 ejecuta scripts (EXIT≠0
  por vitepress ausente, honestizado `<pendiente I10>`); workflow/CNAME
  como `<pendiente I11>` sin inventar ficheros; sin docs.yml/theme/
  BACKLOG/push. Rama `wp/i12-publicar-la-web`. Merge local → `main` @
  `439ae77` (fast-forward; sin push). Paralelo seguro con I10.

## Ola I2 — La abstracción: protocolo fuera de los datos (DE-I10)

> El eje de esta ola. Cada cuerpo (roles del swarm · VIGILANCIA+ADDENDA ·
> WEBS) pasa por tres movimientos: **(a) abstraer** el método a skill
> marco-agnóstico · **(b) mejorar** al extraer (coser las lecciones) ·
> **(c) separar** los datos del mundo, que salen del núcleo de SCRIPT_SDK.
> Corrige el error fundamental (DS-5): la vigilancia de zeus es DATO y no
> pertenece a este repo. Sin remotos aún → se **simula** el ciclo en local.

- ✅ **WP-I20 · Scaffold del repo skills-library** — repo local
  `S_SDK-skills-library` (checkout hermano; remote lo **crea el swarm** vía
  `gh repo create` — DE-I7): package.json (`@alephscript/skills-scriptorium`
  o scope que fije el custodio), layout estándar de skills (un dir por skill:
  `SKILL.md` con frontmatter + recursos), README de activación por mundo,
  carpeta `instancias/` (donde caen los datos separados, de-identificados),
  y su propio `docs/` + `docs.yml` (export de I11, dominio
  `skills.s-sdk.escrivivir.co` — DE-I9). Parejo pleno a la games-library.
  **CA:** formato estándar validado; `npm pack` + install en dir temporal
  (simulación de bajada); docs de la library compilan.
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado en
  `C:\Users\aleph\S_SDK-skills-library` @ `88217dd` — layout
  `_plantilla` + package + instancias + docs/CNAME DE-I9; `npm pack` +
  install temp EXIT=0; `docs:build` EXIT=0; remote gh PUBLIC (DE-I7);
  ceguera plantilla delta 5 = 0. Reporte rama
  `wp/i20-skills-library-scaffold` @ `d831e6d` (+ commit revisión);
  sin push raíz. Merge reporte → main + default-branch skills-library
  → main = ops/padre. Cierra arranque ola I2; siguiente I21∥I22∥I23.

- ⬜ **WP-I21 · Skill `swarm-orquestacion`** *(abstraer+mejorar)* —
  protocolo canónico (`TEST-SWARM/plan/roles/`: ORQUESTADOR, WORKER,
  REVISION, CORRECCION, BRIEF + PLANTILLA) con los 5 ejes del RE-PLAN
  cosidos como CA obligatorios. Marco-agnóstico (PRACTICAS delta 5). Cero
  datos de mundo.
  **CA:** un agente fresco monta el plan/ de un mundo nuevo solo con el
  skill; prueba de ceguera en cara pública = 0.

- ⬜ **WP-I22 · Skill `site-web`** *(abstraer+mejorar+separar)* — método
  WEBS (plantillas BASE-1/2/3, backtracking, C8/C9, entrega §E) + protocolo
  ghpages (plantilla docs.yml, config VitePress parametrizada, piel zine,
  checklist dominio/DNS/HTTPS, los 7 frágiles con mitigación). **Separar:**
  el método sale limpio; los datos de copy concretos (CANTERA/ENTREGA de la
  web zeus, hoy en `OASIS/.../WEBS/`) NO entran al skill — son instancia.
  **CA:** con el skill + un mundo limpio se genera un sitio publicable sin
  consultar zeus; plantillas sin rutas absolutas ni datos de mundo (grep=0).

- ⬜ **WP-I23 · Skill `vigilancia`** *(abstraer+mejorar+separar)* — doctrina
  ESTACION v1 (rol read-only, mtime no commits, clases de huérfano, locks,
  C8/C8-ampliado, CA-por-clase, pulso CI) + formato addenda dos-caras con
  prueba de ceguera + `watcher.sh` parametrizado por «el mundo». **Cero
  histórico de zeus dentro** (eso es I24).
  **CA:** skill agnóstico del mundo vigilado; watcher corre contra un repo
  arbitrario; grep de nombres de mundo real en el skill = 0.

- ⬜ **WP-I24 · Separación de datos + corrección del error fundamental
  (DS-5)** — el corazón de DE-I10. (1) Los datos de la sesión de vigilancia
  de zeus (`VIGILANCIA/{bitacora,revisiones,anomalias.log,watch.log}`;
  `ADDENDA/` addendas y ENTREGAs; `HANDOFF_*`) **salen del núcleo** de
  SCRIPT_SDK. (2) Se preservan **backstage en local** (DE-I11): histórico
  real en la codebase LOCAL + entradas en `.gitignore` — **no** remoto
  privado nuevo ni rama privada dedicada; respeta ceguera 07→01. (3) Se
  produce una **derivación de-identificada** (mundo real → parámetro «M»)
  como **fixture pública** en `S_SDK-skills-library/instancias/ejemplo-M/`,
  primer corpus que ejercita el skill `vigilancia`. Lo que queda en
  SCRIPT_SDK tras esto es solo marco.
  **CA:** grep de datos de zeus en el núcleo publicable de SCRIPT_SDK = 0;
  histórico preservado en disco y localizable (gitignoreado, no borrado);
  fixture de-identificada existe y su grep de nombres reales = 0;
  `RE-PLAN-protocolo-swarm.md` (doctrina, no dato) reubicado como fuente
  del skill, no como residuo suelto.

- ⬜ **WP-I25 · Primer caso de verificación (Eje IV)** — cargar la fixture
  `ejemplo-M` a través del skill `vigilancia` y **simular** que un segundo
  holón la consume: skill + instancia producen un pulso/veredicto sin tocar
  SCRIPT_SDK ni nombrar zeus. Prueba de que el contrato es real, no solo que
  compila.
  **CA:** un agente con solo el skill + `instancias/ejemplo-M` reproduce un
  ciclo de vigilancia completo; cero referencias al marco; acta en REPORTES/.

- ⬜ **WP-I26 · Publicación del paquete** — el swarm publica al registry
  propio (DE-I7) con el **mismo procedimiento que zeus/Verdaccio**
  (DE-I12): auth basic `username` + `_password` (base64) + `email` +
  `always-auth` → `npm publish --registry https://npm.scriptorium.escrivivir.co`.
  Fuentes: `ScriptoriumVps/scripts/publish-package.sh` +
  `.npmrc.example`; espejo CI zeus `release.yml` /
  `publish-operator-bridge.yml`. Pages en `skills.s-sdk.escrivivir.co`
  (DE-I9). Si el publish pide auth de escritura y el `.npmrc` no la trae →
  tick de ops del custodio (no bloquea el resto).
  **CA:** `npm view` del paquete resuelve contra el canal real (C8, lección
  startpacks-404); semver inicial; release notes.

## Ola I3 — Contenido: los holones (primera activación real)

- ⬜ **WP-I30 · Activación en casa** — este plan/ pasa de interinidad a
  referencia del skill (I21); la capa de contenido se genera con el skill
  `site-web`: instancia en `WEBS/` (CANTERA + ENTREGA-CAPA-1 para esta web).
  **CA:** Eje IV — el propio repo es primer consumidor verificado; grep
  dedup del protocolo = 1 definición (el skill).

- ⬜ **WP-I31 · Portada + ficha 01 Mythos** — referencias reales
  verificadas: `z-sdk.escrivivir.co`, `games.z-sdk.escrivivir.co`, registry
  `@zeus` (~19 paquetes), GitHub Releases de startpacks, repos Z_SDK.
  **CA:** cada URL navegada (browser, no solo curl); cada comando npm
  citado probado contra el canal real; sello por afirmación.

- ⬜ **WP-I32 · Fichas 02–07 + roadmaps placeholder** — 02 Logos (juntura
  01↔03 pendiente de destilar); 03 emmanuel (E0–E3 todo ⬜, «papel
  primero»); 04 AOS/NETWORK-ENGINE; 05–06 aleph-scriptorium (S0–S4, S14 🔶,
  link al Jekyll vivo); 07 el método + pack TEST-SWARM. Formato de roadmap
  uniforme (olas ⬜/🔶/✅) para ir rellenando.
  **CA:** cero promesas sin sello (`<pendiente>` declarado, no vendido); un
  lector distingue el estrato de cada afirmación.

- ⬜ **WP-I33 · El pack TEST-SWARM servido** — DA-4 de TEST-SWARM honrada:
  `TEST-SWARM/docs/index.html` enlazado o servido como ruta estática.
  **CA:** accesible desde portada; moira funcional en Pages.

## Ola I4 — Publicación

- ⬜ **WP-I40 · Push inicial + Pages + dominio** — tras **validación
  orquestador + vigilante** (DE-I13; el vigilante se presentará; mediación
  transparente), se empuja el raíz; Pages Source=Actions; Custom domain
  `s-sdk.escrivivir.co` + alta DNS (tick de ops si hace falta) + Enforce
  HTTPS. Ya no bloqueado por DA-I1 (cerrada DE-I10) ni «solo custodio».
  **CA:** sitio vivo en el dominio; CI verde; assets sin 404 (base
  verificado navegando).

- ⬜ **WP-I41 · Verificación C8 del sitio vivo + acta** — navegación real de
  todo enlace, comandos de ejemplo ejecutados, links cruzados a portales
  zeus. Acta en REPORTES/.
  **CA:** 0 enlaces rotos; 0 comandos que fallen; evidencia literal.

## Ola I5 — Estabilización zeus (vía canal ENTREGA/vigía — jamás directa)

- ⬜ **WP-I50 · ENTREGA Sprint 3 a zeus** — nota en idioma de zeus con:
  frágiles restantes de SUS repos (#1 CNAME, #2 guard de base, #5 dist/
  gitignoreado en library, #4 coherencia npm ci, economía CI de A-13, #7
  gap de paths) + **oferta del paquete público de skills** como recurso del
  registry (blind-safe: un paquete público más). GO del custodio antes de
  entregar; en quietud; cruzada con las colas vivas del orquestador.
  **CA:** prueba de ceguera grep = 0; no duplica colas de zeus.

- ⬜ **WP-I51 · Verificación vigía del sprint** — con el skill `vigilancia`.
  **CA:** veredictos persistidos en el archivo de vigilancia.

## Ola I6 — Activación en los demás holones (matar las réplicas)

- ⬜ **WP-I60 · emmanuel-sdk (03)** — sin swarm activo (fase papel): su
  `plan/roles/` se sustituye por activación del skill + calibración local
  mínima. Canal directo (custodio media).
  **CA:** grep dedup — protocolo definido UNA vez; su plan sigue
  autocontenido vía referencia versionada.

- ⬜ **WP-I61 · aleph-scriptorium (05–06)** — ídem sobre su `plan/roles/`;
  conserva PARTES/ y RECURSOS/ como calibración local.
  **CA:** ídem dedup; sus WPs vivos (S14 🔶) no se interrumpen.

- ⬜ **WP-I62 · zeus (01)** — su `plan/roles/` es el ancestro canónico y su
  swarm está vivo: NO se toca; queda ofrecido en I50 y decide su
  orquestador (mediación transparente, Eje V).
  **CA:** decisión registrada (adopta / conserva con nota de procedencia);
  ceguera intacta en ambos casos.

- **Cierre de ola:** el segundo mundo operando con el skill valida el
  contrato (Eje IV); retro al skill (backtracking) con lo aprendido.

---

## Orden y paralelismo

I0 → I1 ∥ I2 → I3 → I4 · I5 tras I2 (la nota ofrece el paquete ya
publicado) · I6 tras I3 (el skill ya probado en casa).
Paralelizables dentro de ola: I01∥I02∥I03 · I10∥I12 · I21∥I22∥I23.
Dentro de I2 el orden es: I20 → (I21∥I22∥I23) → I24 (separación) → I25
(verificación) → I26 (publish). I24 depende de I23 (necesita el skill donde
apoyar la fixture) y es donde se corrige el error fundamental DS-5.

## Verificación end-to-end del conjunto

1. Clon fresco de S_SDK + `git submodule update --init HOLONES/01-mythos/*`.
2. `npm install && npm run docs:build` sin red más allá del registry propio.
3. `npm view` del paquete de skills + install en dir temporal (canal real).
4. Agente fresco monta un plan/ de prueba solo con el skill (autocontención).
5. Push a `wp/**` → build sin deploy; merge a main → deploy; navegar
   `https://s-sdk.escrivivir.co` entera (browser).
6. Grep dedup del protocolo: 1 definición canónica; los mundos referencian.
7. Ceguera: grep del marco en el árbol de zeus = 0.
8. Sprint 3 verificado por el vigía contra canal real.
