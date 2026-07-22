# WP-S05b · encoding catálogo — reporte

| dato | valor |
| ---- | ----- |
| agente | S05b (micro · residual S05) |
| fecha | 2026-07-22 |
| rama | `wp/sb-s05b-encoding` |
| worktree | `C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s05b-encoding` |
| commit hermano (post-push) | **`4068cd2`** (`4068cd2dc377f4f35bea57b386611a335d9dcf55`) |
| eje(s) CA | III · IV + ceguera (superficie docs) |
| estado propuesto | listo para revisión / merge → deploy Pages |

## Qué se hizo

Reescritura UTF-8 limpia de `docs/.vitepress/skills-meta.js` (barrido
completo: comentarios + `Orquestación` / `Publicación` / `catálogo` /
`agnóstico` / `aquí` / `añade` / `categoría` / raya `—`). Fix preventivo
mínimo: `.gitattributes` con `working-tree-encoding=UTF-8` en
`docs/.vitepress/*.js`. **No** se tocó `skills/` (∥ S03 / B-2).

## Causa raíz

Commit **`1bf64ca`** (`docs(site-web): portal consumo 0.4.0…`, merge S05
`b52c4cf`) introdujo el doble encoding.

Paso concreto (rescate bosque-orq en worktree `sb-s05-site-web`, transcript
`96493a90…`):

```powershell
$meta = Get-Content ...\skills-meta.js -Raw
$meta = $meta -replace "version: '0\.5\.0'", "version: '0.6.0'"
# (+ más -replace de tags)
Set-Content -Path ...\skills-meta.js -Value $meta -NoNewline
```

En Windows PowerShell, `Get-Content` **sin** `-Encoding utf8` decodifica
bytes UTF-8 como ANSI (CP1252): `ó` (`C3 B3`) → chars `Ã`+`³`. Luego
`Set-Content` (default UTF-8 en PS≥6 / o re-escritura UTF-8 del string ya
corrupto) persiste `Ã³` como UTF-8 (`C3 83 C2 B3`). Resultado clásico
`OrquestaciÃ³n` / `PublicaciÃ³n` / `â€"` (raya).

## Fix preventivo

1. **Inmediato:** escribir JS del portal con Node
   `fs.writeFileSync(..., 'utf8')` o PowerShell
   `Set-Content -Encoding utf8` **y** `Get-Content -Encoding utf8`.
2. **Repo:** `.gitattributes` —
   `docs/.vitepress/*.js text working-tree-encoding=UTF-8 eol=lf`
   (+ `*.js/*.mjs/*.md/*.vue text eol=lf`).

## Archivos tocados (hermano)

- `docs/.vitepress/skills-meta.js` — UTF-8 limpio (versión `0.6.0` + tags
  `convivencia` / `multi-carril` conservados)
- `.gitattributes` — nuevo

Veto respetado: `skills/**` · zeus · GL · pins · DECISIONES raíz.

## Evidencia CA

| check | resultado |
| ----- | --------- |
| `git grep "Ã"` (repo hermano, rama tip) | **0** (exit 1) |
| `npm run docs:build` | **EXIT=0** (~9.9s) |
| dist acentos | 5 assets con `Orquestación`; **0** mojibake |
| Docs CI | **success** run [`29921673095`](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29921673095) · sha `4068cd2` · branch `wp/sb-s05b-encoding` |

### C8 · catálogo

- **Cómo se sirve:** `skills-meta.js` → `skills-data.js` →
  `theme/components/SkillsCatalogo.vue` embebido en `docs/catalogo.md`
  (`<SkillsCatalogo />`). Dominio: `skills.s-sdk.escrivivir.co` (CNAME).
- **URL:** https://skills.s-sdk.escrivivir.co/catalogo
- **Evidencia build (rama):** theme chunk del dist local contiene
  `Orquestación` / `Publicación` (sin `Ã`).
- **Vivo pre-merge:** Pages solo despliega desde `main` → el vivo **aún**
  muestra `OrquestaciÃ³n` / `PublicaciÃ³n` en HTML +
  `/assets/chunks/theme.*.js` hasta merge+deploy. Post-merge esperado:
  mismos strings limpios en esa URL.

## Auto-revisión

- [x] Diff solo `.gitattributes` + `docs/.vitepress/skills-meta.js`
- [x] Sin tocar `skills/` (compatible ∥ S03)
- [x] Causa raíz + preventivo documentados e implementados
- [x] grep / build / CI verdes
- [x] C8 documentado (build OK; vivo pendiente merge→deploy)
- [x] Worktrees S03: ninguno presente; solo `sb-s05b-encoding`

## Aviso gate / cierre S05b

```text
AVISO · S05b · encoding catálogo · listo merge
Hermano tip rama: 4068cd2 (wp/sb-s05b-encoding)
CA: grep Ã=0 · docs:build=0 · Docs run 29921673095 success
C8 vivo: pendiente merge→Pages; build/dist ya limpio
Causa: Set-Content sin -Encoding utf8 en rescate S05 (1bf64ca)
Preventivo: .gitattributes working-tree-encoding=UTF-8
```
