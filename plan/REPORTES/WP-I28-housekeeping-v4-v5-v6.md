# WP-I28 · housekeeping-v4-v5-v6 — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i28 (holón 07) |
| fecha | 2026-07-19 |
| rama (SCRIPT_SDK) | `wp/i28-housekeeping-v4-v5-v6` (tip = este reporte) |
| commits | `ec3141a` (fix docs: favicon + scrub I40 + nav) |
| worktree raíz | `C:\Users\aleph\SCRIPT_SDK-wp-i28` |
| base SCRIPT_SDK | `main` @ `263c9cb` |
| rama (skills-library) | `wp/i28-housekeeping-v4-v5-v6` (sin commit de obra) |
| worktree hermano | `C:\Users\aleph\S_SDK-skills-library-wp-i28` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `6180f9b` |
| estado propuesto | listo para revisión |

## Qué se hizo

Housekeeping residual post-I27 / post-I41 (V4+V5+V6 del vigía).

- **V4:** borradas las 8 ramas `wp/i20`…`wp/i27` en
  `S_SDK-skills-library` (local **y** `origin`). Sin commit de código;
  solo deletes (regla 10 / checklist v0.2 al hermano, regla 4).
- **V5:** favicon raíz en `docs/public/favicon.ico` (copia del icono del
  pack `TEST-SWARM/docs/favicon.ico`) + scrub de copy stale
  `<pendiente I40>` en `docs/index.md` y `docs/holones/07-script-sdk.md`
  (I40 ya ✅; dominio `s-sdk.escrivivir.co`).
- **V6:** enlace `/guide/publicar-la-web` en nav y sidebar de
  `docs/.vitepress/config.mjs`.

No I50/I51/I52. No BACKLOG. No bump skill. No push raíz. No mutación
HOLONES/OASIS/zeus.

## Archivos tocados

### Repo `S_SDK-skills-library` (solo higiene git)

Ramas borradas (local + `git push origin --delete`):

| rama | tip local al borrar |
| ---- | ------------------- |
| `wp/i20-skills-library-scaffold` | `88217dd` |
| `wp/i21-skill-swarm-orquestacion` | `c5d44e3` |
| `wp/i22-skill-site-web` | `31b8105` |
| `wp/i23-skill-vigilancia` | `bf90627` |
| `wp/i24-separacion-datos` | `fcac110` |
| `wp/i25-primer-caso-verificacion` | `dfdb563` |
| `wp/i26-publicacion-paquete` | `3734d01` |
| `wp/i27-skills-v02-pages-higiene` | `6180f9b` |

Sin archivos de obra. Rama WP creada en worktree; sin push (sin commit).

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i28`)

- `docs/public/favicon.ico` — creado (raíz del sitio VitePress)
- `docs/index.md` — scrub `<pendiente I40>` → sitio vivo I40 ✅
- `docs/holones/07-script-sdk.md` — scrub ×2 (prosa + tabla pack)
- `docs/.vitepress/config.mjs` — nav + sidebar → `/guide/publicar-la-web`
- `plan/REPORTES/WP-I28-housekeeping-v4-v5-v6.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA1 · ramas `wp/i20`–`i27` ausentes (library local + remoto)

```text
$ git -C S_SDK-skills-library fetch --prune origin
$ git -C S_SDK-skills-library branch -a | grep -E 'wp/i2[0-7]'
(vacío OK)

$ git -C S_SDK-skills-library-wp-i28 branch -a | grep -E 'wp/i2[0-7]'
(vacío worktree — OK)
```

Deletes remotos (muestra):

```text
To https://github.com/alephscriptorium-eng/S_SDK-skills-library.git
 - [deleted]         wp/i20-skills-library-scaffold
 … (i21–i27 idem)
 - [deleted]         wp/i27-skills-v02-pages-higiene
```

### CA2 · favicon en dist tras `docs:build`

Verificado en **dist local** (sitio vivo aún 404 hasta merge+deploy):

```text
$ ls -la docs/.vitepress/dist/favicon.ico
-rw-r--r-- 1 aleph 197121 9395 jul. 19 22:26 docs/.vitepress/dist/favicon.ico

$ file docs/.vitepress/dist/favicon.ico
MS Windows icon resource - 3 icons, …

$ curl -sI https://s-sdk.escrivivir.co/favicon.ico | head -1
HTTP/1.1 404 Not Found
```

Fuente del asset: `TEST-SWARM/docs/favicon.ico` → `docs/public/favicon.ico`
(mismo binario que `/ensayo/favicon.ico` tras sync).

### CA3 · grep `<pendiente I40>` = 0 en docs/

```text
$ grep -rn '<pendiente I40>' docs --exclude-dir=.vitepress
(0 in docs sources OK)
```

### CA4 · nav contiene `/guide/publicar-la-web`

```text
$ grep -n 'publicar-la-web' docs/.vitepress/config.mjs
53:      { text: 'Publicar la web', link: '/guide/publicar-la-web' }
60:          { text: 'Publicar la web', link: '/guide/publicar-la-web' }
```

(L53 nav; L60 sidebar bajo SCRIPT_SDK.)

### CA5 · `npm run docs:build` EXIT=0

```text
vitepress v1.6.4
✓ building client + server bundles...
✓ rendering pages...
build complete in 26.37s.
DOCS_BUILD_EXIT=0
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Alcance = solo WP-I28 (V4+V5+V6); sin BACKLOG / I50–I52 / bump skill
- [x] Submodules HOLONES no tocados
- [x] Push solo deletes en skills-library (DE-I7); sin push raíz (DE-I13)
- [x] Sellos con fuente (I40 ✅ / I41 acta; dominio DE-I2); sin inventar ops
- [x] Favicon = asset del pack propio (no CDN / no mundo ajeno)
- [x] Gates ejecutados de verdad (`docs:build`, grep, branch -a)
- [x] Commits convencionales
- [x] Diff solo del alcance

## Hallazgos fuera de alcance

1. Tabla roadmap en `docs/holones/07-script-sdk.md` aún marca ola I4 como
   ⬜ / I40 en roadmap — no es el string `<pendiente I40>`; scrub limitado
   al CA. Micro docs opcional post-merge.
2. Favicon vivo 404 hasta que orquestador mergee + Pages redeploy.

## Dudas / bloqueos

Ninguno bloqueante. CA1–CA5 con evidencia literal.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-19 · orquestador holón 07

Verificado:
1. CA1 — `git fetch --prune` + `branch -a | grep -E 'wp/i2[0-7]'` = vacío
   en `S_SDK-skills-library` (local + remoto).
2. CA2 — `docs/public/favicon.ico` + dist post-build presentes (9395 B);
   vivo 404 OK hasta redeploy Pages.
3. CA3 — grep `<pendiente I40>` en `docs/` = 0.
4. CA4 — nav + sidebar `/guide/publicar-la-web` en `config.mjs`.
5. CA5 — reporte `docs:build` EXIT=0; dist con favicon.
6. Diff acotado (docs + reporte); sin BACKLOG/I50–I52/bump; sin HOLONES.

Merge: `wp/i28-housekeeping-v4-v5-v6` → `main` · worktrees retirados.
Ola housekeeping V4+V5+V6 **cerrada**.
