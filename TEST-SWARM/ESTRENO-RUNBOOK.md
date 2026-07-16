# Runbook — estreno público (WP-D22)

Publicar a `origin` (`github.com/alephscriptorium-eng/S_SDK`) desde **este**
repo (DE-7 ampliada por DA-4): `main` **huérfana = `docs/` (el sitio) +
`TEST-SWARM/` (el ensayo conservado)**; `draft` = backstage local que **nunca**
se sube.

**Precondiciones:** WP-D20 ✅ (sitio en `TEST-SWARM/docs/`).

**Credencial (DA-5):** nadie hace `git push` salvo el custodio. Los workers
dejan el runbook escrito y **probado en seco**; el push y Pages son actos
exclusivos del custodio.

**Conservación (DA-4):** el ensayo entero se publica junto con `docs/` en la
`main` huérfana. Nota al push: `TEST-SWARM` incluye el acta v1 (`.htm`) como
fuente histórica; si el custodio no la quiere pública, excluirla en el paso 3.

---

## Runbook (Git Bash)

`draft` ya conserva el backstage (`e18ff9c`).

```bash
# 0. PRECONDICIONES: WP-D20 ✅ (sitio en TEST-SWARM/docs/).
#    NUNCA:  git push origin draft   (draft es backstage, se queda en local)
# 1. Salvar el ensayo FUERA del repo (checkout --orphan arrastra el árbol).
cp -r TEST-SWARM ../_ensayo
# 2. Rama huérfana, sin historia ni árbol backstage.
git checkout --orphan main-sitio
git rm -rf .                          # vacía árbol e índice heredados
# 3. El sitio a docs/ raíz; el ensayo a TEST-SWARM/ (sin duplicar el sitio).
#    Nada de la raíz backstage: ni HIPOTESIS, ni DEVOPS, ni LLM.md, ni docs/autoridades.
mkdir docs && cp -r ../_ensayo/docs/* docs/
rm -rf TEST-SWARM                           # evita cp anidado si quedó resto untracked
cp -r ../_ensayo TEST-SWARM && rm -rf TEST-SWARM/docs
#    (llamada del custodio, DA-4: excluir aquí el acta v1 .htm si no la quiere pública)
git add docs TEST-SWARM && git commit -m "docs: pack demo + ensayo para Pages"
# 4. main pasa a ser la huérfana; el backstage sigue vivo en draft.
git branch -D main                    # su historia sigue en draft
git branch -m main-sitio main
rm -rf ../_ensayo
# 5. (SOLO CUSTODIO) push y Pages:
git push -u origin main
#    GitHub → Settings → Pages → Deploy from branch → main → /docs → Save
```

---

## Dry-run (worker — sin tocar `main` ni `draft`)

El worker **no ejecuta** los pasos 4–5. Ejecutar desde la raíz del repo:

```bash
bash TEST-SWARM/estreno-dry-run.sh
```

El script crea `main-sitio`, verifica el árbol (huérfana, solo `docs/` +
`TEST-SWARM/`, sin backstage ni sitio duplicado), borra la rama de
usar-y-tirar y limpia `../_ensayo`. `main` y `draft` deben quedar con el mismo
SHA que antes.

---

## Criterios de aceptación (BACKLOG)

**En seco:** `main-sitio` resulta huérfana (`git log` sin ancestros) y contiene
solo `docs/` + `TEST-SWARM/` (grep: cero raíz backstage —HIPOTESIS, DEVOPS,
LLM.md, autoridades—; sin sitio duplicado); `main` y `draft` intactas tras el
dry-run.

**Real (custodio):** URL viva sirviendo el pack; la moira funciona en Pages (JS
estático); `origin` sin rastro de `draft`.

---

## Notas del worker (2026-07-16)

- El paso `git rm -rf .` en huérfana elimina el índice heredado; es esperado
  que liste miles de `rm` del árbol backstage.
- `../_ensayo` vive un nivel arriba del repo; conviene borrarlo siempre al
  terminar (dry-run o real).
- Antes del paso 3, `rm -rf TEST-SWARM` si el árbol huérfano dejó restos
  untracked; sin ello `cp -r ../_ensayo TEST-SWARM` anida en
  `TEST-SWARM/_ensayo/`.
- Pages sirve desde `/docs` en la rama `main` (DE-7); el sitio queda en la
  raíz del repo publicado como `docs/index.html`.
- Rama de trabajo del WP: `wp/d22-estreno-publico`; worktree
  `../SCRIPT_SDK-wp-d22`. Evidencia del dry-run en
  `plan/REPORTES/WP-D22-estreno-publico.md`.
