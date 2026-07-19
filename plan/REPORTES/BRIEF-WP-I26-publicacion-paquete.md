# Brief — WP-I26 · Publicación del paquete

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I25)_
_Skills-library `main` @ `7bd0ab7` (pushed DE-I7). SCRIPT_SDK `main` @ `1afef33` (sin push raíz)._
_NO implementar I30+. Solo publish + Pages + CA del canal real._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I26 · Publicación del paquete
Checkout hermano (paquete): C:\Users\aleph\S_SDK-skills-library
  Rama trabajo skill: wp/i26-publicacion-paquete
  Base: main @ 7bd0ab7
  Paquete: @alephscript/skills-scriptorium (version actual 0.1.0)
Rama reporte (SCRIPT_SDK): wp/i26-publicacion-paquete
Worktree reporte (opcional): ../SCRIPT_SDK-wp-i26
Reporte: plan/REPORTES/WP-I26-publicacion-paquete.md
  (vive en SCRIPT_SDK; el publish corre en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I7 (push/publish skills-library), DE-I9 (Pages
  skills.s-sdk.escrivivir.co), DE-I12 (procedimiento = zeus/Verdaccio)
- plan/PRACTICAS.md deltas 1, 5 (ceguera), 6 (quién publica)
- plan/BACKLOG.md WP-I26 (CA literal)
- plan/VISION.md (canal propio + web parejo a games-library)
- Fuentes canónicas DE-I12 (SOLO lectura; no mutar OASIS):
  - C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\scripts\publish-package.sh
  - C:\Users\aleph\OASIS\aleph-scriptorium\ScriptoriumVps\.npmrc.example
  - Espejo CI (lectura): zeus-sdk .github/workflows/release.yml +
    publish-operator-bridge.yml (NPM_USERNAME / NPM_PASSWORD; D-24)

Notas del orquestador — procedimiento DE-I12 (obligatorio):
- Auth Verdaccio: patrón username + _password (solo pass en base64) +
  email + always-auth. Registry:
  https://npm.scriptorium.escrivivir.co
- NO usar _authToken ni JWT. Verdaccio (max_users:-1 / htpasswd) no
  emite tokens compatibles para npm publish.
- Preferible reutilizar/adaptar publish-package.sh (o pasos
  equivalentes documentados en el reporte). Secrets desde entorno /
  .env.generated-secrets del custodio — NO inventar credenciales.
- Si falta auth de escritura en el .npmrc del entorno → declarar en
  el reporte «esperando: tick ops (.npmrc) del custodio». Scaffold /
  semver / release notes / Pages NO están bloqueados por ese tick.

Entregables:
  1) S_SDK-skills-library: rama `wp/i26-publicacion-paquete` desde
     main @ 7bd0ab7. Confirmar package.json listo para publish
     (name, version semver, author/maintainers si el script lo exige,
     publishConfig, files). Ajustes mínimos OK; no reescribir skills.
  2) Auth local según .npmrc.example (username + _password base64 +
     email + always-auth) → `npm publish --registry
     https://npm.scriptorium.escrivivir.co` (o script canónico).
  3) CA canal real: `npm view @alephscript/skills-scriptorium
     --registry https://npm.scriptorium.escrivivir.co` resuelve la
     versión publicada (C8 / lección startpacks-404). Pegar evidencia
     literal en el reporte.
  4) Semver inicial coherente + release notes (CHANGELOG o sección
     en README/GitHub Release — documentar cuál).
  5) Pages DE-I9: confirmar/disparar deploy a
     `skills.s-sdk.escrivivir.co` (workflow docs.yml en main tras
     merge, o evidencia de build+CNAME listo si el merge aún no
     aplica). Scaffold/Pages no bloqueados por auth de publish.
  6) SCRIPT_SDK: solo reporte
     `plan/REPORTES/WP-I26-publicacion-paquete.md` en rama/worktree WP
     (sin push raíz). Push skill OK solo en skills-library (DE-I7),
     solo rama WP hasta merge orquestador.
- CA (evidencia literal en reporte):
  1) `npm view` del paquete contra el canal real → versión esperada.
  2) Semver inicial declarado y publicado.
  3) Release notes presentes.
  4) Si publish falló por auth escritura: estado
     «esperando: tick ops (.npmrc) del custodio» + resto del WP hecho.
- NO I30+. NO editar BACKLOG (el orquestador ya marcó 🔶).
  NO push raíz SCRIPT_SDK. NO mutar HOLONES/, OASIS, zeus.
  NO inventar NPM_TOKEN / _authToken.
- Commits:
  - skills-library: chore/feat(i26): publish / semver / notes …
  - SCRIPT_SDK: docs(plan): reporte WP-I26 …

Empieza: crea rama/worktree (skill + reporte), lee PRACTICAS entero
y DE-I12, prepara auth según patrón zeus/Verdaccio, publica (o
declara espera ops), evidencia CA, reporta. NO implementes I30.
```
