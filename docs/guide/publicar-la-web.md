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
| CI / deploy | `.github/workflows/docs.yml` → GitHub Pages · `<pendiente I11>` |
| Dominio publicado | `https://s-sdk.escrivivir.co/` (DE-I2; `base` VitePress pensado `/`) |
| CNAME en repo | `docs/public/CNAME` = `s-sdk.escrivivir.co` · `<pendiente I11>` |
| Árbol VitePress (config / theme) | `docs/.vitepress/` · `<pendiente I10>` |

El workflow **no** publica paquetes npm ni skills: solo construirá el
sitio y, en `main`, lo subirá a Pages · `<pendiente I11>`.

Hoy los scripts del raíz son planos (`vitepress … docs`); no regeneran
specs (frágil #6 del pipeline zeus: aquí no aplica).

---

## Ciclo local

### 1. Editar

Todo el portal vive bajo `docs/`. Esta guía está en `docs/guide/`.
Autoridades ya presentes: `docs/autoridades/`.

La navegación (nav / sidebar) vivirá en `docs/.vitepress/config.mjs`
(`<pendiente I10>`): si añadís una página nueva que deba aparecer en el
menú, enlazadla ahí cuando el árbol exista.

### 2. Previsualizar

```bash
npm run docs:dev
```

Arranca VitePress sobre `docs/` (script del `package.json` raíz). Requiere
dependencia `vitepress` instalada · `<pendiente I10>`.

### 3. Construir

```bash
npm run docs:build
```

Ejecuta `vitepress build docs`. Salida estática esperada:
`docs/.vitepress/dist` · `<pendiente I10>` (árbol + dep).

Si el build falla en local, el job de Actions también fallará: no
empujéis `docs/**` a `main` sin verde aquí · `<pendiente I11>` (CI).

---

## Publicar (Actions → Pages)

Workflow canónico: `.github/workflows/docs.yml` en la raíz de este repo
· **`<pendiente I11>`** (este WP no lo escribe).

Forma prevista al cerrar I11 (alineada a BACKLOG WP-I11; no inventar
pasos fuera de ese CA):

### Qué lo disparará · `<pendiente I11>`

| Evento | Efecto previsto |
| ------ | --------------- |
| `push` a `main` o `wp/**` con cambios bajo `docs/**` | job de build |
| `pull_request` con cambios bajo `docs/**` | solo build (sin deploy) |
| `workflow_dispatch` | build manual; deploy solo si la ref es `main` |

Un push que **no** toque `docs/**` no correrá este workflow (economía de
builds; frágil #7: gap de paths a documentar en I11). Para forzar un
rebuild sin tocar Markdown: Actions → Docs → **Run workflow** ·
`<pendiente I11>`.

### Qué hará el job · `<pendiente I11>`

1. `npm ci` (frágil #4: coherente con lockfile)
2. `npm run docs:build`
3. Si la ref es `main` y el evento no es PR: sube el artefacto
   `docs/.vitepress/dist` y el job `deploy` publica en el environment
   `github-pages`.

En ramas `wp/**` el build valida el portal; **no** despliega. El sitio
vivo solo cambia al mergear (o pushear) a `main` con verde.

### Camino típico

1. Rama `wp/…`, editá `docs/**`, `npm run docs:build` en local
   (verde cuando I10 esté ✅).
2. Push → Actions corre build en la rama · `<pendiente I11>`.
3. Merge a `main` → build + deploy Pages · `<pendiente I11>`.
4. Push del **raíz** a remoto: solo tras validación orquestador +
   vigilante (DE-I13). Este documento no autoriza `git push`.

---

## Dominio custom + HTTPS

Código: VitePress con `base` pensado para hostname propio (`/` o
`SSDK_DOCS_BASE` con guard · `<pendiente I10>`, frágil #2) — no para el
path `/…/` de `*.github.io` sin guard.

Ops (Settings del repo, no del workflow; DE-I2):

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. **Custom domain:** `s-sdk.escrivivir.co`.
3. Tras DNS válido: **Enforce HTTPS**.

DNS (gestor del dominio `escrivivir.co`), registro típico:

```text
CNAME  s-sdk  →  alephscriptorium-eng.github.io
```

El fichero `docs/public/CNAME` con el mismo hostname lo aporta I11
(frágil #1) · `<pendiente I11>`.

Hasta que el CNAME + Custom domain + HTTPS estén activos, la URL de
fallback de Pages puede seguir siendo la de `github.io`; el portal con
`base: '/'` está pensado para el dominio custom.

---

## Checklist rápido

- [ ] Editaste solo lo que debe publicarse bajo `docs/`
- [ ] `npm run docs:dev` — se ve bien en local · `<pendiente I10>` si
      falta vitepress / config
- [ ] `npm run docs:build` — verde · `<pendiente I10>`
- [ ] Push con path `docs/**` (o `workflow_dispatch` en `main`) ·
      `<pendiente I11>` + GO DE-I13 para el raíz
- [ ] Tras merge a `main`: run verde de Docs + Pages actualizado ·
      `<pendiente I11>`
- [ ] Si tocás dominio: CNAME DNS + Custom domain + Enforce HTTPS
      (`s-sdk.escrivivir.co` → `alephscriptorium-eng.github.io`)
- [ ] `docs/public/CNAME` presente · `<pendiente I11>`
