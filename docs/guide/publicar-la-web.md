# Publicar la web (portal de docs)

Cómo regenerar y publicar el portal VitePress de este repo (holón 07 /
SCRIPT_SDK). Doctrina operativa: qué editar, qué comandos corren, qué
disparará Actions y qué queda en Settings / DNS.

Estilo y ciclo tomados del portal hermano zeus
(`zeus-sdk/docs/guide/publicar-la-web.md`, solo lectura); aquí los
comandos calzan con el `package.json` de este raíz.

---

## Piezas

| Pieza | Dónde |
| ----- | ----- |
| Fuente Markdown / VitePress | `docs/` (este repo) |
| Dev local | `npm run docs:dev` |
| Build estático | `npm run docs:build` |
| CI / deploy | `.github/workflows/docs.yml` → GitHub Pages |
| Dominio publicado | `https://s-sdk.escrivivir.co/` (DE-I2; `base` VitePress pensado `/`) |
| CNAME en repo | `docs/public/CNAME` = `s-sdk.escrivivir.co` |
| Árbol VitePress (config / theme) | `docs/.vitepress/` (I10 ✅) |

El workflow **no** publica paquetes npm ni skills: solo construye el
sitio y, en `main`, lo sube a Pages.

Hoy los scripts del raíz son planos (`vitepress … docs`); no regeneran
specs (frágil #6 del pipeline zeus: aquí no aplica).

---

## Ciclo local

### 1. Editar

Todo el portal vive bajo `docs/`. Esta guía está en `docs/guide/`.
Autoridades ya presentes: `docs/autoridades/`.

La navegación (nav / sidebar) vive en `docs/.vitepress/config.mjs`:
si añadís una página nueva que deba aparecer en el menú, enlazadla ahí.

### 2. Previsualizar

```bash
npm run docs:dev
```

Arranca VitePress sobre `docs/` (script del `package.json` raíz).

### 3. Construir

```bash
npm run docs:build
```

Ejecuta `vitepress build docs`. Salida estática:
`docs/.vitepress/dist`.

Si el build falla en local, el job de Actions también fallará: no
empujéis `docs/**` a `main` sin verde aquí.

---

## Publicar (Actions → Pages)

Workflow canónico: `.github/workflows/docs.yml` en la raíz de este repo
(WP-I11; variante library exportada con `npm ci`).

### Qué lo dispara

| Evento | Efecto |
| ------ | ------ |
| `push` a `main` o `wp/**` con cambios bajo `docs/**` | job de build |
| `pull_request` con cambios bajo `docs/**` | solo build (sin deploy) |
| `workflow_dispatch` | build manual; deploy solo si la ref es `main` |

Un push que **no** toque `docs/**` no corre este workflow (economía de
builds; frágil #7). Cambios solo en `package.json` / lock / el propio
YAML tampoco disparan el job. Mitigación: Actions → Docs → **Run
workflow** (`workflow_dispatch`), o un push que toque `docs/**`.

### Qué hace el job

1. `npm ci` (frágil #4: coherente con lockfile)
2. `npm run docs:build` (sin spec-gen; frágil #6)
3. Si la ref es `main` y el evento no es PR: sube el artefacto
   `docs/.vitepress/dist` y el job `deploy` publica en el environment
   `github-pages`.

En ramas `wp/**` el build valida el portal; **no** despliega. El sitio
vivo solo cambia al mergear (o pushear) a `main` con verde.

### Camino típico

1. Rama `wp/…`, editá `docs/**`, `npm run docs:build` en local (verde).
2. Push → Actions corre build en la rama (paths `docs/**`).
3. Merge a `main` → build + deploy Pages.
4. Push del **raíz** a remoto: solo tras validación orquestador +
   vigilante (DE-I13). Este documento no autoriza `git push`.

---

## Dominio custom + HTTPS

Código: VitePress con `base` pensado para hostname propio (`/` o
`SSDK_DOCS_BASE` con guard MSYS, frágil #2) — no para el path `/…/` de
`*.github.io` sin guard.

Ops (Settings del repo, no del workflow; DE-I2):

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. **Custom domain:** `s-sdk.escrivivir.co`.
3. Tras DNS válido: **Enforce HTTPS**.

DNS (gestor del dominio `escrivivir.co`), registro típico:

```text
CNAME  s-sdk  →  alephscriptorium-eng.github.io
```

El fichero `docs/public/CNAME` lleva el mismo hostname (frágil #1).

Hasta que el CNAME DNS + Custom domain + HTTPS estén activos, la URL de
fallback de Pages puede seguir siendo la de `github.io`; el portal con
`base: '/'` está pensado para el dominio custom.

---

## Checklist rápido

- [ ] Editaste solo lo que debe publicarse bajo `docs/`
- [ ] `npm run docs:dev` — se ve bien en local
- [ ] `npm run docs:build` — verde
- [ ] Push con path `docs/**` (o `workflow_dispatch` en `main`) + GO
      DE-I13 para el raíz
- [ ] Tras merge a `main`: run verde de Docs + Pages actualizado
- [ ] Si tocás dominio: CNAME DNS + Custom domain + Enforce HTTPS
      (`s-sdk.escrivivir.co` → `alephscriptorium-eng.github.io`)
- [ ] `docs/public/CNAME` = `s-sdk.escrivivir.co` presente en el repo
