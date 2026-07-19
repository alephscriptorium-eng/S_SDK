# WP-I26 · publicacion-paquete — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i26 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i26-publicacion-paquete` @ `3734d01` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `7bd0ab7` |
| rama (reporte SCRIPT_SDK) | `wp/i26-publicacion-paquete` |
| worktree reporte | `C:\Users\aleph\SCRIPT_SDK-wp-i26` |
| base SCRIPT_SDK | `main` @ `fa9d78e` |
| remote skill | origin `wp/i26-publicacion-paquete` (push DE-I7) |
| estado propuesto | listo para revisión |

## Qué se hizo

Publicación de `@alephscript/skills-scriptorium@0.1.0` al registry
Verdaccio canónico (`https://npm.scriptorium.escrivivir.co`) con el
procedimiento DE-I12 (username + `_password` base64 + email +
`always-auth`; **sin** `_authToken`). Auth local vía
`ScriptoriumVps/.env.generated-secrets` (pasos equivalentes a
`publish-package.sh`, sin exigir `dist/` — el paquete es skills fuente).

Workflow CI `.github/workflows/publish.yml` cableado a secrets
**`NPM_USERNAME`** / **`NPM_PASSWORD`** (nombres exactos del custodio;
corrección tras el tipográfico `npm_user`/`npm_password`). El workflow
aún **no** está en `main` — GitHub no lo registra hasta merge; publish
real se hizo por la vía local canónica DE-I12. Semver `0.1.0` +
`CHANGELOG.md`. Pages: CNAME + `docs.yml` + dominio API OK; HTTP raíz
aún 404 (deploy de contenido pendiente de merge/dispatch — ver
hallazgos).

No I30+. No BACKLOG. No push raíz SCRIPT_SDK. No mutación OASIS/HOLONES.

## Archivos tocados

### Repo `S_SDK-skills-library` (rama `wp/i26-publicacion-paquete`)

- `package.json` — modificado; `author`/`maintainers`, `CHANGELOG` en
  `files`, `publishConfig.registry`
- `CHANGELOG.md` — creado; release notes `0.1.0`
- `README.md` — modificado; sección registry activa + enlace notes
- `.github/workflows/publish.yml` — creado; auth
  `secrets.NPM_USERNAME` / `secrets.NPM_PASSWORD` (DE-I12 / espejo zeus)

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i26`)

- `plan/REPORTES/WP-I26-publicacion-paquete.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · `npm view` canal real → `0.1.0`

```text
$ npm view @alephscript/skills-scriptorium --registry https://npm.scriptorium.escrivivir.co

@alephscript/skills-scriptorium@0.1.0 | UNLICENSED | deps: none | versions: 1
Skills library — método marco-agnóstico en formato skill estándar (SKILL.md + recursos)
https://skills.s-sdk.escrivivir.co

dist
.tarball: https://npm.scriptorium.escrivivir.co/@alephscript/skills-scriptorium/-/skills-scriptorium-0.1.0.tgz
.shasum: 58c3fa8c179253d8213f88e041ddab8fd1663dad
.integrity: sha512-2Arq0SHJ4auGortD8clfrDv6wvyddPvnSpKBrio8h0ZZAMvw2sABMH0tBzAvLML265PejR45fIX2vKCYF49J9Q==

dist-tags:
latest: 0.1.0

published just now
```

```text
$ npm view @alephscript/skills-scriptorium version --registry https://npm.scriptorium.escrivivir.co
0.1.0
```

Publish local (DE-I12): `+ @alephscript/skills-scriptorium@0.1.0` /
`PUBLISH_EXIT=0`.

### CA-2 · Semver inicial declarado y publicado

- `package.json` → `"version": "0.1.0"`
- Registry → `latest: 0.1.0` (arriba)

### CA-3 · Release notes

- Fichero: `CHANGELOG.md` (sección `## 0.1.0 — 2026-07-19`)
- Incluido en el tarball (`files` + evidencia `npm notice 668B CHANGELOG.md`)

### CA-4 · Pages DE-I9

```text
$ cat docs/public/CNAME
skills.s-sdk.escrivivir.co

$ gh api .../pages →
build_type=workflow
cname=skills.s-sdk.escrivivir.co
html_url=https://skills.s-sdk.escrivivir.co/
https_certificate_state=approved
https_enforced=true

$ curl -sI https://skills.s-sdk.escrivivir.co/
HTTP/1.1 404 Not Found
Server: GitHub.com
```

Scaffold/CNAME/cert OK. Contenido vivo aún 404 (ver hallazgos).

### Workflow Actions (post-corrección custodio)

```text
secrets cableados: ${{ secrets.NPM_USERNAME }} / ${{ secrets.NPM_PASSWORD }}
$ gh workflow list → solo «Docs» activo en main
$ publish.yml existe en ref wp/i26-publicacion-paquete (sha contenido OK)
$ gh workflow run "Publish package" → could not find any workflows named Publish package
```

Activación del workflow en Actions tab: tras merge a `main` (orquestador).

### Pack local + ceguera

```text
$ npm pack → alephscript-skills-scriptorium-0.1.0.tgz (59 files, 33.0 kB)
$ rg -n -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura' skills/
→ (0 matches — OK)
```

### Commits skills-library

```text
aef9389 chore(i26): publish workflow, semver 0.1.0 y release notes
3734d01 fix(i26): secrets NPM_USERNAME/NPM_PASSWORD (nombres exactos)
```

Push: `origin/wp/i26-publicacion-paquete` @ `3734d01`.

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: skills-library + reporte
      SCRIPT_SDK): sí
- [x] Cero mutación OASIS/HOLONES/zeus (solo lectura canónica DE-I12): sí
- [x] Sellos con fuente; `npm view` canal real ejecutado: sí
- [x] Auth DE-I12 (no `_authToken`); secretos no impresos ni commiteados: sí
- [x] Secrets workflow = `NPM_USERNAME` / `NPM_PASSWORD` (exactos): sí
- [x] Skills marco-agnósticos (delta 5): ceguera 0 en `skills/`
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Commits convencionales: `chore(i26)` / `fix(i26)` / `docs(plan)`
- [x] Sin I30+; sin BACKLOG: sí

## Hallazgos fuera de alcance

1. **Pages HTTP 404** en `https://skills.s-sdk.escrivivir.co/` pese a
   CNAME + cert approved. Probable: último deploy de contenido incompleto
   o Pages source residual; `workflow_dispatch` de Docs tras merge a main
   debería re-desplegar. No bloquea CA de publish/`npm view`.
2. **`publish.yml` solo en rama WP** — GitHub Actions no lista
   `workflow_dispatch` hasta que el YAML viva en `main`. Tras merge I26,
   un run manual «Publish package» queda listo para republicaciones (skip
   si la versión ya existe).
3. HOME `~/.npmrc` del entorno tenía `_authToken` (anti-patrón DE-I12);
   el publish usó overlay temporal username/`_password` y restauró.

## Dudas / bloqueos

Ninguno para el CA de publish. Estado: **publish OK** (no «esperando tick
ops»).

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-19 · orquestador holón 07 (modo REVISIÓN)

### Qué se verificó (canal real)

1. **CA-1** — `npm view @alephscript/skills-scriptorium
   --registry=https://npm.scriptorium.escrivivir.co` → `0.1.0`
   (re-ejecutado en revisión; tarball + `latest: 0.1.0`).
2. **CA-2** — Semver inicial `0.1.0` en `package.json` @ `3734d01` y
   publicado en registry.
3. **CA-3** — Release notes: `CHANGELOG.md` sección `## 0.1.0 — 2026-07-19`
   (incluido en tarball vía `files`).
4. **Secrets / DE-I12** — `publish.yml` cablea
   `${{ secrets.NPM_USERNAME }}` / `${{ secrets.NPM_PASSWORD }}` (nombres
   exactos; sin `_authToken`). Valores no inspeccionados. Publish local
   ya cumplió auth Verdaccio (username + `_password` base64).
5. **Pages 404** — `curl -sI https://skills.s-sdk.escrivivir.co/` →
   HTTP 404. CNAME + cert approved OK. **Nota, no bloqueo** (CA de I26 =
   publish/`npm view`/semver/notes; brief: scaffold Pages no bloqueado).
6. **PRACTICAS** — alcance skills-library + reporte; ceguera 0 en
   `skills/`; castellano; sin I30+; sin push raíz.

### Orden de merge (recomendado — no ejecutado aquí)

1. **skills-library:** merge `wp/i26-publicacion-paquete` (`3734d01`) →
   `main`; push origin (DE-I7). Tras merge: `workflow_dispatch` Docs si
   hace falta contenido vivo en Pages; «Publish package» queda disponible
   en Actions.
2. **SCRIPT_SDK:** merge `wp/i26-publicacion-paquete` (tip con esta
   revisión) → `main`; **sin push raíz**.
3. Limpiar worktree `SCRIPT_SDK-wp-i26` si aplica.
4. **Cierre ola I2.** Siguiente ola = I3 (I30+). GO custodio de arranque
   cubría I0+I1+I2 — **no** emitir brief I30 ni marcar I30 🔶 en esta
   revisión.
