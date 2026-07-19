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

> **Ola I2 cerrada 2026-07-19** (I20–I26). IDLE → GO custodio para I3.

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

- ✅ **WP-I21 · Skill `swarm-orquestacion`** *(abstraer+mejorar)* —
  protocolo canónico (`TEST-SWARM/plan/roles/`: ORQUESTADOR, WORKER,
  REVISION, CORRECCION, BRIEF + PLANTILLA) con los 5 ejes del RE-PLAN
  cosidos como CA obligatorios. Marco-agnóstico (PRACTICAS delta 5). Cero
  datos de mundo.
  **CA:** un agente fresco monta el plan/ de un mundo nuevo solo con el
  skill; prueba de ceguera en cara pública = 0.
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado en
  `C:\Users\aleph\S_SDK-skills-library-wp-i21` @ `c5d44e3` —
  `montar-plan.sh` monta `plan/` completo; ceguera delta 5 = 0; `npm pack`
  EXIT=0 (23 files, skill incluido); ejes I–V en `reference/ejes-ca.md`
  como CA por tipo. **Merged** skill → skills-library `main` @ `b321109`
  (lote → `cb03e49` pushed); reporte → SCRIPT_SDK `main` @ `100b8a9`
  (sin push raíz).

- ✅ **WP-I22 · Skill `site-web`** *(abstraer+mejorar+separar)* — método
  WEBS (plantillas BASE-1/2/3, backtracking, C8/C9, entrega §E) + protocolo
  ghpages (plantilla docs.yml, config VitePress parametrizada, piel zine,
  checklist dominio/DNS/HTTPS, los 7 frágiles con mitigación). **Separar:**
  el método sale limpio; los datos de copy concretos (CANTERA/ENTREGA de la
  web zeus, hoy en `OASIS/.../WEBS/`) NO entran al skill — son instancia.
  **CA:** con el skill + un mundo limpio se genera un sitio publicable sin
  consultar zeus; plantillas sin rutas absolutas ni datos de mundo (grep=0).
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado en
  `C:\Users\aleph\S_SDK-skills-library` @ `31b8105` —
  `generar-sitio.sh` → temp + `docs:build` EXIT=0 DIST_OK
  (`atlas.ejemplo.co`); ceguera delta 5 = 0; cero rutas OASIS/absolutas;
  fixture `examples/mundo-limpio/` inventada (sin CANTERA zeus).
  **Merged** skill → skills-library `main` @ `eafe8fc` (lote → `cb03e49`
  pushed); reporte → SCRIPT_SDK `main` @ `4421f5c` (sin push raíz).

- ✅ **WP-I23 · Skill `vigilancia`** *(abstraer+mejorar+separar)* — doctrina
  ESTACION v1 (rol read-only, mtime no commits, clases de huérfano, locks,
  C8/C8-ampliado, CA-por-clase, pulso CI) + formato addenda dos-caras con
  prueba de ceguera + `watcher.sh` parametrizado por «el mundo». **Cero
  histórico de zeus dentro** (eso es I24).
  **CA:** skill agnóstico del mundo vigilado; watcher corre contra un repo
  arbitrario; grep de nombres de mundo real en el skill = 0.
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado en
  `C:\Users\aleph\S_SDK-skills-library` @ `bf90627` — `skills/vigilancia/`
  con WORLD_ROOT/OUT_DIR/INTERVAL; watcher contra skills-library + repo
  temp (huérfano); ceguera delta 5 = 0; cero histórico zeus; no I24.
  **Merged** skill → skills-library `main` @ `cb03e49` (pushed DE-I7);
  reporte → SCRIPT_SDK `main` @ `4cd2d1a` (sin push raíz). Siguiente: I24.

- ✅ **WP-I24 · Separación de datos + corrección del error fundamental
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
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado — SCRIPT_SDK
  `wp/i24-separacion-datos` @ `30c5759` (índice sin VIGILANCIA/ADDENDA/
  HANDOFF_*/CONECTOR_*; histórico disco OK); skills-library
  `wp/i24-separacion-datos` @ `fcac110` (`instancias/ejemplo-M/` ceguera=0;
  RE-PLAN en `skills/swarm-orquestacion/reference/`).
  **Merged 2026-07-19:** skills-library `main` @ `fcac110` (pushed DE-I7);
  SCRIPT_SDK `main` @ `0c6e342` (merge reporte, sin push raíz). Worktree
  `SCRIPT_SDK-wp-i24` retirado. Siguiente: I25.

- ✅ **WP-I25 · Primer caso de verificación (Eje IV)** — cargar la fixture
  `ejemplo-M` a través del skill `vigilancia` y **simular** que un segundo
  holón la consume: skill + instancia producen un pulso/veredicto sin tocar
  SCRIPT_SDK ni nombrar zeus. Prueba de que el contrato es real, no solo que
  compila.
  **CA:** un agente con solo el skill + `instancias/ejemplo-M` reproduce un
  ciclo de vigilancia completo; cero referencias al marco; acta en REPORTES/.
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificado — skills-library
  `wp/i25-primer-caso-verificacion` @ `dfdb563` (`ensayos/i25-ciclo-M/`
  pulso+addenda+veredicto; ceguera=0; `ejemplo-M` intacta); SCRIPT_SDK
  `wp/i25-primer-caso-verificacion` @ `1e6f518`/`041229d` (acta REPORTES).
  **Merged 2026-07-19:** skills-library `main` @ `7bd0ab7` (pushed DE-I7;
  tip WP `dfdb563`); SCRIPT_SDK `main` @ `1afef33` (merge reporte, sin push
  raíz). Worktree `SCRIPT_SDK-wp-i25` retirado. Siguiente: I26.

- ✅ **WP-I26 · Publicación del paquete** — el swarm publica al registry
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
  **Aceptado ✅ 2026-07-19** (orquestador): canal real re-verificado —
  `npm view @alephscript/skills-scriptorium
  --registry=https://npm.scriptorium.escrivivir.co` → `0.1.0`;
  skills-library `wp/i26-publicacion-paquete` @ `3734d01` (CHANGELOG,
  `publish.yml` con `NPM_USERNAME`/`NPM_PASSWORD`, DE-I12 sin `_authToken`);
  reporte SCRIPT_SDK @ `9baeba1` (+ revisión `9ef1755`). Pages HTTP 404 =
  nota (scaffold/CNAME/cert OK; contenido tras merge Docs) — no bloquea CA.
  **Merged 2026-07-19:** skills-library `main` @ `019a90b` (pushed DE-I7;
  tip WP `3734d01`); SCRIPT_SDK `main` @ `5f13952` (merge reporte, sin push raíz).
  Worktree `SCRIPT_SDK-wp-i26` retirado.
  **Ola I2 cerrada 2026-07-19.** GO custodio 2026-07-19 → ola I3
  arrancada (ver sección I3; push raíz DE-I13 cumplido).

## Ola I2.5 — Estabilización del método (intervención 2026-07-19)

> Nace de la intervención del custodio+vigía tras cerrar I2: el método se
> está migrando a skill y la experiencia I0–I2 lo rediseña. Evidencia:
> `plan/RETRO-2026-07-19-metodo.md` +
> `plan/REPORTES/INTERVENCION-2026-07-19-estabilizacion.md`.

- ✅ **WP-I27 · Skill package bump v0.2.0 + Pages library + higiene** —
  ola I2 residual / estabilización library. Brief:
  `plan/REPORTES/BRIEF-WP-I27-skills-v02-pages-higiene.md`.
  **Aceptado ✅ 2026-07-19** (orquestador): CA re-verificados —
  `npm view` `0.2.0`; Pages library HTTP 200; custom.css sin path host;
  ceguera 0; V2+checklist en skill; `wp/i30*`/`wp/i32*` borradas.
  skills-library `main` @ `6180f9b`; SCRIPT_SDK merge + reporte
  `plan/REPORTES/WP-I27-skills-v02-pages-higiene.md`. Worktree retirado.

## Ola I3 — Contenido: los holones (primera activación real)

> **Ola I3 cerrada 2026-07-19** (I30–I33). I40 cerrado formalmente
> (ops verificado custodio/estación). Lote I41∥I27 **cerrado**
> 2026-07-19 (ambos ✅).

- ✅ **WP-I30 · Activación en casa** — plan/ consumidor del skill
  `swarm-orquestacion@0.1.0`; instancia `WEBS/` (CANTERA + ENTREGA-CAPA-1)
  vía `site-web`. **CA cumplidos:** Eje IV (scripts skill ejecutados);
  dedup protocolo = 1 (skill); ceguera WEBS = 0.
  **Aceptado ✅ 2026-07-19** — merge `main` @ `3ec7883` (obra rama
  `wp/i30-activacion-en-casa` @ `eb93fe8`) · reporte
  `plan/REPORTES/WP-I30-activacion-en-casa.md`. Worktree retirado.

- ✅ **WP-I31 · Portada + ficha 01 Mythos** — referencias reales
  verificadas: `z-sdk.escrivivir.co`, `games.z-sdk.escrivivir.co`, registry
  `@zeus` (21 paquetes sellados), GitHub Releases / repos Z_SDK.
  **CA cumplidos:** URLs navegadas (browser); npm canal real; sello por
  afirmación; `docs:build` verde; ceguera; nav Holones 01–07 unificado;
  fichas 02–07 intactas.
  **Aceptado ✅ 2026-07-19** — merge `main` @ `072ac6d` (obra rama
  `wp/i31-portada-ficha-mythos` @ `41b68d3` + revisión) · reporte
  `plan/REPORTES/WP-I31-portada-ficha-mythos.md`. Worktree retirado.

- ✅ **WP-I32 · Fichas 02–07 + roadmaps placeholder** — 02 Logos (juntura
  01↔03 pendiente de destilar); 03 emmanuel (E0–E3 todo ⬜, «papel
  primero»); 04 AOS/NETWORK-ENGINE; 05–06 aleph-scriptorium (S0–S4, S14 🔶,
  link al Jekyll vivo); 07 el método + pack TEST-SWARM. Formato de roadmap
  uniforme (olas ⬜/🔶/✅) para ir rellenando.
  **CA cumplidos:** cero promesas sin sello; estratos distinguibles;
  roadmap uniforme 02–07; `docs:build` verde; ceguera docs/holones.
  **Aceptado ✅ 2026-07-19** — merge `main` @ `0cee86b` (obra rama
  `wp/i32-fichas-roadmaps` @ `2e015ff` + revisión `ca2d13d`) · reporte
  `plan/REPORTES/WP-I32-fichas-roadmaps.md`. Nav Holones 02–07 en
  `config.mjs`; unificar 01 al merge de I31.

- ✅ **WP-I33 · El pack TEST-SWARM servido** — DA-4 honrada: espejo
  `TEST-SWARM/docs/` → `/ensayo/` (`docs:sync-ensayo` + `public/ensayo/`).
  **CA cumplidos:** enlace real desde portada; moira OK en preview local
  (Pages dominio `<pendiente I40>`); `docs:build` verde; ceguera; pack
  intacto; CANTERA VIVA-OK.
  **Aceptado ✅ 2026-07-19** — merge `main` @ `12ecdbc` (obra rama
  `wp/i33-test-swarm-servido` @ `2b5d38c` + revisión `1f43926`) · reporte
  `plan/REPORTES/WP-I33-test-swarm-servido.md`. Worktree retirado.
  **Ola I3 cerrada.**

## Ola I4 — Publicación

- ✅ **WP-I40 · Push inicial + Pages + dominio** — tras **validación
  orquestador + vigilante** (DE-I13), push raíz; Pages Source=Actions;
  Custom domain `s-sdk.escrivivir.co` + DNS + Enforce HTTPS.
  **CA:** sitio vivo en el dominio; CI verde; assets sin 404 (base).
  **Aceptado ✅ 2026-07-19** (orquestador · cierre formal): ops
  Pages+DNS+HTTPS **verificado por custodio · 2026-07-19** (estación /
  vigilante). Fuente en repo: `plan/REPORTES/VIGIA-ESTADO.md` (sección
  «Sitio en producción»). Push `main` a origin ya estaba hecho (DE-I13).
  **Acta C8 completa de navegación = WP-I41** (este cierre no inventa
  URLs ni sustituye el acta; I41 la aporta).

- ✅ **WP-I41 · Verificación C8 del sitio vivo + acta** — navegación real
  (browser) de todo enlace del sitio vivo `s-sdk.escrivivir.co`, comandos
  de ejemplo, links cruzados. Acta en REPORTES/. Brief:
  `plan/REPORTES/BRIEF-WP-I41-verificacion-sitio-vivo.md`.
  **Insumo:** estación/vigilante del custodio
  (`plan/REPORTES/VIGIA-ESTADO.md`; addendas/estación si existen — no
  inventar). **CA:** 0 enlaces rotos; 0 comandos que fallen; evidencia
  literal en acta.
  **Aceptado ✅ 2026-07-19** — merge `main` (obra rama
  `wp/i41-verificacion-sitio-vivo` @ `0440ace` + sello revisión).
  CA1–CA4 verificados; `/favicon.ico` raíz 404 = **nota menor** (no
  enlace). Reporte `plan/REPORTES/WP-I41-verificacion-sitio-vivo.md`.
  Worktree retirado. No bloquea por I27.

## Ola I5 — Estabilización zeus (vía canal ENTREGA/vigía — jamás directa)

- ⬜ **WP-I52 · ENTREGA scrub de rutas (URGENTE — antes que I50)** — F6 de
  la intervención: el plan público de Z_SDK cita rutas `SCRIPT_SDK\...` en
  8 ficheros (puntero de vuelta prohibido; sembrado por el canal
  temp-review). Nota ciega YA preparada:
  `plan/REPORTES/ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md` — encuadre
  «higiene de portabilidad», prueba de ceguera hecha. Entrega el custodio
  en quietud de zeus; su orquestador aplica como micro-WP.
  **Nota GO 2026-07-19:** leak F6 en remoto zeus ⏳; I52 **lista para
  entrega (I5)** — **no implementar** I50/I52 hasta «GO I5» del custodio.
  **CA:** grep de rutas absolutas locales en main de zeus = 0 (por clase);
  re-verificado por el vigía tras su merge; regla «entregas sin rutas»
  cosida al skill (WP-I27, regla 12).

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
Dentro de I3: I30 → (I31∥I32) → I33. Tras I40 ✅: lote **I41 ∥ I27**
ambos ✅ (2026-07-19). I5 (I52→I50) con GO I5 del custodio.

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
