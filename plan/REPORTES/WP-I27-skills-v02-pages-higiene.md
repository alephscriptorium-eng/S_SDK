# WP-I27 · skills-v02-pages-higiene — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i27 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i27-skills-v02-pages-higiene` @ `6180f9b` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `019a90b` |
| rama (SCRIPT_SDK) | `wp/i27-skills-v02-pages-higiene` |
| worktree raíz | `C:\Users\aleph\SCRIPT_SDK-wp-i27` |
| base SCRIPT_SDK | `main` @ `b04302a` |
| remote skill | origin `wp/i27-skills-v02-pages-higiene` (push DE-I7) |
| estado propuesto | listo para revisión |

## Qué se hizo

Bump `@alephscript/skills-scriptorium` a **0.2.0**: skill `swarm-orquestacion`
con las 12 reglas RETRO, práctica **V2** (1 commit gobierno ≠ mezcla
aceptación+brief) y checklist de cierre de ola (estrenado aquí: stash
vacío + borrado `wp/i30*`/`wp/i32*` + D-* mergeadas locales). Scrub F7 en
`publish.yml` («zeus» → «Verdaccio canónico»). Publish local DE-I12 al
registry (`npm view` → `0.2.0`). **V1:** scrub de path absoluto host en
`docs/.vitepress/theme/custom.css`. **Pages** library: política de
environment `github-pages` solo permitía `wp/i20-*`; se añadió `main` y
`workflow_dispatch` Docs → HTTP **200**.

No I41/I50/I52. No BACKLOG. No push raíz SCRIPT_SDK. No mutación
OASIS/HOLONES/zeus.

## Archivos tocados

### Repo `S_SDK-skills-library` (rama `wp/i27-skills-v02-pages-higiene`)

- `package.json` — `0.1.0` → `0.2.0`
- `CHANGELOG.md` — sección `0.2.0`
- `README.md` — referencias a tarball/semver `0.2.0`
- `docs/index.md` — mención paquete `0.2.0` (dispara paths Docs)
- `.github/workflows/publish.yml` — scrub F7 (sin nombres de mundos)
- `skills/swarm-orquestacion/SKILL.md` — reglas 7–8 + recurso v0.2
- `skills/swarm-orquestacion/reference/reglas-metodo-v02.md` — creado
- `skills/swarm-orquestacion/reference/ciclo.md` — V2 + cierre de ola
- `skills/swarm-orquestacion/reference/roles/ORQUESTADOR.md` — V2 + checklist

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i27`)

- `docs/.vitepress/theme/custom.css` — procedencia sin path `C:\Users\...`
- `plan/REPORTES/WP-I27-skills-v02-pages-higiene.md` — este reporte

### Ops (no en git)

- Environment Pages: deployment branch policy +`main` (antes solo
  `wp/i20-skills-library-scaffold`) → desbloquea deploy desde `main`
- Ramas locales S_SDK borradas: `wp/i30-activacion-en-casa`,
  `wp/i32-fichas-roadmaps`, y D-* mergeadas (`wp/d00`…`wp/d22`). Remotas
  `wp/i30*`/`wp/i32*` no existían en origin (push raíz restringido).
  Conservadas: `wp/i27-*`, `wp/i41-*` (lote vivo).

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · `npm view` canal real → `0.2.0`

```text
$ npm view @alephscript/skills-scriptorium@0.2.0 --registry https://npm.scriptorium.escrivivir.co

@alephscript/skills-scriptorium@0.2.0 | UNLICENSED | deps: none | versions: 2
…
dist-tags:
latest: 0.2.0

$ npm view @alephscript/skills-scriptorium version --registry https://npm.scriptorium.escrivivir.co
0.2.0
```

Publish local DE-I12: `+ @alephscript/skills-scriptorium@0.2.0` /
`PUBLISH_EXIT=0`. Auth: overlay temporal
`VERDACCIO_ADMIN_USER` + `_password` (pass en base64) desde
`ScriptoriumVps/.env.generated-secrets` (mismo canónico que
`publish-package.sh` / I26). Env `NPM_USERNAME`/`NPM_PASSWORD` ausentes
en el shell del worker; secrets de repo GitHub no usados en este publish
local (workflow `publish.yml` sigue cableado a esos nombres para CI tras
merge).

### CA-2 · Grep mundos reales en cara pública library

```text
$ bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh
ceguera: 0

$ rg -n -i 'zeus' skills/ .github/workflows/publish.yml
→ (0 matches)

$ rg -n 'C:\\Users' skills/ README.md CHANGELOG.md .github/
→ (0 matches)
```

Único hit residual del patrón `S_SDK`: URL del repo en `docs/index.md`
(`github.com/.../S_SDK-skills-library`) — nombre del remote / excepción
de naming del paquete (PRACTICAS delta 5); no es path de host ni mundo
ajeno en el skill.

### CA-3 · V1 custom.css sin path absoluto host

```text
$ head -6 docs/.vitepress/theme/custom.css
/* Procedencia: copia-release del tema VitePress (piel zine A-12 / WP-U103)
   del holón 01 — cita de origen, sin path absoluto de host (DE-8 / WP-I27).
   …
   Fecha: 2026-07-19 · WP-I10 · scrub WP-I27 */

$ rg -n 'C:\\Users|OASIS\\\\SCRIPTORIUM' docs/.vitepress/theme/custom.css
→ (0)
```

### CA-4 · Checklist cierre de ola en skill + estrenado

- Presente: `skills/swarm-orquestacion/reference/reglas-metodo-v02.md`
  (§Checklist) + referencias en `SKILL.md` / `ciclo.md` / `ORQUESTADOR.md`.
- Estreno (este WP / higiene V3):
  - `git stash list` (checkout main S_SDK) → vacío
  - ramas locales mergeadas borradas (lista arriba)
  - `wp/i27` + `wp/i41` conservadas (lote vivo I41∥I27)
  - remotas `wp/i30*`/`wp/i32*` → no existían

### CA-5 · Pages library HTTP 200

Causa raíz: environment `github-pages` tenía
`deployment_branch_policy` solo para `wp/i20-skills-library-scaffold`;
deploy desde `main` fallaba («Branch main is not allowed…»).

```text
$ gh workflow run docs.yml --ref main
# run 29701208770 → docs:build ✓ · deploy Pages ✓

$ curl -sI https://skills.s-sdk.escrivivir.co/ | head -5
HTTP/1.1 200 OK
Server: GitHub.com
Content-Type: text/html; charset=utf-8
…
```

`gh api .../pages` → `build_type=workflow`, `cname=skills.s-sdk.escrivivir.co`,
HTTPS enforced (cert ya approved). Tras merge de esta rama, un push que
toque `docs/**` (o otro `workflow_dispatch`) republicará el portal con
mención `0.2.0`.

### CA-6 · Ramas wp/i30*, wp/i32* (y obsoletas)

| rama | acción |
| ---- | ------ |
| `wp/i30-activacion-en-casa` | borrada local (`eb93fe8`); remote ausente |
| `wp/i32-fichas-roadmaps` | borrada local (`ca2d13d`); remote ausente |
| `wp/d00`…`wp/d22` (6) | borradas locales (mergeadas en main) |
| `wp/i27-*`, `wp/i41-*` | conservadas (lote vivo) |

### Commits

```text
skills-library: 6180f9b feat(skills): swarm-orquestacion v0.2.0 + scrub F7 + notes
SCRIPT_SDK:     (tip worktree — fix custom.css + este reporte)
```

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance (skills-library + custom.css + reporte): sí
- [x] Cero mutación OASIS/HOLONES/zeus (solo lectura secrets/publish): sí
- [x] Sellos con fuente; `npm view` y curl ejecutados: sí
- [x] Auth DE-I12 (username + `_password` base64; no `_authToken` en overlay): sí
- [x] Skills marco-agnósticos: ceguera 0 en skill; publish.yml sin zeus: sí
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Commits convencionales: `feat(skills)` / `fix(docs)` / `docs(plan)`
- [x] Sin I41/I50/I52; sin BACKLOG: sí
- [x] Checklist cierre estrenado (V3): sí

## Hallazgos fuera de alcance

1. Environment Pages aún lista la policy antigua `wp/i20-*` junto a
   `main` (no borrada: mutación opcional; deploy desde main ya OK).
2. Remotas `wp/*` en skills-library (`wp/i20`…`wp/i26`) siguen en origin —
   V3 del brief apunta a S_SDK; limpieza library queda al orquestador.
3. Secrets de GitHub Actions `NPM_USERNAME`/`NPM_PASSWORD` no verificados
   en este entorno (publish fue local). Tras merge, un
   `workflow_dispatch` «Publish package» puede validar CI (skip si
   `0.2.0` ya existe).

## Dudas / bloqueos

Ninguno para el CA. Pages 200 + `npm view` 0.2.0 OK.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
