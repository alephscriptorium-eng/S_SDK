# CHANGELOG de gobierno — holón 07 (SCRIPT_SDK)

CHANGELOG de **gobierno** (derivado del BACKLOG); **no** es changelog de
paquete. Uno por mundo, WP-id-keyed: cada entrada **se deriva** de un WP
marcado ✅ en [`plan/BACKLOG.md`](plan/BACKLOG.md) — se copia el hito cerrado,
**no se inventa texto** (disciplina C9). Los CHANGELOG de paquete
(changesets/semver, máquina-generados) son otro eje y no viven aquí.

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).
Granularidad **gruesa por ola** (I0…I8). Estados del BACKLOG:
⬜ pendiente · 🔶 asignado · ✅ aceptado (solo el orquestador marca).
Gate: `npm run changelog:check` (`verificar-changelog.mjs --role gobierno`).

## [Unreleased]

Abiertos en el BACKLOG, aún **no** ✅ (no derivan entrada cerrada todavía):

- WP-I63 ⬜ · Scrub de vocabulario del marco en aleph (DE-I14) — gate externo.

## [I8] - 2026-07-21 — Página pública de confianza (tubería)

- **WP-I75** — Página «La tubería, protegida»: `docs/guide/tuberia-protegida.md`
  + nav/sidebar + enlace ficha holón 01; claims hoy con evidencia; abiertos
  enlazan Z_SDK#4/#5/#6 (proyección antes del build). Aceptado ✅ 2026-07-21.

## [I7] - 2026-07-20 — Upgrade de skills a 0.3.4 (patrón zeus + contrato nuevo)

Base de decisión: DE-I17. Orden: I70 → { I71 ∥ I73 ∥ I74 }; I72 independiente.

- **WP-I70** — Dependencia + rango `0.x`: `package.json` raíz con devDependency
  `@alephscript/skills-scriptorium: 0.x`; `npm install` resuelve **0.3.4** y el
  lockfile fija la efectiva. Aceptado ✅ 2026-07-20 · merge `main` @ `2f25e51`.
- **WP-I71** — Materialización a `.claude/skills/`: `scripts/sync-claude-skills.mjs`
  + npm script `skills:sync` materializa las 3 skills (espejo commiteado,
  procedencia @0.3.4). Hallazgos de integración: negación `.gitignore` para
  `.claude/skills/vigilancia/` + `.gitattributes eol=lf` (idempotencia).
  Aceptado ✅ 2026-07-20 · merge `main` @ `33a3abb` (+ higiene `fd32e2b`).
- **WP-I72** — Adoptar contrato: cita la **regla 15** (fuente de verdad única +
  efimeralidad) y la doctrina **semver DC-22** en `plan/PRACTICAS.md`; holón 07
  cumple de facto. Aceptado ✅ 2026-07-20 · merge `main` @ `aa7a4e4`.
- **WP-I73** — CHANGELOG de gobierno + gate: este `CHANGELOG.md` (derivado del
  BACKLOG, WP-id-keyed) + npm script `changelog:check` (gate
  `verificar-changelog.mjs --role gobierno`). Aceptado ✅ 2026-07-20 · merge
  `main` @ `ce3969f`.
- **WP-I74** — Scrum: proyección BACKLOG→issues (dry-run, LOCAL-ONLY DC-15):
  `proyectar-backlog.mjs` cableado (`scrum:preview`), `plan/.sync-map.json`;
  proyección real a GitHub **no activada** (requiere GO del custodio). Aceptado
  ✅ 2026-07-20 · merge `main` @ `5ecbeef`.

## [I6] - 2026-07-20 — Activación en los demás holones (matar las réplicas)

Ola cerrada (I60 ✅ · I61 ✅ · I62 ✅). Cierre Eje IV cumplido por I60.

- **WP-I60** — emmanuel-sdk (03): su `plan/roles/` se sustituye por activación
  del skill + calibración local; repo `E_SDK` público. Reserva F8 (crítica)
  remediada (rewrite `90e5354`). Aceptado ✅ 2026-07-19.
- **WP-I61** — aleph-scriptorium (05–06): ídem sobre su `plan/roles/`,
  conservando PARTES/ y RECURSOS/; ejecutor fresco @ 0.3.0; S14 🔶 intacto.
  Aceptado ✅ 2026-07-20 · rama `wp/i61-activacion-skill` @ `adf297e`.
- **WP-I62** — zeus (01): D-35 @ `474d06c` adopta
  `@alephscript/skills-scriptorium@0.3.0` como referencia canónica; ceguera = 0.
  Aceptado ✅ 2026-07-20 (Eje V).

## [I5] - 2026-07-19 — Estabilización zeus (vía canal ENTREGA/vigía)

Ola cerrada (I52 ✅ → I50 ✅ → I51 ✅). Ceguera 07→01: jamás tocar zeus directo.

- **WP-I52** — ENTREGA scrub de rutas (urgente, antes que I50): nota ciega
  «higiene de portabilidad» sobre las rutas `SCRIPT_SDK\…` filtradas en el plan
  público de zeus. Re-verif vigía FINAL PASS (U141 @ `d1eef8f`). Aceptado ✅ 2026-07-19.
- **WP-I50** — ENTREGA Sprint 3 a zeus: nota con los frágiles restantes de sus
  repos + oferta del paquete público de skills. U143 CNAME / U144 npm ci
  aplicados (tips `503b6b8` / `a25ca08`). Aceptado ✅ 2026-07-19.
- **WP-I51** — Verificación vigía del sprint con el skill `vigilancia`: acta
  `plan/REPORTES/WP-I51-verificacion-sprint3.md`; ceguera 0 hits. Aceptado ✅ 2026-07-19.

## [I4] - 2026-07-20 — Publicación

- **WP-I40** — Push inicial + Pages + dominio: push raíz tras validación
  orquestador + vigilante (DE-I13); Pages Source=Actions; custom domain
  `s-sdk.escrivivir.co` + DNS + Enforce HTTPS. Aceptado ✅ 2026-07-19.
- **WP-I41** — Verificación C8 del sitio vivo + acta: navegación real (browser)
  de todo enlace de `s-sdk.escrivivir.co`; 0 enlaces rotos. Aceptado ✅ 2026-07-19.
- **WP-I42** — Refresh del sitio: ficha 07 al día + retiro de `/ensayo/`
  (DE-I15); `docs:build` verde sin `TEST-SWARM`; vigilante PASS (5 gates); push
  `origin/main` `7a72e2f..45a328d`. Aceptado ✅ 2026-07-20.

## [I3] - 2026-07-19 — Contenido: los holones (primera activación real)

Ola cerrada (I30–I33).

- **WP-I30** — Activación en casa: `plan/` consumidor del skill
  `swarm-orquestacion`; instancia `WEBS/` vía `site-web`. Aceptado ✅ 2026-07-19
  · merge `main` @ `3ec7883`.
- **WP-I31** — Portada + ficha 01 Mythos: referencias reales verificadas
  (browser + npm canal real). Aceptado ✅ 2026-07-19 · merge `main` @ `072ac6d`.
- **WP-I32** — Fichas 02–07 + roadmaps placeholder: formato de roadmap uniforme
  (olas ⬜/🔶/✅). Aceptado ✅ 2026-07-19 · merge `main` @ `0cee86b`.
- **WP-I33** — El pack TEST-SWARM servido: DA-4 honrada, espejo
  `TEST-SWARM/docs/` → `/ensayo/`. Aceptado ✅ 2026-07-19 · merge `main` @ `12ecdbc`.

## [I2.5] - 2026-07-19 — Estabilización del método (intervención)

Residual de I2 / rediseño del método hacia skill.

- **WP-I27** — Skill package bump v0.2.0 + Pages library + higiene:
  `npm view` 0.2.0; Pages library HTTP 200. Aceptado ✅ 2026-07-19 ·
  skills-library `main` @ `6180f9b`.
- **WP-I28** — Housekeeping post-I4: cierra hallazgos V4+V5+V6 del vigía;
  favicon en `docs/public/` + dist; `docs:build` verde. Aceptado ✅ 2026-07-19.
- **WP-I29** — Skill package bump v0.3 (reglas 13/14, ceguera de activación):
  `@alephscript/skills-scriptorium@0.3.0` publicado; ceguera árbol + historial =
  0. Aceptado ✅ 2026-07-19 · skills-library `main` @ `5de379b`.

## [I2] - 2026-07-19 — La abstracción: protocolo fuera de los datos (DE-I10)

Ola cerrada (I20–I26). Cada cuerpo pasa por abstraer → mejorar → separar.
Corrige el error fundamental DS-5.

- **WP-I20** — Scaffold del repo skills-library: `S_SDK-skills-library` con
  layout estándar + `instancias/` + docs/CNAME (DE-I9). Aceptado ✅ 2026-07-19
  · `C:\Users\aleph\S_SDK-skills-library` @ `88217dd`.
- **WP-I21** — Skill `swarm-orquestacion` (abstraer+mejorar): protocolo canónico
  con los 5 ejes cosidos como CA. Aceptado ✅ 2026-07-19 · skills-library `main`
  @ `b321109`.
- **WP-I22** — Skill `site-web` (abstraer+mejorar+separar): método WEBS +
  protocolo ghpages; datos de copy fuera del skill. Aceptado ✅ 2026-07-19 ·
  skills-library `main` @ `eafe8fc`.
- **WP-I23** — Skill `vigilancia` (abstraer+mejorar+separar): doctrina ESTACION
  v1 + `watcher.sh` parametrizado; cero histórico de zeus dentro. Aceptado ✅
  2026-07-19 · skills-library `main` @ `cb03e49`.
- **WP-I24** — Separación de datos + corrección del error fundamental (DS-5):
  datos de vigilancia de zeus salen del núcleo (backstage local, DE-I11);
  fixture de-identificada `instancias/ejemplo-M/`. Aceptado ✅ 2026-07-19 ·
  SCRIPT_SDK `main` @ `0c6e342`.
- **WP-I25** — Primer caso de verificación (Eje IV): skill `vigilancia` +
  `ejemplo-M` producen pulso/veredicto sin tocar SCRIPT_SDK. Aceptado ✅
  2026-07-19 · skills-library `main` @ `7bd0ab7`.
- **WP-I26** — Publicación del paquete: publish al registry propio (DE-I7/DE-I12)
  procedimiento zeus/Verdaccio; `npm view` 0.1.0 canal real. Aceptado ✅
  2026-07-19 · skills-library `main` @ `019a90b`.

## [I1] - 2026-07-19 — La máquina de la web (export del procedimiento zeus)

Ola cerrada (I10 + I11 + I12).

- **WP-I10** — VitePress base + piel zine: `docs/` con config exportada (base
  parametrizado + guard, frágil #2); `theme/custom.css` copia-release (DE-8).
  Aceptado ✅ 2026-07-19 · merge `main` @ `550095d`.
- **WP-I11** — docs.yml + CNAME: workflow variante library (`npm ci`,
  concurrency, deploy solo `main`); `docs/public/CNAME` = `s-sdk.escrivivir.co`
  (frágil #1); gap de paths #7 documentado. Aceptado ✅ 2026-07-19 · merge
  `main` @ `d61d9a1`.
- **WP-I12** — publicar-la-web propia: `docs/guide/publicar-la-web.md` al estilo
  zeus (la web se documenta a sí misma) + checklist ops. Aceptado ✅ 2026-07-19
  · merge `main` @ `439ae77`.

## [I0] - 2026-07-19 — Cimiento

Ola cerrada (I00–I03).

- **WP-I00** — plan/ del holón 07: plan autocontenido (README, VISION, BACKLOG,
  DECISIONES, PRACTICAS, REPORTES/); `roles/` no se copia. Aceptado ✅ 2026-07-19.
- **WP-I01** — Higiene y línea público/backstage: `HIPOTESIS.md` a
  `VIGILANCIA/TRASH/`; `HANDOFF_*` archivados (DE-I10/DE-I11); `.gitignore`
  alineado. Aceptado ✅ 2026-07-19 · rama `wp/i01-higiene-backstage` @ `4d19cda`.
- **WP-I02** — Workspace raíz: `package.json` (scripts `docs:*`, node 22),
  `.npmrc` (@zeus/@alephscript → registry propio), `.gitignore`. Aceptado ✅
  2026-07-19 · rama `wp/i02-workspace-raiz` @ `35755af`.
- **WP-I03** — Submodules holón 01: `HOLONES/01-mythos/{zeus-sdk,games-library}`
  como submodules; emmanuel/aleph placeholder (DE-I8); ceguera grep = 0.
  Aceptado ✅ 2026-07-19 · rama `wp/i03-submodules-mythos` @ `1746b87`.
